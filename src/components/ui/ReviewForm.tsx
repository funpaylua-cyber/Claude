'use client';

import { useState } from 'react';
import { Star, Send, CheckCircle } from 'lucide-react';

const products = [
  'Перлова Класика',
  'Кристальний Блиск',
  'Персиковий Захід',
  'Молочний Дует',
  'Білосніжна',
  'Нічний Акцент',
  'Серце Рубін',
  'Любовний Подарунок',
  'Кришталева Скринька',
  'Золота Застібка',
  'Інша сумочка',
];

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [text, setText] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!rating) return;
    setStatus('loading');

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, rating, product, text }),
      });

      if (res.ok) {
        setStatus('done');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="text-center py-10">
        <CheckCircle size={40} className="mx-auto mb-4" style={{ color: 'var(--pearl-gold)' }} />
        <p className="font-display text-2xl font-light text-pearl-950 mb-2 italic">
          Дякуємо за відгук!
        </p>
        <p className="font-body text-sm text-pearl-500">
          Ми отримали ваш відгук і скоро додамо його на сайт.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Star rating */}
      <div>
        <p className="font-body text-xs text-pearl-500 uppercase tracking-widest mb-3" style={{ letterSpacing: '0.15em' }}>
          Ваша оцінка
        </p>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            >
              <Star
                size={28}
                style={{
                  color: star <= (hover || rating) ? 'var(--pearl-gold)' : '#D4C5B0',
                  fill: star <= (hover || rating) ? 'var(--pearl-gold)' : 'transparent',
                  transition: 'all 0.15s',
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Name */}
      <div>
        <label className="font-body text-xs text-pearl-500 uppercase tracking-widest mb-2 block" style={{ letterSpacing: '0.15em' }}>
          Ваше ім&apos;я
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Катерина"
          className="w-full px-4 py-3 rounded-xl border border-pearl-200 bg-white font-body text-sm text-pearl-900 placeholder:text-pearl-300 focus:outline-none focus:border-gold-DEFAULT transition-colors"
          style={{ '--tw-ring-color': 'var(--pearl-gold)' } as React.CSSProperties}
        />
      </div>

      {/* Product */}
      <div>
        <label className="font-body text-xs text-pearl-500 uppercase tracking-widest mb-2 block" style={{ letterSpacing: '0.15em' }}>
          Яку сумочку ви придбали?
        </label>
        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-pearl-200 bg-white font-body text-sm text-pearl-900 focus:outline-none focus:border-gold-DEFAULT transition-colors appearance-none"
        >
          <option value="">Оберіть модель (необов&apos;язково)</option>
          {products.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      {/* Text */}
      <div>
        <label className="font-body text-xs text-pearl-500 uppercase tracking-widest mb-2 block" style={{ letterSpacing: '0.15em' }}>
          Ваш відгук
        </label>
        <textarea
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          placeholder="Розкажіть про ваші враження..."
          className="w-full px-4 py-3 rounded-xl border border-pearl-200 bg-white font-body text-sm text-pearl-900 placeholder:text-pearl-300 focus:outline-none focus:border-gold-DEFAULT transition-colors resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="font-body text-xs text-red-500">
          Щось пішло не так. Спробуйте ще раз або напишіть нам в Instagram.
        </p>
      )}

      <button
        type="submit"
        disabled={!rating || status === 'loading'}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-body text-sm font-medium tracking-wider transition-all duration-300 disabled:opacity-50"
        style={{
          background: 'var(--pearl-gold)',
          color: '#fff',
          letterSpacing: '0.1em',
        }}
      >
        <Send size={14} />
        {status === 'loading' ? 'Відправляємо...' : 'Надіслати відгук'}
      </button>
    </form>
  );
}
