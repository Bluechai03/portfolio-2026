export const site = {
  name: "Anna Montero",
  role: "Design Engineer",
  email: "montero.katreena@gmail.com",
  github: "https://github.com/Bluechai03",
  tagline: "Build proof, not just knowledge.",
  heroSupport:
    "I design systems and ship interfaces — turning taste into production software, week by week.",
  about: {
    headline: "Crafting at the seam of design and code",
    body: [
      "I am building a practice around shipping: portfolios, design systems, consumer products, and open source. Consistency beats intensity — one meaningful commit is enough.",
      "My north star is proof. Every week I move a real artifact forward: a hero that feels like mine, a component that is accessible, a feature someone can click.",
    ],
    focus: ["Portfolio", "Design System", "Consumer App", "Open Source", "AI Workflow"],
  },
  projects: [
    {
      year: "2026",
      title: "Portfolio 2026",
      description:
        "This site — a living proof of craft. Brand-first homepage, restrained motion, and a clear path from vision to ship.",
      status: "In progress",
      href: "#work",
    },
    {
      year: "2026",
      title: "Design System + Storybook",
      description:
        "Tokens, primitives, and documented patterns. The shared language behind every product surface I build next.",
      status: "Next up",
      href: "#",
    },
    {
      year: "2026",
      title: "Consumer App",
      description:
        "An end-to-end product with real users in mind — accessibility, architecture, and polish in weekly slices.",
      status: "Planned",
      href: "#",
    },
    {
      year: "2026",
      title: "UI Playground",
      description:
        "A lab for interaction ideas, motion studies, and components that earn their place in the system.",
      status: "Planned",
      href: "#",
    },
  ],
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
