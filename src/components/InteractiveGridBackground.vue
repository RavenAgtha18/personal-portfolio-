<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
    <!-- 1. Ambient Nebula Glow Orbs (Soft Cyber Aurora) -->
    <div
      class="absolute -top-[10%] left-[15%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 transition-all duration-1000 animate-pulse-slow"
      :class="isDark ? 'bg-amber-600/30' : 'bg-amber-400/20'"
    ></div>
    <div
      class="absolute top-[35%] -right-[10%] w-[550px] h-[550px] rounded-full blur-[150px] opacity-15 transition-all duration-1000"
      :class="isDark ? 'bg-indigo-600/25' : 'bg-blue-300/25'"
    ></div>
    <div
      class="absolute top-[65%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[130px] opacity-15 transition-all duration-1000"
      :class="isDark ? 'bg-emerald-600/20' : 'bg-emerald-300/20'"
    ></div>
    <div
      class="absolute -bottom-[10%] right-[20%] w-[650px] h-[650px] rounded-full blur-[160px] opacity-20 transition-all duration-1000"
      :class="isDark ? 'bg-amber-700/20' : 'bg-amber-300/15'"
    ></div>

    <!-- 2. Subtle Industrial CAD Grid Lines Overlay -->
    <div
      class="absolute inset-0 bg-cad-grid opacity-[0.035] transition-opacity duration-300"
      :class="isDark ? 'mix-blend-screen' : 'mix-blend-multiply opacity-[0.025]'"
    ></div>

    <!-- 3. Interactive Reactive Canvas (Dots + Mouse Glow Proximity) -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { isDark } = useTheme()
const canvasRef = ref(null)

let animId = null
let mouseX = -1000
let mouseY = -1000
let width = 0
let height = 0

// Grid parameters
const SPACING = 40
const DOT_RADIUS = 1.1
const PROXIMITY = 130

const handleMouseMove = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
}

const handleTouchMove = (e) => {
  if (e.touches.length > 0) {
    mouseX = e.touches[0].clientX
    mouseY = e.touches[0].clientY
  }
}

const initCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const resize = () => {
    width = window.innerWidth
    height = window.innerHeight
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)
  }

  resize()
  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  window.addEventListener('touchmove', handleTouchMove, { passive: true })

  // Floating ambient dust particles
  const dustParticles = []
  const dustCount = 28
  for (let i = 0; i < dustCount; i++) {
    dustParticles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
    })
  }

  const render = () => {
    ctx.clearRect(0, 0, width, height)

    // Colors according to theme
    const dotBaseColor = isDark.value ? 'rgba(255, 255, 255, 0.07)' : 'rgba(15, 23, 42, 0.06)'
    const dotHighlightColor = isDark.value ? 'rgba(245, 158, 11, ' : 'rgba(217, 119, 6, '

    // Draw Grid Dots with Proximity Amber Wave
    const cols = Math.ceil(width / SPACING)
    const rows = Math.ceil(height / SPACING)

    for (let c = 0; c <= cols; c++) {
      for (let r = 0; r <= rows; r++) {
        const x = c * SPACING
        const y = r * SPACING

        // Distance to cursor
        const dx = mouseX - x
        const dy = mouseY - y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < PROXIMITY) {
          const power = 1 - dist / PROXIMITY
          const currentRadius = DOT_RADIUS + power * 2.2
          ctx.beginPath()
          ctx.arc(x, y, currentRadius, 0, Math.PI * 2)
          ctx.fillStyle = `${dotHighlightColor}${0.2 + power * 0.7})`
          ctx.shadowColor = '#f59e0b'
          ctx.shadowBlur = power * 8
          ctx.fill()
          ctx.shadowBlur = 0
        } else {
          ctx.beginPath()
          ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2)
          ctx.fillStyle = dotBaseColor
          ctx.fill()
        }
      }
    }

    // Draw Floating Dust Particles with Subtle Constellation Lines
    for (let i = 0; i < dustParticles.length; i++) {
      const p = dustParticles[i]
      p.x += p.vx
      p.y += p.vy

      // Wrap around screen
      if (p.x < 0) p.x = width
      if (p.x > width) p.x = 0
      if (p.y < 0) p.y = height
      if (p.y > height) p.y = 0

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = isDark.value
        ? `rgba(245, 158, 11, ${p.alpha * 0.6})`
        : `rgba(217, 119, 6, ${p.alpha * 0.4})`
      ctx.fill()

      // Connect near particles
      for (let j = i + 1; j < dustParticles.length; j++) {
        const p2 = dustParticles[j]
        const pdx = p.x - p2.x
        const pdy = p.y - p2.y
        const pdist = Math.sqrt(pdx * pdx + pdy * pdy)
        if (pdist < 90) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          const lineAlpha = (1 - pdist / 90) * 0.15
          ctx.strokeStyle = isDark.value
            ? `rgba(245, 158, 11, ${lineAlpha})`
            : `rgba(217, 119, 6, ${lineAlpha})`
          ctx.lineWidth = 0.6
          ctx.stroke()
        }
      }
    }

    animId = requestAnimationFrame(render)
  }

  render()

  cleanup = () => {
    window.removeEventListener('resize', resize)
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('touchmove', handleTouchMove)
    if (animId) cancelAnimationFrame(animId)
  }
}

let cleanup = null

onMounted(() => {
  initCanvas()
})

onUnmounted(() => {
  if (cleanup) cleanup()
})

watch(isDark, () => {
  // Theme re-evaluated naturally inside render loop
})
</script>

<style scoped>
.bg-cad-grid {
  background-image: 
    linear-gradient(rgba(245, 158, 11, 0.4) 1px, transparent 1px),
    linear-gradient(90deg, rgba(245, 158, 11, 0.4) 1px, transparent 1px);
  background-size: 80px 80px;
}

@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1) translate(0, 0);
  }
  50% {
    transform: scale(1.1) translate(20px, 30px);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 14s ease-in-out infinite;
}
</style>
