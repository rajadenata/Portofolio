// =====================================================================
//  SINGLE SOURCE OF TRUTH FOR ALL CONTENT
//  Everything here comes from Raja Denata's CV. Items marked
//  "PLACEHOLDER" are intentionally empty — fill them in yourself.
// =====================================================================

export const site = {
  name: "Raja Denata",
  cvUrl: "/assets/Raja_Denata_CV.pdf",
  photo: "/assets/profile/raja.webp",
  photoFallback: "/assets/profile/raja.png",
};

export const navItems = [
  { label: "About", href: "#about", match: ["about"] },
  {
    label: "Experience",
    href: "#experience",
    match: ["experience", "achievements"],
  },
  { label: "Projects", href: "#projects", match: ["projects"] },
  { label: "Resume", href: "#resume", match: ["resume"] },
  { label: "Contact", href: "#contact", match: ["contact"] },
];

export const typedWords = [
  "Programmer",
  "Research Enthusiast",
  "Technology Enthusiast",
];

// The five languages listed under "Bahasa Pemrograman" in the CV — nothing more.
export const techStack = [
  { name: "HTML", icon: "FileCode2", note: "Markup" },
  { name: "CSS", icon: "Palette", note: "Styling" },
  { name: "JavaScript", icon: "Braces", note: "Scripting" },
  { name: "Python", icon: "Terminal", note: "General purpose" },
  { name: "Java", icon: "Coffee", note: "Object-oriented" },
];

export const about = {
  directory: "C:/Users/RajaDenata/Profile",
  paragraphs: [
    {
      id: "p1",
      parts: [
        "An ",
        { hl: "Informatics" },
        " student at Universitas Gunadarma with an active track record in scientific writing, journal publication, public speaking, and programming.",
      ],
    },
    {
      id: "p2",
      parts: [
        "Recipient of the ",
        { box: "Outstanding Student Medal" },
        " of the Informatics Study Program, Universitas Gunadarma (2026).",
      ],
    },
    {
      id: "p3",
      parts: [
        "Won a ",
        { strong: "Bronze Medal" },
        " at the National Scientific Essay Competition ",
        { strong: "IDEA FEST 5" },
        " at IPB University (2026) with the product “Mujawwid”, and competed internationally in ",
        { strong: "LKTII" },
        " in 2023. Fluent in Arabic, English, and Indonesian.",
      ],
    },
  ],
  // PERSONAL STATEMENT — edit freely, this is a draft written from the CV themes.
  quote:
    "Technology, research, and public speaking — three ways I turn ideas into impact.",
  facts: [
    { label: "Languages", value: "Arabic · English · Indonesian" },
    { label: "Focus", value: "Programming · Research · Public Speaking" },
    { label: "Status", value: "Informatics @ Universitas Gunadarma" },
  ],
};

// Category → accent colour (used for top border + icon)
export const accents = {
  Organization: {
    bar: "from-fuchsia-500 to-pink-500",
    icon: "from-fuchsia-500 to-pink-500",
  },
  Activity: {
    bar: "from-cyan-400 to-blue-500",
    icon: "from-cyan-400 to-blue-500",
  },
  Training: {
    bar: "from-emerald-400 to-teal-400",
    icon: "from-emerald-400 to-teal-400",
  },
  Course: {
    bar: "from-amber-400 to-orange-500",
    icon: "from-amber-400 to-orange-500",
  },
  Ongoing: {
    bar: "from-violet-400 to-indigo-500",
    icon: "from-violet-400 to-indigo-500",
  },
};

