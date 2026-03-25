import { Globe, MessageSquare, PlayCircle, Rss } from "lucide-react";
import { Link } from "react-router-dom";
import meydanLogo from "@/assets/meydan-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-12 text-center">
          <Link to="/" className="flex items-center">
            <img src={meydanLogo} alt="MEYDAN" className="h-12 w-auto brightness-0 invert" />
          </Link>
          <p className="text-primary-foreground/70 font-medium text-lg max-w-xl">
            Gündemin merkezi, doğrunun sesi. Modern Türkiye'nin dijital haber meydanı.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">
            <a className="text-primary-foreground/70 hover:text-primary-foreground transition-opacity" href="#">Künye</a>
            <a className="text-primary-foreground/70 hover:text-primary-foreground transition-opacity" href="#">Gizlilik</a>
            <a className="text-primary-foreground/70 hover:text-primary-foreground transition-opacity" href="#">İletişim</a>
            <a className="text-primary-foreground/70 hover:text-primary-foreground transition-opacity" href="#">Reklam</a>
            <a className="text-primary-foreground/70 hover:text-primary-foreground transition-opacity" href="#">RSS</a>
            <a className="text-primary-foreground underline font-bold" href="#">Abone Ol</a>
          </nav>
          <div className="flex space-x-6">
            <Globe className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            <MessageSquare className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            <PlayCircle className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            <Rss className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          </div>
          <div className="pt-8 border-t border-primary-foreground/10 w-full flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50 gap-4">
            <p>© 2026 Meydan Medya A.Ş. Tüm hakları saklıdır.</p>
            <div className="flex space-x-4">
              <Link className="hover:text-primary-foreground" to="/cerez-politikasi">Çerez Politikası</Link>
              <Link className="hover:text-primary-foreground" to="/kvkk-aydinlatma">KVKK Aydınlatma Metni</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
