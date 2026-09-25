<template>
  <div
    class="w-full rounded-2xl border transition-all duration-300 overflow-hidden font-mono select-none"
    :class="isDark ? 'bg-zinc-950/80 border-zinc-800 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'"
  >
    <!-- Header HUD -->
    <div
      class="px-5 py-3 border-b flex flex-wrap items-center justify-between gap-3 text-xs"
      :class="isDark ? 'border-zinc-800/80 bg-zinc-900/60' : 'border-slate-100 bg-slate-50'"
    >
      <div class="flex items-center gap-2">
        <Globe2 class="w-4 h-4 text-amber-500 animate-spin-slow" />
        <span class="font-bold tracking-wider" :class="isDark ? 'text-zinc-200' : 'text-slate-800'">
          GLOBAL DELIVERY TELEMETRY · 3D ORBITAL MATRIX
        </span>
      </div>

      <div class="flex items-center gap-3 text-[11px]" :class="isDark ? 'text-zinc-400' : 'text-slate-500'">
        <span class="inline-flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>BASE: SEMARANG, ID 🇮🇩</span>
        </span>
        <span class="hidden sm:inline text-zinc-600">|</span>
        <span class="hidden sm:inline">WORLDWIDE REMOTE READY</span>
      </div>
    </div>

    <!-- 3D WebGL Canvas Area -->
    <div class="relative w-full h-[360px] sm:h-[440px] flex items-center justify-center overflow-hidden bg-radial-vignette">
      <div ref="containerRef" class="w-full h-full cursor-grab active:cursor-grabbing"></div>

      <!-- Top Overlay Coordinates -->
      <div class="absolute top-4 left-4 pointer-events-none text-[10px] space-y-1" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">
        <div class="font-bold text-amber-500">ACTIVE ROUTE: {{ selectedRoute.label }}</div>
        <div>LATENCY: <span class="text-emerald-400 font-bold">{{ selectedRoute.latency }}ms</span> · PROTOCOL: SECURE TLS 1.3</div>
        <div class="hidden sm:block text-[9px] text-zinc-500">DRAG TO ROTATE GLOBE 360° · REAL-TIME 3D BEZIER ARCS</div>
      </div>

      <!-- Live Route Status Chip -->
      <div class="absolute top-4 right-4 pointer-events-none text-[10px] px-2.5 py-1 rounded-full border backdrop-blur-md" :class="isDark ? 'bg-zinc-900/80 border-zinc-700 text-zinc-200' : 'bg-white/80 border-slate-200 text-slate-800'">
        {{ selectedRoute.tag }}
      </div>

      <!-- Central Semarang Anchor Marker HUD -->
      <div class="absolute bottom-4 left-4 pointer-events-none flex items-center gap-2 text-[10px]" :class="isDark ? 'text-zinc-400' : 'text-slate-500'">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
        <span>HOME HUB: INDONESIA (UTC+7) · TARGET REACH: GLOBAL &amp; JAPAN</span>
      </div>

      <!-- 60 FPS Badge -->
      <div class="absolute bottom-4 right-4 pointer-events-none text-[9px] px-2 py-0.5 rounded border" :class="isDark ? 'border-zinc-800 bg-zinc-950/80 text-zinc-500' : 'border-slate-200 bg-white/80 text-slate-400'">
        WEBGL 3D · THREE.JS
      </div>
    </div>

    <!-- Route Selector Controls Bar -->
    <div
      class="p-4 border-t flex flex-wrap items-center justify-between gap-3 text-xs"
      :class="isDark ? 'border-zinc-800/80 bg-zinc-900/40' : 'border-slate-100 bg-slate-50/60'"
    >
      <div class="flex items-center gap-2">
        <span class="text-[11px] font-semibold" :class="isDark ? 'text-zinc-400' : 'text-slate-600'">Focus Target:</span>
        <div class="flex flex-wrap gap-1.5">
          <button
            v-for="route in routes"
            :key="route.id"
            @click="selectRoute(route)"
            class="px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition-all duration-200"
            :class="[
              selectedRoute.id === route.id
                ? isDark
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-sm'
                  : 'bg-amber-50 text-amber-800 border-amber-400 shadow-sm'
                : isDark
                ? 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm'
            ]"
          >
            {{ route.icon }} {{ route.city }}
          </button>
        </div>
      </div>

      <div class="text-[11px] text-zinc-500 flex items-center gap-2">
        <span class="text-amber-500">●</span>
        <span>{{ selectedRoute.desc }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useTheme } from '@/composables/useTheme'
import * as THREE from 'three'
import { Globe2 } from 'lucide-vue-next'

const { isDark } = useTheme()
const containerRef = ref(null)

