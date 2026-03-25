import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const res = await fetch('https://finans.truncgil.com/today.json', {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; MeydanBot/1.0)' },
    });

    if (!res.ok) throw new Error('Market data fetch failed: ' + res.status);

    const raw = await res.json();

    const parse = (key: string) => {
      const obj = raw[key];
      if (!obj) return null;
      const buying = parseFloat((obj['Alış'] || '').replace(',', '.'));
      const selling = parseFloat((obj['Satış'] || '').replace(',', '.'));
      const changeStr: string = obj['Değişim'] || '0';
      const change = parseFloat(changeStr.replace('%', '').replace(',', '.'));
      return { buying, selling, change };
    };

    const data = {
      usd: parse('USD'),
      eur: parse('EUR'),
      gbp: parse('GBP'),
      gold: parse('Gram Altın'),
      updatedAt: new Date().toISOString(),
    };

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
