import heroSummit from "@/assets/hero-summit.jpg";
import economyImg from "@/assets/economy.jpg";
import defenseImg from "@/assets/defense.jpg";
import worldImg from "@/assets/world.jpg";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-12 gap-6 lg:gap-8 mb-10 lg:mb-12">
      {/* Main Story */}
      <div className="col-span-12 lg:col-span-8 news-card">
        <a href="/haber/turkiye-korfez-zirvesi" className="block">
          <div className="relative overflow-hidden aspect-[16/9] mb-4 lg:mb-6">
            <img
              src={heroSummit}
              alt="Türkiye-Körfez zirvesi"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              width={1200}
              height={675}
            />
            <div className="absolute top-4 left-4">
              <span className="bg-secondary-container text-secondary-foreground px-3 py-1 font-extrabold text-xs uppercase tracking-widest font-headline">SAVUNMA</span>
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-headline font-extrabold tracking-tighter leading-none mb-3 lg:mb-4 group-hover:text-primary transition-colors">
            Türkiye–Körfez zirvesi: Savunma ve enerji alanında 8 anlaşma imzalandı
          </h2>
          <p className="text-on-surface-variant text-base lg:text-lg leading-relaxed max-w-3xl">
            Ankara'da gerçekleşen kritik zirvede savunma sanayii ve yenilenebilir enerji alanlarında stratejik ortaklıklar kuruldu. Bölgesel güvenlik mimarisi yeniden şekilleniyor.
          </p>
        </a>
      </div>

      {/* Secondary Hero Cards */}
      <div className="col-span-12 lg:col-span-4 flex flex-col space-y-4 lg:space-y-6">
        {[
          { category: "EKONOMİ", headline: "Merkez Bankası faiz kararını açıkladı: Beklentiler ne yönde?", img: economyImg },
          { category: "SAVUNMA", headline: "KAAN uçuş testlerinde yeni aşama: Milli motor için tarih verildi", img: defenseImg },
          { category: "DÜNYA", headline: "Gazze diplomasisi: Ankara'nın yeni arabuluculuk hamlesi", img: worldImg },
        ].map((item, i) => (
          <div key={i} className="bg-surface-low p-4 lg:p-6 flex items-start gap-4 border-l-4 border-primary news-card">
            <div className="flex-1">
              <span className="category-tag block mb-1">{item.category}</span>
              <h3 className="font-bold text-base lg:text-xl leading-tight news-card-headline italic">{item.headline}</h3>
            </div>
            <img src={item.img} alt={item.headline} className="w-20 h-20 lg:w-24 lg:h-24 object-cover flex-shrink-0" loading="lazy" width={96} height={96} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
