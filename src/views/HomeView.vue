<template>
  <main
    @mousemove="handleMouseMove"
    class="relative min-h-screen transition-colors duration-300 overflow-x-clip"
    :class="isDark ? 'bg-[#09090b]/85' : 'bg-slate-50/75'"
  >
    <!-- Dynamic Ambient Grid Background -->
    <InteractiveGridBackground />

    <!-- Interactive Cursor Ambient Spotlight -->
    <div
      class="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-300"
      :style="spotlightStyle"
    ></div>

    <!-- 1. SIGNATURE ENTERPRISE IN-HOUSE SE HERO (Clean 2-Column Split, Natural 1-Screen) -->
    <EnterpriseFactoryHero />

    <!-- 2. FACTORY IMPACT QUANTITATIVE KPI STRIP (Instant Credibility for Japanese Recruiters) -->
    <section class="relative z-10 py-6 sm:py-8 border-y transition-colors"
      :class="isDark ? 'border-zinc-800/80 bg-zinc-950/60' : 'border-slate-200/90 bg-white/80 backdrop-blur-md shadow-sm'"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 font-mono text-center">
          <!-- Metric 1: SnapPack -->
          <div class="p-3 sm:p-4 rounded-xl border transition-all"
            :class="isDark ? 'border-zinc-800/80 bg-zinc-900/40 hover:border-amber-500/40' : 'border-slate-200 bg-slate-50 hover:border-amber-300'"
          >
            <div class="text-xl sm:text-3xl font-extrabold text-amber-500 mb-1">45分 → &lt;3分</div>
            <div class="text-[11px] sm:text-xs font-semibold" :class="isDark ? 'text-zinc-200' : 'text-slate-800'">
              {{ isJapanese ? 'SnapPack 梱包証跡検索' : 'SnapPack Audit Time' }}
            </div>
            <div class="text-[10px] text-zinc-500 mt-0.5">
              {{ isJapanese ? 'コンテナ1本あたり94%工数削減' : '94% Reduction per container' }}
            </div>
          </div>

          <!-- Metric 2: ProScan -->
          <div class="p-3 sm:p-4 rounded-xl border transition-all"
            :class="isDark ? 'border-zinc-800/80 bg-zinc-900/40 hover:border-amber-500/40' : 'border-slate-200 bg-slate-50 hover:border-amber-300'"
          >
            <div class="text-xl sm:text-3xl font-extrabold text-emerald-500 mb-1">4日 → 1.5日</div>
            <div class="text-[11px] sm:text-xs font-semibold" :class="isDark ? 'text-zinc-200' : 'text-slate-800'">
              {{ isJapanese ? 'ProScan 倉庫実地棚卸' : 'ProScan Stock Opname' }}
            </div>
            <div class="text-[10px] text-zinc-500 mt-0.5">
              {{ isJapanese ? '棚卸工数62.5%削減・差異0.3%未満' : '62.5% time saved, <0.3% variance' }}
            </div>
          </div>

          <!-- Metric 3: Protrack WIP -->
          <div class="p-3 sm:p-4 rounded-xl border transition-all"
            :class="isDark ? 'border-zinc-800/80 bg-zinc-900/40 hover:border-amber-500/40' : 'border-slate-200 bg-slate-50 hover:border-amber-300'"
          >
            <div class="text-xl sm:text-3xl font-extrabold text-sky-500 mb-1">24h → &lt;1秒</div>
            <div class="text-[11px] sm:text-xs font-semibold" :class="isDark ? 'text-zinc-200' : 'text-slate-800'">
              {{ isJapanese ? 'Protrack WIP工程進捗' : 'Protrack WIP Visibility' }}
            </div>
            <div class="text-[10px] text-zinc-500 mt-0.5">
              {{ isJapanese ? '紙集計遅れ解消・リアルタイム化' : 'Real-time scan event interlock' }}
            </div>
          </div>

          <!-- Metric 4: FinWise / QC Gate -->
          <div class="p-3 sm:p-4 rounded-xl border transition-all"
            :class="isDark ? 'border-zinc-800/80 bg-zinc-900/40 hover:border-amber-500/40' : 'border-slate-200 bg-slate-50 hover:border-amber-300'"
          >
            <div class="text-xl sm:text-3xl font-extrabold text-amber-400 mb-1">100% 防止</div>
            <div class="text-[11px] sm:text-xs font-semibold" :class="isDark ? 'text-zinc-200' : 'text-slate-800'">
              {{ isJapanese ? '調達予算超過 & 欠陥流出' : 'Budget Overruns & Defect Outflow' }}
            </div>
            <div class="text-[10px] text-zinc-500 mt-0.5">
              {{ isJapanese ? 'ACID排他ロック & 検査ゲート' : 'Pre-commit locking & poka-yoke' }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. INFINITE ENGINEERING TECH MARQUEE -->
    <section
      class="relative z-10 py-4 border-b overflow-hidden"
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

    <!-- 4. FEATURED PRODUCTION SYSTEMS CATALOG (Projects Directly Visible on Homepage!) -->
    <section id="featured-projects" class="relative z-10 py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div class="mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono mb-3 border"
            :class="isDark ? 'border-amber-500/30 bg-amber-500/10 text-amber-400' : 'border-amber-300 bg-amber-50 text-amber-800'"
          >
            <Briefcase class="w-3.5 h-3.5 text-amber-500" />
            <span>{{ isJapanese ? '自社開発システム実績' : 'Production Systems Portfolio' }}</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight" :class="isDark ? 'text-white' : 'text-slate-900'">
            {{ isJapanese ? '製造現場を支える主要MES基盤' : 'Core In-House Factory Systems' }}
          </h2>
          <p class="text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
            {{ isJapanese 
              ? 'PT. Harrison And Gil-Javaの木工・組立・仕上・物流現場で毎日稼働している実運用システム。要件定義からDB設計、ハードウェア連携まで少数精鋭で一貫開発。' 
              : 'Production systems powering daily operations across woodworking, assembly, finishing, and logistics at PT. Harrison And Gil-Java.'
            }}
          </p>
        </div>

        <router-link
          to="/portfolio"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold border transition-all duration-200 hover:scale-[1.02] shrink-0 self-start sm:self-auto"
          :class="isDark 
            ? 'border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:border-amber-500/50 hover:text-white' 
            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 shadow-sm'"
        >
          <span>{{ isJapanese ? '全12件の実績を見る' : 'View Full 12 Systems' }}</span>
          <ArrowRight class="w-3.5 h-3.5 text-amber-500" />
        </router-link>
      </div>

      <!-- Projects Grid (Directly Rendered Using Authentic Cards) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <CaseStudyCard
          v-for="item in featuredProjects"
          :key="item.id"
          :project="item"
        />
      </div>
    </section>

    <!-- 5. INTERACTIVE DEVELOPER & RECRUITER TERMINAL -->
    <section class="relative z-10 py-16 sm:py-20 px-4 sm:px-6 border-t" :class="isDark ? 'border-zinc-800/80 bg-zinc-950/40' : 'border-slate-200/80 bg-slate-100/30'">
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

    <!-- 6. JAPANESE RESUME (職務経歴書) ACCESS & CALL TO ACTION -->
    <section class="relative z-10 py-16 sm:py-24 px-4 sm:px-6">
      <div class="max-w-4xl mx-auto">
        <div
          class="text-center p-8 sm:p-12 rounded-3xl border transition-all duration-300 backdrop-blur-xl"
          :class="isDark ? 'border-white/10 bg-zinc-950/70 shadow-2xl shadow-black/80' : 'border-slate-200 bg-white shadow-lg'"
        >
          <div
            class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-4"
            :class="isDark ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20' : 'bg-amber-50 text-amber-800 border border-amber-200'"
          >
            <FileText class="w-3.5 h-3.5 text-amber-500" />
            <span>{{ isJapanese ? '職務経歴書 (JIS A4・2枚)' : 'Japanese Formal Shokumu Keirekisho' }}</span>
          </div>

          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3" :class="isDark ? 'text-white' : 'text-slate-900'">
            {{ isJapanese ? '日系IT企業・製造DX向け 職務経歴書' : 'Enterprise Japanese Resume Ready' }}
          </h2>

          <p class="text-xs sm:text-sm max-w-xl mx-auto mb-6 leading-relaxed" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
            {{ isJapanese 
              ? 'PT. Harrison And Gil-Javaでの社内SE実務実績、保有技術スタック、および自己PRをJIS規格A4・2枚に厳密準拠。Word (.doc) および 印刷用PDFで即時出力可能。' 
              : 'Strict 2-page JIS A4 compliance for Japanese corporate hiring managers. Formatted for instant Word (.doc) and PDF export.'
            }}
          </p>

          <div class="flex flex-wrap justify-center items-center gap-3 font-mono">
            <router-link
              to="/keirekisho"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-amber-500/20"
            >
              <FileText class="w-4 h-4 text-slate-950" />
              <span>{{ isJapanese ? '職務経歴書を確認・出力' : 'View & Export Resume' }}</span>
            </router-link>

            <router-link
              to="/about"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold border transition-all duration-200 hover:scale-[1.02]"
              :class="isDark ? 'bg-zinc-900/60 text-zinc-300 border-white/10 hover:border-white/20' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 shadow-sm'"
            >
              <span>{{ isJapanese ? '詳細プロフィール・経歴' : 'Full Career Journey' }}</span>
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
import { projects } from "@/data/projects";
import InteractiveGridBackground from "@/components/InteractiveGridBackground.vue";
import BridgeTerminal from "@/components/BridgeTerminal.vue";
import EnterpriseFactoryHero from "@/components/EnterpriseFactoryHero.vue";
import CaseStudyCard from "@/components/CaseStudyCard.vue";
import {
  Briefcase,
  ArrowRight,
  FileText,
} from "lucide-vue-next";

// Theme & Language
const { isDark } = useTheme();
const { t, messages, isJapanese } = useLanguage();

// Featured Factory Systems (Directly displayed on Homepage)
const featuredProjects = computed(() => {
  return projects.filter(p => p.isCaseStudy);
});

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
