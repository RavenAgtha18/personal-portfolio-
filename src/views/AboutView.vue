<script setup>
import { ref } from 'vue'
import { 
  User, 
  Briefcase, 
  Code2, 
  Zap, 
  Target, 
  Cpu,
  Layers,
  Database,
  FileSpreadsheet,
  Smartphone,
  QrCode,
  Printer,
  CheckCircle2,
  Globe2,
} from 'lucide-vue-next'
import HolographicAvatarCard from '@/components/HolographicAvatarCard.vue'
import InteractiveGridBackground from '@/components/InteractiveGridBackground.vue'

const activeCategory = ref('physical')

// Competency Matrix Categorized by Industrial Engineering Tiers
const competencyTiers = {
  physical: {
    label: 'Shop-Floor Hardware',
    icon: Smartphone,
    tagline: 'Physical layer devices tested and integrated on active factory production lines',
    items: [
      {
        name: 'Zebra TC26 Android Scanner',
        tier: 'IMAGING HARDWARE',
        badge: 'PRODUCTION TESTED',
        desc: 'Integrated with custom Android web-views via DataWedge API for sub-second laser barcode scanning.',
        icon: Smartphone,
        specs: ['Laser Barcode', 'DataWedge API', 'SnapPack & ProScan'],
      },
      {
        name: 'Honeywell HF680 2D Scanner',
        tier: 'STATIONARY DECODER',
        badge: 'HIGH-SPEED',
        desc: 'Omnidirectional desktop scanner decoding damaged, smudged, or low-contrast 2D packaging codes.',
        icon: QrCode,
        specs: ['QR / Code 128', 'USB HID Emulation', 'Zero-Error Gate'],
      },
      {
        name: 'Brother TJ-4020 & Zebra ZT411',
        tier: 'LABEL PRINTING',
        badge: 'INDUSTRIAL',
        desc: 'Automated thermal label printing driven by raw ZPL II command generation and dynamic packing lists.',
        icon: Printer,
        specs: ['ZPL II Firmware', 'Thermal Transfer', 'Automated Dispatch'],
      },
      {
        name: 'Digital Caliper & Defect Stations',
        tier: 'QC INSPECTION',
        badge: 'HARDWARE GATE',
        desc: 'Physical QC inspection stations comparing physical tolerances against engineering limits before sign-off.',
        icon: Cpu,
        specs: ['±0.02mm Tolerance', 'Pass/Fail Relays', 'QC Checklist'],
      },
    ],
  },
  middleware: {
    label: 'Bridge Middleware',
    icon: Layers,
    tagline: 'Resilient middleware orchestrating business logic and transaction safety',
    items: [
      {
        name: 'Laravel & PHP 8.x',
        tier: 'BACKEND ARCHITECTURE',
        badge: 'CORE ENGINE',
        desc: 'Enterprise controllers, queue workers, and strict ACID transaction locking to prevent race conditions.',
        icon: Code2,
        specs: ['ACID Isolation', 'Eloquent ORM', 'Background Queues'],
      },
      {
        name: 'Python OCR & Automation',
        tier: 'SCRIPTING & AUTOMATION',
        badge: 'UTILITY',
        desc: 'Automated script engines for PDF shipping manifest parsing, image verification, and scheduled reports.',
        icon: Zap,
        specs: ['PDF Plumber', 'Data Cleaning', 'Automated Cron'],
      },
      {
        name: 'Node.js & Real-Time Edge',
        tier: 'EVENT STREAMING',
        badge: 'LOW LATENCY',
        desc: 'Lightweight web socket servers broadcasting real-time assembly line WIP progression to floor dashboards.',
        icon: Layers,
        specs: ['WebSocket', 'Real-Time Telemetry', 'Sub-30ms'],
      },
      {
        name: 'RESTful API & Webhooks',
        tier: 'SYSTEM INTEROP',
        badge: 'INTEGRATION',
        desc: 'Stateless endpoints connecting mobile Android handhelds to enterprise ERP databases.',
        icon: CheckCircle2,
        specs: ['JSON Schema', 'JWT Security', 'Rate Limiting'],
      },
    ],
  },
  database: {
    label: 'Database & Storage',
    icon: Database,
    tagline: 'ACID-compliant relational schemas with multi-table audit trails',
    items: [
      {
        name: 'MariaDB / MySQL Clusters',
        tier: 'PRIMARY RELATIONAL DB',
        badge: 'ACID COMPLIANT',
        desc: 'Structured database schemas designed with composite indexing, foreign keys, and strict historical audit logs.',
        icon: Database,
        specs: ['B-Tree Indexing', 'Audit Logs', 'Zero Discrepancy'],
      },
      {
        name: 'Warehouse Zoning Engine',
        tier: 'LOGISTICS LOGIC',
        badge: 'INVENTORY CONTROL',
        desc: 'Algorithmic shelf and bin assignment enforcing FIFO and FEFO rules for perishable chemical materials.',
        icon: Layers,
        specs: ['FIFO / FEFO', 'Rack / Bin Zoning', 'Stokku & ProScan'],
      },
      {
        name: 'PostgreSQL & Semi-Structured Data',
        tier: 'ANALYTICS DB',
        badge: 'HIGH INTEGRITY',
        desc: 'Storing complex inspection logs and telemetry history using JSONB columns and relational metadata.',
        icon: Database,
        specs: ['JSONB Telemetry', 'Complex Views', 'Material Yield'],
      },
    ],
  },
  ba_sdlc: {
    label: 'Technical BA & Bilingual SDLC',
    icon: FileSpreadsheet,
    tagline: 'Bridging shop-floor operator reality with executive software requirements',
    items: [
      {
        name: 'SRS & FSD Authoring',
        tier: 'REQUIREMENTS ANALYSIS',
        badge: 'TECHNICAL BA',
        desc: 'Transforming fuzzy frontline operator pain points into rigorous technical requirements, ER diagrams, and user stories.',
        icon: FileSpreadsheet,
        specs: ['UML Diagrams', 'User Stories', 'Acceptance Criteria'],
      },
      {
        name: 'Japanese Bilingual & Monozukuri',
        tier: 'LANGUAGE & CULTURE',
        badge: 'JFT-BASIC A2',
        desc: 'Deep respect for Japanese craftsmanship (Monozukuri), Kaizen continuous waste reduction, and JFT-Basic A2 certification.',
        icon: Globe2,
        specs: ['JFT-Basic A2', 'Kaizen Mindset', 'Cross-Border Target'],
      },
      {
        name: 'Poka-Yoke & Zero-Error UI',
        tier: 'ERROR PROOFING',
        badge: 'LEAN MANUFACTURING',
        desc: 'Designing operator interfaces with physical barcode interlocks that prevent human error before it can happen.',
        icon: Target,
        specs: ['Mistake Proofing', 'Barcode Gating', 'Floor Ergonomics'],
      },
    ],
  },
}

