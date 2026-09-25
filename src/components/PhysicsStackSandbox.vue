<template>
  <div class="relative w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-300">
    <!-- Header / HUD Controls -->
    <div class="px-5 py-3.5 border-b border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 bg-zinc-900/60">
      <!-- Title & Live Badge -->
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-xs">
          <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span>MATTER.JS 2D PHYSICS</span>
        </div>
        <div class="hidden sm:block text-xs font-mono text-zinc-400">
          Interactive Stack &amp; Hardware Sandbox
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2 font-mono text-xs">
        <!-- Zero-G Toggle -->
        <button
          @click="toggleZeroG"
          type="button"
          class="px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 active:scale-95"
          :class="isZeroG 
            ? 'border-cyan-500/60 bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/20' 
            : 'border-zinc-700 bg-zinc-800/70 text-zinc-300 hover:border-zinc-600 hover:text-white'"
          title="Toggle Zero-Gravity mode"
        >
          <span>{{ isZeroG ? '🚀 ZERO-G: ON' : '🌍 GRAVITY: 1.0G' }}</span>
        </button>

        <!-- Kinetic Blast / Scatter -->
        <button
          @click="applyKineticBlast"
          type="button"
          class="px-3 py-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 transition-all flex items-center gap-1.5 active:scale-95"
          title="Blast tokens with kinetic impulse"
        >
          <span>💥 BLAST</span>
        </button>

        <!-- Spawn Random Token -->
        <button
          @click="spawnRandomToken"
          type="button"
          class="px-3 py-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 transition-all flex items-center gap-1.5 active:scale-95"
          title="Spawn an extra badge"
        >
          <span>➕ SPAWN</span>
        </button>

        <!-- Reset / Re-drop -->
        <button
          @click="resetSandbox"
          type="button"
          class="px-2.5 py-1.5 rounded-lg border border-zinc-700 bg-zinc-800/50 hover:border-zinc-600 text-zinc-400 hover:text-zinc-200 transition-all active:scale-95"
          title="Reset and cascade all badges"
        >
          <span>🔄</span>
        </button>
      </div>
    </div>

    <!-- Canvas Simulation Area -->
    <div 
      ref="containerRef" 
      class="relative w-full h-[420px] sm:h-[480px] bg-gradient-to-b from-[#0b0c10] to-[#060709] overflow-hidden select-none cursor-grab active:cursor-grabbing"
    >
      <!-- Subtle Grid Background -->
      <div 
        class="absolute inset-0 pointer-events-none opacity-20"
        style="background-size: 32px 32px; background-image: radial-gradient(circle, #f59e0b 1px, transparent 1px);"
      ></div>

      <!-- Physics Canvas -->
      <canvas ref="canvasRef" class="w-full h-full block"></canvas>

      <!-- Center Floating Instruction Overlay (Fades out after interaction) -->
      <div 
        v-if="showHint"
        class="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-700"
        :class="{ 'opacity-0': !showHint }"
      >
        <div class="px-4 py-2 rounded-xl bg-zinc-900/90 border border-amber-500/30 text-zinc-300 font-mono text-xs flex items-center gap-2 backdrop-blur shadow-2xl animate-bounce">
          <span class="text-amber-400">👆</span>
          <span>Click &amp; throw badges across the floor or toggle Zero-G!</span>
        </div>
      </div>
    </div>

    <!-- Footer HUD Telemetry -->
    <div class="px-5 py-2.5 border-t border-zinc-800/80 bg-zinc-900/40 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-zinc-400">
      <div class="flex items-center gap-4">
        <span class="flex items-center gap-1.5 text-zinc-300">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>PHYSICS ACTIVE</span>
        </span>
        <span class="text-zinc-500">|</span>
        <span>BODIES: <strong class="text-amber-400">{{ bodyCount }}</strong></span>
        <span class="text-zinc-500">|</span>
        <span>ENGINE: <strong class="text-zinc-300">Matter.js v0.20</strong></span>
      </div>

      <div class="flex items-center gap-3">
        <span class="text-zinc-500 hidden sm:inline">Rigid-Body 2D Dynamics</span>
        <span class="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[10px] border border-zinc-700/60">
          {{ isZeroG ? 'ORBITAL 0G' : 'RESTITUTION 0.75' }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Matter from 'matter-js'

const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Body, Events } = Matter

