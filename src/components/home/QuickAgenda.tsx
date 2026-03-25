import { useRSSFeed } from "@/hooks/useRSSFeed";
import { Skeleton } from "@/components/ui/skeleton";

const fallbackItems = [
  { category: "POLİTİKA", text: "Meclis'te yeni anayasa mesaisi başlıyor: Takvim belli oldu." },
  { category: "TEKNOLOJİ", text: "Yerli yapay zeka modeli beta aşamasında." },
  { category: "SPOR", text: "Milliler'den tarihi zafer: Grup liderliği garantilendi." },
  { category: "KÜLTÜR", text: "Troya Müzesi'ne Avrupa'dan büyük ödül." },
  { category: "EKONOMİ", text: "Konut satışlarında beklenmedik artış." },
  { category: "SAĞLIK", text: "Şehir hastanelerinde dijital dönüşüm." },
];

const QuickAgenda = () => {
  const { data: rssItems, isLoading } = useRSSFeed("sondakika");

  const items = rssItems && rssItems.length > 0
    ? rssItems.slice(0, 6).map((item) => ({
        category: "SON DAKİKA",
        text: item.title,
        link: item.link,
      }))
    : fallbackItems.map((item) => ({ ...item, link: "#" }));

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-outline-variant/20 mb-10 lg:mb-12">
      {isLoading
        ? Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-card p-4">
              <Skeleton className="h-3 w-16 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))
        : items.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target={item.link !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="bg-card p-4 hover:bg-surface-low transition-colors cursor-pointer block"
            >
              <span className="category-tag">{item.category}</span>
              <p className="text-sm font-bold leading-tight mt-1 line-clamp-3">{item.text}</p>
            </a>
          ))}
    </div>
  );
};

export default QuickAgenda;
