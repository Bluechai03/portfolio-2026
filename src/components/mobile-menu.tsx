"use client";

import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/content/site";

const links = [
  ...site.nav.map((item) => ({ ...item, external: false })),
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "GitHub", href: site.github, external: true },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative sm:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="-mr-2 flex size-10 flex-col items-center justify-center gap-[5px] text-ink"
      >
        <span
          className={`h-px w-5 bg-current transition-transform duration-200 ${open ? "translate-y-[3px] rotate-45" : ""}`}
        />
        <span
          className={`h-px w-5 bg-current transition-transform duration-200 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
        />
      </button>
      <nav
        id={menuId}
        aria-label="Primary"
        hidden={!open}
        className="absolute top-full right-0 mt-2 min-w-44 rounded-lg border border-line bg-bg-deep/95 p-2 shadow-lg backdrop-blur"
      >
        <ul className="flex flex-col">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="block rounded-md px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-bg hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
