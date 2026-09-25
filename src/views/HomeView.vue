<template>
  <main
    @mousemove="handleMouseMove"
    class="relative min-h-screen transition-colors duration-300 overflow-hidden"
    :class="isDark ? 'bg-[#09090b]/85' : 'bg-slate-50/75'"
  >
    <!-- Dynamic Ambient Grid & Nebula Aurora Background (Eliminates Empty Black Void) -->
    <InteractiveGridBackground />

    <!-- Interactive Cursor Ambient Spotlight (Linear / Vercel style luxury glow) -->
    <div
      class="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-300"
      :style="spotlightStyle"
    ></div>

    <!-- Theme Toggle -->
    <button
      @click="toggleTheme"
      class="fixed top-6 right-6 z-50 p-2.5 rounded-xl border transition-all duration-200 hover:scale-105"
      :class="isDark ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:text-white' : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm'"
      aria-label="Toggle Theme"
    >
      <Sun v-if="!isDark" class="w-4 h-4 text-amber-600" />
      <Moon v-else class="w-4 h-4 text-amber-300" />
    </button>

    <!-- Hero Content (Split Layout: High-Impact Typography & Interactive 3D WebGL Core) -->
    <section class="relative z-10 min-h-screen flex items-center px-6 py-20">
      <div class="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left Column: Editorial & Value Proposition -->
        <div class="lg:col-span-7 text-center lg:text-left">
          <!-- Status / Positioning Eyebrow with Live Radar Ping -->
          <div
            ref="greetingRef"
            class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-mono mb-8 opacity-0 transition-transform duration-300 hover:scale-[1.02]"
            :class="isDark ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 shadow-sm' : 'bg-white border-slate-200 text-slate-700 shadow-sm'"
          >
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Bridge SE &amp; Technical BA · Industrial Systems</span>
          </div>

          <!-- Main Heading with Subtle Metallic Sheen -->
          <h1 ref="headingRef" class="overflow-hidden mb-4">
            <span
              ref="line1"
              class="block text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight opacity-0 translate-y-4 shimmer-name"
              :class="isDark ? 'text-zinc-100' : 'text-slate-900'"
            >
              Riki Andi Alfiyanto
            </span>
          </h1>

          <!-- Subtitle & Sharp Positioning -->
          <div ref="subtitleRef" class="opacity-0">
            <p class="text-base sm:text-lg font-semibold mb-2" :class="isDark ? 'text-zinc-200' : 'text-slate-800'">
              Engineering Bridge Between Business Goals &amp; Industrial Systems
            </p>
            <p class="text-xs sm:text-sm max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
              Translating complex frontline manufacturing requirements and shop-floor bottlenecks into resilient, production-grade automation systems.
            </p>

            <!-- Typewriter Console Line -->
            <div
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border font-mono text-xs max-w-md transition-colors duration-200 hover:border-amber-500/50"
              :class="isDark ? 'bg-zinc-900/60 border-zinc-800 text-amber-300' : 'bg-slate-100 border-slate-200 text-slate-800'"
            >
              <Code2 class="w-3.5 h-3.5 text-amber-500 flex-shrink-0 animate-pulse" />
              <span class="truncate">
                {{ displayedText }}<span class="animate-pulse font-bold text-amber-500">|</span>
              </span>
            </div>
          </div>

          <!-- Action Links -->
          <div
            ref="ctaRef"
            class="flex flex-wrap justify-center lg:justify-start gap-3 mt-8 opacity-0"
          >
            <a
              href="https://wa.me/6285175180821"
              target="_blank"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/10"
              :class="isDark ? 'bg-zinc-100 text-zinc-900 hover:bg-white' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm'"
            >
              <MessageCircle class="w-4 h-4" />
              <span>Contact Me</span>
            </a>
            <a
              href="/cv_rikiandi.pdf"
              target="_blank"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-200 hover:-translate-y-0.5"
              :class="isDark ? 'bg-zinc-900/60 text-zinc-300 border-zinc-800 hover:border-zinc-700' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 shadow-sm'"
            >
              <FileText class="w-4 h-4" />
              <span>Resume</span>
            </a>
            <router-link
              to="/portfolio"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-200 hover:-translate-y-0.5"
              :class="isDark ? 'bg-zinc-900/60 text-zinc-300 border-zinc-800 hover:border-zinc-700' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 shadow-sm'"
            >
              <FolderOpen class="w-4 h-4" />
              <span>All Projects</span>
            </router-link>
          </div>

          <!-- Minimal Metrics Row -->
          <div
            ref="statsRef"
            class="flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-12 mt-10 opacity-0 text-left font-mono"
          >
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="flex flex-col group cursor-default transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span
                class="text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-200 group-hover:text-amber-400"
                :class="isDark ? 'text-zinc-100' : 'text-slate-900'"
              >
                {{ stat.value }}
              </span>
              <span class="text-[11px]" :class="isDark ? 'text-zinc-500' : 'text-slate-500'">
                {{ stat.label }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right Column: Interactive Holographic Portrait & 3D WebGL Core -->
        <div class="lg:col-span-5 flex flex-col items-center">
          <!-- View Toggle Switch (Holo ID vs 3D Core) -->
          <div class="inline-flex items-center p-1 rounded-xl border mb-3 text-xs font-mono" :class="isDark ? 'bg-zinc-900/80 border-zinc-800' : 'bg-slate-100 border-slate-200'">
            <button
              @click="activeHeroVisual = 'holo'"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 font-semibold"
              :class="activeHeroVisual === 'holo'
                ? isDark ? 'bg-zinc-800 text-amber-300 shadow-sm' : 'bg-white text-amber-800 shadow-sm'
                : isDark ? 'text-zinc-400 hover:text-zinc-200' : 'text-slate-500 hover:text-slate-900'"
            >
              <UserCheck class="w-3.5 h-3.5" />
              <span>Holographic ID</span>
            </button>
            <button
              @click="activeHeroVisual = 'core3d'"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 font-semibold"
              :class="activeHeroVisual === 'core3d'
                ? isDark ? 'bg-zinc-800 text-amber-300 shadow-sm' : 'bg-white text-amber-800 shadow-sm'
                : isDark ? 'text-zinc-400 hover:text-zinc-200' : 'text-slate-500 hover:text-slate-900'"
            >
              <Layers class="w-3.5 h-3.5" />
              <span>3D Geometry Core</span>
            </button>
          </div>

          <!-- Active Visual Container -->
          <div class="w-full flex justify-center">
            <!-- 1. Holographic Avatar Card with 3D Tilt, Holo-Foil & 4 Sensor Lenses -->
            <HolographicAvatarCard v-if="activeHeroVisual === 'holo'" />

            <!-- 2. Three.js Interactive 3D Canvas -->
            <div
              v-else
              class="relative w-full rounded-2xl border overflow-hidden p-2 transition-all duration-300"
              :class="isDark ? 'bg-zinc-950/60 border-zinc-800/80 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'"
            >
              <IndustrialCanvas3D />
              <!-- Profile Inset Chip -->
              <div class="absolute top-4 left-4 flex items-center gap-3 p-1.5 pr-3 rounded-full border backdrop-blur-md" :class="isDark ? 'bg-zinc-900/80 border-zinc-700/60' : 'bg-white/80 border-slate-200'">
                <div class="w-8 h-8 rounded-full overflow-hidden border" :class="isDark ? 'border-zinc-700' : 'border-slate-300'">
                  <img src="/img/profile.jpg" alt="Riki Andi Alfiyanto" class="w-full h-full object-cover" />
                </div>
                <div class="text-[10px] font-mono leading-tight">
                  <span class="font-bold block" :class="isDark ? 'text-zinc-200' : 'text-slate-800'">Riki Andi Alfiyanto</span>
                  <span :class="isDark ? 'text-amber-400' : 'text-amber-700'">Software Engineer &amp; Technical BA</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Domain Focus Chips Below Canvas -->
          <div
            ref="domainRef"
            class="flex flex-wrap items-center justify-center gap-2 mt-4 opacity-0"
          >
            <span
              v-for="domain in domains"
              :key="domain.label"
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono border transition-all duration-200 hover:border-amber-500/40"
              :class="isDark ? 'bg-zinc-900/40 text-zinc-400 border-zinc-800' : 'bg-white text-slate-600 border-slate-200 shadow-sm'"
            >
              <component :is="domain.icon" class="w-3 h-3 text-amber-500" />
              {{ domain.label }}
            </span>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        ref="scrollIndicatorRef"
        class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-0"
      >
        <span class="text-[10px] uppercase font-mono tracking-widest" :class="isDark ? 'text-zinc-600' : 'text-slate-400'">
          Scroll
        </span>
        <ChevronDown class="w-4 h-4 text-amber-500/80 animate-bounce" />
      </div>
    </section>

    <!-- Infinite Engineering Marquee (Gen Z Tech Touch - Expensive Linear Style) -->
    <section
      class="relative z-10 py-5 border-y overflow-hidden"
      :class="isDark ? 'border-zinc-800/80 bg-zinc-950/40' : 'border-slate-200/80 bg-slate-100/50'"
    >
      <div class="marquee-mask flex overflow-hidden select-none">
        <div class="marquee-track flex items-center gap-10 whitespace-nowrap text-xs font-mono py-1" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
          <span v-for="(item, i) in marqueeItems" :key="'m1-' + i" class="inline-flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500/80"></span>
            <span>{{ item }}</span>
          </span>
        </div>
        <div aria-hidden="true" class="marquee-track flex items-center gap-10 whitespace-nowrap text-xs font-mono py-1" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
          <span v-for="(item, i) in marqueeItems" :key="'m2-' + i" class="inline-flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500/80"></span>
            <span>{{ item }}</span>
          </span>
        </div>
      </div>
    </section>

    <!-- Real-Time Telemetry Bento Grid (Solves Empty Space & Proves Bridge SE Mindset) -->
    <section class="relative z-10 py-16 px-6 border-b" :class="isDark ? 'border-zinc-800/80' : 'border-slate-200'">
      <div class="max-w-6xl mx-auto">
        <div class="mb-8 text-center sm:text-left">
          <span class="text-[11px] font-mono uppercase tracking-wider font-semibold" :class="isDark ? 'text-amber-400' : 'text-amber-800'">
            Executive Dashboard
          </span>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mt-1" :class="isDark ? 'text-white' : 'text-slate-900'">
            Live Industrial Telemetry &amp; Protocol Matrix
          </h2>
          <p class="text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
            Real-time synchronization across Indonesian factory shop-floors and Japanese client operations with sub-30ms transactional reliability.
          </p>
        </div>

        <TelemetryBentoGrid />
      </div>
    </section>

    <!-- Global Delivery 3D Orbital Matrix (Proves International Reach & Semarang Base) -->
    <section class="relative z-10 py-16 px-6 border-b" :class="isDark ? 'border-zinc-800/80 bg-zinc-950/30' : 'border-slate-200/80 bg-slate-50/50'">
      <div class="max-w-6xl mx-auto">
        <div class="mb-8 text-center sm:text-left">
          <span class="text-[11px] font-mono uppercase tracking-wider font-semibold" :class="isDark ? 'text-amber-400' : 'text-amber-800'">
            Global Operations &amp; Reach
          </span>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mt-1" :class="isDark ? 'text-white' : 'text-slate-900'">
            Cross-Border Systems &amp; Target Delivery Network
          </h2>
          <p class="text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
            Headquartered in Semarang, Indonesia: architecting production systems for local manufacturing hubs, targeting Japanese precision engineering (Monozukuri), and prepared for international distributed delivery across APAC, US, and Europe.
          </p>
        </div>

        <GlobalTelemetryGlobe />
      </div>
    </section>

    <!-- Interactive Live Bridge Telemetry Simulator (The Ultimate Technical BA Showcase) -->
    <section class="relative z-10 py-20 px-6 border-b" :class="isDark ? 'border-zinc-800/80' : 'border-slate-200'">
      <div class="max-w-6xl mx-auto">
        <div class="mb-10 text-center sm:text-left">
          <span class="text-[11px] font-mono uppercase tracking-wider font-semibold" :class="isDark ? 'text-amber-400' : 'text-amber-800'">
            Live Architecture Simulator
          </span>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mt-1" :class="isDark ? 'text-white' : 'text-slate-900'">
            Interactive Factory-to-Cloud Telemetry
          </h2>
          <p class="text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
            Experience how Bridge SE middleware orchestrates real-time industrial events: click the triggers below to route data packets from shop-floor physical hardware into ACID relational database pipelines.
          </p>
        </div>

        <!-- Simulator Component -->
        <BridgeSimulator />
      </div>
    </section>

    <!-- Interactive Developer & Recruiter Terminal (Gen Z CLI Experience) -->
    <section class="relative z-10 py-16 px-6 border-b" :class="isDark ? 'border-zinc-800/80 bg-zinc-950/20' : 'border-slate-200/80 bg-slate-100/30'">
      <div class="max-w-6xl mx-auto">
        <div class="mb-8 text-center sm:text-left">
          <span class="text-[11px] font-mono uppercase tracking-wider font-semibold" :class="isDark ? 'text-amber-400' : 'text-amber-800'">
            Interactive Developer Shell
          </span>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mt-1" :class="isDark ? 'text-white' : 'text-slate-900'">
            Bridge SE Interactive Terminal Console
          </h2>
          <p class="text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
            Explore architecture specs, query simulated live telemetry, or trigger the celebratory recruiter protocol by typing directly into the CLI.
          </p>
        </div>

        <BridgeTerminal />
      </div>
    </section>

    <!-- Bridge SE Methodology Pipeline (Proves BA / Bridge Mindset) -->
    <section class="relative z-10 py-16 px-6 border-b" :class="isDark ? 'border-zinc-800/80 bg-zinc-950/30' : 'border-slate-200/80 bg-slate-50/50'">
      <div class="max-w-6xl mx-auto">
        <div class="mb-10 text-center sm:text-left">
          <span class="text-[11px] font-mono uppercase tracking-wider font-semibold" :class="isDark ? 'text-amber-400' : 'text-amber-800'">
            Execution Methodology
          </span>
          <h2 class="text-xl sm:text-2xl font-bold tracking-tight mt-1" :class="isDark ? 'text-white' : 'text-slate-900'">
            How a Bridge SE Delivers Impact
          </h2>
          <p class="text-xs sm:text-sm mt-1" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
            Connecting frontline shop-floor realities with enterprise software architecture.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="step in methodology"
            :key="step.number"
            class="p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40"
            :class="isDark ? 'border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/70' : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'"
          >
            <div class="flex items-center justify-between mb-3">
              <span class="font-mono text-xs font-bold text-amber-500">{{ step.number }}</span>
              <component :is="step.icon" class="w-4 h-4 text-zinc-400" />
            </div>
            <h3 class="text-sm font-bold mb-1.5" :class="isDark ? 'text-zinc-100' : 'text-slate-900'">{{ step.title }}</h3>
            <p class="text-xs leading-relaxed" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Curated Flagship Projects (Highlights Only on Home to Stay Clean & Minimalist) -->
    <section class="relative z-10 py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div
              class="inline-flex items-center gap-1.5 text-xs font-mono font-medium uppercase tracking-wider mb-2"
              :class="isDark ? 'text-amber-400' : 'text-amber-800'"
            >
              <Briefcase class="w-3.5 h-3.5 text-amber-500" />
              Featured Flagships
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-1" :class="isDark ? 'text-white' : 'text-slate-900'">
              Selected Case Studies
            </h2>
            <p class="text-xs sm:text-sm" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
              Curated highlights representing logistics digitization, production tracking, and financial tools.
            </p>
          </div>

          <router-link
            to="/portfolio"
            class="group inline-flex items-center gap-1.5 text-xs font-mono font-semibold transition-colors flex-shrink-0"
            :class="isDark ? 'text-amber-400 hover:text-amber-300' : 'text-amber-800 hover:text-amber-900'"
          >
            <span>View All (10+ Projects)</span>
            <ArrowRight class="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </router-link>
        </div>

        <!-- Flagship Projects Grid (3 Curated Cards) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CaseStudyCard
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
          />
        </div>

        <!-- Full Catalog Banner CTA -->
        <div
          class="mt-12 text-center p-8 rounded-xl border transition-all duration-300 hover:border-zinc-700"
          :class="isDark ? 'border-zinc-800/80 bg-zinc-900/30' : 'border-slate-200 bg-white shadow-sm'"
        >
          <h3 class="text-base font-semibold mb-1.5" :class="isDark ? 'text-zinc-100' : 'text-slate-900'">
            Looking for more specialized manufacturing systems?
          </h3>
          <p class="text-xs max-w-lg mx-auto mb-5 leading-relaxed" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
            Explore full case studies including barcode inventory stock opname (ProScan), quality control checklists (QC), and fabric cutting optimization (finish-info).
          </p>
          <router-link
            to="/portfolio"
            class="group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/10"
            :class="isDark ? 'bg-zinc-100 text-zinc-950 hover:bg-white' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm'"
          >
            <span>Explore Complete Architecture Catalog</span>
            <ArrowRight class="w-3.5 h-3.5 text-amber-500 transition-transform duration-200 group-hover:translate-x-1" />
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useTheme } from "@/composables/useTheme";
import { gsap } from "gsap";
import CaseStudyCard from "@/components/CaseStudyCard.vue";
import IndustrialCanvas3D from "@/components/IndustrialCanvas3D.vue";
import HolographicAvatarCard from "@/components/HolographicAvatarCard.vue";
import BridgeSimulator from "@/components/BridgeSimulator.vue";
import InteractiveGridBackground from "@/components/InteractiveGridBackground.vue";
import TelemetryBentoGrid from "@/components/TelemetryBentoGrid.vue";
import GlobalTelemetryGlobe from "@/components/GlobalTelemetryGlobe.vue";
import BridgeTerminal from "@/components/BridgeTerminal.vue";
import {
  Sun,
  Moon,
  Code2,
  MessageCircle,
  FileText,
  FolderOpen,
  Briefcase,
  ChevronDown,
  ArrowRight,
  Factory,
  Wallet,
  Languages,
  Users,
  Database,
  CheckCircle2,
  UserCheck,
  Layers,
} from "lucide-vue-next";

