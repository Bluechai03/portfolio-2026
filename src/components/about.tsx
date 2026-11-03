import { site } from "@/content/site";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-line"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 md:grid-cols-[1fr_1.2fr] md:gap-16 md:px-10 md:py-28">
        <div>
          <h2
            id="about-heading"
            className="font-display max-w-[16ch] text-3xl leading-tight font-semibold tracking-tight text-ink md:text-4xl"
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
        </div>
      </div>
    </section>
  );
}
