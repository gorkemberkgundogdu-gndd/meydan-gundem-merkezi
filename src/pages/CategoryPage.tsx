import Layout from "@/components/layout/Layout";
import parliamentImg from "@/assets/parliament.jpg";
import heroSummitImg from "@/assets/hero-summit.jpg";
import economyImg from "@/assets/economy.jpg";
import defenseImg from "@/assets/defense.jpg";
import worldImg from "@/assets/world.jpg";
import liveStudioImg from "@/assets/live-studio.jpg";
import videoCityImg from "@/assets/video-city.jpg";
import videoFinanceImg from "@/assets/video-finance.jpg";
import videoStartupImg from "@/assets/video-startup.jpg";
import videoAgricultureImg from "@/assets/video-agriculture.jpg";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRSSFeed } from "@/hooks/useRSSFeed";

const filters = ["Tümü", "Son Dakika", "Bugün", "Bu Hafta"];

interface CategoryConfig {
  title: string;
  description: string;
  articles: { headline: string; img: string; date: string; tag: string }[];
}

const categories: Record<string, CategoryConfig> = {
  siyaset: {
    title: "SİYASET",
    description: "Türkiye siyasetinde günün öne çıkan gelişmeleri, analizler ve yorumlar.",
    articles: [
      { headline: "MHP Lideri Bahçeli: 'Türkiye'nin geleceği için kenetlenmeliyiz'", img: parliamentImg, date: "25 Mart 2026", tag: "SİYASET" },
      { headline: "Cumhurbaşkanı Erdoğan: Bölgesel istikrarın güvencesiyiz", img: heroSummitImg, date: "25 Mart 2026", tag: "SİYASET" },
      { headline: "Ana muhalefet partisinde 'tüzük' kurultayı hazırlığı", img: economyImg, date: "25 Mart 2026", tag: "SİYASET" },
      { headline: "Kabine toplantısı sonrası açıklama: Emekli maaşlarına ek düzenleme yolda", img: defenseImg, date: "24 Mart 2026", tag: "SİYASET" },
      { headline: "Yargı paketi meclis yolunda: Denetimli serbestlikte yeni kurallar", img: worldImg, date: "24 Mart 2026", tag: "SİYASET" },
      { headline: "Meclis'te yeni anayasa mesaisi başlıyor: Takvim belli oldu", img: liveStudioImg, date: "24 Mart 2026", tag: "SİYASET" },
    ],
  },
  ekonomi: {
    title: "EKONOMİ",
    description: "Piyasalar, finans, iş dünyası ve makroekonomi gelişmeleri.",
    articles: [
      { headline: "Merkez Bankası faiz kararını açıkladı: Piyasalar beklentiye geçti", img: videoFinanceImg, date: "25 Mart 2026", tag: "EKONOMİ" },
      { headline: "Borsa İstanbul'da yeni rekor: BIST 100 tarihi zirvede", img: economyImg, date: "25 Mart 2026", tag: "EKONOMİ" },
      { headline: "Enflasyonda düşüş trendi devam edecek mi? Uzmanlar değerlendirdi", img: heroSummitImg, date: "25 Mart 2026", tag: "EKONOMİ" },
      { headline: "Dış ticaret açığı daraldı: İhracat rakamları beklentilerin üstünde", img: liveStudioImg, date: "24 Mart 2026", tag: "EKONOMİ" },
      { headline: "Konut satışlarında yeni dönem: Kredi faiz oranları güncellendi", img: videoCityImg, date: "24 Mart 2026", tag: "EKONOMİ" },
      { headline: "Tarım sektöründe destek paketi açıklandı: Çiftçilere müjde", img: videoAgricultureImg, date: "23 Mart 2026", tag: "EKONOMİ" },
    ],
  },
};

