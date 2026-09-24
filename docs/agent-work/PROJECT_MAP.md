# Project Map

## Initial evidence

```mermaid
flowchart LR
  Brief[content/contentfromrazi.md] --> Career[Expanded AI&You and AIRS experience]
  AIYou[Mercedes Mercury, Live Design Chatbot, ComfyUI] --> Work[Selected-work cards]
  Arcade[Arcade source code and demo clips] --> Work
  AutoDev[AutoDev screenshots and source] --> Work
  ForgeMemory[Four Pillars PDFs] --> ForgeCard[Baseline Forge and memory overview]
  ForgeCard --> Work
  Core[core-orchestrator repository] -. verified implementation details .-> Work
  Vite[Vite + TypeScript] --> Portfolio[Single-page portfolio]
  Career --> Portfolio
  Work --> Portfolio
  Portfolio --> Static[Static production output without video files]
  Static --> Vercel[Vercel hosting]
```

## Ownership and flow

- The brief owns the narrative and career timeline.
- The referenced AIRS Foundry repositories are evidence sources for technical product descriptions, not runtime dependencies.
- This repository owns the portfolio app and lightweight video poster frames; AutoDev's eight supplied screenshots are imported directly from `content/airsfoundry/autodev/` into the static build.
- Selected Work includes the five projects in `content/` and one combined Forge/memory case study. The user limited that case study to a baseline due to AIRS Foundry proprietary information; the detailed internal screenshots are not published.
- User-provided Google Drive URLs populate matching demos; original MP4 files stay out of the static output. The authorized resume is served as `public/resume.pdf`.
- Build output is static and is served by Vercel; no API or database is required by the initial scope.
