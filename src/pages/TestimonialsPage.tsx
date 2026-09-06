import { Quote, MapPin, Wallet, TrendingUp, ArrowRight, Star } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { navigateTo } from '@/lib/navigation';
import { IMAGES, TESTIMONIALS } from '@/lib/data';

export default function TestimonialsPage() {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={IMAGES.marketScene} alt="Marché camerounais" className="h-full w-full object-cover" />
          <div className="absolute inset-0 gradient-hero opacity-90" />
        </div>
        <div className="absolute right-10 bottom-1/4 h-72 w-72 animate-pulse-slow rounded-full bg-gold-500/20 blur-3xl" />

        <div className="container-app relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-in-down inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold-300">
              <Star className="h-3.5 w-3.5 fill-current" />
              Témoignages
            </div>
            <h1 className="heading-serif animate-fade-in-up mt-6 text-4xl font-bold text-white text-shadow-lg sm:text-5xl lg:text-6xl">
              Leurs réussites, notre fierté
            </h1>
            <p className="animate-fade-in-up mt-6 text-lg text-primary-100/90" style={{ animationDelay: '200ms' }}>
              Derrière chaque chiffre, il y a une histoire. Celles de Mariam, Jean-Pierre, Claire et de milliers d'autres Camerounais qui ont transformé leur vie grâce à un accompagnement financier de proximité.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FEATURED TESTIMONIAL ===== */}
      <section className="bg-white py-24">
        <div className="container-app">
          <Reveal>
            <div className="mx-auto max-w-4xl">
              <div className="relative overflow-hidden rounded-3xl gradient-primary p-10 sm:p-16">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-500/20 blur-3xl" />
                <Quote className="h-12 w-12 text-gold-400/50" />
                <p className="mt-6 font-serif text-2xl font-medium leading-relaxed text-white sm:text-3xl">
                  "Le Pèlerin ne m'a pas seulement prêté de l'argent. Ils m'ont donné confiance en moi, formé à la gestion, et accompagné à chaque étape. Aujourd'hui, j'emploie 6 personnes et je scolarise mes enfants."
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={IMAGES.seamstress}
                    alt="Claire Atangana"
                    className="h-16 w-16 rounded-full object-cover ring-4 ring-gold-400/40"
                  />
                  <div>
                    <div className="text-lg font-bold text-white">Claire Atangana</div>
                    <div className="text-sm text-primary-100/70">Couturière — Douala</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== TESTIMONIALS GRID ===== */}
      <section className="bg-cream py-24" style={{ backgroundColor: '#faf6f2' }}>
        <div className="container-app">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-label">Ils racontent leur expérience</span>
              <h2 className="heading-serif mt-5 text-3xl font-bold text-primary-900 sm:text-4xl">
                Des parcours inspirants
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, idx) => (
              <Reveal key={t.name} delay={idx * 100}>
                <div className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-900/10">
                  <Quote className="h-8 w-8 text-gold-400/40 transition-colors duration-300 group-hover:text-gold-500" />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-700">"{t.quote}"</p>

                  <div className="mt-6 grid grid-cols-2 gap-3 border-t border-gray-100 pt-6">
                    <div className="flex items-center gap-2">
                      <Wallet className="h-4 w-4 text-primary-600" />
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-gray-400">Montant</div>
                        <div className="text-xs font-bold text-primary-900">{t.loanAmount}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-gold-600" />
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-gray-400">Résultat</div>
                        <div className="text-xs font-bold text-primary-900">{t.result}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-primary-100"
                    />
                    <div>
                      <div className="font-bold text-primary-900">{t.name}</div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="h-3 w-3" />
                        {t.activity} — {t.location}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-white py-20">
        <div className="container-app">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-3xl border-2 border-primary-100 p-12 text-center">
              <h2 className="heading-serif text-3xl font-bold text-primary-900 sm:text-4xl">
                Et vous, quel est votre projet ?
              </h2>
              <p className="mt-5 text-lg text-gray-600">
                Rejoignez les milliers d'entrepreneurs et de familles qui ont fait confiance à Le Pèlerin. Votre histoire de réussite commence ici.
              </p>
              <button onClick={() => navigateTo('contact')} className="btn-primary mt-8">
                Commencer mon projet
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