// Theme
const { isDark, toggleTheme } = useTheme();

// Hero Visual Mode
const activeHeroVisual = ref('holo');

// Refs
const greetingRef = ref(null);
const line1 = ref(null);
const subtitleRef = ref(null);
const ctaRef = ref(null);
const statsRef = ref(null);
const domainRef = ref(null);
const scrollIndicatorRef = ref(null);

// Interactive Cursor Spotlight Coordinates
const mouseX = ref(-1000);
const mouseY = ref(-1000);

const handleMouseMove = (e) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
};

const spotlightStyle = computed(() => {
  const glow = isDark.value
    ? "rgba(245, 158, 11, 0.055)"
    : "rgba(245, 158, 11, 0.035)";
  return {
    background: `radial-gradient(650px circle at ${mouseX.value}px ${mouseY.value}px, ${glow}, transparent 75%)`,
  };
});

// Typewriter
const texts = [
  "Architecting enterprise MES & ERP integrations...",
  "Bridging Japanese IT standards with global execution...",
  "Designing relational schemas for supply chain traceability...",
  "Delivering zero-defect industrial automation at scale...",
  "Translating 要件定義 into production-grade SQL pipelines...",
  "Orchestrating cross-cultural agile delivery cycles...",
];
const displayedText = ref("");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterTimeout = null;

