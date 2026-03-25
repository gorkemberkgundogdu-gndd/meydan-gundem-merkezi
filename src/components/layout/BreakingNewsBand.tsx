import { Megaphone } from "lucide-react";

const BreakingNewsBand = () => {
  return (
    <section className="w-full bg-secondary text-secondary-foreground py-3 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 flex items-center">
        <div className="flex-shrink-0 font-extrabold italic uppercase tracking-tighter mr-4 md:mr-6 border-r border-secondary-foreground/30 pr-4 md:pr-6 flex items-center gap-2 font-headline">
          <Megaphone className="w-4 h-4 animate-pulse" />
          <span className="text-sm md:text-base">SON DAKİKA</span>
        </div>
        <div className="flex-grow font-semibold tracking-tight truncate text-sm md:text-lg">
          Cumhurbaşkanı Erdoğan: "Türkiye, bölgesel istikrarın güvencesidir."
        </div>
        <div className="flex-shrink-0 text-xs md:text-sm opacity-80 font-mono ml-4 hidden sm:block">14:42</div>
      </div>
    </section>
  );
};

export default BreakingNewsBand;
