<template>
  <div v-if="caseStudy">
    <section class="border-b border-white/10 px-5 py-16 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-5xl">
        <router-link class="mono text-xs text-[#f6bf6e] hover:text-[#f7d49f]" to="/work">← Back to work</router-link>
        <p class="mono mt-12 text-xs uppercase tracking-[0.2em] text-[#f6bf6e]">Professional work · {{ caseStudy.number }}</p>
        <h1 class="mt-4 text-5xl font-extrabold tracking-[-0.06em] sm:text-7xl">{{ caseStudy.name }}</h1>
        <p class="mt-5 text-lg text-stone-400">{{ caseStudy.label }}</p>
      </div>
    </section>

    <article class="px-5 py-16 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-5xl">
        <section class="case-section" aria-labelledby="problem-heading">
          <p class="case-number">01 — Business / operational problem</p>
          <h2 id="problem-heading">Start with the workflow.</h2>
          <p>{{ caseStudy.problem }}</p>
        </section>

        <section class="case-section" aria-labelledby="requirements-heading">
          <p class="case-number">02 — Requirements and understanding</p>
          <h2 id="requirements-heading">What the system needed to support.</h2>
          <ul class="mt-6 space-y-3">
            <li v-for="requirement in caseStudy.requirements" :key="requirement" class="requirement-item">{{ requirement }}</li>
          </ul>
        </section>

        <section class="case-section" aria-labelledby="solution-heading">
          <p class="case-number">03 — Technical solution</p>
          <h2 id="solution-heading">A practical system direction.</h2>
          <p>{{ caseStudy.solution }}</p>
        </section>

        <section class="case-section" aria-labelledby="implementation-heading">
          <p class="case-number">04 — Implementation</p>
          <h2 id="implementation-heading">Technology documented for this project.</h2>
          <ul class="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
            <li v-for="technology in caseStudy.implementation" :key="technology" class="mono rounded-full border border-white/15 px-3 py-1.5 text-xs text-stone-300">{{ technology }}</li>
          </ul>
        </section>

        <section class="rounded-2xl border border-[#e59b32]/35 bg-[#e59b32]/[0.06] p-6 sm:p-8" aria-labelledby="evidence-heading">
          <p class="case-number">05 — Focus Area &amp; Verification</p>
          <h2 id="evidence-heading" class="text-2xl font-semibold">{{ caseStudy.headline }}</h2>
          <p class="mt-4 max-w-2xl text-sm leading-7 text-stone-300">
            <strong>Key Capability:</strong> {{ caseStudy.focusTopic }} · <strong>Context:</strong> {{ caseStudy.company }}.
            Grounded directly in operational workflow and production implementation without fabricated metrics.
          </p>
          <div class="mt-6">
            <router-link
              :to="`/portfolio/${caseStudy.slug}`"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              Launch Interactive Deep-Dive →
            </router-link>
          </div>
        </section>
      </div>
    </article>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { caseStudies } from '@/data/caseStudies.js'

const route = useRoute()
const caseStudy = computed(() => caseStudies[route.params.slug])
</script>

<style scoped>
.case-section { max-width: 44rem; border-top: 1px solid rgba(255, 255, 255, 0.12); padding: 4rem 0; }
.case-number { font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: #f6bf6e; }
h2 { margin-top: 0.9rem; font-size: clamp(1.7rem, 4vw, 2.4rem); font-weight: 700; letter-spacing: -0.04em; color: #f1eee8; }
.case-section > p:last-child { margin-top: 1.5rem; font-size: 1rem; line-height: 1.9; color: #a8a29e; }
.requirement-item { display: flex; gap: 0.9rem; color: #d6d3d1; font-size: 1rem; line-height: 1.7; }
.requirement-item::before { content: '→'; color: #e59b32; }
</style>
