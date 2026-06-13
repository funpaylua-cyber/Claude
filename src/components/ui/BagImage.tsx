'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BagImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
}

// Elegant placeholder gradient shown when image file is not yet present
const PLACEHOLDER_BLUR =
  'data:image/svg+xml;base64,' +
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F5EFE6"/>
          <stop offset="50%" stop-color="#EDE3D4"/>
          <stop offset="100%" stop-color="#DFD0BA"/>
        </linearGradient>
      </defs>
      <rect width="1" height="1" fill="url(#g)"/>
    </svg>`
  ).toString('base64');

export default function BagImage({
  src,
  alt,
  fill = false,
  className = '',
  priority = false,
  sizes,
  style,
}: BagImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`image-placeholder ${className}`}
        style={style}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="23" stroke="#C9A96E" strokeWidth="0.5" />
            <circle cx="24" cy="24" r="12" stroke="#C9A96E" strokeWidth="0.5" />
            <circle cx="24" cy="24" r="4" fill="#C9A96E" opacity="0.4" />
            <path
              d="M24 8 L24 16 M24 32 L24 40 M8 24 L16 24 M32 24 L40 24"
              stroke="#C9A96E"
              strokeWidth="0.5"
              opacity="0.6"
            />
          </svg>
          <span
            className="mt-3 font-display text-xs tracking-widest"
            style={{ color: '#C9A96E', letterSpacing: '0.2em' }}
          >
            PEARL BOUTIQUE
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      priority={priority}
      sizes={sizes}
      style={style}
      placeholder="blur"
      blurDataURL={PLACEHOLDER_BLUR}
      onError={() => setHasError(true)}
    />
  );
}
