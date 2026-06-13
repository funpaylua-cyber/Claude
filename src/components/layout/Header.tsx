'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

const navLinks = [
  { href: '#about', label: 'Про нас' },
  { href: '#gallery', label: 'Колекція' },
  { href: '#courses', label: 'Курси' },
  { href: '#order', label: 'Замовити' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-glass shadow-glass py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <span
              className="font-display text-2xl md:text-3xl font-light tracking-wide leading-none"
              style={{
                color: isScrolled ? 'var(--pearl-text)' : 'var(--pearl-50)',
              }}
            >
              Pearl
            </span>
            <span
              className="font-body text-2xs tracking-widest uppercase transition-colors duration-300"
              style={{
                color: isScrolled ? 'var(--pearl-gold)' : 'rgba(250,250,248,0.75)',
                letterSpacing: '0.3em',
                fontSize: '0.6rem',
              }}
            >
              Boutique
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-body text-xs tracking-widest uppercase transition-all duration-300 hover:opacity-60"
                style={{
                  color: isScrolled ? 'var(--pearl-text)' : 'var(--pearl-50)',
                  letterSpacing: '0.15em',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary text-xs py-3 px-6 ${
                isScrolled
                  ? 'bg-pearl-950 text-pearl-50'
                  : 'bg-white/15 text-white border border-white/30 backdrop-blur-sm hover:bg-white/25'
              }`}
              style={{ transition: 'all 0.4s ease' }}
            >
              Замовити
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors"
            style={{
              color: isScrolled ? 'var(--pearl-text)' : 'var(--pearl-50)',
            }}
            aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-40 bg-pearl-950 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="font-display text-5xl font-light text-pearl-50 italic hover:text-gold-light transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 btn-gold"
              >
                Замовити в Instagram
              </motion.a>
            </nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 font-body text-xs text-pearl-400 tracking-widest"
              style={{ letterSpacing: '0.2em' }}
            >
              © {new Date().getFullYear()} {siteConfig.name}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
