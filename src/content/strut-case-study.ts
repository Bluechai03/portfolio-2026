const REPO = "https://github.com/Bluechai03/interval-walking-timer";

export type EvidenceLink = { label: string; href: string };

export const strutCaseStudy = {
  path: "/work/interval-walking-timer",
  eyebrow: "Case study",
  title: "Strut",
  support:
    "A phone-first timer for Japanese interval walking, and what a few real walks taught me while I built it.",
  // Numbers on this page are true on this date. Update them when they change.
  asOf: "19 November 2026",
  sections: [
    {
      id: "why",
      title: "Why I made it",
      paragraphs: [
        "I wanted a simple, reliable way to get healthier, and a routine I'd actually stick with. Japanese interval walking is easy to describe: three minutes fast, three minutes slow, five rounds. It's hard to do while watching a clock.",
        "So Strut tells you when to switch, out loud, with a beep and a short spoken line, and there's nothing to decide mid-walk. It keeps the screen on, shows a target heart rate, and installs on your Home Screen like an app.",
      ],
    },
    {
      id: "how",
      title: "How I built it",
      paragraphs: [
        "I built Strut with Claude Code, an AI coding assistant. I decide what to build and what to leave out, and the rules are written down in a glossary and decision records. Claude Code writes much of the code. I test every step on my own devices and check it with automated tests.",
      ],
      links: [
        { label: "The glossary", href: `${REPO}/blob/main/GLOSSARY.md` },
        { label: "Setting up the Watch workout", href: `${REPO}/blob/main/docs/watch-workout.md` },
      ],
    },
    {
      id: "decisions",
      title: "Decisions I made",
      items: [
        {
          title: "I dropped step counting and the step goal",
          body: "A web page can't read your Watch's Health data. I built a test of a Shortcut that could, and the Shortcut needed about eleven hand-built actions for every person who uses Strut, which is too much to ask of anyone, so I took it out again. A phone's motion sensor only works with the screen on and is rough in a pocket, and a real Watch app needs Apple's paid developer account. Watches and iPhones already show your steps, so Strut leaves them out.",
          links: [
            { label: "The test", href: `${REPO}/pull/36` },
            { label: "Taking it out", href: `${REPO}/pull/37` },
          ],
        },
        {
          title: "I built crews inside Strut instead of a separate booking app",
          body: "A crew is a group of friends who walk the same plan on the same clock. I'd planned a class booking app to show a real backend and live updates. Walking with friends covers the same ground on something I already use, so I dropped the booking app and wrote the reasons down in a decision record.",
          links: [
            { label: "The decision record", href: `${REPO}/blob/main/docs/adr/0001-rooms-inside-strut-on-supabase.md` },
          ],
        },
        {
          title: "Guests only, no sign-in, for now",
          body: "I built Google sign-in first, then took it out again. It put a login in front of someone joining a walk, it can fail from an installed iPhone app, and it meant building and testing a second kind of member. A friend now types four letters and a name and they're in. Signing in can come back later as an optional way to keep your walks.",
        },
        {
          title: "Elliptical and Bike are only different words",
          body: "I'd started using Strut on the elliptical, so I added an Activity setting: Walk, Elliptical or Bike. It changes the words (Push harder and Ease off, or Pedal hard and Pedal easy) on screen, in the spoken cues, in the lock-screen reminders and in a crew, and nothing else, so the timer still does one job. I tried Run as well and took it out again, because it didn't make sense for an interval timer.",
          links: [{ label: "The change", href: `${REPO}/pull/42` }],
        },
        {
          title: "A fitness-app look, and fewer things on the first screen",
          body: "I redesigned Strut to feel like a fitness app. The ready screen is a calm near-black card that shows the plan as three big numbers, and the red and blue effort colors begin only when the work does. There are three tabs along the bottom (Workout, Crew and Settings), and the walk ends on a green summary with a Go again button. I made two choices I then took back. I built four color schemes to choose from and removed them, because one good look is enough. And my first ready screen put steppers, presets and tiles all on show, which was too much, so the plan now sits behind one Change plan button. I also checked that nothing on the screen moves between states: a layout shift of 0.000 in a phone-sized browser, and a test reads the real stylesheet to check that the writing on each color is readable.",
          links: [
            { label: "The new look", href: `${REPO}/pull/43` },
            { label: "The ready screen", href: `${REPO}/pull/50` },
            { label: "The tabs", href: `${REPO}/pull/51` },
            { label: "The finished screen", href: `${REPO}/pull/53` },
          ],
        },
      ],
    },
    {
      id: "real-walks",
      title: "What real walks taught me",
      intro: "Each of these came from using the app on my own phone, and none of them showed up in the tests.",
      items: [
        {
          title: "The reminder that never came",
          body: "I connected the timer to an Apple Watch workout through a Shortcut. On a real walk I locked my screen and expected a reminder, and nothing happened. The Shortcut had sent me back to Safari, so the walk was running in a browser tab, and on iPhone only the installed Home Screen app can send reminders. The walk now starts in the app, there's a setting that keeps the Watch and the timer starting on the same beat, and a browser tab says plainly that reminders won't come.",
          links: [{ label: "The fix", href: `${REPO}/pull/32` }],
        },
        {
          title: "The name that vanished",
          body: "The first time I saved a name on my phone, the form reset and asked again. Saving the name created my guest account, and the page treated that as a new person and rebuilt the form halfway through. I fixed it and added a test that reproduces that exact moment.",
          links: [{ label: "The fix", href: `${REPO}/pull/31` }],
        },
        {
          title: "A permission my local tests couldn't see",
          body: "Saving a name failed on my real Supabase project, because new projects don't let signed-in people touch a table until it is granted. My tests passed because their database granted it by default. The tests now remove those default grants, so they fail the way the real project does.",
        },
      ],
    },
    {
      id: "rooms",
      title: "Walk with friends",
      status: "In progress",
      intro: "Shared walks are being built in small steps, and each one is tested on my phone before the next. Four are done.",
      works: [
        "Start a crew and share a four-letter code, a link or a QR code.",
        "A friend joins with just a name, and everyone sees who is here, live.",
        "Up to 8 people in a crew. The host can remove someone, and a removed person can't rejoin.",
        "Only people in a crew can read it, and every change goes through checked database functions.",
        "The host starts everyone's countdown on the same beat. Each phone measures how far its clock is from the server's, so they stay together whatever their clocks say. A friend who joins late lands in the right place.",
      ],
      next: [
        "Testing the Apple Watch workout inside a crew with friends.",
        "Checking the delete my data button on the live site.",
      ],
      links: [{ label: "Follow the work", href: `${REPO}/pulls?q=is%3Apr` }],
    },
    {
      id: "checks",
      title: "How I checked it",
      items: [
        {
          title: "Automated tests on every change",
          body: "Automated tests run on every pull request. They cover the timer maths, the crew screens and the clock correction, and the ones that matter most are the ones that came from a real problem on my phone.",
        },
        {
          title: "Database rules tested in SQL",
          body: "Who can read and change which crew is tested in SQL against Supabase's own Postgres image, in CI. Each rule's test was checked by weakening the rule on purpose to see that the test failed, because a test that can't fail doesn't prove anything.",
          links: [{ label: "The SQL tests", href: `${REPO}/tree/main/supabase/tests` }],
        },
        {
          title: "Several browsers in one crew",
          body: "A browser test opens several browsers in one crew, against a real local database, not a fake one. One friend's phone clock is set 45 seconds fast and another's 30 seconds slow, and the test checks that the countdowns and the phases still line up and that a late joiner lands in the right place. It also checks that the host can remove a guest, that two people can't share a name, and that ending the walk for everyone asks first. I broke the clock correction on purpose to see the test fail, and it did.",
          links: [{ label: "The browser test", href: `${REPO}/pull/40` }],
        },
        {
          title: "A review before I trust it",
          body: "Before the shared walk was merged, it was reviewed three ways: against the project's own standards, against what I'd asked for, and for design. The review found real problems, such as a removed guest being able to leave and rejoin, and they were fixed.",
        },
        {
          title: "My own phone and Watch",
          body: "Every step has been tried on my own iPhone, and the Watch workout with my Apple Watch. That is how the three problems above were found.",
        },
      ],
    },
  ],
  screenshots: [
    { src: "/work/strut/strut-start.png", alt: "Strut's ready screen on a phone: a calm near-black card that says Ready to go, the plan as three big numbers (3 min fast, 3 min slow, 5 rounds), the effort strip and a Change plan button, with an amber Start button and the Workout, Crew and Settings tabs below.", caption: "Ready to go" },
    { src: "/work/strut/strut-plan.png", alt: "Strut's plan sheet: three ready-made plans (Classic, Gentle and Short) and three number tiles for Fast, Slow and Rounds, each with minus and plus buttons, and a Done button.", caption: "Changing the plan, one tap away" },
    { src: "/work/strut/strut-walking.png", alt: "Strut in the first fast phase on a crimson field: Walk fast, 2:58 left in huge numerals, a target heart rate, the effort strip and amber Pause and Done buttons.", caption: "Walking fast" },
    { src: "/work/strut/strut-done.png", alt: "Strut's finished screen on a calm green field: Walk complete, 30:00 in huge numerals, Well done, 15 min fast, 15 min slow and 5 rounds, the filled effort strip and an amber Go again button.", caption: "Walk complete" },
  ],
  screenshotNote:
    "Screenshots of the app in a phone-sized browser window, not photos of my phone. The finished screen was captured by loading a saved, completed walk.",
  links: [
    { label: "Open the app", href: "https://strutwalk.vercel.app" },
    { label: "View the code on GitHub", href: REPO },
  ],
} as const;
