import { BarChart3 } from "lucide-react";
import liveStudioImg from "@/assets/live-studio.jpg";
import { Eye } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="col-span-12 lg:col-span-4 space-y-8">
      {/* Poll Module */}
      <div className="bg-surface-high p-6">
        <h3 className="font-extrabold text-lg tracking-tight mb-4 flex items-center gap-2 font-headline">
          <BarChart3 className="w-5 h-5 text-primary" />
          KAMUOYU ARAŞTIRMASI
        </h3>
        <div className="space-y-4">
          <p className="text-sm font-bold">Hükümetin son ekonomi paketini nasıl buluyorsunuz?</p>
          <div className="space-y-3">
            {[
              { label: "Çok Başarılı", pct: 42, color: "bg-primary" },
              { label: "Kısmen Yeterli", pct: 28, color: "bg-primary/60" },
              { label: "Yetersiz", pct: 30, color: "bg-secondary" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>{item.label}</span>
                  <span>{item.pct}%</span>
                </div>
                <div className="w-full bg-card h-2 overflow-hidden">
                  <div className={`${item.color} h-full`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-2 bg-card text-primary text-xs font-extrabold uppercase tracking-widest mt-2 hover:bg-primary hover:text-primary-foreground transition-colors font-headline">
            OY KULLAN
          </button>
        </div>
      </div>

      {/* Most Read */}
      <div>
        <h3 className="font-extrabold text-lg tracking-tight border-b-2 border-primary mb-4 pb-1 font-headline">EN ÇOK OKUNANLAR</h3>
        <div className="space-y-4">
          {[
            "Büyükşehirlerde ulaşım zammı kapıda mı? Bakanlıktan açıklama.",
            "Yeni çipli kimliklerde 'ehliyet' kolaylığı: İşte başvuru şartları.",
            "Dünyaca ünlü yıldız İstanbul'a geliyor: Konser biletleri tükendi.",
            "EYT'de son durum: Maaş bağlama süreçlerinde hızlandırma.",
          ].map((text, i) => (
            <div key={i} className="flex gap-4 news-card">
              <span className="text-4xl font-extrabold text-outline-variant/40 group-hover:text-primary transition-colors italic leading-none font-headline">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-bold leading-tight news-card-headline">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Live Stream Banner */}
      <div className="relative news-card overflow-hidden">
        <img src={liveStudioImg} alt="Canlı Yayın" className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={600} height={600} />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-secondary-container animate-pulse" />
            <span className="text-primary-foreground font-extrabold text-xs uppercase tracking-widest font-headline">CANLI YAYIN</span>
          </div>
          <h4 className="text-primary-foreground font-extrabold text-xl lg:text-2xl leading-none italic mb-4 font-headline">
            Meydan Özel: Seçim sathı mailinde partilerin son stratejileri
          </h4>
          <div className="flex items-center gap-2 text-primary-foreground/80 text-xs">
            <Eye className="w-4 h-4" />
            24.5k İzleyici
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
