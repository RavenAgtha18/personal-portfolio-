<template>
  <div id="app" class="relative">
    <transition name="fade-page" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lenis from 'lenis'

let lenis = null

onMounted(() => {
  const { initTheme } = useTheme()
  initTheme()

  // Initialize Lenis Smooth Scrolling (Awwwards / Studio-grade luxury feel)
  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 2,
  })

  function raf(time) {
    if (lenis) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  }
  requestAnimationFrame(raf)

  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50,
    disable: 'mobile'
  })

  // Refresh AOS on route change
  AOS.refresh()
})

onUnmounted(() => {
  if (lenis) {
    lenis.destroy()
    lenis = null
  }
})
</script>

<style>
/* Import Tailwind */
@import './assets/tailwind.css';

/* Page Transition */
.fade-page-enter-active,
.fade-page-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-page-enter-from,
.fade-page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
