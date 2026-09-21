import { Reveal } from './Reveal';
import { company } from '@/data/content';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 bg-mist"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: meta */}
          <div className="lg:col-span-4">
            <Reveal>
              <span className="font-mono text-xs tracking-wide3 uppercase text-ink-400">
                / 10 — About
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col gap-6">
                <div>
                  <p className="font-mono text-xs tracking-wide2 uppercase text-ink-400">
                    Legal Name
                  </p>
                  <p className="mt-1 text-base text-ink-900">
                    {company.legalName}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs tracking-wide2 uppercase text-ink-400">
                    Incorporated
                  </p>
                  <p className="mt-1 text-base text-ink-900">
                    {company.incorporated}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs tracking-wide2 uppercase text-ink-400">
                    Location
                  </p>
                  <p className="mt-1 text-base text-ink-900">
                    {company.location}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs tracking-wide2 uppercase text-ink-400">
                    Tagline
                  </p>
                  <p className="mt-1 font-display text-lg text-ink-900">
                    {company.tagline}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: content */}
          <div className="lg:col-span-8">
            <Reveal delay={0.15}>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-medium leading-[1.1] tracking-ultra-tight text-ink-900">
                {company.about}
              </h2>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-8 max-w-2xl text-lg leading-[1.6] text-ink-600">
                {company.aboutExtended}
              </p>
            </Reveal>

            {/* Vision */}
            <Reveal delay={0.35}>
              <div className="mt-12 border-l-2 border-ink-900 pl-6">
                <p className="font-mono text-xs tracking-wide2 uppercase text-ink-400">
                  Our Vision
                </p>
                <p className="mt-3 font-display text-xl font-medium leading-[1.4] tracking-tight text-ink-900 lg:text-2xl">
                  {company.vision}
                </p>
              </div>
            </Reveal>

            {/* Values */}
            <div className="mt-16">
              <Reveal delay={0.4}>
                <p className="font-mono text-xs tracking-wide2 uppercase text-ink-400">
                  Our Values
                </p>
              </Reveal>
              <div className="mt-6 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
                {company.values.map((value, i) => (
                  <Reveal key={i} delay={0.45 + i * 0.05}>
                    <div className="flex flex-col gap-2 bg-mist p-6">
                      <h3 className="font-display text-lg font-medium tracking-tight text-ink-900">
                        {value.title}
                      </h3>
                      <p className="font-mono text-[11px] tracking-wide uppercase text-ink-400">
                        {value.subtitle}
                      </p>
                      <p className="mt-2 text-sm leading-[1.5] text-ink-500">
                        {value.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Missions */}
            <div className="mt-16">
              <Reveal delay={0.5}>
                <p className="font-mono text-xs tracking-wide2 uppercase text-ink-400">
                  Our Missions
                </p>
              </Reveal>
              <div className="mt-6 flex flex-col gap-4">
                {company.missions.map((mission, i) => (
                  <Reveal key={i} delay={0.55 + i * 0.08}>
                    <div className="flex items-start gap-4 border-b border-line pb-4">
                      <span className="mt-1 font-mono text-xs text-ink-400">
                        0{i + 1}
                      </span>
                      <p className="text-base leading-[1.5] text-ink-700">
                        {mission}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
