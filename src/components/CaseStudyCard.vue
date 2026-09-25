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
          {{ project.category || 'System' }}
        </span>

        <span
          v-if="!project.isSimpleShowcase"
          class="text-[10px] font-mono"
          :class="isDark ? 'text-zinc-500' : 'text-slate-400'"
        >
          Bridge SE / Tech BA
        </span>
        <span
          v-else
          class="text-[10px] font-mono"
          :class="isDark ? 'text-zinc-500' : 'text-slate-400'"
        >
          Web / Tool
        </span>
      </div>

      <!-- Title -->
      <h3
        class="text-lg sm:text-xl font-bold tracking-tight mb-2 transition-colors"
        :class="isDark ? 'text-zinc-100 group-hover:text-amber-300' : 'text-slate-900 group-hover:text-amber-800'"
      >
        {{ project.name }}
      </h3>

      <!-- Executive Overview -->
      <p
        class="text-xs sm:text-sm leading-relaxed"
        :class="isDark ? 'text-zinc-400' : 'text-slate-600'"
      >
        {{ project.status }}
      </p>
    </div>

    <!-- 4-Pillar Case Study Structure (Minimalist Tabs & Note View) -->
    <div v-if="!project.isSimpleShowcase" class="px-5 py-2 flex-1 flex flex-col justify-between">
      <!-- Minimal Tab Navigation -->
      <div class="border-b mb-3" :class="isDark ? 'border-zinc-800/80' : 'border-slate-200'">
        <div class="flex items-center gap-4 text-xs font-mono overflow-x-auto pb-1" role="tablist">
          <button
            v-for="pillar in pillars"
            :key="pillar.key"
            @click="activePillar = pillar.key"
            role="tab"
            :aria-selected="activePillar === pillar.key"
            class="pb-1.5 transition-colors relative whitespace-nowrap"
            :class="[
              activePillar === pillar.key
                ? isDark
                  ? 'text-amber-300 font-semibold border-b-2 border-amber-400 -mb-[1px]'
                  : 'text-slate-900 font-semibold border-b-2 border-slate-900 -mb-[1px]'
                : isDark
                ? 'text-zinc-500 hover:text-zinc-300'
                : 'text-slate-400 hover:text-slate-700'
            ]"
          >
            {{ pillar.tabName }}
          </button>
        </div>
      </div>

      <!-- Active Pillar Note Content with Tactile Micro-Transition -->
      <Transition name="pillar-fade" mode="out-in">
        <div :key="activePillar" class="border-l-2 pl-3 py-1 mb-2 min-h-[70px] flex flex-col justify-center" :class="isDark ? 'border-amber-500/70' : 'border-amber-500'">
          <div class="text-[10px] font-mono uppercase tracking-wider font-semibold mb-1" :class="isDark ? 'text-zinc-400' : 'text-slate-500'">
            {{ currentPillarData.title }}
          </div>
          <p
            v-if="currentPillarData.content"
            class="text-xs sm:text-sm leading-relaxed"
            :class="isDark ? 'text-zinc-300' : 'text-slate-700'"
          >
            {{ currentPillarData.content }}
          </p>
          <p
            v-else
            class="text-xs italic leading-relaxed"
            :class="isDark ? 'text-zinc-500' : 'text-slate-400'"
          >
            Pending brief: {{ currentPillarData.placeholder }}
          </p>
        </div>
      </Transition>
    </div>

    <!-- Simple Showcase Mode (Minimalist Note) -->
    <div v-else class="px-5 py-2 flex-1 flex flex-col justify-center">
      <div
        class="border-l-2 pl-3 py-1 text-xs leading-relaxed"
        :class="isDark ? 'border-zinc-700 text-zinc-400' : 'border-slate-300 text-slate-600'"
      >
        <span class="font-mono text-[10px] uppercase font-semibold block mb-0.5" :class="isDark ? 'text-zinc-300' : 'text-slate-700'">
          Showcase Overview
        </span>
        Focused application emphasizing streamlined user workflows, responsive interfaces, and targeted utility.
      </div>
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
          <span>Deep-Dive Case Study</span>
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
          <span>Live Demo</span>
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
          <span>Code</span>
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
/* global defineProps */
import { ref, computed } from 'vue'
import { useTheme } from '@/composables/useTheme'
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

// 4 Case Study Pillars definitions
const pillars = [
  {
    key: 'problem',
    tabName: 'Problem',
    title: 'The Problem (Operational Pain Point)',
    placeholder: 'Real business bottleneck and shop-floor constraint before the system.'
  },
  {
    key: 'requirements',
    tabName: 'Reqs',
    title: 'Requirements Process (Discovery)',
    placeholder: 'Stakeholder discovery, frontline interviews, and functional requirements.'
  },
  {
    key: 'solution',
    tabName: 'Solution',
    title: 'Technical Solution (Architecture)',
    placeholder: 'Architectural blueprint, database schema decisions, and technical trade-offs.'
  },
  {
    key: 'result',
    tabName: 'Result',
    title: 'Result & Impact (Verified)',
    placeholder: 'Verified production outcomes or qualitative adoption impact.'
  }
]

const activePillar = ref('problem')

const currentPillarData = computed(() => {
  const p = pillars.find(item => item.key === activePillar.value) || pillars[0]
  const content = props.project[p.key] || ''
  return {
    ...p,
    content
  }
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
