'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #F7F2EA 0%, #EDE3D4 40%, #E5D9C4 70%, #DFD0BA 100%)',
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          border: '1px solid rgba(201,169,110,0.15)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          border: '1px solid rgba(201,169,110,0.1)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          border: '1px solid rgba(201,169,110,0.08)',
        }}
      />

      {/* Floating pearls */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, i % 2 === 0 ? 10 : -10, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + i * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${6 + (i % 3) * 4}px`,
            height: `${6 + (i % 3) * 4}px`,
            background: 'radial-gradient(circle at 30% 30%, #DFC99A, #C9A96E)',
            top: `${15 + (i * 11) % 70}%`,
            left: `${10 + (i * 13) % 80}%`,
            boxShadow: '0 2px 8px rgba(201,169,110,0.3)',
          }}
        />
      ))}

      {/* Content */}
      <div className="container-narrow relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-eyebrow justify-center"
        >
          <span className="gold-line" />
          Зв&apos;язатись з нами
          <span className="gold-line" />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          className="font-display font-light text-pearl-950 mt-6"
        >
          Створіть свою ідеальну
          <em className="block italic text-gradient-gold">сумку вже сьогодні</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-pearl-700 text-base md:text-lg font-light mt-6 max-w-md mx-auto leading-relaxed"
        >
          Напишіть нам в Instagram &mdash; і ми разом створимо сумку, яка відображатиме вашу унікальність.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !bg-pearl-950 gap-3 group"
          >
            <Instagram size={16} />
            Написати в Instagram
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-14"
        >
          {[
            { label: 'Ручна робота' },
            { label: 'Індивідуальний підхід' },
            { label: 'Доставка по Україні' },
            { label: 'Подарункове пакування' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--pearl-gold)' }}
              />
              <span className="font-body text-xs text-pearl-700 tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
