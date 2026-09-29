import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-line bg-bg-deep text-ink"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-10 md:py-20">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-muted uppercase">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="font-display mt-4 max-w-[14ch] text-3xl leading-tight font-semibold tracking-tight md:text-4xl"
          >
            {site.tagline}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            {site.contactSupport}
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <a
            href={`mailto:${site.email}`}
            className="link-underline font-display text-lg font-semibold tracking-tight"
          >
            {site.email}
          </a>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:justify-end">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-ink-soft hover:text-ink"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-ink-soft hover:text-ink"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
