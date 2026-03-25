import { useRSSFeed } from "@/hooks/useRSSFeed";
import { Skeleton } from "@/components/ui/skeleton";
import { TrendingUp } from "lucide-react";

const EkonomiWidget = () => {
  const { data: rssItems, isLoading } = useRSSFeed("ekonomi");

  const items = rssItems?.slice(0, 5) || [];

  return (
    <div className="mb-12">
      <div className="section-title">
        <h2 className="section-title-label">EKONOMİ</h2>
        <a href="/ekonomi" className="section-title-link">
          TÜMÜNÜ GÖR <span>›</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="bg-surface-low p-4">
                <Skeleton className="h-3 w-16 mb-2" />
                <Skeleton className="h-5 w-full mb-1" />
                <Skeleton className="h-5 w-3/4" />
              </div>
            ))
          : items.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-low p-4 border-l-4 border-primary hover:bg-surface-high transition-colors group"
              >
                <div className="flex items-center gap-1 mb-2">
                  <TrendingUp className="w-3.5 h-3.5 text-primary" />
                  <span className="category-tag">EKONOMİ</span>
                </div>
                <h4 className="font-bold text-sm leading-tight line-clamp-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
              </a>
            ))}
      </div>
    </div>
  );
};

export default EkonomiWidget;
