"use client";

const steps = ["Start", "Details", "Review", "Confirm"] as const;

export function FocusPath() {
  return (
    <div className="flex flex-wrap gap-3" role="group" aria-label="Focus path steps">
      {steps.map((step, index) => (
        <button
          key={step}
          type="button"
          className="focus-chip font-display rounded-md border border-line bg-bone/60 px-4 py-2.5 text-sm font-medium tracking-[0.04em] text-ink-soft transition-[color,background-color,border-color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent/40 hover:bg-bone hover:text-ink focus-visible:z-10 focus-visible:border-accent focus-visible:bg-bone focus-visible:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.98]"
        >
          <span className="mr-2 text-muted tabular-nums">{String(index + 1).padStart(2, "0")}</span>
          {step}
        </button>
      ))}
    </div>
  );
}