// `icon` is a lucide-react icon name (see components/Icon.jsx)
export const experiences = [
  // ---- shown by default (priority order from the brief) ----
  {
    id: "kmi-pengurus",
    title: "Pengurus KMI",
    org: "Kulliyatul Muballighin Al Islamiah (KMI)",
    period: "2022 – 2024",
    category: "Organization",
    icon: "Users",
  },
  {
    id: "kamar-santri-baru",
    title: "Pengurus Kamar Santri Baru",
    org: "MAS Wali Songo Ngabar Putra",
    period: "2022",
    category: "Organization",
    icon: "Users",
  },
  {
    id: "kamar-tahfidz",
    title: "Pengurus Kamar Tahfidz",
    org: "MAS Wali Songo Ngabar Putra",
    period: "2021 – 2022",
    category: "Organization",
    icon: "BookOpen",
  },
  {
    id: "program-tahfidz",
    title: "Member, Program Tahfidz",
    org: "Extracurricular",
    period: "2018 – 2021",
    category: "Activity",
    icon: "BookOpen",
  },
  {
    id: "kmi-anggota",
    title: "Member, Kulliyatul Muballighin Al Islamiah (KMI)",
    org: "Extracurricular",
    period: "2018 – 2021",
    category: "Activity",
    icon: "Mic",
  },
  {
    id: "jmq",
    title: "Member, Jami’atul Quro (JMQ)",
    org: "Extracurricular",
    period: "2019 – 2021",
    category: "Activity",
    icon: "Mic",
  },
  // ---- hidden until "Show More Experiences" ----
  {
    id: "usb",
    title: "Unlimited Software Building (USB)",
    org: "Ongoing activity",
    period: "Ongoing",
    category: "Ongoing",
    icon: "Code2",
    extra: true,
  },
  {
    id: "artikel-ilmiah",
    title: "Scientific Article Writing",
    org: "SmartBiz AI (see Projects)",
    period: "Ongoing",
    category: "Ongoing",
    icon: "FlaskConical",
    extra: true,
  },
  {
    id: "pelatihan-mengajar",
    title: "Teaching Training & Exam (‘Amaaliyatu Tadris)",
    org: "Training",
    period: "2024",
    category: "Training",
    icon: "GraduationCap",
    extra: true,
  },
  {
    id: "pramuka-lanjutan",
    title: "Advanced Scout Trainer Course (Tingkat Lanjutan)",
    org: "Training",
    period: "2023",
    category: "Training",
    icon: "Award",
    extra: true,
  },
  {
    id: "narakarya",
    title: "Narakarya Dasar",
    org: "Training",
    period: "2023",
    category: "Training",
    icon: "Award",
    extra: true,
  },
  {
    id: "pramuka-kmd",
    title: "Basic Scout Trainer Course (KMD)",
    org: "Training",
    period: "2022",
    category: "Training",
    icon: "Award",
    extra: true,
  },
  {
    id: "kepemimpinan",
    title: "Leadership Training (Pelatihan Kepemimpinan)",
    org: "Training",
    period: "2022",
    category: "Training",
    icon: "Users",
    extra: true,
  },
  {
    id: "workshop-math",
    title: "Mathematics Workshop PPWS Ngabar",
    org: "Course",
    period: "2024",
    category: "Course",
    icon: "Lightbulb",
    extra: true,
  },
  {
    id: "elite-english",
    title: "Elite English School",
    org: "Course",
    period: "2024",
    category: "Course",
    icon: "Languages",
    extra: true,
  },
  {
    id: "manasik-haji",
    title: "Manasik Haji",
    org: "Course",
    period: "2022",
    category: "Course",
    icon: "Landmark",
    extra: true,
  },
  {
    id: "ranau-english",
    title: "Ranau English Course",
    org: "Course",
    period: "2015 – 2018",
    category: "Course",
    icon: "Languages",
    extra: true,
  },
];

// Organizer is only filled in where the CV states it.
export const achievements = [
  // ---- featured ----
  {
    id: "mahasiswa-berprestasi",
    title: "Mahasiswa Berprestasi — Informatics Study Program",
    organizer: "Universitas Gunadarma",
    year: "2026",
    level: "University",
    kind: "Medal",
    featured: true,
    doc: "/assets/achievements/mahasiswa-berprestasi.jpeg",
  },
  {
    id: "idea-fest",
    title: "Bronze Medal — IDEA FEST 5 National Essay Competition",
    organizer: "IPB University",
    year: "2026",
    level: "National",
    kind: "Bronze Medal",
    note: "Product: “Mujawwid”",
    featured: true,
    doc: "/assets/achievements/idea-fest-5.jpeg",
  },
  {
    id: "lktii",
    title: "Gold Medal — International Scientific Paper Competition (LKTII)",
    organizer: "IYSA",
    year: "2023",
    level: "International",
    kind: "Gold Medal",
    featured: true,
    doc: "/assets/achievements/lktii-iysa.jpeg",
  },
  {
    id: "pesta-pendidikan",
    title: "2nd Place — National Scientific Paper Competition",
    organizer: "Pesta Pendidikan",
    year: "2023",
    level: "National",
    kind: "2nd Place",
    featured: true,
    doc: "/assets/achievements/pesta-pendidikan.jpeg",
  },
  // ---- rest of the CV ----
  {
    id: "devlaunch",
    title: "Participant — Competitive Programming Dev Launch 2026",
    year: "2026",
    level: "Competition",
    kind: "Participant",
  },
  {
    id: "syiir",
    title:
      "2nd Runner-up — National Arabic Syi’ir Competition (Juara Harapan 2)",
    year: "2022",
    level: "National",
    kind: "Runner-up",
  },
  {
    id: "alamin",
    title: "Top 10 Finalist — National Scientific Paper Competition",
    organizer: "Ponpes Al-Amin Prenduan",
    year: "2022",
    level: "National",
    kind: "Finalist",
  },
  {
    id: "compose",
    title: "2nd Place — Compose Competition",
    year: "2022",
    level: "School",
    kind: "2nd Place",
  },
  {
    id: "cerdas-cermat",
    title: "1st Place — Quiz Competition (Cerdas Cermat)",
    year: "2021",
    level: "School",
    kind: "1st Place",
  },
  {
    id: "scrabble",
    title: "1st Place — Scrabble Competition",
    year: "2021",
    level: "School",
    kind: "1st Place",
  },
  {
    id: "cc-english",
    title: "1st Place — English & General Quiz Competition",
    year: "2021",
    level: "School",
    kind: "1st Place",
  },
  {
    id: "pidato-en-2021",
    title: "3rd Place — English Speech Competition",
    year: "2021",
    level: "School",
    kind: "3rd Place",
  },
  {
    id: "pidato-id-2020",
    title: "3rd Place — Indonesian Speech Competition",
    year: "2020",
    level: "Regency",
    kind: "3rd Place",
  },
  {
    id: "pidato-en-2020",
    title: "3rd Place — English Speech Competition",
    year: "2020",
    level: "School",
    kind: "3rd Place",
  },
  {
    id: "pidato-id-2019",
    title: "2nd Place — Indonesian Speech Competition",
    year: "2019",
    level: "School",
    kind: "2nd Place",
  },
  {
    id: "pidato-en-2018",
    title: "3rd Place — English Speech Competition",
    year: "2018",
    level: "School",
    kind: "3rd Place",
  },
  {
    id: "conversation",
    title: "1st Place — Conversation Competition",
    year: "2017",
    level: "School",
    kind: "1st Place",
  },
];

