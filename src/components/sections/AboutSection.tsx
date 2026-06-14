'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Heart, Star } from 'lucide-react';
import { aboutImage } from '@/data/products';
import BagImage from '@/components/ui/BagImage';

const highlights = [
  {
    icon: Sparkles,
    label: 'Ручна робота',
    description: 'Кожна намистина нанизується вручну',
  },
  {
    icon: Heart,
    label: 'З любов\'ю',
    description: 'Вкладаємо душу в кожен виріб',
  },
  {
    icon: Star,
    label: 'Ексклюзив',
    description: 'Лише один такий виріб у світі',
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="section-padding bg-pearl-50">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Main image frame */}
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-premium">
                <BagImage
                  src={aboutImage}
                  alt="Процес ручного виготовлення сумки з намистин Pearl Boutique"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>

              {/* Decorative gold accent */}
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10"
                style={{ background: 'linear-gradient(135deg, #DFC99A 0%, #C9A96E 100%)' }}
              />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
              className="absolute -bottom-8 -left-4 md:-left-8 bg-pearl-950 text-pearl-50 rounded-2xl p-5 shadow-premium max-w-[200px]"
            >
              <p className="font-display text-3xl font-light leading-none text-gold-light">100%</p>
              <p className="font-body text-xs text-pearl-300 mt-2 leading-relaxed">
                Ручна робота без виключень
              </p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              <span className="section-eyebrow">
                <span className="gold-line" />
                Про бренд
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="font-display font-light text-pearl-950 leading-tight"
            >
              Мистецтво,{' '}
              <em className="italic text-gradient-gold">народжене вручну</em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="space-y-4"
            >
              <p className="font-body text-pearl-700 leading-relaxed text-base md:text-lg font-light">
                Pearl Boutique — це простір, де кожна намистина стає частиною унікальної
                історії. Ми створюємо сумки, клатчі та аксесуари з намистин, вкладаючи
                в кожен виріб майстерність і любов до деталей.
              </p>
              <p className="font-body text-pearl-600 leading-relaxed text-base font-light">
                Кожна наша сумка — це ексклюзивний виріб, створений спеціально для вас.
                Ми не виробляємо масово — тільки індивідуальні замовлення, тільки
                найкращі матеріали, тільки ручна праця.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.35 + i * 0.08 }}
                    className="group flex flex-col gap-2 p-4 rounded-xl bg-pearl-100/70 hover:bg-pearl-200/60 transition-colors duration-300"
                  >
                    <Icon
                      size={20}
                      className="transition-colors duration-300"
                      style={{ color: 'var(--pearl-gold)' }}
                    />
                    <p className="font-body text-xs font-medium text-pearl-900">
                      {item.label}
                    </p>
                    <p className="font-body text-xs text-pearl-500 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
