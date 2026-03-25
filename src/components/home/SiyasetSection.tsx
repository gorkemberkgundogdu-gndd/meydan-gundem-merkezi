import parliamentImg from "@/assets/parliament.jpg";
import economyImg from "@/assets/economy.jpg";
import defenseImg from "@/assets/defense.jpg";

const SiyasetSection = () => {
  const sideStories = [
    { headline: "Ana muhalefet partisinde 'tüzük' kurultayı hazırlığı: Kritik maddeler masada.", img: economyImg },
    { headline: "Kabine toplantısı sonrası açıklama: Emekli maaşlarına ek düzenleme yolda.", img: defenseImg },
    { headline: "Yargı paketi meclis yolunda: Denetimli serbestlikte yeni kurallar.", img: parliamentImg },
  ];

  return (
    <div className="mb-12">
      <div className="section-title">
        <h2 className="section-title-label">SİYASET</h2>
        <a href="/siyaset" className="section-title-link">
          TÜMÜNÜ GÖR <span>›</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 news-card">
          <img src={parliamentImg} alt="Meclis" className="w-full aspect-video object-cover" loading="lazy" width={800} height={512} />
          <h4 className="font-extrabold text-xl lg:text-2xl tracking-tight leading-tight font-headline news-card-headline">
            MHP Lideri Bahçeli: "Türkiye'nin geleceği için kenetlenmeliyiz"
          </h4>
          <p className="text-sm text-on-surface-variant">
            Haftalık grup toplantısında önemli açıklamalarda bulunan Bahçeli, dış politikada kararlılık vurgusu yaptı.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          {sideStories.map((story, i) => (
            <div key={i} className="flex gap-4 news-card">
              <img src={story.img} alt="" className="w-24 h-24 object-cover flex-shrink-0" loading="lazy" width={96} height={96} />
              <h5 className="font-bold text-sm leading-tight news-card-headline">{story.headline}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SiyasetSection;
