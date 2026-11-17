import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { Badge } from "@/design-system";
import { strutCaseStudy as study } from "@/content/strut-case-study";

type Link = { readonly label: string; readonly href: string };

function LinkRow({ links }: { links: readonly Link[] }) {
  if (links.length === 0) return null;
  return (
    <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} className="link-underline text-sm font-semibold text-ink">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Bullets({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold tracking-[0.01em] text-accent">{title}</h3>
      <ul className="mt-3 space-y-2 text-base leading-relaxed text-ink-soft">
        {items.map((item) => (
          <li key={item} className="border-l-2 border-line pl-4">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StrutCaseStudy() {
  return (
    <PageShell
      navLabel="Work"
      navHref="/#work"
      eyebrow={study.eyebrow}
      title={study.title}
      support={study.support}
      sectionAriaLabel="Strut case study"
    >
      <figure className="animate-rise">
        <ul className="grid grid-cols-3 gap-3 md:gap-6">
          {study.screenshots.map((shot) => (
            <li key={shot.src} className="min-w-0">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={780}
                height={1520}
                className="h-auto w-full rounded-md border border-line"
              />
              <p className="mt-2 text-xs text-muted">{shot.caption}</p>
            </li>
          ))}
        </ul>
        <figcaption className="mt-4 text-sm text-muted">{study.screenshotNote}</figcaption>
      </figure>

      {study.sections.map((section) => (
        <article key={section.id} id={section.id} className="animate-rise border-t border-line pt-10">
          <div className="grid gap-8 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-12">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                {section.title}
              </h2>
              {"status" in section && (
                <div className="mt-3">
                  <Badge tone="accent">{section.status}</Badge>
                </div>
              )}
            </div>

            <div className="space-y-8">
              {"intro" in section && (
                <p className="text-lg leading-relaxed text-ink-soft">{section.intro}</p>
              )}
              {"paragraphs" in section &&
                section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-relaxed text-ink-soft">
                    {paragraph}
                  </p>
                ))}
              {"items" in section && (
                <ul className="space-y-8">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                      <p className="mt-2 text-base leading-relaxed text-ink-soft">{item.body}</p>
                      {"links" in item && <LinkRow links={item.links} />}
                    </li>
                  ))}
                </ul>
              )}
              {"works" in section && <Bullets title="Working now" items={section.works} />}
              {"next" in section && <Bullets title="Still to do" items={section.next} />}
              {"links" in section && <LinkRow links={section.links} />}
            </div>
          </div>
        </article>
      ))}

      <footer className="border-t border-line pt-10">
        <p className="text-sm text-muted">Numbers on this page were true on {study.asOf}.</p>
        <LinkRow links={study.links} />
      </footer>
    </PageShell>
  );
}
