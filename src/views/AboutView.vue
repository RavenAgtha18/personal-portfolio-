<script setup>
import { ref, computed } from 'vue'
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
  FileText,
  Eye,
  ExternalLink,
} from 'lucide-vue-next'
import { useLanguage } from '@/composables/useLanguage'
import HolographicAvatarCard from '@/components/HolographicAvatarCard.vue'
import InteractiveGridBackground from '@/components/InteractiveGridBackground.vue'
import PhysicsStackSandbox from '@/components/PhysicsStackSandbox.vue'
import ShokumuKeirekishoModal from '@/components/ShokumuKeirekishoModal.vue'

const { isJapanese, messages } = useLanguage()
const activeCategory = ref('physical')
const keirekishoModalRef = ref(null)
const openKeirekishoModal = () => {
  keirekishoModalRef.value?.openModal()
}

// Icon mappings for each industrial competency tier
const tierIcons = {
  physical: {
    icon: Smartphone,
    itemIcons: [Smartphone, QrCode, Printer, Cpu],
  },
  middleware: {
    icon: Layers,
    itemIcons: [Code2, Zap, Layers, CheckCircle2],
  },
  database: {
    icon: Database,
    itemIcons: [Database, Layers, Database],
  },
  ba_sdlc: {
    icon: FileSpreadsheet,
    itemIcons: [FileSpreadsheet, Globe2, Target],
  },
}

const competencyTiers = computed(() => {
  const tiers = messages.value?.about?.tiers || {}
  const result = {}
  for (const [key, tierData] of Object.entries(tiers)) {
    const meta = tierIcons[key] || {}
    result[key] = {
      ...tierData,
      icon: meta.icon || Layers,
      items: (tierData.items || []).map((item, idx) => ({
        ...item,
        icon: meta.itemIcons?.[idx] || Cpu,
      })),
    }
  }
  return result
})

const highlightIcons = [Zap, Target, Globe2]
const highlights = computed(() => {
  const list = messages.value?.about?.highlights || []
  return list.map((item, idx) => ({
    ...item,
    icon: highlightIcons[idx] || Zap,
  }))
})

const timelineItems = computed(() => {
  return messages.value?.about?.timelineItems || []
})
</script>

