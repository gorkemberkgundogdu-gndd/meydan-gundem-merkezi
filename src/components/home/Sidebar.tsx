import { useRSSFeed } from "@/hooks/useRSSFeed";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "react-router-dom";
import liveStudioImg from "@/assets/live-studio.jpg";

const Sidebar = () => {
  const { data: items, isLoading } = useRSSFeed("sondakika");
  const topItems = items?.slice(0, 5) ?? [];
  const navigate = useNavigate();

  const handleClick = (item: NonNullable<typeof items>[0]) => {
    navigate(
      `/haber/${encodeURIComponent(item.title.slice(0, 60).toLowerCase().replace(/\s+/g, "-"))}`,
      {
        state: {
          ...item,
          category: "Son Dakika",
          feedKey: "sondakika",
          sourceLabel: "TRT Haber",
        },
      }
    );
  };

  return (
    <aside className="col-span-12 lg:col-span-4 space-y-8">

      {/* Son Haberler */}
      <div>
        <h3 className="font-extrabold text-lg tracking-tight border-b-2 border-primary mb-4 pb-1 font-headline">
          SON HABERLER
        </h3>
        <div className="space-y-4">
          {isLoading &&
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex gap-4">
                <Skeleton className="w-8 h-8 shrink-0" />
                <div className="flex-1 space-y-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}

          {!isLoading && topItems.map((item, i) => (
            <button
              key={i}
              onClick={() => handleClick(item)}
              className="flex gap-4 news-card group w-full text-left"
            >
              <span className="text-4xl font-extrabold text-outline-variant/40 group-hover:text-primary transition-colors italic leading-none font-headline shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-bold leading-tight news-card-headline">
                {item.title}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Promo blok */}
      <div className="relative news-card overflow-hidden">
        <img
          src={liveStudioImg}
          alt="Meydan"
          className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
          width={600}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h4 className="text-primary-foreground font-extrabold text-xl lg:text-2xl leading-none italic mb-2 font-headline">
            Meydan Gündem Merkezi
          </h4>
          <p className="text-primary-foreground/80 text-sm">
            Gündemin merkezinde kalın.
          </p>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;
