import { site } from "@/content/site";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-line bg-bone/40"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-jade uppercase">
            Experience
          </p>
          <h2
            id="experience-heading"
            className="font-display mt-4 text-3xl leading-tight font-semibold tracking-tight text-ink md:text-4xl"
          >
            Shipping in production
          </h2>
        </div>

        <ol className="space-y-14">
          {site.experience.map((job) => (
            <li
              key={job.company}
              className="grid gap-6 border-t border-line pt-10 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-12"
            >
              <div>
                <p className="font-display text-xl font-semibold tracking-tight text-ink">
                  {job.role}
                </p>
                <p className="mt-2 text-base text-ink-soft">{job.company}</p>
                <p className="mt-1 text-sm text-muted">{job.period}</p>
              </div>
              <div>
                <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">{job.summary}</p>
                {job.highlights.length > 0 ? (
                  <ul className="mt-6 max-w-2xl space-y-2">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="relative pl-4 text-base leading-relaxed text-ink before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-jade before:content-['']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