<template>
  <div class="relative overflow-hidden min-h-screen">
    <!-- Ambient Reactive Background (Eliminates Empty Black Void) -->
    <InteractiveGridBackground />

    <!-- About Hero Section -->
    <section class="relative py-12 sm:py-20 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          <!-- Holographic 3D Tilt Avatar Card -->
          <div class="relative w-full max-w-[360px] flex justify-center" data-aos="fade-right">
            <HolographicAvatarCard />
          </div>

          <!-- About Content -->
          <div class="flex-1 text-center lg:text-left" data-aos="fade-left">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-xs mb-4">
              <User class="w-3.5 h-3.5" />
              <span>{{ messages?.about?.roleBadge || 'System Developer (SysDev) · 2-Person Core Division' }}</span>
            </div>
            
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              {{ messages?.about?.name || 'Riki Andi Alfiyanto' }}
            </h1>
            
            <p class="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
              {{ messages?.about?.bioPrefix || 'Based in' }} <span class="text-amber-400 font-semibold">{{ messages?.about?.bioLocation || 'Semarang, Indonesia 🇮🇩' }}</span>, 
              <span v-if="!isJapanese">working as a </span>
              <span class="text-amber-400 font-semibold">{{ messages?.about?.bioRole || 'System Developer (SysDev)' }}</span> 
              <span v-if="!isJapanese">at </span><span v-else>（</span><span class="text-white font-semibold">{{ messages?.about?.bioCompany || 'PT. Harrison And Gil-Java' }}</span><span v-if="isJapanese">）</span>. 
              <span v-if="!isJapanese">Operating within a lean </span>
              <span class="text-amber-400 font-semibold">{{ messages?.about?.bioDivision || '2-person SysDev division' }}</span>
              <span>{{ messages?.about?.bioSuffix }}</span>
            </p>
            
            <blockquote class="border-l-4 border-amber-500 pl-4 py-2 italic text-zinc-400 mb-8 font-mono text-xs sm:text-sm">
              "{{ messages?.about?.quote }}"
            </blockquote>

            <!-- Highlight Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
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

            <!-- Japanese Resume (職務経歴書) Call-to-Action Card -->
            <div
              class="mt-6 p-4 rounded-xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <FileText class="w-4 h-4" />
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-bold text-white font-mono">
                      {{ isJapanese ? '職務経歴書 (Shokumu Keirekisho)' : 'Japanese Standard Resume' }}
                    </span>
                    <span class="text-[9px] px-1.5 py-0.2 rounded font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      JIS A4・2枚
                    </span>
                  </div>
                  <p class="text-[11px] text-zinc-400 mt-0.5">
                    {{ isJapanese ? '日系IT企業・製造DX標準様式。Word文書 (.doc) または PDF形式で即時出力。' : 'Formatted for Japanese enterprise recruiters. Download in Word (.doc) or Print-to-PDF.' }}
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-2 w-full sm:w-auto">
                <button
                  @click="openKeirekishoModal"
                  class="flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-mono text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-md flex items-center justify-center gap-1.5"
                >
                  <Eye class="w-3.5 h-3.5" />
                  <span>{{ isJapanese ? '閲覧 / 出力' : 'View / Export' }}</span>
                </button>
                <router-link
                  to="/keirekisho"
                  class="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                  title="全画面で開く"
                >
                  <ExternalLink class="w-4 h-4" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture Competency Matrix (Replaces Outdated Percent Bars) -->
    <section class="py-12 sm:py-20 px-4 sm:px-6 border-t border-zinc-800/80 bg-zinc-950/40">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-12" data-aos="fade-up">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-xs mb-3">
            <Cpu class="w-3.5 h-3.5" />
            <span>{{ messages?.about?.competenciesBadge || 'Architecture & Field Competencies' }}</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-white">
            {{ messages?.about?.competenciesTitle || 'Engineering Competency Architecture' }}
          </h2>
          <p class="text-zinc-400 mt-2 text-xs sm:text-sm max-w-xl mx-auto font-mono">
            {{ messages?.about?.competenciesDesc || 'Proven hardware protocols, middleware patterns, and SDLC methodologies verified across active manufacturing environments.' }}
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
        <div v-if="competencyTiers[activeCategory]" class="text-center text-xs font-mono text-amber-400 mb-8">
          ● {{ competencyTiers[activeCategory].tagline }}
        </div>

        <!-- Competency Cards Grid -->
        <div v-if="competencyTiers[activeCategory]" class="grid grid-cols-1 md:grid-cols-2 gap-4">
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

    <!-- Interactive Physics Stack & Shop-Floor Sandbox (Matter.js 2D Physics) -->
    <section id="physics" class="py-12 sm:py-20 px-3 sm:px-6 border-t border-zinc-800/80 bg-zinc-950/60">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-8 sm:mb-10" data-aos="fade-up">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-xs mb-3">
            <Zap class="w-3.5 h-3.5" />
            <span>{{ messages?.about?.physicsBadge || 'Matter.js 2D Physics Simulation' }}</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            {{ messages?.about?.physicsTitle || 'Shop-Floor & Tech Stack Physics Sandbox' }}
          </h2>
          <p class="text-zinc-400 mt-2 text-xs sm:text-sm max-w-xl mx-auto font-mono">
            {{ messages?.about?.physicsDesc || 'Every library, hardware scanner, database, and protocol in my engineering stack modeled with real Newtonian collision dynamics.' }}
          </p>
        </div>

        <PhysicsStackSandbox />
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="py-12 sm:py-20 px-4 sm:px-6 border-t border-zinc-800/80">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-xs mb-3">
            <Briefcase class="w-3.5 h-3.5" />
            <span>{{ messages?.about?.timelineBadge || 'Field Experience' }}</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-white">
            {{ messages?.about?.timelineTitle || 'Engineering Timeline' }}
          </h2>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-400 to-transparent"></div>

          <div class="space-y-12">
            <div 
              v-for="(job, index) in timelineItems"
              :key="job.period"
              class="relative flex flex-col md:flex-row gap-4 md:gap-8"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <div 
                class="flex-1 order-2"
                :class="index % 2 === 0 ? 'md:text-right md:order-1' : 'md:order-3'"
              >
                <div class="border border-zinc-800 bg-zinc-950/80 p-4 sm:p-6 rounded-2xl hover:border-amber-500/50 transition-all duration-300 ml-8 md:ml-0">
                  <span class="text-amber-400 text-xs font-mono font-semibold">{{ job.period }}</span>
                  <h3 class="text-base font-bold text-white mt-1">{{ job.title }}</h3>
                  <p class="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {{ job.desc }}
                  </p>
                </div>
              </div>
              <div 
                class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-[#0a0a0a] order-1 md:order-2"
                :class="index === 0 ? 'bg-amber-500' : 'bg-amber-400'"
              ></div>
              <div 
                class="flex-1 hidden md:block"
                :class="index % 2 === 0 ? 'order-3' : 'order-1'"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Shokumu Keirekisho Modal -->
    <ShokumuKeirekishoModal ref="keirekishoModalRef" />
  </div>
</template>
