export const site = {
  name: "Anna Montero",
  role: "Product Engineer",
  url: "https://annamontero.dev",
  email: "montero.katreena@gmail.com",
  github: "https://github.com/Bluechai03",
  linkedin: "https://www.linkedin.com/in/anna-montero-3a36301a4/",
  resume: "/resume.pdf",
  tagline: "Shipping something small every week.",
  heroSupport:
    "I build frontend products with React, Next.js, and MUI, from early proofs of concept to dashboards and CMS-driven pages in production.",
  about: {
    headline: "From Figma to production",
    body: [
      "I'm a frontend engineer based in Dubai. The part of the work I enjoy most sits between design and engineering: taking designs from Figma and building them into production interfaces.",
      "I like working closely with designers and backend teammates, handling the edge cases, and shipping in small steps.",
    ],
    focus: ["Portfolio", "Design System", "Interval Walking Timer", "UI Playground", "Open Source"],
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
          "Often given early proof-of-concept work, which I enjoy: I explore the idea, build it end to end, then hand it off to the team.",
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
        title: "Real-time UI",
        description:
          "Built WebSocket-driven sections and data grids that update without a page reload.",
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
        "A timer for Japanese interval walking (3 min fast / 3 min slow). Audio cues on each phase change, screen wake lock, configurable plan, and installable as a PWA. Live cadence detection from phone motion is next.",
      status: "In progress",
      tone: "accent",
      href: "https://interval-walking-timer.vercel.app",
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
      title: "UI Playground",
      description:
        "Small interaction details I care about, like press states, focus, and toasts, that I try out before using them in real work.",
      status: "In progress",
      tone: "accent",
      href: "/playground",
    },
  ],
  projectsIntro:
    "What I'm working on this year. I'll update this list as things ship.",
  contactSupport:
    "If you're hiring for a Product Engineer or Design Engineer role, remote or otherwise, I'd love to hear from you.",
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
