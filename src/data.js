/* ==================================================================

   ================================================================== */

export const PROFILE = {
  first: "Arihan",
  last: "Jain",
  fullName: "Arihan Jain",
  tagline: "Business & Computer Science • Founder, Zenth and The Floor • Multi-instrumentalist and Producer",
  
  heroStatement:
    "Driven by curiosity. Inspired by innovation. Focused on solving real-world problems.",
  location: "Gurugram, Haryana, India", 
  email: "arihan.v.jain@gmail.com",
  phone: "",
  bio: [
    "I'm Arihan, an IB Diploma candidate at Shiv Nadar School, Gurugram, taking Economics, Mathematics: Applications & Interpretation and Computer Science at Higher Level. I build at the intersection of business and music.",
    "I founded Zenth, a digital agency working with two clients on recurring monthly retainers, and The Floor, a self-discipline app built on one idea: one promise a day, kept or broken, with no edits. Alongside that I've worked as an AI intern at Panscience Innovations, building a meeting assistant with real-time transcription and an AI avatar video-call feature, and as an analyst intern building predictive models for equity price outcomes.",
    "Outside of that I'm a multi-instrumentalist, producer and vocalist, I represent teams in business simulations and Model UN committees, and I teach entrepreneurship and economics with community projects. I'm driven by the process of solving problems — breaking down complex challenges, exploring different approaches, and turning ideas into things that actually ship.",
  ],
  socials: {
    github: "",  
    scholar: "",
    linkedin: "https://www.linkedin.com/in/arihanjain1/",
    zenth: "https://zenth.agency/",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "/arihan_jain_resume.pdf", 
  photo: "",
  aboutPhoto: "/placeholder-about.jpg",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  { label: "Community Service", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

/* ---- Roles & engagement (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "zenth",
    role: "Founder",
    org: "Zenth",
    logo: "",
    location: "",
    dates: "May 2026 – Present",
    meta: "May 2026 – Present ·",
    badge: "Founder",
    desc: "A digital agency partnering with businesses through recurring monthly retainers, delivering consistent creative, branding, and digital solutions that support long-term growth and evolving business needs.",
    bullets: [
      "Founded and runs the agency, currently with two active clients",
      "Both engagements are recurring monthly retainers rather than one-off projects",
    ],
    tags: ["Entrepreneurship", "Digital Agency", "Client Work"],
    link: PROFILE.socials.zenth, // EXTRA FIELD: the reference card has no `link`.
                                 // Reads from PROFILE.socials.zenth so the URL lives in one place.
                                 // Add support in ui.jsx or it simply won't render.
    featured: true,
  },
  {
    slug: "the-floor",
    role: "Founder",
    org: "The Floor",
    logo: "",
    location: "",
    dates: "Jul 2026 – Present",
    meta: "Jul 2026 – Present ·",
    badge: "Founder",
    desc: "A self-discipline app built on a single rule: one promise a day, kept or broken, no edits, and a permanent record of what's broken.",
    bullets: [
      "Directed the build on Next.js with Supabase/Postgres and row-level security",
      "Used Drizzle ORM for the data layer and shipped as an installable, offline-capable PWA",
      "Wrote 112 tests, 45 of them running against a real Postgres instance",
    ],
    tags: ["Product", "Next.js", "Postgres", "PWA"],
    featured: true,
  },
  {
    slug: "crystal-ltd",
    role: "Analyst Intern",
    org: "Crystal Ltd", // CONFLICT: [P] calls this "Crystal Crop Ltd." — confirm the legal name
    logo: "",
    location: "",
    dates: "May – Jun 2025", // CONFLICT: [P] described it as "a two-week internship"
    meta: "May – Jun 2025 ·",
    badge: "Internship",
    desc: "Quantitative and economic analysis of equity markets, combining programming with economic reasoning.",
    bullets: [
      "Built predictive models and algorithms for equity price outcomes",
      "Applied economic reasoning alongside programming to interpret results",
      "Worked across stock research, ETF analysis and exchange rate trends", // from [P]
    ],
    tags: ["Equity Research", "Predictive Modelling", "Economics"],
    featured: true,
  },
  {
    slug: "nyu-tandon-design-invent-innovate",
    role: "Participant — Design, Invent & Innovate",
    org: "NYU Tandon School of Engineering",
    logo: "",
    location: "",
    dates: "", // NOT IN SOURCE
    meta: "",
    badge: "Programme",
    desc: "An engineering design programme run with an international team, working through CAD tools and rapid prototyping.",
    bullets: [
      "Designed and prototyped an assistive solution helping children and older adults manage medication", // from [P]
      "Worked within an international team using CAD tools and rapid prototyping",
    ],
    tags: ["Engineering Design", "CAD", "Rapid Prototyping"],
    featured: false,
  },
];

/* ---- Projects & builds ---- */

export const PROJECTS = [
  {
    name: "The Floor",
    org: "Founder · Personal Product",
    meta: "Jul 2026 – Present",
    desc: "A self-discipline app with one mechanic — a single promise each day, marked kept or broken, with no edits and a permanent record of what's broken. Built on Next.js with Supabase/Postgres and row-level security, Drizzle ORM, and shipped as an installable, offline-capable PWA backed by 112 tests.",
    tags: ["Next.js", "Supabase / Postgres", "Drizzle ORM", "PWA", "Testing"],
    featured: true,
  },
  {
    name: "Library Management System",
    org: "Computer Science HL — Internal Assessment",
    meta: "IB Internal Assessment",
    desc: "A library system handling borrowing, returns, reservations and overdue fines — built around a recursive merge sort, a FIFO reservation queue, SQLite persistence, role-based access control, and a fine engine with rate differentials and caps.",
    tags: ["Algorithms", "SQLite", "Access Control", "System Design"],
    featured: true,
  },
  {
    // Internship work, restated as a project so /projects carries the AI build.
    // Delete if you'd rather not repeat the Panscience content across two pages.
    name: "AI Meeting Assistant",
    org: "Panscience Innovations",
    meta: "Jun – Jul 2026",
    desc: "Real-time meeting transcription with speaker identification, automatic action-item extraction, and a chatbot grounded in search over meeting history.",
    tags: ["Speech Recognition", "NLP", "Retrieval", "Applied AI"],
    featured: true,
  },
  {
    name: "AI Avatar Video Calling",
    org: "Panscience Innovations",
    meta: "Jun – Jul 2026",
    desc: "An avatar-driven video-call feature with real-time tone and emotion tracking, alongside latency benchmarking of text-to-speech across Cartesia's streaming protocols.",
    tags: ["Real-Time Systems", "Text-to-Speech", "Emotion Tracking"],
    featured: true,
  },
  {
    name: "Assistive Medication Management Device",
    org: "NYU Tandon School of Engineering — Design, Invent & Innovate",
    meta: "Team prototype",
    // NOTE: the medication detail comes from [P]; the résumé describes only the
    // programme (international team, CAD tools, rapid prototyping).
    desc: "A team-built assistive prototype helping children and older adults remember and manage their medication, developed through a human-centred design process with CAD modelling and rapid prototyping.",
    tags: ["Human-Centred Design", "CAD & 3D Modelling", "Prototyping"],
    featured: false,
  },
  {
    name: "Equity Price Prediction Models",
    org: "Crystal Ltd — Analyst Internship",
    meta: "May – Jun 2025",
    desc: "Predictive models and algorithms for equity price outcomes, pairing programming with economic reasoning to test where the two agree and where they diverge.",
    tags: ["Predictive Modelling", "Equity Research", "Python"],
    featured: false,
  },
];

/* ---- Honours & awards ---- */

export const AWARDS = [
  {
    icon: "",
    title: "SRCC Economics Olympiad — All-India Rank 157",
    meta: "2025",
    detail: "Placed 157th nationally in the SRCC Economics Olympiad.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "National Finance Olympiad — Qualified, Nationals",
    meta: "2024",
    detail: "Qualified for the national round of the National Finance Olympiad.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "National Mathematics Olympiad — Qualified, Nationals",
    meta: "", // NOT IN SOURCE: no year given for this one
    detail: "Qualified for the national round of the National Mathematics Olympiad.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "Trinity College London — Gold Young Performers Certificate",
    meta: "Music performance",
    detail: "Awarded the Gold Young Performers Certificate by Trinity College London.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "TechWiz Competition (VVS)",
    meta: "Participant",
    // ONLY IN [P]: the résumé never mentions TechWiz. Confirm before publishing.
    detail: "Competed in the TechWiz technology competition at VVS.",
    link: "",
    featured: false,
  },
];

/* ---- Areas of focus (the reference's "research interests" block) ---- */

export const ARTICLES = [
  {
    title: "Entrepreneurship & Business",
    outlet: "Running an agency, building products people pay for, and negotiating deals in simulation and practice",
    link: "",
  },
  {
    title: "Technology & Applied AI",
    outlet: "Shipping real systems — speech, retrieval, real-time features and full-stack builds that hold up under testing",
    link: "",
  },
  {
    title: "Economics & Financial Markets",
    outlet: "Equity research, predictive modelling, and economic reasoning applied to market behaviour",
    link: "",
  },
  {
    title: "Music & Production",
    outlet: "Multi-instrumental performance, production in FL Studio, and formal theory from IGCSE Music",
    link: "",
  },
];

/* ---- Leadership, service & mentorship ---- */

export const VOLUNTEER = {
  // Headline stats as you supplied them. Fixed the typo in the first label
  // ("Neotiation" → "Negotiation"). These sit above the service list — say the
  // word and I'll move them to the homepage instead, which may suit them better.
  stats: [
    { value: "₹4,000 cr", label: "Negotiation for Shyam Metalics" },
    { value: "AIR 157", label: "SRCC Economics Olympiad" },
  ],
  orgs: [
    {
      name: "Kal Ki Rahein — Global Perspectives Project",
      role: "Volunteer",
      desc: "Fieldwork and community teaching on entrepreneurship and economics, introducing underprivileged students to practical concepts in mathematics, economics and marketing beyond the classroom.",
    },
    {
      name: "ThinkSmiths Catalyst (CAS)",
      role: "Volunteer Tutor",
      desc: "Ongoing volunteer tutoring with local NGOs as part of the CAS programme.",
    },
    {
      name: "Model United Nations",
      role: "Delegate & Event Photographer",
      desc: "Delegate for Belgium and Namibia in separate committees, including IPC, and event photographer for the conference.",
    },
    {
      name: "School Council",
      role: "School Council Photographer",
      // ONLY IN [P]: the résumé mentions photography only in the MUN line.
      // Confirm this is a separate role, or delete this entry.
      desc: "Documents school events and student initiatives through photography, capturing moments that celebrate the school community.",
    },
  ],
};

/* ---- Music, sport & competitions (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "",
    name: "Music",
    desc: "Multi-instrumentalist, producer and vocalist. Guitar and drums at an intermediate to advanced level, beats produced in FL Studio, and a formal theory background from IGCSE Music. Holder of the Trinity College London Gold Young Performers Certificate.",
  },
  {
    icon: "",
    name: "Model United Nations",
    desc: "Delegate for Belgium and Namibia across separate committees, including IPC, and event photographer for the conference.",
  },
  {
    icon: "",
    name: "Football",
    desc: "Participates in the Charity League as part of the CAS programme, contributing to community initiatives while developing teamwork, leadership, and a strong sense of social responsibility.",
  },
  {
    icon: "",
    name: "Academic Olympiads",
    desc: "All-India Rank 157 at the SRCC Economics Olympiad (2025), national qualification at the National Finance Olympiad (2024) and the National Mathematics Olympiad.",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Technical",
    items: ["Python", "JavaScript", "Algorithmic Thinking", "Casio fx-CG50"],
  },
  {
    group: "Stack & Tools",
    // Drawn from the project descriptions rather than the résumé's skills line.
    items: ["Next.js", "Supabase / Postgres", "Drizzle ORM", "SQLite", "PWA Development", "Automated Testing"],
  },
  {
    group: "Design & Making",
    items: ["CAD / 3D Modelling", "Blender", "SketchUp", "Rapid Prototyping", "Human-Centred Design"],
  },
  {
    group: "Economics & Finance",
    items: ["Predictive Modelling", "Equity Research", "Economic Reasoning", "Negotiation"],
  },
  {
    group: "Music",
    items: ["Guitar", "Drums", "Vocals", "FL Studio", "Music Theory"],
  },
  {
    group: "Languages",
    items: ["English (Fluent)", "Hindi (Fluent)", "French (Beginner)", "Spanish (Beginner)"],
  },
];

/* ---- Education ---- */

export const EDUCATION = [
  {
    school: "Shiv Nadar School, Gurugram",
    location: "Gurugram, Haryana, India",
    level: "IB Diploma Programme",
    dates: "2027",
    gpa: "", // NOT IN SOURCE: no predicted or final IB score given
    hl: [
      "Economics",
      "Mathematics: Applications & Interpretation",
      "Computer Science",
    ],
    sl: [
      "Global Politics",
      "English Language & Literature",
      "French ab initio",
    ],
    // Flat list for components that read `coursework` rather than hl/sl.
    coursework: [
      "Economics (HL)",
      "Mathematics: Applications & Interpretation (HL)",
      "Computer Science (HL)",
      "Global Politics (SL)",
      "English Language & Literature (SL)",
      "French ab initio (SL)",
    ],
  },
];

/* ---- Test scores ----
   EMPTY ON PURPOSE: neither document contains SAT, AP or IB scores.
   Either supply them or don't render this section.                   */

export const TEST_SCORES = [];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Community Service", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
  { label: "Zenth", href: PROFILE.socials.zenth },
];
