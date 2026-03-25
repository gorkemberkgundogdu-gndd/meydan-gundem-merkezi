import { PlayCircle } from "lucide-react";
import videoCityImg from "@/assets/video-city.jpg";
import videoFinanceImg from "@/assets/video-finance.jpg";
import videoStartupImg from "@/assets/video-startup.jpg";
import videoAgricultureImg from "@/assets/video-agriculture.jpg";

const videos = [
  { title: "Mega projeler bir bir açılıyor: İstanbul Boğazı'nın yeni yüzü.", img: videoCityImg },
  { title: "Yatırımcıların yeni gözdesi: Hangi emtia daha çok kazandırdı?", img: videoFinanceImg },
  { title: "Genç girişimcilere devlet desteği: 1 milyon TL'ye kadar hibe imkanı.", img: videoStartupImg },
  { title: "Tarımda teknoloji devrimi: Akıllı sulama sistemleri yaygınlaşıyor.", img: videoAgricultureImg },
];

const VideoSection = () => {
  return (
    <section className="bg-surface-low py-12 lg:py-16">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
        <div className="section-title mb-8">
          <h2 className="section-title-label">VİDEO</h2>
          <a href="#" className="section-title-link">
            TÜMÜNÜ GÖR <PlayCircle className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, i) => (
            <div key={i} className="news-card">
              <div className="relative aspect-video mb-3 overflow-hidden">
                <img src={video.img} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={512} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-primary-foreground opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all fill-current" />
                </div>
              </div>
              <h5 className="font-bold text-sm leading-tight line-clamp-2 italic news-card-headline">{video.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
