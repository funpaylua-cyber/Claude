'use client';

import { useState, useRef, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import { products, galleryCategories } from '@/data/products';
import type { Product } from '@/data/products';
import BagImage from '@/components/ui/BagImage';
import LightboxModal from '@/components/ui/LightboxModal';
import { siteConfig } from '@/config/site';
import { useMediaConfig } from '@/context/MediaConfigContext';

const aspectRatioClasses: Record<Product['aspectRatio'], string> = {
  tall: 'aspect-[3/4]',
  wide: 'aspect-[4/3]',
  square: 'aspect-square',
};

export default function ProductGallery() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const mediaConfig = useMediaConfig();

  const [activeCategory, setActiveCategory] = useState('Усі');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === 'Усі'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevLightbox = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev === 0 ? filtered.length - 1 : prev - 1
    );
  }, [filtered.length]);

  const nextLightbox = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev === filtered.length - 1 ? 0 : prev + 1
    );
  }, [filtered.length]);

  return (
    <>
      <section id="gallery" ref={ref} className="section-padding bg-pearl-50">
        <div className="container-wide">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="section-eyebrow justify-center"
            >
              <span className="gold-line" />
              Наша колекція
              <span className="gold-line" />
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="font-display font-light text-pearl-950 mt-5"
            >
              Кожна сумка —
              <em className="block italic text-gradient-gold">окрема історія</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-pearl-600 text-base md:text-lg font-light mt-4 max-w-lg mx-auto"
            >
              Усі вироби виготовляються на замовлення. Можливі кастомізації кольорів та розмірів.
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14"
          >
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-xs px-5 py-2.5 rounded-full transition-all duration-300 tracking-wider border ${
                  activeCategory === cat
                    ? 'bg-pearl-950 text-pearl-50 border-pearl-950'
                    : 'bg-transparent text-pearl-700 border-pearl-300 hover:border-pearl-500 hover:text-pearl-900'
                }`}
                style={{ letterSpacing: '0.1em' }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="masonry-grid"
            >
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.05,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="masonry-item group cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <div
                    className={`relative ${aspectRatioClasses[product.aspectRatio]} rounded-xl overflow-hidden shadow-pearl`}
                  >
                    {/* Image */}
                    <BagImage
                      src={(mediaConfig as Record<string, string>)[product.image.replace('/images/', '').replace(/\.[^.]+$/, '')] || product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-pearl-950/0 group-hover:bg-pearl-950/50 transition-all duration-500" />

                    {/* Hover content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 p-4">
                      <ZoomIn size={28} className="text-white mb-3" />
                      <p className="font-display text-white text-lg italic text-center">
                        {product.title}
                      </p>
                      <p className="font-body text-white/70 text-xs mt-1 text-center">
                        {product.category}
                      </p>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      {product.isNew && (
                        <span
                          className="font-body text-2xs px-2.5 py-1 rounded-full bg-pearl-950 text-pearl-50"
                          style={{ fontSize: '0.6rem', letterSpacing: '0.15em' }}
                        >
                          НОВИНКА
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-14"
          >
            <p className="font-body text-pearl-600 text-sm mb-5 font-light">
              Не знайшли те, що шукаєте? Ми створимо для вас унікальний дизайн.
            </p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Обговорити індивідуальне замовлення
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <LightboxModal
        products={filtered}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevLightbox}
        onNext={nextLightbox}
      />
    </>
  );
}
