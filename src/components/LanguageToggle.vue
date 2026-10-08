<template>
  <button
    @click="toggleLanguage"
    type="button"
    class="relative inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-mono transition-all duration-300 border shadow-sm group hover:scale-[1.03] cursor-pointer select-none"
    :class="isDark 
      ? 'bg-zinc-900/80 border-white/10 text-zinc-300 hover:text-white hover:border-amber-400/40 hover:bg-zinc-800/80' 
      : 'bg-white/90 border-slate-200 text-slate-700 hover:text-slate-900 hover:border-amber-500/40'"
    :title="isJapanese ? 'Switch to English' : '日本語に切り替え (Switch to Japanese)'"
    aria-label="Switch Language"
  >
    <!-- Globe Icon / Japanese Flag Accent -->
    <span class="flex items-center justify-center w-3.5 sm:w-4 h-3.5 sm:h-4 text-xs">
      <span v-if="isJapanese" class="text-xs sm:text-sm leading-none">🇯🇵</span>
      <span v-else class="text-xs sm:text-sm leading-none">🌐</span>
    </span>

    <!-- Text Indicators -->
    <div class="flex items-center gap-0.5 sm:gap-1 font-semibold text-[10px] sm:text-[11px] tracking-wide">
      <span :class="!isJapanese ? 'text-amber-400 font-bold' : 'text-zinc-500 group-hover:text-zinc-400'">
        EN
      </span>
      <span class="text-zinc-600">/</span>
      <span :class="isJapanese ? 'text-amber-400 font-bold' : 'text-zinc-500 group-hover:text-zinc-400'">
        <span class="sm:hidden">JA</span>
        <span class="hidden sm:inline">日本語</span>
      </span>
    </div>

    <!-- Active Indicator Dot -->
    <span
      class="hidden xs:inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse ml-0.5"
    ></span>
  </button>
</template>

<script setup>
import { useLanguage } from "@/composables/useLanguage";
import { useTheme } from "@/composables/useTheme";

const { isJapanese, toggleLanguage } = useLanguage();
const { isDark } = useTheme();
</script>
