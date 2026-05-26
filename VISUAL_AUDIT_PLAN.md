# Visual UI Feedback & Refinement Loop

## Tool Choice

I chose **Playwright** as the core visual automation engine.

## Why Playwright

The modern browser-agent ecosystem is moving toward a hybrid model: use structured browser state for deterministic targeting, and use screenshots only when visual judgment is required. Playwright is the best local foundation for this project because it is stable, fast, framework-agnostic, and already supports the exact primitives needed here: launching Chromium, setting viewports, waiting for layout readiness, reading accessibility-oriented page state, and taking full-page screenshots.

Research notes:

- Playwright MCP documentation describes the default interaction model as accessibility snapshots, with screenshots used when vision is needed. This avoids feeding raw DOM or huge screenshots into every reasoning step. Sources: [Playwright MCP snapshots](https://playwright.dev/mcp/snapshots), [Playwright MCP vision mode](https://playwright.dev/mcp/vision-mode).
- Newer hosted/browser-agent tools like Rove emphasize the same idea: accessibility trees are cheaper and more deterministic than screenshot-only loops. Source: [Rove](https://roveapi.com/).
- Packages like Hyperbrowser Agent and Auto-Browse are promising AI browser wrappers, but they add remote/session complexity for a local portfolio QA loop. Sources: [@hyperbrowser/agent](https://www.npmjs.com/package/%40hyperbrowser/agent), [@auto-browse/auto-browse](https://www.npmjs.com/package/%40auto-browse/auto-browse).
- OpenAI's official vision documentation supports image inputs through the Responses API, which is appropriate for the final visual-critique stage. Source: [OpenAI images and vision](https://platform.openai.com/docs/guides/images?api-mode=responses).

## Architecture

The local loop has three layers:

1. **Capture**
   - `scripts/visual-capture.mjs` starts the local Next server if one is not already available.
   - It opens Chromium with Playwright.
   - It captures full-page screenshots for:
     - Desktop: `1440x900`
     - Mobile: `375x812`
   - It writes artifacts to `.visual-cache/`.

2. **Critique**
   - `scripts/visual-refine.mjs` loads the screenshots and a compact manifest.
   - If `OPENAI_API_KEY` is present, it sends only the screenshots plus a concise prompt to a vision-capable model through the OpenAI Responses API.
   - If no key is present, it still captures screenshots and writes a ready-to-use critic prompt to `.visual-cache/refinement-prompt.md`.

3. **Refinement**
   - The critic output is saved as `.visual-cache/visual-audit.md`.
   - If the report is not clean, the script writes `.visual-cache/developer-refine-prompt.md`, which is designed to be fed directly into the developer context.
   - In this Codex workspace, I can read that report and patch the offending files, then rerun `npm run visual-refine`.

## Token Discipline

The loop avoids raw DOM dumps by default. It captures:

- Two screenshots.
- A small manifest with viewport, URL, title, dimensions, and a few top-level text metrics.
- Optional accessibility/tree information can be added later, but it should be scoped to landmarks and headings rather than full DOM.

This keeps the LLM payload focused on visual quality instead of forcing it to parse thousands of irrelevant nodes.

## Commands

```bash
npm run visual:capture
npm run visual-refine
```

For the full AI critic:

```bash
OPENAI_API_KEY=... npm run visual-refine
```
