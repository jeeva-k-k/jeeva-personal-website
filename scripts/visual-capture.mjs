import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const rootDir = process.cwd();
const cacheDir = path.join(rootDir, ".visual-cache");
const port = Number(process.env.VISUAL_PORT ?? 3001);
const baseUrl = process.env.VISUAL_URL ?? `http://127.0.0.1:${port}`;

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 375, height: 812 },
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchOk(url) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}

async function waitForServer(url, timeoutMs = 30_000) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    if (await fetchOk(url)) return true;
    await wait(500);
  }

  return false;
}

async function startServerIfNeeded() {
  if (await fetchOk(baseUrl)) {
    return { started: false, process: null };
  }

  const child = spawn("npm", ["run", "dev", "--", "-p", String(port)], {
    cwd: rootDir,
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
  });

  child.stdout.on("data", (chunk) => process.stdout.write(`[server] ${chunk}`));
  child.stderr.on("data", (chunk) => process.stderr.write(`[server] ${chunk}`));

  const ready = await waitForServer(baseUrl);
  if (!ready) {
    child.kill("SIGTERM");
    throw new Error(`Timed out waiting for ${baseUrl}`);
  }

  return { started: true, process: child };
}

async function collectPageMetrics(page) {
  return page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll("h1,h2,h3"))
      .slice(0, 24)
      .map((element) => ({
        tag: element.tagName.toLowerCase(),
        text: element.textContent?.trim().slice(0, 140) ?? "",
      }));

    const links = Array.from(document.querySelectorAll("a"))
      .slice(0, 24)
      .map((element) => ({
        text: element.textContent?.trim().slice(0, 80) ?? "",
        href: element.getAttribute("href") ?? "",
      }));

    const body = document.body;
    const html = document.documentElement;

    return {
      title: document.title,
      scrollHeight: Math.max(body.scrollHeight, html.scrollHeight),
      scrollWidth: Math.max(body.scrollWidth, html.scrollWidth),
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      headings,
      links,
    };
  });
}

export async function captureVisuals() {
  await mkdir(cacheDir, { recursive: true });
  const server = await startServerIfNeeded();
  const browser = await chromium.launch({ headless: true });
  const artifacts = [];

  try {
    for (const viewport of viewports) {
      const page = await browser.newPage({
        viewport: { width: viewport.width, height: viewport.height },
        deviceScaleFactor: 1,
      });

      await page.goto(baseUrl, { waitUntil: "load" });
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.waitForLoadState("domcontentloaded");
      await page.evaluate(() => document.fonts?.ready);
      await page.waitForTimeout(700);

      const screenshotPath = path.join(cacheDir, `${viewport.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true, animations: "disabled" });

      const metrics = await collectPageMetrics(page);
      artifacts.push({
        ...viewport,
        url: baseUrl,
        screenshot: screenshotPath,
        metrics,
      });

      await page.close();
    }
  } finally {
    await browser.close();
    if (server.started && server.process) {
      server.process.kill("SIGTERM");
    }
  }

  const manifest = {
    createdAt: new Date().toISOString(),
    baseUrl,
    artifacts,
  };

  await writeFile(path.join(cacheDir, "manifest.json"), JSON.stringify(manifest, null, 2));
  return manifest;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  captureVisuals()
    .then((manifest) => {
      console.log(`Captured ${manifest.artifacts.length} viewport(s) in ${cacheDir}`);
      for (const artifact of manifest.artifacts) {
        console.log(`- ${artifact.name}: ${artifact.screenshot}`);
      }
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
