'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { heroImage } from '@/data/products';
import BagImage from '@/components/ui/BagImage';

export default function HeroSection() {
  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <BagImage
          src={heroImage}
          alt="Pearl Boutique — сумки ручної роботи з намистин"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pearl-950/80 via-pearl-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-pearl-950/60 via-transparent to-transparent" />
      </div>

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Content */}
      <div className="container-wide relative z-10 pt-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span
              className="block w-8 h-px"
              style={{ background: 'var(--pearl-gold)' }}
            />
            <span
              className="font-body text-xs uppercase tracking-widest text-gold-light"
              style={{ letterSpacing: '0.25em' }}
            >
              Ексклюзивно для вас
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.19, 1, 0.22, 1] }}
            className="font-display font-light text-pearl-50 leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            Сумки ручної роботи
            <em className="block text-gradient-gold not-italic">з намистин</em>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="font-body text-base md:text-lg text-pearl-200/90 leading-relaxed mb-10 max-w-md font-light"
          >
            Створюємо унікальні аксесуари, які підкреслюють вашу індивідуальність.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Замовити зараз
            </a>
            <button
              onClick={scrollToGallery}
              className="btn-secondary !border-white/40 !text-white hover:!bg-white/15"
            >
              Дивитись колекцію
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToGallery}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-pearl-200/60 hover:text-pearl-100 transition-colors duration-300"
        aria-label="Гортати донизу"
      >
        <span className="font-body text-2xs uppercase tracking-widest" style={{ letterSpacing: '0.25em', fontSize: '0.55rem' }}>
          Гортати
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>

      {/* Decorative vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block z-10"
        style={{ transformOrigin: 'top' }}
      >
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold-DEFAULT to-transparent opacity-40" />
      </motion.div>
    </section>
  );
}
