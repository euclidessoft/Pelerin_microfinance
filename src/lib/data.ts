export const IMAGES = {
  heroBusiness: 'https://images.pexels.com/photos/8547282/pexels-photo-8547282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  heroMeeting: 'https://images.pexels.com/photos/38649010/pexels-photo-38649010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  yaounde: 'https://images.pexels.com/photos/17290955/pexels-photo-17290955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  yaounde2: 'https://images.pexels.com/photos/17290991/pexels-photo-17290991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  seamstress: 'https://images.pexels.com/photos/5934226/pexels-photo-5934226.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  marketVendor: 'https://images.pexels.com/photos/20068076/pexels-photo-20068076.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  designer: 'https://images.pexels.com/photos/5934215/pexels-photo-5934215.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  florist: 'https://images.pexels.com/photos/6720598/pexels-photo-6720598.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  marketScene: 'https://images.pexels.com/photos/15170758/pexels-photo-15170758.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  marketMen: 'https://images.pexels.com/photos/33489797/pexels-photo-33489797.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  farmerField: 'https://images.pexels.com/photos/34411687/pexels-photo-34411687.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  farmersSoil: 'https://images.pexels.com/photos/37345040/pexels-photo-37345040.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  farmerTomatoes: 'https://images.pexels.com/photos/34705724/pexels-photo-34705724.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  handshake: 'https://images.pexels.com/photos/33175650/pexels-photo-33175650.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  family: 'https://images.pexels.com/photos/7114188/pexels-photo-7114188.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  officeDiscussion: 'https://images.pexels.com/photos/7993903/pexels-photo-7993903.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  officeTeam: 'https://images.pexels.com/photos/9487241/pexels-photo-9487241.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  womanLaptop: 'https://images.pexels.com/photos/7552726/pexels-photo-7552726.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  portraitWoman: 'https://images.pexels.com/photos/29852895/pexels-photo-29852895.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
  portraitMan1: 'https://images.pexels.com/photos/30496625/pexels-photo-30496625.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
  portraitMan2: 'https://images.pexels.com/photos/36053652/pexels-photo-36053652.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
  portraitMan3: 'https://images.pexels.com/photos/4797690/pexels-photo-4797690.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
};

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export const SERVICES: Service[] = [
  {
    icon: 'TrendingUp',
    title: 'Crédit de Démarrage',
    description: 'Des prêts adaptés pour lancer ou développer votre petite entreprise, avec des conditions flexibles pensées pour les entrepreneurs.',
    features: ['Montant jusqu\'à 5 000 000 FCFA', 'Durée de 6 à 36 mois', 'Taux préférentiel à partir de 1,5%/mois', 'Remboursement flexible'],
    image: IMAGES.seamstress,
  },
  {
    icon: 'PiggyBank',
    title: 'Épargne & Placement',
    description: 'Constituez un capital en toute sécurité avec nos comptes d\'épargne rémunérés et nos solutions de placement adaptées à vos objectifs.',
    features: ['Épargne sur salaire', 'Compte sur livret rémunéré', 'Dépôt à terme', 'Épargne scolaire pour les enfants'],
    image: IMAGES.womanLaptop,
  },
  {
    icon: 'Sprout',
    title: 'Crédit Agricole',
    description: 'Un accompagnement financier dédié aux agriculteurs et coopératives pour moderniser l\'exploitation et accroître les récoltes.',
    features: ['Financement intrants agricoles', 'Crédit équipement', 'Accompagnement technique', 'Calendrier adapté aux saisons'],
    image: IMAGES.farmerField,
  },
  {
    icon: 'ShoppingBag',
    title: 'Crédit Commercial',
    description: 'Renforcez votre fonds de roulement, approvisionnez votre stock et saisissez les opportunités du marché avec un financement rapide.',
    features: ['Crédit de campagne', 'Escompte de factures', 'Avance sur marchandise', 'Délai d\'obtention sous 72h'],
    image: IMAGES.marketScene,
  },
  {
    icon: 'Home',
    title: 'Crédit Habitat',
    description: 'Construisez, rénovez ou améliorez votre logement grâce à un financement adapté à votre capacité de remboursement.',
    features: ['Financement construction', 'Rénovation et extension', 'Achat de terrain', 'Durée jusqu\'à 10 ans'],
    image: IMAGES.family,
  },
  {
    icon: 'GraduationCap',
    title: 'Crédit Études',
    description: 'Investissez dans l\'avenir de vos enfants en finançant leurs frais de scolarité, fournitures et matériel éducatif.',
    features: ['Frais de scolarité', 'Matériel pédagogique', 'Bourses complémentaires', 'Remboursement différé possible'],
    image: IMAGES.designer,
  },
];

