import { Reveal } from './Reveal';
import { AnimatedText } from './AnimatedText';
import { AnimatedCounter } from './AnimatedCounter';
import { DraggableTrack } from './DraggableTrack';

export function Stats() {
  const stats = [
    { value: 2008, suffix: '', label: 'Incorporated in Namibia' },
    { value: 10, suffix: '+', label: 'Countries with Syntex systems deployed' },
    { value: 12, suffix: '+', label: 'Global technology partners' },
    { value: 6, suffix: '', label: 'Core values guiding every project' },
    { value: 18, suffix: '+', label: 'Years of Excellence' },
  ];

  return (
    <section className="relative z-10 overflow-hidden bg-paper">
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-400">
              / 09 — Proof
            </span>
          </Reveal>
          <div>
            <AnimatedText
              as="h2"
              text="Built on evidence,"
              className="text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.0] tracking-ultra-tight text-ink-900"
            />
            <AnimatedText
              as="h2"
              text="not promises."
              delay={0.25}
              className="text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.0] tracking-ultra-tight text-ink-300"
            />
          </div>
        </div>
      </div>

      {/* Interactive horizontal statistics canvas */}
      <div className="mx-auto max-w-[1600px] pb-24 lg:pb-32">
        <DraggableTrack className="mt-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex w-[16rem] shrink-0 flex-col gap-4 border-l border-line px-8 py-6 first:border-l-0 sm:w-[18rem] lg:w-[20rem] lg:px-12 lg:py-10"
            >
              <AnimatedCounter
                to={stat.value}
                suffix={stat.suffix}
                delay={i * 0.1}
                className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-medium tracking-ultra-tight text-ink-900"
              />
              <span className="text-sm leading-[1.4] text-ink-500">
                {stat.label}
              </span>
            </div>
          ))}
        </DraggableTrack>
      </div>
    </section>
  );
}