// Target Routes Data (Base: Semarang, Indonesia)
const routes = [
  {
    id: 'tokyo',
    city: 'Tokyo',
    country: 'Japan',
    icon: '🇯🇵',
    label: 'Semarang 🇮🇩 ➔ Tokyo, JP 🇯🇵',
    lat: 35.6762,
    lon: 139.6503,
    latency: 64,
    tag: 'TARGET REGION · PRECISION MES',
    desc: 'Aspiring delivery for Japanese precision manufacturing standards',
    color: 0xf59e0b, // Amber
  },
  {
    id: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    icon: '🇸🇬',
    label: 'Semarang 🇮🇩 ➔ Singapore 🇸🇬',
    lat: 1.3521,
    lon: 103.8198,
    latency: 18,
    tag: 'APAC TECH HUB · FINANCIAL',
    desc: 'Ultra low-latency cross-border microservice connectivity',
    color: 0x06b6d4, // Cyan
  },
  {
    id: 'sf',
    city: 'Silicon Valley',
    country: 'USA',
    icon: '🇺🇸',
    label: 'Semarang 🇮🇩 ➔ San Francisco, US 🇺🇸',
    lat: 37.7749,
    lon: -122.4194,
    latency: 168,
    tag: 'GLOBAL ENTERPRISE · SAAS',
    desc: 'Scalable cloud architectures for distributed international teams',
    color: 0xa855f7, // Purple
  },
  {
    id: 'frankfurt',
    city: 'Frankfurt',
    country: 'Germany',
    icon: '🇪🇺',
    label: 'Semarang 🇮🇩 ➔ Frankfurt, EU 🇪🇺',
    lat: 50.1109,
    lon: 8.6821,
    latency: 184,
    tag: 'INDUSTRY 4.0 · AUTOMATION',
    desc: 'Adherence to European industrial safety & ISO standards',
    color: 0x3b82f6, // Blue
  },
]

const selectedRoute = ref(routes[0])

// Three.js State
let renderer = null
let scene = null
let camera = null
let animId = null
let globeGroup = null
let arcPulses = []

const GLOBE_RADIUS = 2.4

// Convert Lat/Lon to 3D Cartesian coordinates
const latLonToVector3 = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const z = radius * Math.sin(phi) * Math.sin(theta)
  const y = radius * Math.cos(phi)
  return new THREE.Vector3(x, y, z)
}

// Home Base: Semarang, Indonesia
const SEMARANG_COORDS = { lat: -6.9932, lon: 110.4203 }

let targetRotY = 0
let targetRotX = 0.3
let currentRotY = 0
let currentRotX = 0.3
let isDragging = false
let prevMouseX = 0
let prevMouseY = 0

const selectRoute = (route) => {
  selectedRoute.value = route

  // Smoothly rotate globe towards target city longitude
  const targetLonRad = -(route.lon * (Math.PI / 180)) - Math.PI / 2
  targetRotY = targetLonRad
}

