import { Reveal, StaggerText } from './Reveal';
import { ArrowUpRight } from 'lucide-react';

export function CTA() {
  return (
    <section
      id="contact"
      className="relative z-10 bg-ink-900 text-white"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-32 lg:px-10 lg:py-48">
        <div className="flex flex-col items-start gap-12">
          <Reveal>
            <span className="font-mono text-xs tracking-wide3 uppercase text-ink-500">
              / 11 — Contact
            </span>
          </Reveal>

          <StaggerText>
            <h2 className="font-display text-[clamp(2.5rem,8vw,7rem)] font-medium leading-[0.9] tracking-ultra-tight text-white">
              Let's engineer
              <br />
              <span className="text-ink-500">what's next.</span>
            </h2>
          </StaggerText>

          <Reveal delay={0.2}>
            <p className="max-w-xl text-lg leading-[1.6] text-ink-400">
              Talk to Syntex about your next infrastructure, security or
              enterprise systems project. Our team will respond to your inquiry
              as soon as possible.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <a
                href="mailto:sales@syntexnam.com"
                className="group inline-flex items-center gap-4 bg-white px-8 py-5 text-sm font-medium tracking-wide2 uppercase text-ink-900 transition-all duration-300 hover:gap-6"
              >
                Start a Conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <div className="flex flex-col gap-2 text-sm text-ink-400">
                <a href="mailto:sales@syntexnam.com" className="transition-colors hover:text-white">
                  sales@syntexnam.com
                </a>
                <a href="tel:+26461309171" className="transition-colors hover:text-white">
                  +264 61 309 171
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
