export const site = {
  name: "Anna Montero",
  role: "Frontend Engineer",
  location: "Dubai · Philippines",
  email: "montero.katreena@gmail.com",
  github: "https://github.com/Bluechai03",
  mission:
    "I build beautiful, performant, production-ready digital experiences that combine thoughtful design with modern engineering.",
  heroSupport:
    "Frontend engineer in Dubai, focused on the seam of design and code — motion, spacing, accessibility, and the details that turn functional into delightful.",
  about: {
    headline: "From functional to delightful",
    body: [
      "I'm a software engineer based in Dubai, originally from the Philippines. I'm comfortable across the stack, but my passion is frontend — especially where engineering meets design.",
      "I care about the small details that make an application feel polished: animation, spacing, accessibility, responsiveness, performance, and thoughtful UX. Outside of work, dance and choreography keep me close to rhythm and timing — the same instincts I bring to interaction design.",
      "My long-term aim is Design Engineer and Product Engineer roles at product companies where craft and user experience are first-class.",
    ],
    strengths: [
      "User experience",
      "Visual hierarchy",
      "Motion & micro-interactions",
      "Component consistency",
      "Responsive design",
      "Accessibility",
      "Performance",
      "Design systems",
    ],
  },
  experience: [
    {
      role: "Frontend Developer",
      company: "Splash Software",
      period: "Nov 2022 – Present",
      summary:
        "Shipping production web apps with React, Next.js, and TypeScript — consumer surfaces, internal dashboards, CMS-backed pages, and real-time features. Partnering with design, backend, QA, and product to keep UI patterns consistent and performant.",
      highlights: [
        "Figma → production UI with MUI and Tailwind",
        "Reusable components and shared patterns",
        "Strapi / headless CMS integrations",
        "WebSockets, a11y, Core Web Vitals",
        "Deployments on Azure, Cloudflare, Netlify, Vercel",
      ],
    },
    {
      role: "Web Developer",
      company: "White Pearl Fashion LLC",
      period: "Earlier",
      summary:
        "Web development projects before Splash — building foundations in shipping interfaces for real businesses.",
      highlights: [],
    },
  ],
  projects: [
    {
      title: "iGaming Website",
      year: "Splash",
      description:
        "Production marketing and content pages in Next.js, React, and TypeScript — reusable UI, Strapi CMS, responsive layouts, and performance-minded delivery.",
      stack: ["Next.js", "TypeScript", "MUI", "Strapi"],
      status: "Shipped",
    },
    {
      title: "Casino Player Platform",
      year: "Splash",
      description:
        "User-facing product surfaces with real-time behavior over WebSockets — scalable frontend architecture for a live player experience.",
      stack: ["React", "Next.js", "TypeScript", "WebSockets"],
      status: "Shipped",
    },
    {
      title: "Back Office Dashboard",
      year: "Splash",
      description:
        "Internal dashboards and data visualizations — reusable admin components and Chart.js views for operators who live in the tools daily.",
      stack: ["React", "Next.js", "TypeScript", "Chart.js"],
      status: "Shipped",
    },
    {
      title: "Music Streaming Mini App",
      year: "Side",
      description:
        "Telegram mini app for music playback — responsive UI, Howler.js controls, deployed on Cloudflare Pages. A small product where delight lives in the interaction.",
      stack: ["React", "TypeScript", "MUI", "Howler.js"],
      status: "Shipped",
    },
    {
      title: "Portfolio 2026",
      year: "Now",
      description:
        "This site — a living proof of craft. Brand-first homepage, restrained motion, and a clear path from vision to ship.",
      stack: ["Next.js", "TypeScript", "Tailwind"],
      status: "In progress",
    },
  ],
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
