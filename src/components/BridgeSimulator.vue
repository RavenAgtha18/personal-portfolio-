<template>
  <div
    class="w-full rounded-2xl border transition-all duration-300 overflow-hidden font-mono text-xs select-none"
    :class="isDark ? 'bg-zinc-950/80 border-zinc-800 shadow-2xl shadow-black/80' : 'bg-white border-slate-200 shadow-lg'"
  >
    <!-- Console Top Bar -->
    <div
      class="px-4 py-2.5 border-b flex items-center justify-between"
      :class="isDark ? 'border-zinc-800/80 bg-zinc-900/60' : 'border-slate-100 bg-slate-50'"
    >
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
        <span class="ml-2 font-semibold tracking-wider text-[11px]" :class="isDark ? 'text-zinc-300' : 'text-slate-700'">
          BRIDGE ARCHITECTURE TELEMETRY SIMULATOR
        </span>
      </div>

      <div class="flex items-center gap-3 text-[10px]" :class="isDark ? 'text-zinc-400' : 'text-slate-500'">
        <span class="inline-flex items-center gap-1">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          REAL-TIME ENGINE
        </span>
        <span class="hidden sm:inline">LATENCY: {{ currentLatency }}ms</span>
      </div>
    </div>

    <!-- Interactive Architecture Pipeline View -->
    <div class="p-5 sm:p-7">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
        <!-- Connecting Data Bus Line (Desktop) -->
        <div
          class="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-[2px] -translate-y-1/2 -z-0"
          :class="isDark ? 'bg-zinc-800' : 'bg-slate-200'"
        >
          <!-- Animated Travelling Pulse -->
          <div
            v-if="isTransmitting"
            class="h-full bg-amber-400 shadow-[0_0_12px_#f59e0b] transition-all duration-700"
            :style="{ width: transmissionProgress + '%' }"
          ></div>
        </div>

        <!-- Node 1: Shop-Floor Layer -->
        <div
          class="p-4 rounded-xl border relative z-10 transition-all duration-300"
          :class="[
            activeStage === 1
              ? isDark
                ? 'border-amber-500/80 bg-zinc-900 shadow-lg shadow-amber-500/10'
                : 'border-amber-500 bg-amber-50/50 shadow-md'
              : isDark
              ? 'border-zinc-800 bg-zinc-900/40'
              : 'border-slate-200 bg-slate-50/60'
          ]"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] uppercase font-bold text-amber-500">Tier 1 · Physical</span>
            <QrCode class="w-4 h-4 text-zinc-400" />
          </div>
          <h4 class="font-bold text-sm mb-1" :class="isDark ? 'text-zinc-100' : 'text-slate-900'">Shop-Floor Devices</h4>
          <p class="text-[11px] leading-relaxed mb-3" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
            Industrial barcode scanners, operator tablets, and weighing scales on assembly line.
          </p>
          <div class="text-[10px] px-2 py-1 rounded bg-black/20 font-mono" :class="isDark ? 'text-zinc-300' : 'text-slate-700'">
            Event: <span class="text-amber-400 font-semibold">{{ currentEvent.source }}</span>
          </div>
        </div>

        <!-- Node 2: Bridge SE Middleware -->
        <div
          class="p-4 rounded-xl border relative z-10 transition-all duration-300"
          :class="[
            activeStage === 2
              ? isDark
                ? 'border-amber-500/80 bg-zinc-900 shadow-lg shadow-amber-500/10'
                : 'border-amber-500 bg-amber-50/50 shadow-md'
              : isDark
              ? 'border-zinc-800 bg-zinc-900/40'
              : 'border-slate-200 bg-slate-50/60'
          ]"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] uppercase font-bold text-amber-500">Tier 2 · Bridge Logic</span>
            <Cpu class="w-4 h-4 text-zinc-400" />
          </div>
          <h4 class="font-bold text-sm mb-1" :class="isDark ? 'text-zinc-100' : 'text-slate-900'">Bridge SE Middleware</h4>
          <p class="text-[11px] leading-relaxed mb-3" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
            Validates business rules, isolates ACID transactions, formats Japanese requirements into SQL.
          </p>
          <div class="text-[10px] px-2 py-1 rounded bg-black/20 font-mono" :class="isDark ? 'text-zinc-300' : 'text-slate-700'">
            State: <span class="text-emerald-400 font-semibold">{{ currentEvent.status }}</span>
          </div>
        </div>

        <!-- Node 3: Executive Cloud ERP -->
        <div
          class="p-4 rounded-xl border relative z-10 transition-all duration-300"
          :class="[
            activeStage === 3
              ? isDark
                ? 'border-amber-500/80 bg-zinc-900 shadow-lg shadow-amber-500/10'
                : 'border-amber-500 bg-amber-50/50 shadow-md'
              : isDark
              ? 'border-zinc-800 bg-zinc-900/40'
              : 'border-slate-200 bg-slate-50/60'
          ]"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] uppercase font-bold text-amber-500">Tier 3 · Enterprise</span>
            <Database class="w-4 h-4 text-zinc-400" />
          </div>
          <h4 class="font-bold text-sm mb-1" :class="isDark ? 'text-zinc-100' : 'text-slate-900'">Relational DB &amp; ERP</h4>
          <p class="text-[11px] leading-relaxed mb-3" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
            Real-time management dashboards, automated shipping approval, and audit logs.
          </p>
          <div class="text-[10px] px-2 py-1 rounded bg-black/20 font-mono" :class="isDark ? 'text-zinc-300' : 'text-slate-700'">
            Committed: <span class="text-amber-400 font-semibold">{{ totalCommits }} payloads</span>
          </div>
        </div>
      </div>

      <!-- Action Simulation Triggers (Interactive for Recruiter) -->
      <div class="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t" :class="isDark ? 'border-zinc-800/80' : 'border-slate-100'">
        <div class="flex items-center gap-2">
          <span class="text-[11px] font-semibold" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">Test Bridge Event:</span>
          <button
            @click="triggerSimulation('barcode')"
            :disabled="isTransmitting"
            class="px-3 py-1.5 rounded-lg border text-xs transition-all duration-200 disabled:opacity-50"
            :class="isDark ? 'bg-zinc-900 border-zinc-700 text-zinc-200 hover:border-amber-500 hover:text-amber-400' : 'bg-slate-100 border-slate-300 text-slate-800 hover:border-amber-500'"
          >
            ⚡ Scan Pallet Barcode
          </button>
          <button
            @click="triggerSimulation('qc')"
            :disabled="isTransmitting"
            class="px-3 py-1.5 rounded-lg border text-xs transition-all duration-200 disabled:opacity-50"
            :class="isDark ? 'bg-zinc-900 border-zinc-700 text-zinc-200 hover:border-amber-500 hover:text-amber-400' : 'bg-slate-100 border-slate-300 text-slate-800 hover:border-amber-500'"
          >
            🔍 Log QC Defect
          </button>
        </div>

        <!-- Terminal Output Stream -->
        <div class="text-[10px] text-zinc-500 flex items-center gap-1.5">
          <Terminal class="w-3.5 h-3.5 text-amber-500" />
          <span class="truncate max-w-[280px] font-mono">{{ consoleLog }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { QrCode, Cpu, Database, Terminal } from 'lucide-vue-next'

const { isDark } = useTheme()

const activeStage = ref(1)
const isTransmitting = ref(false)
const transmissionProgress = ref(0)
const totalCommits = ref(1482)
const currentLatency = ref(24)

const currentEvent = ref({
  source: 'Zebra TC26 Handheld (Line A)',
  status: 'IDLE · WAITING TRIGGER'
})

const consoleLog = ref('SYSTEM_READY: Awaiting physical event trigger...')

const triggerSimulation = (type) => {
  if (isTransmitting.value) return
  isTransmitting.value = true
  transmissionProgress.value = 0

  if (type === 'barcode') {
    currentEvent.value = {
      source: 'Zebra TC26 (Pallet #SN-8924)',
      status: 'VERIFYING SIGNATURE...'
    }
    consoleLog.value = 'POST /api/v1/shipping/verify { barcode: "CG-LUX-8924" }'
  } else {
    currentEvent.value = {
      source: 'QC Tablet (Station 4)',
      status: 'AUDITING DEFECT TOLERANCE...'
    }
    consoleLog.value = 'POST /api/v1/qc/defect-gate { tolerance_mm: 0.18, pass: true }'
  }

  // Stage 1 -> 2
  activeStage.value = 1
  setTimeout(() => {
    activeStage.value = 2
    transmissionProgress.value = 50
    currentLatency.value = Math.floor(Math.random() * 8 + 18)
    consoleLog.value = 'MIDDLEWARE: Validated ACID isolation. Committing to MySQL...'
  }, 400)

  // Stage 2 -> 3
  setTimeout(() => {
    activeStage.value = 3
    transmissionProgress.value = 100
    totalCommits.value++
    consoleLog.value = 'COMMITTED: 200 OK · Shipping locked · Audit log saved (0.02s)'
    currentEvent.value.status = 'TRANSACTION COMMITTED'
  }, 900)

  // Reset to idle
  setTimeout(() => {
    isTransmitting.value = false
    activeStage.value = 0
  }, 1600)
}
</script>
