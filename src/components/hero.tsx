import { site } from "@/content/site";
import { HeroVisual } from "@/components/hero-visual";

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative isolate flex min-h-svh flex-col justify-end overflow-hidden"
      aria-labelledby="hero-brand"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 12% 20%, #f4f7f8 0%, transparent 55%), radial-gradient(90% 70% at 85% 30%, var(--glow-mist) 0%, transparent 50%), linear-gradient(165deg, var(--bg) 0%, var(--bg-deep) 100%)",
        }}
      />
      <HeroVisual />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32">
        <p className="animate-rise font-display text-sm font-semibold tracking-[0.22em] text-jade uppercase">
          {site.role}
          <span className="mx-2 text-muted" aria-hidden="true">
            ·
          </span>
          <span className="text-ink-soft">{site.location}</span>
        </p>
        <h1
          id="hero-brand"
          className="animate-rise animate-rise-delay-1 font-display mt-4 max-w-[12ch] text-[clamp(3.25rem,12vw,7.5rem)] leading-[0.9] font-semibold tracking-[-0.04em] text-ink"
        >
          {site.name}
        </h1>
        <p className="animate-rise animate-rise-delay-2 mt-6 max-w-lg text-lg leading-relaxed text-ink-soft md:text-xl">
          {site.heroSupport}
        </p>
        <div className="animate-rise animate-rise-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex h-12 items-center justify-center bg-jade px-7 text-sm font-semibold tracking-wide text-bone transition-colors hover:bg-jade-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jade"
          >
            View work
          </a>
          <a
            href="#contact"
            className="link-underline inline-flex h-12 items-center text-sm font-semibold tracking-wide text-ink"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
