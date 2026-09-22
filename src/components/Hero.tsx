import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const heroScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const heroTextY = useTransform(scrollY, [0, 500], [0, -60]);
  const imageY = useTransform(scrollY, [0, 700], [0, 80]);
  const metadataY = useTransform(scrollY, [0, 300], [0, -30]);

  const lines = ['ENGINEERING', 'THE SYSTEMS', 'THAT KEEP', 'BUSINESS MOVING.'];

  return (
    <section
      id="top"
      className="sticky top-0 h-screen w-full overflow-hidden bg-paper"
      style={{ zIndex: 0 }}
    >
      <motion.div
        style={{ opacity: heroOpacity }}
        className="absolute inset-0"
      >
        <motion.div
          style={{ scale: heroScale }}
          className="grid h-full grid-cols-1 lg:grid-cols-12"
        >
          {/* Left: Typography */}
          <div className="col-span-1 flex flex-col justify-end px-6 pb-16 pt-28 lg:col-span-7 lg:px-10 lg:pb-24 lg:pt-32">
            <motion.div style={{ y: heroTextY }} className="flex flex-col gap-1">
              <motion.div
                style={{ y: metadataY }}
                className="mb-8 flex items-center gap-4"
              >
                <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-400">
                  / ICT Systems Integrator
                </span>
                <span className="h-px w-12 bg-ink-300" />
                <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-400">
                  Est. 2008
                </span>
              </motion.div>

              {lines.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: '110%' }}
                    animate={mounted ? { y: 0 } : { y: '110%' }}
                    transition={{
                      delay: 0.4 + i * 0.1,
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="font-display text-[clamp(2.25rem,7.5vw,7rem)] font-medium leading-[0.88] tracking-ultra-tight text-ink-900"
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-12 flex items-center gap-6"
            >
              <a
                href="#solutions"
                className="group flex items-center gap-3 text-sm font-medium tracking-wide2 uppercase text-ink-900"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-ink-900 transition-all duration-300 group-hover:bg-ink-900 group-hover:text-paper">
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
                src="https://images.pexels.com/photos/17489160/pexels-photo-17489160.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Data centre server infrastructure"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/20 to-transparent" />
            </motion.div>

            {/* Technical metadata overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="absolute bottom-8 right-8 flex flex-col items-end gap-2 text-right"
            >
              <span className="font-mono text-[10px] tracking-wide3 uppercase text-white/80">
                Infrastructure / Data Centre
              </span>
              <span className="font-mono text-[10px] tracking-wide3 uppercase text-white/60">
                Windhoek, NA
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile image strip */}
        <div className="absolute bottom-0 left-0 right-0 h-[25vh] lg:hidden">
          <img
            src="https://images.pexels.com/photos/17489160/pexels-photo-17489160.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Data centre server infrastructure"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/40 to-transparent" />
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
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
