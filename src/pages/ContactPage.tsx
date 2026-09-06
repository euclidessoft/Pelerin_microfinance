import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  MessageSquare,
  User,
  ChevronDown,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { AGENCIES, IMAGES } from '@/lib/data';

const SERVICE_OPTIONS = [
  'Crédit de démarrage',
  'Épargne & placement',
  'Crédit agricole',
  'Crédit commercial',
  'Crédit habitat',
  'Crédit études',
  'Autre demande',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Veuillez indiquer votre nom';
    if (!form.phone.trim()) e.phone = 'Veuillez indiquer votre téléphone';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Adresse e-mail invalide';
    if (!form.message.trim()) e.message = 'Veuillez décrire votre demande';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: '' }));
  };

  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={IMAGES.yaounde2} alt="Yaoundé" className="h-full w-full object-cover" />
          <div className="absolute inset-0 gradient-hero opacity-90" />
        </div>
        <div className="absolute left-10 top-1/3 h-72 w-72 animate-pulse-slow rounded-full bg-gold-500/20 blur-3xl" />

        <div className="container-app relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-in-down inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold-300">
              <MessageSquare className="h-3.5 w-3.5" />
              Contactez-nous
            </div>
            <h1 className="heading-serif animate-fade-in-up mt-6 text-4xl font-bold text-white text-shadow-lg sm:text-5xl lg:text-6xl">
              Parlons de votre projet
            </h1>
            <p className="animate-fade-in-up mt-6 text-lg text-primary-100/90" style={{ animationDelay: '200ms' }}>
              Nos conseillers vous répondent sous 48 heures. Présentez-vous en agence ou envoyez-nous votre demande en ligne.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM + INFO ===== */}
      <section className="bg-white py-24">
        <div className="container-app">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <Reveal animation="slide-in-left" className="lg:col-span-3">
              <div className="rounded-3xl border border-gray-100 bg-cream/50 p-8 shadow-sm sm:p-10" style={{ backgroundColor: '#faf6f2' }}>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-100">
                      <CheckCircle2 className="h-10 w-10 text-primary-700" />
                    </div>
                    <h2 className="heading-serif mt-6 text-2xl font-bold text-primary-900">Demande envoyée !</h2>
                    <p className="mt-3 text-gray-600">
                      Merci {form.name}. Nous avons bien reçu votre demande et vous contacterons au {form.phone} sous 48 heures.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', phone: '', service: '', message: '' });
                      }}
                      className="btn-ghost mt-8"
                    >
                      Envoyer une autre demande
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="heading-serif text-2xl font-bold text-primary-900">Formulaire de demande</h2>
                    <p className="mt-2 text-sm text-gray-600">
                      Remplissez ce formulaire et un conseiller vous recontactera. Les champs marqués d'un * sont obligatoires.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-sm font-medium text-gray-700">
                            Nom complet *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <input
                              type="text"
                              value={form.name}
                              onChange={(e) => handleChange('name', e.target.value)}
                              className="input-field pl-10"
                              placeholder="Ex: Mariam Ngo Mbarga"
                            />
                          </div>
                          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                        </div>

                        <div>
                          <label className="mb-1.5 block text-sm font-medium text-gray-700">
                            Téléphone *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(e) => handleChange('phone', e.target.value)}
                              className="input-field pl-10"
                              placeholder="Ex: +237 6 99 12 34 56"
                            />
                          </div>
                          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-sm font-medium text-gray-700">
                            E-mail (optionnel)
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <input
                              type="email"
                              value={form.email}
                              onChange={(e) => handleChange('email', e.target.value)}
                              className="input-field pl-10"
                              placeholder="vous@exemple.com"
                            />
                          </div>
                          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="mb-1.5 block text-sm font-medium text-gray-700">
                            Service souhaité
                          </label>
                          <div className="relative">
                            <select
                              value={form.service}
                              onChange={(e) => handleChange('service', e.target.value)}
                              className="input-field appearance-none pr-10"
                            >
                              <option value="">Sélectionnez...</option>
                              {SERVICE_OPTIONS.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                          Votre demande *
                        </label>
                        <textarea
                          value={form.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          rows={5}
                          className="input-field resize-none"
                          placeholder="Décrivez votre projet ou votre demande en quelques lignes..."
                        />
                        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                      </div>

                      <button type="submit" className="btn-primary w-full">
                        Envoyer ma demande
                        <Send className="h-4 w-4" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>

            {/* Contact info */}
            <Reveal animation="slide-in-right" delay={150} className="lg:col-span-2">
              <div className="space-y-6">
                <div className="rounded-2xl gradient-primary p-8 text-white">
                  <h3 className="font-serif text-xl font-bold">Siège social — Yaoundé</h3>
                  <div className="mt-5 space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                      <span>Avenue Kennedy, Immeuble Le Pèlerin, BP 1234, Yaoundé, Cameroun</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 shrink-0 text-gold-400" />
                      <span>+237 2 22 20 15 15</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 shrink-0 text-gold-400" />
                      <span>contact@lepelerin-mfi.cm</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 shrink-0 text-gold-400" />
                      <span>Lun–Ven: 7h30–16h30, Sam: 8h00–12h00</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gold-200 bg-gold-50/50 p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500 text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary-900">Numéro vert gratuit</div>
                      <div className="text-lg font-bold text-primary-700">+237 800 20 15 15</div>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-gray-600">
                    Appelez gratuitement depuis tout le Cameroun pour toute information sur nos produits et services.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== AGENCIES ===== */}
      <section className="bg-cream py-24" style={{ backgroundColor: '#faf6f2' }}>
        <div className="container-app">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="section-label">Nos agences</span>
              <h2 className="heading-serif mt-5 text-3xl font-bold text-primary-900 sm:text-4xl">
                Trouvez l'agence la plus proche
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Le Pèlerin est présent dans 6 régions du Cameroun avec 28 agences pour vous accueillir.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AGENCIES.map((agency, idx) => (
              <Reveal key={agency.city} delay={idx * 80}>
                <div className="group h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 transition-colors duration-300 group-hover:bg-primary-700">
                      <Building2 className="h-6 w-6 text-primary-700 transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary-900">{agency.city}</h3>
                      <p className="mt-1 text-sm text-gray-600">{agency.address}</p>
                      <div className="mt-3 flex flex-col gap-1.5 text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5 text-gold-600" />
                          {agency.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3.5 w-3.5 text-gold-600" />
                          {agency.hours}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
