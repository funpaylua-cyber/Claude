'use client';

import { useEffect, useRef, useState } from 'react';
import { Star, Trash2, Check, Upload, X, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { Review } from '@/lib/blob-store';

type Tab = 'reviews' | 'photos' | 'videos';

const PHOTO_SLOTS = [
  { key: 'hero', label: 'Головне фото (перший екран)' },
  { key: 'about', label: 'Фото розділу "Про нас"' },
  { key: 'bag-01', label: 'Товар 1 — Перлова Класика' },
  { key: 'bag-02', label: 'Товар 2 — Кристальний Блиск' },
  { key: 'bag-03', label: 'Товар 3 — Персиковий Захід' },
  { key: 'bag-04', label: 'Товар 4 — Молочний Дует' },
  { key: 'bag-05', label: 'Товар 5 — Білосніжна' },
  { key: 'bag-06', label: 'Товар 6 — Нічний Акцент' },
  { key: 'bag-07', label: 'Товар 7 — Серце Рубін' },
  { key: 'bag-08', label: 'Товар 8 — Любовний Подарунок' },
  { key: 'bag-09', label: 'Товар 9 — Кришталева Скринька' },
  { key: 'bag-10', label: 'Товар 10 — Золота Застібка' },
];

const VIDEO_SLOTS = [
  { key: 'course1', label: 'Відео курсу 1' },
  { key: 'course2', label: 'Відео курсу 2' },
];

export default function AdminDashboard() {
  const [tab, setTab] = useState<Tab>('reviews');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [uploadStatus, setUploadStatus] = useState<Record<string, string>>({});
  const router = useRouter();

  useEffect(() => {
    fetch('/api/admin/reviews').then((r) => r.json()).then(setReviews);
  }, []);

  async function approveReview(id: string, approved: boolean) {
    await fetch('/api/admin/reviews', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, approved }),
    });
    setReviews((prev) => prev.map((r) => r.id === id ? { ...r, approved } : r));
  }

  async function deleteReview(id: string) {
    if (!confirm('Видалити відгук?')) return;
    await fetch('/api/admin/reviews', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setReviews((prev) => prev.filter((r) => r.id !== id));
  }

  async function uploadFile(file: File, slot: string) {
    setUploadStatus((s) => ({ ...s, [slot]: 'uploading' }));
    const fd = new FormData();
    fd.append('file', file);
    fd.append('slot', slot);
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
    if (res.ok) {
      setUploadStatus((s) => ({ ...s, [slot]: 'done' }));
      setTimeout(() => setUploadStatus((s) => ({ ...s, [slot]: '' })), 3000);
    } else {
      setUploadStatus((s) => ({ ...s, [slot]: 'error' }));
    }
  }

  function UploadSlot({ slotKey, label }: { slotKey: string; label: string }) {
    const ref = useRef<HTMLInputElement>(null);
    const status = uploadStatus[slotKey];
    return (
      <div className="p-5 rounded-xl border border-pearl-200 bg-white">
        <p className="text-sm font-medium text-pearl-800 mb-3">{label}</p>
        <input
          ref={ref}
          type="file"
          accept="image/*,video/*"
          className="hidden"
          onChange={(e) => { if (e.target.files?.[0]) uploadFile(e.target.files[0], slotKey); }}
        />
        <button
          onClick={() => ref.current?.click()}
          disabled={status === 'uploading'}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-pearl-300 hover:border-amber-400 transition-colors disabled:opacity-50"
        >
          <Upload size={14} />
          {status === 'uploading' ? 'Завантаження...' : 'Обрати файл'}
        </button>
        {status === 'done' && <p className="text-green-600 text-xs mt-2">Завантажено успішно!</p>}
        {status === 'error' && <p className="text-red-500 text-xs mt-2">Помилка завантаження</p>}
      </div>
    );
  }

  const pending = reviews.filter((r) => !r.approved);
  const approved = reviews.filter((r) => r.approved);

  return (
    <div className="min-h-screen" style={{ background: '#F7F2EA' }}>
      {/* Header */}
      <div className="bg-white border-b border-pearl-100 px-6 py-4 flex items-center justify-between">
        <div>
          <span className="font-display text-xl text-pearl-950">Pearl Boutique</span>
          <span className="text-xs text-pearl-400 ml-2 tracking-widest">АДМІН</span>
        </div>
        <button
          onClick={() => { document.cookie = 'admin_session=; Max-Age=0; path=/'; router.push('/admin'); }}
          className="flex items-center gap-2 text-sm text-pearl-500 hover:text-pearl-800 transition-colors"
        >
          <LogOut size={14} /> Вийти
        </button>
      </div>

      {/* Tabs */}
      <div className="px-6 pt-6">
        <div className="flex gap-2 mb-6">
          {([
            { key: 'reviews', label: `Відгуки${pending.length ? ` (${pending.length} нових)` : ''}` },
            { key: 'photos', label: 'Фотографії' },
            { key: 'videos', label: 'Відео' },
          ] as { key: Tab; label: string }[]).map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
              style={{
                background: tab === t.key ? '#C9A96E' : 'white',
                color: tab === t.key ? 'white' : '#6B5C4C',
                border: '1px solid',
                borderColor: tab === t.key ? '#C9A96E' : '#E8DDD0',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Reviews tab */}
        {tab === 'reviews' && (
          <div className="space-y-6">
            {reviews.length === 0 && (
              <p className="text-sm text-pearl-400 text-center py-10">Відгуків ще немає</p>
            )}

            {pending.length > 0 && (
              <div>
                <h2 className="text-xs font-medium text-pearl-500 uppercase tracking-widest mb-3" style={{ letterSpacing: '0.2em' }}>
                  Очікують схвалення
                </h2>
                <div className="space-y-3">
                  {pending.map((r) => (
                    <ReviewCard key={r.id} review={r} onApprove={() => approveReview(r.id, true)} onDelete={() => deleteReview(r.id)} />
                  ))}
                </div>
              </div>
            )}

            {approved.length > 0 && (
              <div>
                <h2 className="text-xs font-medium text-pearl-500 uppercase tracking-widest mb-3" style={{ letterSpacing: '0.2em' }}>
                  Опубліковані
                </h2>
                <div className="space-y-3">
                  {approved.map((r) => (
                    <ReviewCard key={r.id} review={r} published onUnapprove={() => approveReview(r.id, false)} onDelete={() => deleteReview(r.id)} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Photos tab */}
        {tab === 'photos' && (
          <div className="space-y-4 max-w-lg">
            {PHOTO_SLOTS.map((s) => (
              <UploadSlot key={s.key} slotKey={s.key} label={s.label} />
            ))}
          </div>
        )}

        {/* Videos tab */}
        {tab === 'videos' && (
          <div className="space-y-4 max-w-lg">
            {VIDEO_SLOTS.map((s) => (
              <UploadSlot key={s.key} slotKey={s.key} label={s.label} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ReviewCard({
  review, published = false, onApprove, onUnapprove, onDelete,
}: {
  review: Review;
  published?: boolean;
  onApprove?: () => void;
  onUnapprove?: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="bg-white rounded-xl border border-pearl-200 p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-sm text-pearl-900">{review.name}</span>
            {review.product && (
              <span className="text-xs text-pearl-400 bg-pearl-50 px-2 py-0.5 rounded-full">{review.product}</span>
            )}
          </div>
          <div className="flex gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} style={{ color: '#C9A96E', fill: i < review.rating ? '#C9A96E' : 'transparent' }} />
            ))}
          </div>
          <p className="text-sm text-pearl-700 leading-relaxed">{review.text}</p>
          <p className="text-xs text-pearl-400 mt-2">{new Date(review.createdAt).toLocaleDateString('uk-UA')}</p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          {!published && onApprove && (
            <button onClick={onApprove} title="Опублікувати"
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-50 hover:bg-green-100 text-green-600 transition-colors">
              <Check size={14} />
            </button>
          )}
          {published && onUnapprove && (
            <button onClick={onUnapprove} title="Зняти з публікації"
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-amber-50 hover:bg-amber-100 text-amber-600 transition-colors">
              <X size={14} />
            </button>
          )}
          <button onClick={onDelete} title="Видалити"
            className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-50 hover:bg-red-100 text-red-500 transition-colors">
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
