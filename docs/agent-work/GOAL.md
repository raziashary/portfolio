# Portfolio Website Goal

## Objective

Build a polished, responsive, single-page portfolio in this repository using Vite and TypeScript, with static output suitable for Vercel Hobby. Feature the five projects represented in `content/` plus one restrained AIRS Forge & Memory Infrastructure overview. Give both jobs a clear, expanded account of the supplied responsibilities and outcomes.

## Scope anchor

- Content and career timeline: [`content/contentfromrazi.md`](../../content/contentfromrazi.md)
- Supplied project media: `content/aiandyou/` and `content/airsfoundry/`
- Referenced engineering repositories: `C:\AIRS Foundry Repositories\core-orchestrator` and `C:\AIRS Foundry Repositories\autodev` (`sidecar-backup` branch)
- AutoDev feature catalog: `C:\AIRS Foundry Repositories\autodev-feature-list\index.html`

## Completion outcomes and proof

| Outcome | Proof |
| --- | --- |
| Portfolio communicates both roles, timeline, selected systems, and supplied project evidence accurately | Review rendered page against the content brief and referenced repositories |
| Selected Work features all five projects represented in `content/` plus one baseline AIRS Forge & Memory Infrastructure overview | Inspect the six cards; verify five original projects and the restrained Forge/memory story |
| AutoDev case study includes all eight supplied screenshots with accurate explanatory captions | Open the AutoDev case study and inspect the screenshot gallery |
| AutoDev explains its major product areas using the supplied feature catalog and source branch | Review rendered case study against the 1,264-feature catalog (17 sections, 204 subsections) and `autodev`'s `sidecar-backup` source |
| Arcade explains its agent, memory, MCP, model-routing and gateway work using the referenced backend | Review rendered case study against `core-orchestrator`, its memory MCP service, and the user's brief |
| Supplied demonstration links appear in matching case studies, resolve to public Drive previews and remain usable if embeds are blocked | Verify all nine Drive preview pages plus each case study's iframe and fallback link; MP4s must not appear in `dist/` |
| Resume downloads from the contact section | Follow the resume link and confirm the bundled PDF opens |
| Site works on desktop and narrow screens with accessible navigation and media | Run the local production build and inspect representative desktop/mobile browser views |
| Project builds as a static Vercel-ready app without server dependencies | `npm run build`; inspect generated output and deployment config |
| Main route starts and responds through the normal development/preview entry point | Run local preview and verify HTTP response and browser rendering |
| No verification process remains running | Stop the preview process and confirm its listener has closed |

## Decisions and constraints

- User selected Vite + TypeScript and a winter visual theme.
- User confirmed the five original works: three AI&You projects and two AIRS Foundry projects. Add one extra combined AIRS Forge & Memory Infrastructure card at baseline only; keep internal mechanics and data out of the public presentation.
- User supplied public Drive links for the five project folders (nine clips total); the app supports public Drive, YouTube, or direct MP4 URLs.
- User authorized copying the supplied resume into the repository for public download.
- Keep the app static and avoid paid services or server-side features.
- Keep video assets outside the static deployment bundle. `.gitignore` now includes `content/**/*.mp4`, but existing videos are already tracked in the original commit.
- Preserve the user's existing edit to the content brief.
- User explicitly authorized pushing to `main` after the work is complete and verified.

## Progress

- [x] Read the brief, inspect repository state, identify provided media and references.
- [x] Inspect referenced repositories and choose fact-checked portfolio claims.
- [x] Build the responsive portfolio and static deployment setup.
- [x] Add all five content projects, all eight AutoDev screenshots with captions and the baseline Forge/memory overview.
- [x] Map all nine demos; verify the public Drive preview pages and embed/fallback links.
- [x] Add downloadable resume; inspect desktop work cards, AutoDev gallery and Forge overview in browser. Earlier mobile navigation and responsive layout check passed; final CSS preserves single-column mobile cards and gallery.
- [ ] Resolve already-tracked large videos before the first push; obtain authorization for any history rewrite.
- [x] Build and smoke-check the final output; verify poster-first video loading and final browser rendering.
- [x] Expand and browser-review the AutoDev and Arcade capability summaries against their referenced source material.
- [ ] Commit the expanded stories; preserve the original video-bearing history locally, publish a clean `main` without MP4 blobs, and verify the remote result.