// Stats
const stats = [
  { value: "10+", label: "Systems Delivered" },
  { value: "1+", label: "Years Bridge SE" },
  { value: "5+", label: "Manufacturing Clients" },
];

// Domain Expertise Badges
const domains = [
  {
    label: "MES / Manufacturing Systems",
    icon: Factory,
  },
  {
    label: "FinTech & Valuation Portals",
    icon: Wallet,
  },
  {
    label: "Localization Engineering",
    icon: Languages,
  },
];

// Marquee Tech Stack Items
const marqueeItems = [
  "Manufacturing Execution Systems (MES)",
  "Laravel 11 & Vue.js 3 Ecosystem",
  "Shop-Floor Barcode Scanners & Inventory Audits",
  "ACID Relational Schema Normalization",
  "Digital Shipping Signatures & Paperless Logistics",
  "Japanese IT Standards (要件定義 Discovery)",
  "Production Bottleneck Tracing (WIP)",
  "RESTful API & Industrial Webhooks",
  "Zero-Defect Quality Assurance Gates",
];

// Methodology Pipeline for Bridge SE
const methodology = [
  {
    number: "01",
    title: "Frontline Discovery & Scope",
    icon: Users,
    description:
      "Interviewing shop-floor operators and mapping physical bottlenecks directly to business KPIs, preventing scope creep before writing code.",
  },
  {
    number: "02",
    title: "System Architecture & Data Design",
    icon: Database,
    description:
      "Designing normalized relational schemas, ACID transaction boundaries, and responsive interfaces optimized for harsh factory floors.",
  },
  {
    number: "03",
    title: "Production Verification & Impact",
    icon: CheckCircle2,
    description:
      "Overseeing user training, zero-error audit workflows, and verifying tangible qualitative and quantitative operational returns.",
  },
];

