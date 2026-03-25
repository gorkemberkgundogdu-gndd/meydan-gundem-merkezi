import Layout from "@/components/layout/Layout";

const Kunye = () => {
  return (
    <Layout showBreaking={false}>
      <div className="max-w-screen-md mx-auto px-4 md:px-6 py-10 lg:py-16">
        <h1 className="text-3xl lg:text-4xl font-headline font-extrabold tracking-tighter text-primary uppercase mb-8">
          Künye
        </h1>

        <div className="space-y-8 text-foreground/90">

          <section>
            <h2 className="text-lg font-headline font-bold uppercase border-b border-border pb-2 mb-4">Yayın Bilgileri</h2>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border">
                <tr className="py-2"><td className="py-2 text-on-surface-variant w-48">Yayın Adı</td><td className="py-2 font-medium">Meydan Gündem Merkezi</td></tr>
                <tr><td className="py-2 text-on-surface-variant">Yayın Türü</td><td className="py-2 font-medium">Elektronik Yayın / İnternet Haber Sitesi</td></tr>
                <tr><td className="py-2 text-on-surface-variant">Yayın Dili</td><td className="py-2 font-medium">Türkçe</td></tr>
                <tr><td className="py-2 text-on-surface-variant">Yayına Başlama</td><td className="py-2 font-medium">2026</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-lg font-headline font-bold uppercase border-b border-border pb-2 mb-4">Yayın Kuruluşu</h2>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border">
                <tr><td className="py-2 text-on-surface-variant w-48">Şirket Unvanı</td><td className="py-2 font-medium">Meydan Medya A.Ş.</td></tr>
                <tr><td className="py-2 text-on-surface-variant">Adres</td><td className="py-2 font-medium">Ankara, Türkiye</td></tr>
                <tr><td className="py-2 text-on-surface-variant">E-posta</td><td className="py-2 font-medium"><a href="mailto:iletisim@meydanmedya.com.tr" className="text-primary hover:underline">iletisim@meydanmedya.com.tr</a></td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-lg font-headline font-bold uppercase border-b border-border pb-2 mb-4">Editoryal Kadro</h2>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border">
                <tr><td className="py-2 text-on-surface-variant w-48">Genel Yayın Yönetmeni</td><td className="py-2 font-medium">—</td></tr>
                <tr><td className="py-2 text-on-surface-variant">Sorumlu Müdür</td><td className="py-2 font-medium">—</td></tr>
                <tr><td className="py-2 text-on-surface-variant">Haber Koordinatörü</td><td className="py-2 font-medium">—</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-lg font-headline font-bold uppercase border-b border-border pb-2 mb-4">Editoryal İlkeler</h2>
            <div className="text-sm space-y-3 text-foreground/80 leading-relaxed">
              <p>Meydan Gündem Merkezi; doğruluk, tarafsızlık ve şeffaflık ilkelerini temel alarak gazetecilik faaliyetini yürütür.</p>
              <p>Haberler, birden fazla kaynaktan teyit edilerek yayınlanır. Hata yapıldığında düzeltme şeffaf biçimde kamuoyuyla paylaşılır.</p>
              <p>Reklam ve editoryal içerik birbirinden kesin çizgilerle ayrılır. Sponsorlu içerikler açıkça etiketlenir.</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-headline font-bold uppercase border-b border-border pb-2 mb-4">Düzeltme ve Şikayet</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Haber düzeltme talepleri ve editoryal şikayetler için:{" "}
              <a href="mailto:editor@meydanmedya.com.tr" className="text-primary hover:underline">
                editor@meydanmedya.com.tr
              </a>
            </p>
          </section>

          <p className="text-xs text-on-surface-variant border-t border-border pt-6">
            Son güncelleme: Mart 2026
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Kunye;
