import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { integrationLayers } from '@/data/content';
import { Reveal } from './Reveal';

export function IntegrationDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setVisibleCount((prev) => {
          if (prev >= integrationLayers.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section
      id="integration"
      className="relative z-10 bg-ink-900 text-white"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left: heading */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="font-mono text-xs tracking-wide3 uppercase text-ink-500">
                / 03 — Systems Integration
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4rem)] font-medium leading-[1.0] tracking-ultra-tight text-white">
                Systems that work
                <br />
                <span className="text-ink-500">as one.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-lg leading-[1.6] text-ink-400">
                Syntex does not simply sell technology. Syntex integrates
                technology into complete working systems — each layer connected,
                each layer reinforcing the next.
              </p>
            </Reveal>
          </div>

          {/* Right: diagram */}
          <div ref={ref} className="lg:col-span-7">
            <div className="flex flex-col gap-0">
              {integrationLayers.map((layer, i) => {
                const isVisible = i < visibleCount;
                const isLast = i === integrationLayers.length - 1;
                return (
                  <div
                    key={layer.label}
                    className="group relative"
                    style={{
                      opacity: isVisible ? 1 : 0.15,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    {/* Connector line */}
                    {!isLast && (
                      <div className="absolute left-6 top-full h-px w-px">
                        <div
                          className="h-16 w-px bg-gradient-to-b from-ink-600 to-ink-800"
                          style={{
                            opacity: isVisible && i < visibleCount - 1 ? 1 : 0.3,
                            transition: 'opacity 0.6s',
                          }}
                        />
                      </div>
                    )}

                    <div className="flex items-center gap-6 py-5 transition-all duration-300 hover:pl-4">
                      {/* Node */}
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                          isVisible
                            ? 'border-white bg-ink-800'
                            : 'border-ink-700 bg-ink-900'
                        }`}
                      >
                        <div
                          className={`h-2 w-2 rounded-full transition-colors duration-500 ${
                            isVisible ? 'bg-white' : 'bg-ink-600'
                          }`}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col gap-1 border-b border-ink-800 pb-5">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-2xl font-medium tracking-tight text-white lg:text-3xl">
                            {layer.label}
                          </h3>
                          <span className="font-mono text-xs text-ink-600">
                            0{i + 1}
                          </span>
                        </div>
                        <p className="text-sm text-ink-500">
                          {layer.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
