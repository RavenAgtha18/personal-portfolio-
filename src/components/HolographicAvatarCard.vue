<template>
  <div class="relative w-full max-w-[380px] sm:max-w-[420px] mx-auto select-none perspective-[1200px]">
    <!-- Mode Selection Pills (Cyber Industrial Controls) -->
    <div class="flex items-center justify-between mb-3 px-1">
      <div class="flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
        <span class="text-[10px] font-mono tracking-wider font-semibold uppercase" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
          Sensor Lens:
        </span>
      </div>
      <div class="flex items-center gap-1 p-0.5 rounded-lg border text-[10px] font-mono" :class="isDark ? 'bg-zinc-900/80 border-zinc-800' : 'bg-slate-100 border-slate-200'">
        <button
          v-for="mode in modes"
          :key="mode.id"
          @click="selectMode(mode.id)"
          class="px-2 py-0.5 rounded transition-all duration-200 font-medium"
          :class="[
            currentMode === mode.id
              ? isDark
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'bg-white text-amber-800 border border-slate-200 shadow-sm'
              : isDark
              ? 'text-zinc-400 hover:text-zinc-200'
              : 'text-slate-500 hover:text-slate-900'
          ]"
        >
          {{ mode.label }}
        </button>
      </div>
    </div>

    <!-- The 3D Interactive Tilt Card -->
    <div
      ref="cardRef"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      @mouseenter="handleMouseEnter"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      class="holo-card relative rounded-2xl border overflow-hidden transition-transform duration-150 ease-out cursor-pointer group"
      :style="cardTransformStyle"
      :class="isDark ? 'bg-zinc-950 border-zinc-800 shadow-2xl shadow-black/80' : 'bg-white border-slate-200 shadow-xl'"
      @click="triggerDiagnosticScan"
    >
      <!-- Corner Industrial Framing Reticles -->
      <div class="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 pointer-events-none z-30 transition-colors duration-200" :class="reticleColorClass"></div>
      <div class="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 pointer-events-none z-30 transition-colors duration-200" :class="reticleColorClass"></div>
      <div class="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 pointer-events-none z-30 transition-colors duration-200" :class="reticleColorClass"></div>
      <div class="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 pointer-events-none z-30 transition-colors duration-200" :class="reticleColorClass"></div>

      <!-- Top HUD Header -->
      <div
        class="absolute top-0 inset-x-0 z-30 px-4 py-2.5 flex items-center justify-between text-[10px] font-mono pointer-events-none backdrop-blur-md border-b"
        :class="isDark ? 'bg-zinc-950/70 border-zinc-800/80 text-zinc-400' : 'bg-white/70 border-slate-200/80 text-slate-600'"
      >
        <div class="flex items-center gap-2">
          <span class="font-bold tracking-widest text-amber-500">ID // RIKI.01</span>
          <span class="text-zinc-600">|</span>
          <span class="hidden sm:inline">SYS.SECURE</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{{ isScanning ? 'SCANNING...' : 'VERIFIED' }}</span>
          </span>
          <span class="text-[9px] px-1.5 py-0.2 rounded border" :class="isDark ? 'border-zinc-800 bg-zinc-900 text-zinc-300' : 'border-slate-200 bg-slate-100 text-slate-700'">
            {{ activeModeConfig.badge }}
          </span>
        </div>
      </div>

      <!-- Portrait Image Container with Mode Filters -->
      <div class="relative w-full aspect-[4/5] overflow-hidden bg-zinc-950">
        <!-- Photo Element -->
        <img
          src="/img/profile.jpg"
          alt="Riki Andi Alfiyanto - Bridge Software Engineer"
          class="w-full h-full object-cover object-center transition-all duration-500"
          :class="[
            activeModeConfig.imgClass,
            isScanning ? 'scale-105 filter brightness-125' : 'group-hover:scale-105'
          ]"
        />

        <!-- Lens Overlays -->

        <!-- 1. CYBER HUD OVERLAY -->
        <div
          v-if="currentMode === 'cyber'"
          class="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 cyber-overlay"
        >
          <!-- Scanlines -->
          <div class="absolute inset-0 bg-scanlines opacity-40 pointer-events-none"></div>

          <!-- Face Target Box -->
          <div class="relative w-44 h-48 mx-auto mt-10 border border-emerald-400/80 rounded-lg p-2 flex flex-col justify-between animate-pulse">
            <div class="flex justify-between text-[8px] font-mono text-emerald-400">
              <span>FACE_RECOG: LOCK</span>
              <span>CONF: 99.8%</span>
            </div>
            <div class="w-6 h-6 border-b-2 border-r-2 border-emerald-400 self-end"></div>
          </div>

          <!-- Live Telemetry Tele-text -->
          <div class="relative z-10 text-[9px] font-mono text-emerald-400 space-y-0.5 bg-black/60 p-2 rounded backdrop-blur-sm border border-emerald-500/30">
            <div>TARGET: RIKI ANDI ALFIYANTO</div>
            <div>ROLE: BRIDGE SE / TECHNICAL BA</div>
            <div>SPEC: FACTORY AUTOMATION &amp; MES</div>
          </div>
        </div>

        <!-- 2. THERMAL FLIR OVERLAY -->
        <div
          v-if="currentMode === 'thermal'"
          class="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4 thermal-gradient-overlay"
        >
          <!-- Thermal Scale Bar -->
          <div class="absolute right-3 top-14 bottom-14 w-3 rounded-full overflow-hidden border border-white/40 flex flex-col">
            <div class="h-1/4 bg-white"></div>
            <div class="h-1/4 bg-yellow-400"></div>
            <div class="h-1/4 bg-red-600"></div>
            <div class="h-1/4 bg-purple-900"></div>
          </div>

          <!-- Crosshairs -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/90 text-center font-mono pointer-events-none">
            <div class="w-10 h-10 border border-white/60 rounded-full flex items-center justify-center mx-auto mb-1">
              <div class="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></div>
            </div>
            <div class="text-[10px] font-bold text-yellow-300 drop-shadow">CORE: 36.6°C</div>
            <div class="text-[8px] text-white/80">SENSOR: FLIR-E8 PRO</div>
          </div>

          <div class="text-[9px] font-mono text-white/90 bg-black/60 px-2 py-1 rounded w-fit mt-auto border border-white/20">
            INDUSTRIAL THERMAL INSPECTION · PASS
          </div>
        </div>

        <!-- 3. CAD BLUEPRINT OVERLAY -->
        <div
          v-if="currentMode === 'cad'"
          class="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-5 cad-grid-overlay font-mono text-cyan-300"
        >
          <div class="flex justify-between text-[9px] border-b border-cyan-400/40 pb-1 mt-8">
            <span>DWG NO: SE-2026-09</span>
            <span>SCALE: 1:1 ISO</span>
          </div>

          <!-- Technical Dimensions Callouts -->
          <div class="relative w-full h-32 border border-dashed border-cyan-400/40 rounded flex items-center justify-center">
            <span class="text-[9px] bg-blue-950/80 px-2 py-0.5 rounded border border-cyan-400/50">
              SYSTEM ARCHITECTURE SPEC // CAD
            </span>
          </div>

          <div class="text-[9px] flex justify-between border-t border-cyan-400/40 pt-1">
            <span>LAT: -7.0051°</span>
            <span>LNG: 110.4381°</span>
            <span>TOL: ±0.02mm</span>
          </div>
        </div>

        <!-- Animated Laser Sweep on Scan -->
        <div
          v-if="isScanning"
          class="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_15px_#f59e0b] z-30 laser-sweep"
        ></div>

        <!-- Holographic Specular Glare (Light follows mouse angle) -->
        <div
          class="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
          :style="glareStyle"
        ></div>

        <!-- Prismatic Rainbow Holo-Foil Reflection -->
        <div
          class="pointer-events-none absolute inset-0 z-20 mix-blend-color-dodge opacity-30 transition-opacity duration-300"
          :style="holoFoilStyle"
        ></div>
      </div>

      <!-- Bottom Interactive Bar -->
      <div
        class="relative z-30 px-4 py-3 border-t backdrop-blur-md flex items-center justify-between font-mono text-xs"
        :class="isDark ? 'bg-zinc-950/80 border-zinc-800/80' : 'bg-white/90 border-slate-200'"
      >
        <div>
          <div class="font-bold text-[13px] leading-tight" :class="isDark ? 'text-zinc-100' : 'text-slate-900'">
            Riki Andi Alfiyanto
          </div>
          <div class="text-[10px] mt-0.5" :class="isDark ? 'text-amber-400' : 'text-amber-700'">
            Bridge SE &amp; Technical BA
          </div>
        </div>

        <button
          @click.stop="triggerDiagnosticScan"
          :disabled="isScanning"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[10px] font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50"
          :class="isDark ? 'bg-zinc-900 border-zinc-700 text-zinc-200 hover:border-amber-500 hover:text-amber-300' : 'bg-slate-100 border-slate-300 text-slate-800 hover:border-amber-500'"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-amber-500" :class="{ 'animate-ping': isScanning }"></span>
          <span>{{ isScanning ? 'ANALYZING...' : '⚡ SCAN' }}</span>
        </button>
      </div>

      <!-- Real-Time Telemetry Bar at very bottom -->
      <div
        class="px-4 py-1.5 border-t text-[9px] font-mono flex items-center justify-between"
        :class="isDark ? 'bg-black/60 border-zinc-900 text-zinc-500' : 'bg-slate-50 border-slate-100 text-slate-400'"
      >
        <span class="truncate">COORD: [{{ mouseXPercent }}%, {{ mouseYPercent }}%]</span>
        <span class="text-amber-500 font-semibold">{{ currentMode.toUpperCase() }} MODE ACTIVE</span>
      </div>
    </div>

    <!-- Subtitle Helper Note -->
    <div class="mt-2 text-center text-[10px] font-mono" :class="isDark ? 'text-zinc-500' : 'text-slate-400'">
      Hover &amp; tilt 3D card · Click to trigger diagnostic scan
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { isDark } = useTheme()

