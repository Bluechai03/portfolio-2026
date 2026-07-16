import { site } from "@/content/site";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-line bg-bone/40"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.35fr] md:gap-16 md:px-10 md:py-28">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-jade uppercase">
            About
          </p>
          <h2
            id="about-heading"
            className="font-display mt-4 max-w-[14ch] text-3xl leading-tight font-semibold tracking-tight text-ink md:text-4xl"
          >
            {site.about.headline}
          </h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
            {site.mission}
          </p>
        </div>

        <div className="space-y-6">
          {site.about.body.map((paragraph) => (
            <p key={paragraph} className="max-w-xl text-lg leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}

          <div className="mt-10 border-t border-line pt-8">
            <p className="font-display text-xs font-semibold tracking-[0.18em] text-muted uppercase">
              Where I obsess
            </p>
            <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {site.about.strengths.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
