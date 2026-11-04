import { site } from '@/content/site'
import { Button } from '@/design-system'

export function Hero() {
  const [first, ...rest] = site.name.split(' ')

  return (
    <section
      id="top"
      className="grain relative isolate overflow-hidden"
      aria-labelledby="hero-brand"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(120% 80% at 12% 20%, var(--bone) 0%, transparent 55%), radial-gradient(90% 70% at 85% 30%, var(--glow-mist) 0%, transparent 50%), linear-gradient(165deg, var(--bg) 0%, var(--bg-deep) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-36 pb-20 md:px-10 md:pt-48 md:pb-28">
        {/* The name is the one big moment on the page; the second line steps in like a hanging indent. */}
        <h1
          id="hero-brand"
          className="animate-rise font-display text-[clamp(3.75rem,15vw,10rem)] leading-[0.86] font-semibold tracking-[-0.05em] text-ink"
        >
          <span className="block">{first}</span>
          <span className="block pl-[0.6em]">{rest.join(' ')}</span>
        </h1>
        <p className="animate-rise animate-rise-delay-1 mt-10 max-w-xl text-lg leading-relaxed text-ink-soft md:ml-[calc(0.6*clamp(3.75rem,15vw,10rem))] md:text-xl">
          {site.heroSupport}
        </p>
        <div className="animate-rise animate-rise-delay-2 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 md:ml-[calc(0.6*clamp(3.75rem,15vw,10rem))]">
          <Button href="#work">See the work</Button>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center text-sm font-semibold tracking-wide text-ink"
          >
            <span className="link-underline">Get in touch</span>
          </a>
        </div>
      </div>
    </section>
  )
}
