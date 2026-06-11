<template>
  <div class="relative overflow-hidden min-h-screen">
    <!-- Header Section -->
    <section class="pt-20 pb-10 px-6">
      <div class="max-w-7xl mx-auto text-center">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-amber mb-6"
          data-aos="fade-down"
        >
          <FolderOpen class="w-4 h-4 text-amber-400" />
          <span class="text-sm text-amber-300">Portfolio</span>
        </div>

        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
          data-aos="fade-up"
        >
          <span class="gradient-text">Project Intelligence</span>
        </h1>

        <p
          class="text-gray-400 max-w-2xl mx-auto mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Bridging <span class="text-amber-300">Technology</span> and
          <span class="text-amber-300">Business Insight</span> through
          innovative solutions
        </p>

        <!-- View Toggle -->
        <div
          class="flex justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button
            @click="activeMode = 'portfolio'"
            :class="[
              'px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2',
              activeMode === 'portfolio'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/25'
                : 'glass text-gray-300 hover:text-white hover:bg-white/10',
            ]"
          >
            <Grid3x3 class="w-4 h-4" />
            Portfolio View
          </button>
          <button
            @click="activeMode = 'dashboard'"
            :class="[
              'px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2',
              activeMode === 'dashboard'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/25'
                : 'glass text-gray-300 hover:text-white hover:bg-white/10',
            ]"
          >
            <BarChart3 class="w-4 h-4" />
            Analytics
          </button>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid View -->
    <Transition name="fade" mode="out-in">
      <section
        v-if="activeMode === 'portfolio'"
        key="portfolio"
        class="px-6 py-12 max-w-7xl mx-auto"
      >
        <!-- Filter Tags -->
        <div
          class="flex flex-wrap justify-center gap-2 mb-10"
          data-aos="fade-up"
        >
          <button
            v-for="filter in filters"
            :key="filter"
            @click="activeFilter = filter"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
              activeFilter === filter
                ? 'bg-amber-500 text-black'
                : 'glass text-gray-400 hover:text-white hover:bg-white/10',
            ]"
          >
            {{ filter }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <TransitionGroup name="list">
            <div
              v-for="(item, index) in filteredItems"
              :key="item.id"
              class="group relative rounded-2xl overflow-hidden glass transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10"
              :data-aos="'fade-up'"
              :data-aos-delay="index * 50"
            >
              <!-- Image Container -->
              <div class="relative h-48 overflow-hidden">
                <img
                  :src="'/img/portfolio-' + item.imageUrl + '.png'"
                  :alt="item.name"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <!-- Overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"
                ></div>

                <!-- Tech Badge on Image -->
                <div
                  class="absolute top-3 right-3 flex flex-wrap justify-end gap-1"
                >
                  <span
                    v-for="tech in item.tech.split(', ').slice(0, 2)"
                    :key="tech"
                    class="px-2 py-1 rounded-md text-[10px] font-medium glass backdrop-blur-lg"
                    :class="getTechClass(tech)"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- Hover Actions -->
                <div
                  class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <router-link
                    v-if="item.isCaseStudy"
                    :to="item.demo"
                    class="px-4 py-2 rounded-xl bg-amber-500 text-black font-semibold text-sm hover:scale-105 transition-transform flex items-center gap-1.5"
                  >
                    <BookOpen class="w-4 h-4" />
                    Read Case Study
                  </router-link>
                  <template v-else>
                    <a
                      v-if="item.demo !== 'null'"
                      :href="item.demo"
                      target="_blank"
                      class="p-3 rounded-full bg-amber-500 text-black hover:scale-110 transition-transform"
                    >
                      <ExternalLink class="w-5 h-5" />
                    </a>
                    <a
                      v-if="item.github !== 'null'"
                      :href="item.github"
                      target="_blank"
                      class="p-3 rounded-full bg-white/10 text-white hover:scale-110 transition-transform"
                    >
                      <Github class="w-5 h-5" />
                    </a>
                  </template>
                </div>
              </div>

              <!-- Content -->
              <div class="p-5">
                <h3
                  class="font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-1"
                >
                  {{ item.name }}
                </h3>
                <p class="text-sm text-gray-400 line-clamp-2 mb-4">
                  {{ item.status }}
                </p>

                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="tech in item.tech.split(', ').slice(0, 3)"
                    :key="tech"
                    class="px-2 py-1 rounded-md text-[10px] font-medium"
                    :class="getTechClass(tech)"
                  >
                    {{ tech }}
                  </span>
                  <span
                    v-if="item.tech.split(', ').length > 3"
                    class="px-2 py-1 rounded-md text-[10px] font-medium bg-white/5 text-gray-400"
                  >
                    +{{ item.tech.split(", ").length - 3 }}
                  </span>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </section>

      <!-- Analytics Dashboard View -->
      <section v-else key="dashboard" class="px-6 py-12 max-w-7xl mx-auto">
        <!-- Stats Cards -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          data-aos="fade-up"
        >
          <div
            v-for="(insight, index) in insights"
            :key="insight.label"
            class="relative p-6 rounded-2xl glass hover:glass-amber transition-all duration-300 hover:-translate-y-1 group"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
          >
            <div
              class="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity"
            >
              <component :is="insight.icon" class="w-16 h-16 text-amber-400" />
            </div>
            <p class="text-sm text-amber-400 mb-1">{{ insight.label }}</p>
            <p class="text-4xl font-bold text-white">{{ insight.value }}</p>
          </div>
        </div>

        <!-- Charts Grid -->
        <div class="grid md:grid-cols-2 gap-8">
          <div
            class="p-6 rounded-2xl glass relative overflow-hidden"
            data-aos="fade-up"
          >
            <h3
              class="text-amber-400 mb-6 text-sm font-semibold flex items-center gap-2"
            >
              <BarChart3 class="w-4 h-4" />
              Technology Usage
            </h3>

            <div class="space-y-4">
              <div
                v-for="tech in aggregatedTech"
                :key="tech.name"
                class="relative group"
                @mouseenter="hoveredTech = tech.name"
                @mouseleave="hoveredTech = null"
              >
                <div class="flex justify-between items-center mb-1.5">
                  <div class="flex items-center gap-2">
                    <component :is="tech.icon" class="w-4 h-4 text-amber-400" />
                    <span
                      class="text-xs font-semibold text-gray-300 group-hover:text-amber-400 transition-colors"
                      >{{ tech.name }}</span
                    >
                  </div>
                  <span class="text-xs font-mono text-amber-400 font-semibold"
                    >{{ tech.percentage }}%</span
                  >
                </div>

                <!-- Progress Bar -->
                <div
                  class="w-full bg-white/5 h-2.5 rounded-full overflow-hidden border border-white/5 relative"
                >
                  <div
                    class="h-full rounded-full transition-all duration-1000 ease-out"
                    :class="tech.colorClass"
                    :style="{ width: tech.percentage + '%' }"
                  ></div>
                </div>

                <!-- Tooltip -->
                <Transition name="fade">
                  <div
                    v-if="hoveredTech === tech.name"
                    class="absolute left-1/2 -translate-x-1/2 -top-10 bg-amber-500 text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg z-10 whitespace-nowrap animate-fade-in"
                  >
                    {{ tech.name }}: Used in {{ tech.count }}
                    {{ tech.count > 1 ? "Projects" : "Project" }}
                    <div
                      class="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-amber-500"
                    ></div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>

          <div
            class="p-6 rounded-2xl glass relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3
              class="text-amber-400 mb-6 text-sm font-semibold flex items-center gap-2"
            >
              <PieChartIcon class="w-4 h-4" />
              Project Type Distribution
            </h3>

            <!-- CSS Conic-Gradient Donut Ring -->
            <div class="flex justify-center mb-6">
              <div class="relative w-40 h-40">
                <div
                  class="absolute inset-0 rounded-full border-8 border-white/5"
                  :style="{ background: donutGradientStyle }"
                ></div>
                <div
                  class="absolute inset-4 rounded-full bg-[#0a0a0a] flex flex-col items-center justify-center"
                >
                  <span class="text-2xl font-bold text-white font-mono">{{
                    items.length
                  }}</span>
                  <span
                    class="text-[10px] text-gray-400 uppercase tracking-wider"
                    >Projects</span
                  >
                </div>
              </div>
            </div>

            <!-- Sleek Segmented Progress Bar -->
            <div
              class="w-full h-3 rounded-full overflow-hidden flex mb-6 border border-white/5 bg-white/5"
            >
              <div
                v-for="cat in projectTypeDistribution"
                :key="cat.name"
                class="h-full transition-all duration-500 hover:opacity-80 cursor-pointer relative"
                :class="cat.color"
                :style="{ width: cat.percentage + '%' }"
                @mouseenter="hoveredCat = cat.name"
                @mouseleave="hoveredCat = null"
              >
                <!-- Tooltip on Segment -->
                <Transition name="fade">
                  <div
                    v-if="hoveredCat === cat.name"
                    class="absolute left-1/2 -translate-x-1/2 -top-10 bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg z-10 whitespace-nowrap"
                  >
                    {{ cat.name }}: {{ cat.percentage }}%
                  </div>
                </Transition>
              </div>
            </div>

            <!-- Category Cards Grid -->
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="cat in projectTypeDistribution"
                :key="cat.name"
                class="p-3.5 rounded-xl border transition-all duration-300 relative group overflow-hidden"
                :class="[
                  cat.bgColor,
                  hoveredCatCard === cat.name ? 'scale-[1.02] shadow-lg' : '',
                ]"
                @mouseenter="hoveredCatCard = cat.name"
                @mouseleave="hoveredCatCard = null"
              >
                <div class="flex items-center justify-between mb-2">
                  <component
                    :is="cat.icon"
                    class="w-5 h-5"
                    :class="cat.textColor"
                  />
                  <span class="text-lg font-bold text-white font-mono"
                    >{{ cat.percentage }}%</span
                  >
                </div>
                <h4
                  class="text-xs font-semibold text-gray-300 leading-tight group-hover:text-white transition-colors mb-1"
                >
                  {{ cat.name }}
                </h4>
                <p class="text-[10px] text-gray-500 font-mono">
                  {{ cat.count }} {{ cat.count > 1 ? "Projects" : "Project" }}
                </p>

                <!-- Expanded Hover Panel (Shows project names in that category) -->
                <Transition name="fade">
                  <div
                    v-if="hoveredCatCard === cat.name"
                    class="absolute inset-0 bg-black/95 p-3 flex flex-col justify-center"
                  >
                    <span
                      class="text-[9px] uppercase tracking-wider text-amber-400 font-bold mb-1"
                      >Projects:</span
                    >
                    <ul class="space-y-0.5">
                      <li
                        v-for="proj in items
                          .filter(
                            (i) =>
                              (i.category ||
                                'Full-stack Manufacturing Systems') ===
                              cat.name,
                          )
                          .slice(0, 4)"
                        :key="proj.id"
                        class="text-[10px] text-gray-300 truncate"
                      >
                        • {{ proj.name }}
                      </li>
                      <li
                        v-if="
                          items.filter(
                            (i) =>
                              (i.category ||
                                'Full-stack Manufacturing Systems') ===
                              cat.name,
                          ).length > 4
                        "
                        class="text-[9px] text-gray-500 font-mono"
                      >
                        +{{
                          items.filter(
                            (i) =>
                              (i.category ||
                                "Full-stack Manufacturing Systems") ===
                              cat.name,
                          ).length - 4
                        }}
                        more
                      </li>
                    </ul>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  FolderOpen,
  Grid3x3,
  BarChart3,
  ExternalLink,
  Github,
  PieChart as PieChartIcon,
  Layers,
  Cpu,
  Code2,
  BookOpen,
  Terminal,
  Braces,
  Database,
  Wind,
  Box,
  Sparkles,
} from "lucide-vue-next";

