import { Badge, Button, TextField, color, space, tokens } from "@/design-system";
import { PageShell } from "@/components/page-shell";
import { system } from "@/content/system";
import type { ReactNode } from "react";

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

function TokensSection() {
  return (
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
  );
}

function ButtonSection() {
  return (
    <div className="rounded-md border border-line bg-bone/40 p-5 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button size="sm">Small</Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  );
}

function TextFieldSection() {
  return (
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
  );
}

function BadgeSection() {
  return (
    <div className="rounded-md border border-line bg-bone/40 p-5 md:p-8">
      <div className="flex flex-wrap gap-3">
        <Badge>Neutral</Badge>
        <Badge tone="accent">In progress</Badge>
        <Badge tone="success">Shipped</Badge>
      </div>
    </div>
  );
}

const sectionBodies: Record<string, ReactNode> = {
  tokens: <TokensSection />,
  button: <ButtonSection />,
  "text-field": <TextFieldSection />,
  badge: <BadgeSection />,
};

export function SystemPage() {
  return (
    <PageShell
      navLabel="Playground"
      navHref="/playground"
      eyebrow={system.eyebrow}
      title={system.title}
      support={system.support}
      sectionAriaLabel="Design system sections"
    >
      {system.sections.map((section) => (
        <article key={section.id} id={section.id} className="animate-rise border-t border-line pt-10">
          <div className="grid gap-8 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-12">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">{section.note}</p>
            </div>
            {sectionBodies[section.id]}
          </div>
        </article>
      ))}
    </PageShell>
  );
}
