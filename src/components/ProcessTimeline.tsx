import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { processSteps } from '@/data/content';
import { Reveal } from './Reveal';

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineScale = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section
      id="process"
      className="relative z-10 bg-mist"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
        {/* Heading */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-400">
                / 04 — Engineering Process
              </span>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.92] tracking-ultra-tight text-ink-900">
                From requirement
                <br />
                <span className="text-ink-300">to real system.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Timeline */}
        <div
          ref={containerRef}
          className="mt-20 overflow-hidden lg:overflow-visible"
        >
          {/* Desktop timeline */}
          <div className="relative hidden lg:block">
            <div className="absolute left-0 top-[28px] h-px w-full bg-line" />
            <motion.div
              style={{ scaleX: lineScale }}
              className="absolute left-0 top-[28px] h-px w-full origin-left bg-ink-900"
            />

            <div className="grid grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex flex-col gap-6"
                >
                  {/* Number + dot */}
                  <div className="relative flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center bg-mist">
                      <span className="font-mono text-sm text-ink-900">
                        {step.number}
                      </span>
                    </div>
                    <div className="absolute left-[52px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-ink-900 bg-mist" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 border-t border-line pt-6">
                    <h3 className="font-display text-xl font-medium tracking-tight text-ink-900 lg:text-2xl">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-[1.5] text-ink-500">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="relative lg:hidden">
            <div className="absolute left-[19px] top-0 h-full w-px bg-line" />
            <motion.div
              style={{ scaleY: lineScale }}
              className="absolute left-[19px] top-0 h-full w-px origin-top bg-ink-900"
            />
            <div className="flex flex-col gap-12">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative flex gap-6"
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border border-ink-900 bg-mist">
                    <span className="font-mono text-[10px] text-ink-900">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 pt-1">
                    <h3 className="font-display text-xl font-medium tracking-tight text-ink-900">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-[1.5] text-ink-500">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