const activeMode = ref("portfolio");
const activeFilter = ref("All");

const filters = ["All", "Laravel", "Vue.js", "Python", "Tailwind"];

const items = [
  {
    id: 10,
    name: "SnapPack",
    imageUrl: "snappack",
    status:
      "Digitizing the Christopher Guy premium furniture shipping documentation management system. Cuts down media transfer bureaucracy, integrates digital signatures, and slashes file audit search times by up to 95%.",
    tech: "Laravel, Vue.js, MySQL, Tailwind CSS",
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
      "AI-powered dashboard detecting foreign accumulation (Smart Money) in IDX with real-time signal recommendations.",
    tech: "Python, Streamlit, Gemini 2.5 AI, Firebase",
    github: "https://github.com/RavenAgtha18/Smart-Money-Intelligence",
    demo: "https://huggingface.co/spaces/ravenagtha18/smart-money-tracker",
    category: "FinTech Intelligence",
  },
  {
    id: 1,
    name: "Protrack System",
    imageUrl: "protrack",
    status:
      "Digitizing production line tracking in real-time, eliminating operational bottlenecks, and providing end-to-end workflow visibility for management.",
    tech: "JavaScript, Tailwind, Laravel, Flowbite",
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
    github: "https://github.com/RavenAgtha18/slicing-productly.git",
    demo: "https://polite-cat-ca7188.netlify.app/",
    category: "Scripting/Automation",
  },
  {
    id: 3,
    name: "Resto",
    imageUrl: "resto",
    status: "Modern restaurant showcase with clean UI.",
    tech: "HTML, Bootstrap",
    github: "https://github.com/RavenAgtha18/lading-page-resto.git",
    demo: "https://majestic-khapse-51488b.netlify.app/",
    category: "Scripting/Automation",
  },
  {
    id: 4,
    name: "Market Lite Management",
    imageUrl: "market",
    status: "Retail management app with stock and supplier module.",
    tech: "Laravel 10, Bootstrap",
    github: "https://github.com/RavenAgtha18/store.git",
    demo: "null",
    category: "Full-stack Manufacturing Systems",
  },
  {
    id: 5,
    name: "Library Management Apps",
    imageUrl: "library",
    status: "Library system featuring catalog and loan transactions.",
    tech: "Laravel 9, Bootstrap, VueJS 3",
    github: "https://github.com/RavenAgtha18/perpustakaaan.gi",
    demo: "null",
    category: "Full-stack Manufacturing Systems",
  },
  {
    id: 6,
    name: "Webclinic",
    imageUrl: "webclinic",
    status: "Clinic management app for appointments and medication.",
    tech: "Laravel 5, Bootstrap, AngularJs",
    github: "null",
    demo: "null",
    category: "Full-stack Manufacturing Systems",
  },
  {
    id: 7,
    name: "Product Quality (QC)",
    imageUrl: "qc",
    status:
      "Digitizing the quality standardization and final product inspection system on the factory floor. Integrates dynamic compliance checklists, automated defect log tracking, and real-time validation gates to ensure zero defects before shipping.",
    tech: "Laravel, Vue.js, Tailwind, MySQL",
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
    github: "null",
    demo: "/portfolio/stokku",
    isCaseStudy: true,
    category: "Full-stack Applications",
  },
];

