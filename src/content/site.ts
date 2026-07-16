export const site = {
  name: "Anna Montero",
  role: "Design Engineer",
  email: "montero.katreena@gmail.com",
  github: "https://github.com/Bluechai03",
  linkedin: "https://www.linkedin.com/in/anna-montero-3a36301a4/",
  tagline: "Build proof, not just knowledge.",
  heroSupport:
    "I build frontend interfaces with React and Next.js, and I care a lot about how they feel to use — spacing, motion, accessibility, and the small details that make something feel finished.",
  about: {
    headline: "Design and code, side by side",
    body: [
      "I'm a frontend engineer based in Dubai. Most of my work sits between design and engineering — taking ideas from Figma and turning them into interfaces that work well on real devices.",
      "I spend my days shipping production UI, and outside of that I'm building things here: this portfolio, a design system, and a few side projects. I try to ship something small every week rather than waiting for perfect.",
    ],
    focus: ["Portfolio", "Design System", "Consumer App", "Open Source", "AI Workflow"],
  },
  projects: [
    {
      year: "2026",
      title: "Portfolio 2026",
      description:
        "This site — a simple place to share what I'm working on and how I approach frontend work.",
      status: "In progress",
      href: "#work",
    },
    {
      year: "2026",
      title: "Design System + Storybook",
      description:
        "Reusable components, tokens, and docs so I can build faster and stay consistent across projects.",
      status: "Next up",
      href: "#",
    },
    {
      year: "2026",
      title: "Consumer App",
      description:
        "A small product built end-to-end, with a focus on clear UX, accessibility, and steady weekly progress.",
      status: "Planned",
      href: "#",
    },
    {
      year: "2026",
      title: "UI Playground",
      description:
        "A space to try interaction and motion ideas before bringing the useful ones into real projects.",
      status: "Planned",
      href: "#",
    },
  ],
  projectsIntro:
    "These are the projects I'm focused on this year. Some are already underway; others are next — I'll keep this list honest as things ship.",
  contactSupport:
    "If you're hiring for a remote Design Engineer or Product Engineer role, or just want to chat about frontend work, feel free to reach out.",
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