export interface Testimonial {
  name: string;
  activity: string;
  location: string;
  quote: string;
  image: string;
  loanAmount: string;
  result: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Mariam Ngo Mbarga',
    activity: 'Restauratrice',
    location: 'Yaoundé',
    quote: 'Grâce au crédit de démarrage de Le Pèlerin, j\'ai pu ouvrir mon deuxième restaurant. Le suivi personnalisé et la flexibilité du remboursement m\'ont permis de grandir à mon rythme.',
    image: IMAGES.marketVendor,
    loanAmount: '2 500 000 FCFA',
    result: '2 restaurants ouverts',
  },
  {
    name: 'Jean-Pierre Fotso',
    activity: 'Agriculteur',
    location: 'Bafoussam',
    quote: 'Le crédit agricole a transformé mon exploitation. J\'ai pu acheter un motoculteur et des semences de qualité. Ma production a triplé en deux saisons.',
    image: IMAGES.farmerTomatoes,
    loanAmount: '1 800 000 FCFA',
    result: 'Production x3 en 2 saisons',
  },
  {
    name: 'Claire Atangana',
    activity: 'Couturière',
    location: 'Douala',
    quote: 'Je suis passée d\'un atelier de fortune à une boutique moderne avec 4 machines industrielles. Le Pèlerin a cru en moi quand les banques refusaient.',
    image: IMAGES.seamstress,
    loanAmount: '3 200 000 FCFA',
    result: '4 machines industrielles',
  },
  {
    name: 'Aboubakari Oumarou',
    activity: 'Commerçant',
    location: 'Garoua',
    quote: 'Le crédit commercial m\'a permis d\'importer une grande quantité de tissus. En 18 mois, j\'ai rembourse le prêt et doublé mon capital. Un partenaire de confiance.',
    image: IMAGES.marketMen,
    loanAmount: '4 000 000 FCFA',
    result: 'Capital doublé',
  },
  {
    name: 'Estelle Kameni',
    activity: 'Fleuriste',
    location: 'Yaoundé',
    quote: 'Avec l\'épargne sur livret, j\'ai mis de côté chaque mois. Après deux ans, j\'ai combiné mes économies avec un crédit pour ouvrir ma boutique de fleurs.',
    image: IMAGES.florist,
    loanAmount: '1 200 000 FCFA',
    result: 'Boutique de fleurs ouverte',
  },
  {
    name: 'Samuel Tchoumi',
    activity: 'Menuisier',
    location: 'Bamenda',
    quote: 'Le Pèlerin ne se contente pas de prêter de l\'argent. Ils m\'ont formé à la gestion et au budget. Aujourd\'hui mon atelier emploie 6 personnes.',
    image: IMAGES.designer,
    loanAmount: '2 800 000 FCFA',
    result: '6 emplois créés',
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const TEAM: TeamMember[] = [
  {
    name: 'Dr. Emmanuel Bidjocka',
    role: 'Directeur Général',
    bio: 'Plus de 20 ans d\'expérience en finance inclusive en Afrique centrale. Docteur en économie, passionné par l\'impact social de la microfinance.',
    image: IMAGES.portraitMan2,
  },
  {
    name: 'Aïcha Nkoulou',
    role: 'Directrice des Opérations',
    bio: 'Experte en gestion de portefeuille de crédit et en accompagnement des PME. A piloté l\'expansion de Le Pèlerin dans 7 régions du Cameroun.',
    image: IMAGES.portraitWoman,
  },
  {
    name: 'Robert Talla',
    role: 'Directrice Financière',
    bio: 'Diplômée en audit et contrôle de gestion. Veille à la solidité financière et à la conformité réglementaire de l\'institution.',
    image: IMAGES.portraitMan1,
  },
  {
    name: 'Marc Fotso',
    role: 'Responsable Crédit & Risque',
    bio: 'Spécialiste de l\'analyse de risque microfinance. Conçoit des produits financiers adaptés aux réalités du terrain camerounais.',
    image: IMAGES.portraitMan3,
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 45000, suffix: '+', label: 'Clients accompagnés' },
  { value: 28, suffix: '', label: 'Agences au Cameroun' },
  { value: 18, suffix: ' Mds', label: 'FCFA débloqués' },
  { value: 97, suffix: '%', label: 'Taux de remboursement' },
];

export interface Agency {
  city: string;
  address: string;
  phone: string;
  hours: string;
}

export const AGENCIES: Agency[] = [
  { city: 'Yaoundé — Siège', address: 'Avenue Kennedy, Immeuble Le Pèlerin, BP 1234', phone: '+237 2 22 20 15 15', hours: 'Lun–Ven: 7h30–16h30' },
  { city: 'Douala — Akwa', address: 'Boulevard de la Liberté, près du Marché Central', phone: '+237 2 33 42 18 18', hours: 'Lun–Ven: 7h30–16h30' },
  { city: 'Bafoussam', address: 'Rue du Marché A, Quartier Banque', phone: '+237 2 33 55 20 20', hours: 'Lun–Ven: 7h30–16h00' },
  { city: 'Bamenda', address: 'Commercial Avenue, Immeuble Santa Clara', phone: '+237 2 33 36 12 12', hours: 'Lun–Ven: 8h00–16h00' },
  { city: 'Garoua', address: 'Boulevard de la République, près du Grand Marché', phone: '+237 2 22 27 14 14', hours: 'Lun–Ven: 7h30–16h00' },
  { city: 'Maroua', address: 'Quartier Domayo, Route de Mokolo', phone: '+237 2 29 12 08 08', hours: 'Lun–Ven: 7h30–16h00' },
];