const filteredItems = computed(() => {
  if (activeFilter.value === "All") return items;
  return items.filter((item) =>
    item.tech.toLowerCase().includes(activeFilter.value.toLowerCase()),
  );
});

const insights = computed(() => [
  { label: "Total Projects", value: items.length, icon: Layers },
  {
    label: "AI Projects",
    value: items.filter((i) => i.tech.includes("AI")).length,
    icon: Cpu,
  },
  {
    label: "Laravel Apps",
    value: items.filter((i) => i.tech.includes("Laravel")).length,
    icon: Code2,
  },
]);

const getTechClass = (tech) => {
  const map = {
    Laravel: "bg-red-500/20 text-red-400 border border-red-500/30",
    Tailwind: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
    Bootstrap: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
    VueJS: "bg-green-500/20 text-green-400 border border-green-500/30",
    Vue: "bg-green-500/20 text-green-400 border border-green-500/30",
    Python: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    AI: "bg-pink-500/20 text-pink-400 border border-pink-500/30",
    JavaScript: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    JS: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    Streamlit: "bg-rose-500/20 text-rose-400 border border-rose-500/30",
    Firebase: "bg-orange-500/20 text-orange-400 border border-orange-500/30",
    Flowbite: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  };
  for (const key in map) if (tech.includes(key)) return map[key];
  return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
};

