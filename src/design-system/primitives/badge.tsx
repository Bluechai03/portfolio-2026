import type { ReactNode } from "react";

type BadgeTone = "neutral" | "accent" | "success";

type BadgeProps = {
  tone?: BadgeTone;
  children: ReactNode;
};

const toneClass: Record<BadgeTone, string> = {
  neutral: "border-line bg-bone/70 text-ink-soft",
  accent: "border-accent/25 bg-[color-mix(in_srgb,var(--accent)_10%,white)] text-accent-deep",
  success: "border-[color-mix(in_srgb,var(--success)_28%,transparent)] bg-[color-mix(in_srgb,var(--success)_10%,white)] text-[color:var(--success)]",
};

export function Badge({ tone = "neutral", children }: BadgeProps) {
  return (
    <span
      className={[
        "font-display inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold tracking-[0.08em] uppercase",
        toneClass[tone],
      ].join(" ")}
    >
      {children}
    </span>
  );
}