// Mode Definitions
const modes = [
  { id: 'studio', label: 'Studio' },
  { id: 'cyber', label: 'Cyber HUD' },
  { id: 'thermal', label: 'Thermal IR' },
  { id: 'cad', label: 'CAD Blue' },
]

const currentMode = ref('studio')
const isScanning = ref(false)

// Mode Configurations
const modeConfigs = {
  studio: {
    badge: 'STUDIO 4K',
    imgClass: 'contrast-[108%] saturate-[105%]',
  },
  cyber: {
    badge: 'CYBER·OPTIC',
    imgClass: 'contrast-[140%] hue-rotate-[90deg] saturate-[180%] brightness-95',
  },
  thermal: {
    badge: 'FLIR·THERMAL',
    imgClass: 'contrast-[180%] hue-rotate-[180deg] saturate-[220%] invert-[15%]',
  },
  cad: {
    badge: 'ISO·DRAFT',
    imgClass: 'contrast-[200%] invert-[85%] hue-rotate-[195deg] saturate-[150%]',
  },
}

const activeModeConfig = computed(() => modeConfigs[currentMode.value] || modeConfigs.studio)

// Interactive Sound Effect (Pure Web Audio API, Zero Assets Required)
const playBeep = (freq = 880, type = 'sine', duration = 0.08) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!AudioContext) return
    const ctx = new AudioContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = type
    osc.frequency.setValueAtTime(freq, ctx.currentTime)
    gain.gain.setValueAtTime(0.04, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + duration)
  } catch (e) {
    // Ignore audio restrictions if user has not interacted
  }
}

