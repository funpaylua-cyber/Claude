'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Clock, Users, Award, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export interface Course {
  id: number;
  title: string;
  description: string;
  level: 'Початковий' | 'Середній' | 'Просунутий';
  duration: string;
  format: string;
  topics: string[];
  image: string;
  price: number;
  isPopular?: boolean;
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Перша сумочка з намистин',
    description: 'Ідеальний старт для тих, хто ніколи не тримав голку з бісером. Крок за кроком від нуля до готового клатчу.',
    level: 'Початковий',
    duration: '3–4 години',
    format: 'Онлайн або офлайн',
    topics: [
      'Вибір бісеру та інструментів',
      'Базові техніки нанизування',
      'Кріплення замка та ланцюжка',
      'Оздоблення та фінішинг',
    ],
    image: '/images/course-beginner.jpg',
    price: 500,
    isPopular: true,
  },
  {
    id: 2,
    title: 'Складні форми та орнаменти',
    description: "Для тих, хто вже вміє основи. Вчимося створювати об'ємні форми, геометричні візерунки та власні орнаменти.",
    level: 'Середній',
    duration: '5–6 годин',
    format: 'Онлайн або офлайн',
    topics: [
      "Об'ємне плетіння",
      'Геометричні та квіткові орнаменти',
      'Комбінування кольорів',
      'Підкладка та конструкція сумки',
    ],
    image: '/images/course-intermediate.jpg',
    price: 1000,
  },
];

const levelColors: Record<Course['level'], { bg: string; text: string; border: string }> = {
  'Початковий': {
    bg: 'rgba(201,169,110,0.08)',
    text: 'var(--pearl-gold)',
    border: 'rgba(201,169,110,0.3)',
  },
  'Середній': {
    bg: 'rgba(168,138,82,0.1)',
    text: '#A88A52',
    border: 'rgba(168,138,82,0.3)',
  },
  'Просунутий': {
    bg: 'rgba(45,37,32,0.06)',
    text: 'var(--pearl-text)',
    border: 'rgba(45,37,32,0.2)',
  },
};

export default function CoursesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="courses" ref={ref} className="section-padding bg-pearl-50">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="section-eyebrow justify-center"
          >
            <span className="gold-line" />
            Навчання
            <span className="gold-line" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="font-display font-light text-pearl-950 mt-5"
          >
            Навчіться створювати
            <em className="block italic text-gradient-gold">власні шедеври</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-pearl-600 text-base md:text-lg font-light mt-4 max-w-lg mx-auto"
          >
            Майстер-класи від Pearl Boutique — для тих, хто хоче опанувати мистецтво
            бісерних сумочок з нуля або вдосконалити свої навички.
          </motion.p>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.1,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="group relative flex flex-col rounded-2xl bg-white border border-pearl-200/60 overflow-hidden hover-lift shadow-pearl"
            >
              {/* Image area */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="absolute inset-0 image-placeholder"
                  style={{
                    background:
                      i === 0
                        ? 'linear-gradient(135deg, #F5EFE6 0%, #EDE3D4 60%, #DFC99A 100%)'
                        : i === 1
                        ? 'linear-gradient(135deg, #F0E8D8 0%, #E5D9C4 60%, #C9A96E 100%)'
                        : 'linear-gradient(135deg, #E8DDD0 0%, #D9CAAD 60%, #A88A52 100%)',
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-pearl-lg">
                    <Play size={20} style={{ color: 'var(--pearl-gold)' }} fill="currentColor" />
                  </div>
                </div>

                {course.isPopular && (
                  <div className="absolute top-3 left-3">
                    <span
                      className="font-body text-white text-xs px-3 py-1 rounded-full"
                      style={{
                        background: 'var(--pearl-gold)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.12em',
                      }}
                    >
                      ПОПУЛЯРНИЙ
                    </span>
                  </div>
                )}

                <div className="absolute top-3 right-3">
                  <span
                    className="font-body text-xs px-3 py-1 rounded-full border backdrop-blur-sm"
                    style={{
                      background: levelColors[course.level].bg,
                      color: levelColors[course.level].text,
                      borderColor: levelColors[course.level].border,
                      fontSize: '0.62rem',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-display text-2xl font-medium text-pearl-950 leading-tight mb-2">
                  {course.title}
                </h3>
                <p className="font-body text-sm text-pearl-600 leading-relaxed font-light mb-5">
                  {course.description}
                </p>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 mb-5 pb-5 border-b border-pearl-100">
                  <div className="flex items-center gap-1.5 text-pearl-500">
                    <Clock size={13} style={{ color: 'var(--pearl-gold)' }} />
                    <span className="font-body text-xs">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-pearl-500">
                    <Users size={13} style={{ color: 'var(--pearl-gold)' }} />
                    <span className="font-body text-xs">{course.format}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <span
                    className="font-display text-3xl font-light"
                    style={{ color: 'var(--pearl-gold)' }}
                  >
                    {course.price.toLocaleString('uk-UA')} ₴
                  </span>
                </div>

                {/* Topics */}
                <ul className="space-y-2 mb-6 flex-1">
                  {course.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <Award
                        size={12}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--pearl-gold)' }}
                      />
                      <span className="font-body text-xs text-pearl-600 leading-relaxed">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center justify-between w-full px-5 py-3 rounded-xl border border-pearl-200 hover:border-gold-DEFAULT hover:bg-pearl-50 transition-all duration-300"
                >
                  <span
                    className="font-body text-xs font-medium tracking-wider"
                    style={{ color: 'var(--pearl-text)', letterSpacing: '0.1em' }}
                  >
                    Записатись
                  </span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    style={{ color: 'var(--pearl-gold)' }}
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="font-body text-sm text-pearl-500 font-light">
            Є питання щодо курсів? Напишіть нам — разом підберемо програму саме для вас.
          </p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex mt-5 !py-3 !text-sm"
          >
            Запитати про курс
          </a>
        </motion.div>
      </div>
    </section>
  );
}
