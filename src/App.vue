<template>
  <div id="app" class="relative">
    <transition name="fade-page" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
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
