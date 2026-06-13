'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Palette, CheckCircle, Scissors, Package } from 'lucide-react';
import { siteConfig } from '@/config/site';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Вибір моделі',
    description:
      'Переглядаєте колекцію або описуєте бажаний стиль. Ми підберемо форму та розмір сумки, що ідеально підійде саме вам.',
    duration: 'Онлайн-консультація',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Вибір кольору',
    description:
      'Оберіть кольорову палітру із запропонованих варіантів або поділіться своїм баченням. Ми підберемо ідеальне поєднання відтінків.',
    duration: 'Узгодження',
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Підтвердження замовлення',
    description:
      'Узгоджуємо фінальний дизайн, вартість та терміни. Після підтвердження отримуєте деталі оплати.',
    duration: 'Фіксація замовлення',
  },
  {
    icon: Scissors,
    number: '04',
    title: 'Виготовлення',
    description:
      'Починаємо ручну роботу. Кожна намистина нанизується з увагою і точністю. Ви можете отримувати фото процесу.',
    duration: siteConfig.productionTime,
  },
  {
    icon: Package,
    number: '05',
    title: 'Доставка',
    description:
      'Ваша сумка бережно упаковується в брендову коробку та надсилається Новою Поштою. Трек-номер надається одразу.',
    duration: siteConfig.deliveryZone,
  },
];

export default function CustomOrderSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="order" ref={ref} className="section-padding bg-pearl-950">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="section-eyebrow justify-center"
            style={{ color: 'var(--pearl-gold)' }}
          >
            <span
              className="block w-8 h-px"
              style={{ background: 'var(--pearl-gold)' }}
            />
            Як замовити
            <span
              className="block w-8 h-px"
              style={{ background: 'var(--pearl-gold)' }}
            />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="font-display font-light text-pearl-50 mt-5"
          >
            Від ідеї
            <em className="block italic text-gradient-gold">до вашої сумки</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-pearl-400 text-base md:text-lg font-light mt-4 max-w-lg mx-auto"
          >
            Простий процес у п&apos;ять кроків. Ми супроводжуємо вас на кожному етапі.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line — desktop */}
          <div
            className="absolute left-[52px] top-8 bottom-8 w-px hidden md:block"
            style={{
              background:
                'linear-gradient(to bottom, transparent, var(--pearl-gold) 10%, var(--pearl-gold) 90%, transparent)',
              opacity: 0.2,
            }}
          />

          <div className="space-y-8 md:space-y-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + i * 0.1,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="group flex gap-6 md:gap-8"
                >
                  {/* Icon bubble */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div
                      className="w-[52px] h-[52px] rounded-full flex items-center justify-center relative z-10 border transition-all duration-500 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, #2D2520, #1C1714)',
                        borderColor: 'rgba(201,169,110,0.35)',
                        boxShadow: '0 0 0 4px rgba(201,169,110,0.08)',
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: 'var(--pearl-gold)' }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 pb-8 md:pb-10 border-b border-pearl-800/30 last:border-0 last:pb-0"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className="font-body text-2xs font-medium tracking-widest"
                        style={{ color: 'var(--pearl-gold)', letterSpacing: '0.25em', fontSize: '0.65rem' }}
                      >
                        {step.number}
                      </span>
                      <h3 className="font-display text-xl md:text-2xl font-medium text-pearl-50">
                        {step.title}
                      </h3>
                    </div>

                    <p className="font-body text-sm text-pearl-400 leading-relaxed mb-3 font-light">
                      {step.description}
                    </p>

                    <span
                      className="inline-flex items-center font-body text-xs px-3 py-1 rounded-full border"
                      style={{
                        color: 'var(--pearl-gold)',
                        borderColor: 'rgba(201,169,110,0.25)',
                        background: 'rgba(201,169,110,0.06)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Розпочати замовлення
          </a>
        </motion.div>
      </div>
    </section>
  );
}