const selectMode = (modeId) => {
  currentMode.value = modeId
  playBeep(modeId === 'cyber' ? 1200 : modeId === 'thermal' ? 600 : 880)
}

// 3D Parallax Tilt State
const cardRef = ref(null)
const rotX = ref(0)
const rotY = ref(0)
const mouseXPercent = ref(50)
const mouseYPercent = ref(50)
const isHovered = ref(false)

const handleMouseMove = (e) => {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const px = Math.max(0, Math.min(100, Math.round((x / rect.width) * 100)))
  const py = Math.max(0, Math.min(100, Math.round((y / rect.height) * 100)))
  mouseXPercent.value = px
  mouseYPercent.value = py

  // Tilt degrees
  rotY.value = ((px - 50) / 50) * 12 // max 12 deg
  rotX.value = -((py - 50) / 50) * 12
}

const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
  rotX.value = 0
  rotY.value = 0
  mouseXPercent.value = 50
  mouseYPercent.value = 50
}

// Touch support for mobile
const handleTouchStart = (e) => {
  if (e.touches.length > 0) {
    isHovered.value = true
    handleTouchMove(e)
  }
}

const handleTouchMove = (e) => {
  if (!cardRef.value || e.touches.length === 0) return
  const touch = e.touches[0]
  const rect = cardRef.value.getBoundingClientRect()
  const x = touch.clientX - rect.left
  const y = touch.clientY - rect.top
  const px = Math.max(0, Math.min(100, Math.round((x / rect.width) * 100)))
  const py = Math.max(0, Math.min(100, Math.round((y / rect.height) * 100)))
  mouseXPercent.value = px
  mouseYPercent.value = py
  rotY.value = ((px - 50) / 50) * 10
  rotX.value = -((py - 50) / 50) * 10
}

