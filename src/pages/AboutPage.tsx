import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Users,
  Lightbulb,
  Award,
  HandHeart,
  ArrowRight,
  CheckCircle2,
  Building2,
  Calendar,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { navigateTo } from '@/lib/navigation';
import { IMAGES, TEAM, STATS } from '@/lib/data';

const TIMELINE = [
  { year: '2007', title: 'Création à Yaoundé', text: 'Le Pèlerin ouvre sa première agence avec 3 agents de crédit et une conviction : la microfinance peut transformer des vies.' },
  { year: '2011', title: 'Expansion régionale', text: 'Ouverture de 5 nouvelles agences dans les régions du Centre et de l\'Ouest. 10 000 clients accompagnés.' },
  { year: '2015', title: 'Crédit agricole', text: 'Lancement du produit de crédit agricole dédié aux petits exploitants, en partenariat avec des coopératives locales.' },
  { year: '2019', title: 'Cap des 25 000 clients', text: 'Le Pèlerin franchit le cap des 25 000 clients actifs et déploie ses services dans le Nord et l\'Extrême-Nord.' },
  { year: '2023', title: 'Transformation digitale', text: 'Mise en place d\'une plateforme de gestion en ligne et de l\'épargne mobile pour rapprocher encore plus nos clients.' },
  { year: '2025', title: '45 000+ clients', text: 'Aujourd\'hui, 28 agences couvrent le territoire national et 18 milliards de FCFA ont été débloqués au service de l\'économie locale.' },
];

const VALUES = [
  { icon: Heart, title: 'Humanité', text: 'Chaque client est une personne, pas un numéro. Nous traitons chacun avec dignité et respect.' },
  { icon: ShieldCheck, title: 'Intégrité', text: 'La transparence et l\'honnêteté guident chacune de nos actions, du conseil au remboursement.' },
  { icon: Lightbulb, title: 'Innovation', text: 'Nous adaptons constamment nos produits aux réalités du terrain et aux besoins changeants de nos clients.' },
  { icon: HandHeart, title: 'Solidarité', text: 'Notre réussite se mesure à celle de nos clients. Leur succès est notre succès.' },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={IMAGES.yaounde} alt="Yaoundé, Cameroun" className="h-full w-full object-cover" />
          <div className="absolute inset-0 gradient-hero opacity-90" />
        </div>
        <div className="absolute right-10 top-1/3 h-72 w-72 animate-pulse-slow rounded-full bg-gold-500/20 blur-3xl" />

        <div className="container-app relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-in-down inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold-300">
              <Building2 className="h-3.5 w-3.5" />
              À propos de nous
            </div>
            <h1 className="heading-serif animate-fade-in-up mt-6 text-4xl font-bold text-white text-shadow-lg sm:text-5xl lg:text-6xl">
              17 ans d'engagement pour l'inclusion financière au Cameroun
            </h1>
            <p className="animate-fade-in-up mt-6 text-lg text-primary-100/90" style={{ animationDelay: '200ms' }}>
              Née d'une conviction simple — que l'accès au financement est un droit, pas un privilège — Le Pèlerin a grandi aux côtés de milliers d'entrepreneurs et de familles camerounais.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MISSION / VISION ===== */}
      <section className="bg-white py-24">
        <div className="container-app">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal animation="slide-in-left">
              <div className="rounded-3xl border border-primary-100 bg-primary-50/50 p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-700 text-white">
                  <Target className="h-7 w-7" />
                </div>
                <h2 className="heading-serif mt-6 text-2xl font-bold text-primary-900">Notre mission</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Offrir des services financiers accessibles, adaptés et responsables aux populations camerounaises exclues du système bancaire traditionnel, pour les aider à créer des revenus, à constituer un patrimoine et à améliorer durablement leurs conditions de vie.
                </p>
              </div>
            </Reveal>

            <Reveal animation="slide-in-right" delay={150}>
              <div className="rounded-3xl border border-gold-200 bg-gold-50/50 p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500 text-white">
                  <Eye className="h-7 w-7" />
                </div>
                <h2 className="heading-serif mt-6 text-2xl font-bold text-primary-900">Notre vision</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Être la référence de la microfinance de proximité en Afrique centrale, reconnue pour la qualité de son accompagnement, son impact social mesurable et sa contribution à l'autonomie financière de millions de foyers.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="bg-cream py-24" style={{ backgroundColor: '#faf6f2' }}>
        <div className="container-app">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-label">Notre histoire</span>
              <h2 className="heading-serif mt-5 text-3xl font-bold text-primary-900 sm:text-4xl">
                De Yaoundé à tout le Cameroun
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Deux décennies de croissance, d'apprentissage et d'impact, une agence à la fois.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-16">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-primary-200 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {TIMELINE.map((item, idx) => (
                <Reveal key={item.year} delay={idx * 80}>
                  <div className={`relative flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Dot */}
                    <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-cream bg-gold-500 md:left-1/2" style={{ borderColor: '#faf6f2' }}>
                      <div className="h-2 w-2 rounded-full bg-primary-900" />
                    </div>

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-sm font-bold text-primary-700">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.year}
                      </div>
                      <h3 className="mt-3 text-xl font-bold text-primary-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
                    </div>

                    {/* Spacer for layout */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="bg-white py-24">
        <div className="container-app">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-label">Nos valeurs</span>
              <h2 className="heading-serif mt-5 text-3xl font-bold text-primary-900 sm:text-4xl">
                Ce qui nous guide au quotidien
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, idx) => (
              <Reveal key={value.title} delay={idx * 100}>
                <div className="group h-full rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary-200 hover:shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 transition-colors duration-300 group-hover:bg-primary-700">
                    <value.icon className="h-8 w-8 text-primary-700 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-primary-900">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="bg-cream py-24" style={{ backgroundColor: '#faf6f2' }}>
        <div className="container-app">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-label">Notre équipe de direction</span>
              <h2 className="heading-serif mt-5 text-3xl font-bold text-primary-900 sm:text-4xl">
                Des femmes et des hommes engagés
              </h2>
              <p className="mt-4 text-lg text-gray-600">
              Une équipe passionnée par l'impact social de la microfinance, au service de nos clients chaque jour.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, idx) => (
              <Reveal key={member.name} delay={idx * 120}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary-900">{member.name}</h3>
                    <div className="text-sm font-medium text-gold-600">{member.role}</div>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="gradient-primary py-20">
        <div className="absolute inset-0 bg-dots opacity-20" />
        <div className="container-app relative">
          <Reveal>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {STATS.map((stat, idx) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-4xl font-bold text-white sm:text-5xl">
                    {stat.value.toLocaleString('fr-FR')}
                    <span className="text-gold-400">{stat.suffix}</span>
                  </div>
                  <div className="mt-2 text-sm font-medium uppercase tracking-wider text-primary-100/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-white py-20">
        <div className="container-app">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-3xl gradient-primary p-12 text-center">
              <Award className="mx-auto h-12 w-12 text-gold-400" />
              <h2 className="heading-serif mt-6 text-3xl font-bold text-white sm:text-4xl">
                Rejoignez les 45 000+ clients qui nous font confiance
              </h2>
              <p className="mt-5 text-lg text-primary-100/80">
                Prenez rendez-vous avec l'un de nos conseillers dans l'agence la plus proche de chez vous.
              </p>
              <button onClick={() => navigateTo('contact')} className="btn-gold mt-8">
                Trouver une agence
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
