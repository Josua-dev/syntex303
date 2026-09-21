import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 40, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: !mounted || inView ? 1 : 0,
        transform: !mounted || inView ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function StaggerText({ children, delay = 0, className = '' }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <div
        style={{
          opacity: !mounted || inView ? 1 : 0,
          transform: !mounted || inView ? 'translateY(0)' : 'translateY(100%)',
          transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
};

export function ImageReveal({ src, alt, className = '', imgClassName = '', delay = 0 }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        style={{
          clipPath: !mounted || inView ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
          transform: !mounted || inView ? 'scale(1.05)' : 'scale(1.2)',
          transition: `clip-path 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
          height: '100%',
        }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      </div>
    </div>
  );
}
