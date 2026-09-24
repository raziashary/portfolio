# Portfolio Website Goal

## Objective

Build a polished, responsive, single-page portfolio in this repository using Vite and TypeScript, with static output suitable for Vercel Hobby. Feature the five projects represented in `content/` plus one restrained AIRS Forge & Memory Infrastructure overview. Give both jobs a clear, expanded account of the supplied responsibilities and outcomes.

## Scope anchor

- Content and career timeline: [`content/contentfromrazi.md`](../../content/contentfromrazi.md)
- Supplied project media: `content/aiandyou/` and `content/airsfoundry/`
- Referenced engineering repositories: `C:\AIRS Foundry Repositories\core-orchestrator` and `C:\AIRS Foundry Repositories\autodev` (`sidecar-backup` branch)
- AutoDev feature catalog source: `C:\AIRS Foundry Repositories\autodev-feature-list\index.html`; published copy: [`public/autodev-feature-list/index.html`](../../public/autodev-feature-list/index.html)

## Completion outcomes and proof

| Outcome | Proof |
| --- | --- |
| Portfolio communicates both roles, timeline, selected systems, and supplied project evidence accurately | Review rendered page against the content brief and referenced repositories |
| Selected Work features all five projects represented in `content/` plus one baseline AIRS Forge & Memory Infrastructure overview | Inspect the six cards; verify five original projects and the restrained Forge/memory story |
| AutoDev case study includes all eight supplied screenshots with accurate explanatory captions | Open the AutoDev case study and inspect the screenshot gallery |
| AutoDev explains its major product areas and links to the complete supplied feature catalog | Review rendered feature grid and open the bundled 1,264-feature catalog (17 sections, 204 subsections); compare against `autodev`'s `sidecar-backup` source |
| Arcade explains LivingAgent continuity, tiered memory, A2A, MCP, model/provider choice, gateway and deployment | Review rendered feature grid against `core-orchestrator` and the user's brief |
| Supplied demonstration links appear in matching case studies, resolve to public Drive previews and remain usable if embeds are blocked | Verify all nine Drive preview pages plus each case study's iframe and fallback link; MP4s must not appear in `dist/` |
| Resume downloads from the contact section | Follow the resume link and confirm the bundled PDF opens |
| Site works on desktop and narrow screens with accessible navigation and media | Run the local production build and inspect representative desktop/mobile browser views |
| Project builds as a static Vercel-ready app without server dependencies | `npm run build`; inspect generated output and deployment config |
| Main route starts and responds through the normal development/preview entry point | Run local preview and verify HTTP response and browser rendering |
| The user can inspect the finished site in the app | Keep the requested production preview open at `http://127.0.0.1:4173/` and verify it responds |

## Decisions and constraints

- User selected Vite + TypeScript and a winter visual theme.
- User confirmed the five original works: three AI&You projects and two AIRS Foundry projects. Add one extra combined AIRS Forge & Memory Infrastructure card at baseline only; keep internal mechanics and data out of the public presentation.
- User supplied public Drive links for the five project folders (nine clips total); the app supports public Drive, YouTube, or direct MP4 URLs.
- User authorized copying the supplied resume into the repository for public download.
- Keep the app static and avoid paid services or server-side features.
- Keep video assets outside the static deployment bundle and pushed Git history. `.gitignore` excludes `content/**/*.mp4`; the physical source clips remain local, linked through Google Drive.
- Preserve the user's existing edit to the content brief.
- User explicitly authorized publishing to `main`, including the clean-history work needed to exclude video blobs.

## Progress

- [x] Read the brief, inspect repository state, identify provided media and references.
- [x] Inspect referenced repositories and choose fact-checked portfolio claims.
- [x] Build the responsive portfolio and static deployment setup.
- [x] Add all five content projects, all eight AutoDev screenshots with captions and the baseline Forge/memory overview.
- [x] Map all nine demos; verify the public Drive preview pages and embed/fallback links.
- [x] Add downloadable resume; inspect desktop work cards, AutoDev gallery and Forge overview in browser. Earlier mobile navigation and responsive layout check passed; final CSS preserves single-column mobile cards and gallery.
- [x] Preserve the original local history under a backup ref; publish a clean root commit without the MP4 blobs while retaining ignored local files.
- [x] Build and smoke-check the final output; verify poster-first video loading and final browser rendering.
- [x] Expand and browser-review the AutoDev and Arcade capability summaries against their referenced source material.
- [x] Bundle the supplied standalone AutoDev feature catalog and link it from the case study; the local preview returns HTTP 200 and serves the complete 580,486-byte HTML file.
- [x] Expand AutoDev/Arcana and Arcade case studies into clean, responsive feature grids; inspect both at phone (375×812), tablet (768×1024), laptop (1366×768) and desktop (1920×1080). At all sizes the page and modal have no horizontal overflow; the feature grid changes from one column on phone to two columns at tablet and above.
- [x] Build and smoke-check the final output; commit `45516a4` and push to `main`. Verified local and remote refs match, catalog files are present on GitHub, and no MP4 is in the remote tree.
- [x] Previous phase: commit expanded stories, push `main` to GitHub, and verify the remote ref has no MP4 blobs.
