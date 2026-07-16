import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-line bg-ink text-bone"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-10 md:py-20">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="font-display mt-4 max-w-[14ch] text-3xl leading-tight font-semibold tracking-tight md:text-4xl"
          >
            {site.tagline}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-bone/70">
            Smallest thing I can ship today — then share it. Reach out if you want to build
            together.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <a
            href={`mailto:${site.email}`}
            className="link-underline font-display text-lg font-semibold tracking-tight"
          >
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm text-bone/70 hover:text-bone"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
