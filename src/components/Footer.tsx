import { MapPin, Phone, Mail, Clock, ChevronRight, Facebook, Linkedin } from 'lucide-react';
import { PAGES, type PageId, navigateTo } from '@/lib/navigation';

interface FooterProps {
  currentPage: PageId;
}

export default function Footer({ currentPage }: FooterProps) {
  const handleNav = (page: PageId) => navigateTo(page);

  return (
    <footer className="relative overflow-hidden bg-primary-950 text-white">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-app relative py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500">
                <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
                  <path d="M16 5l2 6h6.5l-5.2 3.8 2 6.2L16 17.2l-5.3 3.8 2-6.2L7.5 11H14z" fill="#143b2a" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl font-bold">Le Pèlerin</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-300">
                  Microfinance
                </span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-primary-100/70">
              Institution de microfinance de proximité au Cameroun. Nous accompagnons les entrepreneurs et les familles vers l'autonomie financière depuis 2007.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-primary-100 transition-all duration-300 hover:bg-gold-500 hover:text-primary-950"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-primary-100 transition-all duration-300 hover:bg-gold-500 hover:text-primary-950"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 font-serif text-base font-semibold text-white">Navigation</h3>
            <ul className="space-y-3">
              {PAGES.map((page) => (
                <li key={page.id}>
                  <button
                    onClick={() => handleNav(page.id)}
                    className={`group flex items-center gap-2 text-sm transition-colors duration-200 ${
                      currentPage === page.id
                        ? 'text-gold-300'
                        : 'text-primary-100/70 hover:text-white'
                    }`}
                  >
                    <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    {page.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="mb-5 font-serif text-base font-semibold text-white">Nos services</h3>
            <ul className="space-y-3 text-sm text-primary-100/70">
              <li className="transition-colors hover:text-white">Crédit de démarrage</li>
              <li className="transition-colors hover:text-white">Épargne & placement</li>
              <li className="transition-colors hover:text-white">Crédit agricole</li>
              <li className="transition-colors hover:text-white">Crédit commercial</li>
              <li className="transition-colors hover:text-white">Crédit habitat</li>
              <li className="transition-colors hover:text-white">Crédit études</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-serif text-base font-semibold text-white">Contact</h3>
            <ul className="space-y-4 text-sm text-primary-100/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>Avenue Kennedy, Immeuble Le Pèlerin, Yaoundé, Cameroun</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                <span>+237 2 22 20 15 15</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                <span>contact@lepelerin-mfi.cm</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-gold-400" />
                <span>Lun–Ven: 7h30–16h30</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-primary-100/50 sm:flex-row">
            <p>© {new Date().getFullYear()} Le Pèlerin — Institution de Microfinance. Tous droits réservés.</p>
            <p>Agréée par le Ministère des Finances du Cameroun — COBAC N° MF-2007-014</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
