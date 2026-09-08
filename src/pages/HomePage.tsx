import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Users,
  HandHeart,
  Sparkles,
  Quote,
  ChevronRight,
  CheckCircle2,
  Star,
  Target,
  Eye,
  Heart,
  Lightbulb,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { navigateTo } from '@/lib/navigation';
import { IMAGES, SERVICES, TESTIMONIALS, STATS, type Stat } from '@/lib/data';
import { useCountUp } from '@/lib/hooks';

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const { ref, visible } = useScrollRevealRef();
  const value = useCountUp(stat.value, 2000, visible);

  return (
    <div
      ref={ref}
      className="text-center"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="font-serif text-4xl font-bold text-white sm:text-5xl">
        {value.toLocaleString('fr-FR')}
        <span className="text-gold-400">{stat.suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-wider text-primary-100/70">
        {stat.label}
      </div>
    </div>
  );
}

function useScrollRevealRef() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroBusiness}
            alt="Entrepreneurs camerounais"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-primary-950/40" />
        </div>

        {/* Decorative shapes */}
        <div className="absolute right-0 top-1/4 h-96 w-96 animate-pulse-slow rounded-full bg-gold-500/20 blur-3xl" />
        <div className="absolute left-0 bottom-1/4 h-80 w-80 animate-pulse-slow rounded-full bg-primary-400/20 blur-3xl" style={{ animationDelay: '2s' }} />

        {/* Content */}
        <div className="container-app relative z-10 pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-in-down inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold-300">
              <Sparkles className="h-3.5 w-3.5" />
              Votre partenaire financier de proximité
            </div>

            <h1 className="heading-serif animate-fade-in-up mt-6 text-balance text-4xl font-bold text-white text-shadow-lg sm:text-5xl lg:text-7xl">
              Ensemble, bâtissons votre <span className="text-gold-400">avenir</span> financier
            </h1>

            <p className="animate-fade-in-up mt-6 text-balance text-lg text-primary-100/90 sm:text-xl" style={{ animationDelay: '200ms' }}>
              Au Cameroun, Le Pèlerin accompagne les entrepreneurs, les commerçants et les familles avec des solutions de crédit et d'épargne adaptées à vos ambitions.
            </p>

            <div className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: '400ms' }}>
              <button onClick={() => navigateTo('services')} className="btn-gold group">
                Découvrir nos services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button onClick={() => navigateTo('contact')} className="btn-outline border-white/40 text-white hover:bg-white hover:text-primary-900">
                Demander un crédit
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
            <div className="h-2 w-1 animate-bounce rounded-full bg-gold-400" />
          </div>
        </div>
      </section>

      {/* ===== A PROPOS ===== */}
      <section className="relative bg-white py-24">
        <div className="container-app">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal animation="slide-in-left">
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/1422408/pexels-photo-1422408.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Bâtiment moderne aux façades vitrées"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary-700 p-6 text-white shadow-xl sm:block">
                  <div className="font-serif text-3xl font-bold">2007</div>
                  <div className="text-xs uppercase tracking-wider text-primary-100">Année de création</div>
                </div>
                <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full border-4 border-gold-300 sm:block" />
              </div>
            </Reveal>

            <Reveal animation="slide-in-right" delay={150}>
              <div>
                <span className="section-label">À propos de nous</span>
                <h2 className="heading-serif mt-5 text-3xl font-bold text-primary-900 sm:text-4xl">
                  Une institution née d'une conviction simple
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-gray-600">
                  Fondée en 2007 à Yaoundé, Le Pèlerin est une institution de microfinance qui est partie d'une idée forte : l'accès au financement est un droit, pas un privilège. Ce sont les populations exclues du système bancaire traditionnel qui ont le plus besoin d'un accompagnement financier de proximité.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  En près de deux décennies, nous sommes passés d'une seule agence à 28 points de service dans 6 régions du Cameroun, accompagnant plus de 45 000 entrepreneurs, agriculteurs, commerçants et familles vers l'autonomie financière.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-primary-100 bg-primary-50/50 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-700 text-white">
                      <Target className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 text-sm font-bold uppercase tracking-wide text-primary-900">Notre mission</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Offrir des services financiers accessibles et responsables aux populations camerounaises exclues du système bancaire.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gold-200 bg-gold-50/50 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500 text-white">
                      <Eye className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 text-sm font-bold uppercase tracking-wide text-primary-900">Notre vision</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Être la référence de la microfinance de proximité en Afrique centrale, reconnue pour son impact social.
                    </p>
                  </div>
                </div>

                <button onClick={() => navigateTo('apropos')} className="btn-primary mt-8">
                  Découvrir notre histoire
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== NOS SOLUTIONS ===== */}
      <section className="relative bg-cream py-24" style={{ backgroundColor: '#faf6f2' }}>
        <div className="container-app">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-label">Nos solutions</span>
              <h2 className="heading-serif mt-5 text-3xl font-bold text-primary-900 sm:text-4xl">
                Des produits financiers pensés pour vous
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Que vous soyez entrepreneur, agriculteur, commerçant ou salarié, nous avons une solution adaptée à votre situation.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, idx) => (
              <Reveal key={service.title} delay={idx * 100}>
                <div className="group h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-900/10">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                      <span className="rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold">
                        {service.title}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>
                    <button
                      onClick={() => navigateTo('services')}
                      className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors hover:text-gold-600"
                    >
                      En savoir plus
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NOTRE MISSION ===== */}
      <section className="relative bg-white py-24">
        <div className="container-app">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal animation="slide-in-left">
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={IMAGES.officeTeam}
                    alt="Équipe Le Pèlerin"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gold-500 p-6 text-white shadow-xl sm:block">
                  <div className="font-serif text-3xl font-bold">17</div>
                  <div className="text-xs uppercase tracking-wider">ans d'expérience</div>
                </div>
                <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full border-4 border-gold-300 sm:block" />
              </div>
            </Reveal>

            <Reveal animation="slide-in-right" delay={150}>
              <div>
                <span className="section-label">Notre mission</span>
                <h2 className="heading-serif mt-5 text-3xl font-bold text-primary-900 sm:text-4xl">
                  L'inclusion financière au service du développement
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-gray-600">
                  Depuis 2007, Le Pèlerin s'engage auprès des populations qui n'ont pas accès aux services bancaires traditionnels. Nous croyons que chaque Camerounais mérite l'opportunité de réaliser ses projets, quelle que soit sa situation.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Notre approche combine proximité, écoute et accompagnement personnalisé. Nos agents de crédit se déplacent sur le terrain, dans les marchés et les villages, pour comprendre vos besoins et vous proposer des solutions concrètes.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { icon: ShieldCheck, title: 'Sécurité & confiance', text: 'Vos dépôts sont protégés' },
                    { icon: HandHeart, title: 'Accompagnement', text: 'Un conseiller dédié' },
                    { icon: TrendingUp, title: 'Croissance', text: 'Des taux compétitifs' },
                    { icon: Users, title: 'Proximité', text: '28 agences au Cameroun' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                        <item.icon className="h-5 w-5 text-primary-700" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-primary-900">{item.title}</div>
                        <div className="text-xs text-gray-500">{item.text}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <button onClick={() => navigateTo('apropos')} className="btn-primary mt-8">
                  En savoir plus sur nous
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== NOS VALEURS ===== */}
      <section className="relative gradient-primary py-20">
        <div className="absolute inset-0 bg-dots opacity-20" />
        <div className="container-app relative">
          <Reveal>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="section-label bg-white/10 text-gold-300">Nos valeurs</span>
              <h2 className="heading-serif mt-5 text-3xl font-bold text-white sm:text-4xl">
                Ce qui nous guide au quotidien
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Heart, title: 'Humanité', text: 'Chaque client est une personne, pas un numéro. Nous traitons chacun avec dignité et respect.' },
              { icon: ShieldCheck, title: 'Intégrité', text: "La transparence et l'honnêteté guident chacune de nos actions, du conseil au remboursement." },
              { icon: Lightbulb, title: 'Innovation', text: 'Nous adaptons constamment nos produits aux réalités du terrain et aux besoins changeants.' },
              { icon: HandHeart, title: 'Solidarité', text: 'Notre réussite se mesure à celle de nos clients. Leur succès est notre succès.' },
            ].map((value, idx) => (
              <Reveal key={value.title} delay={idx * 100}>
                <div className="group h-full rounded-2xl glass p-8 text-center transition-all duration-500 hover:bg-white/15">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-500/20 transition-colors duration-300 group-hover:bg-gold-500">
                    <value.icon className="h-8 w-8 text-gold-300 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-100/70">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POURQUOI LE PELERIN ===== */}
      <section className="relative bg-cream py-24" style={{ backgroundColor: '#faf6f2' }}>
        <div className="container-app">
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal animation="slide-in-left">
              <div>
                <span className="section-label">Pourquoi Le Pèlerin ?</span>
                <h2 className="heading-serif mt-5 text-3xl font-bold text-primary-900 sm:text-4xl">
                  Une approche humaine et responsable
                </h2>
                <p className="mt-5 text-lg text-gray-600">
                  Nous ne sommes pas une banque classique. Nous sommes une institution de microfinance qui place l'humain au centre de tout ce que nous faisons.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    { icon: CheckCircle2, title: 'Accessibilité', text: "Pas de garantie hypothécaire obligatoire. Des critères d'octroi souples basés sur votre activité." },
                    { icon: CheckCircle2, title: 'Rapidité', text: 'Une réponse à votre demande de crédit en moins de 72 heures, avec un accompagnement à chaque étape.' },
                    { icon: CheckCircle2, title: 'Transparence', text: 'Des conditions claires, sans frais cachés. Vous savez exactement ce que vous payez et pourquoi.' },
                    { icon: CheckCircle2, title: 'Formation', text: 'Des ateliers de gestion financière et de budget gratuits pour tous nos clients.' },
                  ].map((item, idx) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-xl bg-white/60 p-4 transition-all duration-300 hover:bg-white hover:shadow-md"
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <item.icon className="mt-0.5 h-6 w-6 shrink-0 text-primary-600" />
                      <div>
                        <div className="font-semibold text-primary-900">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal animation="slide-in-right" delay={200}>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={IMAGES.handshake}
                    alt="Partenariat de confiance"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 max-w-xs rounded-2xl bg-white p-6 shadow-2xl">
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm font-medium text-gray-700">
                    4,8/5 — Satisfaction client
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Basé sur 3 200+ avis clients
                  </p>
                </div>
                <div className="absolute -right-4 top-1/3 hidden rounded-2xl bg-primary-700 p-5 text-white shadow-xl lg:block">
                  <div className="font-serif text-2xl font-bold">97%</div>
                  <div className="text-xs uppercase tracking-wider text-primary-100">Taux de<br />remboursement</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== STATISTIQUES ===== */}
      <section className="relative gradient-primary py-16">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="container-app relative">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((stat, idx) => (
              <StatCard key={stat.label} stat={stat} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEMOIGNAGES ===== */}
      <section className="relative overflow-hidden bg-primary-900 py-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

        <div className="container-app relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-label bg-white/10 text-gold-300">Ils nous font confiance</span>
              <h2 className="heading-serif mt-5 text-3xl font-bold text-white sm:text-4xl">
                Des histoires de réussite qui nous inspirent
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.slice(0, 4).map((t, idx) => (
              <Reveal key={t.name} delay={idx * 120}>
                <div className="group relative h-full rounded-2xl glass p-8 transition-all duration-500 hover:bg-white/15">
                  <Quote className="h-8 w-8 text-gold-400/60" />
                  <p className="mt-4 text-base leading-relaxed text-white/90">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-14 w-14 rounded-full object-cover ring-2 ring-gold-400/40"
                    />
                    <div>
                      <div className="font-semibold text-white">{t.name}</div>
                      <div className="text-sm text-primary-100/70">{t.activity} — {t.location}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button onClick={() => navigateTo('temoignages')} className="btn-gold">
              Voir tous les témoignages
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-cream py-20" style={{ backgroundColor: '#faf6f2' }}>
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-primary-200/30 blur-3xl" />
        <div className="container-app relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-serif text-3xl font-bold text-primary-900 sm:text-4xl lg:text-5xl">
                Prêt à concrétiser votre projet ?
              </h2>
              <p className="mt-5 text-lg text-gray-600">
                Parlez-nous de votre ambition. Nos conseillers vous accompagnent à chaque étape, du montage du dossier au déblocage des fonds.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button onClick={() => navigateTo('contact')} className="btn-gold">
                  Demander un crédit maintenant
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigateTo('services')} className="btn-outline">
                  Explorer nos solutions
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
