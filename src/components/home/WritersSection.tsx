const writers = [
  { name: "M. Selim Akın", topic: "Ege'de sular ısınırken Ankara ne yapmalı?", initials: "MSA" },
  { name: "Ayşe Demirtaş", topic: "Ekonomide yeni dönemin şifreleri ve güven.", initials: "AD" },
  { name: "Cemil Yılmaz", topic: "Siber güvenlikte milli yazılımın hayati önemi.", initials: "CY" },
  { name: "Zeynep Özgür", topic: "Gelecek seçimler ve değişen seçmen sosyolojisi.", initials: "ZÖ" },
];

const WritersSection = () => {
  return (
    <div className="mb-12">
      <div className="section-title">
        <h2 className="section-title-label">YAZARLAR</h2>
        <a href="#" className="section-title-link">TÜMÜNÜ GÖR</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {writers.map((writer) => (
          <div key={writer.name} className="text-center news-card">
            <div className="relative mb-3 mx-auto w-20 h-20 lg:w-24 lg:h-24 overflow-hidden rounded-full bg-surface-high flex items-center justify-center">
              <span className="text-on-surface-variant font-extrabold text-xl font-headline">{writer.initials}</span>
            </div>
            <h5 className="font-bold text-sm mb-1">{writer.name}</h5>
            <p className="text-xs text-on-surface-variant font-bold leading-tight news-card-headline">{writer.topic}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WritersSection;
