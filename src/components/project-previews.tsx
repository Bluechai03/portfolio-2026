"use client";

import { Barlow_Condensed } from "next/font/google";
import { useState } from "react";
import { Badge, Button } from "@/design-system";

// The timer preview uses the app's own countdown face.
const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: ["600"] });

// Colors from the interval walking timer's phase fields.
const TIMER_PHASES = {
  fast: { label: "Walk fast", time: "2:47", background: "#ffc21a", color: "#14213d" },
  slow: { label: "Walk slow", time: "1:12", background: "#123f3a", color: "#e6f2ee" },
} as const;

function TimerPreview() {
  const [phase, setPhase] = useState<keyof typeof TIMER_PHASES>("fast");
  const current = TIMER_PHASES[phase];
  // Round 2 of 5: the first round is walked, the current phase is part done.
  const walkedPhases = phase === "fast" ? 2 : 3;

  return (
    <div
      className="flex h-full flex-col justify-between gap-3 p-5 transition-colors duration-500"
      style={{ background: current.background, color: current.color }}
    >
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-lg font-semibold">{current.label}</p>
        <button
          type="button"
          onClick={() => setPhase(phase === "fast" ? "slow" : "fast")}
          className="rounded-md border border-current px-2.5 py-1 text-xs font-semibold focus-visible:outline-current"
        >
          Switch phase
        </button>
      </div>
      <p className={`${barlowCondensed.className} text-7xl leading-none tabular-nums`}>
        {current.time}
      </p>
      <div className="flex h-8 items-end gap-1" aria-hidden="true">
        {Array.from({ length: 10 }, (_, i) => (
          <span
            key={i}
            className={`flex-1 rounded-sm bg-current ${i % 2 === 0 ? "h-full" : "h-[40%]"} ${
              i < walkedPhases ? "" : i === walkedPhases ? "opacity-60" : "opacity-15"
            }`}
          />
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
