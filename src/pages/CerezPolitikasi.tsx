import Layout from "@/components/layout/Layout";

const CerezPolitikasi = () => {
  return (
    <Layout showBreaking={false}>
      <div className="max-w-screen-md mx-auto px-4 md:px-6 py-10 lg:py-16">
        <h1 className="text-3xl lg:text-4xl font-headline font-extrabold tracking-tighter text-primary uppercase mb-8">Çerez Politikası</h1>
        <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
          <p className="text-on-surface-variant">Son güncelleme: 25 Mart 2026</p>

          <h2 className="text-xl font-headline font-bold text-foreground mt-8">1. Çerez Nedir?</h2>
          <p>Çerezler (cookies), web sitemizi ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza yerleştirilen küçük metin dosyalarıdır. Bu dosyalar, sitemizin düzgün çalışmasını sağlamak, güvenliği artırmak, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek amacıyla kullanılmaktadır.</p>

          <h2 className="text-xl font-headline font-bold text-foreground mt-8">2. Kullanılan Çerez Türleri</h2>
          <h3 className="text-lg font-bold text-foreground mt-4">a) Zorunlu Çerezler</h3>
          <p>Web sitemizin temel işlevlerini yerine getirmesi için gerekli olan çerezlerdir. Bu çerezler olmadan site düzgün çalışamaz. Oturum yönetimi, güvenlik ve erişilebilirlik gibi temel fonksiyonları sağlarlar.</p>

          <h3 className="text-lg font-bold text-foreground mt-4">b) Performans ve Analitik Çerezler</h3>
          <p>Ziyaretçilerin sitemizi nasıl kullandığını anlamamıza yardımcı olan çerezlerdir. Hangi sayfaların en çok ziyaret edildiği, hata mesajları ve site performansı gibi bilgileri toplarlar. Toplanan tüm veriler anonimleştirilmiştir.</p>

          <h3 className="text-lg font-bold text-foreground mt-4">c) İşlevsellik Çerezleri</h3>
          <p>Dil tercihi, bölge seçimi ve metin boyutu gibi tercihlerinizi hatırlayarak size kişiselleştirilmiş bir deneyim sunan çerezlerdir.</p>

          <h3 className="text-lg font-bold text-foreground mt-4">d) Hedefleme/Reklam Çerezleri</h3>
          <p>İlgi alanlarınıza uygun reklamlar sunmak amacıyla kullanılan çerezlerdir. Bu çerezler, reklam ağları tarafından tarayıcınızı ve cihazınızı tanımlamak için kullanılabilir.</p>

          <h2 className="text-xl font-headline font-bold text-foreground mt-8">3. Çerez Yönetimi</h2>
          <p>Tarayıcı ayarlarınızdan çerezleri kabul etmeyi reddedebilir veya mevcut çerezleri silebilirsiniz. Ancak bazı çerezleri devre dışı bırakmanız durumunda sitemizin bazı özelliklerinin düzgün çalışmayabileceğini hatırlatırız.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Chrome:</strong> Ayarlar → Gizlilik ve Güvenlik → Çerezler</li>
            <li><strong>Firefox:</strong> Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Site Verileri</li>
            <li><strong>Safari:</strong> Tercihler → Gizlilik → Çerezler</li>
            <li><strong>Edge:</strong> Ayarlar → Gizlilik, Arama ve Hizmetler → Çerezler</li>
          </ul>

          <h2 className="text-xl font-headline font-bold text-foreground mt-8">4. Üçüncü Taraf Çerezleri</h2>
          <p>Sitemizde Google Analytics, sosyal medya eklentileri ve reklam ağları gibi üçüncü taraf hizmetlere ait çerezler de kullanılabilmektedir. Bu çerezler, ilgili üçüncü tarafların gizlilik politikalarına tabidir.</p>

          <h2 className="text-xl font-headline font-bold text-foreground mt-8">5. İletişim</h2>
          <p>Çerez politikamız hakkında sorularınız için <strong>iletisim@meydanmedya.com.tr</strong> adresinden bize ulaşabilirsiniz.</p>

          <p className="text-sm text-on-surface-variant mt-12 border-t border-border pt-6">© 2026 Meydan Medya A.Ş. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </Layout>
  );
};

export default CerezPolitikasi;
