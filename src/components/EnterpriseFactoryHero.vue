<template>
  <section class="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
    <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      
      <!-- LEFT COLUMN: Identity, Mission & Direct Actions (7 Cols) -->
      <div class="lg:col-span-7 flex flex-col justify-center text-left z-10" data-aos="fade-right">
        
        <!-- Live Factory Division Tag -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono mb-4 w-fit transition-colors shadow-sm"
          :class="isDark 
            ? 'border-amber-500/30 bg-amber-500/10 text-amber-300' 
            : 'border-amber-200 bg-amber-50 text-amber-800'"
        >
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span class="font-semibold tracking-wide">
            {{ isJapanese ? 'PT. HARRISON AND GIL-JAVA • 2名体制 社内SE (SysDev)' : 'PT. HARRISON AND GIL-JAVA • 2-PERSON SYSDEV CORE' }}
          </span>
        </div>

        <!-- Headline: Name with proper CJK word-break (Kinsoku Shori preserved) -->
        <h1 
          class="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 leading-[1.12] transition-colors break-keep sm:whitespace-nowrap"
          :class="isDark ? 'text-white' : 'text-slate-900'"
        >
          {{ isJapanese ? 'リキ・アンディ・アルフィヤント' : 'Riki Andi Alfiyanto' }}
        </h1>

        <!-- Role Subtitle -->
        <div class="flex flex-wrap items-center gap-2 mb-4">
          <span class="text-base sm:text-xl font-bold text-amber-500 dark:text-amber-400 font-mono">
            {{ isJapanese ? '社内SE（現場密着・製造実行システムMES開発）' : 'In-House System Engineer (Manufacturing MES & DX)' }}
          </span>
          <span class="hidden sm:inline text-xs font-mono px-2 py-0.5 rounded border"
            :class="isDark ? 'border-zinc-800 bg-zinc-900 text-zinc-400' : 'border-slate-200 bg-slate-100 text-slate-600'"
          >
            {{ isJapanese ? '家具輸出工場 DX' : 'Factory Automation' }}
          </span>
        </div>

        <!-- Bio Statement (Grounded in Real Factory Operations) -->
        <p 
          class="text-xs sm:text-sm lg:text-base leading-relaxed mb-6 max-w-2xl font-normal transition-colors"
          :class="isDark ? 'text-zinc-300' : 'text-slate-600'"
        >
          {{ isJapanese 
            ? 'インドネシアの高級家具輸出工場（従業員500名）にて、少数精鋭2名の社内SE体制で現場に常駐。紙伝票の手作業を廃止し、Zebra TC26 PDA端末連携・バーコード工程進捗・FEFO原材料倉庫・多通貨調達システムを自ら設計・開発・運用保守。現場のオペレーターに寄り添い、カイゼン（改善）とシステム停止ゼロを両立させています。' 
            : 'Stationed on the factory floor of a 500-employee luxury furniture export manufacturer (PT. Harrison And Gil-Java). Operating within a lean 2-person SysDev division, designing and deploying reliable barcode MES, FEFO raw material warehouse management, and cross-currency procurement systems bridging frontline operators with enterprise backends.'
          }}
        </p>

        <!-- Quick Quantitative KPI Badges (Instant Credibility for Japanese Recruiters) -->
        <div 
          class="grid grid-cols-3 gap-3 p-3.5 sm:p-4 rounded-2xl border mb-6 max-w-xl font-mono transition-colors shadow-sm"
          :class="isDark ? 'bg-zinc-900/60 border-zinc-800/80' : 'bg-slate-100/80 border-slate-200/90'"
        >
          <div class="border-r pr-2" :class="isDark ? 'border-zinc-800' : 'border-slate-200'">
            <div class="text-lg sm:text-2xl font-extrabold text-amber-500">8 モジュール</div>
            <div class="text-[10px] sm:text-[11px] truncate" :class="isDark ? 'text-zinc-400' : 'text-slate-500'">
              {{ isJapanese ? 'MES本番稼働中' : 'Active MES Suite' }}
            </div>
          </div>
          <div class="border-r pr-2" :class="isDark ? 'border-zinc-800' : 'border-slate-200'">
            <div class="text-lg sm:text-2xl font-extrabold text-emerald-500">0 件</div>
            <div class="text-[10px] sm:text-[11px] truncate" :class="isDark ? 'text-zinc-400' : 'text-slate-500'">
              {{ isJapanese ? 'ライン停止ゼロ' : 'Zero Line Breakdown' }}
            </div>
          </div>
          <div>
            <div class="text-lg sm:text-2xl font-extrabold text-sky-500">A2 認定</div>
            <div class="text-[10px] sm:text-[11px] truncate" :class="isDark ? 'text-zinc-400' : 'text-slate-500'">
              {{ isJapanese ? 'JFT-Basic 日本語' : 'JFT-Basic A2 Japanese' }}
            </div>
          </div>
        </div>

        <!-- 3 Primary Action Buttons -->
        <div class="flex flex-wrap items-center gap-2.5 sm:gap-3 font-mono">
          <!-- Button 1: Scroll to Projects -->
          <button
            @click="scrollToProjects"
            class="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs font-semibold tracking-wide bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-amber-500/20 cursor-pointer"
          >
            <FolderOpen class="w-3.5 h-3.5" />
            <span>{{ isJapanese ? '主要システム実績を見る' : 'Explore Factory Systems' }}</span>
            <ArrowDown class="w-3.5 h-3.5" />
          </button>

          <!-- Button 2: Shokumu Keirekisho (JIS A4 2P) -->
          <router-link
            to="/keirekisho"
            class="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 hover:scale-[1.02]"
            :class="isDark 
              ? 'border-amber-500/40 bg-zinc-900/90 text-amber-300 hover:bg-amber-500/10' 
              : 'border-amber-300 bg-amber-50/80 text-amber-900 hover:bg-amber-100 shadow-sm'"
          >
            <FileText class="w-3.5 h-3.5 text-amber-500" />
            <span>{{ isJapanese ? '職務経歴書 (JIS A4 2枚)' : 'Japanese Resume (2P)' }}</span>
          </router-link>

          <!-- Button 3: Email / Contact -->
          <a
            href="mailto:rikiandi18@gmail.com"
            class="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 hover:scale-[1.02]"
            :class="isDark 
              ? 'border-zinc-800 bg-zinc-950/70 text-zinc-300 hover:border-zinc-700 hover:text-white' 
              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 shadow-sm'"
          >
            <Mail class="w-3.5 h-3.5 text-amber-500" />
            <span>{{ isJapanese ? 'メール連絡' : 'Contact Email' }}</span>
          </a>
        </div>
      </div>

      <!-- RIGHT COLUMN: Authentic High-Res Portrait & Production Telemetry (5 Cols) -->
      <div class="lg:col-span-5 flex justify-center relative" data-aos="fade-left">
        
        <!-- Ambient Warm Backlight Glow -->
        <div class="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-emerald-500/10 to-amber-500/20 blur-2xl opacity-60 pointer-events-none -z-10"></div>

        <!-- Master Profile Container (Crisp Portrait with Clear Eyes and Professional Suit) -->
        <div 
          class="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[420px] rounded-3xl border overflow-hidden transition-all duration-300 shadow-2xl"
          :class="isDark ? 'bg-zinc-950/80 border-zinc-800 shadow-black/80' : 'bg-white border-slate-200 shadow-xl'"
        >
          <!-- Top Card HUD Header -->
          <div 
            class="px-4 py-3 border-b flex items-center justify-between text-[11px] font-mono pointer-events-none backdrop-blur-md"
            :class="isDark ? 'border-zinc-800 bg-zinc-900/80 text-zinc-400' : 'border-slate-100 bg-slate-50 text-slate-600'"
          >
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="font-bold tracking-wider" :class="isDark ? 'text-zinc-200' : 'text-slate-800'">
                RIKI ANDI // SYSDEV
              </span>
            </div>
            <span class="text-[10px] text-amber-500 font-bold uppercase tracking-wider">
              ONLINE
            </span>
          </div>

          <!-- The Real Authentic Photo (profile.jpg - Natural Daylight, Crisp Eyes, Professional Grey Suit) -->
          <div class="relative w-full aspect-[4/4.8] overflow-hidden bg-slate-100 dark:bg-zinc-900">
            <img
              src="/img/profile.jpg"
              alt="Riki Andi Alfiyanto - In-House System Engineer"
              class="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
              loading="eager"
            />

            <!-- Subtle Vignette Gradient for Legibility -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

            <!-- Bottom Floating Telemetry Overlay (Anchored to Real Factory Context) -->
            <div class="absolute bottom-3 inset-x-3 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white font-mono text-[10px] space-y-1.5 shadow-xl">
              <div class="flex items-center justify-between text-zinc-300 pb-1 border-b border-white/10">
                <span class="tracking-wider uppercase text-amber-400 font-bold">
                  {{ isJapanese ? '工場システム稼働状況' : 'FACTORY TELEMETRY' }}
                </span>
                <span class="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  NORMAL
                </span>
              </div>
              <div class="flex items-center justify-between text-zinc-300">
                <span class="text-zinc-400">HARDWARE:</span>
                <span class="text-white font-semibold">ZEBRA TC26 • USB WEDGE</span>
              </div>
              <div class="flex items-center justify-between text-zinc-300">
                <span class="text-zinc-400">SYNC:</span>
                <span class="text-amber-300 font-semibold">SEMARANG (WIB) ⟷ TOKYO (JST)</span>
              </div>
            </div>
          </div>

          <!-- Bottom Card Footer with Direct Profile Tags -->
          <div 
            class="p-3.5 border-t flex items-center justify-between font-mono text-[11px]"
            :class="isDark ? 'border-zinc-800 bg-zinc-950 text-zinc-400' : 'border-slate-100 bg-white text-slate-600'"
          >
            <div class="flex items-center gap-1.5">
              <CheckCircle2 class="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>{{ isJapanese ? '現場密着 改善SE' : 'Field In-House SE' }}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-amber-500 font-bold">●</span>
              <span>{{ isJapanese ? '日本企業・製造DX対応' : 'Japan Aligned' }}</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useTheme } from "@/composables/useTheme";
import { useLanguage } from "@/composables/useLanguage";
import {
  FolderOpen,
  FileText,
  Mail,
  ArrowDown,
  CheckCircle2,
} from "lucide-vue-next";

const { isDark } = useTheme();
const { isJapanese } = useLanguage();

const scrollToProjects = () => {
  const el = document.getElementById("featured-projects");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
