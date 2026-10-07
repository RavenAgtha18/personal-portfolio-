<template>
  <main
    @mousemove="handleMouseMove"
    class="relative min-h-screen transition-colors duration-300 overflow-x-clip"
    :class="isDark ? 'bg-[#09090b]/85' : 'bg-slate-50/75'"
  >
    <!-- Dynamic Ambient Grid & Nebula Aurora Background (Eliminates Empty Black Void) -->
    <InteractiveGridBackground />

    <!-- Interactive Cursor Ambient Spotlight (Linear / Vercel style luxury glow) -->
    <div
      class="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-300"
      :style="spotlightStyle"
    ></div>

    <!-- SIGNATURE 3D SCROLLYTELLING HERO & ARCHITECTURE EXPERIENCE (Immediate 3D Animated Entry) -->
    <CinematicScrollHero />

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

    <!-- Interactive Developer & Recruiter Terminal (Gen Z CLI Experience) -->
    <section class="relative z-10 py-16 sm:py-24 px-4 sm:px-6 border-b" :class="isDark ? 'border-zinc-800/80 bg-zinc-950/40' : 'border-slate-200/80 bg-slate-100/30'">
      <div class="max-w-6xl mx-auto">
        <div class="mb-8 text-center sm:text-left">
          <span class="text-[11px] font-mono uppercase tracking-wider font-semibold" :class="isDark ? 'text-amber-400' : 'text-amber-800'">
            {{ t('terminal.badge') }}
          </span>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mt-1" :class="isDark ? 'text-white' : 'text-slate-900'">
            {{ t('terminal.title') }}
          </h2>
          <p class="text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
            {{ t('terminal.desc') }}
          </p>
        </div>

        <BridgeTerminal />
      </div>
    </section>

    <!-- Complete Systems Catalog Gateway (Luxury Minimalist Portal) -->
    <section id="featured-projects" class="relative z-10 py-20 sm:py-28 px-4 sm:px-6">
      <div class="max-w-4xl mx-auto">
        <div
          class="text-center p-8 sm:p-14 rounded-3xl border transition-all duration-300 backdrop-blur-xl"
          :class="isDark ? 'border-white/10 bg-zinc-950/70 shadow-2xl shadow-black/80' : 'border-slate-200 bg-white shadow-lg'"
        >
          <div
            class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-5"
            :class="isDark ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20' : 'bg-amber-50 text-amber-800 border border-amber-200'"
          >
            <Briefcase class="w-3.5 h-3.5 text-amber-500" />
            <span>{{ t('gateway.badge') }}</span>
          </div>

          <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4" :class="isDark ? 'text-white' : 'text-slate-900'">
            {{ t('gateway.title') }}
          </h2>

          <p class="text-xs sm:text-base max-w-xl mx-auto mb-8 leading-relaxed font-light" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
            {{ t('gateway.desc') }}
          </p>

          <div class="flex flex-wrap justify-center items-center gap-3 font-mono">
            <router-link
              to="/portfolio"
              class="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-xl"
              :class="isDark ? 'bg-white text-zinc-950 hover:bg-zinc-100' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm'"
            >
              <span>{{ t('gateway.cta') }}</span>
              <ArrowRight class="w-4 h-4 text-amber-500 transition-transform duration-200 group-hover:translate-x-1" />
            </router-link>

            <router-link
              to="/about"
              class="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold border transition-all duration-300 hover:scale-[1.02]"
              :class="isDark ? 'bg-zinc-900/60 text-zinc-300 border-white/10 hover:border-white/20' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 shadow-sm'"
            >
              <span>{{ isJapanese ? '経歴・プロフィールを見る' : 'About My SysDev Journey' }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTheme } from "@/composables/useTheme";
import { useLanguage } from "@/composables/useLanguage";
import InteractiveGridBackground from "@/components/InteractiveGridBackground.vue";
import BridgeTerminal from "@/components/BridgeTerminal.vue";
import CinematicScrollHero from "@/components/CinematicScrollHero.vue";
import {
  Briefcase,
  ArrowRight,
} from "lucide-vue-next";

// Theme & Language
const { isDark } = useTheme();
const { t, messages, isJapanese } = useLanguage();

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

// Marquee Tech Stack Items (Reactive to Language)
const marqueeItems = computed(() => messages.value.marquee);
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
