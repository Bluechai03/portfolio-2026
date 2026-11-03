import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import type { ReactNode } from "react";
import { ProjectPreview } from "@/components/project-previews";
import { site } from "@/content/site";

function isInternal(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

function ProjectLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  if (isInternal(href)) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export function Projects() {
  return (
    <section id="work" className="border-t border-line" aria-labelledby="work-heading">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 md:px-10 md:py-28">
        <div className="mb-12 max-w-2xl md:mb-16">
          <h2
            id="work-heading"
            className="font-display text-3xl leading-tight font-semibold tracking-tight text-ink md:text-4xl"
          >
            What I&apos;m working on
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-soft">
            {site.projectsIntro}
          </p>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {site.projects.map((project) => {
            return (
              <li key={project.title}>
                <div className="grid gap-8 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] md:items-center md:gap-16 md:py-14">
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{project.status}</p>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                      {project.description}
                    </p>
                    <ProjectLink
                      href={project.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-base font-semibold text-accent hover:text-accent-deep"
                    >
                      <span className="link-underline">{project.linkLabel}</span>
                      <span className="sr-only">: {project.title}</span>
                      {/* The icon marks links that leave this site. */}
                      {isInternal(project.href) ? null : (
                        <ArrowUpRightIcon size={16} aria-hidden="true" />
                      )}
                    </ProjectLink>
                  </div>
                  <figure className="h-56 overflow-hidden rounded-lg border border-line bg-bg-deep">
                    <figcaption className="sr-only">Live preview of {project.title}</figcaption>
                    <ProjectPreview name={project.preview} />
                  </figure>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