const hoveredTech = ref(null);
const hoveredCat = ref(null);
const hoveredCatCard = ref(null);

const aggregatedTech = computed(() => {
  const techMap = {
    Laravel: {
      count: 0,
      icon: Layers,
      colorClass: "bg-gradient-to-r from-red-500 to-orange-500",
    },
    "Vue.js": {
      count: 0,
      icon: Layers,
      colorClass: "bg-gradient-to-r from-green-400 to-emerald-500",
    },
    Tailwind: {
      count: 0,
      icon: Wind,
      colorClass: "bg-gradient-to-r from-cyan-400 to-blue-500",
    },
    JavaScript: {
      count: 0,
      icon: Braces,
      colorClass: "bg-gradient-to-r from-amber-400 to-yellow-500",
    },
    Bootstrap: {
      count: 0,
      icon: Grid3x3,
      colorClass: "bg-gradient-to-r from-purple-500 to-indigo-500",
    },
    Python: {
      count: 0,
      icon: Terminal,
      colorClass: "bg-gradient-to-r from-blue-500 to-indigo-500",
    },
    Firebase: {
      count: 0,
      icon: Database,
      colorClass: "bg-gradient-to-r from-orange-400 to-red-500",
    },
    Flowbite: {
      count: 0,
      icon: Box,
      colorClass: "bg-gradient-to-r from-cyan-500 to-indigo-500",
    },
  };

  items.forEach((item) => {
    const techString = item.tech.toLowerCase();
    if (techString.includes("laravel")) techMap["Laravel"].count++;
    if (techString.includes("vue")) techMap["Vue.js"].count++;
    if (techString.includes("tailwind")) techMap["Tailwind"].count++;
    if (
      techString.includes("javascript") ||
      techString.includes("js") ||
      techString.includes("angularjs")
    ) {
      techMap["JavaScript"].count++;
    }
    if (techString.includes("bootstrap")) techMap["Bootstrap"].count++;
    if (techString.includes("python")) techMap["Python"].count++;
    if (techString.includes("firebase")) techMap["Firebase"].count++;
    if (techString.includes("flowbite")) techMap["Flowbite"].count++;
  });

  const total = items.length;

  return Object.entries(techMap)
    .map(([name, data]) => ({
      name,
      count: data.count,
      percentage: total > 0 ? Math.round((data.count / total) * 100) : 0,
      icon: data.icon,
      colorClass: data.colorClass,
    }))
    .sort((a, b) => b.count - a.count);
});

