import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { industries } from '@/data/content';
import { Reveal } from './Reveal';

export function Industries() {
  const [active, setActive] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 400, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 40 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - 240);
    mouseY.set(e.clientY - rect.top - 160);
  };

  return (
    <section
      id="industries"
      className="relative z-10 bg-ink-900 text-white"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-40">
        {/* Heading */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-500">
                / 06 — Industries
              </span>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.92] tracking-ultra-tight text-white">
                Organisations
                <br />
                <span className="text-ink-500">we serve.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Interactive rows */}
        <div
          ref={sectionRef}
          onMouseMove={handleMouseMove}
          className="relative mt-16 lg:mt-20"
        >
          {/* Floating image preview — desktop */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ x: springX, y: springY }}
              className="pointer-events-none absolute left-0 top-0 z-20 hidden h-[320px] w-[480px] overflow-hidden lg:block"
            >
              <img
                src={industries[active].image}
                alt={industries[active].name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-ink-900/20" />
            </motion.div>
          </AnimatePresence>

          {/* Rows */}
          <div className="border-t border-ink-800">
            {industries.map((industry, i) => (
              <div
                key={industry.name}
                onMouseEnter={() => setActive(i)}
                className="group border-b border-ink-800"
              >
                <a href="#contact" className="block">
                  <div className="flex items-center gap-4 py-6 transition-all duration-500 group-hover:px-4 lg:py-8 lg:gap-8">
                    <span className="font-mono text-sm text-ink-600 transition-colors duration-300 group-hover:text-white">
                      0{i + 1}
                    </span>

                    <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-medium tracking-tight text-ink-400 transition-all duration-500 group-hover:translate-x-2 group-hover:text-white">
                      {industry.name}
                    </h3>

                    <p className="ml-auto hidden max-w-xs text-sm leading-[1.5] text-ink-600 transition-colors duration-300 group-hover:text-ink-300 lg:block">
                      {industry.description}
                    </p>

                    <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Mobile image preview */}
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
                  src={industries[active].image}
                  alt={industries[active].name}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
