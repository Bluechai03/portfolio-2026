export const site = {
  name: "Anna Montero",
  role: "Product Engineer",
  email: "montero.katreena@gmail.com",
  github: "https://github.com/Bluechai03",
  linkedin: "https://www.linkedin.com/in/anna-montero-3a36301a4/",
  tagline: "Shipping something small every week.",
  heroSupport:
    "I build frontend products with React, Next.js, and MUI, from early proofs of concept to dashboards and CMS-driven pages in production.",
  about: {
    headline: "From Figma to production",
    body: [
      "I'm a frontend engineer based in Dubai. Most of my work sits between design and engineering: taking designs from Figma and building them into production interfaces.",
      "I like working closely with designers and backend teammates, handling the edge cases, and shipping in small steps.",
    ],
    focus: ["Portfolio", "Design System", "Interval Walking Timer", "Consumer App", "UI Playground", "Open Source"],
  },
  experience: {
    eyebrow: "Experience",
    headline: "3+ years shipping production interfaces",
    intro:
      "Highlights from my current role.",
    items: [
      {
        title: "Proof-of-concept ownership",
        description:
          "Often given early proof-of-concept work: I explore the idea, build it end to end, then hand it off to the team.",
      },
      {
        title: "Cross-functional delivery",
        description:
          "Took new products from Figma handoff to first release, working day to day with design, QA, backend, and DevOps.",
      },
      {
        title: "Content systems & internal tools",
        description:
          "Shipped CMS-driven pages, a public developer docs portal, and internal back-office dashboards.",
      },
      {
        title: "Live data UI",
        description:
          "Built sections and data grids for a live data product that update without a page reload.",
      },
    ],
  },
  projects: [
    {
      year: "2026",
      title: "Portfolio 2026",
      description:
        "This site, where I share what I'm building.",
      status: "In progress",
      tone: "accent",
      href: "https://github.com/Bluechai03/portfolio-2026",
    },
    {
      year: "2026",
      title: "Interval Walking Timer",
      description:
        "A timer for Japanese interval walking (3 min fast / 3 min slow). Starting soon; the plan is live cadence detection from phone motion.",
      status: "Planned",
      tone: "neutral",
      href: "https://github.com/Bluechai03/interval-walking-timer",
    },
    {
      year: "2026",
      title: "Design System + Storybook",
      description:
        "Shared tokens and a first set of components: Button, TextField, and Badge. Storybook once there's enough to document.",
      status: "In progress",
      tone: "accent",
      href: "/system",
    },
    {
      year: "2026",
      title: "Consumer App",
      description:
        "A small product I'll build end to end, planned for later this year.",
      status: "Planned",
      tone: "neutral",
      href: "#",
    },
    {
      year: "2026",
      title: "UI Playground",
      description:
        "Small interaction experiments, like press states, focus, and toasts, that I try out before using them in real work.",
      status: "In progress",
      tone: "accent",
      href: "/playground",
    },
  ],
  projectsIntro:
    "What I'm working on this year. I'll update this list as things ship.",
  contactSupport:
    "If you're hiring for a remote Product Engineer or Design Engineer role, I'd like to hear from you.",
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
