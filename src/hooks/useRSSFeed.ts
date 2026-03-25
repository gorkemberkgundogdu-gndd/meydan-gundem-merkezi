import { useQuery } from "@tanstack/react-query";

export interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image: string;
}

async function fetchRSSFeed(feed: string): Promise<RSSItem[]> {
  const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/rss-proxy?feed=${feed}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
    },
  });

  if (!res.ok) throw new Error("RSS fetch failed");
  const json = await res.json();
  return json.items || [];
}

export function useRSSFeed(feed: string, enabled = true) {
  return useQuery({
    queryKey: ["rss", feed],
    queryFn: () => fetchRSSFeed(feed),
    enabled,
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
    retry: 2,
  });
}
