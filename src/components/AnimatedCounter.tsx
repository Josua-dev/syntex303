import { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

type AnimatedCounterProps = {
  /** Final numeric value to count up to. */
  to: number;
  /** Suffix preserved after counting, e.g. "+". */
  suffix?: string;
  /** Animation duration in seconds. */
  duration?: number;
  /** Optional start delay in seconds. */
  delay?: number;
  className?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function AnimatedCounter({
  to,
  suffix = '',
  duration = 1.8,
  delay = 0,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;

    if (reducedMotion) {
      el.textContent = `${to}${suffix}`;
      return;
    }

    const controls = animate(0, to, {
      duration,
      delay,
      ease: EASE,
      onUpdate: (value) => {
        el.textContent = `${Math.round(value)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, duration, delay, reducedMotion]);

  return (
    <span
      ref={ref}
      className={className}
      role="text"
      aria-label={`${to}${suffix}`}
    >
      0{suffix}
    </span>
  );
}
