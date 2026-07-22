export const site = {
  name: "Anna Montero",
  role: "Product Engineer",
  email: "montero.katreena@gmail.com",
  github: "https://github.com/Bluechai03",
  linkedin: "https://www.linkedin.com/in/anna-montero-3a36301a4/",
  tagline: "Build proof, not just knowledge.",
  heroSupport:
    "I build frontend interfaces, currently with React and Next.js, and I put steady care into how they hold up for real people: clear layouts, reliable data, and the small details that make something dependable.",
  about: {
    headline: "Steady work, thoughtful interfaces",
    body: [
      "I'm a frontend engineer based in Dubai. I like sitting between design and engineering — taking ideas from Figma and turning them into interfaces that are fair to use on everyday devices, not only the ideal ones.",
      "I show up for the unglamorous parts too: polishing edge cases, collaborating patiently with designers and teammates, and shipping something small every week instead of waiting for perfect. I care about being someone others can rely on when the work simply needs to get done well.",
    ],
    focus: ["Portfolio", "Design System", "Interval Walking Timer", "Consumer App", "UI Playground", "Open Source"],
  },
  experience: {
    eyebrow: "Experience",
    headline: "3+ years shipping production interfaces",
    intro:
      "A few highlights from the day-to-day work I ship in my current role.",
    items: [
      {
        title: "Real-time product UI",
        description:
          "Built real-time interfaces on WebSockets for a live data product — live sections and data grids that update without a reload, under real performance and reliability constraints.",
      },
      {
        title: "Cross-functional delivery",
        description:
          "Partnered across design, QA, backend, and DevOps to turn Figma into a production MUI component system, shipping MVPs to deadline.",
      },
      {
        title: "Content systems & internal tools",
        description:
          "Shipped CMS-driven pages, a public developer docs portal, and back-office dashboards — the less glamorous surfaces that still need to be fast, reliable, and easy to maintain.",
      },
    ],
  },
  projects: [
    {
      year: "2026",
      title: "Portfolio 2026",
      description:
        "This site — an honest place to share what I'm building and how I like to work with others.",
      status: "In progress",
      tone: "accent",
      href: "#work",
    },
    {
      year: "2026",
      title: "Interval Walking Timer",
      description:
        "A Japanese interval-walking timer (3 min fast / 3 min slow) I actually use — building toward live cadence feedback and, eventually, an Apple Watch companion.",
      status: "In progress",
      tone: "accent",
      href: "https://interval-walking-timer.vercel.app",
    },
    {
      year: "2026",
      title: "Design System + Storybook",
      description:
        "Shared tokens and a few components I'm building as I go. Storybook later, when there's enough to document.",
      status: "In progress",
      tone: "accent",
      href: "/system",
    },
    {
      year: "2026",
      title: "Consumer App",
      description:
        "A small product built end-to-end, focused on clear UX, real reliability, and patient weekly progress.",
      status: "Planned",
      tone: "neutral",
      href: "#",
    },
    {
      year: "2026",
      title: "UI Playground",
      description:
        "Small interaction experiments where I explore UX ideas like motion and focus before they land in real product work.",
      status: "In progress",
      tone: "accent",
      href: "/playground",
    },
  ],
  projectsIntro:
    "These are the projects I'm committed to this year. I'll keep this list honest as things ship — slow, steady progress over big promises.",
  contactSupport:
    "If you're looking for a remote Product Engineer or Design Engineer who's reliable, collaborative, and happy to do the careful work, I'd love to hear from you. You're welcome to reach out anytime.",
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
