/**
 * Single Source of Truth (SSOT) for all portfolio projects.
 *
 * Both HomeView and PortfolioView import from this module.
 * - HomeView displays items where isCaseStudy === true
 * - PortfolioView displays all items and uses `tech` + `category` for analytics
 *
 * Field schema:
 *   id           - Number (stable identifier)
 *   name         - String (display name)
 *   imageUrl     - String (matches /img/portfolio-{imageUrl}.png)
 *   status       - String (impact-driven description)
 *   tech         - String (comma-separated tech stack for analytics/filters)
 *   tags         - Array<String> (domain + tech badges for card hover display)
 *   github       - String (repo URL or "null")
 *   demo         - String (live URL, case study route, or "null")
 *   isCaseStudy  - Boolean (true = has dedicated case study page)
 *   category     - String (analytics domain bucket)
 */

export const projects = [
  {
    id: 10,
    name: "SnapPack",
    imageUrl: "snappack",
    status:
      "Digitizing the Christopher Guy premium furniture shipping documentation management system. Cuts down media transfer bureaucracy, integrates digital signatures, and slashes file audit search times by up to 95%.",
    tech: "Laravel, Vue.js, MySQL, Tailwind CSS",
    tags: ["Laravel", "Vue.js", "MySQL", "Supply Chain", "Digital Signature"],
    github: "null",
    demo: "/portfolio/snappack",
    isCaseStudy: true,
    category: "Full-stack Manufacturing Systems",
  },
  {
    id: 0,
    name: "Smart Money Intelligence Dashboard",
    imageUrl: "SM",
    status:
      "AI-powered dashboard for IDX stock analysis detecting foreign accumulation patterns with real-time signal recommendations.",
    tech: "Python, Streamlit, Gemini AI, Firebase",
    tags: ["Python", "Streamlit", "Gemini AI", "Firebase", "FinTech"],
    github: "https://github.com/RavenAgtha18/Smart-Money-Intelligence",
    demo: "https://huggingface.co/spaces/ravenagtha18/smart-money-tracker",
    isCaseStudy: false,
    category: "FinTech Intelligence",
  },
  {
    id: 1,
    name: "Protrack System",
    imageUrl: "protrack",
    status:
      "Digitizing production line tracking in real-time, eliminating operational bottlenecks, and providing end-to-end workflow visibility for management.",
    tech: "Laravel, JavaScript, Tailwind, Flowbite",
    tags: ["Laravel", "Vue.js", "MySQL", "Manufacturing", "WIP Tracking"],
    github: "null",
    demo: "/portfolio/protrack",
    isCaseStudy: true,
    category: "Full-stack Manufacturing Systems",
  },
  {
    id: 2,
    name: "Productly",
    imageUrl: "productly",
    status: "Landing page leveraging Bootstrap for responsive UI.",
    tech: "HTML, Bootstrap, JS",
    tags: ["HTML", "Bootstrap", "JS", "Landing Page"],
    github: "https://github.com/RavenAgtha18/slicing-productly.git",
    demo: "https://polite-cat-ca7188.netlify.app/",
    isCaseStudy: false,
    category: "Scripting/Automation",
  },
  {
    id: 3,
    name: "Resto",
    imageUrl: "resto",
    status: "Modern restaurant showcase with clean UI.",
    tech: "HTML, Bootstrap",
    tags: ["HTML", "Bootstrap", "Landing Page"],
    github: "https://github.com/RavenAgtha18/lading-page-resto.git",
    demo: "https://majestic-khapse-51488b.netlify.app/",
    isCaseStudy: false,
    category: "Scripting/Automation",
  },
  {
    id: 4,
    name: "Market Lite Management",
    imageUrl: "market",
    status: "Retail management app with stock and supplier module.",
    tech: "Laravel 10, Bootstrap",
    tags: ["Laravel", "Bootstrap", "MySQL", "Retail"],
    github: "https://github.com/RavenAgtha18/store.git",
    demo: "null",
    isCaseStudy: false,
    category: "Full-stack Manufacturing Systems",
  },
  {
    id: 5,
    name: "Library Management Apps",
    imageUrl: "library",
    status: "Library system featuring catalog and loan transactions.",
    tech: "Laravel 9, Bootstrap, VueJS 3",
    tags: ["Laravel", "Bootstrap", "Vue.js", "MySQL"],
    github: "https://github.com/RavenAgtha18/perpustakaaan.gi",
    demo: "null",
    isCaseStudy: false,
    category: "Full-stack Manufacturing Systems",
  },
  {
    id: 6,
    name: "Webclinic",
    imageUrl: "webclinic",
    status: "Clinic management app for appointments and medication.",
    tech: "Laravel 5, Bootstrap, AngularJs",
    tags: ["Laravel", "Bootstrap", "AngularJs", "Healthcare"],
    github: "null",
    demo: "null",
    isCaseStudy: false,
    category: "Full-stack Manufacturing Systems",
  },
  {
    id: 7,
    name: "Product Quality (QC)",
    imageUrl: "qc",
    status:
      "Digitizing the quality standardization and final product inspection system on the factory floor. Integrates dynamic compliance checklists, automated defect log tracking, and real-time validation gates to ensure zero defects before shipping.",
    tech: "Laravel, Vue.js, Tailwind, MySQL",
    tags: ["Laravel", "Vue.js", "MySQL", "Quality Control", "Manufacturing"],
    github: "null",
    demo: "/portfolio/qcchecklist",
    isCaseStudy: true,
    category: "Full-stack Manufacturing Systems",
  },
  {
    id: 8,
    name: "FinWise",
    imageUrl: "finwise",
    status:
      "Digitizing personal financial management through a precise data architecture. Integrates real-time expense tracking, multi-category budget limit management, and liquidity analytics visualization to prevent budget overruns by 100%.",
    tech: "Laravel, JavaScript, Tailwind, Flowbite",
    tags: ["Laravel", "JavaScript", "Tailwind", "FinTech", "ACID Transactions"],
    github: "null",
    demo: "/portfolio/finwise",
    isCaseStudy: true,
    category: "FinTech Intelligence",
  },
  {
    id: 11,
    name: "Nihongo-App",
    imageUrl: "nihongo",
    status:
      "Digitizing the JFT-Basic A2 Japanese language accelerated practice system. Integrates multi-script database management (Kanji/Kana/Romaji), a real-time score evaluation engine, and interactive drill simulations to track exam readiness metrics accurately.",
    tech: "Laravel, Vue.js, Tailwind, MySQL",
    tags: ["Laravel", "Vue.js", "MySQL", "EdTech", "Localization"],
    github: "null",
    demo: "/portfolio/nihongo",
    isCaseStudy: true,
    category: "Localization Engineering",
  },
  {
    id: 12,
    name: "finish-info",
    imageUrl: "finish-info",
    status:
      "Digitizing fabric list and cutting list management for premium furniture production. Eliminates manual blueprint reading errors, optimizes raw material yield calculations, and minimizes material waste risks.",
    tech: "Laravel, Vue.js, Tailwind, MySQL",
    tags: ["Laravel", "Vue.js", "MySQL", "MES", "Material Optimization"],
    github: "null",
    demo: "/portfolio/finish-info",
    isCaseStudy: true,
    category: "Full-stack Manufacturing Systems",
  },
  {
    id: 9,
    name: "ProScan",
    imageUrl: "stokku",
    status:
      "Digitizing inventory audit and stock opname workflows in manufacturing warehouses. Integrates real-time barcode verification, automatic stock variance calculations, and a data adjustment module (stock adjustment) to trim logging errors to zero.",
    tech: "Laravel, Vue.js, Tailwind, MySQL",
    tags: ["Laravel", "Vue.js", "MySQL", "Warehouse", "Barcode"],
    github: "null",
    demo: "/portfolio/proscan",
    isCaseStudy: true,
    category: "Full-stack Manufacturing Systems",
  },
  {
    id: 13,
    name: "Stokku",
    imageUrl: "stokku1",
    status:
      "Digitizing stock control management and factory material lifecycles. Integrates expiration date monitoring, low-stock threshold notification automation, inter-divisional Material Request modules, and real-time warehouse rack zoning tracking.",
    tech: "Laravel, Vue.js, Tailwind, MySQL",
    tags: ["Laravel", "Vue.js", "MySQL", "Inventory", "Supply Chain"],
    github: "null",
    demo: "/portfolio/stokku",
    isCaseStudy: true,
    category: "Full-stack Manufacturing Systems",
  },
];