const containerRef = ref(null)
const canvasRef = ref(null)
const isZeroG = ref(false)
const showHint = ref(true)
const bodyCount = ref(0)

let engine = null
let runner = null
let mouseConstraint = null
let animationFrameId = null
let wallBodies = []
let badgeBodies = []

// Core Technical Stack & Hardware Badges Data
const INITIAL_BADGES = [
  { label: 'Laravel 11', tag: 'PHP / MES', icon: '⚡', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.16)' },
  { label: 'Zebra TC26', tag: 'LASER HW', icon: '📦', color: '#10b981', bg: 'rgba(16, 185, 129, 0.16)' },
  { label: 'MariaDB SQL', tag: 'DATABASE', icon: '🐬', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.16)' },
  { label: 'Vue.js 3', tag: 'REACTIVE', icon: '🌐', color: '#34d399', bg: 'rgba(52, 211, 153, 0.16)' },
  { label: 'SnapPack', tag: 'MES DISPATCH', icon: '🚚', color: '#fbbf24', bg: 'rgba(251, 191, 36, 0.16)' },
  { label: 'ZPL II Label', tag: 'PRINT FIRMWARE', icon: '🏷️', color: '#f97316', bg: 'rgba(249, 115, 22, 0.16)' },
  { label: 'ProScan System', tag: 'CYCLE COUNT', icon: '📊', color: '#a78bfa', bg: 'rgba(167, 139, 250, 0.16)' },
  { label: 'Python Script', tag: 'PARSER & CRON', icon: '🐍', color: '#facc15', bg: 'rgba(250, 204, 21, 0.16)' },
  { label: 'QC Gate', tag: 'TOLERANCE', icon: '🛡️', color: '#f43f5e', bg: 'rgba(244, 63, 94, 0.16)' },
  { label: 'JFT-A2 Nihongo', tag: 'BRIDGE COMM', icon: '🇯🇵', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.16)' },
  { label: 'ISP Semarang', tag: 'FIBER NETWORK', icon: '🌐', color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.16)' },
  { label: 'Honeywell HF680', tag: '2D SCANNER', icon: '🔍', color: '#14b8a6', bg: 'rgba(20, 184, 166, 0.16)' },
  { label: 'Tailwind CSS', tag: 'DESIGN SYS', icon: '🎨', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.16)' },
  { label: 'RESTful API', tag: 'ENDPOINTS', icon: '⚙️', color: '#818cf8', bg: 'rgba(129, 140, 248, 0.16)' },
]

const EXTRA_BADGES = [
  { label: 'DataWedge API', tag: 'SDK', icon: '📲', color: '#2dd4bf', bg: 'rgba(45, 212, 191, 0.16)' },
  { label: 'Brother TJ-4020', tag: 'THERMAL', icon: '🖨️', color: '#fb923c', bg: 'rgba(251, 146, 60, 0.16)' },
  { label: 'Stokku Mobile', tag: 'BARCODE', icon: '📦', color: '#a3e635', bg: 'rgba(163, 230, 53, 0.16)' },
  { label: 'ACID Locking', tag: 'SAFETY', icon: '🔒', color: '#e879f9', bg: 'rgba(232, 121, 249, 0.16)' },
]

function drawPill(ctx, x, y, width, height, radius) {
  ctx.beginPath()
  if (ctx.roundRect) {
    ctx.roundRect(x - width / 2, y - height / 2, width, height, radius)
  } else {
    const rx = x - width / 2
    const ry = y - height / 2
    ctx.moveTo(rx + radius, ry)
    ctx.lineTo(rx + width - radius, ry)
    ctx.quadraticCurveTo(rx + width, ry, rx + width, ry + radius)
    ctx.lineTo(rx + width, ry + height - radius)
    ctx.quadraticCurveTo(rx + width, ry + height, rx + width - radius, ry + height)
    ctx.lineTo(rx + radius, ry + height)
    ctx.quadraticCurveTo(rx, ry + height, rx, ry + height - radius)
    ctx.lineTo(rx, ry + radius)
    ctx.quadraticCurveTo(rx, ry, rx + radius, ry)
  }
  ctx.closePath()
}

