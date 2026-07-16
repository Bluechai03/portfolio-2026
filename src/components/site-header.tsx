import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-6 md:px-10">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-[0.08em] text-ink uppercase"
        >
          {site.name}
        </a>
        <div className="flex items-center gap-5 md:gap-8">
          <nav aria-label="Primary" className="flex items-center gap-5 md:gap-8">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <nav
            aria-label="Social"
            className="hidden items-center gap-5 border-l border-line pl-5 sm:flex md:gap-6 md:pl-8"
          >
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
