<template>
  <div class="w-full select-none font-mono">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- 1. Dual World Chronometer (Semarang <-> Tokyo Bridge) -->
      <div
        class="lg:col-span-2 p-5 rounded-2xl border transition-all duration-300 hover:border-amber-500/50 flex flex-col justify-between"
        :class="isDark ? 'bg-zinc-950/70 border-zinc-800/80 shadow-lg' : 'bg-white border-slate-200 shadow-sm'"
      >
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <Clock class="w-4 h-4 text-amber-500" />
            <span class="text-xs font-bold uppercase tracking-wider" :class="isDark ? 'text-zinc-200' : 'text-slate-800'">
              Dual Timezone Telemetry · Bridge Sync
            </span>
          </div>
          <span class="inline-flex items-center gap-1.5 text-[10px] px-2 py-0.5 rounded-full border" :class="isDark ? 'border-emerald-500/30 bg-emerald-950/40 text-emerald-400' : 'border-emerald-300 bg-emerald-50 text-emerald-700'">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            LIVE SYNC
          </span>
        </div>

        <div class="grid grid-cols-2 gap-4 my-2">
          <!-- Semarang (Indonesia) -->
          <div class="p-3 rounded-xl border" :class="isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-slate-50 border-slate-200'">
            <div class="flex items-center justify-between text-[11px] mb-1" :class="isDark ? 'text-zinc-400' : 'text-slate-500'">
              <span class="font-bold">🇮🇩 SEMARANG</span>
              <span>WIB (UTC+7)</span>
            </div>
            <div class="text-2xl font-extrabold tracking-tight" :class="isDark ? 'text-zinc-100' : 'text-slate-900'">
              {{ semarangTime }}
            </div>
            <div class="text-[10px] text-amber-500 mt-1 flex items-center gap-1">
              <span>● Production Base</span>
            </div>
          </div>

          <!-- Tokyo (Japan) -->
          <div class="p-3 rounded-xl border" :class="isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-slate-50 border-slate-200'">
            <div class="flex items-center justify-between text-[11px] mb-1" :class="isDark ? 'text-zinc-400' : 'text-slate-500'">
              <span class="font-bold">🇯🇵 TOKYO</span>
              <span>JST (UTC+9)</span>
            </div>
            <div class="text-2xl font-extrabold tracking-tight" :class="isDark ? 'text-zinc-100' : 'text-slate-900'">
              {{ tokyoTime }}
            </div>
            <div class="text-[10px] text-amber-500 mt-1 flex items-center gap-1">
              <span>● International Target</span>
            </div>
          </div>
        </div>

        <div class="mt-3 text-[10px] flex items-center justify-between border-t pt-2" :class="isDark ? 'border-zinc-800/80 text-zinc-500' : 'border-slate-100 text-slate-400'">
          <span>TIMEZONE OFFSET: +2h JST</span>
          <span class="text-amber-500">INDONESIA PRODUCTION · JAPAN ALIGNED</span>
        </div>
      </div>

      <!-- 2. Interactive Tactile Barcode Sound Simulator -->
      <div
        class="p-5 rounded-2xl border transition-all duration-300 hover:border-amber-500/50 flex flex-col justify-between"
        :class="isDark ? 'bg-zinc-950/70 border-zinc-800/80 shadow-lg' : 'bg-white border-slate-200 shadow-sm'"
      >
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <Volume2 class="w-4 h-4 text-amber-500" />
            <span class="text-xs font-bold uppercase tracking-wider" :class="isDark ? 'text-zinc-200' : 'text-slate-800'">
              Scanner Audio Feedback
            </span>
          </div>
          <span class="text-[9px] px-1.5 py-0.5 rounded border" :class="isDark ? 'border-zinc-800 bg-zinc-900 text-zinc-400' : 'border-slate-200 bg-slate-100 text-slate-600'">
            WEB AUDIO API
          </span>
        </div>

        <p class="text-[11px] leading-relaxed mb-3" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
          Industrial scanner audio feedback synthesized directly in-browser to simulate shop-floor validation beeps.
        </p>

        <!-- Test Scanner Audio Button -->
        <button
          @click="playScanSound"
          class="w-full py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all duration-200 active:scale-95"
          :class="isDark ? 'bg-zinc-900 border-zinc-800 text-amber-400 hover:bg-zinc-800 hover:border-amber-500/50' : 'bg-slate-100 border-slate-200 text-amber-800 hover:bg-slate-200'"
        >
          <span class="inline-flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>Test Scan Beep (Pass)</span>
          </span>
          <Activity class="w-3.5 h-3.5 text-amber-500" />
        </button>

        <div class="mt-3 text-[10px] text-zinc-500 flex items-center justify-between">
          <span>Click to trigger scan feedback</span>
          <span class="text-amber-500 font-bold">1850Hz · HIGH BEEP</span>
        </div>
      </div>

      <!-- 3. Operational System Capabilities -->
      <div
        class="p-5 rounded-2xl border transition-all duration-300 hover:border-amber-500/50 flex flex-col justify-between"
        :class="isDark ? 'bg-zinc-950/70 border-zinc-800/80 shadow-lg' : 'bg-white border-slate-200 shadow-sm'"
      >
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <ShieldCheck class="w-4 h-4 text-emerald-400" />
            <span class="text-xs font-bold uppercase tracking-wider" :class="isDark ? 'text-zinc-200' : 'text-slate-800'">
              System Capabilities
            </span>
          </div>
          <span class="text-[9px] text-emerald-400 font-bold">OPERATIONAL</span>
        </div>

        <div class="space-y-2.5 my-2">
          <div class="flex items-center justify-between text-xs">
            <span :class="isDark ? 'text-zinc-400' : 'text-slate-600'">WIP Stage Tracking</span>
            <span class="text-emerald-400 font-bold font-mono">Protrack (Route Cards)</span>
          </div>
          <div class="w-full bg-zinc-800/60 rounded-full h-1.5 overflow-hidden">
            <div class="bg-emerald-400 h-full rounded-full" style="width: 100%"></div>
          </div>

          <div class="flex items-center justify-between text-xs">
            <span :class="isDark ? 'text-zinc-400' : 'text-slate-600'">Shipping Media &amp; Sign</span>
            <span class="text-amber-400 font-bold font-mono">SnapPack (Audit Trail)</span>
          </div>
          <div class="w-full bg-zinc-800/60 rounded-full h-1.5 overflow-hidden">
            <div class="bg-amber-400 h-full rounded-full" style="width: 100%"></div>
          </div>

          <div class="flex items-center justify-between text-xs">
            <span :class="isDark ? 'text-zinc-400' : 'text-slate-600'">Batch Expiry &amp; FEFO</span>
            <span class="text-indigo-400 font-bold font-mono">Stokku (Zoning)</span>
          </div>
          <div class="w-full bg-zinc-800/60 rounded-full h-1.5 overflow-hidden">
            <div class="bg-indigo-400 h-full rounded-full" style="width: 100%"></div>
          </div>
        </div>

        <div class="text-[9px] text-zinc-500 pt-2 border-t" :class="isDark ? 'border-zinc-800' : 'border-slate-100'">
          Deployed for internal production lines at PT. Harrison And Gil-Java.
        </div>
      </div>

      <!-- 4. Industrial Hardware & Interop Layer -->
      <div
        class="lg:col-span-4 p-5 rounded-2xl border transition-all duration-300 hover:border-amber-500/50"
        :class="isDark ? 'bg-zinc-950/70 border-zinc-800/80 shadow-lg' : 'bg-white border-slate-200 shadow-sm'"
      >
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div class="flex items-center gap-2">
            <Cpu class="w-4 h-4 text-amber-500" />
            <span class="text-xs font-bold uppercase tracking-wider" :class="isDark ? 'text-zinc-200' : 'text-slate-800'">
              Shop-Floor Hardware Interoperability &amp; Protocol Support
            </span>
          </div>
          <span class="text-[10px] text-zinc-400 font-mono">
            EDGE DRIVERS · SCANNER FIRMWARE · REST/JSON · SQL TRANSACTIONS
          </span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
          <div
            v-for="hw in hardwareList"
            :key="hw.name"
            class="p-2.5 rounded-xl border flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-500/40"
            :class="isDark ? 'bg-zinc-900/50 border-zinc-800/80' : 'bg-slate-50 border-slate-200'"
          >
            <div class="flex items-center justify-between mb-1">
              <span class="text-[9px] text-amber-500 font-bold">{{ hw.tier }}</span>
              <component :is="hw.icon" class="w-3.5 h-3.5 text-zinc-400" />
            </div>
            <div class="text-xs font-bold leading-tight" :class="isDark ? 'text-zinc-200' : 'text-slate-800'">
              {{ hw.name }}
            </div>
            <div class="text-[9px] mt-1" :class="isDark ? 'text-zinc-500' : 'text-slate-500'">
              {{ hw.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme'
import {
  Clock,
  Volume2,
  ShieldCheck,
  Cpu,
  Activity,
  QrCode,
  Printer,
  Smartphone,
  Server,
  Layers,
  FileCode2,
} from 'lucide-vue-next'

const { isDark } = useTheme()

// Live Timezones
const semarangTime = ref('--:--:--')
const tokyoTime = ref('--:--:--')
let timer = null

const updateTimes = () => {
  const now = new Date()
  semarangTime.value = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(now)

  tokyoTime.value = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Tokyo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(now)
}

// Web Audio API Barcode Scanner Beep Simulator
let audioCtx = null

const playScanSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!AudioContext) return

    if (!audioCtx) audioCtx = new AudioContext()
    if (audioCtx.state === 'suspended') {
      audioCtx.resume()
    }

    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()

    // 1850Hz sharp scanner confirmation tone
    osc.type = 'sine'
    osc.frequency.setValueAtTime(1850, audioCtx.currentTime)

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.09)

    osc.connect(gain)
    gain.connect(audioCtx.destination)

    osc.start()
    osc.stop(audioCtx.currentTime + 0.09)
  } catch (e) {
    console.warn('Audio feedback error:', e)
  }
}

// Hardware Stack
const hardwareList = [
  { name: 'Zebra TC26', tier: 'HANDHELD', desc: 'Android Barcode Imager', icon: Smartphone },
  { name: 'Honeywell HF680', tier: '2D SCAN', desc: 'Omnidirectional Reader', icon: QrCode },
  { name: 'Brother TJ-4020', tier: 'LABEL', desc: 'ZPL II Thermal Print', icon: Printer },
  { name: 'Shop-Floor Tablet', tier: 'STATION', desc: 'React/Vue PWA Terminal', icon: Layers },
  { name: 'Edge Gateway', tier: 'MIDDLEWARE', desc: 'Local Node/PHP Server', icon: Server },
  { name: 'MariaDB Cluster', tier: 'ACID DB', desc: 'Replicated Relational DB', icon: FileCode2 },
]

onMounted(() => {
  updateTimes()
  timer = setInterval(updateTimes, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>
