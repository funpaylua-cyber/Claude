import { NextResponse } from 'next/server';
import { getMediaConfig } from '@/lib/blob-store';

export async function GET() {
  const config = await getMediaConfig();
  return NextResponse.json(config);
}
