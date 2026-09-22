import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from './Reveal';

export function NamibiaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '18%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

  return (
    <section
      id="namibia"
      ref={ref}
      className="relative z-10 overflow-hidden bg-paper"
    >
      {/* Full-width parallax image */}
      <div className="relative h-[80vh] w-full overflow-hidden lg:h-screen">
        <motion.div style={{ y }} className="absolute inset-0 h-[130%]">
          <img
            src="https://images.pexels.com/photos/39260645/pexels-photo-39260645.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Namibian landscape — vast road under dramatic sky in Hardap Region"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/10 to-ink-900/30" />

        {/* Overlay text */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex flex-col justify-end px-6 pb-12 lg:px-10 lg:pb-20"
        >
          <Reveal>
            <span className="font-mono text-[11px] tracking-wide3 uppercase text-white/60">
              / 07 — Engineered in Namibia
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-4xl font-display text-[clamp(3rem,9vw,8rem)] font-medium leading-[0.85] tracking-ultra-tight text-white">
              Engineered
              <br />
              in Namibia.
            </h2>
          </Reveal>
        </motion.div>
      </div>

      {/* Content below image */}
      <div className="mx-auto max-w-[1600px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4 lg:col-start-2">
            <Reveal>
              <p className="text-lg leading-[1.6] text-ink-600">
                Syntex understands the environments in which Namibian
                organisations operate. We engineer systems around real
                operational requirements — from Windhoek to the most remote
                industrial sites.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-7">
            <Reveal delay={0.15}>
              <p className="text-lg leading-[1.6] text-ink-600">
                Our solutions are built to perform in African conditions,
                backed by local support and a commitment to the social
                development of the communities in which we operate.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 flex items-center gap-6">
                <div className="h-px flex-1 bg-line" />
                <span className="font-mono text-[11px] tracking-wide3 uppercase text-ink-400">
                  Windhoek — Est. 2008
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
