export const site = {
  name: "Anna Montero",
  role: "Product-minded frontend developer, open to product engineer roles",
  url: "https://annamontero.dev",
  email: "montero.katreena@gmail.com",
  github: "https://github.com/Bluechai03",
  linkedin: "https://www.linkedin.com/in/anna-montero-3a36301a4/",
  resume: "/resume.pdf",
  heroSupport:
    "Product-minded frontend developer in Dubai, 4+ years, open to product engineer roles. I build React, Next.js and TypeScript interfaces that look right and feel easy on a phone.",
  about: {
    headline: "Interfaces people enjoy using",
    body: [
      "I'm a product-minded frontend developer in Dubai. Whatever I build has to look good and feel easy on a phone, and that is the bar I hold my own work to.",
      "I do my best work between design and engineering: taking a Figma file and building it into something real, then paying attention to how people actually use it. At my current job, what users tell me about the CMS pages I built goes straight back into how I improve them.",
      "I like clear direction and a reliable source of truth. In return I bring the trade-offs and edge cases up early, so the decision is easy to make. I know my area well, and I'd rather say when I don't know something than bluff.",
      // TODO(Anna): add your Splash story paragraph here. Not written on purpose.
    ],
  },
  experience: {
    headline: "4+ years shipping production interfaces",
    intro:
      "Frontend Developer since 2022. Here is what I owned in my current role.",
    items: [
      {
        title: "Early proofs of concept",
        description:
          "I'm often handed a new idea before it has a plan. I explore it, build it end to end, then hand it to the team.",
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
        title: "Real-time interfaces",
        description:
          "Built WebSocket-driven sections and data grids that update without a page reload.",
      },
    ],
  },
  projects: [
    {
      title: "Strut",
      description:
        "I wanted a simple, reliable way to get healthier, and a routine I'd actually stick with. Strut is a timer for Japanese interval walking (3 minutes fast, 3 minutes slow) with audio cues, so there's nothing to decide mid-walk. It also works for the elliptical and bike, installs on your Home Screen, and friends can start a crew and walk in step. Written in TypeScript, with a Supabase backend and automated tests.",
      status: "Live",
      preview: "timer",
      links: [
        { label: "Open the app", href: "https://strutwalk.vercel.app" },
        { label: "Read the case study", href: "/work/interval-walking-timer" },
      ],
    },
    {
      title: "Portfolio 2026",
      description:
        "This site: Next.js and TypeScript, with automated checks on every pull request and a page of build notes on what I chose and what I turned down.",
      status: "Live",
      preview: "portfolio",
      links: [
        { label: "View the code on GitHub", href: "https://github.com/Bluechai03/portfolio-2026" },
        { label: "Read the build notes", href: "/how-its-built" },
      ],
    },
  ],
  projectsIntro:
    "Each preview is a small working sample of the project. I'll update this list as things ship. Give it a try!",
  contactHeading: "Let's talk!",
  contactSupport:
    "I'm open to frontend and product engineering roles, remote or here in Dubai. If any of my work caught your eye, I'd love to chat!",
  nav: [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
