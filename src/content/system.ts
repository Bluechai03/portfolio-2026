export const system = {
  title: "Design System",
  eyebrow: "Atelier slice",
  support:
    "A small, honest foundation — tokens and a few primitives first. Storybook comes when the set earns it.",
  sections: [
    {
      id: "tokens",
      title: "Tokens",
      note: "Color, space, and type that keep the portfolio and playground speaking the same language.",
    },
    {
      id: "button",
      title: "Button",
      note: "Primary for the main action, secondary for the quiet alternative, ghost when the surface should stay calm.",
    },
    {
      id: "text-field",
      title: "Text field",
      note: "Label, hint, and error as first-class — not afterthoughts.",
    },
    {
      id: "badge",
      title: "Badge",
      note: "Small status without shouting. Use sparingly.",
    },
  ],
} as const;
