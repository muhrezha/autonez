// ============================================================
// AUTONEZ Communications — Data Layer
// ============================================================

// ---------- Navigation ----------
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

// ---------- Services ----------
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // emoji
  highlights: string[];
}

export const services: Service[] = [
  {
    id: "brand-activation",
    title: "Brand Activation",
    description:
      "Strategi kreatif untuk mengaktifkan brand Anda melalui pengalaman langsung yang berkesan dan interaktif, menciptakan hubungan emosional antara brand dan audiens.",
    icon: "🚀",
    highlights: [
      "Experiential Marketing",
      "Product Launch",
      "Roadshow & Pop-up Events",
      "Brand Engagement Campaign",
    ],
  },
  {
    id: "mice",
    title: "MICE",
    description:
      "Solusi lengkap Meeting, Incentive, Convention, dan Exhibition — mulai dari perencanaan strategis hingga eksekusi on-site yang sempurna.",
    icon: "🏛️",
    highlights: [
      "Meeting & Conference",
      "Incentive Trip",
      "Convention Management",
      "Exhibition & Trade Show",
    ],
  },
  {
    id: "special-event",
    title: "Special Event",
    description:
      "Penyelenggaraan event spesial berskala besar dengan kreativitas tinggi — dari konsep unik hingga eksekusi yang memukau.",
    icon: "🎪",
    highlights: [
      "Awarding Ceremony",
      "Gala Dinner",
      "Anniversary Celebration",
      "Festival & Concert",
    ],
  },
  {
    id: "virtual-event",
    title: "Virtual Event",
    description:
      "Pengalaman virtual interaktif dan inovatif menggunakan teknologi terkini untuk menjangkau audiens tanpa batas geografis.",
    icon: "💻",
    highlights: [
      "Virtual Conference",
      "Hybrid Event",
      "Live Streaming Production",
      "Online Workshop & Webinar",
    ],
  },
  {
    id: "productions",
    title: "Productions Handling",
    description:
      "Manajemen produksi end-to-end yang memastikan setiap detail teknis tereksekusi sempurna — dari stage design hingga multimedia.",
    icon: "🎬",
    highlights: [
      "Stage & Set Design",
      "Sound & Lighting",
      "Video & Multimedia Production",
      "Technical Direction",
    ],
  },
];

// ---------- Process Steps ----------
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Develop",
    description: "Memahami visi dan kebutuhan klien secara mendalam.",
    icon: "🔍",
  },
  {
    step: 2,
    title: "Discuss",
    description: "Berdiskusi intensif untuk menyelaraskan tujuan bersama.",
    icon: "💬",
  },
  {
    step: 3,
    title: "Idea",
    description: "Merumuskan konsep kreatif yang inovatif dan solutif.",
    icon: "💡",
  },
  {
    step: 4,
    title: "Feedback",
    description: "Mengumpulkan masukan untuk penyempurnaan terus-menerus.",
    icon: "🔄",
  },
  {
    step: 5,
    title: "Result",
    description: "Mengeksekusi event dengan standar kualitas tertinggi.",
    icon: "🎯",
  },
  {
    step: 6,
    title: "Celebration",
    description:
      "Bukan sekadar evaluasi — melainkan perayaan atas keberhasilan bersama.",
    icon: "🎉",
  },
];

// ---------- Portfolio Events ----------
export type PortfolioCategory =
  | "All"
  | "Brand Activation"
  | "MICE"
  | "Virtual Event"
  | "Awarding"
  | "Sports"
  | "Special Event";

export interface PortfolioEvent {
  id: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  year: number;
  description: string;
}

