export const playground = {
  title: "UI Playground",
  eyebrow: "Scratchpad",
  support:
    "A place to try little interaction ideas before I put them in a real project. Some will stick. Some won't.",
  demos: [
    {
      id: "soft-press",
      title: "Soft press",
      note: "I like buttons that feel pressed, not bouncy. Try click and keyboard.",
    },
    {
      id: "focus-path",
      title: "Focus path",
      note: "Tab through these — focus should be easy to follow without being loud.",
    },
    {
      id: "reveal",
      title: "Quiet reveal",
      note: "Hit Reveal stack for a simple staggered entrance.",
    },
    {
      id: "confirm-toast",
      title: "Confirm → toast",
      note: "Confirm first, then a small toast after. No drama.",
    },
  ],
} as const;
