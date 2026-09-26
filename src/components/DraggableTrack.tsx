import { useRef, useState, useCallback } from 'react';
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
  animate,
} from 'framer-motion';

type DraggableTrackProps = {
  children: React.ReactNode;
  className?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;
/** Rubber-band factor applied when dragging past the bounds. */
const RESISTANCE = 0.35;
/** Velocity (px/s) below which inertia stops. */
const MIN_VELOCITY = 20;

/**
 * A horizontally draggable track with momentum, inertia, rubber-band
 * resistance at the boundaries, and smooth settling. The outer viewport
 * uses overflow-hidden so the page never scrolls horizontally.
 */
export function DraggableTrack({ children, className = '' }: DraggableTrackProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const reducedMotion = useReducedMotion();

  const dragging = useRef(false);
  const startX = useRef(0);
  const startPointer = useRef(0);
  const lastPointer = useRef(0);
  const lastTime = useRef(0);
  const velocity = useRef(0);
  const momentum = useRef<{ stop: () => void } | null>(null);

  const [isDragging, setIsDragging] = useState(false);

  const getBounds = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return { min: 0, max: 0 };
    const min = Math.min(0, viewport.clientWidth - track.scrollWidth);
    return { min, max: 0 };
  }, []);

  /** Clamp with rubber-band resistance outside the bounds. */
  const clampWithResistance = useCallback(
    (value: number) => {
      const { min, max } = getBounds();
      if (value > max) return max + (value - max) * RESISTANCE;
      if (value < min) return min + (value - min) * RESISTANCE;
      return value;
    },
    [getBounds]
  );

  /** Settle the track inside the bounds with a smooth ease. */
  const settle = useCallback(
    (from: number, initialVelocity = 0) => {
      momentum.current?.stop();
      const { min, max } = getBounds();
      const target = Math.max(min, Math.min(max, from));
      momentum.current = animate(x, target, {
        duration: 0.8,
        ease: EASE,
        velocity: initialVelocity,
      });
    },
    [getBounds, x]
  );

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    momentum.current?.stop();
    dragging.current = true;
    startPointer.current = e.clientX;
    lastPointer.current = e.clientX;
    startX.current = x.get();
    lastTime.current = performance.now();
    velocity.current = 0;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const now = performance.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      velocity.current = ((e.clientX - lastPointer.current) / dt) * 1000;
    }
    lastPointer.current = e.clientX;
    lastTime.current = now;
    x.set(clampWithResistance(startX.current + (e.clientX - startPointer.current)));
  };

  const endDrag = () => {
    if (!dragging.current) return;
    dragging.current = false;
    setIsDragging(false);
    const current = x.get();
    const { min, max } = getBounds();
    const outOfBounds = current > max || current < min;
    const v = velocity.current;

    if (outOfBounds || Math.abs(v) < MIN_VELOCITY) {
      settle(current);
      return;
    }

    // Project the momentum landing point, then ease into the bounds.
    const projected = current + v * 0.35;
    const target = Math.max(min, Math.min(max, projected));
    momentum.current?.stop();
    momentum.current = animate(x, target, {
      duration: 1.1,
      ease: EASE,
      velocity: v,
    });
  };

  // Keep the track inside bounds on viewport resize.
  useAnimationFrame(() => {
    if (dragging.current) return;
    const { min, max } = getBounds();
    const current = x.get();
    if (current > max) x.set(max);
    else if (current < min) x.set(min);
  });

  return (
    <div
      ref={viewportRef}
      className={`overflow-hidden select-none ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      } ${className}`}
      style={{ touchAction: 'pan-y' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
    >
      <motion.div
        ref={trackRef}
        className="flex w-max will-change-transform"
        style={{ x }}
      >
        {children}
      </motion.div>
    </div>
  );
}
