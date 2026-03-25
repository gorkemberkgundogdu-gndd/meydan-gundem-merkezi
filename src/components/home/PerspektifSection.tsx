const PerspektifSection = () => {
  return (
    <div className="mb-12 bg-primary p-1">
      <div className="bg-card p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-center">
        <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-extrabold text-5xl md:text-6xl italic leading-none font-headline">P</span>
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="bg-primary text-primary-foreground px-2 py-0.5 text-[10px] font-bold">ÖZEL DOSYA</span>
            <h3 className="text-primary font-extrabold uppercase tracking-widest text-base lg:text-lg font-headline">MEYDAN PERSPEKTİF</h3>
          </div>
          <h4 className="text-xl md:text-3xl font-extrabold tracking-tighter mb-4 italic font-headline">
            2026'ya Doğru: Küresel Enerji Koridorunda Türkiye'nin Merkezi Rolü
          </h4>
          <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
            Derinlemesine analiz serimizin ilk bölümünde, TANAP ve Mavi Akım sonrası gelişen yeni enerji haritasını uzman görüşleriyle inceliyoruz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerspektifSection;
