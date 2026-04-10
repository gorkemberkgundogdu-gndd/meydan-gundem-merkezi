import type { City } from '../../types/weather.js';

// 3 sabit şehir — geocoding kullanılmıyor
export const CITIES: City[] = [
  { key: 'istanbul', name: 'İstanbul', lat: 41.0082, lon: 28.9784 },
  { key: 'ankara',   name: 'Ankara',       lat: 39.9334, lon: 32.8597 },
  { key: 'izmir',    name: 'İzmir',   lat: 38.4192, lon: 27.1287 },
];
