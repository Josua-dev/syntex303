import { partnerLogos } from '@/data/content';
import { Reveal } from './Reveal';

export function PartnerMarquee() {
  const row1 = [...partnerLogos, ...partnerLogos];
  const row2 = [...partnerLogos.slice().reverse(), ...partnerLogos.slice().reverse()];

  return (
    <section
      id="partners"
      className="relative z-10 bg-paper"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="font-mono text-xs tracking-wide3 uppercase text-ink-400">
                / 05 — Technology Partners
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-medium leading-[1.05] tracking-ultra-tight text-ink-900">
                Backed by the technology
                <br />
                <span className="text-ink-400">behind the world.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-sm text-base leading-[1.6] text-ink-500">
                Strategic partnerships with the world's leading technology
                providers — giving our clients access to enterprise-grade
                platforms and support.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            {/* Row 1 */}
            <div className="marquee-mask relative overflow-hidden py-6">
              <div className="flex w-max animate-marquee-left items-center gap-16">
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
                      className="max-h-12 w-auto opacity-50 transition-opacity duration-300 group-hover:opacity-100"
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Row 2 - opposite direction */}
            <div className="marquee-mask relative overflow-hidden py-6">
              <div className="flex w-max animate-marquee-right items-center gap-16">
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
                      className="max-h-12 w-auto opacity-50 transition-opacity duration-300 group-hover:opacity-100"
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
