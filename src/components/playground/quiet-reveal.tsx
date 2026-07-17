"use client";

import { useState, type CSSProperties } from "react";

const items = [
  "Clear hierarchy before decoration",
  "Motion that explains state, not noise",
  "Focus rings that survive real keyboards",
] as const;

export function QuietReveal() {
  const [open, setOpen] = useState(true);

  return (
    <div className="space-y-5">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="quiet-reveal-list"
        onClick={() => setOpen((value) => !value)}
        className="font-display text-sm font-semibold tracking-[0.08em] text-accent uppercase transition-colors hover:text-accent-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        {open ? "Hide stack" : "Reveal stack"}
      </button>

      <ul
        id="quiet-reveal-list"
        className="space-y-3"
        data-open={open ? "true" : "false"}
      >
        {items.map((item, index) => (
          <li
            key={item}
            className="reveal-item rounded-md border border-line bg-bone/50 px-4 py-3 text-base leading-relaxed text-ink-soft"
            style={{ "--reveal-index": index } as CSSProperties}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
