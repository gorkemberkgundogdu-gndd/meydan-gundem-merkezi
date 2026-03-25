import type { WeatherData } from '../../types/weather';

const TTL_MS = 10 * 60 * 1000; // 10 dakika

interface CacheEntry {
  data: WeatherData[];
  cachedAt: number;
}

// Tek bir global cache (serverless instance başına)
let entry: CacheEntry | null = null;

/** TTL içindeyse döndür, değilse null */
export function getCached(): WeatherData[] | null {
  if (!entry) return null;
  if (Date.now() - entry.cachedAt > TTL_MS) return null;
  return entry.data;
}

/** Başarılı veriyi cache'e yaz */
export function setCached(data: WeatherData[]): void {
  entry = { data, cachedAt: Date.now() };
}

/** Dış API hata verirse TTL'den bağımsız son başarılı veriyi döndür */
export function getFallback(): WeatherData[] | null {
  return entry?.data ?? null;
}
