import { site } from "@/content/site";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-line"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.2fr] md:gap-16 md:px-10 md:py-28">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            {site.experience.eyebrow}
          </p>
          <h2
            id="experience-heading"
            className="font-display mt-4 max-w-[16ch] text-3xl leading-tight font-semibold tracking-tight text-ink md:text-4xl"
          >
            {site.experience.headline}
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-ink-soft">
            {site.experience.intro}
          </p>
        </div>

        <ul className="space-y-8 border-t border-line pt-8">
          {site.experience.items.map((item) => (
            <li key={item.title}>
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-2 max-w-xl text-base leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
