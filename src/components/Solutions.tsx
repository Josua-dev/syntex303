import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { solutions } from '@/data/content';
import { Reveal } from './Reveal';

export function Solutions() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="solutions"
      className="relative z-10 bg-paper"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          {/* Left: heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <span className="font-mono text-xs tracking-wide3 uppercase text-ink-400">
                / 02 — Solutions
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-ultra-tight text-ink-900">
                Capabilities
                <br />
                <span className="text-ink-400">engineered to scale.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-sm text-base leading-[1.6] text-ink-500">
                Eight integrated capability areas covering the full spectrum of
                enterprise, security and utility technology.
              </p>
            </Reveal>

            {/* Image preview - desktop */}
            <div className="mt-10 hidden overflow-hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="aspect-[4/3] w-full overflow-hidden"
                >
                  <img
                    src={solutions[active].image}
                    alt={solutions[active].title}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: interactive list */}
          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {solutions.map((solution, i) => (
                <div
                  key={solution.number}
                  onMouseEnter={() => setActive(i)}
                  className="group border-b border-line transition-colors duration-300 hover:bg-mist"
                >
                  <a href="#contact" className="block">
                    <div className="flex items-center gap-6 px-2 py-7 transition-all duration-300 group-hover:px-6 lg:py-9">
                      <span className="font-mono text-sm text-ink-400 transition-colors group-hover:text-ink-900">
                        {solution.number}
                      </span>

                      <div className="flex flex-1 flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
                        <h3 className="font-display text-2xl font-medium tracking-tight text-ink-900 transition-transform duration-300 group-hover:translate-x-2 lg:text-3xl">
                          {solution.title}
                        </h3>
                        <p className="max-w-md text-sm leading-[1.5] text-ink-400 transition-colors duration-300 group-hover:text-ink-600 lg:text-base">
                          {solution.description}
                        </p>
                      </div>

                      <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink-900" />
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Image preview - mobile */}
            <div className="mt-8 overflow-hidden lg:hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-[16/9] w-full overflow-hidden"
                >
                  <img
                    src={solutions[active].image}
                    alt={solutions[active].title}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
