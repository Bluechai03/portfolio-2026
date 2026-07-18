import Link from "next/link";
import { Badge, Button, TextField, color, space, tokens } from "@/design-system";
import { site } from "@/content/site";
import { system } from "@/content/system";

const swatches = [
  { name: "accent", value: color.accent },
  { name: "ink", value: color.ink },
  { name: "inkSoft", value: color.inkSoft },
  { name: "muted", value: color.muted },
  { name: "bg", value: color.bg },
  { name: "bgDeep", value: color.bgDeep },
  { name: "bone", value: color.bone },
  { name: "success", value: color.success },
  { name: "danger", value: color.danger },
] as const;

const spaces = (["2", "3", "4", "5", "6", "8"] as const).map((key) => ({
  name: key,
  value: space[key],
}));

export function SystemPage() {
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
          <nav className="flex items-center gap-5">
            <Link
              href="/playground"
              className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
            >
              Playground
            </Link>
            <Link
              href="/"
              className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
            >
              Back home
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto w-full max-w-6xl px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-16">
          <p className="animate-rise font-display text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            {system.eyebrow}
          </p>
          <h1 className="animate-rise animate-rise-delay-1 font-display mt-4 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-ink md:text-6xl">
            {system.title}
          </h1>
          <p className="animate-rise animate-rise-delay-2 mt-5 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            {system.support}
          </p>
        </section>

        <section
          aria-label="Design system sections"
          className="mx-auto w-full max-w-6xl space-y-16 px-6 pb-24 md:space-y-20 md:px-10 md:pb-32"
        >
          <article id="tokens" className="animate-rise border-t border-line pt-10">
            <div className="grid gap-8 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-12">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  {system.sections[0].title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted">{system.sections[0].note}</p>
              </div>
              <div className="space-y-8 rounded-md border border-line bg-bone/40 p-5 md:p-8">
                <div>
                  <p className="font-display text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                    Color
                  </p>
                  <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {swatches.map((swatch) => (
                      <li key={swatch.name} className="min-w-0">
                        <div
                          className="h-12 rounded-md border border-line"
                          style={{ background: swatch.value }}
                          aria-hidden
                        />
                        <p className="mt-2 truncate font-display text-xs font-semibold tracking-[0.06em] text-ink uppercase">
                          {swatch.name}
                        </p>
                        <p className="truncate text-xs text-muted">{swatch.value}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-display text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                    Space
                  </p>
                  <ul className="mt-4 space-y-2">
                    {spaces.map((item) => (
                      <li key={item.name} className="flex items-center gap-4">
                        <span className="font-display w-8 text-xs font-semibold text-muted tabular-nums">
                          {item.name}
                        </span>
                        <span
                          className="h-3 rounded-sm bg-accent/80"
                          style={{ width: item.value }}
                          aria-hidden
                        />
                        <span className="text-xs text-muted">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-display text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                    Type
                  </p>
                  <div className="mt-4 space-y-3">
                    <p className="font-display text-2xl font-semibold tracking-tight text-ink">
                      Syne for headings
                    </p>
                    <p className="text-base leading-relaxed text-ink-soft">
                      Figtree for everything else. That&apos;s the pairing for now.
                    </p>
                    <p className="text-sm text-muted">
                      Corner radius: {tokens.radius.sm} / {tokens.radius.md} / {tokens.radius.lg}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article id="button" className="border-t border-line pt-10">
            <div className="grid gap-8 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-12">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  {system.sections[1].title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted">{system.sections[1].note}</p>
              </div>
              <div className="rounded-md border border-line bg-bone/40 p-5 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button size="sm">Small</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </div>
          </article>

          <article id="text-field" className="border-t border-line pt-10">
            <div className="grid gap-8 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-12">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  {system.sections[2].title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted">{system.sections[2].note}</p>
              </div>
              <div className="space-y-6 rounded-md border border-line bg-bone/40 p-5 md:p-8">
                <TextField
                  label="Display name"
                  hint="Shown on your public profile."
                  placeholder="Anna Montero"
                  defaultValue="Anna Montero"
                />
                <TextField
                  label="Email"
                  error="Enter a valid email address."
                  placeholder="you@example.com"
                  defaultValue="anna@"
                />
              </div>
            </div>
          </article>

          <article id="badge" className="border-t border-line pt-10">
            <div className="grid gap-8 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-12">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  {system.sections[3].title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted">{system.sections[3].note}</p>
              </div>
              <div className="rounded-md border border-line bg-bone/40 p-5 md:p-8">
                <div className="flex flex-wrap gap-3">
                  <Badge>Neutral</Badge>
                  <Badge tone="accent">In progress</Badge>
                  <Badge tone="success">Shipped</Badge>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
