import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import GoToTop from '@/components/GoToTop';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import ContactPage from '@/pages/ContactPage';
import { parseHash, type PageId } from '@/lib/navigation';

function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(parseHash());

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(parseHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <HomePage />;
      case 'apropos':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'temoignages':
        return <TestimonialsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar currentPage={currentPage} />
      <main>{renderPage()}</main>
      <Footer currentPage={currentPage} />
      <GoToTop />
    </div>
  );
}

export default App;
