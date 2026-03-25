import { Home, Newspaper, Radio, PlayCircle, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  { label: "Anasayfa", icon: Home, path: "/" },
  { label: "Gündem", icon: Newspaper, path: "#" },
  { label: "Canlı", icon: Radio, path: "#" },
  { label: "Video", icon: PlayCircle, path: "#" },
  { label: "Menü", icon: Menu, path: "#" },
];

const BottomNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-card/80 backdrop-blur-md flex justify-around items-center px-4 pb-4 pt-2 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] border-t border-border/20">
      {items.map((item, i) => (
        <Link
          key={item.label}
          to={item.path}
          className={`flex flex-col items-center justify-center active:scale-95 transition-transform ${i === 0 ? "text-primary" : "text-muted-foreground"}`}
        >
          <item.icon className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase mt-0.5">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