function initPhysics() {
  if (!containerRef.value || !canvasRef.value) return

  const container = containerRef.value
  const canvas = canvasRef.value
  const width = container.clientWidth
  const height = container.clientHeight

  // High-DPI Canvas scaling
  const dpr = window.devicePixelRatio || 1
  canvas.width = width * dpr
  canvas.height = height * dpr
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)

  // 1. Create Engine
  engine = Engine.create({
    gravity: { x: 0, y: 0.95, scale: 0.001 },
  })

  // 2. Create Bounding Walls
  const wallThickness = 80
  const ground = Bodies.rectangle(width / 2, height + wallThickness / 2, width * 2, wallThickness, {
    isStatic: true,
    restitution: 0.6,
    friction: 0.2,
  })
  const ceiling = Bodies.rectangle(width / 2, -wallThickness / 2, width * 2, wallThickness, {
    isStatic: true,
  })
  const leftWall = Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 2, {
    isStatic: true,
  })
  const rightWall = Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 2, {
    isStatic: true,
  })
  wallBodies = [ground, ceiling, leftWall, rightWall]
  Composite.add(engine.world, wallBodies)

  // 3. Create Tech Stack Rigid Bodies
  badgeBodies = []
  INITIAL_BADGES.forEach((badge, index) => {
    createBadgeBody(badge, index, width)
  })

  // 4. Mouse & Touch Constraints
  const mouse = Mouse.create(canvas)
  // Fix DPI mapping for mouse
  mouse.pixelRatio = dpr

  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: { visible: false },
    },
  })
  Composite.add(engine.world, mouseConstraint)

  // Interaction listener to hide instructions
  Events.on(mouseConstraint, 'startdrag', () => {
    showHint.value = false
  })

  // 5. Runner
  runner = Runner.create()
  Runner.run(runner, engine)

  // 6. Custom High-Performance Render Loop
  const renderLoop = () => {
    ctx.clearRect(0, 0, width, height)

    // Draw all badge bodies
    badgeBodies.forEach((body) => {
      const { position, angle, meta } = body
      if (!meta) return

      ctx.save()
      ctx.translate(position.x, position.y)
      ctx.rotate(angle)

      const isDragged = mouseConstraint.body === body
      const w = body.pillWidth
      const h = body.pillHeight

      // Outer Glow when dragged
      if (isDragged) {
        ctx.shadowColor = meta.color
        ctx.shadowBlur = 18
      } else {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
        ctx.shadowBlur = 8
      }

      // Background Pill
      drawPill(ctx, 0, 0, w, h, 14)
      ctx.fillStyle = isDragged ? 'rgba(24, 24, 27, 0.95)' : 'rgba(18, 18, 22, 0.88)'
      ctx.fill()

      // Border with accent color
      ctx.lineWidth = isDragged ? 2 : 1.2
      ctx.strokeStyle = isDragged ? meta.color : meta.color + 'aa'
      ctx.stroke()

      // Inside accent light indicator
      ctx.shadowBlur = 0
      ctx.beginPath()
      ctx.arc(-w / 2 + 16, 0, 3, 0, Math.PI * 2)
      ctx.fillStyle = meta.color
      ctx.fill()

      // Emoji Icon
      ctx.font = '13px "Apple Color Emoji", "Segoe UI Emoji", sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(meta.icon, -w / 2 + 32, 1)

      // Main Text Label
      ctx.font = '600 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
      ctx.fillStyle = '#f4f4f5'
      ctx.textAlign = 'left'
      ctx.fillText(meta.label, -w / 2 + 48, -1)

      // Micro Tag pill on the right
      ctx.font = '700 8px ui-monospace, SFMono-Regular, monospace'
      ctx.fillStyle = meta.color
      ctx.textAlign = 'right'
      ctx.fillText(meta.tag, w / 2 - 12, 0)

      ctx.restore()
    })

    bodyCount.value = badgeBodies.length
    animationFrameId = requestAnimationFrame(renderLoop)
  }

  animationFrameId = requestAnimationFrame(renderLoop)
}

