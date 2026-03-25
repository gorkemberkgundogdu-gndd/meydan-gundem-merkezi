import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image: string;
}

async function fetchRSSFeed(feed: string): Promise<RSSItem[]> {
  const { data, error } = await supabase.functions.invoke("rss-proxy", {
    body: undefined,
    headers: { "Content-Type": "application/json" },
  });

  // supabase.functions.invoke doesn't support query params easily, so we use fetch
  const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  
  const res = await fetch(
    `https://${projectId}.supabase.co/functions/v1/rss-proxy?feed=${feed}`,
    {
      headers: {
        Authorization: `Bearer ${anonKey}`,
        apikey: anonKey,
      },
    }
  );

  if (!res.ok) throw new Error("RSS fetch failed");
  const json = await res.json();
  return json.items || [];
}

export function useRSSFeed(feed: string, enabled = true) {
  return useQuery({
    queryKey: ["rss", feed],
    queryFn: () => fetchRSSFeed(feed),
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 5 * 60 * 1000,
    retry: 2,
  });
}
