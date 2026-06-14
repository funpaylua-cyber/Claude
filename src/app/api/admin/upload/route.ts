import { NextRequest, NextResponse } from 'next/server';
import { uploadMedia } from '@/lib/blob-store';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;
  const slot = formData.get('slot') as string;

  if (!file || !slot) {
    return NextResponse.json({ error: 'Missing file or slot' }, { status: 400 });
  }

  const ext = file.name.split('.').pop()?.toLowerCase() ?? 'jpg';
  const url = await uploadMedia(file, slot, ext);
  return NextResponse.json({ url });
}
