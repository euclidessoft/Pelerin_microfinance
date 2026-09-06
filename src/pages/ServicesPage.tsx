import {
  TrendingUp,
  PiggyBank,
  Sprout,
  ShoppingBag,
  Home,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { navigateTo } from '@/lib/navigation';
import { SERVICES, IMAGES } from '@/lib/data';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  PiggyBank,
  Sprout,
  ShoppingBag,
  Home,
  GraduationCap,
};

const PROCESS_STEPS = [
  { icon: FileText, title: 'Demande', text: 'Remplissez le formulaire en ligne ou présentez-vous en agence avec vos pièces.' },
  { icon: ShieldCheck, title: 'Analyse', text: 'Nos agents de crédit étudient votre dossier et votre capacité de remboursement.' },
  { icon: Wallet, title: 'Validation', text: 'Vous recevez une réponse sous 72h avec les conditions de votre prêt.' },
  { icon: ArrowRight, title: 'Déblocage', text: "Les fonds sont mis à disposition sur votre compte ou en espèces à l'agence." },
];

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={IMAGES.officeDiscussion} alt="Services financiers" className="h-full w-full object-cover" />
          <div className="absolute inset-0 gradient-hero opacity-90" />
        </div>
        <div className="absolute left-10 top-1/3 h-72 w-72 animate-pulse-slow rounded-full bg-gold-500/20 blur-3xl" />

        <div className="container-app relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-in-down inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold-300">
              <Wallet className="h-3.5 w-3.5" />
              Nos solutions financières
            </div>
            <h1 className="heading-serif animate-fade-in-up mt-6 text-4xl font-bold text-white text-shadow-lg sm:text-5xl lg:text-6xl">
              Des produits adaptés à <span className="text-gold-400">votre réalité</span>
            </h1>
            <p className="animate-fade-in-up mt-6 text-lg text-primary-100/90" style={{ animationDelay: '200ms' }}>
              Six gammes de produits financiers conçus avec et pour les Camerounais, du microcrédit à l'épargne longue.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES DETAIL ===== */}
      <section className="bg-white py-24">
        <div className="container-app">
          <div className="space-y-24">
            {SERVICES.map((service, idx) => {
              const Icon = ICONS[service.icon] || TrendingUp;
              const isReversed = idx % 2 === 1;

              return (
                <Reveal key={service.title}>
                  <div className={`grid items-center gap-12 lg:grid-cols-2 ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative ${isReversed ? 'lg:col-start-2' : ''}`}>
                      <div className="overflow-hidden rounded-3xl shadow-2xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      <div className={`absolute top-6 ${isReversed ? '-left-6' : '-right-6'} flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-500 shadow-xl`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}>
                      <span className="section-label">Service {String(idx + 1).padStart(2, '0')}</span>
                      <h2 className="heading-serif mt-5 text-3xl font-bold text-primary-900">{service.title}</h2>
                      <p className="mt-4 text-lg leading-relaxed text-gray-600">{service.description}</p>

                      <div className="mt-6 space-y-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-600" />
                            <span className="text-sm font-medium text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button onClick={() => navigateTo('contact')} className="btn-primary mt-8">
                        Demander ce crédit
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="bg-cream py-24" style={{ backgroundColor: '#faf6f2' }}>
        <div className="container-app">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-label">Comment ça marche</span>
              <h2 className="heading-serif mt-5 text-3xl font-bold text-primary-900 sm:text-4xl">
                Un processus simple et transparent
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                De la demande au déblocage des fonds, nous vous accompagnons à chaque étape.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 120}>
                <div className="relative h-full rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-700 px-4 py-1 text-xs font-bold text-white">
                    Étape {idx + 1}
                  </div>
                  <div className="mx-auto mt-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50">
                    <step.icon className="h-8 w-8 text-primary-700" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-primary-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{step.text}</p>
                  {idx < PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="absolute right-[-30px] top-1/2 hidden h-6 w-6 -translate-y-1/2 text-primary-300 lg:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-12 flex items-center justify-center gap-3 rounded-2xl bg-primary-50 p-6 text-center">
              <Clock className="h-6 w-6 text-primary-700" />
              <p className="text-sm font-medium text-primary-900">
                Délai moyen d'obtention : <span className="font-bold">72 heures</span> après dépôt d'un dossier complet
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden gradient-primary py-20">
        <div className="absolute inset-0 bg-dots opacity-20" />
        <div className="container-app relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-serif text-3xl font-bold text-white sm:text-4xl">
                Une question sur nos produits ?
              </h2>
              <p className="mt-5 text-lg text-primary-100/80">
                Nos conseillers sont là pour vous orienter vers la solution la plus adaptée à votre projet.
              </p>
              <button onClick={() => navigateTo('contact')} className="btn-gold mt-8">
                Nous contacter
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
