<template>
  <ol class="grid gap-3 md:grid-cols-5" aria-label="How a business need becomes a practical system">
    <li v-for="(step, index) in steps" :key="step.title" class="flow-step">
      <span class="mono text-[11px] text-[#f6bf6e]">0{{ index + 1 }}</span>
      <h3 class="mt-5 text-lg font-semibold text-[#f1eee8]">{{ step.title }}</h3>
      <p class="mt-2 text-sm leading-6 text-stone-400">{{ step.detail }}</p>
    </li>
  </ol>
</template>

<script setup>
const steps = [
  { title: 'Business need', detail: 'Start with the operational need, not a preferred technology.' },
  { title: 'Requirements', detail: 'Clarify the workflow, constraints, and information that matter.' },
  { title: 'System', detail: 'Turn the requirement into a practical system structure.' },
  { title: 'Users', detail: 'Keep the interaction usable for the people working with it.' },
  { title: 'Improvement', detail: 'Use feedback to refine the next version of the workflow.' },
]
</script>

<style scoped>
.flow-step { position: relative; min-height: 12rem; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 1rem; background: linear-gradient(145deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.01)); padding: 1.25rem; }
.flow-step::before { content: ''; position: absolute; top: 1.5rem; right: -0.95rem; z-index: 1; width: 1.8rem; border-top: 1px solid rgba(229, 155, 50, 0.7); }
.flow-step::after { content: '→'; position: absolute; top: 0.8rem; right: -1.15rem; z-index: 2; color: #f6bf6e; font-size: 0.85rem; }
.flow-step:last-child::before, .flow-step:last-child::after { display: none; }
@media (max-width: 767px) { .flow-step { min-height: auto; } .flow-step::before, .flow-step::after { display: none; } }
</style>
