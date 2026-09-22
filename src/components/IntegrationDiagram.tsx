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
      }, 180);
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
              <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-500">
                / 03 — Systems Integration
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.92] tracking-ultra-tight text-white">
                Systems
                <br />
                that work
                <br />
                <span className="text-ink-500">as one.</span>
              </h2>
            </Reveal>
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

          {/* Right: schematic diagram */}
          <div ref={ref} className="lg:col-span-7">
            <div className="flex flex-col">
              {integrationLayers.map((layer, i) => {
                const isVisible = i < visibleCount;
                const isLast = i === integrationLayers.length - 1;
                return (
                  <div
                    key={layer.label}
                    className="group relative"
                    style={{
                      opacity: isVisible ? 1 : 0.1,
                      transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                      transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    {/* Connector — vertical line between layers */}
                    {!isLast && (
                      <div
                        className="absolute left-[27px] top-[60px] w-px"
                        style={{
                          height: '32px',
                          background: isVisible && i < visibleCount - 1
                            ? 'linear-gradient(to bottom, #4a4a4a, #2e2e2e)'
                            : '#1c1c1c',
                          transition: 'background 0.6s',
                        }}
                      />
                    )}

                    <div className="flex items-center gap-6 py-4 transition-all duration-300 group-hover:translate-x-2">
                      {/* Schematic node */}
                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center border transition-all duration-500"
                        style={{
                          borderColor: isVisible ? '#4a4a4a' : '#1c1c1c',
                          background: isVisible ? '#1c1c1c' : '#0a0a0a',
                        }}
                      >
                        <span
                          className="font-mono text-[11px] tracking-wide2 transition-colors duration-500"
                          style={{
                            color: isVisible ? '#ffffff' : '#4a4a4a',
                          }}
                        >
                          {layer.code}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col gap-1 border-b border-ink-800 pb-4">
                        <div className="flex items-baseline justify-between">
                          <h3 className="font-display text-xl font-medium tracking-tight text-white lg:text-2xl">
                            {layer.label}
                          </h3>
                          <span className="font-mono text-[11px] text-ink-600">
                            L0{i + 1}
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

              {/* Base bar */}
              <div
                className="mt-2 flex h-3 w-full items-center"
                style={{
                  background: visibleCount >= integrationLayers.length
                    ? '#ffffff'
                    : '#1c1c1c',
                  transition: 'background 0.8s',
                }}
              />
              <div className="mt-3 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-wide3 uppercase text-ink-600">
                  Integrated Stack
                </span>
                <span className="font-mono text-[10px] tracking-wide3 uppercase text-ink-600">
                  SYNTEX / v2.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
