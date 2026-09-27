import { Reveal, FadeUp } from './Reveal';
import { AnimatedText } from './AnimatedText';
import { Accordion05 } from '@/components/ui/accordion-05';
import { company } from '@/data/content';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 bg-mist"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-40">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-400">
              / 10 — About
            </span>
          </Reveal>

          {/* Meta facts — centered row */}
          <Reveal delay={0.1} className="w-full">
            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 border-y border-line py-10 text-left sm:grid-cols-4">
              <div>
                <p className="font-mono text-[11px] tracking-wide2 uppercase text-ink-400">
                  Legal Name
                </p>
                <p className="mt-1 text-base text-ink-900">
                  {company.legalName}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-wide2 uppercase text-ink-400">
                  Incorporated
                </p>
                <p className="mt-1 text-base text-ink-900">
                  {company.incorporated}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-wide2 uppercase text-ink-400">
                  Location
                </p>
                <p className="mt-1 text-base text-ink-900">
                  {company.location}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-wide2 uppercase text-ink-400">
                  Tagline
                </p>
                <p className="mt-1 font-display text-lg text-ink-900">
                  {company.tagline}
                </p>
              </div>
            </div>
          </Reveal>

          <AnimatedText
            as="h2"
            text={company.about}
            className="mt-20 text-[clamp(1.5rem,3vw,2.75rem)] font-medium leading-[1.15] tracking-tight text-ink-900"
          />
          <Reveal delay={0.25}>
            <p className="mt-8 text-lg leading-[1.6] text-ink-600">
              {company.aboutExtended}
            </p>
          </Reveal>

          {/* Vision */}
          <Reveal delay={0.35} className="w-full">
            <div className="mx-auto mt-12 max-w-xl text-center">
              <p className="font-mono text-[11px] tracking-wide2 uppercase text-ink-400">
                Our Vision
              </p>
              <p className="mt-3 font-display text-xl font-medium leading-[1.4] tracking-tight text-ink-900 lg:text-2xl">
                {company.vision}
              </p>
            </div>
          </Reveal>

          {/* Values — accordion list */}
          <div className="mt-16 flex w-full flex-col items-center text-center">
            <Reveal delay={0.4}>
              <p className="font-mono text-[11px] tracking-wide2 uppercase text-ink-400">
                Our Values
              </p>
            </Reveal>
            <FadeUp delay={0.45} className="w-full max-w-2xl text-left">
              <div className="mt-6 border-t border-line">
                <Accordion05 />
              </div>
            </FadeUp>
          </div>

          {/* Missions */}
          <div className="mt-16 w-full">
            <Reveal delay={0.5}>
              <p className="font-mono text-[11px] tracking-wide2 uppercase text-ink-400">
                Our Missions
              </p>
            </Reveal>
            <div className="mt-6 flex flex-col gap-0 border-t border-line text-left">
              {company.missions.map((mission, i) => (
                <Reveal key={i} delay={0.55 + i * 0.08}>
                  <div className="flex items-start gap-4 border-b border-line py-5 lg:gap-8">
                    <span className="mt-1 font-mono text-xs text-ink-300">
                      0{i + 1}
                    </span>
                    <p className="text-base leading-[1.5] text-ink-600">
                      {mission}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
