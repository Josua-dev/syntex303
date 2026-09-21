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
              <span className="font-mono text-xs tracking-wide3 uppercase text-ink-400">
                / 01 — Introduction
              </span>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <StaggerText>
              <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-ultra-tight text-ink-900">
                Systems that work
                <br />
                <span className="text-ink-400">together.</span>
              </h2>
            </StaggerText>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-3xl">
              <Reveal delay={0.2}>
                <p className="text-lg leading-[1.6] text-ink-600">
                  Syntex Technologies integrates multiple technologies into
                  dependable infrastructure. We do not simply supply technology
                  — we engineer complete working systems for organisations
                  across Namibia and Southern Africa.
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <p className="text-lg leading-[1.6] text-ink-600">
                  From security and enterprise platforms to utility billing and
                  network infrastructure, every layer is designed to work as
                  one — connected, monitored and supported for the long term.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
