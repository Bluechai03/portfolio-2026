import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/content/site";

type PageShellProps = {
  navLabel: string;
  navHref: string;
  eyebrow: string;
  title: string;
  support: string;
  sectionAriaLabel: string;
  children: ReactNode;
};

export function PageShell({
  navLabel,
  navHref,
  eyebrow,
  title,
  support,
  sectionAriaLabel,
  children,
}: PageShellProps) {
  return (
    <div className="relative min-h-full overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--glow-mist)_0%,_transparent_55%),linear-gradient(180deg,_var(--bg)_0%,_var(--bg-deep)_100%)]"
      />
      <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 opacity-40" />

      <header className="relative z-10 border-b border-line/70">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-6 md:px-10">
          <Link
            href="/"
            className="font-display text-sm font-semibold tracking-[0.08em] text-ink uppercase transition-colors hover:text-accent"
          >
            {site.name}
          </Link>
          <nav className="flex items-center gap-5">
            <Link
              href={navHref}
              className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {navLabel}
            </Link>
            <Link
              href="/"
              className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
            >
              Back home
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto w-full max-w-6xl px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-16">
          <p className="animate-rise font-display text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            {eyebrow}
          </p>
          <h1 className="animate-rise animate-rise-delay-1 font-display mt-4 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-ink md:text-6xl">
            {title}
          </h1>
          <p className="animate-rise animate-rise-delay-2 mt-5 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            {support}
          </p>
        </section>

        <section
          aria-label={sectionAriaLabel}
          className="mx-auto w-full max-w-6xl space-y-16 px-6 pb-24 md:space-y-20 md:px-10 md:pb-32"
        >
          {children}
        </section>
      </main>
    </div>
  );
}