const RSSCategoryPage = ({ feed, title, description, sourceLabel }: { feed: string; title: string; description: string; sourceLabel: string }) => {
  const [activeFilter, setActiveFilter] = useState("Tümü");
  const { data: rssItems, isLoading, isError } = useRSSFeed(feed);
  const navigate = useNavigate();

  const handleItemClick = (item: NonNullable<typeof rssItems>[0]) => {
    navigate(
      `/haber/${encodeURIComponent(item.title.slice(0, 60).toLowerCase().replace(/\s+/g, "-"))}`,
      {
        state: {
          ...item,
          category: title,
          feedKey: feed,
          sourceLabel,
        },
      }
    );
  };

  return (
    <Layout>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-6 lg:py-10">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl lg:text-5xl font-headline font-extrabold tracking-tighter uppercase text-primary">{title}</h1>
            <div className="h-1 flex-1 bg-primary/20" />
          </div>
          <p className="text-on-surface-variant text-lg">{description}</p>
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-extrabold uppercase tracking-widest transition-colors font-headline ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface-low text-on-surface-variant hover:bg-surface-high"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-surface-low aspect-video mb-3" />
                <div className="h-4 bg-surface-low mb-2 w-1/4" />
                <div className="h-5 bg-surface-low mb-1" />
                <div className="h-5 bg-surface-low w-3/4" />
              </div>
            ))}
          </div>
        )}

        {isError && (
          <div className="text-center py-20 text-on-surface-variant">Haberler yüklenirken bir hata oluştu.</div>
        )}

        {!isLoading && !isError && rssItems && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {rssItems.map((item, i) => (
              <button key={i} onClick={() => handleItemClick(item)} className="group news-card text-left">
                <div className="overflow-hidden mb-3">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={400} height={225} />
                  ) : (
                    <div className="w-full aspect-video bg-surface-low flex items-center justify-center">
                      <span className="text-on-surface-variant text-xs">{sourceLabel}</span>
                    </div>
                  )}
                </div>
                <span className="category-tag">{title}</span>
                <h3 className="font-bold text-lg leading-tight mt-1 mb-2 news-card-headline font-headline">{item.title}</h3>
                <span className="text-xs text-on-surface-variant">{item.pubDate ? new Date(item.pubDate).toLocaleDateString("tr-TR") : ""}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

const DunyaPage = () => (
  <RSSCategoryPage
    feed="dunya"
    title="DÜNYA"
    description="Uluslararası gündem, küresel gelişmeler ve dış politika haberleri."
    sourceLabel="BBC Türkçe"
  />
);

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeFilter, setActiveFilter] = useState("Tümü");

  if (slug === "dunya") {
    return <DunyaPage />;
  }

  if (slug === "savunma") {
    return (
      <RSSCategoryPage
        feed="savunma"
        title="SAVUNMA"
        description="Milli savunma sanayii, TSK operasyonları ve güvenlik gelişmeleri."
        sourceLabel="Mavi Savunma"
      />
    );
  }

  if (slug === "siyaset") {
    return (
      <RSSCategoryPage
        feed="siyaset"
        title="SİYASET"
        description="Türkiye siyasetinde günün öne çıkan gelişmeleri, analizler ve yorumlar."
        sourceLabel="A Haber"
      />
    );
  }

  if (slug === "ekonomi") {
    return (
      <RSSCategoryPage
        feed="ekonomi"
        title="EKONOMİ"
        description="Piyasalar, finans, iş dünyası ve makroekonomi gelişmeleri."
        sourceLabel="Bloomberg HT"
      />
    );
  }

  const category = categories[slug || "siyaset"];

  if (!category) {
    return (
      <Layout>
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-20 text-center">
          <h1 className="text-4xl font-headline font-extrabold text-primary mb-4">Kategori Bulunamadı</h1>
          <p className="text-on-surface-variant">Aradığınız kategori mevcut değil.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-6 lg:py-10">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl lg:text-5xl font-headline font-extrabold tracking-tighter uppercase text-primary">{category.title}</h1>
            <div className="h-1 flex-1 bg-primary/20" />
          </div>
          <p className="text-on-surface-variant text-lg">{category.description}</p>
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-extrabold uppercase tracking-widest transition-colors font-headline ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface-low text-on-surface-variant hover:bg-surface-high"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {category.articles.map((article, i) => (
            <div key={i} className="group news-card">
              <div className="overflow-hidden mb-3">
                <img src={article.img} alt={article.headline} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={400} height={225} />
              </div>
              <span className="category-tag">{article.tag}</span>
              <h3 className="font-bold text-lg leading-tight mt-1 mb-2 news-card-headline font-headline">{article.headline}</h3>
              <span className="text-xs text-on-surface-variant">{article.date}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          <button className="bg-primary text-primary-foreground w-10 h-10 font-bold text-sm">1</button>
          {[2, 3, 4, 5].map((n) => (
            <button key={n} className="bg-surface-low text-on-surface-variant w-10 h-10 font-bold text-sm hover:bg-surface-high transition-colors">{n}</button>
          ))}
          <button className="bg-surface-low text-on-surface-variant px-4 h-10 font-bold text-sm hover:bg-surface-high transition-colors">Sonraki ›</button>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
