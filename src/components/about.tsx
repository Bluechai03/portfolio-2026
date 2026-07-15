import { site } from "@/content/site";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-line bg-bone/40"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.2fr] md:gap-16 md:px-10 md:py-28">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-jade uppercase">
            About
          </p>
          <h2
            id="about-heading"
            className="font-display mt-4 max-w-[16ch] text-3xl leading-tight font-semibold tracking-tight text-ink md:text-4xl"
          >
            {site.about.headline}
          </h2>
        </div>

        <div className="space-y-6">
          {site.about.body.map((paragraph) => (
            <p key={paragraph} className="max-w-xl text-lg leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-8">
            {site.about.focus.map((item) => (
              <li
                key={item}
                className="font-display text-sm font-medium tracking-[0.06em] text-ink uppercase"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
