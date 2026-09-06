import { useEffect, useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { PAGES, type PageId, navigateTo, parseHash } from '@/lib/navigation';
import { useScrollPosition } from '@/lib/hooks';

interface NavbarProps {
  currentPage: PageId;
}

export default function Navbar({ currentPage }: NavbarProps) {
  const scrolled = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPage]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNav = (page: PageId) => {
    navigateTo(page);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-dark shadow-lg shadow-primary-950/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-app flex h-20 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('accueil')}
            className="group flex items-center gap-3"
            aria-label="Le Pèlerin — Accueil"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500 shadow-lg shadow-gold-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
                <path
                  d="M16 5l2 6h6.5l-5.2 3.8 2 6.2L16 17.2l-5.3 3.8 2-6.2L7.5 11H14z"
                  fill="#143b2a"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="font-serif text-xl font-bold text-white">Le Pèlerin</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-300">
                Microfinance
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {PAGES.map((page) => (
              <button
                key={page.id}
                onClick={() => handleNav(page.id)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  currentPage === page.id
                    ? 'text-white'
                    : 'text-primary-100/80 hover:text-white'
                }`}
              >
                {page.label}
                {currentPage === page.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold-400" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNav('contact')}
              className="btn-gold !py-2.5 !text-xs"
            >
              Demander un crédit
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-primary-950/95 backdrop-blur-xl transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex h-full flex-col pt-24 pb-8">
            <div className="container-app flex flex-1 flex-col gap-2">
              {PAGES.map((page, idx) => (
                <button
                  key={page.id}
                  onClick={() => handleNav(page.id)}
                  className={`flex items-center justify-between rounded-2xl px-6 py-5 text-left text-lg font-medium transition-all duration-300 ${
                    currentPage === page.id
                      ? 'bg-gold-500 text-primary-950'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                  style={{
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `opacity 0.3s ease ${idx * 60}ms, transform 0.3s ease ${idx * 60}ms, background-color 0.2s ease`,
                  }}
                >
                  {page.label}
                  <ChevronRight className="h-5 w-5" />
                </button>
              ))}
            </div>
            <div className="container-app">
              <button
                onClick={() => handleNav('contact')}
                className="btn-gold w-full"
              >
                Demander un crédit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
