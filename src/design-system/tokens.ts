/**
 * Atelier tokens (dark: brown, tan, mocha + blue) — single source for color, type, space, and radius.
 * CSS variables in globals.css stay the runtime source; this mirrors them for TS.
 */
export const color = {
  bg: "#120b08",
  bgDeep: "#0b0705",
  ink: "#faf3ea",
  inkSoft: "#efe2d4",
  muted: "#e8bf96",
  line: "color-mix(in srgb, #faf3ea 8%, transparent)",
  accent: "#6ea8dd",
  accentDeep: "#9fc7ee",
  mocha: "#a88b74",
  bone: "#211712",
  glowMist: "#1f3a52",
  danger: "#f08a7c",
  success: "#7fc98c",
} as const;

export const space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
} as const;

export const radius = {
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
} as const;

export const font = {
  sans: "var(--font-figtree), ui-sans-serif, sans-serif",
  display: "var(--font-syne), ui-sans-serif, sans-serif",
} as const;

export const type = {
  label: {
    size: "0.75rem",
    weight: 600,
    tracking: "0.14em",
    transform: "uppercase" as const,
  },
  body: {
    size: "1rem",
    weight: 400,
    tracking: "0",
  },
  title: {
    size: "1.25rem",
    weight: 600,
    tracking: "-0.02em",
  },
} as const;

export const motion = {
  ease: "cubic-bezier(0.22, 1, 0.36, 1)",
  fast: "160ms",
  base: "220ms",
} as const;

export const tokens = {
  color,
  space,
  radius,
  font,
  type,
  motion,
} as const;

export type ColorToken = keyof typeof color;
export type SpaceToken = keyof typeof space;
