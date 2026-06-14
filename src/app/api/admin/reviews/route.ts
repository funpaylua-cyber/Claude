import { NextRequest, NextResponse } from 'next/server';
import { getReviews, saveReviews } from '@/lib/blob-store';

export async function GET() {
  const reviews = await getReviews();
  return NextResponse.json(reviews);
}

export async function PATCH(req: NextRequest) {
  const { id, approved } = await req.json();
  const reviews = await getReviews();
  const idx = reviews.findIndex((r) => r.id === id);
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  reviews[idx].approved = approved;
  await saveReviews(reviews);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const reviews = await getReviews();
  await saveReviews(reviews.filter((r) => r.id !== id));
  return NextResponse.json({ ok: true });
}
