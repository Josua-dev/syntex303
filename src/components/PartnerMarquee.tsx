import { partnerLogos } from '@/data/content';
import { Reveal } from './Reveal';
import { AnimatedText } from './AnimatedText';
import { LogoCloud } from '@/components/ui/logo-cloud-3';

export function PartnerMarquee() {
  const logos = partnerLogos.map((logo) => ({
    src: logo.src,
    alt: logo.name,
    href: logo.url,
  }));

  return (
    <section
      id="partners"
      className="relative z-10 overflow-hidden bg-paper"
    >
      <div className="mx-auto max-w-[1600px] px-6 pt-24 lg:px-10 lg:pt-32">
        <div className="flex flex-col items-center gap-8 text-center">
          <Reveal>
            <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-400">
              / 05 — Technology Partners
            </span>
          </Reveal>
          <div>
            <AnimatedText
              as="h2"
              text="Backed by"
              className="text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.92] tracking-ultra-tight text-ink-900"
            />
            <AnimatedText
              as="h2"
              text="the technology"
              delay={0.15}
              className="text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.92] tracking-ultra-tight text-ink-300"
            />
            <AnimatedText
              as="h2"
              text="behind the world."
              delay={0.3}
              className="text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.92] tracking-ultra-tight text-ink-900"
            />
          </div>
        </div>
      </div>

      {/* Full-width marquee rows */}
      <div className="mt-16 lg:mt-24">
        {/* Row 1 */}
        <div className="py-5">
          <LogoCloud
            logos={logos}
            className="py-0 [&_img]:opacity-40 [&_img]:transition-opacity [&_img]:duration-300 [&_img:hover]:opacity-100"
          />
        </div>

        {/* Row 2 - opposite direction */}
        <div className="py-5">
          <LogoCloud
            reverse={false}
            logos={[...logos].reverse()}
            className="py-0 [&_img]:opacity-40 [&_img]:transition-opacity [&_img]:duration-300 [&_img:hover]:opacity-100"
          />
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
