import { useQuery } from '@tanstack/react-query';

export interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image: string;
}

const RSS_FEEDS: Record<string, string> = {
  gundem: 'https://www.aa.com.tr/tr/teyithatti/rss/news?cat=politika',
  sondakika: 'https://www.trthaber.com/sondakika.rss',
  ekonomi: 'https://www.bloomberght.com/rss',
  dunya: 'https://feeds.bbci.co.uk/turkce/rss.xml',
  savunma: 'https://mavisavunma.com/feed/',
};

async function fetchRSSFeed(feedKey: string): Promise<RSSItem[]> {
  const feedUrl = RSS_FEEDS[feedKey];
  if (!feedUrl) throw new Error('Unknown feed: ' + feedKey);

  const url = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(feedUrl);
  const res = await fetch(url);
  if (!res.ok) throw new Error('RSS fetch failed');
  const json = await res.json();
  if (json.status !== 'ok') throw new Error('RSS parse failed');

  return (json.items || []).slice(0, 20).map((item: Record<string, unknown>) => ({
    title: (item.title as string) || '',
    link: (item.link as string) || '',
    pubDate: (item.pubDate as string) || '',
    description: ((item.description as string) || '').replace(/<[^>]*>/g, '').substring(0, 200),
    image: (item.thumbnail as string) || ((item.enclosure as Record<string, string>)?.link) || '',
  }));
}

export function useRSSFeed(feed: string, enabled = true) {
  return useQuery({
    queryKey: ['rss', feed],
    queryFn: () => fetchRSSFeed(feed),
    enabled,
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
    retry: 2,
  });
}
