'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-80px 0px' });

  const getInitial = () => {
    switch (direction) {
      case 'up':    return { opacity: 0, y: 40 };
      case 'down':  return { opacity: 0, y: -40 };
      case 'left':  return { opacity: 0, x: 40 };
      case 'right': return { opacity: 0, x: -40 };
      case 'none':  return { opacity: 0 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'up':
      case 'down':  return { opacity: isInView ? 1 : 0, y: isInView ? 0 : direction === 'up' ? 40 : -40 };
      case 'left':  return { opacity: isInView ? 1 : 0, x: isInView ? 0 : 40 };
      case 'right': return { opacity: isInView ? 1 : 0, x: isInView ? 0 : -40 };
      case 'none':  return { opacity: isInView ? 1 : 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={getAnimate()}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.19, 1, 0.22, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
