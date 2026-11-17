const REPO = "https://github.com/Bluechai03/interval-walking-timer";

export type EvidenceLink = { label: string; href: string };

export const strutCaseStudy = {
  path: "/work/interval-walking-timer",
  eyebrow: "Case study",
  title: "Strut",
  support:
    "A phone-first timer for Japanese interval walking, and what a few real walks taught me while I built it.",
  // Numbers on this page are true on this date. Update them when they change.
  asOf: "17 November 2026",
  testCount: 133,
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
      id: "decisions",
      title: "Decisions I made",
      items: [
        {
          title: "I dropped live step counting",
          body: "A web page can't read your Watch's Health data, and a phone's motion sensor only works with the screen on and is rough in a pocket. A native app would fix that, but it needs Apple's paid developer account, and I wanted this to stay free to run. So I left it out.",
        },
        {
          title: "I built rooms inside Strut instead of a separate booking app",
          body: "I'd planned a class booking app to show a real backend and live updates. Walking with friends covers the same ground on something I already use, so I dropped the booking app and wrote the reasons down in a decision record.",
          links: [
            { label: "The decision record", href: `${REPO}/blob/main/docs/adr/0001-rooms-inside-strut-on-supabase.md` },
          ],
        },
        {
          title: "Guests only, no sign-in, for now",
          body: "I built Google sign-in first, then took it out again. It put a login in front of someone joining a walk, it can fail from an installed iPhone app, and it meant building and testing a second kind of member. A friend now types four letters and a name and they're in. Signing in can come back later as an optional way to keep your walks.",
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
      intro: "Shared walks are being built in seven small steps, and each one is tested on my phone before the next.",
      works: [
        "Start a room and share a four-letter code, a link or a QR code.",
        "A friend joins with just a name, and everyone sees who is here, live.",
        "Up to 8 people in a room. The host can remove someone, and a removed person can't rejoin.",
        "Only people in a room can read it, and every change goes through checked database functions.",
      ],
      inReview: [
        "The host starts everyone's countdown on the same beat. Each phone measures how far its clock is from the server's, so they stay together whatever their clocks say. A friend who joins late lands in the right place.",
      ],
      next: [
        "Starting the Apple Watch workout inside a room.",
        "Step totals and an optional step goal.",
        "A list of my past walks, and a button to delete my data.",
      ],
      links: [{ label: "Follow the work", href: `${REPO}/pulls?q=is%3Apr` }],
    },
    {
      id: "checks",
      title: "How I checked it",
      items: [
        {
          title: "Automated tests on every change",
          body: "133 unit and component tests run on every pull request, as of the date above. They cover the timer maths, the room screens and the clock correction.",
        },
        {
          title: "Database rules tested in SQL",
          body: "Who can read and change which room is tested in SQL against Supabase's own Postgres image, in CI. Each rule's test was checked by weakening the rule on purpose to see that the test failed, because a test that can't fail doesn't prove anything.",
          links: [{ label: "The SQL tests", href: `${REPO}/tree/main/supabase/tests` }],
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
  ],
  screenshots: [
    { src: "/work/strut/strut-start.png", alt: "Strut's start screen on a phone, with a big Start button and the plan below.", caption: "Ready to start" },
    { src: "/work/strut/strut-get-ready.png", alt: "Strut counting down 3 before the walk begins.", caption: "A short countdown" },
    { src: "/work/strut/strut-walking.png", alt: "Strut in the first fast phase, showing 2:59 left, a target heart rate and the trail of rounds.", caption: "Walking fast" },
  ],
  screenshotNote: "Screenshots of the app in a phone-sized browser window, not photos of my phone.",
  links: [
    { label: "Open the app", href: "https://strutwalk.vercel.app" },
    { label: "View the code on GitHub", href: REPO },
  ],
} as const;
