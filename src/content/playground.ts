export const playground = {
  title: "UI Playground",
  eyebrow: "Interaction lab",
  support:
    "A quiet place to try motion, focus, and control ideas — then keep only what feels steady and useful.",
  demos: [
    {
      id: "soft-press",
      title: "Soft press",
      note: "Buttons should feel pressed, not bounced. Try click, keyboard, and reduced motion.",
    },
    {
      id: "focus-path",
      title: "Focus path",
      note: "Keyboard focus should be obvious without shouting. Tab through the path.",
    },
    {
      id: "reveal",
      title: "Quiet reveal",
      note: "Press Reveal stack to play a staggered entrance — calm enough to use in real UI.",
    },
    {
      id: "confirm-toast",
      title: "Confirm → toast",
      note: "Ask once, then acknowledge quietly. Confirm in the dialog; the toast is just the receipt.",
    },
  ],
} as const;
