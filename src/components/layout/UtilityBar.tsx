import { Cloud, TrendingDown, TrendingUp, Radio } from "lucide-react";

const UtilityBar = () => {
  return (
    <div className="bg-surface-low text-on-surface-variant py-2 hidden md:block">
      <div className="max-w-screen-2xl mx-auto px-6 flex justify-between items-center text-xs font-medium">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Cloud className="w-3.5 h-3.5" />
            <span>Ankara 18°C</span>
          </div>
          <div className="flex items-center space-x-4 border-l border-outline-variant/30 pl-4">
            <div className="flex items-center space-x-1">
              <span className="font-bold">USD</span>
              <span className="text-secondary">34.22</span>
              <TrendingDown className="w-3 h-3 text-secondary" />
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-bold">EUR</span>
              <span className="text-success">37.15</span>
              <TrendingUp className="w-3 h-3 text-success" />
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-bold">ALTIN</span>
              <span className="text-secondary">2.945</span>
              <TrendingDown className="w-3 h-3 text-secondary" />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-primary flex items-center gap-1">
            <Radio className="w-3.5 h-3.5" />
            Canlı Yayın
          </a>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
