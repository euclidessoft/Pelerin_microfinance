export type PageId = 'accueil' | 'apropos' | 'services' | 'temoignages' | 'contact';

export interface PageMeta {
  id: PageId;
  label: string;
  href: string;
}

export const PAGES: PageMeta[] = [
  { id: 'accueil', label: 'Accueil', href: '#/' },
  { id: 'apropos', label: 'À propos', href: '#/apropos' },
  { id: 'services', label: 'Services', href: '#/services' },
  { id: 'temoignages', label: 'Témoignages', href: '#/temoignages' },
  { id: 'contact', label: 'Contact', href: '#/contact' },
];

export function parseHash(): PageId {
  const hash = window.location.hash.replace(/^#\/?/, '').split('?')[0] || '';
  const match = PAGES.find((p) => p.id === hash);
  return match ? match.id : 'accueil';
}

export function navigateTo(page: PageId) {
  const meta = PAGES.find((p) => p.id === page);
  if (meta) {
    window.location.hash = meta.href.replace('#', '');
  }
}
