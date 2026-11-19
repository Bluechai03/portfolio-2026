# Strut case study

## Problem
A mid-level product-engineer screener has one project to judge Anna by. Strut has to show product judgment, a backend, real-time behavior and tests, and to show which parts Anna decided. The page already carries decisions, real-walk findings and test evidence [src/content/strut-case-study.ts]. It does not yet show a second person using the product, and it states how it was built only in the last section.

## Audience
Hiring managers and engineers screening for mid-level product engineer roles in the UAE and remote, who open the portfolio after the resume passes [docs/research/hiring-signals-frontend-product-engineer.md, section 3]. They read the first sections and stop when they have a verdict.

## What the page must prove
- Product judgment: features were dropped for stated reasons (step counting, Google sign-in, the booking app).
- Ownership end to end: database rules, real-time clock correction and a browser test with several clients, each linked.
- Honesty about method: what was generated, what was decided, what was tested.
- Finish: a live app, dated test numbers, no abandoned parts.

## Hypotheses
1. A reader who reads only "Why I made it" and "Decisions I made" can name one decision Anna made and why it was made.
   - Test: 5 engineers, 60 seconds each, then ask for one decision.
   - Disproved by: fewer than 4 of 5 naming one.
2. A reader can say which parts Anna decided and which Claude Code wrote.
   - Test: the same 5 readers, asked after reading the whole page.
   - Disproved by: fewer than 4 of 5 answering correctly, or any of them reading the disclosure as concealment.
3. A first walk by someone other than Anna adds a finding the tests did not catch.
   - Test: one friend walks a room on their own phone and Anna records what broke.
   - Disproved by: no finding, in which case the section reports that.

## Scope
- In: "How I built it" in second place, a "first friend walk" finding once it happens, the same dated-number rule for every figure.
- Out: new Strut features added to improve the story, invented users or testimonials, any accessibility claim before the audit is complete, employer material.

