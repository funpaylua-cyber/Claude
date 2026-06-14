import { NextRequest, NextResponse } from 'next/server';
import { getReviews, saveReviews, Review } from '@/lib/blob-store';

export async function GET() {
  const reviews = await getReviews();
  return NextResponse.json(reviews.filter((r) => r.approved));
}

export async function POST(req: NextRequest) {
  const { name, rating, product, text } = await req.json();

  if (!name || !rating || !text) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const review: Review = {
    id: crypto.randomUUID(),
    name,
    rating: Number(rating),
    product: product || '',
    text,
    approved: false,
    createdAt: new Date().toISOString(),
  };

  const reviews = await getReviews();
  reviews.push(review);
  await saveReviews(reviews);

  return NextResponse.json({ ok: true });
}
