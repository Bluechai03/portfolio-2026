# First screen and Strut case study

## What works
- The first screen has one job, one name and two actions. The hero (`src/components/hero.tsx`) holds no carousel, banner or modal.
- Claims are checkable. The case study dates its numbers ("Over 200" tests, as of 18 November 2026) and links each decision to a pull request or a decision record in `src/content/strut-case-study.ts`.
- The case study leads with decisions and real-walk findings, the order the hiring research supports [docs/research/hiring-signals-frontend-product-engineer.md, implication 2].
- No accessibility claim appears anywhere, which matches the stance: no claim until an audit proves it.

## Findings, most important first

### 1. The first screen names the wrong role for the target
The role line is "Product-minded Frontend Developer" and the hero support sentence repeats it (`src/content/site.ts`). The target is mid-level product engineer. Only the contact section says "frontend and product engineering roles", at the bottom of the page.
- Heuristic: match between the system and the reader's language. A screener scanning for a title finds a different one.
- Fix: the hero states the true current title and the target together, in one sentence (see the log for the default wording).

### 2. No live project is reachable from the first screen
The two actions are "See the work", which scrolls, and "Get in touch". The research reads the portfolio as opened after the resume, scanned for a live link and one convincing project, with the first screen as the whole pitch [same file, section 3, marked as inference].
- Heuristic: visibility of system status and recognition over recall. The strongest proof sits one scroll away behind a generic label.
- Fix: a third link under the buttons, "Read the Strut case study", with the live status beside it.

### 3. Years of experience are below the first screen
"4+ years" appears only as the Experience headline. UAE mid-level postings ask for 3 to 5 years [research, section 4, secondary]. A recruiter forwarding the link needs role, years and a live project at once.
- Fix: the years go in the hero support sentence (covered by finding 1).

### 4. Experience items describe duties, not outcomes
Each of the four items says what Anna did ("Built CMS-driven pages…") with no scale, result or her part. The research asks for concrete items: what shipped, scale, her part [implication 1]. The employer stays unnamed, so the facts have to be ones that do not identify it.
- Fix: each item gets one concrete fact about scope or result. Anna supplies the facts.

### 5. Strut has no user other than Anna
The case study says "friends can walk in step" is in progress and that every step was tried on Anna's own phone. No primary source says real users impress a screener [research, section 1, not found], so this does not block. It is the largest gap against a mid-level claim of owning a feature end to end, and it closes when the first friend walks a room.

### 6. The AI disclosure is the last section
"How I built it" states plainly that Claude Code writes much of the code and that Anna decides, tests and reviews. The statement is honest and stays. It sits after eleven sections of claims, so a reader who stops at "Decisions I made" credits Anna with the code. A reader who finds it last reads it as hidden. Both readings cost trust, and the research lists "claims the work cannot back up" as a red flag.
- Fix: the question goes to the designer (see the brief).

## Not changed
- The Portfolio 2026 project card is self-referential and low impact. It stays until a second external project exists.
