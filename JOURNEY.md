# Design Engineer Journey

**Owner:** Anna Montero  
**North star:** Build proof, not just knowledge.  
**Started:** July 2026

---

## Vision

Become a design engineer who ships weekly — systems, products, and open source — with taste that survives production. Consistency over intensity. One meaningful commit is enough.

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
- [ ] Ask one person for feedback on that ship (taste, clarity, usefulness)

### Week 3 — Design system slice

- [x] Scaffold `/system` living docs
- [x] Add shared tokens (color, space, type, radius)
- [x] Ship first primitives: Button, TextField, Badge
- [x] Code quality pass: shared page shell for /playground + /system, danger/success as real theme colors, drop unused deps
- [x] Reuse primitives on homepage — Button (hero CTA) and Badge (project status)
- [~] "Experience" section (real production work from Splash Software) — built (`src/components/experience.tsx`), not yet wired into the page. Held back: unsure whether to duplicate CV content on the site. Revisit before shipping.
- [ ] Add Storybook when the set is worth documenting component-by-component

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

Open `/system`, review the token + primitive slice, then either reuse a primitive on the homepage or add Storybook once the set feels stable.
