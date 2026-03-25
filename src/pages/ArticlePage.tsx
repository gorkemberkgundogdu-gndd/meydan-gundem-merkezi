import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Share2, Bookmark, ExternalLink } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRSSFeed } from "@/hooks/useRSSFeed";
import { useMarketData } from "@/hooks/useMarketData";

interface ArticleState {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image: string;
  category: string;
  feedKey: string;
  sourceLabel: string;
}

const fmt = (n: number | undefined) =>
  n != null && n > 0
    ? n.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : "—";

const ArticlePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state as ArticleState | null;

  const { data: relatedItems } = useRSSFeed(article?.feedKey ?? "", !!article?.feedKey);
  const { data: market } = useMarketData();

  const related = relatedItems?.filter((i) => i.link !== article?.link).slice(0, 4) ?? [];

  if (!article) {
    return (
      <Layout showBreaking={false}>
        <SEO title="Haber Bulunamadı" description="Bu habere doğrudan erişilemiyor. Ana sayfadan bir habere tıklayarak ulaşabilirsiniz." />
        <div className="max-w-screen-md mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-headline font-extrabold text-primary mb-4">
            Haber bulunamadı
          </h1>
          <p className="text-on-surface-variant mb-6">
            Bu habere doğrudan erişilemiyor. Ana sayfadan bir habere tıklayarak ulaşabilirsiniz.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-primary text-primary-foreground px-6 py-2 font-bold text-sm hover:opacity-90 transition-opacity"
          >
            ← Ana Sayfaya Dön
          </button>
        </div>
      </Layout>
    );
  }

  const publishDate = article.pubDate
    ? new Date(article.pubDate).toLocaleDateString("tr-TR", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  const handleRelatedClick = (item: typeof relatedItems[0]) => {
    navigate(
      `/haber/${encodeURIComponent(item.title.slice(0, 60).toLowerCase().replace(/\s+/g, "-"))}`,
      {
        state: {
          ...item,
          category: article.category,
          feedKey: article.feedKey,
          sourceLabel: article.sourceLabel,
        },
      }
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout showBreaking={false}>
      <SEO
        title={article.title}
        description={article.description || undefined}
        ogType="article"
        ogImage={article.image || undefined}
        ogUrl={`/haber/${encodeURIComponent(article.title.slice(0, 60).toLowerCase().replace(/\s+/g, "-"))}`}
        canonical={`/haber/${encodeURIComponent(article.title.slice(0, 60).toLowerCase().replace(/\s+/g, "-"))}`}
      />
      <main className="max-w-screen-2xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ── Sol: Haber İçeriği ── */}
          <article className="lg:col-span-8">

            {/* Kategori + Başlık */}
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-secondary-container text-white text-[10px] font-bold uppercase tracking-wider mb-4">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-primary leading-[1.05] tracking-tighter mb-6">
                {article.title}
              </h1>

              {/* Yazar / Tarih / Paylaşım */}
              <div className="flex flex-wrap items-center gap-6 py-6 border-y border-outline-variant/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-surface-high flex items-center justify-center font-extrabold text-sm font-headline text-primary">
                    M
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Meydan Haber Merkezi</p>
                    <p className="text-xs text-on-surface-variant">{article.sourceLabel}</p>
                  </div>
                </div>

                {publishDate && (
                  <>
                    <div className="h-8 w-px bg-outline-variant/30 hidden md:block" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase text-on-surface-variant">
                        Yayınlanma
                      </span>
                      <time className="text-sm font-medium">{publishDate}</time>
                    </div>
                  </>
                )}

                <div className="flex items-center space-x-1 ml-auto">
                  <button
                    className="p-2 hover:bg-muted rounded-full transition-colors"
                    title="Paylaş"
                    onClick={() =>
                      navigator.share?.({ title: article.title, url: article.link })
                    }
                  >
                    <Share2 className="w-5 h-5 text-primary" />
                  </button>
                  <button
                    className="p-2 hover:bg-muted rounded-full transition-colors"
                    title="Kaydet"
                  >
                    <Bookmark className="w-5 h-5 text-primary" />
                  </button>
                </div>
              </div>
            </div>

            {/* Görsel */}
            {article.image && (
              <figure className="mb-10">
                <div className="aspect-video w-full overflow-hidden bg-surface-low">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    width={1200}
                    height={675}
                  />
                </div>
                <figcaption className="mt-2 text-xs text-on-surface-variant italic">
                  Fotoğraf: {article.sourceLabel}
                </figcaption>
              </figure>
            )}

            {/* Açıklama (RSS özeti) */}
            {article.description && (
              <p className="text-xl md:text-2xl font-semibold text-on-surface/80 leading-relaxed mb-8">
                {article.description}
              </p>
            )}

            {/* Kaynak CTA */}
            <div className="bg-surface-low border-l-4 border-primary p-6 mb-10">
              <p className="text-sm text-on-surface-variant mb-4">
                Bu özet <strong>{article.sourceLabel}</strong> kaynağından alınmıştır.
                Haberin tamamını okumak için kaynağa gidin.
              </p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Haberin tamamını oku
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Etiket */}
            <div className="pt-6 border-t border-border flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-surface-low text-xs font-bold uppercase hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                {article.category}
              </span>
            </div>
          </article>

          {/* ── Sağ: Sidebar ── */}
          <aside className="lg:col-span-4 space-y-8">

            {/* Piyasa Verileri */}
            <div className="bg-surface-high p-6">
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-sm font-headline font-black uppercase tracking-widest text-primary">
                  Piyasa Verileri
                </h4>
                <span className="text-[10px] font-bold bg-green-500/10 text-green-600 px-2 py-0.5">
                  CANLI
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "USD/TRY",   value: market?.usd?.selling },
                  { label: "EUR/TRY",   value: market?.eur?.selling },
                  { label: "ALTIN (g)", value: market?.gold?.selling },
                ].map((item) => (
                  <div key={item.label} className="bg-card p-3 shadow-sm">
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase">
                      {item.label}
                    </p>
                    <p className="text-xl font-headline font-black text-primary leading-none">
                      {fmt(item.value)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* İlgili Haberler */}
            {related.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-sm font-headline font-black uppercase tracking-widest text-primary border-b-2 border-primary pb-2">
                  İlgili Haberler
                </h4>
                <div className="space-y-3">
                  {related.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleRelatedClick(item)}
                      className="w-full text-left bg-surface-low hover:bg-surface-high transition-colors p-4 flex gap-4 group"
                    >
                      {item.image && (
                        <div className="w-24 h-24 flex-shrink-0 overflow-hidden bg-surface-high">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="flex flex-col justify-between min-w-0 gap-1">
                        <span className="text-[9px] font-bold text-secondary uppercase">
                          {article.category}
                        </span>
                        <h5 className="font-bold text-sm leading-tight text-primary group-hover:underline line-clamp-3">
                          {item.title}
                        </h5>
                        <span className="text-[10px] text-on-surface-variant">
                          {item.pubDate
                            ? new Date(item.pubDate).toLocaleDateString("tr-TR")
                            : ""}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Bülten */}
            <div className="bg-primary p-8 text-primary-foreground relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-headline font-black mb-2">Bültene Katılın</h4>
                <p className="text-sm opacity-80 mb-6 font-medium">
                  Gündemin en sıcak başlıkları her sabah kapınıza gelsin.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="w-full bg-white/10 border-0 p-3 text-sm placeholder:text-white/50 text-white outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="w-full bg-white text-primary font-headline font-bold uppercase py-3 text-sm hover:opacity-90 transition-opacity">
                    Abone Ol
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            </div>

          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default ArticlePage;
