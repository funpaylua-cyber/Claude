'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  HandMetal,
  Palette,
  Gem,
  Truck,
  Gift,
  Fingerprint,
} from 'lucide-react';

const advantages = [
  {
    icon: HandMetal,
    title: 'Ручна робота',
    description:
      'Кожна намистина нанизується вручну. Жодних машин — лише майстерність і час.',
  },
  {
    icon: Palette,
    title: 'Індивідуальний дизайн',
    description:
      'Ви обираєте кольори, форму та стиль. Ми втілюємо ваш задум у реальність.',
  },
  {
    icon: Gem,
    title: 'Якісні матеріали',
    description:
      'Використовуємо лише перевірені намистини та фурнітуру преміум-класу.',
  },
  {
    icon: Truck,
    title: 'Доставка по Україні',
    description:
      'Відправляємо Новою Поштою по всій Україні. Бережна упаковка гарантована.',
  },
  {
    icon: Gift,
    title: 'Подарункове пакування',
    description:
      'Кожна сумка приходить у красивій брендовій упаковці — готово до подарунка.',
  },
  {
    icon: Fingerprint,
    title: 'Унікальність',
    description:
      'Жодна сумка не повториться. Ваш виріб — єдиний у своєму роді у всьому світі.',
  },
];

export default function AdvantagesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="advantages" ref={ref} className="section-padding" style={{ background: 'var(--pearl-100)' }}>
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="section-eyebrow justify-center"
          >
            <span
              className="block w-8 h-px"
              style={{ background: 'var(--pearl-gold)' }}
            />
            Чому Pearl Boutique
            <span
              className="block w-8 h-px"
              style={{ background: 'var(--pearl-gold)' }}
            />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="font-display font-light text-pearl-950 mt-5"
          >
            Більше, ніж просто
            <em className="block italic text-gradient-gold">сумка</em>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.08,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="group relative p-8 rounded-2xl bg-pearl-50 border border-pearl-200/60 hover-lift cursor-default overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 0%, rgba(201,169,110,0.08) 0%, transparent 70%)',
                  }}
                />

                {/* Gold accent line */}
                <div
                  className="absolute top-0 left-8 right-8 h-px transition-all duration-500 group-hover:left-0 group-hover:right-0"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, var(--pearl-gold), transparent)',
                    opacity: 0.4,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-xl mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #F5EFE6, #EDE3D4)' }}
                >
                  <Icon
                    size={22}
                    style={{ color: 'var(--pearl-gold)' }}
                  />
                </div>

                {/* Text */}
                <h3 className="font-display text-xl font-medium text-pearl-950 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-pearl-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
