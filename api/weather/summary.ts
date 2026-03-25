import { CITIES } from '../../src/lib/weather/constants';
import { fetchCityWeather } from '../../src/lib/weather/fetchWeather';
import { getCached, setCached, getFallback } from '../../src/lib/weather/cache';

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');

  // Cache taze ise direkt dön
  const cached = getCached();
  if (cached) {
    return res.status(200).json({ cities: cached, source: 'Open-Meteo (cache)' });
  }

  try {
    // 3 şehri paralel çek (timeout: 5s)
    const results = await Promise.all(CITIES.map(fetchCityWeather));
    setCached(results);
    return res.status(200).json({ cities: results, source: 'Open-Meteo' });
  } catch (err) {
    // Dış API hata verdi → son başarılı veriyi fallback olarak sun
    const fallback = getFallback();
    if (fallback) {
      return res.status(200).json({ cities: fallback, source: 'Open-Meteo (stale)' });
    }
    console.error('Weather fetch failed:', err);
    return res.status(503).json({ error: 'Hava durumu verisi alınamadı' });
  }
}
