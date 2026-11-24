import { PageShell } from "@/components/page-shell";
import { buildNotes } from "@/content/build-notes";

type Link = { readonly label: string; readonly href: string };

type Item = {
  readonly title: string;
  readonly text: string;
  readonly turnedDown?: string;
};

function LinkRow({ links }: { links: readonly Link[] }) {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2">
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

function Items({ items }: { items: readonly Item[] }) {
  return (
    <ul className="space-y-8">
      {items.map((item) => (
        <li key={item.title} className="border-l-2 border-line pl-5">
          <h3 className="font-display text-base font-semibold tracking-[0.01em] text-ink">{item.title}</h3>
          <p className="mt-2 text-base leading-relaxed text-ink-soft">{item.text}</p>
          {item.turnedDown && (
            <p className="mt-2 text-base leading-relaxed text-muted">
              <span className="font-semibold text-ink-soft">What I turned down: </span>
              {item.turnedDown}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

export function BuildNotesPage() {
  return (
    <PageShell
      navLabel="Playground"
      navHref="/playground"
      eyebrow={buildNotes.eyebrow}
      title={buildNotes.title}
      support={buildNotes.support}
      sectionAriaLabel="Build notes sections"
    >
      {buildNotes.sections.map((section) => (
        <article key={section.id} id={section.id} className="animate-rise border-t border-line pt-10">
          <div className="grid gap-8 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-12">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">{section.title}</h2>
            <div className="space-y-6">
              {"paragraphs" in section &&
                section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-ink-soft">
                    {paragraph}
                  </p>
                ))}
              {"items" in section && <Items items={section.items} />}
              {"links" in section && <LinkRow links={section.links} />}
            </div>
          </div>
        </article>
      ))}
    </PageShell>
  );
}
