"use client";

import { Archivo } from "next/font/google";
import { useState } from "react";
import { Badge, Button } from "@/design-system";

// The timer preview uses the app's own countdown face: one variable font whose
// width axis gives the narrow numerals and the wide instruction.
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], display: "swap" });

// Colours from Strut, the interval walking timer: crimson for hard, deep blue for easy.
const TIMER_PHASES = {
  fast: { label: "Walk fast", time: "2:47", background: "#c0392b", color: "#f4f6f8" },
  slow: { label: "Walk slow", time: "1:12", background: "#163a70", color: "#f4f6f8" },
} as const;

function TimerPreview() {
  const [phase, setPhase] = useState<keyof typeof TIMER_PHASES>("fast");
  const current = TIMER_PHASES[phase];
  // Round 2 of 5: the first round is walked, the current phase is part done.
  const walkedPhases = phase === "fast" ? 2 : 3;

  return (
    <div
      className={`${archivo.className} flex h-full flex-col justify-between gap-3 p-5 transition-colors duration-500`}
      style={{ background: current.background, color: current.color }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium">Walk</p>
          <p className="text-2xl leading-none" style={{ fontWeight: 800, fontVariationSettings: '"wdth" 112' }}>
            {current.label}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setPhase(phase === "fast" ? "slow" : "fast")}
          className="rounded-full border-2 border-current px-3 py-1 text-xs font-semibold focus-visible:outline-current"
        >
          Switch phase
        </button>
      </div>
      <p
        className="text-7xl leading-none tabular-nums"
        style={{ fontWeight: 800, fontVariationSettings: '"wdth" 68' }}
      >
        {current.time}
      </p>
      <div className="flex h-10 items-end gap-1" aria-hidden="true">
        {Array.from({ length: 10 }, (_, i) => (
          <span
            key={i}
            className={`relative flex-1 overflow-hidden rounded-sm border-2 border-current ${
              i % 2 === 0 ? "h-full" : "h-[40%]"
            }`}
          >
            <span
              className={`absolute inset-0 bg-current ${
                i < walkedPhases ? "" : i === walkedPhases ? "opacity-60" : "opacity-15"
              }`}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

const SWATCHES = [
  { name: "Bone", value: "var(--bone)" },
  { name: "Mocha", value: "var(--mocha)" },
  { name: "Tan", value: "var(--muted)" },
  { name: "Ink", value: "var(--ink)" },
  { name: "Blue", value: "var(--accent)" },
];

// The site's own tokens and components, from its design system.
function PortfolioPreview() {
  return (
    <div className="flex h-full flex-col justify-between gap-4 p-5">
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">Save changes</Button>
        <Button size="sm" variant="secondary">
          Cancel
        </Button>
        <Badge tone="success">Live</Badge>
      </div>
      <ul className="grid grid-cols-5 gap-1.5">
        {SWATCHES.map((swatch) => (
          <li key={swatch.name} className="min-w-0">
            <span
              className="block h-8 rounded-sm border border-line"
              style={{ background: swatch.value }}
            />
            <span className="mt-1 block truncate text-xs text-ink-soft">{swatch.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const PREVIEWS = {
  timer: TimerPreview,
  portfolio: PortfolioPreview,
};

// Looked up here because a server component can't read this client module's objects.
export function ProjectPreview({ name }: { name: keyof typeof PREVIEWS }) {
  const Preview = PREVIEWS[name];
  return <Preview />;
}
