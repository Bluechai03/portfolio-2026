import Link from "next/link";
import { playground } from "@/content/playground";
import { site } from "@/content/site";
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
    <div className="relative min-h-full overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--glow-mist)_0%,_transparent_55%),linear-gradient(180deg,_var(--bg)_0%,_var(--bg-deep)_100%)]"
      />
      <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 opacity-40" />

      <header className="relative z-10 border-b border-line/70">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-6 md:px-10">
          <Link
            href="/"
            className="font-display text-sm font-semibold tracking-[0.08em] text-ink uppercase transition-colors hover:text-accent"
          >
            {site.name}
          </Link>
          <Link
            href="/"
            className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
          >
            Back home
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto w-full max-w-6xl px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-16">
          <p className="animate-rise font-display text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            {playground.eyebrow}
          </p>
          <h1 className="animate-rise animate-rise-delay-1 font-display mt-4 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-ink md:text-6xl">
            {playground.title}
          </h1>
          <p className="animate-rise animate-rise-delay-2 mt-5 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            {playground.support}
          </p>
        </section>

        <section
          aria-label="Playground demos"
          className="mx-auto w-full max-w-6xl space-y-16 px-6 pb-24 md:space-y-20 md:px-10 md:pb-32"
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
        </section>
      </main>
    </div>
  );
}
