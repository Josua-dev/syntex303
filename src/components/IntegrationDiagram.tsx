import { integrationLayers } from '@/data/content';
import { Reveal } from './Reveal';
import { AnimatedText } from './AnimatedText';
import Timeline from './ui/timeline-05';

export function IntegrationDiagram() {
  const steps = integrationLayers.map((layer) => ({
    title: layer.label,
    description: layer.description,
    completed: true,
  }));

  return (
    <section
      id="integration"
      className="relative z-10 overflow-hidden bg-ink-900 text-white"
    >
      {/* Background photo — dimmed to keep the section's dark tone and text legible */}
      <img
        src="/images/systems-integration.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/80 to-ink-900/40" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left: heading */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-500">
                / 03 — Systems Integration
              </span>
            </Reveal>
            <div className="mt-6">
              <AnimatedText
                as="h2"
                text="Systems"
                className="text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.92] tracking-ultra-tight text-white"
              />
              <AnimatedText
                as="h2"
                text="that work"
                delay={0.15}
                className="text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.92] tracking-ultra-tight text-white"
              />
              <AnimatedText
                as="h2"
                text="as one."
                delay={0.3}
                className="text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.92] tracking-ultra-tight text-ink-500"
              />
            </div>
            <Reveal delay={0.2}>
              <p className="mt-10 max-w-md text-lg leading-[1.6] text-ink-400">
                Syntex does not simply sell technology. We integrate technology
                into complete working systems — each layer connected, each
                layer reinforcing the next.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-ink-700" />
                <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-500">
                  6 Integrated Layers
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right: vertical timeline of the integrated layers */}
          <div className="lg:col-span-7">
            <Timeline steps={steps} />
          </div>
        </div>
      </div>
    </section>
  );
}
