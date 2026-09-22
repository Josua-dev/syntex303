import { partnerLogos } from '@/data/content';
import { Reveal } from './Reveal';

export function PartnerMarquee() {
  const row1 = [...partnerLogos, ...partnerLogos];
  const row2 = [...partnerLogos.slice().reverse(), ...partnerLogos.slice().reverse()];

  return (
    <section
      id="partners"
      className="relative z-10 overflow-hidden bg-paper"
    >
      <div className="mx-auto max-w-[1600px] px-6 pt-24 lg:px-10 lg:pt-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-400">
                / 05 — Technology Partners
              </span>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.92] tracking-ultra-tight text-ink-900">
                Backed by
                <br />
                <span className="text-ink-300">the technology</span>
                <br />
                behind the world.
              </h2>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Full-width marquee rows */}
      <div className="mt-16 lg:mt-24">
        {/* Row 1 */}
        <div className="marquee-mask relative overflow-hidden py-5">
          <div className="flex w-max animate-marquee-left items-center gap-20">
            {row1.map((logo, i) => (
              <a
                key={`r1-${i}`}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex shrink-0 items-center justify-center transition-transform duration-300 hover:scale-110"
                aria-label={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-10 w-auto opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Row 2 - opposite direction */}
        <div className="marquee-mask relative overflow-hidden py-5">
          <div className="flex w-max animate-marquee-right items-center gap-20">
            {row2.map((logo, i) => (
              <a
                key={`r2-${i}`}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex shrink-0 items-center justify-center transition-transform duration-300 hover:scale-110"
                aria-label={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-10 w-auto opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom metadata bar */}
      <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-12 lg:px-10 lg:pb-32">
        <div className="flex items-center justify-between border-t border-line pt-6">
          <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-400">
            {partnerLogos.length} Strategic Partners
          </span>
          <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-400">
            Enterprise-grade Platforms
          </span>
        </div>
      </div>
    </section>
  );
}
