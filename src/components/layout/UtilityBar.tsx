import { Radio } from 'lucide-react';
import { useMarketData } from '@/hooks/useMarketData';
import WeatherRotator from '@/components/WeatherRotator';

const fmt = (n: number | undefined) =>
  n != null && n > 0
    ? n.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : '—';

const RateItem = ({ label, value }: { label: string; value: number | undefined }) => (
  <div className="flex items-center space-x-1">
    <span className="font-bold">{label}</span>
    <span className="text-foreground">{fmt(value)}</span>
  </div>
);

const UtilityBar = () => {
  const { data } = useMarketData();

  return (
    <div className="bg-surface-low text-on-surface-variant py-2 hidden md:block">
      <div className="max-w-screen-2xl mx-auto px-6 flex justify-between items-center text-xs font-medium">
        <div className="flex items-center space-x-6">
          {/* Hava durumu — otomatik şehir rotasyonu */}
          <WeatherRotator />

          <div className="flex items-center space-x-4 border-l border-outline-variant/30 pl-4">
            <RateItem label="USD/TRY" value={data?.usd?.selling} />
            <RateItem label="EUR/TRY" value={data?.eur?.selling} />
            <RateItem label="ALTIN (g)" value={data?.gold?.selling} />
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
