import { playground } from "@/content/playground";
import { PageShell } from "@/components/page-shell";
import { SoftPress } from "@/components/playground/soft-press";
import { FocusPath } from "@/components/playground/focus-path";
import { QuietReveal } from "@/components/playground/quiet-reveal";
import { ConfirmToast } from "@/components/playground/confirm-toast";

const demos = {
  "soft-press": SoftPress,
  "focus-path": FocusPath,
  reveal: QuietReveal,
  "confirm-toast": ConfirmToast,
} as const;

export function PlaygroundPage() {
  return (
    <PageShell
      navLabel="System"
      navHref="/system"
      eyebrow={playground.eyebrow}
      title={playground.title}
      support={playground.support}
      sectionAriaLabel="Playground demos"
    >
      {playground.demos.map((demo, index) => {
        const Demo = demos[demo.id];
        return (
          <article
            key={demo.id}
            id={demo.id}
            className="animate-rise border-t border-line pt-10"
            style={{ animationDelay: `${0.18 + index * 0.08}s` }}
          >
            <div className="grid gap-8 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-12">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  {demo.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted">{demo.note}</p>
              </div>
              <div className="rounded-md border border-line bg-bone/40 p-5 md:p-8">
                <Demo />
              </div>
            </div>
          </article>
        );
      })}
    </PageShell>
  );
}
