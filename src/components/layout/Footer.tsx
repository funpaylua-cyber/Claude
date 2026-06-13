import { Instagram, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-pearl-950 text-pearl-200">
      <div className="container-wide">
        {/* Top section */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-b border-pearl-800/40">
          {/* Brand column */}
          <div className="space-y-6">
            <div>
              <p className="font-display text-4xl font-light text-pearl-50 leading-none">Pearl</p>
              <p
                className="font-body text-pearl-gold mt-1"
                style={{ fontSize: '0.6rem', letterSpacing: '0.35em' }}
              >
                BOUTIQUE
              </p>
            </div>
            <p className="font-body text-sm text-pearl-400 leading-relaxed max-w-xs">
              Унікальні сумки з намистин ручної роботи. Кожен виріб — це мистецтво, створене спеціально для вас.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-pearl-700 hover:border-gold-DEFAULT hover:text-gold-DEFAULT text-pearl-400 transition-all duration-300"
                aria-label="Instagram Pearl Boutique"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-pearl-700 hover:border-gold-DEFAULT hover:text-gold-DEFAULT text-pearl-400 transition-all duration-300"
                aria-label={`Email: ${siteConfig.email}`}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div className="space-y-6">
            <p
              className="font-body text-pearl-50 font-medium text-xs tracking-widest uppercase"
              style={{ letterSpacing: '0.2em' }}
            >
              Навігація
            </p>
            <nav className="space-y-4">
              {[
                { href: '#about', label: 'Про нас' },
                { href: '#gallery', label: 'Колекція' },
                { href: '#courses', label: 'Курси' },
                { href: '#order', label: 'Як замовити' },
                { href: '#faq', label: 'Часті питання' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-body text-sm text-pearl-400 hover:text-pearl-100 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="space-y-6">
            <p
              className="font-body text-pearl-50 font-medium text-xs tracking-widest uppercase"
              style={{ letterSpacing: '0.2em' }}
            >
              Контакти
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-body text-2xs text-pearl-600 uppercase tracking-widest mb-1" style={{ fontSize: '0.6rem' }}>
                  Instagram
                </p>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-pearl-300 hover:text-gold-light transition-colors duration-300"
                >
                  @pearl_bouttique
                </a>
              </div>
              <div>
                <p className="font-body text-2xs text-pearl-600 uppercase tracking-widest mb-1" style={{ fontSize: '0.6rem' }}>
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-body text-sm text-pearl-300 hover:text-gold-light transition-colors duration-300"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="font-body text-2xs text-pearl-600 uppercase tracking-widest mb-1" style={{ fontSize: '0.6rem' }}>
                  Доставка
                </p>
                <p className="font-body text-sm text-pearl-300">
                  {siteConfig.deliveryZone}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-pearl-600">
            © {year} {siteConfig.name}. Усі права захищено.
          </p>
          <p className="font-body text-xs text-pearl-700">
            Ручна робота · Індивідуальний підхід · Україна
          </p>
        </div>
      </div>
    </footer>
  );
}