// Curated Flagship Projects for Home (SnapPack: 10, Protrack: 1, ISP Semarang: 15)
import { projects } from "@/data/projects.js";
const featuredProjects = computed(() => {
  return projects.filter((p) => [10, 1, 15].includes(p.id));
});

// Typewriter Logic
const typewriter = () => {
  const current = texts[textIndex];

  if (isDeleting) {
    displayedText.value = current.substring(0, charIndex--);
  } else {
    displayedText.value = current.substring(0, charIndex++);
  }

  let speed = isDeleting ? 25 : 60;

  if (!isDeleting && displayedText.value === current) {
    speed = 2200;
    isDeleting = true;
  } else if (isDeleting && displayedText.value === "") {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    speed = 400;
  }

  typewriterTimeout = setTimeout(typewriter, speed);
};

// Clean, Modern GSAP Entrance Sequence
const initGSAPAnimations = () => {
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.to(greetingRef.value, { opacity: 1, duration: 0.45 })
    .to(line1.value, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
    .to(subtitleRef.value, { opacity: 1, duration: 0.45 }, "-=0.25")
    .to(ctaRef.value, { opacity: 1, duration: 0.45 }, "-=0.2")
    .to(statsRef.value, { opacity: 1, duration: 0.45 }, "-=0.2")
    .to(domainRef.value, { opacity: 1, duration: 0.4 }, "-=0.2")
    .to(scrollIndicatorRef.value, { opacity: 1, duration: 0.4 }, "-=0.1");
};

onMounted(() => {
  typewriter();
  setTimeout(() => {
    initGSAPAnimations();
  }, 50);
});

onUnmounted(() => {
  if (typewriterTimeout) clearTimeout(typewriterTimeout);
});
</script>

<style scoped>
/* Subtle Metallic Sheen Animation on Main Title */
.shimmer-name {
  background: linear-gradient(
    110deg,
    currentColor 0%,
    currentColor 45%,
    #f59e0b 50%,
    currentColor 55%,
    currentColor 100%
  );
  background-size: 250% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: subtleSheen 7s ease-in-out infinite;
}

@keyframes subtleSheen {
  0%,
  80% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}

/* Infinite Marquee Masks & Animation */
.marquee-mask {
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

.marquee-track {
  animation: scrollMarquee 38s linear infinite;
}

.marquee-mask:hover .marquee-track {
  animation-play-state: paused;
}

@keyframes scrollMarquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
