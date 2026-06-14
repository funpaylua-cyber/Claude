'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type { MediaConfig } from '@/lib/blob-store';

const MediaConfigContext = createContext<MediaConfig>({});

export function MediaConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<MediaConfig>({});

  useEffect(() => {
    fetch('/api/media-config')
      .then((r) => r.json())
      .then(setConfig)
      .catch(() => {});
  }, []);

  return (
    <MediaConfigContext.Provider value={config}>
      {children}
    </MediaConfigContext.Provider>
  );
}

export function useMediaConfig() {
  return useContext(MediaConfigContext);
}

export function useMediaUrl(slot: string, fallback: string): string {
  const config = useMediaConfig();
  return (config as Record<string, string>)[slot] || fallback;
}
