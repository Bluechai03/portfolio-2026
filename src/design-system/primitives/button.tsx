import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "sm";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-bone hover:bg-accent-deep focus-visible:ring-accent disabled:bg-muted",
  secondary:
    "border border-line bg-bone/70 text-ink-soft hover:border-accent/40 hover:bg-bone hover:text-ink focus-visible:ring-accent",
  ghost:
    "bg-transparent text-ink-soft hover:bg-bone hover:text-ink focus-visible:ring-accent",
};

const sizeClass: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  sm: "px-3.5 py-2 text-xs",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        "font-display inline-flex items-center justify-center rounded-md font-semibold tracking-[0.06em] uppercase transition-[background-color,border-color,color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-55",
        variantClass[variant],
        sizeClass[size],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
