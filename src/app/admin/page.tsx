'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push('/admin/dashboard');
    } else {
      setError('Невірний пароль');
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#F7F2EA' }}>
      <div className="w-full max-w-sm p-8 rounded-2xl bg-white shadow-lg border border-pearl-100">
        <div className="text-center mb-8">
          <p className="font-display text-3xl font-light text-pearl-950">Pearl</p>
          <p className="text-xs tracking-widest text-pearl-500 mt-1" style={{ letterSpacing: '0.3em' }}>
            BOUTIQUE ADMIN
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            className="w-full px-4 py-3 rounded-xl border border-pearl-200 text-sm focus:outline-none focus:border-amber-400"
          />
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-white text-sm font-medium disabled:opacity-60"
            style={{ background: '#C9A96E' }}
          >
            {loading ? 'Вхід...' : 'Увійти'}
          </button>
        </form>
      </div>
    </div>
  );
}
