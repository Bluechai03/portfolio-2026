export const system = {
  title: "Design System",
  eyebrow: "Work in progress",
  support:
    "Just the basics for now — shared colors, spacing, and a few components I can reuse. I'll add Storybook later when there's more to show.",
  sections: [
    {
      id: "tokens",
      title: "Tokens",
      note: "The shared colors, spacing, and type I want the rest of the site to pull from.",
    },
    {
      id: "button",
      title: "Button",
      note: "Primary for the main thing, secondary when it's not, ghost when it should stay out of the way.",
    },
    {
      id: "text-field",
      title: "Text field",
      note: "Label, hint, and error states — the usual stuff, hopefully a little nicer.",
    },
    {
      id: "badge",
      title: "Badge",
      note: "Tiny status labels. Easy to overuse, so I'm keeping these simple.",
    },
  ],
} as const;
