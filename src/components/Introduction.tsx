import { Reveal, StaggerText } from './Reveal';

export function Introduction() {
  return (
    <section
      id="introduction"
      className="relative z-10 -mt-px bg-mist"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-3">
            <Reveal>
              <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-400">
                / 01 — Introduction
              </span>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 hidden flex-col gap-4 lg:flex">
                <div className="h-px w-12 bg-ink-900" />
                <span className="font-mono text-[11px] tracking-wide2 uppercase text-ink-400">
                  Synergy to Excel
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <StaggerText>
              <h2 className="font-display text-[clamp(2rem,5.5vw,5rem)] font-medium leading-[1.0] tracking-ultra-tight text-ink-900">
                We do not supply
                <br />
                technology.
              </h2>
            </StaggerText>
            <StaggerText delay={0.15}>
              <h2 className="mt-2 font-display text-[clamp(2rem,5.5vw,5rem)] font-medium leading-[1.0] tracking-ultra-tight text-ink-300">
                We engineer
                <br />
                working systems.
              </h2>
            </StaggerText>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-3xl">
              <Reveal delay={0.2}>
                <p className="text-lg leading-[1.6] text-ink-600">
                  Syntex Technologies integrates multiple technologies into
                  dependable infrastructure. From security and enterprise
                  platforms to utility billing and network infrastructure,
                  every layer is designed to work as one.
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <p className="text-lg leading-[1.6] text-ink-600">
                  Connected, monitored and supported for the long term —
                  engineered for organisations across Namibia and Southern
                  Africa since 2008.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
