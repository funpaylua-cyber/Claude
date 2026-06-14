import { put, list, del } from '@vercel/blob';

export interface Review {
  id: string;
  name: string;
  rating: number;
  product: string;
  text: string;
  approved: boolean;
  createdAt: string;
}

export interface MediaConfig {
  hero?: string;
  about?: string;
  course1?: string;
  course2?: string;
}

const REVIEWS_KEY = 'data/reviews.json';
const MEDIA_KEY = 'data/media-config.json';

async function readJson<T>(key: string, fallback: T): Promise<T> {
  try {
    const { blobs } = await list({ prefix: key });
    if (!blobs.length) return fallback;
    const res = await fetch(blobs[0].url + '?t=' + Date.now());
    return res.json();
  } catch {
    return fallback;
  }
}

async function writeJson<T>(key: string, data: T) {
  await put(key, JSON.stringify(data), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
  });
}

export async function getReviews(): Promise<Review[]> {
  return readJson<Review[]>(REVIEWS_KEY, []);
}

export async function saveReviews(reviews: Review[]) {
  await writeJson(REVIEWS_KEY, reviews);
}

export async function getMediaConfig(): Promise<MediaConfig> {
  return readJson<MediaConfig>(MEDIA_KEY, {});
}

export async function saveMediaConfig(config: MediaConfig) {
  await writeJson(MEDIA_KEY, config);
}

export async function uploadMedia(file: Blob, slot: string, ext: string) {
  const blob = await put(`media/${slot}.${ext}`, file, {
    access: 'public',
    addRandomSuffix: false,
  });
  const config = await getMediaConfig();
  config[slot as keyof MediaConfig] = blob.url;
  await saveMediaConfig(config);
  return blob.url;
}

export { del };
