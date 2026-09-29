# Product Engineer Journey

**Owner:** Anna Montero  
**North star:** Build proof, not just knowledge.  
**Started:** July 2026

---

## Vision

Become a product engineer who ships weekly — systems, products, and open source — with judgment that survives production. Consistency over intensity. One meaningful commit is enough.

**Positioning note (2026-07-23):** Repositioned primary target from Design Engineer to Product Engineer. The 3 years at Splash Software are stronger, more honest evidence of product/systems ownership (real-time WebSocket UI, CMS-driven pages, dashboards, cross-functional MVP delivery across design/QA/backend/DevOps) than of deep accessibility/motion craft specifically — Anna doesn't consider a11y/motion a strength she can back up in an interview, so leading with "Design Engineer" was a claim the portfolio couldn't fully defend. Figma-to-production and systems work (design tokens, primitives) still count as real, secondary evidence of design fluency — this isn't abandoning design sensibility, just changing the lead claim. Resume can keep dual-listing both titles for search breadth; the site should lead with Product Engineer.

## Project List

| Project | Status | Notes |
|---------|--------|-------|
| Portfolio 2026 | In progress | Live: https://annamontero.dev/ |
| Design System + Storybook | In progress | `/system` — tokens + Button, TextField, Badge slice |
| Consumer App | Planned | Month 3 focus |
| UI Playground | In progress | `/playground` — soft press, focus path, quiet reveal, confirm → toast |
| Open Source | Planned | Month 4 focus |
| AI Workflow | Ongoing | Plan → Figma → architecture → Cursor → review → polish |
| Dance tool / product | Idea | Future: build something that helps with dance (choreography, practice, timing). Do **not** mention dance in About — show it through a project when ready. |

## Future project notes (private)

- **Dance:** Anna wants a future product that helps with dance. Keep this for the project pipeline only — not in public About copy until there is a shippable artifact.
- **Dance v0 plan:** Practice Timer — metronome + session log persisted via Supabase, with a live realtime update as the one feature that proves the real-time/API skill the portfolio currently can't show. ~10-session build order scoped in chat 2026-07-21; ask to re-surface it when ready to start.
- **Interval Walking Timer:** inspired by japaneseintervalwalking.com (3min fast / 3min slow × 5). Web-only v0 for now — Apple Watch HR integration is parked as a future native v1 (needs a Mac, no web API can read Watch HR). Differentiator: DeviceMotion-based cadence detection ("are you actually walking fast enough") as the skills-proof feature, since HR isn't reachable from a browser. 10-session build order scoped in chat 2026-07-23. Build collaboration mode: hybrid — see [[mentor-mode-skill-projects]].
  - **Future feature idea (not in v0):** suggest songs matching the BPM of the phase you're supposed to be walking at (fast-phase BPM vs slow-phase BPM) — a music-tempo-matching feature, likely needs a music API (e.g. Spotify's audio-features/BPM data) once v0's core loop is solid.

## Monthly Focus

1. **Portfolio** — brand-first site, case studies, deploy cadence  
2. **Design System** — tokens, primitives, Storybook  
3. **Consumer App** — real features, a11y, tests  
4. **Open Source** — meaningful PRs  
5. **AI Workflow** — tighten the loop above  

## Weekly Rules

- Consistency > intensity  
- Ship every week  
- One meaningful commit is enough  
- Keep a Done list  
- Publish progress every 1–2 weeks  

## Daily Question

> What is the smallest thing I can ship today?

## Done List

### Week 1 — Getting started

- [x] Create GitHub repo `portfolio-2026`
- [x] Scaffold Next.js (pnpm) and push blank deployable app
- [x] Write vision + project list (this page)
- [x] Design homepage direction (atelier mist + jade; Syne / Figtree)
- [x] Build hero section (brand-first, full-bleed atmosphere)
- [x] Add About and Projects sections
- [x] Connect custom domain — https://annamontero.dev/
- [x] Deploy to Vercel — https://annamontero.dev/
- [~] Friend feedback — ongoing through the journey (ask on each project ship, not a Week 1 gate)
- [x] Sync this page into Notion — https://app.notion.com/p/39f9ce14f243813dafc8e53004cd1cd4

### Week 2 — First proof beyond the homepage

- [x] Choose ship: UI Playground
- [x] Scaffold `/playground` with first interaction demos
- [x] Link Projects entry to `/playground`
- [x] Expand playground with confirm → toast demo (visual polish guided by Anna)
- [-] ~~Ask one person for feedback on that ship~~ — dropped 2026-09-29: the playground is no longer the lead project, so feedback there isn't the most useful ask

### Week 3 — Design system slice

- [x] Scaffold `/system` living docs
- [x] Add shared tokens (color, space, type, radius)
- [x] Ship first primitives: Button, TextField, Badge
- [x] Code quality pass: shared page shell for /playground + /system, danger/success as real theme colors, drop unused deps
- [x] Reuse primitives on homepage — Button (hero CTA) and Badge (project status)
- [x] "Experience" section shipped — wired into the page and nav (About → Experience → Work → Contact)
- [x] Product Engineer repositioning: reordered Projects to lead with Interval Walking Timer + Design System, moved UI Playground last and reframed its copy, dropped "accessibility"/"motion" claims from hero + Experience + hero SVG copy, softened Consumer App's "accessibility" to "real reliability"
- [ ] Add Storybook when the set is worth documenting component-by-component

### Week 4 — Honest cleanup (2026-09-29)

- [x] Standardize on pnpm: removed stray `package-lock.json`, added a `preinstall` guard that rejects npm/yarn, ignored other lockfiles
- [x] Made the Interval Walking Timer row honest: status "Planned", copy says "starting soon", link points to the repo instead of an empty deploy
- [x] New colour scheme — dark mode, brown + blue: dark brown surfaces and footer, cream text, tan labels, mocha graphic details, blue accent (`#6ea8dd`) and background glow. Started from a Color Hunt palette, then dropped the terracotta/rust and tuned for readability (less saturated background, brighter body text, softer hero grain). All text passes WCAG AA
- [x] Copy tweaks: reworded the "Cross-functional delivery" bullet (no more vague "production component system") and added MUI to the hero stack line, since MUI is real day-job experience
- [x] Floating back-to-top button — appears after scrolling, keyboard/screen-reader safe, respects reduced motion
- [x] Keyboard + first-paint pass: fixed the `Button` focus ring (a Tailwind `outline-none` was silently cancelling it), visible focus on project rows and all links, "Skip to content" link, reduced-motion smooth scroll. Swapped the live SVG noise filter behind the hero grain for a pre-rendered tile — homepage first paint went from ~1.3s to ~0.2s with the same look. Lighthouse stays 100 on a11y / best practices / SEO; lesson: Lighthouse didn't catch the missing focus ring, only tabbing through did

## AI Workflow (operating system)

1. Plan with ChatGPT / Cursor  
2. Sketch in Figma  
3. Design architecture  
4. Build in Cursor  
5. Review with AI  
6. Polish yourself  

## Feedback habit

Ask for feedback when something ships — not before. One question per ask, tied to the artifact (e.g. *Does this interaction feel intentional, or decorative?*).

## Next smallest ship

Interval Walking Timer v0, one evening: Start button, 3 min fast / 3 min slow × 5, a beep on each phase change, deployed to Vercel. No cadence detection, no styling pass, no settings. Once it works on a real walk, flip the portfolio row back to "In progress" and link the live app.
