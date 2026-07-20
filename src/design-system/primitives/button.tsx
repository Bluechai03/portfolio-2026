import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "sm";

type ButtonOwnProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButtonProps = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: never };

type ButtonAsAnchorProps = ButtonOwnProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & { href: string };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const baseClass =
  "inline-flex items-center justify-center font-semibold tracking-wide transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-55";

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-accent text-bone hover:bg-accent-deep disabled:bg-muted",
  secondary:
    "border border-line bg-bone/70 text-ink-soft hover:border-accent/40 hover:bg-bone hover:text-ink",
  ghost: "bg-transparent text-ink-soft hover:bg-bone hover:text-ink",
};

const sizeClass: Record<ButtonSize, string> = {
  md: "h-12 px-7 text-sm",
  sm: "h-9 px-4 text-xs",
};

export function Button({ variant = "primary", size = "md", className = "", children, ...props }: ButtonProps) {
  const classes = [baseClass, variantClass[variant], sizeClass[size], className].join(" ");

  if (props.href !== undefined) {
    const { href, ...anchorProps } = props as Omit<ButtonAsAnchorProps, keyof ButtonOwnProps>;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as Omit<ButtonAsButtonProps, keyof ButtonOwnProps>;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
