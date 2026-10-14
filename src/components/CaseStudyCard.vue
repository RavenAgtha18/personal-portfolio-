<template>
  <article
    class="group relative rounded-xl border transition-all duration-200 flex flex-col justify-between overflow-hidden"
    :class="[
      isDark
        ? 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70'
        : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
    ]"
  >
    <!-- Visual Media Container (Crisp 16:9, clean edge) -->
    <div
      v-if="project.imageUrl"
      class="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950/60 border-b"
      :class="isDark ? 'border-zinc-800/60' : 'border-slate-100'"
    >
      <img
        :src="'/img/portfolio-' + project.imageUrl + '.png'"
        :alt="project.name"
        class="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t pointer-events-none"
        :class="isDark ? 'from-zinc-950/70 via-transparent to-transparent' : 'from-slate-900/20 via-transparent to-transparent'"
      ></div>
    </div>

    <!-- Metadata Header -->
    <div class="p-5 pb-3">
      <div class="flex items-center justify-between gap-2 mb-2">
        <span
          class="text-[11px] font-mono font-medium tracking-wide uppercase"
          :class="isDark ? 'text-amber-400/90' : 'text-amber-800'"
        >
          {{ isJapanese && project.categoryJa ? project.categoryJa : (project.category || 'System') }}
        </span>

        <span
          v-if="!project.isSimpleShowcase"
          class="text-[10px] font-mono"
          :class="isDark ? 'text-zinc-500' : 'text-slate-400'"
        >
          {{ isJapanese ? '社内SE (SysDev)' : 'System Developer (SysDev)' }}
        </span>
        <span
          v-else
          class="text-[10px] font-mono"
          :class="isDark ? 'text-zinc-500' : 'text-slate-400'"
        >
          {{ isJapanese ? 'Web / ツール' : 'Web / Tool' }}
        </span>
      </div>

      <!-- Title -->
      <h3
        class="text-lg sm:text-xl font-bold tracking-tight mb-2 transition-colors"
        :class="isDark ? 'text-zinc-100 group-hover:text-amber-300' : 'text-slate-900 group-hover:text-amber-800'"
      >
        {{ isJapanese && project.nameJa ? project.nameJa : project.name }}
      </h3>

      <!-- Executive Overview -->
      <p
        class="text-xs sm:text-sm leading-relaxed"
        :class="isDark ? 'text-zinc-400' : 'text-slate-600'"
      >
        {{ isJapanese && project.statusJa ? project.statusJa : project.status }}
      </p>
    </div>

    <!-- Key Highlights / Architecture Badges -->
    <div v-if="displayTags && displayTags.length" class="px-5 py-1.5">
      <div class="flex flex-wrap gap-1.5">
        <span
          v-for="tag in displayTags.slice(0, 4)"
          :key="tag"
          class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono border"
          :class="isDark ? 'bg-zinc-800/50 border-zinc-700/60 text-amber-300/90' : 'bg-amber-50/80 border-amber-200 text-amber-900'"
        >
          <span class="w-1 h-1 rounded-full bg-amber-500"></span>
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- 4-Pillars Technical BA Telemetry Accordion / Tab Preview -->
    <div
      v-if="hasFourPillars"
      class="px-5 py-2.5 my-1 border-y text-xs"
      :class="isDark ? 'border-zinc-800/70 bg-zinc-950/40' : 'border-slate-100 bg-slate-50/60'"
    >
      <div class="flex items-center justify-between mb-2">
        <span class="text-[10px] font-mono font-semibold uppercase tracking-wider text-amber-400/90">
          {{ isJapanese ? '4大柱アーキテクチャ' : '4-Pillar Telemetry' }}
        </span>
        <div class="flex items-center gap-1">
          <button
            v-for="tab in pillarTabs"
            :key="tab.id"
            @click.stop="toggleTab(tab.id)"
            type="button"
            class="px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors"
            :class="[
              activeTab === tab.id
                ? (isDark ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40' : 'bg-amber-100 text-amber-900 border border-amber-300')
                : (isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-slate-400 hover:text-slate-700')
            ]"
          >
            {{ isJapanese ? tab.labelJa : tab.label }}
          </button>
        </div>
      </div>

      <!-- Active Pillar Snippet -->
      <transition name="pillar-fade" mode="out-in">
        <div
          v-if="activeTab && currentPillarText"
          :key="activeTab"
          class="p-2.5 rounded-lg border text-[11px] leading-relaxed font-sans"
          :class="[
            activeTab === 'result'
              ? (isDark ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-900')
              : activeTab === 'problem'
              ? (isDark ? 'bg-rose-950/20 border-rose-500/30 text-rose-300' : 'bg-rose-50 border-rose-200 text-rose-900')
              : (isDark ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300' : 'bg-white border-slate-200 text-slate-700')
          ]"
        >
          <div class="font-semibold font-mono text-[10px] mb-1 flex items-center gap-1">
            <span
              class="w-1.5 h-1.5 rounded-full"
              :class="activeTab === 'result' ? 'bg-emerald-400' : activeTab === 'problem' ? 'bg-rose-400' : 'bg-amber-400'"
            ></span>
            {{ getPillarTitle(activeTab) }}
          </div>
          <p>{{ currentPillarText }}</p>
        </div>
        <div
          v-else
          class="text-[11px] text-emerald-400/90 font-mono flex items-center gap-1.5 py-0.5 truncate"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
          <span class="font-semibold shrink-0">{{ isJapanese ? '定量成果:' : 'Impact:' }}</span>
          <span class="truncate text-zinc-400">{{ defaultResultPreview }}</span>
        </div>
      </transition>
    </div>

    <!-- Card Footer: Minimal Tech Stack & Action Links -->
    <div
      class="p-5 pt-3 border-t mt-auto"
      :class="isDark ? 'border-zinc-800/60' : 'border-slate-100'"
    >
      <!-- Tech Badges -->
      <div class="flex flex-wrap items-center gap-1.5 mb-3.5">
        <span
          v-for="tech in parsedTech"
          :key="tech"
          class="px-2 py-0.5 rounded text-[10px] font-mono border"
          :class="isDark ? 'bg-zinc-800/40 text-zinc-400 border-zinc-800' : 'bg-slate-50 text-slate-600 border-slate-200'"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center justify-between gap-3 pt-1">
        <router-link
          v-if="project.isCaseStudy && project.demo"
          :to="project.demo"
          class="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-colors"
          :class="isDark ? 'text-amber-400 hover:text-amber-300' : 'text-slate-900 hover:text-amber-700'"
        >
          <span>{{ isJapanese ? '詳細ケーススタディ' : 'Deep-Dive Case Study' }}</span>
          <ArrowRight class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </router-link>

        <a
          v-else-if="project.demo && project.demo !== 'null'"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-colors"
          :class="isDark ? 'text-amber-400 hover:text-amber-300' : 'text-slate-900 hover:text-amber-700'"
        >
          <span>{{ isJapanese ? 'デモを見る' : 'Live Demo' }}</span>
          <ExternalLink class="w-3.5 h-3.5" />
        </a>

        <!-- Secondary GitHub Link -->
        <a
          v-if="project.github && project.github !== 'null'"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1 text-xs font-mono transition-colors"
          :class="isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-slate-400 hover:text-slate-700'"
          title="View Source Code"
        >
          <Github class="w-3.5 h-3.5" />
          <span>{{ isJapanese ? 'コード' : 'Code' }}</span>
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
/* global defineProps */
import { ref, computed } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { useLanguage } from '@/composables/useLanguage'
import {
  ArrowRight,
  ExternalLink,
  Github
} from 'lucide-vue-next'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const { isDark } = useTheme()
const { isJapanese } = useLanguage()

const activeTab = ref(null)

const pillarTabs = [
  { id: 'problem', label: 'Problem', labelJa: '課題' },
  { id: 'requirements', label: 'Reqs', labelJa: '要件' },
  { id: 'solution', label: 'Solution', labelJa: '解決策' },
  { id: 'result', label: 'Result', labelJa: '成果' },
]

const toggleTab = (id) => {
  activeTab.value = activeTab.value === id ? null : id
}

const hasFourPillars = computed(() => {
  return !!(props.project.problem || props.project.solution || props.project.result)
})

const defaultResultPreview = computed(() => {
  if (isJapanese.value && props.project.resultJa) {
    return props.project.resultJa
  }
  return props.project.result || props.project.status || ''
})

const currentPillarText = computed(() => {
  if (!activeTab.value) return ''
  const tab = activeTab.value
  if (isJapanese.value) {
    const jaKey = tab + 'Ja'
    if (props.project[jaKey]) return props.project[jaKey]
  }
  return props.project[tab] || ''
})

const getPillarTitle = (tabId) => {
  if (isJapanese.value) {
    const titles = {
      problem: '直面した現場課題 (Problem)',
      requirements: 'システム要件定義 (Requirements)',
      solution: '実装ソリューション (Solution)',
      result: '定量的な導入成果 (Result)',
    }
    return titles[tabId] || tabId
  }
  const titles = {
    problem: 'Operational Problem',
    requirements: 'System Requirements',
    solution: 'Technical Solution',
    result: 'Quantitative Result',
  }
  return titles[tabId] || tabId
}

const displayTags = computed(() => {
  if (isJapanese.value && props.project.tagsJa && props.project.tagsJa.length) {
    return props.project.tagsJa
  }
  return props.project.tags || []
})

const parsedTech = computed(() => {
  if (Array.isArray(props.project.tech)) return props.project.tech
  if (typeof props.project.tech === 'string') {
    return props.project.tech.split(',').map(t => t.trim()).filter(Boolean)
  }
  return []
})
</script>

<style scoped>
button:focus-visible {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
}

.pillar-fade-enter-active,
.pillar-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.pillar-fade-enter-from {
  opacity: 0;
  transform: translateY(2px);
}

.pillar-fade-leave-to {
  opacity: 0;
  transform: translateY(-2px);
}
</style>
