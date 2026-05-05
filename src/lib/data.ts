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
  { label: "Handling", href: "/handling" },
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
  date: string;
  image: string;
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
    date: "10 Januari 2025",
    image: "/portofolio/portofolio_example.jpg",
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
    date: "15 Maret 2024",
    image: "/portofolio/portofolio_example.jpg",
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
    date: "22 April 2024",
    image: "/portofolio/portofolio_example.jpg",
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
    date: "5 Juni 2024",
    image: "/portofolio/portofolio_example.jpg",
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
    date: "18 Juli 2024",
    image: "/portofolio/portofolio_example.jpg",
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
    date: "3 November 2024",
    image: "/portofolio/portofolio_example.jpg",
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
    date: "10 November 2023",
    image: "/portofolio/portofolio_example.jpg",
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
    date: "14 Februari 2023",
    image: "/portofolio/portofolio_example.jpg",
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
    date: "20 Maret 2023",
    image: "/portofolio/portofolio_example.jpg",
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
    date: "7 Desember 2023",
    image: "/portofolio/portofolio_example.jpg",
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
    date: "25 September 2024",
    image: "/portofolio/portofolio_example.jpg",
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
    date: "12 Agustus 2023",
    image: "/portofolio/portofolio_example.jpg",
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
  whatsapp: "+62 812-3456-7890",
  email: "hello@autonez.com",
  instagram: "@autonez.communications",
  address: "Jakarta, Indonesia",
  tagline: "Always There For You",
};