export const portfolioEvents: PortfolioEvent[] = [
  {
    id: "strategic-session-mandiri",
    title: "Strategic Session 2025",
    client: "Bank Mandiri Taspen",
    category: "MICE",
    year: 2025,
    description:
      "Sesi strategis tahunan untuk manajemen senior Bank Mandiri Taspen dengan diskusi panel dan workshop interaktif.",
  },
  {
    id: "hsbc-bwf",
    title: "HSBC BWF World Tour",
    client: "HSBC / BWF",
    category: "Sports",
    year: 2024,
    description:
      "Event management untuk turnamen bulu tangkis internasional HSBC BWF World Tour di Indonesia.",
  },
  {
    id: "beauty-star-tiktok",
    title: "Beauty Star in TikTok",
    client: "TikTok Indonesia",
    category: "Virtual Event",
    year: 2024,
    description:
      "Kampanye digital kreatif dan event virtual kolaborasi dengan content creator TikTok di industri kecantikan.",
  },
  {
    id: "bank-indonesia-award",
    title: "BI Award Ceremony",
    client: "Bank Indonesia",
    category: "Awarding",
    year: 2024,
    description:
      "Upacara penghargaan tahunan Bank Indonesia dengan gala dinner dan entertainment kelas dunia.",
  },
  {
    id: "telkom-digital-summit",
    title: "Digital Innovation Summit",
    client: "Telkom Indonesia",
    category: "MICE",
    year: 2024,
    description:
      "Summit inovasi digital dengan keynote speakers internasional dan pameran teknologi mutakhir.",
  },
  {
    id: "samsung-galaxy-launch",
    title: "Galaxy Product Launch",
    client: "Samsung Indonesia",
    category: "Brand Activation",
    year: 2024,
    description:
      "Peluncuran produk Samsung Galaxy dengan experiential zone dan live streaming ke seluruh Indonesia.",
  },
  {
    id: "bni-anniversary",
    title: "BNI Anniversary Celebration",
    client: "Bank BNI",
    category: "Special Event",
    year: 2023,
    description:
      "Perayaan anniversary BNI dengan konsep immersive dan pertunjukan multimedia spektakuler.",
  },
  {
    id: "aqua-brand-campaign",
    title: "Aqua Sustainability Campaign",
    client: "Aqua / Danone",
    category: "Brand Activation",
    year: 2023,
    description:
      "Kampanye brand activation bertema sustainability dengan roadshow ke 10 kota besar di Indonesia.",
  },
  {
    id: "tokopedia-virtual-fest",
    title: "Tokopedia Virtual Festival",
    client: "Tokopedia",
    category: "Virtual Event",
    year: 2023,
    description:
      "Festival virtual tahunan Tokopedia dengan konser musik, flash sale interaktif, dan talkshow inspiratif.",
  },
  {
    id: "mandiri-excellence-award",
    title: "Mandiri Excellence Award",
    client: "Bank Mandiri",
    category: "Awarding",
    year: 2023,
    description:
      "Penghargaan tahunan Bank Mandiri untuk unit bisnis terbaik dengan produksi panggung mewah.",
  },
  {
    id: "pertamina-national-gathering",
    title: "National Gathering 2024",
    client: "Pertamina",
    category: "MICE",
    year: 2024,
    description:
      "Gathering nasional Pertamina dengan 2000+ peserta, team building, dan strategic planning session.",
  },
  {
    id: "xl-esports-tournament",
    title: "XL Esports Championship",
    client: "XL Axiata",
    category: "Sports",
    year: 2023,
    description:
      "Turnamen esports nasional dari XL Axiata dengan live streaming dan prize pool jutaan rupiah.",
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  "All",
  "Brand Activation",
  "MICE",
  "Virtual Event",
  "Awarding",
  "Sports",
  "Special Event",
];

// ---------- Clients ----------
export interface Client {
  name: string;
  category: "BUMN" | "Swasta";
}

export const clients: Client[] = [
  { name: "Bank Indonesia", category: "BUMN" },
  { name: "Bank Mandiri", category: "BUMN" },
  { name: "Bank BNI", category: "BUMN" },
  { name: "Telkom Indonesia", category: "BUMN" },
  { name: "Pertamina", category: "BUMN" },
  { name: "PLN", category: "BUMN" },
  { name: "Bank Mandiri Taspen", category: "BUMN" },
  { name: "Samsung", category: "Swasta" },
  { name: "TikTok", category: "Swasta" },
  { name: "Tokopedia", category: "Swasta" },
  { name: "Aqua", category: "Swasta" },
  { name: "HSBC", category: "Swasta" },
  { name: "XL Axiata", category: "Swasta" },
  { name: "Danone", category: "Swasta" },
  { name: "Unilever", category: "Swasta" },
  { name: "Grab", category: "Swasta" },
];

// ---------- Contact Info ----------
export const contactInfo = {
  whatsapp: "+62 812-3456-7890",
  email: "hello@autonez.com",
  instagram: "@autonez.communications",
  address: "Jakarta, Indonesia",
  tagline: "Always There For You",
};
