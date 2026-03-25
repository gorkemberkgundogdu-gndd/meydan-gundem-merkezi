import Layout from "@/components/layout/Layout";

const KVKKAydinlatma = () => {
  return (
    <Layout showBreaking={false}>
      <div className="max-w-screen-md mx-auto px-4 md:px-6 py-10 lg:py-16">
        <h1 className="text-3xl lg:text-4xl font-headline font-extrabold tracking-tighter text-primary uppercase mb-8">KVKK Aydınlatma Metni</h1>
        <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
          <p className="text-on-surface-variant">Son güncelleme: 25 Mart 2026</p>

          <h2 className="text-xl font-headline font-bold text-foreground mt-8">1. Veri Sorumlusu</h2>
          <p>6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla <strong>Meydan Medya A.Ş.</strong> ("Şirket") tarafından aşağıda açıklanan amaçlarla işlenebilecektir.</p>

          <h2 className="text-xl font-headline font-bold text-foreground mt-8">2. İşlenen Kişisel Veriler</h2>
          <p>Sitemizi kullanımınız sırasında aşağıdaki kişisel verileriniz işlenebilmektedir:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Kimlik Bilgileri:</strong> Ad, soyad (üyelik durumunda)</li>
            <li><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası</li>
            <li><strong>Dijital İz Bilgileri:</strong> IP adresi, tarayıcı bilgileri, çerez verileri, ziyaret edilen sayfalar, tıklama verileri</li>
            <li><strong>Abonelik Bilgileri:</strong> Bülten tercihleri, ilgi alanları</li>
          </ul>

          <h2 className="text-xl font-headline font-bold text-foreground mt-8">3. Kişisel Verilerin İşlenme Amaçları</h2>
          <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Haber ve içerik hizmetlerinin sunulması</li>
            <li>Kullanıcı deneyiminin iyileştirilmesi ve kişiselleştirilmesi</li>
            <li>E-bülten ve bilgilendirme hizmetlerinin yürütülmesi</li>
            <li>İstatistiksel analizlerin yapılması</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            <li>Bilgi güvenliği süreçlerinin yürütülmesi</li>
            <li>Reklam ve pazarlama faaliyetlerinin yönetilmesi</li>
          </ul>

          <h2 className="text-xl font-headline font-bold text-foreground mt-8">4. Kişisel Verilerin Aktarılması</h2>
          <p>Kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde belirtilen şartlara uygun olarak; iş ortaklarımıza, tedarikçilerimize, yasal olarak yetkili kamu kurum ve kuruluşlarına ve yasal olarak yetkili özel hukuk kişilerine aktarılabilecektir.</p>

          <h2 className="text-xl font-headline font-bold text-foreground mt-8">5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
          <p>Kişisel verileriniz, web sitemiz, mobil uygulamamız, çerezler ve benzeri teknolojiler aracılığıyla elektronik ortamda toplanmaktadır. Hukuki sebepler:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Açık rızanızın bulunması</li>
            <li>Sözleşmenin ifası için gerekli olması</li>
            <li>Veri sorumlusunun meşru menfaati</li>
            <li>Hukuki yükümlülüğün yerine getirilmesi</li>
          </ul>

          <h2 className="text-xl font-headline font-bold text-foreground mt-8">6. KVKK Kapsamındaki Haklarınız</h2>
          <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
            <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
            <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
            <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
            <li>İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
            <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
          </ul>

          <h2 className="text-xl font-headline font-bold text-foreground mt-8">7. Başvuru Yöntemi</h2>
          <p>Yukarıda belirtilen haklarınızı kullanmak için <strong>kvkk@meydanmedya.com.tr</strong> adresine e-posta gönderebilir veya noter kanalıyla şirket adresimize başvurabilirsiniz.</p>
          <p><strong>Meydan Medya A.Ş.</strong><br />Ankara, Türkiye</p>

          <p className="text-sm text-on-surface-variant mt-12 border-t border-border pt-6">© 2026 Meydan Medya A.Ş. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </Layout>
  );
};

export default KVKKAydinlatma;
