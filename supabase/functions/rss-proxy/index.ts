import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const RSS_FEEDS: Record<string, string> = {
  gundem: "https://www.aa.com.tr/tr/teyithatti/rss/news?cat=politika",
  sondakika: "https://www.trthaber.com/sondakika.rss",
  ekonomi: "https://www.bloomberght.com/rss",
};

function parseRSSItems(xml: string): Array<{ title: string; link: string; pubDate: string; description: string; image: string }> {
  const items: Array<{ title: string; link: string; pubDate: string; description: string; image: string }> = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null && items.length < 20) {
    const itemXml = match[1];

    const getTag = (tag: string): string => {
      const r = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`);
      const m = itemXml.match(r);
      return (m?.[1] || m?.[2] || "").trim();
    };

    // Try to extract image from enclosure, media:content, or description
    let image = "";
    const enclosure = itemXml.match(/<enclosure[^>]+url=["']([^"']+)["']/);
    const mediaContent = itemXml.match(/<media:content[^>]+url=["']([^"']+)["']/);
    const mediaThumbnail = itemXml.match(/<media:thumbnail[^>]+url=["']([^"']+)["']/);
    const imgInDesc = itemXml.match(/<img[^>]+src=["']([^"']+)["']/);

    if (enclosure) image = enclosure[1];
    else if (mediaContent) image = mediaContent[1];
    else if (mediaThumbnail) image = mediaThumbnail[1];
    else if (imgInDesc) image = imgInDesc[1];

    items.push({
      title: getTag("title"),
      link: getTag("link"),
      pubDate: getTag("pubDate"),
      description: getTag("description").replace(/<[^>]*>/g, "").substring(0, 200),
      image,
    });
  }

  return items;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const feed = url.searchParams.get("feed") || "gundem";
    const feedUrl = RSS_FEEDS[feed];

    if (!feedUrl) {
      return new Response(JSON.stringify({ error: "Invalid feed name" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch(feedUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; MeydanBot/1.0)",
        "Accept": "application/rss+xml, application/xml, text/xml, */*",
      },
    });

    if (!response.ok) {
      throw new Error(`RSS fetch failed [${response.status}]: ${feedUrl}`);
    }

    const xml = await response.text();
    const items = parseRSSItems(xml);

    return new Response(JSON.stringify({ items, source: feed }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("RSS proxy error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