const handleTouchEnd = () => {
  handleMouseLeave()
}

// 3D Card Style
const cardTransformStyle = computed(() => {
  if (!isHovered.value && rotX.value === 0 && rotY.value === 0) {
    return {
      transform: 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-out',
    }
  }
  return {
    transform: `perspective(1000px) rotateX(${rotX.value}deg) rotateY(${rotY.value}deg) scale3d(1.02, 1.02, 1.02)`,
  }
})

// Specular Glare Style
const glareStyle = computed(() => {
  if (!isHovered.value) return { opacity: 0 }
  return {
    opacity: 0.65,
    background: `radial-gradient(circle at ${mouseXPercent.value}% ${mouseYPercent.value}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
  }
})

// Prismatic Holo-Foil Reflection Style
const holoFoilStyle = computed(() => {
  if (!isHovered.value) return { opacity: 0 }
  const angle = mouseXPercent.value * 3.6
  return {
    opacity: 0.45,
    background: `linear-gradient(${angle}deg, #ff0080, #7928ca, #0070f3, #00dfd8, #7928ca, #ff0080)`,
  }
})

const reticleColorClass = computed(() => {
  if (currentMode.value === 'cyber') return 'border-emerald-400'
  if (currentMode.value === 'thermal') return 'border-amber-400'
  if (currentMode.value === 'cad') return 'border-cyan-400'
  return isDark.value ? 'border-amber-500' : 'border-amber-600'
})

// Trigger Diagnostic Scan
const triggerDiagnosticScan = () => {
  if (isScanning.value) return
  isScanning.value = true
  playBeep(1400, 'triangle', 0.2)

  setTimeout(() => {
    playBeep(1800, 'sine', 0.15)
  }, 400)

  setTimeout(() => {
    isScanning.value = false
  }, 1200)
}
</script>

<style scoped>
.holo-card {
  transform-style: preserve-3d;
  will-change: transform;
}

/* Cyber CRT Scanlines */
.bg-scanlines {
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4) 1px,
    transparent 1px,
    transparent 3px
  );
}

/* Thermal False Color Overlay */
.thermal-gradient-overlay {
  background: radial-gradient(
    circle at 50% 40%,
    rgba(255, 255, 0, 0.15) 0%,
    rgba(255, 0, 80, 0.25) 45%,
    rgba(20, 0, 100, 0.45) 85%
  );
  mix-blend-mode: color-burn;
}

/* CAD Grid Pattern */
.cad-grid-overlay {
  background-image: 
    linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* Laser sweep animation */
.laser-sweep {
  animation: sweep 1.2s ease-in-out infinite;
}

@keyframes sweep {
  0% {
    top: 0%;
    opacity: 0.2;
  }
  50% {
    top: 98%;
    opacity: 1;
  }
  100% {
    top: 0%;
    opacity: 0.2;
  }
}
</style>
