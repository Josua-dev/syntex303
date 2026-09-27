import { Reveal } from './Reveal';
import { AnimatedText } from './AnimatedText';

export function Introduction() {
  return (
    <section
      id="introduction"
      className="relative z-10 -mt-px bg-mist"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-40">
        <div className="flex flex-col items-center gap-12 text-center">
          <Reveal>
            <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-400">
              / 01 — Introduction
            </span>
          </Reveal>

          <div className="flex flex-col items-center">
            <AnimatedText
              as="h2"
              text="We do not supply technology."
              className="text-[clamp(2rem,5.5vw,5rem)] font-medium leading-[1.0] tracking-ultra-tight text-ink-900"
            />
            <AnimatedText
              as="h2"
              text="We engineer working systems."
              delay={0.35}
              className="mt-2 text-[clamp(2rem,5.5vw,5rem)] font-medium leading-[1.0] tracking-ultra-tight text-ink-300"
            />

            <div className="mt-16 grid grid-cols-1 gap-8 text-left md:grid-cols-2 lg:max-w-3xl">
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