export const projectTabs = ["Projects", "Certificates", "Tech Stack"];

// Only SmartBiz AI is real (CV → "Ongoing"). The rest are empty slots.
// To fill a placeholder: set placeholder:false, add image, tags, links.
export const projects = [
  {
    id: "smartbiz",
    title: "SmartBiz AI",
    status: "Ongoing Research",
    description:
      "Evaluation of baseline and machine learning models for 7-day demand forecasting in a production decision-support system for culinary MSMEs (UMKM kuliner).",
    detail:
      "Scientific article in progress: “SmartBiz AI: Evaluasi Baseline dan Machine Learning untuk Forecasting Permintaan 7 Hari pada Sistem Pendukung Keputusan Produksi UMKM Kuliner”.",
    tags: [
      "Machine Learning",
      "Demand Forecasting",
      "Decision Support System",
      "UMKM Kuliner",
    ],
    image: "/assets/projects/smartbiz.jpeg", // optional: add a screenshot with this name
    github: "", // PLACEHOLDER: paste repo URL when ready
    demo: "", // PLACEHOLDER: paste live-demo URL when ready
  },
  {
    id: "p2",
    placeholder: true,
    title: "Mujawwid",
    image: "/assets/projects/project-2.jpg",
  },
  {
    id: "p3",
    placeholder: true,
    title: "MarkazWeb",
    image: "/assets/projects/project-3.jpg",
  },
];

// Drop files with these names into public/assets/certificates/
export const certificates = [
  {
    id: "c1",
    title: "Certificate #1",
    file: "/assets/certificates/certificate-1.jpg",
  },
  {
    id: "c2",
    title: "Certificate #2",
    file: "/assets/certificates/certificate-2.jpg",
  },
  {
    id: "c3",
    title: "Certificate #3",
    file: "/assets/certificates/certificate-3.jpg",
  },
  {
    id: "c4",
    title: "Certificate #4",
    file: "/assets/certificates/certificate-4.jpg",
  },
  {
    id: "c5",
    title: "Certificate #5",
    file: "/assets/certificates/certificate-5.jpg",
  },
  {
    id: "c6",
    title: "Certificate #6",
    file: "/assets/certificates/certificate-6.jpg",
  },
];

export const education = [
  {
    id: "ug",
    school: "Universitas Gunadarma",
    detail: "Informatics",
    period: "2025 – Present",
    current: true,
  },
  {
    id: "ma",
    school: "MAS Wali Songo Ngabar Putra",
    detail: "Natural Sciences (IPA)",
    period: "2021 – 2024",
  },
  {
    id: "mts",
    school: "MTs Wali Songo Ngabar Putra",
    detail: "Junior High School",
    period: "2018 – 2021",
  },
  {
    id: "sd",
    school: "SDN 1 Kota Batu",
    detail: "Elementary School",
    period: "2012 – 2018",
  },
];

// PLACEHOLDERS — leave '' until you add the real value. Empty = shown as "Add yours".
export const contact = {
  email: "", // e.g. 'name@email.com'
  github: "", // e.g. 'https://github.com/username'
  linkedin: "", // e.g. 'https://linkedin.com/in/username'
  instagram: "", // e.g. 'https://instagram.com/username'
};
