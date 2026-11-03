export const site = {
  name: "Anna Montero",
  role: "Frontend Product Engineer",
  url: "https://annamontero.dev",
  email: "montero.katreena@gmail.com",
  github: "https://github.com/Bluechai03",
  linkedin: "https://www.linkedin.com/in/anna-montero-3a36301a4/",
  resume: "/resume.pdf",
  heroSupport:
    "Frontend product engineer in Dubai. I build React and Next.js interfaces that look right, feel easy to use, and hold up on a phone.",
  about: {
    headline: "Interfaces people enjoy using",
    body: [
      "I'm a frontend engineer in Dubai. If a site doesn't look good and feel easy on a phone, I'm not impressed by it, so that's the bar I hold my own work to.",
      "I do my best work between design and engineering: taking a Figma file and building it into something real, then paying attention to how people actually use it. At my current job, what users tell me about the CMS pages I built goes straight back into how I improve them.",
      "I like clear direction and a reliable source of truth. In return I bring the trade-offs and edge cases up early, so the decision is easy to make. I know my area well, and I'd rather say when I don't know something than bluff.",
      // TODO(Anna): add your Splash story paragraph here. Not written on purpose.
    ],
  },
  experience: {
    headline: "3+ years shipping production interfaces",
    intro:
      "What I owned in my current role.",
    items: [
      {
        title: "Early proofs of concept",
        description:
          "Often handed a new idea before it has a plan. I explore it, build it end to end, then hand it to the team.",
      },
      {
        title: "Figma to first release",
        description:
          "Took new products from design handoff to launch, working daily with design, QA, backend and DevOps.",
      },
      {
        title: "CMS pages, docs and dashboards",
        description:
          "Built CMS-driven pages, a public developer docs portal and internal back-office dashboards, and used how people used them to improve the next version.",
      },
      {
        title: "Live interfaces",
        description:
          "Built WebSocket-driven sections and data grids that update without a page reload.",
      },
    ],
  },
  projects: [
    {
      title: "Interval Walking Timer",
      description:
        "I wanted a simple, reliable way to get healthier, and a routine I'd actually stick with. This timer runs Japanese interval walking (3 minutes fast, 3 minutes slow) with audio cues, so there's nothing to decide mid-walk. Installable as a PWA. Live cadence detection from phone motion is next.",
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
    "Each preview is the real thing. I'll update this list as things ship. Give it a try!",
  contactHeading: "Let's talk about the role.",
  contactSupport:
    "If you're hiring a product engineer, remote or in Dubai, I'd love to hear what you're building.",
  nav: [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
