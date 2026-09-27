import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * AnimatedText — word-by-word text reveal (editorial style).
 *
 * Each word is wrapped in an `overflow-hidden` mask and rises from
 * `y: 100%` with a fade, staggered left → right (~70ms), triggered once
 * when the element scrolls into view. With `prefers-reduced-motion`
 * the text renders instantly with no animation.
 *
 * Screen readers receive the full sentence via an `sr-only` node; the
 * animated word spans are `aria-hidden`.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

type AnimatedTextProps = {
  /** The full sentence/heading to animate. */
  text: string;
  /** Semantic element to render. Default: 'h2'. */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  /** Extra Tailwind classes merged onto the element. */
  className?: string;
  /** Base delay before the first word, in seconds. Default: 0. */
  delay?: number;
  /** Stagger between words, in seconds. Default: 0.07. */
  stagger?: number;
};

export function AnimatedText({
  text,
  as: Tag = 'h2',
  className,
  delay = 0,
  stagger = 0.07,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const reduced = useReducedMotion();

  const words = text.split(' ').filter((w) => w.length > 0);
  const MotionTag = motion(Tag);

  return (
    <MotionTag ref={ref} className={cn('font-display', className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <motion.span
              className="inline-block will-change-transform"
              initial={reduced ? false : { y: '100%', opacity: 0 }}
              animate={inView || reduced ? { y: 0, opacity: 1 } : undefined}
              transition={{
                duration: 0.7,
                ease: EASE,
                delay: delay + i * stagger,
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </span>
    </MotionTag>
  );
}
