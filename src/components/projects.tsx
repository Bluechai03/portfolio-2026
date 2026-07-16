import { site } from "@/content/site";

export function Projects() {
  return (
    <section id="work" className="border-t border-line" aria-labelledby="work-heading">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            Selected work
          </p>
          <h2
            id="work-heading"
            className="font-display mt-4 text-3xl leading-tight font-semibold tracking-tight text-ink md:text-4xl"
          >
            Building in the open
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-soft">
            {site.projectsIntro}
          </p>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {site.projects.map((project, index) => (
            <li key={project.title}>
              <a
                href={project.href}
                className="project-row group grid gap-4 py-8 outline-none focus-visible:bg-bone/70 md:grid-cols-[4rem_1fr_8rem] md:items-baseline md:gap-8 md:py-10"
              >
                <span className="font-display text-sm tracking-wide text-muted tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted">{project.year}</span>
                  </div>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                    {project.description}
                  </p>
                </div>
                <span className="font-display text-sm font-medium tracking-[0.08em] text-accent uppercase md:justify-self-end">
                  {project.status}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
