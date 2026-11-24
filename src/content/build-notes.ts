const REPO = "https://github.com/Bluechai03/portfolio-2026";

export const buildNotes = {
  path: "/how-its-built",
  title: "How this site is built",
  eyebrow: "Build notes",
  support:
    "What I chose, what I turned down, and where you can check it. Each claim links to the code or the record behind it.",
  sections: [
    {
      id: "stack",
      title: "What it runs on",
      paragraphs: [
        "Next.js 16 with the App Router, React 19 and TypeScript, styled with Tailwind CSS 4 and managed with pnpm. The pages are built ahead of time into static files and served from Vercel, so a visitor's first load needs no server work.",
        "Material UI is used on the Playground page only. Everything else runs on a small set of my own components.",
      ],
      links: [{ label: "The code on GitHub", href: REPO }],
    },
    {
      id: "checks",
      title: "How it's checked",
      paragraphs: [
        "Every pull request runs lint, a type check, the unit tests, and browser tests against the production build, in GitHub Actions. The browser tests run on a desktop and an iPhone-sized screen, and any test fails if the page logs a console error.",
        "One test presses and holds buttons and links and checks that nothing around them moves, and that nothing sinks when reduced motion is on.",
        "I don't publish a test count. A number says nothing about what the tests catch, so the tests are named for what they cover, and you can read them.",
      ],
      links: [
        { label: "The checks workflow", href: `${REPO}/blob/main/.github/workflows/checks.yml` },
        { label: "The browser tests", href: `${REPO}/tree/main/e2e` },
      ],
    },
    {
      id: "decisions",
      title: "Decisions, and what I turned down",
      items: [
        {
          title: "The first screen names my real title",
          text: "The site says I've been a frontend developer since 2022, and names the product engineer roles I want, so a reader finds both without scrolling.",
          turnedDown:
            "Claiming product engineer as my current title, because my work history doesn't back it. Leaving the line as it was, because the target role only appeared at the bottom of the page.",
        },
        {
          title: "No analytics that identify a visitor",
          text: "Nothing on the site needs visitor-level data, and a cookie banner would add friction to a two-minute skim.",
          turnedDown: "Standard page analytics with cookies, because nothing depends on them.",
        },
        {
          title: "The AI-assisted build disclosure stays",
          text: "I decide what to build and test it, and Claude Code writes much of the code. That's accurate, so the Strut case study says it.",
          turnedDown: "Removing it, because a method I hid and a reader later found would cost more trust than saying it.",
        },
        {
          title: "\"How I built it\" sits second in the Strut case study",
          text: "A reader who stops after the first sections still learns the method before crediting me with the code.",
          turnedDown:
            "Leaving it last, because a reader who stops early credits me with all the code, and one who finds it last reads it as hidden.",
        },
      ],
      links: [{ label: "The full decision log", href: `${REPO}/blob/main/decisions.md` }],
    },
    {
      id: "rules",
      title: "Small rules that hold it together",
      items: [
        {
          title: "Sentence case everywhere",
          text: "Every heading, label and badge capitalizes the first word and proper nouns only. The glossary writes it down, along with the other words that have one meaning each.",
        },
        {
          title: "Status words mean one thing",
          text: "A project is Idea, Planned, In progress or Live, and a test fails if a project uses any other word.",
        },
        {
          title: "One rule for pressing buttons",
          text: "Every button sinks a little when pressed and springs back. It's one rule in the stylesheet, so a new button gets it without anyone remembering to add it. It uses the scale property so nothing around the button moves, and with reduced motion on, nothing sinks. I built it for Strut first and brought it here.",
        },
      ],
      links: [
        { label: "The glossary", href: `${REPO}/blob/main/GLOSSARY.md` },
        { label: "The stylesheet", href: `${REPO}/blob/main/src/app/globals.css` },
      ],
    },
    {
      id: "cut",
      title: "What I left out",
      items: [
        {
          title: "A design system page",
          text: "This page replaced it. The old one showed three components and a handful of colors, called itself a work in progress, and told a visitor less than the work behind it. The Button and Badge still run the site; the page was what went.",
        },
        {
          title: "Storybook",
          text: "Not built. The set of components is too small to need it, and I'd rather add it when there is something to document component by component.",
        },
        {
          title: "Accessibility claims",
          text: "I'm not claiming this site is accessible yet. I'll say so only after I've tried it with VoiceOver on a phone.",
        },
      ],
    },
  ],
} as const;
