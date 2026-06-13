'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import ReviewForm from '@/components/ui/ReviewForm';

interface Testimonial {
  id: number;
  name: string;
  handle: string;
  text: string;
  rating: number;
  product: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Катерина М.',
    handle: '@katia_style',
    text: 'Отримала сумочку з перлів — це просто казка! Якість неймовірна, кожна намистина ідеально підібрана. Вже отримала купу компліментів. Однозначно буду замовляти ще!',
    rating: 5,
    product: 'Перлова Класика',
  },
  {
    id: 2,
    name: 'Аліна В.',
    handle: '@alina_v',
    text: 'Замовляла сумочку-серце в подарунок подрузі — вона була у захваті! Пакування теж дуже красиве, ніби справжній ювелірний магазин. Дякую Pearl Boutique за таку красу!',
    rating: 5,
    product: 'Серце Рубін',
  },
  {
    id: 3,
    name: 'Дарина С.',
    handle: '@daryna_s',
    text: 'Брала кристальну сумочку на весілля — всі гості питали де я її придбала. Майстер врахувала всі мої побажання, зробила швидко. Рекомендую всім!',
    rating: 5,
    product: 'Кристальний Блиск',
  },
];

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

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
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

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    style={{ color: 'var(--pearl-gold)', fill: 'var(--pearl-gold)' }}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-sm text-pearl-700 leading-relaxed flex-1 mb-5">
                {t.text}
              </p>

              {/* Product tag */}
              <span
                className="inline-block font-body text-xs px-3 py-1 rounded-full mb-4 self-start"
                style={{
                  background: 'rgba(201,169,110,0.1)',
                  color: 'var(--pearl-gold)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.08em',
                }}
              >
                {t.product}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-pearl-200/50">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-display text-sm font-medium text-white"
                  style={{ background: 'var(--pearl-gold)' }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-pearl-900">{t.name}</p>
                  <p className="font-body text-xs text-pearl-400">{t.handle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
