import { useRSSFeed } from "@/hooks/useRSSFeed";
import { Skeleton } from "@/components/ui/skeleton";
import parliamentImg from "@/assets/parliament.jpg";
import economyImg from "@/assets/economy.jpg";
import defenseImg from "@/assets/defense.jpg";

const fallbackSideStories = [
  { headline: "Ana muhalefet partisinde 'tüzük' kurultayı hazırlığı: Kritik maddeler masada.", img: economyImg },
  { headline: "Kabine toplantısı sonrası açıklama: Emekli maaşlarına ek düzenleme yolda.", img: defenseImg },
  { headline: "Yargı paketi meclis yolunda: Denetimli serbestlikte yeni kurallar.", img: parliamentImg },
];

const fallbackImages = [economyImg, defenseImg, parliamentImg];

const SiyasetSection = () => {
  const { data: rssItems, isLoading } = useRSSFeed("gundem");

  const mainStory = rssItems?.[0];
  const sideStories = rssItems
    ? rssItems.slice(1, 4).map((item, i) => ({
        headline: item.title,
        img: item.image || fallbackImages[i % fallbackImages.length],
        link: item.link,
      }))
    : fallbackSideStories.map((s) => ({ ...s, link: "#" }));

  return (
    <div className="mb-12">
      <div className="section-title">
        <h2 className="section-title-label">SİYASET</h2>
        <a href="/siyaset" className="section-title-link">
          TÜMÜNÜ GÖR <span>›</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="w-full aspect-video" />
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
          </div>
        ) : (
          <a
            href={mainStory?.link || "#"}
            target={mainStory?.link ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="space-y-4 group news-card"
          >
            <img
              src={mainStory?.image || parliamentImg}
              alt={mainStory?.title || "Siyaset"}
              className="w-full aspect-video object-cover"
              loading="lazy"
              width={800}
              height={512}
            />
            <h4 className="font-extrabold text-xl lg:text-2xl tracking-tight leading-tight font-headline news-card-headline">
              {mainStory?.title || "MHP Lideri Bahçeli: \"Türkiye'nin geleceği için kenetlenmeliyiz\""}
            </h4>
            <p className="text-sm text-on-surface-variant">
              {mainStory?.description || "Haftalık grup toplantısında önemli açıklamalarda bulunan Bahçeli, dış politikada kararlılık vurgusu yaptı."}
            </p>
          </a>
        )}
        <div className="flex flex-col space-y-4">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-4">
                  <Skeleton className="w-24 h-24 flex-shrink-0" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))
            : sideStories.map((story, i) => (
                <a
                  key={i}
                  href={story.link}
                  target={story.link !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex gap-4 group news-card"
                >
                  <img src={story.img} alt="" className="w-24 h-24 object-cover flex-shrink-0" loading="lazy" width={96} height={96} />
                  <h5 className="font-bold text-sm leading-tight news-card-headline">{story.headline}</h5>
                </a>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SiyasetSection;
