import Layout from "@/components/layout/Layout";
import heroSummitImg from "@/assets/hero-summit.jpg";
import { Clock, Share2, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import economyImg from "@/assets/economy.jpg";
import defenseImg from "@/assets/defense.jpg";
import worldImg from "@/assets/world.jpg";
import parliamentImg from "@/assets/parliament.jpg";

const tags = ["Dış Politika", "Erdoğan", "Körfez", "Riyad", "Savunma"];

const relatedArticles = [
  { category: "SAVUNMA", headline: "KAAN uçuş testlerinde yeni aşama: Milli motor için tarih verildi", img: defenseImg },
  { category: "EKONOMİ", headline: "Merkez Bankası faiz kararını açıkladı: Beklentiler ne yönde?", img: economyImg },
  { category: "DÜNYA", headline: "Gazze diplomasisi: Ankara'nın yeni arabuluculuk hamlesi", img: worldImg },
  { category: "SİYASET", headline: "MHP Lideri Bahçeli: 'Türkiye'nin geleceği için kenetlenmeliyiz'", img: parliamentImg },
];

const ArticlePage = () => {
  return (
    <Layout showBreaking={false}>
      <article className="max-w-screen-2xl mx-auto px-4 md:px-6 py-6 lg:py-10">
        <div className="max-w-4xl mx-auto">
          {/* Category */}
          <span className="bg-secondary-container text-secondary-foreground px-3 py-1 font-extrabold text-xs uppercase tracking-widest font-headline inline-block mb-4">SAVUNMA</span>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold tracking-tighter leading-none mb-4">
            Türkiye–Körfez zirvesi: Savunma ve enerji alanında 8 anlaşma imzalandı
          </h1>

          {/* Subheadline */}
          <p className="text-on-surface-variant text-lg lg:text-xl leading-relaxed mb-6">
            Ankara'da gerçekleşen kritik zirvede savunma sanayii ve yenilenebilir enerji alanlarında stratejik ortaklıklar kuruldu. Bölgesel güvenlik mimarisi yeniden şekilleniyor.
          </p>

          {/* Author and meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-on-surface-variant border-y border-border py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-surface-high flex items-center justify-center font-extrabold text-xs font-headline">MA</div>
              <span className="font-bold text-foreground">Mehmet Akın</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>25 Mart 2026, 14:42</span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <button className="p-2 hover:bg-muted rounded-full transition-colors"><Share2 className="w-4 h-4" /></button>
              <button className="p-2 hover:bg-muted rounded-full transition-colors"><Twitter className="w-4 h-4" /></button>
              <button className="p-2 hover:bg-muted rounded-full transition-colors"><Facebook className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-8">
            <img src={heroSummitImg} alt="Türkiye-Körfez zirvesi" className="w-full aspect-[16/9] object-cover" width={1200} height={675} />
            <p className="text-xs text-on-surface-variant mt-2 italic">Ankara'daki zirve toplantısından bir kare. Fotoğraf: AA</p>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none space-y-6 text-foreground leading-relaxed">
            <p>
              Cumhurbaşkanı Recep Tayyip Erdoğan, Körfez ülkelerinin liderleriyle Ankara'da gerçekleştirilen zirvede önemli açıklamalarda bulundu. Zirve sonunda savunma sanayii, yenilenebilir enerji, lojistik ve teknoloji transfer alanlarında toplam 8 stratejik anlaşma imzalandı.
            </p>
            <p>
              Anlaşmalar arasında Türk savunma sanayii ürünlerinin Körfez ülkelerine ihracatı, ortak askeri tatbikatlar ve yenilenebilir enerji projelerinde iş birliği protokolleri yer alıyor. Cumhurbaşkanı Erdoğan, "Türkiye, bölgesel istikrarın güvencesidir ve bu anlaşmalar bunun en somut göstergesidir" ifadelerini kullandı.
            </p>

            {/* Quote Block */}
            <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 bg-surface-low">
              <p className="font-headline font-extrabold text-xl italic tracking-tight text-foreground">
                "Türkiye, bölgesel istikrarın güvencesidir ve bu anlaşmalar bunun en somut göstergesidir."
              </p>
              <cite className="text-sm text-on-surface-variant not-italic font-bold">— Cumhurbaşkanı Recep Tayyip Erdoğan</cite>
            </blockquote>

            <p>
              Enerji alanında imzalanan protokollere göre, Türkiye ve Körfez ülkeleri güneş enerjisi santralleri, rüzgar enerjisi projeleri ve hidrojen teknolojileri konusunda ortak yatırımlar yapacak. Bu yatırımların toplam değerinin 12 milyar doları aşması bekleniyor.
            </p>
            <p>
              Savunma sanayii anlaşmaları kapsamında ise Bayraktar TB3 insansız hava araçları, KAAN savaş uçağı ve Altay tankı projelerinde teknoloji transferi ve ortak üretim modelleri değerlendirilecek. Uzmanlar, bu anlaşmaların Türk savunma sanayiinin küresel pazardaki konumunu güçlendireceğini belirtiyor.
            </p>

            <blockquote className="border-l-4 border-secondary pl-6 py-2 my-8 bg-surface-low">
              <p className="font-headline font-extrabold text-xl italic tracking-tight text-foreground">
                "Bu anlaşmalar, Türk savunma sanayiinin küresel arenadaki rekabet gücünü katbekat artıracak."
              </p>
              <cite className="text-sm text-on-surface-variant not-italic font-bold">— Savunma Sanayii Başkanı</cite>
            </blockquote>

            <p>
              Zirvenin ardından yapılan ortak basın toplantısında, iki tarafın da ilişkileri "stratejik ortaklık" düzeyine taşıma konusunda mutabık kaldığı açıklandı. Bir sonraki zirvenin 2026 sonbaharında Riyad'da yapılması planlanıyor.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="bg-surface-low px-3 py-1.5 text-xs font-bold text-on-surface-variant hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Related Content */}
        <div className="max-w-screen-2xl mt-12 lg:mt-16">
          <div className="section-title">
            <h2 className="section-title-label">İLGİLİ HABERLER</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedArticles.map((article, i) => (
              <div key={i} className="news-card">
                <div className="overflow-hidden mb-3">
                  <img src={article.img} alt={article.headline} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={400} height={225} />
                </div>
                <span className="category-tag">{article.category}</span>
                <h5 className="font-bold text-sm leading-tight mt-1 news-card-headline">{article.headline}</h5>
              </div>
            ))}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ArticlePage;