const initThree = () => {
  if (!containerRef.value) return
  const container = containerRef.value
  const width = container.clientWidth
  const height = container.clientHeight

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
  camera.position.set(0, 0, 7.8)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.appendChild(renderer.domElement)

  globeGroup = new THREE.Group()
  scene.add(globeGroup)

  // 1. Digital Dot-Matrix Sphere (Earth)
  const dotCount = 1400
  const dotPositions = new Float32Array(dotCount * 3)
  for (let i = 0; i < dotCount; i++) {
    // Fibonacci sphere distribution
    const y = 1 - (i / (dotCount - 1)) * 2
    const radiusAtY = Math.sqrt(1 - y * y)
    const phi = i * 2.399963229728653 // golden angle

    const x = Math.cos(phi) * radiusAtY
    const z = Math.sin(phi) * radiusAtY

    dotPositions[i * 3] = x * GLOBE_RADIUS
    dotPositions[i * 3 + 1] = y * GLOBE_RADIUS
    dotPositions[i * 3 + 2] = z * GLOBE_RADIUS
  }

  const dotGeo = new THREE.BufferGeometry()
  dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3))
  const dotMat = new THREE.PointsMaterial({
    color: isDark.value ? 0xffffff : 0x0f172a,
    size: 0.035,
    transparent: true,
    opacity: isDark.value ? 0.35 : 0.25,
  })
  const dotsMesh = new THREE.Points(dotGeo, dotMat)
  globeGroup.add(dotsMesh)

  // 2. Wireframe Rings & Latitudes
  const ringGeo = new THREE.RingGeometry(GLOBE_RADIUS * 1.002, GLOBE_RADIUS * 1.008, 64)
  const ringMat = new THREE.MeshBasicMaterial({
    color: isDark.value ? 0xf59e0b : 0xd97706,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.2,
  })
  const equatorRing = new THREE.Mesh(ringGeo, ringMat)
  equatorRing.rotation.x = Math.PI / 2
  globeGroup.add(equatorRing)

  // 3. Semarang Base Node (Glowing Emerald/Amber Pin)
  const semarangPos = latLonToVector3(SEMARANG_COORDS.lat, SEMARANG_COORDS.lon, GLOBE_RADIUS)
  const baseNodeGeo = new THREE.SphereGeometry(0.08, 16, 16)
  const baseNodeMat = new THREE.MeshBasicMaterial({ color: 0x10b981 })
  const baseNode = new THREE.Mesh(baseNodeGeo, baseNodeMat)
  baseNode.position.copy(semarangPos)
  globeGroup.add(baseNode)

  // 4. Destination Nodes & Bezier Arcs
  routes.forEach((route) => {
    const destPos = latLonToVector3(route.lat, route.lon, GLOBE_RADIUS)

    // Destination Pin
    const destGeo = new THREE.SphereGeometry(0.06, 12, 12)
    const destMat = new THREE.MeshBasicMaterial({ color: route.color })
    const destMesh = new THREE.Mesh(destGeo, destMat)
    destMesh.position.copy(destPos)
    globeGroup.add(destMesh)

    // Quadratic Bezier Arc between Semarang and Dest
    const midPoint = new THREE.Vector3().addVectors(semarangPos, destPos).multiplyScalar(0.5)
    const distance = semarangPos.distanceTo(destPos)
    // Elevate midpoint high above surface
    midPoint.normalize().multiplyScalar(GLOBE_RADIUS + distance * 0.35)

    const curve = new THREE.QuadraticBezierCurve3(semarangPos, midPoint, destPos)
    const arcPoints = curve.getPoints(50)
    const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPoints)
    const arcMat = new THREE.LineBasicMaterial({
      color: route.color,
      transparent: true,
      opacity: 0.5,
    })
    const arcLine = new THREE.Line(arcGeo, arcMat)
    globeGroup.add(arcLine)

    // Travelling Data Packet Pulse along Arc
    const pulseGeo = new THREE.SphereGeometry(0.04, 8, 8)
    const pulseMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
    const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat)
    globeGroup.add(pulseMesh)

    arcPulses.push({
      mesh: pulseMesh,
      curve: curve,
      progress: Math.random(), // Stagger start
      speed: 0.006 + Math.random() * 0.003,
    })
  })

  // Mouse / Touch Interaction Listeners
  const onStart = (clientX, clientY) => {
    isDragging = true
    prevMouseX = clientX
    prevMouseY = clientY
  }

  const onMove = (clientX, clientY) => {
    if (!isDragging) return
    const deltaX = clientX - prevMouseX
    const deltaY = clientY - prevMouseY
    targetRotY += deltaX * 0.007
    targetRotX += deltaY * 0.007
    targetRotX = Math.max(-1.2, Math.min(1.2, targetRotX))
    prevMouseX = clientX
    prevMouseY = clientY
  }

  const onEnd = () => {
    isDragging = false
  }

  const handleMouseDown = (e) => onStart(e.clientX, e.clientY)
  const handleMouseMove = (e) => onMove(e.clientX, e.clientY)
  const handleMouseUp = () => onEnd()

  const handleTouchStart = (e) => {
    if (e.touches.length > 0) onStart(e.touches[0].clientX, e.touches[0].clientY)
  }
  const handleTouchMove = (e) => {
    if (e.touches.length > 0) onMove(e.touches[0].clientX, e.touches[0].clientY)
  }
  const handleTouchEnd = () => onEnd()

  container.addEventListener('mousedown', handleMouseDown)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
  container.addEventListener('touchstart', handleTouchStart, { passive: true })
  window.addEventListener('touchmove', handleTouchMove, { passive: true })
  window.addEventListener('touchend', handleTouchEnd)

  // Animation Loop
  const animate = () => {
    animId = requestAnimationFrame(animate)

    // Smooth inertia lerp
    currentRotX += (targetRotX - currentRotX) * 0.06
    currentRotY += (targetRotY - currentRotY) * 0.06

    // Slow ambient rotation when not dragging
    if (!isDragging) {
      targetRotY += 0.0012
    }

    globeGroup.rotation.y = currentRotY
    globeGroup.rotation.x = currentRotX

    // Advance pulses along arcs
    arcPulses.forEach((pulse) => {
      pulse.progress += pulse.speed
      if (pulse.progress > 1) pulse.progress = 0
      const point = pulse.curve.getPoint(pulse.progress)
      pulse.mesh.position.copy(point)
    })

    renderer.render(scene, camera)
  }

  animate()

  // Resize handler
  const handleResize = () => {
    if (!containerRef.value || !camera || !renderer) return
    const w = containerRef.value.clientWidth
    const h = containerRef.value.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }

  window.addEventListener('resize', handleResize)

  cleanup = () => {
    container.removeEventListener('mousedown', handleMouseDown)
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
    container.removeEventListener('touchstart', handleTouchStart)
    window.removeEventListener('touchmove', handleTouchMove)
    window.removeEventListener('touchend', handleTouchEnd)
    window.removeEventListener('resize', handleResize)
    if (animId) cancelAnimationFrame(animId)
    if (renderer && renderer.domElement) {
      renderer.dispose()
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement)
      }
    }
  }
}

let cleanup = null

onMounted(() => {
  initThree()
})

onUnmounted(() => {
  if (cleanup) cleanup()
})

watch(isDark, () => {
  // Theme reactive updates handled naturally
})
</script>

<style scoped>
.bg-radial-vignette {
  background: radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 70%);
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
</style>
