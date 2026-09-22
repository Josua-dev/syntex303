import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { solutions } from '@/data/content';
import { Reveal } from './Reveal';

export function Solutions() {
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
      id="solutions"
      className="relative z-10 bg-paper"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
        {/* Heading */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-400">
                / 02 — Solutions
              </span>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.95] tracking-ultra-tight text-ink-900">
                Eight capability
                <br />
                <span className="text-ink-300">areas. One system.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Interactive rows */}
        <div
          ref={sectionRef}
          onMouseMove={handleMouseMove}
          className="relative mt-20"
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
                src={solutions[active].image}
                alt={solutions[active].title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-ink-900/10" />
            </motion.div>
          </AnimatePresence>

          {/* Rows */}
          <div className="border-t border-line">
            {solutions.map((solution, i) => (
              <div
                key={solution.number}
                onMouseEnter={() => setActive(i)}
                className="group border-b border-line"
              >
                <a href="#contact" className="block">
                  <div className="flex items-center gap-4 py-6 transition-all duration-500 group-hover:px-4 lg:py-8 lg:gap-8">
                    <span className="font-mono text-sm text-ink-300 transition-colors duration-300 group-hover:text-ink-900">
                      {solution.number}
                    </span>

                    <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-medium tracking-tight text-ink-400 transition-all duration-500 group-hover:translate-x-2 group-hover:text-ink-900">
                      {solution.title}
                    </h3>

                    <p className="ml-auto hidden max-w-xs text-sm leading-[1.5] text-ink-300 transition-colors duration-300 group-hover:text-ink-600 lg:block">
                      {solution.description}
                    </p>

                    <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-200 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink-900" />
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
                  src={solutions[active].image}
                  alt={solutions[active].title}
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
