import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const heroTextY = useTransform(scrollY, [0, 500], [0, -80]);
  const imageY = useTransform(scrollY, [0, 600], [0, 60]);

  const lines = ['ENGINEERING', 'THE SYSTEMS', 'THAT KEEP', 'BUSINESS MOVING.'];

  return (
    <section
      id="top"
      className="relative h-screen w-full overflow-hidden bg-paper"
    >
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="absolute inset-0"
      >
        <div className="grid h-full grid-cols-1 lg:grid-cols-12">
          {/* Left: Typography */}
          <div className="col-span-1 flex flex-col justify-end px-6 pb-16 pt-32 lg:col-span-7 lg:px-10 lg:pb-20 lg:pt-32">
            <motion.div style={{ y: heroTextY }} className="flex flex-col gap-1">
              <div className="mb-6 flex items-center gap-4">
                <span className="font-mono text-xs tracking-wide3 uppercase text-ink-400">
                  / ICT Systems Integrator
                </span>
                <span className="h-px w-12 bg-ink-300" />
              </div>
              {lines.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: '100%' }}
                    animate={mounted ? { y: 0 } : { y: '100%' }}
                    transition={{
                      delay: 0.3 + i * 0.12,
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="font-display text-[clamp(2.5rem,7vw,6.5rem)] font-medium leading-[0.9] tracking-ultra-tight text-ink-900"
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-10 flex items-center gap-6"
            >
              <a
                href="#solutions"
                className="group flex items-center gap-3 text-sm font-medium tracking-wide2 uppercase text-ink-900"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-900 transition-colors group-hover:bg-ink-900 group-hover:text-paper">
                  <ArrowDown className="h-4 w-4" />
                </span>
                Explore Solutions
              </a>
            </motion.div>
          </div>

          {/* Right: Image */}
          <div className="relative col-span-1 hidden lg:col-span-5 lg:block">
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-0 h-[120%]"
            >
              <img
                src="https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Data center server infrastructure"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-paper via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Mobile image strip */}
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] lg:hidden">
          <img
            src="https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Data center server infrastructure"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-paper to-transparent" />
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 right-6 hidden flex-col items-center gap-3 lg:flex"
        >
          <span className="font-mono text-[10px] tracking-wide3 uppercase text-ink-400 [writing-mode:vertical-rl]">
            Scroll
          </span>
          <div className="h-12 w-px bg-ink-300">
            <div className="h-1/2 w-full animate-pulse bg-ink-900" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
