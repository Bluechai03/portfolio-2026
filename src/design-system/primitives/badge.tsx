import type { ReactNode } from "react";

type BadgeTone = "neutral" | "accent" | "success";

type BadgeProps = {
  tone?: BadgeTone;
  className?: string;
  children: ReactNode;
};

const toneClass: Record<BadgeTone, string> = {
  neutral: "border-line bg-bone/70 text-ink-soft",
  accent: "border-accent/25 bg-accent/10 text-accent-deep",
  success: "border-success/25 bg-success/10 text-success",
};

export function Badge({ tone = "neutral", className = "", children }: BadgeProps) {
  return (
    <span
      className={[
        "font-display inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold tracking-[0.08em] uppercase",
        toneClass[tone],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
