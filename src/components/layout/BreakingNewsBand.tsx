import { useEffect, useRef, useState } from "react";
import { Megaphone } from "lucide-react";
import { useRSSFeed } from "@/hooks/useRSSFeed";

const INTERVAL_MS = 5000;

const BreakingNewsBand = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { data: items, isLoading } = useRSSFeed("breaking");

  useEffect(() => {
    if (!items || items.length < 2) return;

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [items?.length]);

  const current = items?.[index];

  return (
    <section className="w-full bg-secondary text-secondary-foreground py-3 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 flex items-center">
        <div className="flex-shrink-0 font-extrabold italic uppercase tracking-tighter mr-4 md:mr-6 border-r border-secondary-foreground/30 pr-4 md:pr-6 flex items-center gap-2 font-headline">
          <Megaphone className="w-4 h-4 animate-pulse" />
          <span className="text-sm md:text-base">SON DAKİKA</span>
        </div>

        <div className="flex-grow text-sm md:text-base font-semibold tracking-tight truncate">
          {isLoading && (
            <span className="opacity-50">Yükleniyor...</span>
          )}
          {!isLoading && current && (
            <a
              href={current.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {current.title}
            </a>
          )}
          {!isLoading && !current && (
            <span className="opacity-50">—</span>
          )}
        </div>

        {current?.pubDate && (
          <div className="flex-shrink-0 text-xs md:text-sm opacity-70 font-mono ml-4 hidden sm:block">
            {new Date(current.pubDate).toLocaleTimeString("tr-TR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default BreakingNewsBand;
