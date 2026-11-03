export const site = {
  name: "Anna Montero",
  role: "Frontend Product Engineer",
  url: "https://annamontero.dev",
  email: "montero.katreena@gmail.com",
  github: "https://github.com/Bluechai03",
  linkedin: "https://www.linkedin.com/in/anna-montero-3a36301a4/",
  resume: "/resume.pdf",
  heroSupport:
    "I build frontend products with React, Next.js, and MUI, from early proofs of concept to dashboards and CMS-driven pages in production.",
  about: {
    headline: "From Figma to production",
    body: [
      "I'm a frontend engineer based in Dubai. The part of the work I enjoy most sits between design and engineering: taking designs from Figma and building them into production interfaces.",
      "I like working closely with designers and backend teammates, handling the edge cases, and shipping in small steps.",
    ],
  },
  experience: {
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
      title: "Interval Walking Timer",
      description:
        "A timer for Japanese interval walking (3 min fast / 3 min slow). Audio cues on each phase change, screen wake lock, configurable plan, and installable as a PWA. Live cadence detection from phone motion is next.",
      status: "Live",
      preview: "timer",
      links: [{ label: "Open the app", href: "https://interval-walking-timer.vercel.app" }],
    },
    {
      title: "Portfolio 2026",
      description:
        "This site, built on its own small design system: shared tokens plus Button, TextField, and Badge components.",
      status: "Live",
      preview: "portfolio",
      links: [
        { label: "View the code on GitHub", href: "https://github.com/Bluechai03/portfolio-2026" },
        { label: "See the design system", href: "/system" },
      ],
    },
  ],
  projectsIntro:
    "Each preview is the real thing, so try it. I'll update this list as things ship.",
  contactHeading: "Hiring a product engineer?",
  contactSupport:
    "If you're hiring for a Product Engineer role, remote or otherwise, I'd love to hear from you.",
  nav: [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
