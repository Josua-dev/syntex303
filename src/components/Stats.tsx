import { Reveal } from './Reveal';

export function Stats() {
  const stats = [
    { value: '2008', label: 'Incorporated in Namibia' },
    { value: '10+', label: 'Countries with Syntex systems deployed' },
    { value: '12+', label: 'Global technology partners' },
    { value: '6', label: 'Core values guiding every project' },
  ];

  return (
    <section className="relative z-10 bg-paper">
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-400">
                / 09 — Proof
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.0] tracking-ultra-tight text-ink-900">
                Built on evidence,
                <br />
                <span className="text-ink-300">not promises.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-0 border-t border-l border-line lg:grid-cols-4">
              {stats.map((stat, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex flex-col gap-4 border-b border-r border-line p-6 lg:p-10">
                    <span className="font-display text-[clamp(2.5rem,5vw,4rem)] font-medium tracking-ultra-tight text-ink-900">
                      {stat.value}
                    </span>
                    <span className="text-sm leading-[1.4] text-ink-500">
                      {stat.label}
                    </span>
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
