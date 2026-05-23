// ============================================================
// AUTONEZ Communications — Data Layer
// ============================================================

// ---------- Navigation ----------
export const navLinks = [
  { label: "Home", href: "/" },
  // { label: "Info", href: "/info" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  // { label: "Handling", href: "/handling" },
  { label: "Contact", href: "/contact" },
];

// ---------- Services ----------
export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string; // emoji
  highlights: string[];
  features: ServiceFeature[];
  deliverables: string[];
  relatedCategory: PortfolioCategory;
}

export const services: Service[] = [
  {
    id: "brand-activation",
    title: "Brand Activation",
    description:
      "Strategi kreatif untuk mengaktifkan brand Anda melalui pengalaman langsung yang berkesan dan interaktif, menciptakan hubungan emosional antara brand dan audiens.",
    longDescription:
      "Brand Activation adalah pendekatan pemasaran yang berfokus pada membangun kesadaran dan keterlibatan konsumen secara langsung. Kami merancang pengalaman yang tidak hanya memperkenalkan produk, tetapi juga menciptakan kenangan yang melekat. Dari peluncuran produk yang spektakuler hingga roadshow multi-kota, setiap campaign dirancang dengan strategi data-driven dan eksekusi kreatif yang memastikan ROI optimal bagi brand Anda.",
    icon: "🚀",
    highlights: [
      "Experiential Marketing",
      "Product Launch",
      "Roadshow & Pop-up Events",
      "Brand Engagement Campaign",
    ],
    features: [
      {
        icon: "🎯",
        title: "Strategi Berbasis Data",
        description:
          "Setiap campaign didasari riset mendalam tentang target audiens, tren pasar, dan perilaku konsumen untuk hasil yang terukur.",
      },
      {
        icon: "✨",
        title: "Konsep Kreatif Unik",
        description:
          "Tim kreatif kami menghadirkan ide-ide segar dan konsep yang tak terduga untuk membuat brand Anda tampil beda.",
      },
      {
        icon: "📍",
        title: "Multi-City Roadshow",
        description:
          "Jangkau konsumen di berbagai kota secara bersamaan dengan manajemen logistik yang terkoordinasi dengan baik.",
      },
      {
        icon: "📊",
        title: "Laporan & Analitik",
        description:
          "Dapatkan laporan komprehensif tentang engagement, reach, dan dampak campaign terhadap brand awareness.",
      },
    ],
    deliverables: [
      "Proposal konsep kreatif lengkap",
      "Rencana eksekusi detail (timeline & budget)",
      "Produksi materi & properti event",
      "Tim on-site terlatih & berpengalaman",
      "Dokumentasi foto & video profesional",
      "Laporan campaign pasca-event",
    ],
    relatedCategory: "Brand Activation",
  },
  {
    id: "mice",
    title: "MICE",
    description:
      "Solusi lengkap Meeting, Incentive, Convention, dan Exhibition — mulai dari perencanaan strategis hingga eksekusi on-site yang sempurna.",
    longDescription:
      "MICE (Meeting, Incentive, Convention, Exhibition) adalah segmen bisnis yang membutuhkan penanganan profesional di setiap aspeknya. Dengan pengalaman lebih dari satu dekade, kami telah mengelola ratusan event MICE mulai dari rapat direksi eksklusif hingga konvensi internasional berkapasitas ribuan peserta. Kami memahami bahwa setiap detail — dari pemilihan venue hingga manajemen peserta — berdampak langsung pada kesuksesan event.",
    icon: "🏛️",
    highlights: [
      "Meeting & Conference",
      "Incentive Trip",
      "Convention Management",
      "Exhibition & Trade Show",
    ],
    features: [
      {
        icon: "🏨",
        title: "Venue Scouting & Negosiasi",
        description:
          "Kami memiliki jaringan luas venue premium di seluruh Indonesia dan mancanegara, dengan kemampuan negosiasi harga terbaik.",
      },
      {
        icon: "✈️",
        title: "Manajemen Perjalanan",
        description:
          "Pengelolaan akomodasi, transportasi, dan itinerary untuk peserta dari berbagai kota secara terintegrasi.",
      },
      {
        icon: "🎙️",
        title: "Manajemen Konten & Pembicara",
        description:
          "Kurasi agenda, koordinasi pembicara, dan produksi konten presentasi yang impactful.",
      },
      {
        icon: "📋",
        title: "Registrasi & Manajemen Peserta",
        description:
          "Sistem registrasi online, badge management, dan monitoring kehadiran peserta secara real-time.",
      },
    ],
    deliverables: [
      "Perencanaan event end-to-end",
      "Manajemen vendor & supplier",
      "Sistem registrasi & database peserta",
      "Koordinasi akomodasi & transportasi",
      "Produksi materi & publikasi event",
      "Evaluasi & laporan pasca-event",
    ],
    relatedCategory: "MICE",
  },
  {
    id: "special-event",
    title: "Special Event",
    description:
      "Penyelenggaraan event spesial berskala besar dengan kreativitas tinggi — dari konsep unik hingga eksekusi yang memukau.",
    longDescription:
      "Special Event adalah momen yang hanya terjadi sekali — dan kami memastikan momen itu tak terlupakan. Mulai dari gala dinner mewah, upacara penghargaan bergengsi, hingga festival berskala nasional, kami membawa visi klien ke kehidupan dengan sentuhan artistik dan eksekusi teknis yang sempurna. Setiap elemen — dekorasi, hiburan, kuliner, hingga pencahayaan — dirancang untuk menciptakan pengalaman holistik yang membekas di ingatan setiap tamu.",
    icon: "🎪",
    highlights: [
      "Awarding Ceremony",
      "Gala Dinner",
      "Anniversary Celebration",
      "Festival & Concert",
    ],
    features: [
      {
        icon: "🎨",
        title: "Desain & Dekorasi Tematis",
        description:
          "Tim desainer interior dan event kami menciptakan atmosfer yang sepenuhnya immersive sesuai tema yang diinginkan.",
      },
      {
        icon: "🎭",
        title: "Kurasi Entertainment",
        description:
          "Seleksi dan koordinasi artis, performers, dan hiburan live yang sesuai dengan karakter acara Anda.",
      },
      {
        icon: "🍽️",
        title: "F&B Management",
        description:
          "Koordinasi katering premium dan pengalaman kuliner yang menjadi bagian tak terpisahkan dari keseluruhan event.",
      },
      {
        icon: "📸",
        title: "Dokumentasi Premium",
        description:
          "Tim fotografer dan videografer profesional untuk mengabadikan setiap momen berharga dari event Anda.",
      },
    ],
    deliverables: [
      "Konsep kreatif & mood board",
      "Desain stage & layout venue",
      "Koordinasi artis & entertainment",
      "Manajemen F&B & katering",
      "Tim produksi on-site lengkap",
      "Paket dokumentasi foto & video",
    ],
    relatedCategory: "Special Event",
  },
  {
    id: "virtual-event",
    title: "Virtual Event",
    description:
      "Pengalaman virtual interaktif dan inovatif menggunakan teknologi terkini untuk menjangkau audiens tanpa batas geografis.",
    longDescription:
      "Di era digital ini, virtual event bukan sekadar pengganti — tetapi sebuah format tersendiri dengan kekuatan uniknya. Kami menghadirkan produksi virtual berkualitas broadcast dengan elemen interaktif yang menjaga keterlibatan peserta dari awal hingga akhir. Dengan platform terdepan dan tim teknis berpengalaman, kami memastikan pengalaman online yang sama mengesankannya dengan event fisik.",
    icon: "💻",
    highlights: [
      "Virtual Conference",
      "Hybrid Event",
      "Live Streaming Production",
      "Online Workshop & Webinar",
    ],
    features: [
      {
        icon: "🖥️",
        title: "Studio Produksi Virtual",
        description:
          "Fasilitas studio broadcasting lengkap dengan green screen, multi-camera setup, dan grafis real-time.",
      },
      {
        icon: "🌐",
        title: "Platform Interaktif",
        description:
          "Integrasi fitur polling, Q&A, breakout rooms, dan networking virtual untuk engagement maksimal.",
      },
      {
        icon: "📡",
        title: "Live Streaming Multi-Platform",
        description:
          "Distribusi konten simultan ke YouTube, Zoom, Teams, dan platform custom sesuai kebutuhan.",
      },
      {
        icon: "🔒",
        title: "Infrastruktur Andal",
        description:
          "Sistem backup dan redundansi berlapis untuk memastikan streaming lancar tanpa gangguan teknis.",
      },
    ],
    deliverables: [
      "Setup & konfigurasi platform virtual",
      "Produksi konten pre-recorded & live",
      "Dukungan teknis real-time selama event",
      "Rekaman event dalam kualitas tinggi",
      "Laporan engagement & analitik",
      "Konten highlight pasca-event",
    ],
    relatedCategory: "Virtual Event",
  },
  {
    id: "productions",
    title: "Productions Handling",
    description:
      "Manajemen produksi end-to-end yang memastikan setiap detail teknis tereksekusi sempurna — dari stage design hingga multimedia.",
    longDescription:
      "Productions Handling adalah fondasi dari setiap event yang sukses. Tim produksi kami terdiri dari para ahli di bidangnya masing-masing — sound engineer, lighting designer, set builder, hingga video director — yang bekerja secara sinergis untuk mewujudkan visi artistik sekaligus memenuhi tuntutan teknis tertinggi. Kami mengelola seluruh aspek produksi dari fase perencanaan, rehearsal, hingga strike pasca-event.",
    icon: "🎬",
    highlights: [
      "Stage & Set Design",
      "Sound & Lighting",
      "Video & Multimedia Production",
      "Technical Direction",
    ],
    features: [
      {
        icon: "🏗️",
        title: "Stage & Set Design",
        description:
          "Perancangan dan konstruksi panggung custom yang memperhitungkan estetika, keamanan, dan fungsionalitas.",
      },
      {
        icon: "🔊",
        title: "Audio Professional",
        description:
          "Sistem tata suara premium dengan engineer berpengalaman untuk kualitas audio yang jernih di setiap sudut venue.",
      },
      {
        icon: "💡",
        title: "Lighting & Special Effects",
        description:
          "Desain pencahayaan dramatis dan special effects (pyrotechnic, CO2, confetti) untuk menciptakan momen WOW.",
      },
      {
        icon: "🎥",
        title: "Video & Multimedia",
        description:
          "Produksi konten video, motion graphics, dan pengelolaan LED screen raksasa untuk visual yang memukau.",
      },
    ],
    deliverables: [
      "Technical rider & production schedule",
      "Desain stage & set 3D rendering",
      "Peralatan sound, lighting & video",
      "Tim teknis profesional on-site",
      "Manajemen vendor & subkontraktor",
      "Supervisi load-in, rehearsal & show",
    ],
    relatedCategory: "Special Event",
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

export interface EventStat {
  label: string;
  value: string;
}

export interface PortfolioEvent {
  id: string;
  title: string;
  location: string;
  date: string;
  image: string;
}

export const portfolioEvents: PortfolioEvent[] = [
  {
    id: "aqua-japan",
    title: "AQUA JAPAN",
    location: "Balai Kartini",
    date: "10 Januari 2025",
    image: "/portofolio/aqua_japan.png",
  },
  {
    id: "awarding-night-pegadaian",
    title: "Awarding Night Rakortas Dirkeu Pegadaian",
    location: "Skyline Dago - Bandung",
    date: "10 Januari 2025",
    image: "/portofolio/awarding_night_dirkeu_pagadaian.png",
  },
  {
    id: "awarding-reg-iv-bank-mandiri",
    title: "Awarding Reg IV - Bank Mandiri",
    location: "Wisma Mandiri - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/bank_mandiri_awarding.png",
  },
  {
    id: "kick-off-rkap-2025-bank-mandiri-taspen",
    title: "Kick off RKAP 20255 - Bank Mandiri Taspen",
    location: "DoubleTree Hotel - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/bank_mandiri_taspen_2.png",
  },
  {
    id: "learning-maestro-bank-mandiri-taspen",
    title: "Learning Maestro - Bank Mandiri Taspen",
    location: "Mandiri university - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/bank_mandiri_taspen_3.png",
  },
  {
    id: "rapat-akselerasi-reg-iv-bank-mandiri",
    title: "Rapat Akselerasi Reg IV - Bank Mandiri",
    location: "Menara Danareksa - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/bank_mandiri_taspen_4.png",
  },
  {
    id: "strategic-session-2025-bank-mandiri-taspen",
    title: "Strategic Session 2025 - Bank Mandiri Taspen",
    location: "Raffles Hotel - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/bank_mandiri_taspen.png",
  },
  {
    id: "btn-idol",
    title: "BTN IDOL",
    location: "Jakarta | Menara BTN",
    date: "10 Januari 2025",
    image: "/portofolio/btn_idol.png",
  },
  {
    id: "daihatsu-funtatic-generation",
    title: "Daihatsu Funtatic Generation",
    location: "GIIAS - Tangerang 2019",
    date: "10 Januari 2025",
    image: "/portofolio/daihatsu.png",
  },
  {
    id: "greenfields-family-land",
    title: "Greenfields Family Land",
    location: "Greenfields Farm - Bogor",
    date: "10 Januari 2025",
    image: "/portofolio/greenfields.png",
  },
  {
    id: "hansaplast-kidzania-media-launch-2019",
    title: "Hansaplast Kidzania Media Launch 2019",
    location: "Kidzania - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/hansaplast.png",
  },
  {
    id: "hsbc-bwf-world-tour",
    title: "HSBC BWF World Tour",
    location: "Gelora Bung Karno - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/hsbc.png",
  },
  {
    id: "hut-triparta-48th",
    title: "HUT Triparta 48TH",
    location: "Tripatra Head Office",
    date: "10 Januari 2025",
    image: "/portofolio/hut_tripatra_48th.png",
  },
  {
    id: "iel-battle",
    title: "IEL Battle",
    location: "Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/iel_battle.png",
  },
  {
    id: "indonesia-startup-summit-2019",
    title: "Indonesia Startup Summit 2019",
    location: "Jiexpo Kemayoran - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/indo_startup_summit.png",
  },
    {
    id: "inauguration-factory",
    title: "Innauguration Factory",
    location: "Cikarang",
    date: "10 Januari 2025",
    image: "/portofolio/innauguration_factory.png",
  },
    {
    id: "mandiri-cashless-fai",
    title: "Mandiri Cashless Fair",
    location: "Tahmrin City - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/mandiri_cashless_fair.png",
  },
    {
    id: "mandiri-fantastic-4-award",
    title: "Mandiri Fantastic 4 Award",
    location: "Graha Mandiri - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/mandiri_fantastic_4_award.png",
  },
    {
    id: "mandiri-fantastic-4-march-2019",
    title: "Mandiri Fantastic 4 March 2019",
    location: "Ballroom Graha Mandiri - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/mandiri_fantastic.png",
  },
    {
    id: "mandiri-porseni",
    title: "Mandiri Porseni",
    location: "Plaza Balpindo - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/mandiri_porseni.png",
  },
    {
    id: "the-meat-gala",
    title: "The Meat Gala - Meatguy Steakhouse",
    location: "SCBD - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/meat_guy_steak_house.png",
  },
    {
    id: "ngobras-b2b-ut-service-telkom-indonesia",
    title: "Ngobras B2B UT Service - TelKom Indonesia",
    location: "Gedung Multimedia - Telkom",
    date: "10 Januari 2025",
    image: "/portofolio/ngobras_b2b.png",
  },
    {
    id: "nivea-jakarta-x-beauty",
    title: "Nivea Jakarta x Beauty 2019",
    location: "Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/nivea_2.png",
  },
    {
    id: "nivea-sentuhan-ibu-dongeng-pohon-impian-2018",
    title: "Nivea #SentuhanIbu Dongeng Pohon Impian 2018",
    location: "Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/nivea.png",
  },
    {
    id: "nu-oceana-summer-attack",
    title: "NU Oceana Summer Attack",
    location: "Epicentrum - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/nu_oceana_sumber_attack.png",
  },
    {
    id: "nutragen-cfd-roadshow",
    title: "Nutragen CFD Roadshow",
    location: "Jakarta - Bogor - Bekasi",
    date: "10 Januari 2025",
    image: "/portofolio/nutragen_cfd.png",
  },
    {
    id: "peresmian-penghargaan-pasar-rakyat-serta-rapat-kerja-kementrian-perdagangan-2019",
    title: "Peresmian & Penghargaan Pasar Rakyat Serta Rapat Kerja Kementrian Perdagangan 2019",
    location: "Jakarta - Bogor - Bekasi",
    date: "10 Januari 2025",
    image: "/portofolio/peresmian_penghargaan_pasar.png",
  },
    {
    id: "pt-pupuk-indonesia-family",
    title: "PT Pupuk Indonesia Family",
    location: "Bandung",
    date: "10 Januari 2025",
    image: "/portofolio/pt_pupuk_indo.png",
  },
    {
    id: "suryanation",
    title: "Suryanation",
    location: "Bandara Pondok Cabe - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/suryanation.png",
  },
    {
    id: "beauty-star-in-tiktok",
    title: "Beauty Star in Tiktok",
    location: "Grand Sheraton Hotel - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/tiktok_maybelline.png",
  },
    {
    id: "virtual-event-bi",
    title: "Virtual Event BI",
    location: "Gedung BI - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/virtual_event_bi.png",
  },
    {
    id: "virtual-event-bni",
    title: "Virtual Event BNI",
    location: "Gedung Tempo Pavilion 1 - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/virtual_event_bni.png",
  },
    {
    id: "virtual-launching-m4rch-fest-bank-mandiri",
    title: "Virtual Launching M4rch Fest bank Mandiri",
    location: "Wisma Mandiri II - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/virtual_launching_bank_mandiri.png",
  },
    {
    id: "xl-perscon",
    title: "XL Perscon",
    location: "Empirica Building - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/xl_3_perscon.png",
  },
    {
    id: "xl-future-leaders-2020",
    title: "XL Future Leaders 2020",
    location: "XL Tower - Jakarta",
    date: "10 Januari 2025",
    image: "/portofolio/xl_4_future_leaders_2020.png",
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
  logo: string;
}

export const clients: Client[] = [
  { name: "Bank Indonesia", category: "BUMN", logo: "/home/img_clients/bumn/bi_indonesia.png" },
  { name: "Bank BTN", category: "BUMN", logo: "/home/img_clients/bumn/bank_btn.png" },
  { name: "Bank Mandiri", category: "BUMN", logo: "/home/img_clients/bumn/bank_mandiri.png" },
  { name: "Bank BNI", category: "BUMN", logo: "/home/img_clients/bumn/bank_bni.png" },
  { name: "Bank BRI", category: "BUMN", logo: "/home/img_clients/bumn/bank_bri.png" },
  { name: "Telkom Indonesia", category: "BUMN", logo: "/home/img_clients/bumn/telkom_indo.png" },
  { name: "Kementerian Perdagangan", category: "BUMN", logo: "/home/img_clients/bumn/kem_perdagangan_ri.png" },
  { name: "Pegadaian", category: "BUMN", logo: "/home/img_clients/bumn/pegadaian.png" },
  { name: "Ristekdikti", category: "BUMN", logo: "/home/img_clients/bumn/ristekdikti.png" },
  { name: "Pupuk Indonesia", category: "BUMN", logo: "/home/img_clients/bumn/pupuk_indonesia.png" },
  { name: "BPJS Ketenagakerjaan", category: "BUMN", logo: "/home/img_clients/bumn/bpjs_ket.png" },
  { name: "Bank Mandiri Taspen", category: "BUMN", logo: "/home/img_clients/bumn/mandiri_taspen.png" },
  { name: "TNP2K", category: "BUMN", logo: "/home/img_clients/bumn/tnp2k.png" },

  { name: "MNC", category: "Swasta", logo: "/home/img_clients/swasta/mnc.png" },
  { name: "RCTI", category: "Swasta", logo: "/home/img_clients/swasta/rcti.png" },
  { name: "Samsung", category: "Swasta", logo: "/home/img_clients/swasta/samsung.png" },
  { name: "HSBC", category: "Swasta", logo: "/home/img_clients/swasta/hsbc.png" },
  { name: "Daihatsu", category: "Swasta", logo: "/home/img_clients/swasta/daihatsu.png" },
  { name: "XL Axiata", category: "Swasta", logo: "/home/img_clients/swasta/xl.png" },
  { name: "Greenfields", category: "Swasta", logo: "/home/img_clients/swasta/greenfields.png" },
  { name: "Beiersdorf", category: "Swasta", logo: "/home/img_clients/swasta/beiersdorf.png" },
  { name: "Nivea", category: "Swasta", logo: "/home/img_clients/swasta/nivea.png" },
  { name: "Nivea Men", category: "Swasta", logo: "/home/img_clients/swasta/nivea_men.png" },
  { name: "AQUA Japan", category: "Swasta", logo: "/home/img_clients/swasta/aqua_japan.png" },
  { name: "AQUA Mineral", category: "Swasta", logo: "/home/img_clients/swasta/aqua_mineral.png" },
  { name: "Inaspac", category: "Swasta", logo: "/home/img_clients/swasta/inaspac.png" },
  { name: "Tiktok", category: "Swasta", logo: "/home/img_clients/swasta/tiktik.png" },
  { name: "Niu Oceana", category: "Swasta", logo: "/home/img_clients/swasta/eceana.png" },
  { name: "Meatguy", category: "Swasta", logo: "/home/img_clients/swasta/meatguy.png" },
  { name: "Yili", category: "Swasta", logo: "/home/img_clients/swasta/yili.png" },
  { name: "97.1Fm RDI", category: "Swasta", logo: "/home/img_clients/swasta/97_1_fm_rdi_jakarta.png" },
  { name: "Nutragen", category: "Swasta", logo: "/home/img_clients/swasta/nutragen.png" },
  { name: "Sutra", category: "Swasta", logo: "/home/img_clients/swasta/sutra.png" },
  { name: "Tokopedia", category: "Swasta", logo: "/home/img_clients/swasta/tokopedia.png" },
  { name: "Smartfren", category: "Swasta", logo: "/home/img_clients/swasta/smartfren.png" },
];

// ---------- Info / News ----------
export interface InfoPost {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  images: string[]; // paths relative to /public
  category: string;
}

export const infoPosts: InfoPost[] = [
  {
    id: "autonez-raih-penghargaan-eo-terbaik",
    title: "AUTONEZ Raih Penghargaan Event Organizer Terbaik 2024",
    description:
      "AUTONEZ Communications berhasil meraih penghargaan bergengsi sebagai Event Organizer Terbaik tahun 2024 dari Asosiasi Profesional Event Indonesia, mengakui keunggulan dalam inovasi dan eksekusi event.",
    content:
      "AUTONEZ Communications kembali mengukir prestasi gemilang di industri event organizer Indonesia. Pada malam penghargaan tahunan Asosiasi Profesional Event Indonesia (APEI) yang digelar di Ballroom Hotel Mulia Jakarta, AUTONEZ berhasil menyabet gelar Event Organizer Terbaik 2024.\n\nPenghargaan ini diberikan atas kontribusi luar biasa AUTONEZ dalam menyelenggarakan lebih dari 50 event berskala nasional dan internasional sepanjang tahun 2024. Mulai dari MICE corporate hingga brand activation berskala masif, AUTONEZ konsisten menghadirkan standar kualitas tertinggi.\n\nFarid Hakim, CEO AUTONEZ Communications, mengungkapkan rasa syukur atas capaian ini. \"Penghargaan ini bukan milik kami sendiri, melainkan buah kerja keras seluruh tim dan kepercayaan klien-klien kami yang luar biasa. Ini motivasi kami untuk terus berinovasi.\"\n\nTim kreatif AUTONEZ juga diakui atas keberhasilan proyek-proyek inovatif seperti Samsung Galaxy Launch di 20 kota simultan dan BI Award Ceremony yang memukau ribuan undangan. Ke depannya, AUTONEZ berkomitmen untuk terus meningkatkan standar pelayanan dan menghadirkan pengalaman event yang tak tertandingi.",
    date: "15 Desember 2024",
    author: "Tim Redaksi AUTONEZ",
    images: [
      "/event_example_one.png",
      "/event_example_two.jpg",
      "/event_example_three.jpg",
    ],
    category: "Prestasi",
  },
  {
    id: "samsung-galaxy-launch-sukses",
    title: "Samsung Galaxy Launch: 20 Kota Serentak, 500K+ Audience",
    description:
      "AUTONEZ berhasil mengeksekusi peluncuran Samsung Galaxy secara simultan di 20 kota Indonesia, menjangkau lebih dari 500.000 audience online dan offline dalam satu hari penuh.",
    content:
      "Salah satu tantangan terbesar dalam karir AUTONEZ Communications akhirnya terlaksana dengan gemilang. Peluncuran Samsung Galaxy yang digelar secara serentak di 20 kota Indonesia menjadi tonggak baru dalam industri event organizer tanah air.\n\nEvent berlangsung mulai pukul 09.00 WIB di Jakarta sebagai hub utama, dengan koneksi live ke 19 kota lainnya melalui sistem streaming broadcast kelas dunia yang dikelola penuh oleh tim teknis AUTONEZ. Setiap kota memiliki experiential zone dengan AR dan interactive display yang disesuaikan profil konsumen lokal.\n\nHasil yang dicapai melampaui target: 500.000+ audience gabungan online-offline, 2 juta lebih live views di platform digital, dan yang paling membanggakan — pre-order sold out dalam 24 jam pasca peluncuran.\n\n\"Ini adalah bukti nyata bahwa event hybrid yang dieksekusi dengan baik mampu menciptakan dampak bisnis yang terukur,\" ujar Rina Sari, Event Director AUTONEZ yang memimpin proyek ini. Tim dari 8 kota berbeda bekerja dalam satu komando terpadu menggunakan war room digital AUTONEZ.",
    date: "3 November 2024",
    author: "Rina Sari",
    images: [
      "/event_example_two.jpg",
      "/event_example_four.jpg",
      "/event_example_one.png",
    ],
    category: "Behind the Scene",
  },
  {
    id: "virtual-event-masa-depan",
    title: "Virtual Event: Bukan Pengganti, Tapi Format Tersendiri",
    description:
      "Tim riset AUTONEZ merilis white paper tentang tren virtual event di Indonesia. Temuan menarik: 78% peserta justru lebih engaged di event virtual yang diproduksi dengan baik dibanding event fisik biasa.",
    content:
      "Pandangan lama yang menganggap virtual event sebagai 'terpaksa' kini semakin usang. Tim riset AUTONEZ Communications merilis white paper komprehensif berjudul 'Virtual Event 2025: Beyond Boundaries' yang menganalisis lebih dari 200 event virtual yang diselenggarakan dalam 3 tahun terakhir.\n\nTemuan paling mengejutkan: 78% peserta event virtual yang diproduksi dengan kualitas broadcast penuh melaporkan tingkat keterlibatan yang lebih tinggi dibanding event fisik biasa. Alasannya beragam — kemudahan akses, interaktivitas digital yang lebih kaya, dan eliminasi hambatan geografis.\n\nKey insights dari laporan ini antara lain: pertama, kualitas produksi adalah faktor pembeda utama. Event virtual dengan studio profesional, motion graphics real-time, dan interaksi yang dipersonalisasi secara konsisten menghasilkan NPS lebih tinggi. Kedua, format hybrid (gabungan fisik dan virtual) justru memperluas reach tanpa mengorbankan kualitas pengalaman.\n\nAUTONEZ sendiri telah membuktikan ini melalui proyek Beauty Star in TikTok yang meraih 10 juta penonton dan Tokopedia Virtual Festival dengan 5 juta penonton unik. Ke depan, investasi di infrastruktur virtual production akan terus ditingkatkan.",
    date: "22 Oktober 2024",
    author: "Dr. Andika Pratama",
    images: [
      "/event_example_three.jpg",
      "/event_example_one.png",
      "/event_example_two.jpg",
    ],
    category: "Insight",
  },
  {
    id: "hsbc-bwf-behind-the-scene",
    title: "Di Balik Layar HSBC BWF World Tour: 7 Hari, Zero Incident",
    description:
      "Bagaimana tim AUTONEZ mengelola event olahraga internasional dengan atlet dari 40+ negara, ribuan penonton, dan standar BWF yang sangat ketat — semua tanpa satu pun insiden selama 7 hari pelaksanaan.",
    content:
      "Ketika BWF dan HSBC mempercayakan penyelenggaraan World Tour kepada AUTONEZ Communications, tim kami sadar bahwa standar yang harus dipenuhi jauh melampaui event biasa. Ini adalah kompetisi bulu tangkis paling bergengsi di dunia, dengan atlet dari lebih dari 40 negara dan liputan media internasional.\n\nPersiapan dimulai enam bulan sebelum hari H. Tim advance AUTONEZ melakukan site survey di venue selama tiga hari, memetakan setiap sudut untuk penempatan kamera, sistem akreditasi, hospitality area, dan jalur evakuasi darurat. Koordinasi dengan tim lokal BWF dan HSBC berlangsung intens dengan lebih dari 200 meeting virtual.\n\nSalah satu tantangan terbesar adalah sistem akreditasi multi-level untuk media internasional. Tim IT AUTONEZ membangun sistem verifikasi berlapis yang memproses lebih dari 500 media credential dari 30+ negara tanpa antrian berarti.\n\nHari-H dimulai pukul 05.00 WIB untuk memastikan venue siap sebelum atlet check-in. War room AUTONEZ aktif 24 jam dengan rotasi tiga shift. Hasilnya: tujuh hari penyelenggaraan tanpa satu pun insiden teknis maupun keamanan yang berarti — sebuah pencapaian yang bahkan mendapat apresiasi langsung dari Sekjen BWF.",
    date: "8 September 2024",
    author: "Budi Santoso",
    images: [
      "/event_example_four.jpg",
      "/event_example_three.jpg",
      "/event_example_two.jpg",
      "/event_example_one.png",
    ],
    category: "Behind the Scene",
  },
];

// ---------- Contact Info ----------
export const contactInfo = {
  whatsapp: "+62 878-7799-4035",
  email: "autonez.eo@gmail.com",
  instagram: "@autonez.communications",
  address: "Jakarta, Indonesia",
  tagline: "Always There For You",
};
