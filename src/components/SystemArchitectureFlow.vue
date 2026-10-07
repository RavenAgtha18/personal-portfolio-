<template>
  <div
    class="w-full rounded-2xl border transition-all duration-300 overflow-hidden font-mono select-none"
    :class="isDark ? 'bg-zinc-950/85 border-zinc-800/90 shadow-2xl shadow-black/80' : 'bg-white border-slate-200 shadow-xl'"
  >
    <!-- Top Console Header -->
    <div
      class="px-4 sm:px-6 py-3 border-b flex flex-wrap items-center justify-between gap-3 text-xs"
      :class="isDark ? 'border-zinc-800/80 bg-zinc-900/60' : 'border-slate-100 bg-slate-50'"
    >
      <div class="flex items-center gap-2.5">
        <span class="flex h-2 w-2 relative">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
        </span>
        <span class="font-bold tracking-wider" :class="isDark ? 'text-zinc-200' : 'text-slate-800'">
          SIGNATURE LIFECYCLE PIPELINE
        </span>
        <span class="text-[10px] text-zinc-500 hidden sm:inline">|</span>
        <span class="text-[10px] text-zinc-500 hidden sm:inline">FROM PROBLEM TO USABLE SYSTEM</span>
      </div>

      <div class="flex items-center gap-2 text-[11px]" :class="isDark ? 'text-zinc-400' : 'text-slate-500'">
        <span class="text-amber-500 font-semibold">STAGE {{ activeIndex + 1 }} / 5:</span>
        <span class="font-bold uppercase" :class="isDark ? 'text-zinc-200' : 'text-slate-700'">{{ activeStage.title }}</span>
      </div>
    </div>

    <!-- Interactive Pipeline Stepper Rail -->
    <div class="p-4 sm:p-6 lg:p-8">
      <!-- Horizontal Flow Bar (Desktop) -->
      <div class="relative mb-8">
        <!-- Connecting Circuit Bus -->
        <div
          class="hidden md:block absolute top-6 left-[8%] right-[8%] h-[2px] -z-0"
          :class="isDark ? 'bg-zinc-800' : 'bg-slate-200'"
        >
          <!-- Active Progress Beam -->
          <div
            class="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-500 shadow-[0_0_12px_rgba(245,158,11,0.5)]"
            :style="{ width: `${(activeIndex / (stages.length - 1)) * 100}%` }"
          ></div>
        </div>

        <!-- Stage Buttons Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 relative z-10">
          <button
            v-for="(stage, idx) in stages"
            :key="stage.id"
            @click="activeIndex = idx"
            class="p-3 sm:p-4 rounded-xl border text-left transition-all duration-300 group relative flex flex-col justify-between"
            :class="[
              activeIndex === idx
                ? isDark
                  ? 'border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-500/10'
                  : 'border-amber-500 bg-amber-50 shadow-md'
                : isDark
                ? 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/70'
                : 'border-slate-200 bg-slate-50/70 hover:border-slate-300 hover:bg-white'
            ]"
          >
            <div class="flex items-center justify-between mb-2">
              <span
                class="text-[10px] font-bold px-1.5 py-0.5 rounded"
                :class="activeIndex === idx ? 'bg-amber-500 text-black' : isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-slate-200 text-slate-600'"
              >
                0{{ idx + 1 }}
              </span>
              <component
                :is="stage.icon"
                class="w-4 h-4 transition-transform duration-200 group-hover:scale-110"
                :class="activeIndex === idx ? 'text-amber-500' : isDark ? 'text-zinc-500' : 'text-slate-400'"
              />
            </div>

            <div>
              <div
                class="text-xs font-bold transition-colors"
                :class="activeIndex === idx ? (isDark ? 'text-zinc-100' : 'text-slate-900') : (isDark ? 'text-zinc-300' : 'text-slate-700')"
              >
                {{ stage.title }}
              </div>
              <div class="text-[10px] mt-0.5 truncate" :class="isDark ? 'text-zinc-500' : 'text-slate-400'">
                {{ stage.tagline }}
              </div>
            </div>
          </button>
        </div>
      </div>

      <!-- Active Stage Deep-Dive Card (Inspector Panel) -->
      <div
        class="rounded-xl border p-5 sm:p-7 transition-all duration-300"
        :class="isDark ? 'border-zinc-800/80 bg-zinc-900/40' : 'border-slate-200 bg-white'"
      >
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <!-- Left: Narrative & Thinking -->
          <div class="lg:col-span-7 space-y-4">
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono uppercase tracking-widest text-amber-500 font-bold">
                PHASE 0{{ activeIndex + 1 }} EXECUTION
              </span>
              <span class="text-zinc-600">·</span>
              <span class="text-xs text-zinc-400">{{ activeStage.badge }}</span>
            </div>

            <h3 class="text-lg sm:text-xl font-bold" :class="isDark ? 'text-white' : 'text-slate-900'">
              {{ activeStage.headline }}
            </h3>

            <p class="text-xs sm:text-sm leading-relaxed" :class="isDark ? 'text-zinc-300' : 'text-slate-600'">
              {{ activeStage.description }}
            </p>

            <!-- Key Engineering Translation -->
            <div
              class="p-4 rounded-xl border text-xs"
              :class="isDark ? 'border-zinc-800 bg-zinc-950/60' : 'border-slate-100 bg-slate-50'"
            >
              <div class="text-amber-500 font-bold text-[11px] mb-1.5 flex items-center gap-1.5">
                <span>⚡ Technical Translation:</span>
              </div>
              <p :class="isDark ? 'text-zinc-400' : 'text-slate-600'" class="leading-relaxed">
                {{ activeStage.technicalTranslation }}
              </p>
            </div>
          </div>

          <!-- Right: Concrete Real-World Artifact Box -->
          <div class="lg:col-span-5 space-y-3">
            <div
              class="p-4 sm:p-5 rounded-xl border font-mono"
              :class="isDark ? 'border-zinc-800 bg-zinc-950/80 text-zinc-300' : 'border-slate-200 bg-slate-50 text-slate-800'"
            >
              <div class="flex items-center justify-between text-[11px] border-b pb-2 mb-3" :class="isDark ? 'border-zinc-800' : 'border-slate-200'">
                <span class="font-bold text-amber-500">OPERATIONAL EXAMPLE</span>
                <span class="text-[10px] text-zinc-500">{{ activeStage.exampleSystem }}</span>
              </div>

              <div class="space-y-2 text-xs">
                <div>
                  <span class="text-[10px] text-zinc-500 block">BEFORE:</span>
                  <span class="text-red-400/90 text-[11px]">{{ activeStage.exampleBefore }}</span>
                </div>
                <div>
                  <span class="text-[10px] text-zinc-500 block">SYSTEM APPLIED:</span>
                  <span class="text-amber-400 text-[11px] font-semibold">{{ activeStage.exampleSystemApplied }}</span>
                </div>
                <div>
                  <span class="text-[10px] text-zinc-500 block">PRACTICAL OUTCOME:</span>
                  <span class="text-emerald-400 text-[11px]">{{ activeStage.exampleOutcome }}</span>
                </div>
              </div>
            </div>

            <!-- Interactive Stage Navigation Controls -->
            <div class="flex items-center justify-between pt-2">
              <button
                @click="prevStage"
                :disabled="activeIndex === 0"
                class="px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all disabled:opacity-30 disabled:pointer-events-none"
                :class="isDark ? 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'"
              >
                ← Previous Stage
              </button>
              <button
                @click="nextStage"
                :disabled="activeIndex === stages.length - 1"
                class="px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all disabled:opacity-30 disabled:pointer-events-none"
                :class="isDark ? 'border-amber-500/50 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20' : 'border-amber-400 bg-amber-50 text-amber-900 hover:bg-amber-100'"
              >
                Next Stage →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTheme } from '@/composables/useTheme'
