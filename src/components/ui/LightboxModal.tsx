'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import BagImage from './BagImage';
import type { Product } from '@/data/products';

interface LightboxModalProps {
  products: Product[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({
  products,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  const isOpen = activeIndex !== null;
  const current = activeIndex !== null ? products[activeIndex] : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Фото: ${current.title}`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-pearl-950/92 backdrop-blur-md" />

          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.15 }}
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Закрити"
          >
            <X size={20} />
          </motion.button>

          {/* Navigation — prev */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-8 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Попереднє фото"
          >
            <ChevronLeft size={24} />
          </motion.button>

          {/* Navigation — next */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-8 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Наступне фото"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Image container */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="relative z-10 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`relative overflow-hidden rounded-2xl ${
                current.aspectRatio === 'tall'
                  ? 'w-[280px] h-[400px] md:w-[400px] md:h-[560px]'
                  : current.aspectRatio === 'wide'
                  ? 'w-[480px] h-[320px] md:w-[640px] md:h-[427px]'
                  : 'w-[360px] h-[360px] md:w-[480px] md:h-[480px]'
              }`}
            >
              <BagImage
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 768px) 90vw, 640px"
                className="object-cover"
                priority
              />
            </div>

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-center"
            >
              <p className="font-display text-2xl text-white italic">{current.title}</p>
              <p className="mt-1 font-body text-sm text-white/60 tracking-wide">
                {current.description}
              </p>
              <p className="mt-2 font-body text-xs text-gold-light/70 tracking-widest uppercase" style={{ letterSpacing: '0.2em' }}>
                {current.category}
              </p>
            </motion.div>

            {/* Counter */}
            <p className="mt-4 font-body text-xs text-white/40 tracking-wider">
              {(activeIndex ?? 0) + 1} / {products.length}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
