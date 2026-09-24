# Project Memory

Updated: 2026-09-24

## Current state

- Repository root is `C:\portfolio`; `main` is a clean root commit `6e3b5e3` tracking `origin/main`. The full pre-cleanup local history is preserved at `backup/main-before-video-cleanup` (`4741ebe`).
- The app is a Vite + TypeScript static page (`src/main.ts`, `src/style.css`) with output in `dist/`; no server or router is needed. The user will create the Vercel project themselves after the GitHub update.
- `content/contentfromrazi.md` is the user-provided portfolio brief and was already modified before implementation; preserve that edit.
- Selected Work features the five projects in `content/` (three AI&You, two AIRS Foundry) plus one combined AIRS Forge & Memory Infrastructure card at baseline only; Experience expands both job histories.
- AutoDev's eight supplied JPEG screenshots are imported from `content/airsfoundry/autodev/` and described individually in the AutoDev case-study gallery. Its expanded feature grid summarizes assistant modes, Supervisor/Worker/QC fleet, planning, workspace, integrations, code intelligence and operations. The complete user-provided catalog is bundled at `public/autodev-feature-list/index.html` and linked from the case study; source is `autodev-feature-list/index.html` (1,264 features, 17 sections, 204 subsections). This is also grounded in the `autodev` repository's `sidecar-backup` branch. Video poster frames are in `public/images/`; no MP4 is copied into `dist/`.
- Arcade's expanded feature grid explains LivingAgent continuity, three-tier memory, A2A collaboration, MCP surfaces, model/memory-provider choice with circuit breakers, and product deployment, grounded in the user brief and `core-orchestrator` source.
- User supplied nine Google Drive demo links mapped to the five original work folders; all nine public preview pages returned 200 with titles matching their expected clips. Case studies show a matching poster first, load the Drive preview iframe on click, and keep direct-open fallbacks. User authorized copying `C:\Data Pribadi\Razi Ashary-resume.pdf` to `public/resume.pdf` for download.
- Forge references in `C:\AIRS Foundry Repositories\Four Pillars` were reviewed. Its 28-page visualizer report shows internal operational/test screens, so public work uses a purpose-made high-level illustration and omits dataset details, screenshots and internal mechanics.
- `.gitignore` covers supplied MP4s. All nine physical files remain in `content/` and match the ignore rule; neither current `main` nor `dist/` contains MP4s. The local backup ref preserves the old video-bearing history.
- GitHub `origin/main` was pushed and verified at `6e3b5e3`; it has no MP4 entries. `vercel.json` selects the Vite framework, `npm run build`, and `dist` output. The repository is ready to connect to a Vercel project; no Vercel account/project was linked in this session.

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
- `public/resume.pdf` and the Forge overview image both return HTTP 200 from the production preview. `dist/` contains no MP4 files; the nine ignored local source videos total about 1.09 GB and their Git history is only on the local backup branch.
- `npm run build` passes after the latest changes. The production preview rendered the AutoDev case study with three poster previews; clicking one creates the corresponding Drive iframe. The `dist/` output has zero MP4s.
- The production preview returns HTTP 200 for the site and resume; the resume is served as `application/pdf`. Vercel's official configuration docs support `framework`, `buildCommand`, and `outputDirectory` in `vercel.json`.
- The user-requested browser preview remains open on port 4173. The user's edit to `content/contentfromrazi.md` and temporary `tmp/` folder remain unstaged and untouched.