import {
  HelpCircle,
  FileSearch,
  Database,
  Smartphone,
  TrendingUp
} from 'lucide-vue-next'

const { isDark } = useTheme()
const activeIndex = ref(0)

const stages = [
  {
    id: 'problem',
    title: 'Business Need',
    tagline: 'Operational Blindspots',
    badge: 'Frontline Discovery',
    icon: HelpCircle,
    headline: 'Uncovering the Actual Operational Friction',
    description:
      'Begin by walking the shop-floor, observing operators, and identifying manual delays rather than starting with a predetermined tech stack. Understanding real bottlenecks prevents building features no one uses.',
    technicalTranslation:
      'Map physical travelers, paper forms, and verbal handoffs into strict data states and process transition lifecycles.',
    exampleSystem: 'Protrack System (WIP)',
    exampleBefore: 'Manual whiteboard tallies delayed reporting by 2–3 days.',
    exampleSystemApplied: 'Barcode checkpoints at each work center station.',
    exampleOutcome: 'Real-time production stage visibility across the factory floor.'
  },
  {
    id: 'requirements',
    title: 'Requirements',
    tagline: 'Workflow Constraints',
    badge: 'System Scoping',
    icon: FileSearch,
    headline: 'Translating Realities into Clear Specifications',
    description:
      'Convert operator habits, factory network conditions, and management reporting needs into actionable technical specifications with explicit edge-case rules.',
    technicalTranslation:
      'Define database table schemas, foreign key relationships, validation rules, and network failover constraints for offline or low-connectivity environments.',
    exampleSystem: 'Stokku (Raw Materials)',
    exampleBefore: 'Chemicals and adhesives expired unnoticed on storage racks.',
    exampleSystemApplied: 'Batch date tables with automated FEFO alerts.',
    exampleOutcome: 'Proactive early notifications before expiry date thresholds.'
  },
  {
    id: 'system',
    title: 'System Design',
    tagline: 'Normalized Schemas',
    badge: 'Architecture Core',
    icon: Database,
    headline: 'Building Robust Relational Data Architectures',
    description:
      'Design clean, normalized database models and transaction boundaries (ACID) that maintain absolute data integrity under multi-user factory operations.',
    technicalTranslation:
      'Implement Laravel backend models, migration schemas, transactional gates, and clean RESTful API endpoints coupled with Vue.js single-page frontends.',
    exampleSystem: 'FinWise Platform',
    exampleBefore: 'Disconnected expense tracking with no category enforcement.',
    exampleSystemApplied: 'Category budget limits & multi-currency normalization.',
    exampleOutcome: 'Automated limit validation directly at transaction entry.'
  },
  {
    id: 'users',
    title: 'Frontline Users',
    tagline: 'Shop-Floor Usability',
    badge: 'Usable Interfaces',
    icon: Smartphone,
    headline: 'Delivering Ergonomic, Fast Interfaces for Real Operators',
    description:
      'Factory operators work in noisy, dusty, fast-paced environments. Interfaces must have large touch targets, instant barcode validation sounds, and zero unnecessary input fields.',
    technicalTranslation:
      'Build responsive, mobile-first Web UIs with rapid feedback, barcode hardware keyboard wedge listeners, and tactile touch interactions.',
    exampleSystem: 'SnapPack System',
    exampleBefore: 'Manual SD card handoffs risked lost shipping proof photos.',
    exampleSystemApplied: 'Camera-to-server digital logging with touchscreen signatures.',
    exampleOutcome: 'Instant searchable audit trail linked to export packing manifests.'
  },
  {
    id: 'improve',
    title: 'Improvement',
    tagline: 'Continuous Kaizen',
    badge: 'Iterative Refinement',
    icon: TrendingUp,
    headline: 'Iterative Refinement Based on Real Operational Usage',
    description:
      'Software is never done at first deployment. Continuous improvement (Kaizen) uses actual operator feedback and operational metrics to streamline the system further.',
    technicalTranslation:
      'Analyze query latency, gather direct operator feedback, optimize indexing on high-volume scan tables, and refine business reports.',
    exampleSystem: 'Finish-Info Platform',
    exampleBefore: 'Blueprint dimension updates required manual re-printing.',
    exampleSystemApplied: 'IP-restricted dynamic PDF delivery and nesting rules.',
    exampleOutcome: 'Eliminated desynchronized cutting blueprints across workshops.'
  }
]

const activeStage = computed(() => stages[activeIndex.value])

const prevStage = () => {
  if (activeIndex.value > 0) activeIndex.value--
}

const nextStage = () => {
  if (activeIndex.value < stages.length - 1) activeIndex.value++
}
</script>
