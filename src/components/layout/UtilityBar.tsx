import { Cloud, TrendingDown, TrendingUp, Radio } from 'lucide-react';
import { useMarketData } from '@/hooks/useMarketData';

const fmt = (n: number | undefined) =>
  n != null ? n.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '—';

const RateItem = ({ label, value, change }: { label: string; value: number | undefined; change: number | undefined }) => {
  const up = (change ?? 0) >= 0;
  return (
    <div className='flex items-center space-x-1'>
      <span className='font-bold'>{label}</span>
      <span className={up ? 'text-success' : 'text-secondary'}>{fmt(value)}</span>
      {up ? <TrendingUp className='w-3 h-3 text-success' /> : <TrendingDown className='w-3 h-3 text-secondary' />}
    </div>
  );
};

const UtilityBar = () => {
  const { data } = useMarketData();

  return (
    <div className='bg-surface-low text-on-surface-variant py-2 hidden md:block'>
      <div className='max-w-screen-2xl mx-auto px-6 flex justify-between items-center text-xs font-medium'>
        <div className='flex items-center space-x-6'>
          <div className='flex items-center space-x-2'>
            <Cloud className='w-3.5 h-3.5' />
            <span>Ankara 18°C</span>
          </div>
          <div className='flex items-center space-x-4 border-l border-outline-variant/30 pl-4'>
            <RateItem label='USD' value={data?.usd?.selling} change={data?.usd?.change} />
            <RateItem label='EUR' value={data?.eur?.selling} change={data?.eur?.change} />
            <RateItem label='ALTIN' value={data?.gold?.selling} change={data?.gold?.change} />
          </div>
        </div>
        <div className='flex items-center space-x-4'>
          <a href='#' className='hover:text-primary flex items-center gap-1'>
            <Radio className='w-3.5 h-3.5' />
            Canlı Yayın
          </a>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