function createBadgeBody(badge, index, width) {
  // Approximate width based on label length + tag
  const pillWidth = Math.max(150, (badge.label.length + badge.tag.length) * 7.5 + 46)
  const pillHeight = 36

  // Cascade drop positions
  const cols = Math.max(2, Math.floor(width / (pillWidth + 20)))
  const col = index % cols
  const row = Math.floor(index / cols)
  
  const startX = (width / (cols + 1)) * (col + 1) + (Math.random() - 0.5) * 40
  const startY = 40 + row * 46 + Math.random() * 20

  const body = Bodies.rectangle(startX, startY, pillWidth, pillHeight, {
    chamfer: { radius: 14 },
    restitution: 0.72,
    friction: 0.15,
    frictionAir: 0.015,
    angle: (Math.random() - 0.5) * 0.4,
  })

  body.pillWidth = pillWidth
  body.pillHeight = pillHeight
  body.meta = badge

  badgeBodies.push(body)
  Composite.add(engine.world, body)
}

function toggleZeroG() {
  if (!engine) return
  isZeroG.value = !isZeroG.value
  showHint.value = false

  if (isZeroG.value) {
    engine.gravity.y = 0
    engine.gravity.scale = 0
    // Give all bodies a gentle float drift
    badgeBodies.forEach((body) => {
      Body.applyForce(body, body.position, {
        x: (Math.random() - 0.5) * 0.008,
        y: (Math.random() - 0.5) * 0.008,
      })
    })
  } else {
    engine.gravity.y = 0.95
    engine.gravity.scale = 0.001
  }
}

function applyKineticBlast() {
  if (!engine) return
  showHint.value = false
  badgeBodies.forEach((body) => {
    const forceMagnitude = 0.035 + Math.random() * 0.04
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.2 // upwards fan
    Body.applyForce(body, body.position, {
      x: Math.cos(angle) * forceMagnitude,
      y: Math.sin(angle) * forceMagnitude,
    })
    Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.25)
  })
}

function spawnRandomToken() {
  if (!engine || !containerRef.value) return
  showHint.value = false
  const pool = [...INITIAL_BADGES, ...EXTRA_BADGES]
  const randomBadge = pool[Math.floor(Math.random() * pool.length)]
  const width = containerRef.value.clientWidth
  createBadgeBody(randomBadge, badgeBodies.length, width)
}

function resetSandbox() {
  if (!engine || !containerRef.value) return
  isZeroG.value = false
  engine.gravity.y = 0.95
  engine.gravity.scale = 0.001

  // Remove existing badge bodies
  badgeBodies.forEach((body) => Composite.remove(engine.world, body))
  badgeBodies = []

  const width = containerRef.value.clientWidth

  INITIAL_BADGES.forEach((badge, index) => {
    createBadgeBody(badge, index, width)
  })
}

function handleResize() {
  if (!containerRef.value || !canvasRef.value || !engine) return
  const width = containerRef.value.clientWidth
  const height = containerRef.value.clientHeight
  const dpr = window.devicePixelRatio || 1

  canvasRef.value.width = width * dpr
  canvasRef.value.height = height * dpr
  const ctx = canvasRef.value.getContext('2d')
  ctx.scale(dpr, dpr)

  // Update mouse ratio
  if (mouseConstraint) {
    mouseConstraint.mouse.pixelRatio = dpr
  }

  // Reposition bounding walls
  const wallThickness = 80
  Body.setPosition(wallBodies[0], { x: width / 2, y: height + wallThickness / 2 })
  Body.setPosition(wallBodies[1], { x: width / 2, y: -wallThickness / 2 })
  Body.setPosition(wallBodies[2], { x: -wallThickness / 2, y: height / 2 })
  Body.setPosition(wallBodies[3], { x: width + wallThickness / 2, y: height / 2 })
}

onMounted(() => {
  initPhysics()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  if (runner) Runner.stop(runner)
  if (engine) Composite.clear(engine.world, false)
})
</script>
