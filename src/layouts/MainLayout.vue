<template>
  <div class="relative font-inter text-white bg-[#0a0a0a] min-h-screen overflow-x-hidden">
    <!-- Animated Background -->
    <div class="fixed inset-0 -z-10 gradient-mesh"></div>
    <div class="fixed inset-0 -z-10 grid-pattern opacity-50"></div>
    
    <!-- Floating Orbs -->
    <div class="fixed top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-blob"></div>
    <div class="fixed top-40 right-20 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl animate-blob animation-delay-1000"></div>
    <div class="fixed bottom-20 left-1/3 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl animate-blob animation-delay-500"></div>

    <!-- Navigation -->
    <nav
      :class="[
        'fixed top-0 w-full z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 py-3' 
          : 'bg-transparent py-5',
      ]"
    >
      <div class="max-w-7xl mx-auto flex justify-between items-center px-6">
        <!-- Logo -->
        <router-link
          to="/"
          class="group flex items-center gap-3"
        >
          <div class="relative">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-black group-hover:scale-110 transition-transform duration-300">
              R
            </div>
            <div class="absolute inset-0 rounded-xl bg-amber-500/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span class="text-lg font-semibold hidden sm:block">
            <span class="text-white">Riki</span>
            <span class="text-amber-400">.dev</span>
          </span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="nav-link relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
            :class="{ 'text-amber-400': $route.path === link.path }"
          >
            <span class="relative z-10">{{ link.name }}</span>
            <span 
              class="absolute inset-0 rounded-lg bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors duration-300"
            ></span>
            <span 
              v-if="$route.path === link.path"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400"
            ></span>
          </router-link>
        </div>

        <!-- CTA Button -->
        <a
          href="https://wa.me/6285175180821"
          target="_blank"
          class="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-sm hover:shadow-lg hover:shadow-amber-500/25 hover:scale-105 transition-all duration-300"
        >
          <MessageCircle class="w-4 h-4" />
          <span>Let's Talk</span>
        </a>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition name="slide-down">
        <div 
          v-if="isMobileMenuOpen"
          class="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5"
        >
          <div class="px-6 py-4 space-y-2">
            <router-link
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              @click="isMobileMenuOpen = false"
              class="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              :class="{ 'text-amber-400 bg-amber-500/10': $route.path === link.path }"
            >
              {{ link.name }}
            </router-link>
            <a
              href="https://wa.me/6285175180821"
              target="_blank"
              class="block w-full mt-4 px-4 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-center"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </Transition>
    </nav>

    <!-- Main Content -->
    <div class="pt-20">
      <Transition name="page" mode="out-in">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </Transition>
    </div>

    <!-- Footer -->
    <footer class="relative py-16 border-t border-white/5 bg-gradient-to-t from-[#050505] to-transparent">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col items-center text-center">
          <!-- Logo -->
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-black text-xl mb-6">
            R
          </div>
          
          <h3 class="text-2xl font-bold mb-2">
            <span class="gradient-text">Let's Build Something Amazing</span>
          </h3>
          <p class="text-gray-400 mb-8 max-w-md">
            Open for collaborations, freelance projects, and full-time opportunities.
          </p>

          <!-- Social Links -->
          <div class="flex items-center gap-4 mb-8">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="group w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-amber-500/20 hover:scale-110 transition-all duration-300"
            >
              <component :is="social.icon" class="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
            </a>
          </div>

          <!-- Quick Links -->
          <div class="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <router-link
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="text-gray-400 hover:text-amber-400 transition-colors"
            >
              {{ link.name }}
            </router-link>
          </div>

          <!-- Copyright -->
          <p class="text-xs text-gray-500">
            © {{ currentYear }} Riki Andi Alfiyanto — Crafted with 
            <span class="text-amber-400">♥</span> 
            using Vue.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Menu, X, MessageCircle, Linkedin, Github, MessageSquare } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

const router = useRouter()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const currentYear = computed(() => new Date().getFullYear())

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/portfolio' },
]

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/riki-andi-alfiyanto/', icon: Linkedin },
  { name: 'GitHub', url: 'https://github.com/RavenAgtha18', icon: Github },
  { name: 'WhatsApp', url: 'https://wa.me/6285175180821', icon: MessageSquare },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Close mobile menu on route change
router.afterEach(() => {
  isMobileMenuOpen.value = false
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50,
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Mobile Menu Transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Nav Link Active Indicator Animation */
.nav-link span:last-child {
  transition: all 0.3s ease;
}

.nav-link:hover span:last-child {
  width: 6px;
}
</style>
