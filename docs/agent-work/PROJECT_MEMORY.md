# Project Memory

Updated: 2026-09-24

## Current state

- Repository root is `C:\portfolio`; branch is `main`; the portfolio was committed as `267a926` before the follow-up Arcade/AutoDev expansion.
- The app is a Vite + TypeScript static page (`src/main.ts`, `src/style.css`) with output in `dist/`; no server or router is needed.
- `content/contentfromrazi.md` is the user-provided portfolio brief and was already modified before implementation; preserve that edit.
- Selected Work features the five projects in `content/` (three AI&You, two AIRS Foundry) plus one combined AIRS Forge & Memory Infrastructure card at baseline only; Experience expands both job histories.
- AutoDev's eight supplied JPEG screenshots are imported from `content/airsfoundry/autodev/` and described individually in the AutoDev case-study gallery. The case study now explains the assistant modes, Supervisor/Worker/QC fleet, task planning, IDE/Git tools, MCP/GitHub, Skills/Hooks/Recipes, repository graph/unfinished Code City, and operational visibility. This is based on `autodev-feature-list/index.html` (1,264 features, 17 sections, 204 subsections) and the `autodev` repository's `sidecar-backup` branch. Video poster frames are in `public/images/`; no MP4 is copied into `dist/`.
- User supplied nine Google Drive demo links mapped to the five original work folders; all nine public preview pages returned 200 with titles matching their expected clips. Case studies show a matching poster first, load the Drive preview iframe on click, and keep direct-open fallbacks. User authorized copying `C:\Data Pribadi\Razi Ashary-resume.pdf` to `public/resume.pdf` for download.
- Forge references in `C:\AIRS Foundry Repositories\Four Pillars` were reviewed. Its 28-page visualizer report shows internal operational/test screens, so public work uses a purpose-made high-level illustration and omits dataset details, screenshots and internal mechanics.
- `.gitignore` now covers supplied MP4 files, but those MP4s remain tracked in the initial Git commit.
- User authorized pushing to `main` after verification.
- GitHub's `origin` currently has no refs. The original local history contains nine MP4s, three above GitHub's 100 MiB limit. The user has now explicitly authorized doing what is needed to publish `main`; preserve the existing history under a local backup ref, then create a clean root commit excluding MP4s while leaving the ignored source files in place.

## Authorities

- Career facts, dates, descriptions, and requested repo research: [`../../content/contentfromrazi.md`](../../content/contentfromrazi.md)
- Checkable delivery criteria: [`GOAL.md`](GOAL.md)
- Source map: [`PROJECT_MAP.md`](PROJECT_MAP.md)

## Decisions

- Use a winter palette; feature all five projects from `content/` plus a single high-level Forge/memory case study that avoids AIRS proprietary details. Keep expanded job details in Experience.
- Embed the supplied public demo links in the matching project details. Keep original MP4s outside Vercel output and offer the user-authorized resume as a static download.

## Progress and evidence

- Initial repo inspection found no app files or project-level `AGENTS.md`.
- Source research completed in `core-orchestrator` and AutoDev's `sidecar-backup`; implementation details were traced for LivingAgent, the episodic/semantic/procedural memory layers and continuity packets, HTTP/stdio MCP transports, multi-provider model layer, session/chat streaming gateway, and memory-provider circuit breakers. AutoDev's feature-list HTML was reviewed by all major sections and targeted catalog entries. Scale/timeline claims use the user's brief; avoid asserting a 100+ registry count because the current inspected model registry contains 73 predefined entries.
- The production browser showed all six cards, expanded Experience, the eight-image AutoDev gallery and the restrained Forge/memory card. Latest browser review confirmed the expanded AutoDev and Arcade capability lists, with story/features placed before the demo and gallery content. A Drive video opened directly with a playable preview page; the embed iframe is present, with a direct-link fallback for browser-specific embedding limits.
- `public/resume.pdf` and the Forge overview image both return HTTP 200 from the production preview. `dist/` contains no MP4 files; source videos total about 1.09 GB and remain tracked in the initial Git commit.
- `npm run build` passes after the latest changes. The production preview rendered the AutoDev case study with three poster previews; clicking one creates the corresponding Drive iframe. The `dist/` output has zero MP4s.
- Publishing is in progress: preserve the original history locally, rewrite the first-push `main` to exclude the nine MP4 blobs, rebuild, push to the currently empty remote, and verify its branch contents. The existing user edit to `content/contentfromrazi.md` and temporary `tmp/` folder must remain untouched.
