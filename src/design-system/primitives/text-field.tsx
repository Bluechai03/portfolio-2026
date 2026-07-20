"use client";

import { useId, type InputHTMLAttributes } from "react";

type TextFieldProps = {
  label: string;
  hint?: string;
  error?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "id">;

export function TextField({
  label,
  hint,
  error,
  className = "",
  ...props
}: TextFieldProps) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={["flex w-full max-w-sm flex-col gap-2", className].join(" ")}>
      <label htmlFor={id} className="font-display text-xs font-semibold tracking-[0.12em] text-ink uppercase">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={describedBy}
        className={[
          "rounded-md border bg-bone/60 px-3.5 py-2.5 text-base text-ink outline-none transition-[border-color,box-shadow,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] placeholder:text-muted",
          error
            ? "border-danger focus-visible:ring-2 focus-visible:ring-danger"
            : "border-line focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent",
        ].join(" ")}
        {...props}
      />
      {error ? (
        <p id={errorId} className="text-sm text-danger" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="text-sm text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
