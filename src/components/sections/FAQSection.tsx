'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { siteConfig } from '@/config/site';

const faqs = [
  {
    question: 'Скільки часу займає виготовлення?',
    answer: `Середній термін виготовлення — ${siteConfig.productionTime}. Точний термін залежить від складності дизайну та поточного завантаження майстра. Ми завжди повідомляємо вас про орієнтовну дату готовності ще на етапі підтвердження замовлення.`,
  },
  {
    question: 'Чи є доставка по Україні?',
    answer: `Так, ми відправляємо замовлення по всій Україні — ${siteConfig.deliveryZone}. Після відправлення ми надаємо вам трек-номер для відстеження. Кожна сумка бережно упаковується в брендову коробку для безпечного транспортування.`,
  },
  {
    question: 'Чи можна змінити дизайн сумки?',
    answer:
      'Абсолютно! Ми спеціалізуємось саме на індивідуальних замовленнях. Ви можете обрати власну кольорову палітру, форму, розмір та декоративні елементи. Просто напишіть нам у Instagram — ми все обговоримо та знайдемо ідеальне рішення.',
  },
  {
    question: 'Які способи оплати доступні?',
    answer:
      'Ми приймаємо оплату на картку (Приват/Моно), PayPal та готівкою при отриманні (тільки для Київської області). Для підтвердження замовлення потрібна передоплата 50%. Повну суму можна сплатити до відправлення.',
  },
  {
    question: 'Чи можна побачити фото процесу виготовлення?',
    answer:
      'Так, за вашим бажанням ми надсилаємо фото у процесі роботи — щоб ви могли стежити за народженням вашої сумки. Це також дає можливість вчасно внести побажання, якщо щось потрібно скоригувати.',
  },
  {
    question: 'Як доглядати за сумкою з намистин?',
    answer:
      'Уникайте вологи та прямих сонячних променів. Зберігайте в мішечку або коробці. При забрудненні протирайте суху забруднену поверхню м\'якою тканиною. При правильному догляді сумка прослужить роками й не втратить свого вигляду.',
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.19, 1, 0.22, 1] }}
      className="border-b border-pearl-200/70 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg md:text-xl font-medium text-pearl-950 group-hover:text-pearl-700 transition-colors duration-300 leading-snug">
          {question}
        </span>
        <span
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300"
          style={{
            color: isOpen ? 'white' : 'var(--pearl-gold)',
            borderColor: isOpen ? 'transparent' : 'rgba(201,169,110,0.4)',
            background: isOpen ? 'var(--pearl-gold)' : 'transparent',
          }}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="font-body text-sm md:text-base text-pearl-600 leading-relaxed font-light pb-6 max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="faq" ref={ref} className="section-padding bg-pearl-50">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left — Sticky header */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="section-eyebrow"
              >
                <span className="gold-line" />
                Питання та відповіді
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="font-display font-light text-pearl-950 mt-5"
              >
                Часті
                <em className="block italic text-gradient-gold">питання</em>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-body text-pearl-600 text-sm leading-relaxed mt-4 font-light"
              >
                Не знайшли відповідь? Напишіть нам — з радістю відповімо на будь-яке питання.
              </motion.p>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex mt-8 !text-sm !py-3 !px-6"
              >
                Запитати в Instagram
              </motion.a>
            </div>
          </div>

          {/* Right — Accordion */}
          <div className="lg:col-span-3">
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                question={item.question}
                answer={item.answer}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
