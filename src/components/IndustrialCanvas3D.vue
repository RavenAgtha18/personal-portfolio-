<template>
  <div class="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center overflow-hidden">
    <!-- WebGL Canvas Container -->
    <div ref="containerRef" class="w-full h-full cursor-grab active:cursor-grabbing"></div>

    <!-- Minimal Overlay HUD (Gen Z High-Tech Touch) -->
    <div class="absolute bottom-3 left-4 flex items-center gap-2 pointer-events-none text-[10px] font-mono select-none" :class="isDark ? 'text-zinc-500' : 'text-slate-400'">
      <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
      <span>3D INDUSTRIAL ARCHITECTURE CORE · DRAG TO ROTATE</span>
    </div>

    <div class="absolute top-3 right-4 pointer-events-none text-[9px] font-mono px-2 py-0.5 rounded border select-none" :class="isDark ? 'border-zinc-800 bg-zinc-950/60 text-zinc-400' : 'border-slate-200 bg-white/60 text-slate-500'">
      60 FPS · WEBGL
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'
import { useTheme } from '@/composables/useTheme'

const containerRef = ref(null)
const { isDark } = useTheme()

let renderer = null
let scene = null
let camera = null
let animId = null
let coreGroup = null
let particles = null

let targetRotX = 0
let targetRotY = 0
let currentRotX = 0
let currentRotY = 0
let isDragging = false
let previousMouseX = 0
let previousMouseY = 0

const initThree = () => {
  if (!containerRef.value) return
  const container = containerRef.value
  const width = container.clientWidth
  const height = container.clientHeight

  // Scene
  scene = new THREE.Scene()

  // Camera
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
  camera.position.set(0, 0, 8.5)

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.appendChild(renderer.domElement)

  // Core Group
  coreGroup = new THREE.Group()
  scene.add(coreGroup)

  let cageMat = null
  let innerMat = null

  // 1. Outer Industrial Wireframe (Dodecahedron / Cage)
  const cageGeo = new THREE.DodecahedronGeometry(2.3, 1)
  const wireGeo = new THREE.WireframeGeometry(cageGeo)
  cageMat = new THREE.LineBasicMaterial({
    color: isDark.value ? 0xf59e0b : 0xd97706,
    transparent: true,
    opacity: isDark.value ? 0.35 : 0.45,
  })
  const cageLines = new THREE.LineSegments(wireGeo, cageMat)
  coreGroup.add(cageLines)

  // 2. Inner Nested Polyhedron
  const innerGeo = new THREE.IcosahedronGeometry(1.4, 0)
  const innerWire = new THREE.WireframeGeometry(innerGeo)
  innerMat = new THREE.LineBasicMaterial({
    color: isDark.value ? 0xffffff : 0x0f172a,
    transparent: true,
    opacity: isDark.value ? 0.6 : 0.5,
  })
  const innerLines = new THREE.LineSegments(innerWire, innerMat)
  coreGroup.add(innerLines)

  // 3. Central Glowing Golden Data Node
  const nodeGeo = new THREE.SphereGeometry(0.5, 16, 16)
  const nodeMat = new THREE.MeshBasicMaterial({
    color: 0xf59e0b,
    wireframe: true,
  })
  const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat)
  coreGroup.add(nodeMesh)

  // 4. Floating Data Vertices Points
  const pointCount = 60
  const pointPositions = new Float32Array(pointCount * 3)
  for (let i = 0; i < pointCount * 3; i += 3) {
    pointPositions[i] = (Math.random() - 0.5) * 6
    pointPositions[i + 1] = (Math.random() - 0.5) * 6
    pointPositions[i + 2] = (Math.random() - 0.5) * 6
  }
  const pointGeo = new THREE.BufferGeometry()
  pointGeo.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3))
  const pointMat = new THREE.PointsMaterial({
    color: 0xf59e0b,
    size: 0.06,
    transparent: true,
    opacity: 0.7,
  })
  particles = new THREE.Points(pointGeo, pointMat)
  scene.add(particles)

  // Interaction Listeners (Mouse + Touch)
  const onStart = (clientX, clientY) => {
    isDragging = true
    previousMouseX = clientX
    previousMouseY = clientY
  }

  const onMove = (clientX, clientY) => {
    if (!isDragging) {
      const rect = container.getBoundingClientRect()
      const x = ((clientX - rect.left) / width - 0.5) * 0.8
      const y = ((clientY - rect.top) / height - 0.5) * 0.8
      targetRotY = x
      targetRotX = y
      return
    }

    const deltaX = clientX - previousMouseX
    const deltaY = clientY - previousMouseY
    targetRotY += deltaX * 0.008
    targetRotX += deltaY * 0.008

    previousMouseX = clientX
    previousMouseY = clientY
  }

  const onEnd = () => {
    isDragging = false
  }

  const handleMouseDown = (e) => onStart(e.clientX, e.clientY)
  const handleMouseMove = (e) => onMove(e.clientX, e.clientY)
  const handleMouseUp = () => onEnd()

  const handleTouchStart = (e) => {
    if (e.touches.length > 0) {
      onStart(e.touches[0].clientX, e.touches[0].clientY)
    }
  }
  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      onMove(e.touches[0].clientX, e.touches[0].clientY)
    }
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

    // Smooth lerp rotation
    currentRotX += (targetRotX - currentRotX) * 0.06
    currentRotY += (targetRotY - currentRotY) * 0.06

    // Constant subtle mechanical spin
    coreGroup.rotation.y = currentRotY + Date.now() * 0.0003
    coreGroup.rotation.x = currentRotX + Math.sin(Date.now() * 0.0005) * 0.1
    coreGroup.rotation.z = Math.cos(Date.now() * 0.0004) * 0.05

    // Inner node counter-rotation
    nodeMesh.rotation.y -= 0.01
    innerLines.rotation.x += 0.004

    // Floating particles drift
    particles.rotation.y += 0.0002

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

  // Store cleanup
  cleanupFn = () => {
    container.removeEventListener('mousedown', handleMouseDown)
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
    container.removeEventListener('touchstart', handleTouchStart)
    window.removeEventListener('touchmove', handleTouchMove)
    window.removeEventListener('touchend', handleTouchEnd)
    window.removeEventListener('resize', handleResize)
  }
}

let cleanupFn = null

onMounted(() => {
  initThree()
})

onUnmounted(() => {
  if (cleanupFn) cleanupFn()
  if (animId) cancelAnimationFrame(animId)
  if (renderer && renderer.domElement) {
    renderer.dispose()
    if (renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  }
})

// Watch theme changes to adjust line colors
watch(isDark, () => {
  if (!scene) return
})
</script>
