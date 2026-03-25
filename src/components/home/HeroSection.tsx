import { useRSSFeed } from "@/hooks/useRSSFeed";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const { data: items, isLoading } = useRSSFeed("hero");
  const navigate = useNavigate();

  const main = items?.[0];
  const secondary = items?.slice(1, 4) ?? [];

  const handleClick = (item: NonNullable<typeof items>[0]) => {
    navigate(
      `/haber/${encodeURIComponent(item.title.slice(0, 60).toLowerCase().replace(/\s+/g, "-"))}`,
      {
        state: {
          ...item,
          category: "Gündem",
          feedKey: "hero",
          sourceLabel: "Ensonhaber",
        },
      }
    );
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-12 gap-6 lg:gap-8 mb-10 lg:mb-12">
        <div className="col-span-12 lg:col-span-8">
          <Skeleton className="w-full aspect-[16/9] mb-4" />
          <Skeleton className="h-8 w-3/4 mb-2" />
          <Skeleton className="h-8 w-1/2 mb-4" />
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col space-y-4 lg:space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-surface-low">
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <Skeleton className="w-20 h-20 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!main) return null;

  return (
    <div className="grid grid-cols-12 gap-6 lg:gap-8 mb-10 lg:mb-12">
      {/* Ana haber */}
      <div className="col-span-12 lg:col-span-8 news-card group">
        <button onClick={() => handleClick(main)} className="block w-full text-left">
          <div className="relative overflow-hidden aspect-[16/9] mb-4 lg:mb-6">
            {main.image ? (
              <img
                src={main.image}
                alt={main.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={1200}
                height={675}
              />
            ) : (
              <div className="w-full h-full bg-surface-low flex items-center justify-center">
                <span className="text-on-surface-variant text-sm">Ensonhaber</span>
              </div>
            )}
            <div className="absolute top-4 left-4">
              <span className="bg-secondary-container text-secondary-foreground px-3 py-1 font-extrabold text-xs uppercase tracking-widest font-headline">
                GÜNDEM
              </span>
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-headline font-extrabold tracking-tighter leading-none mb-3 lg:mb-4 group-hover:text-primary transition-colors">
            {main.title}
          </h2>
          {main.description && (
            <p className="text-on-surface-variant text-base lg:text-lg leading-relaxed max-w-3xl">
              {main.description}
            </p>
          )}
        </button>
      </div>

      {/* Yan haberler */}
      <div className="col-span-12 lg:col-span-4 flex flex-col space-y-4 lg:space-y-6">
        {secondary.map((item, i) => (
          <button
            key={i}
            onClick={() => handleClick(item)}
            className="bg-surface-low p-4 lg:p-6 flex items-start gap-4 border-l-4 border-primary news-card group text-left w-full"
          >
            <div className="flex-1">
              <span className="category-tag block mb-1">GÜNDEM</span>
              <h3 className="font-bold text-base lg:text-xl leading-tight news-card-headline italic">
                {item.title}
              </h3>
            </div>
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 lg:w-24 lg:h-24 object-cover flex-shrink-0"
                loading="lazy"
                width={96}
                height={96}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
