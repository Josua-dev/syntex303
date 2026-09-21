import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { industries } from '@/data/content';
import { Reveal } from './Reveal';

export function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="industries"
      className="relative z-10 bg-ink-900 text-white"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: heading + image */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="font-mono text-xs tracking-wide3 uppercase text-ink-500">
                / 06 — Industries
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4rem)] font-medium leading-[1.0] tracking-ultra-tight text-white">
                Organisations
                <br />
                <span className="text-ink-500">we serve.</span>
              </h2>
            </Reveal>

            <div className="mt-10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="aspect-[4/3] w-full overflow-hidden"
                >
                  <img
                    src={industries[active].image}
                    alt={industries[active].name}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: industry list */}
          <div className="lg:col-span-7">
            <div className="border-t border-ink-800">
              {industries.map((industry, i) => (
                <div
                  key={industry.name}
                  onMouseEnter={() => setActive(i)}
                  className="group border-b border-ink-800 transition-colors duration-300"
                >
                  <a href="#contact" className="block">
                    <div className="flex items-center gap-6 py-7 transition-all duration-300 group-hover:px-4 lg:py-8">
                      <span className="font-mono text-sm text-ink-600 transition-colors group-hover:text-white">
                        0{i + 1}
                      </span>

                      <div className="flex flex-1 flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
                        <h3 className="font-display text-2xl font-medium tracking-tight text-ink-300 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white lg:text-3xl">
                          {industry.name}
                        </h3>
                        <p className="max-w-md text-sm leading-[1.5] text-ink-600 transition-colors duration-300 group-hover:text-ink-400 lg:text-base">
                          {industry.description}
                        </p>
                      </div>

                      <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
