import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function GoToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retour en haut"
      className={`group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-white shadow-lg shadow-primary-700/30 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-primary-800 hover:shadow-xl hover:shadow-primary-700/40 active:scale-95 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-gold-500/0 transition-colors duration-300 group-hover:bg-gold-500/20" />
      <ArrowUp className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
