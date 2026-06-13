'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Star, Instagram } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" ref={ref} className="section-padding" style={{ background: 'var(--pearl-100)' }}>
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-14 md:mb-18">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="section-eyebrow justify-center"
          >
            <span className="gold-line" />
            Відгуки клієнтів
            <span className="gold-line" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="font-display font-light text-pearl-950 mt-5"
          >
            Думки наших
            <em className="block italic text-gradient-gold">клієнтів</em>
          </motion.h2>
        </div>

        {/* Placeholder state — awaiting real testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {/* Empty state cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="p-6 rounded-2xl bg-pearl-50 border border-pearl-200/60 relative overflow-hidden"
              >
                {/* Quote mark */}
                <span
                  className="font-display text-6xl font-light absolute -top-2 left-4 opacity-8"
                  style={{ color: 'var(--pearl-gold)', opacity: 0.08 }}
                  aria-hidden
                >
                  &ldquo;
                </span>

                {/* Stars placeholder */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-pearl-200 text-pearl-200"
                    />
                  ))}
                </div>

                {/* Text placeholder lines */}
                <div className="space-y-2 mb-5">
                  <div className="h-2.5 rounded-full bg-pearl-200/80 w-full" />
                  <div className="h-2.5 rounded-full bg-pearl-200/60 w-5/6" />
                  <div className="h-2.5 rounded-full bg-pearl-200/40 w-4/6" />
                </div>

                {/* Author placeholder */}
                <div className="flex items-center gap-3 pt-4 border-t border-pearl-200/50">
                  <div className="w-8 h-8 rounded-full bg-pearl-200/70" />
                  <div className="space-y-1.5">
                    <div className="h-2 rounded-full bg-pearl-200/70 w-20" />
                    <div className="h-1.5 rounded-full bg-pearl-200/50 w-14" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info block */}
          <div
            className="text-center p-8 rounded-2xl border border-dashed"
            style={{ borderColor: 'rgba(201,169,110,0.3)', background: 'rgba(201,169,110,0.04)' }}
          >
            <MessageCircle
              size={32}
              className="mx-auto mb-4"
              style={{ color: 'var(--pearl-gold)' }}
            />
            <p className="font-display text-2xl font-light text-pearl-950 mb-2 italic">
              Відгуки незабаром тут
            </p>
            <p className="font-body text-sm text-pearl-500 mb-6 leading-relaxed font-light max-w-sm mx-auto">
              Якщо ви вже є нашим клієнтом &mdash; будемо раді почути вашу думку в Instagram. Справжні відгуки з&apos;являться тут дуже скоро.
            </p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest px-6 py-3 rounded-full border transition-all duration-300 hover:opacity-80"
              style={{
                color: 'var(--pearl-gold)',
                borderColor: 'rgba(201,169,110,0.4)',
                letterSpacing: '0.18em',
              }}
            >
              <Instagram size={14} />
              Залишити відгук в Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