const projectTypeDistribution = computed(() => {
  const categories = {
    "Full-stack Manufacturing Systems": {
      count: 0,
      color: "bg-gradient-to-r from-amber-400 to-amber-600",
      textColor: "text-amber-400",
      bgColor: "bg-amber-500/10 border-amber-500/20 hover:border-amber-500/40",
      icon: Layers,
      hexColor: "#f59e0b",
    },
    "FinTech Intelligence": {
      count: 0,
      color: "bg-gradient-to-r from-emerald-400 to-emerald-600",
      textColor: "text-emerald-400",
      bgColor:
        "bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/40",
      icon: Cpu,
      hexColor: "#34d399",
    },
    "Localization Engineering": {
      count: 0,
      color: "bg-gradient-to-r from-indigo-400 to-indigo-600",
      textColor: "text-indigo-400",
      bgColor:
        "bg-indigo-500/10 border-indigo-500/20 hover:border-indigo-500/40",
      icon: Sparkles,
      hexColor: "#818cf8",
    },
    "Scripting/Automation": {
      count: 0,
      color: "bg-gradient-to-r from-purple-400 to-purple-600",
      textColor: "text-purple-400",
      bgColor:
        "bg-purple-500/10 border-purple-500/20 hover:border-purple-500/40",
      icon: Terminal,
      hexColor: "#a78bfa",
    },
  };

  items.forEach((item) => {
    const cat = item.category || "Full-stack Manufacturing Systems";
    if (categories[cat]) {
      categories[cat].count++;
    }
  });

  const total = items.length;
  return Object.entries(categories).map(([name, data]) => ({
    name,
    count: data.count,
    percentage: total > 0 ? Math.round((data.count / total) * 100) : 0,
    color: data.color,
    textColor: data.textColor,
    bgColor: data.bgColor,
    icon: data.icon,
    hexColor: data.hexColor,
  }));
});

const donutGradientStyle = computed(() => {
  const dist = projectTypeDistribution.value;
  let accumulated = 0;
  const stops = [];

  dist.forEach((cat) => {
    const start = accumulated;
    const end = accumulated + cat.percentage;
    stops.push(`${cat.hexColor} ${start}% ${end}%`);
    accumulated = end;
  });

  // Fill remaining if rounding causes < 100%
  if (accumulated < 100) {
    stops.push(`rgba(255,255,255,0.05) ${accumulated}% 100%`);
  }

  return `conic-gradient(${stops.join(", ")})`;
});
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

.list-move {
  transition: transform 0.4s ease;
}
</style>
