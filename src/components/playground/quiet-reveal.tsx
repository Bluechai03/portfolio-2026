"use client";

import { useId, useState, type CSSProperties } from "react";

const items = [
  "Clear hierarchy before decoration",
  "Motion that explains state, not noise",
  "Focus rings that survive real keyboards",
] as const;

export function QuietReveal() {
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [cycle, setCycle] = useState(0);

  function toggle() {
    setOpen((current) => {
      const next = !current;
      if (next) {
        setCycle((value) => value + 1);
      }
      return next;
    });
  }

  return (
    <div className="space-y-5">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={toggle}
        className="font-display text-sm font-semibold tracking-[0.08em] text-accent uppercase transition-colors hover:text-accent-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        {open ? "Hide stack" : "Reveal stack"}
      </button>

      {open ? (
        <ul key={cycle} id={listId} className="space-y-3">
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
      ) : (
        <p id={listId} className="text-sm text-muted">
          Stack is hidden — reveal it to see the staggered entrance.
        </p>
      )}
    </div>
  );
}
