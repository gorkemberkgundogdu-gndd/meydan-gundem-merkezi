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
import { useState } from "react";

const filters = ["Tümü", "Son Dakika", "Bugün", "Bu Hafta"];

const articles = [
  { headline: "MHP Lideri Bahçeli: 'Türkiye'nin geleceği için kenetlenmeliyiz'", img: parliamentImg, date: "25 Mart 2026" },
  { headline: "Cumhurbaşkanı Erdoğan: Bölgesel istikrarın güvencesiyiz", img: heroSummitImg, date: "25 Mart 2026" },
  { headline: "Ana muhalefet partisinde 'tüzük' kurultayı hazırlığı", img: economyImg, date: "25 Mart 2026" },
  { headline: "Kabine toplantısı sonrası açıklama: Emekli maaşlarına ek düzenleme yolda", img: defenseImg, date: "24 Mart 2026" },
  { headline: "Yargı paketi meclis yolunda: Denetimli serbestlikte yeni kurallar", img: worldImg, date: "24 Mart 2026" },
  { headline: "Meclis'te yeni anayasa mesaisi başlıyor: Takvim belli oldu", img: liveStudioImg, date: "24 Mart 2026" },
  { headline: "Sınır hattında dikkat çeken gelişme: Güvenlik önlemleri artırıldı", img: videoCityImg, date: "23 Mart 2026" },
  { headline: "Ekonomide yeni dönem sinyali: Yapısal reform paketi açıklanıyor", img: videoFinanceImg, date: "23 Mart 2026" },
  { headline: "Cumhurbaşkanı'ndan net mesaj: Terörle mücadelede kararlılık", img: videoStartupImg, date: "23 Mart 2026" },
];

const CategoryPage = () => {
  const [activeFilter, setActiveFilter] = useState("Tümü");

  return (
    <Layout>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-6 lg:py-10">
        {/* Category Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl lg:text-5xl font-headline font-extrabold tracking-tighter uppercase text-primary">SİYASET</h1>
            <div className="h-1 flex-1 bg-primary/20" />
          </div>
          <p className="text-on-surface-variant text-lg">Türkiye siyasetinde günün öne çıkan gelişmeleri, analizler ve yorumlar.</p>
        </div>

        {/* Filter Bar */}
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article, i) => (
            <div key={i} className="news-card">
              <div className="overflow-hidden mb-3">
                <img src={article.img} alt={article.headline} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={400} height={225} />
              </div>
              <span className="category-tag">SİYASET</span>
              <h3 className="font-bold text-lg leading-tight mt-1 mb-2 news-card-headline font-headline">{article.headline}</h3>
              <span className="text-xs text-on-surface-variant">{article.date}</span>
            </div>
          ))}
        </div>

        {/* Pagination */}
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
