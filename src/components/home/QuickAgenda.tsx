const quickItems = [
  { category: "POLİTİKA", text: "Meclis'te yeni anayasa mesaisi başlıyor: Takvim belli oldu." },
  { category: "TEKNOLOJİ", text: "Yerli yapay zeka modeli \"MEYDAN AI\" beta aşamasında." },
  { category: "SPOR", text: "Milliler'den tarihi zafer: Grup liderliği garantilendi." },
  { category: "KÜLTÜR", text: "Troya Müzesi'ne Avrupa'dan büyük ödül: En iyi vizyon." },
  { category: "EKONOMİ", text: "Konut satışlarında beklenmedik artış: Piyasa canlanıyor." },
  { category: "SAĞLIK", text: "Şehir hastanelerinde dijital dönüşüm: Yeni randevu sistemi." },
];

const QuickAgenda = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-outline-variant/20 mb-10 lg:mb-12">
      {quickItems.map((item, i) => (
        <div key={i} className="bg-card p-4 hover:bg-surface-low transition-colors cursor-pointer">
          <span className="category-tag">{item.category}</span>
          <p className="text-sm font-bold leading-tight mt-1 line-clamp-3">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default QuickAgenda;
