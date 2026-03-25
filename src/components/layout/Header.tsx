import { Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import meydanLogo from '@/assets/meydan-logo.png';

const navItems = [
  { label: 'Gündem', path: '/' },
  { label: 'Siyaset', path: '/siyaset' },
  { label: 'Ekonomi', path: '/ekonomi' },
  { label: 'Dünya', path: '/dunya' },
  { label: 'Savunma', path: '/savunma' },
];

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 bg-card shadow-sm'>
      <div className='flex flex-col w-full max-w-screen-2xl mx-auto px-4 md:px-6 py-3 md:py-4'>
        <div className='flex items-center justify-between'>
          <Link to='/' className='flex items-center'>
            <img src={meydanLogo} alt='MEYDAN' className='h-8 md:h-10 w-auto' />
          </Link>

          <nav className='hidden lg:flex items-center space-x-6 font-headline font-extrabold uppercase tracking-tight text-sm'>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className='flex items-center space-x-2 md:space-x-4'>
            <button className='p-2 hover:bg-muted transition-colors rounded-full'>
              <Search className='w-5 h-5' />
            </button>
            <button className='lg:hidden p-2' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className='lg:hidden bg-card border-t border-border'>
          <nav className='flex flex-col px-6 py-4 space-y-3 font-headline font-extrabold uppercase tracking-tight text-sm'>
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className='text-muted-foreground hover:text-primary py-2'
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
