import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { captureVisuals } from "./visual-capture.mjs";

const rootDir = process.cwd();
const cacheDir = path.join(rootDir, ".visual-cache");
const model = process.env.VISUAL_MODEL ?? "gpt-5-mini";

function criticPrompt(manifest) {
  return `You are a hyper-critical elite UI/UX QA engineer reviewing a personal portfolio website.

Judge ONLY the supplied screenshots and compact manifest. Do not invent issues that are not visible.

Look specifically for:
- overlapping text or UI
- text wrapping bugs
- clipped content
- uneven padding or margins
- weak hierarchy
- poor color contrast
- broken responsive grid/flex behavior
- generic AI-template visual patterns
- sections that feel visually repetitive or too text-heavy

Return strict markdown:

## Verdict
Clean: yes/no

## Critical Issues
- file/section hint: issue, why it matters, exact visual fix

## Refinements
- issue, exact visual fix

## Positive Notes
- what is working visually

Manifest:
${JSON.stringify(manifest, null, 2)}`;
}

function extractTextFromResponse(payload) {
  if (typeof payload.output_text === "string") return payload.output_text;

  const chunks = [];
  for (const item of payload.output ?? []) {
    for (const content of item.content ?? []) {
      if (content.type === "output_text" && content.text) chunks.push(content.text);
    }
  }
  return chunks.join("\n").trim();
}

async function callVisionCritic(manifest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const content = [{ type: "input_text", text: criticPrompt(manifest) }];

  for (const artifact of manifest.artifacts) {
    const image = await readFile(artifact.screenshot);
    content.push({
      type: "input_image",
      image_url: `data:image/png;base64,${image.toString("base64")}`,
      detail: "high",
    });
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: "user",
          content,
        },
      ],
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`OpenAI vision critique failed: ${response.status} ${body}`);
  }

  return extractTextFromResponse(await response.json());
}

function localFallbackAudit(manifest) {
  const issues = [];

  for (const artifact of manifest.artifacts) {
    if (artifact.metrics.scrollWidth > artifact.width + 2) {
      issues.push(
        `- ${artifact.name}: horizontal overflow detected (${artifact.metrics.scrollWidth}px content width in ${artifact.width}px viewport).`,
      );
    }
    if (!artifact.metrics.headings.some((heading) => heading.tag === "h1")) {
      issues.push(`- ${artifact.name}: missing visible h1 in heading scan.`);
    }
  }

  return `## Verdict
Clean: ${issues.length === 0 ? "yes" : "no"}

## Critical Issues
${issues.length ? issues.join("\n") : "- No automated structural issues detected. Vision critique was skipped because OPENAI_API_KEY is not set."}

## Refinements
- Run with OPENAI_API_KEY to perform pixel-level visual critique for spacing, contrast, repetition, and responsive alignment.

## Positive Notes
- Screenshots were captured successfully for desktop and mobile.
- The manifest stayed compact and avoided raw DOM dumps.`;
}

function isClean(report) {
  return /Clean:\s*yes/i.test(report);
}

function developerPrompt(report) {
  return `Use this visual audit as direct implementation feedback. Patch the relevant React/Tailwind/CSS files, then rerun npm run visual-refine.

${report}`;
}

async function run() {
  const manifest = await captureVisuals();
  const prompt = criticPrompt(manifest);
  await writeFile(path.join(cacheDir, "refinement-prompt.md"), prompt);

  const aiReport = await callVisionCritic(manifest);
  const report = aiReport ?? localFallbackAudit(manifest);

  await writeFile(path.join(cacheDir, "visual-audit.md"), report);
  await writeFile(path.join(cacheDir, "developer-refine-prompt.md"), developerPrompt(report));

  console.log(report);
  console.log(`\nArtifacts written to ${cacheDir}`);

  if (!isClean(report)) {
    process.exitCode = 1;
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