const highlights = [
  { icon: Zap, title: "2+ Years Manufacturing", desc: "Building frontline industrial MES & logistics apps" },
  { icon: Target, title: "Bridge Mindset", desc: "Connecting business stakeholders with engineering code" },
  { icon: Globe2, title: "Cross-Border Ready", desc: "Based in Semarang 🇮🇩 with Global & Japan target reach" },
]
</script>

<template>
  <div class="relative overflow-hidden min-h-screen">
    <!-- Ambient Reactive Background (Eliminates Empty Black Void) -->
    <InteractiveGridBackground />

    <!-- About Hero Section -->
    <section class="relative py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <!-- Holographic 3D Tilt Avatar Card -->
          <div class="relative w-full max-w-[360px] flex justify-center" data-aos="fade-right">
            <HolographicAvatarCard />
          </div>

          <!-- About Content -->
          <div class="flex-1 text-center lg:text-left" data-aos="fade-left">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-xs mb-4">
              <User class="w-3.5 h-3.5" />
              <span>Bridge Software Engineer &amp; Technical BA</span>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Riki Andi Alfiyanto
            </h1>
            
            <p class="text-base text-zinc-300 leading-relaxed mb-6">
              Headquartered in <span class="text-amber-400 font-semibold">Semarang, Indonesia 🇮🇩</span>, I specialize as a 
              <span class="text-amber-400 font-semibold">Bridge Software Engineer &amp; Senior Technical Business Analyst</span> 
              for manufacturing execution systems (MES), factory barcode automation, and distributed web applications.
            </p>
            
            <blockquote class="border-l-4 border-amber-500 pl-4 py-2 italic text-zinc-400 mb-8 font-mono text-xs sm:text-sm">
              "True engineering value is found on the shop-floor: taking messy operator bottlenecks, translating them into rigorous database schemas, and delivering software that locks out human error."
            </blockquote>

            <!-- Highlight Cards -->
            <div class="grid sm:grid-cols-3 gap-4">
              <div 
                v-for="(item, index) in highlights" 
                :key="item.title"
                class="p-4 rounded-xl border border-zinc-800 bg-zinc-950/70 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1"
                :data-aos="'fade-up'"
                :data-aos-delay="index * 100"
              >
                <component :is="item.icon" class="w-6 h-6 text-amber-400 mb-2" />
                <h3 class="font-bold text-zinc-100 text-xs">{{ item.title }}</h3>
                <p class="text-[11px] text-zinc-400 mt-1 leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Senior Architecture Competency Matrix (Replaces Outdated Percent Bars) -->
    <section class="py-20 px-6 border-t border-zinc-800/80 bg-zinc-950/40">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-12" data-aos="fade-up">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-xs mb-3">
            <Cpu class="w-3.5 h-3.5" />
            <span>Architecture &amp; Field Competencies</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Engineering Competency Architecture
          </h2>
          <p class="text-zinc-400 mt-2 text-xs sm:text-sm max-w-xl mx-auto font-mono">
            Proven hardware protocols, middleware patterns, and SDLC methodologies verified across active manufacturing environments.
          </p>
        </div>

        <!-- Tier Tabs -->
        <div class="flex flex-wrap justify-center gap-2 mb-10" data-aos="fade-up">
          <button
            v-for="(tier, key) in competencyTiers"
            :key="key"
            @click="activeCategory = key"
            class="px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 border flex items-center gap-2"
            :class="[
              activeCategory === key
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-lg shadow-amber-500/10'
                : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
            ]"
          >
            <component :is="tier.icon" class="w-3.5 h-3.5" />
            <span>{{ tier.label }}</span>
          </button>
        </div>

        <!-- Tagline -->
        <div class="text-center text-xs font-mono text-amber-400 mb-8">
          ● {{ competencyTiers[activeCategory].tagline }}
        </div>

        <!-- Competency Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="item in competencyTiers[activeCategory].items"
            :key="item.name"
            class="p-5 rounded-2xl border border-zinc-800 bg-zinc-950/70 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-mono font-bold text-amber-500">{{ item.tier }}</span>
                <span class="text-[9px] font-mono px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-300">
                  {{ item.badge }}
                </span>
              </div>
              <h3 class="text-base font-bold text-zinc-100 mb-2 flex items-center gap-2">
                <component :is="item.icon" class="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{{ item.name }}</span>
              </h3>
              <p class="text-xs text-zinc-400 leading-relaxed mb-4">
                {{ item.desc }}
              </p>
            </div>

            <!-- Specs Tag Pills -->
            <div class="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/80 font-mono text-[10px]">
              <span
                v-for="spec in item.specs"
                :key="spec"
                class="px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900/90 text-zinc-300"
              >
                {{ spec }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="py-20 px-6 border-t border-zinc-800/80">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-xs mb-3">
            <Briefcase class="w-3.5 h-3.5" />
            <span>Field Experience</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Engineering Timeline
          </h2>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-400 to-transparent"></div>

          <div class="space-y-12">
            <div 
              class="relative flex flex-col md:flex-row gap-4 md:gap-8"
              data-aos="fade-up"
            >
              <div class="flex-1 md:text-right order-2 md:order-1">
                <div class="border border-zinc-800 bg-zinc-950/80 p-6 rounded-2xl hover:border-amber-500/50 transition-all duration-300">
                  <span class="text-amber-400 text-xs font-mono font-semibold">2025 - Present</span>
                  <h3 class="text-base font-bold text-white mt-1">Software Engineer &amp; Technical BA</h3>
                  <p class="text-xs text-zinc-400 mt-2 leading-relaxed">
                    Spearheading technical requirements gathering, warehouse inventory architectures, and real-time shop-floor tracking systems bridging frontline manufacturing operators with enterprise database backends.
                  </p>
                </div>
              </div>
              <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-[#0a0a0a] order-1 md:order-2"></div>
              <div class="flex-1 order-3 hidden md:block"></div>
            </div>

            <div 
              class="relative flex flex-col md:flex-row gap-4 md:gap-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="flex-1 hidden md:block order-1"></div>
              <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-400 border-4 border-[#0a0a0a] order-2"></div>
              <div class="flex-1 order-3">
                <div class="border border-zinc-800 bg-zinc-950/80 p-6 rounded-2xl hover:border-amber-500/50 transition-all duration-300 ml-8 md:ml-0">
                  <span class="text-amber-400 text-xs font-mono font-semibold">2023 - 2024</span>
                  <h3 class="text-base font-bold text-white mt-1">Full-Stack Software Engineer</h3>
                  <p class="text-xs text-zinc-400 mt-2 leading-relaxed">
                    Engineered web applications utilizing Laravel, Vue.js, MySQL relational schemas, and responsive UI design systems for commercial and enterprise production deployments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
