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
  client: string;
  category: PortfolioCategory;
  year: number;
  description: string;
  challenge: string;
  solution: string;
  highlights: string[];
  scope: string[];
  stats: EventStat[];
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
    challenge:
      "Bank Mandiri Taspen membutuhkan forum strategis yang mampu menyatukan seluruh jajaran manajemen senior dari berbagai wilayah untuk merumuskan arah perusahaan 5 tahun ke depan, dengan tetap menjaga kerahasiaan informasi dan suasana yang kondusif untuk diskusi mendalam.",
    solution:
      "Kami merancang sesi eksklusif di venue premium dengan tata ruang yang mendukung diskusi pleno dan breakout session secara bersamaan. Sistem registrasi tertutup, manajemen informasi terenkripsi, dan fasilitator berpengalaman menghasilkan output strategis yang terstruktur dan actionable.",
    highlights: [
      "Peserta 150+ eksekutif senior dari seluruh Indonesia",
      "12 sesi breakout dengan output dokumen strategi",
      "Sistem registrasi & akses eksklusif terintegrasi",
      "Dokumentasi notulensi & action plan real-time",
    ],
    scope: ["MICE", "Productions Handling"],
    stats: [
      { label: "Peserta", value: "150+" },
      { label: "Sesi Breakout", value: "12" },
      { label: "Durasi", value: "3 Hari" },
      { label: "Kota", value: "Bali" },
    ],
  },
  {
    id: "hsbc-bwf",
    title: "HSBC BWF World Tour",
    client: "HSBC / BWF",
    category: "Sports",
    year: 2024,
    description:
      "Event management untuk turnamen bulu tangkis internasional HSBC BWF World Tour di Indonesia.",
    challenge:
      "Mengelola event olahraga internasional bertaraf dunia dengan standar BWF yang sangat ketat, melibatkan atlet dari 40+ negara, ribuan penonton, serta liputan media internasional — semua harus terkoordinasi secara presisi selama satu minggu penuh.",
    solution:
      "Tim kami menangani seluruh aspek event management mulai dari akreditasi media, koordinasi atlet, hospitality VIP, manajemen venue, hingga produksi laporan. Sistem komunikasi terpusat memungkinkan respons cepat terhadap perubahan jadwal pertandingan yang dinamis.",
    highlights: [
      "Event olahraga internasional bertaraf BWF",
      "Atlet dari 40+ negara berpartisipasi",
      "Pengelolaan media center & akreditasi internasional",
      "Zero incident selama pelaksanaan 7 hari",
    ],
    scope: ["Special Event", "Productions Handling"],
    stats: [
      { label: "Negara", value: "40+" },
      { label: "Penonton", value: "8.000+" },
      { label: "Durasi", value: "7 Hari" },
      { label: "Media", value: "50+ Outlet" },
    ],
  },
  {
    id: "beauty-star-tiktok",
    title: "Beauty Star in TikTok",
    client: "TikTok Indonesia",
    category: "Virtual Event",
    year: 2024,
    description:
      "Kampanye digital kreatif dan event virtual kolaborasi dengan content creator TikTok di industri kecantikan.",
    challenge:
      "TikTok Indonesia ingin menciptakan kampanye yang mampu mengangkat ekosistem beauty creator lokal sekaligus mendorong engagement platform secara masif, dengan format yang fresh dan berbeda dari kompetitor.",
    solution:
      "Kami merancang format kompetisi kreatif online yang diproduksi dengan kualitas broadcast penuh, menggabungkan live streaming interaktif, voting real-time, dan integrasi seamless dengan fitur TikTok. Hasilnya adalah campaign yang viral secara organik.",
    highlights: [
      "200+ creator beauty berpartisipasi",
      "10 juta+ penonton live streaming",
      "Trending #1 di TikTok Indonesia selama 3 hari",
      "Engagement rate 3x rata-rata industri",
    ],
    scope: ["Virtual Event", "Brand Activation"],
    stats: [
      { label: "Creator", value: "200+" },
      { label: "Penonton", value: "10M+" },
      { label: "Views Total", value: "50M+" },
      { label: "Engagement", value: "3x Rate" },
    ],
  },
  {
    id: "bank-indonesia-award",
    title: "BI Award Ceremony",
    client: "Bank Indonesia",
    category: "Awarding",
    year: 2024,
    description:
      "Upacara penghargaan tahunan Bank Indonesia dengan gala dinner dan entertainment kelas dunia.",
    challenge:
      "Bank Indonesia memerlukan penyelenggaraan award ceremony yang mencerminkan prestise institusi bank sentral, dengan standar protokol yang sangat tinggi, melibatkan pejabat negara, dan disaksikan oleh seluruh pemangku kepentingan industri keuangan Indonesia.",
    solution:
      "Kami mengeksekusi ceremony dengan desain panggung megah berlapis marmer dan emas, sistem award presentation yang dramatis, serta entertainment berkelas yang tetap menjaga nuansa formal. Setiap detail protokol dikonsultasikan langsung dengan tim protokol BI.",
    highlights: [
      "Dihadiri Gubernur BI & pejabat kementerian",
      "500+ tamu undangan dari industri keuangan",
      "Produksi panggung 360° dengan LED dinding",
      "Liputan live CNBC Indonesia & media nasional",
    ],
    scope: ["Special Event", "Productions Handling"],
    stats: [
      { label: "Tamu VIP", value: "500+" },
      { label: "Kategori Award", value: "18" },
      { label: "Durasi Show", value: "4 Jam" },
      { label: "Media Hadir", value: "30+" },
    ],
  },
  {
    id: "telkom-digital-summit",
    title: "Digital Innovation Summit",
    client: "Telkom Indonesia",
    category: "MICE",
    year: 2024,
    description:
      "Summit inovasi digital dengan keynote speakers internasional dan pameran teknologi mutakhir.",
    challenge:
      "Telkom Indonesia ingin memposisikan diri sebagai thought leader di ekosistem digital Indonesia dengan menghadirkan forum yang mampu menarik perhatian global, menampilkan inovasi terkini, dan membangun koneksi bisnis strategis antarpemangku kepentingan.",
    solution:
      "Kami membangun ekosistem event terintegrasi: main stage conference berkapasitas 2.000 orang, innovation exhibition hall dengan 40 booth interaktif, networking lounge eksklusif, dan sesi bilateral matchmaking. Semua terkoneksi dengan sistem event app custom.",
    highlights: [
      "Speaker internasional dari Google, Microsoft, AWS",
      "40 perusahaan teknologi di innovation exhibition",
      "2.000+ delegasi dari 15 negara",
      "100+ MoU & perjanjian bisnis ditandatangani",
    ],
    scope: ["MICE", "Brand Activation", "Productions Handling"],
    stats: [
      { label: "Delegasi", value: "2.000+" },
      { label: "Negara", value: "15" },
      { label: "Booth Expo", value: "40" },
      { label: "Speaker", value: "25" },
    ],
  },
  {
    id: "samsung-galaxy-launch",
    title: "Galaxy Product Launch",
    client: "Samsung Indonesia",
    category: "Brand Activation",
    year: 2024,
    description:
      "Peluncuran produk Samsung Galaxy dengan experiential zone dan live streaming ke seluruh Indonesia.",
    challenge:
      "Samsung Indonesia membutuhkan peluncuran produk yang menciptakan dampak masif secara bersamaan di seluruh Indonesia — menjangkau konsumen di kota-kota besar maupun tier 2 — dengan pengalaman yang konsisten dan impactful.",
    solution:
      "Kami merancang format hybrid launch: event utama di Jakarta dengan produksi kelas dunia yang disiarkan live ke 20 kota melalui activation zone di mall premium. Setiap zona memiliki pengalaman hands-on produk yang disesuaikan dengan profil konsumen lokal.",
    highlights: [
      "Simultaneous launch di 20 kota Indonesia",
      "500.000+ audience online & offline terjangkau",
      "Experiential zone dengan AR & interactive display",
      "Sold out pre-order dalam 24 jam pasca launch",
    ],
    scope: ["Brand Activation", "Virtual Event", "Productions Handling"],
    stats: [
      { label: "Kota", value: "20" },
      { label: "Audience", value: "500K+" },
      { label: "Live Views", value: "2M+" },
      { label: "Pre-order", value: "Sold Out" },
    ],
  },
  {
    id: "bni-anniversary",
    title: "BNI Anniversary Celebration",
    client: "Bank BNI",
    category: "Special Event",
    year: 2023,
    description:
      "Perayaan anniversary BNI dengan konsep immersive dan pertunjukan multimedia spektakuler.",
    challenge:
      "BNI ingin merayakan milestone anniversary yang bermakna bagi seluruh karyawan dan stakeholder — sebuah perayaan yang bukan hanya ceremonial, tetapi juga mampu membangkitkan kebanggaan dan semangat kolektif seluruh insan BNI.",
    solution:
      "Kami menciptakan 'Journey of Excellence' — sebuah pertunjukan multimedia immersive yang mengajak tamu menapaki perjalanan BNI melalui instalasi interaktif, projection mapping pada seluruh dinding venue, dan puncak acara berupa pertunjukan seni spektakuler yang melibatkan 200 seniman.",
    highlights: [
      "Pertunjukan multimedia immersive 360°",
      "Projection mapping 6 proyektor simultan",
      "200 seniman & performer dalam puncak acara",
      "3.000+ tamu dari seluruh Indonesia",
    ],
    scope: ["Special Event", "Productions Handling"],
    stats: [
      { label: "Tamu", value: "3.000+" },
      { label: "Performer", value: "200" },
      { label: "Proyektor", value: "6 Unit" },
      { label: "Durasi Show", value: "5 Jam" },
    ],
  },
  {
    id: "aqua-brand-campaign",
    title: "Aqua Sustainability Campaign",
    client: "Aqua / Danone",
    category: "Brand Activation",
    year: 2023,
    description:
      "Kampanye brand activation bertema sustainability dengan roadshow ke 10 kota besar di Indonesia.",
    challenge:
      "Aqua ingin mengomunikasikan komitmen sustainability mereka secara autentik kepada konsumen generasi muda yang semakin peduli lingkungan — bukan sekadar iklan, melainkan pengalaman nyata yang mengubah perilaku.",
    solution:
      "Kami merancang 'Aqua Green Journey' — roadshow interaktif dengan instalasi edukatif tentang daur ulang, workshop lingkungan, dan program donasi pohon yang terhubung langsung dengan pembelian produk. Setiap kota memiliki adaptasi lokal yang relevan.",
    highlights: [
      "Roadshow 10 kota: Jakarta, Surabaya, Bandung, dll.",
      "50.000+ konsumen berinteraksi langsung",
      "10.000 pohon ditanam melalui program donasi",
      "Net Promoter Score meningkat 40%",
    ],
    scope: ["Brand Activation"],
    stats: [
      { label: "Kota", value: "10" },
      { label: "Peserta", value: "50.000+" },
      { label: "Pohon Ditanam", value: "10.000" },
      { label: "NPS Naik", value: "+40%" },
    ],
  },
  {
    id: "tokopedia-virtual-fest",
    title: "Tokopedia Virtual Festival",
    client: "Tokopedia",
    category: "Virtual Event",
    year: 2023,
    description:
      "Festival virtual tahunan Tokopedia dengan konser musik, flash sale interaktif, dan talkshow inspiratif.",
    challenge:
      "Tokopedia ingin mengadakan festival tahunan yang mampu menggerakkan transaksi secara masif sekaligus menghadirkan hiburan berkualitas kepada jutaan pengguna mereka, dalam format virtual yang tidak terasa membosankan.",
    solution:
      "Kami memproduksi festival virtual 3-hari dengan studio produksi kelas broadcast: konser artis top, talkshow inspiratif dengan entrepreneur sukses, game show berhadiah, dan flash sale yang terintegrasi langsung dengan platform. Semua diproduksi dengan grafis real-time yang memukau.",
    highlights: [
      "3 malam konser virtual artis nasional & internasional",
      "5 juta+ penonton unik selama 3 hari",
      "Transaksi meningkat 300% selama festival",
      "15 talkshow dengan 40+ narasumber inspiratif",
    ],
    scope: ["Virtual Event", "Productions Handling"],
    stats: [
      { label: "Penonton Unik", value: "5M+" },
      { label: "Artis", value: "20+" },
      { label: "Transaksi Naik", value: "300%" },
      { label: "Durasi", value: "3 Hari" },
    ],
  },
  {
    id: "mandiri-excellence-award",
    title: "Mandiri Excellence Award",
    client: "Bank Mandiri",
    category: "Awarding",
    year: 2023,
    description:
      "Penghargaan tahunan Bank Mandiri untuk unit bisnis terbaik dengan produksi panggung mewah.",
    challenge:
      "Bank Mandiri memerlukan ceremony penghargaan yang mampu mengapresiasi ribuan karyawan berprestasi secara bermartabat dan memorable, sekaligus menjadi momentum penyemangat seluruh insan Mandiri untuk terus berprestasi di tahun mendatang.",
    solution:
      "Kami menghadirkan 'Night of Excellence' — award ceremony dengan panggung LED dinding 30 meter, sistem audio line array premium, dan konsep visual storytelling yang menceritakan perjalanan setiap pemenang melalui video sinematik yang diproduksi khusus.",
    highlights: [
      "Panggung LED dinding 30 meter x 8 meter",
      "Video sinematik custom untuk setiap pemenang",
      "1.500 tamu undangan dari seluruh wilayah",
      "Gala dinner dengan menu fine dining",
    ],
    scope: ["Awarding", "Productions Handling", "Special Event"],
    stats: [
      { label: "Tamu", value: "1.500+" },
      { label: "Kategori Award", value: "25" },
      { label: "LED Wall", value: "30m x 8m" },
      { label: "Durasi", value: "5 Jam" },
    ],
  },
  {
    id: "pertamina-national-gathering",
    title: "National Gathering 2024",
    client: "Pertamina",
    category: "MICE",
    year: 2024,
    description:
      "Gathering nasional Pertamina dengan 2000+ peserta, team building, dan strategic planning session.",
    challenge:
      "Pertamina perlu mengumpulkan lebih dari 2.000 karyawan dari seluruh penjuru Indonesia dalam satu forum yang sekaligus membangun kohesi tim, menyampaikan visi strategis, dan memberikan apresiasi nyata atas kontribusi karyawan.",
    solution:
      "Kami mengelola logistik perjalanan 2.000+ peserta dari 30 lokasi berbeda, merancang program team building outdoor yang menantang namun inklusif, serta memproduksi malam gala yang menjadi puncak apresiasi perusahaan kepada karyawan terbaiknya.",
    highlights: [
      "2.000+ peserta dari 30 lokasi di seluruh Indonesia",
      "Program team building 3 sesi paralel",
      "Manajemen transportasi & akomodasi terintegrasi",
      "Gala dinner dengan hiburan artis nasional",
    ],
    scope: ["MICE", "Special Event"],
    stats: [
      { label: "Peserta", value: "2.000+" },
      { label: "Lokasi Asal", value: "30" },
      { label: "Durasi", value: "4 Hari" },
      { label: "Kota", value: "Lombok" },
    ],
  },
  {
    id: "xl-esports-tournament",
    title: "XL Esports Championship",
    client: "XL Axiata",
    category: "Sports",
    year: 2023,
    description:
      "Turnamen esports nasional dari XL Axiata dengan live streaming dan prize pool jutaan rupiah.",
    challenge:
      "XL Axiata ingin masuk ke ekosistem esports sebagai brand yang relevan bagi generasi muda, dengan mengadakan turnamen yang kompetitif, menghibur, dan mampu menampilkan keunggulan jaringan XL sebagai backbone esports Indonesia.",
    solution:
      "Kami merancang format turnamen multi-game dengan kualifikasi online di seluruh Indonesia yang diikuti final besar di Jakarta. Studio esports custom kami memungkinkan produksi broadcast berkualitas TV dengan panel komentator, visualisasi statistik real-time, dan koneksi 5G XL sebagai showcase teknologi.",
    highlights: [
      "10.000+ pendaftar dari seluruh Indonesia",
      "Final digelar di Jakarta Convention Center",
      "Live streaming dengan 1 juta+ penonton",
      "Prize pool total Rp 2 miliar",
    ],
    scope: ["Sports", "Virtual Event", "Productions Handling"],
    stats: [
      { label: "Pendaftar", value: "10.000+" },
      { label: "Live Viewers", value: "1M+" },
      { label: "Prize Pool", value: "Rp 2M" },
      { label: "Game Titles", value: "4" },
    ],
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
