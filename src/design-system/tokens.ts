/**
 * Atelier tokens — single source for color, type, space, and radius.
 * CSS variables in globals.css stay the runtime source; this mirrors them for TS.
 */
export const color = {
  bg: "#eef3f8",
  bgDeep: "#d7e3ef",
  ink: "#12181f",
  inkSoft: "#3a4550",
  muted: "#5c6b78",
  line: "color-mix(in srgb, #12181f 12%, transparent)",
  accent: "#005b96",
  accentDeep: "#004578",
  bone: "#f5f8fb",
  glowMist: "#b8cfe3",
  danger: "#b42318",
  success: "#2e7d32",
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
