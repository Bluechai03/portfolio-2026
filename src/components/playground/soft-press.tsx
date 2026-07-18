"use client";

import { useState } from "react";

export function SoftPress() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
      <button
        type="button"
        onClick={() => setCount((value) => value + 1)}
        className="soft-press font-display rounded-md bg-accent px-6 py-3 text-sm font-semibold tracking-[0.06em] text-bone uppercase transition-[transform,background-color,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-accent-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.97]"
      >
        Press me
      </button>
      <p className="text-sm text-muted tabular-nums" aria-live="polite">
        Presses: <span className="text-ink">{count}</span>
      </p>
    </div>
  );
}
