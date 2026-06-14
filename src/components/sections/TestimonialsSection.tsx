'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import ReviewForm from '@/components/ui/ReviewForm';
import type { Review } from '@/lib/blob-store';

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch('/api/reviews').then((r) => r.json()).then((data) => {
      if (Array.isArray(data)) setReviews(data);
    }).catch(() => {});
  }, []);

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

        {/* Review cards */}
        {reviews.length > 0 && (
          <div className={`grid grid-cols-1 gap-6 mb-10 ${reviews.length === 1 ? 'max-w-md mx-auto' : reviews.length === 2 ? 'md:grid-cols-2 max-w-2xl mx-auto' : 'md:grid-cols-3'}`}>
            {reviews.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
                className="p-6 rounded-2xl bg-pearl-50 border border-pearl-200/60 relative overflow-hidden flex flex-col"
              >
                <span
                  className="font-display text-6xl font-light absolute -top-2 left-4"
                  style={{ color: 'var(--pearl-gold)', opacity: 0.08 }}
                  aria-hidden
                >
                  &ldquo;
                </span>

                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, si) => (
                    <Star key={si} size={14} style={{ color: 'var(--pearl-gold)', fill: 'var(--pearl-gold)' }} />
                  ))}
                </div>

                <p className="font-body text-sm text-pearl-700 leading-relaxed flex-1 mb-5">{r.text}</p>

                {r.product && (
                  <span
                    className="inline-block font-body text-xs px-3 py-1 rounded-full mb-4 self-start"
                    style={{ background: 'rgba(201,169,110,0.1)', color: 'var(--pearl-gold)', fontSize: '0.62rem', letterSpacing: '0.08em' }}
                  >
                    {r.product}
                  </span>
                )}

                <div className="flex items-center gap-3 pt-4 border-t border-pearl-200/50">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-display text-sm font-medium text-white"
                    style={{ background: 'var(--pearl-gold)' }}
                  >
                    {r.name[0]}
                  </div>
                  <p className="font-body text-sm font-medium text-pearl-900">{r.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Review form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-lg mx-auto p-8 rounded-2xl border"
          style={{ borderColor: 'rgba(201,169,110,0.25)', background: 'rgba(255,255,255,0.7)' }}
        >
          <p className="font-display text-2xl font-light text-pearl-950 mb-1 italic text-center">
            Залишити відгук
          </p>
          <p className="font-body text-sm text-pearl-400 text-center mb-6">
            Отримайте знижку 5% на наступне замовлення
          </p>
          <ReviewForm />
        </motion.div>
      </div>
    </section>
  );
}
