export const site = {
  name: "Anna Montero",
  role: "Design Engineer",
  email: "montero.katreena@gmail.com",
  github: "https://github.com/Bluechai03",
  linkedin: "https://www.linkedin.com/in/anna-montero-3a36301a4/",
  tagline: "Build proof, not just knowledge.",
  heroSupport:
    "I build frontend interfaces with React and Next.js, and I put steady care into how they feel for real people — clear layouts, thoughtful motion, accessibility, and the small details that make something dependable.",
  about: {
    headline: "Steady work, thoughtful interfaces",
    body: [
      "I'm a frontend engineer based in Dubai. I like sitting between design and engineering — taking ideas from Figma and turning them into interfaces that are fair to use on everyday devices, not only the ideal ones.",
      "I show up for the unglamorous parts too: polishing edge cases, collaborating patiently with designers and teammates, and shipping something small every week instead of waiting for perfect. I care about being someone others can rely on when the work simply needs to get done well.",
    ],
    focus: ["Portfolio", "UI Playground", "Design System", "Consumer App", "Open Source"],
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
      title: "UI Playground",
      description:
        "Little interaction experiments — motion, focus, confirms — before I put them into real work.",
      status: "In progress",
      tone: "accent",
      href: "/playground",
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
        "A small product built end-to-end, focused on clear UX, accessibility, and patient weekly progress.",
      status: "Planned",
      tone: "neutral",
      href: "#",
    },
  ],
  projectsIntro:
    "These are the projects I'm committed to this year. I'll keep this list honest as things ship — slow, steady progress over big promises.",
  contactSupport:
    "If you're looking for a remote Design Engineer or Product Engineer who's reliable, collaborative, and happy to do the careful work, I'd love to hear from you. You're welcome to reach out anytime.",
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
