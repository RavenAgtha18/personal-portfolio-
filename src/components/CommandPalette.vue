<template>
  <div>
    <!-- Trigger Button (can be placed in Navbar or accessed globally via Ctrl+K / Cmd+K) -->
    <button
      @click="isOpen = true"
      class="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all duration-200 hover:border-amber-500/60"
      :class="isDark ? 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200' : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'"
      title="Open Command Palette (Ctrl+K or ⌘K)"
    >
      <Search class="w-3.5 h-3.5 text-amber-500" />
      <span class="text-[11px]">Quick Search</span>
      <kbd class="px-1.5 py-0.5 rounded text-[10px] border" :class="isDark ? 'border-zinc-700 bg-zinc-800 text-zinc-400' : 'border-slate-300 bg-white text-slate-500'">
        {{ isMac ? '⌘K' : 'Ctrl+K' }}
      </kbd>
    </button>

    <!-- Modal Backdrop -->
    <Teleport to="body">
      <Transition name="palette-fade">
        <div
          v-if="isOpen"
          class="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/70 backdrop-blur-md"
          @click.self="closePalette"
        >
          <!-- Command Window -->
          <div
            class="relative w-full max-w-xl rounded-2xl border overflow-hidden shadow-2xl transition-all duration-200 font-mono"
            :class="isDark ? 'bg-zinc-950 border-zinc-800 text-zinc-100 shadow-amber-500/5' : 'bg-white border-slate-200 text-slate-900'"
          >
            <!-- Search Input Header -->
            <div
              class="px-4 py-3 border-b flex items-center gap-3"
              :class="isDark ? 'border-zinc-800 bg-zinc-900/50' : 'border-slate-100 bg-slate-50'"
            >
              <Search class="w-4 h-4 text-amber-500 flex-shrink-0" />
              <input
                ref="inputRef"
                v-model="query"
                type="text"
                placeholder="Search case studies, systems, actions, or jump to page..."
                class="w-full bg-transparent text-sm focus:outline-none placeholder-zinc-500"
                @keydown.down.prevent="navigateResults(1)"
                @keydown.up.prevent="navigateResults(-1)"
                @keydown.enter.prevent="selectActive"
                @keydown.esc.prevent="closePalette"
              />
              <kbd
                @click="closePalette"
                class="px-2 py-0.5 rounded text-[10px] border cursor-pointer hover:border-amber-500 transition-colors"
                :class="isDark ? 'border-zinc-800 bg-zinc-900 text-zinc-400' : 'border-slate-200 bg-slate-100 text-slate-500'"
              >
                ESC
              </kbd>
            </div>

            <!-- Results List -->
            <div class="max-h-[380px] overflow-y-auto p-2 space-y-1 text-xs">
              <div v-if="filteredItems.length === 0" class="py-8 text-center text-zinc-500 text-xs">
                No commands or projects match "{{ query }}"
              </div>

              <!-- Result Item -->
              <div
                v-for="(item, idx) in filteredItems"
                :key="item.id"
                @click="executeItem(item)"
                @mouseenter="selectedIndex = idx"
                class="px-3 py-2.5 rounded-xl flex items-center justify-between cursor-pointer transition-all duration-150"
                :class="[
                  selectedIndex === idx
                    ? isDark
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/40'
                      : 'bg-amber-50 text-amber-900 border border-amber-300'
                    : 'border border-transparent hover:border-zinc-800'
                ]"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    :class="isDark ? 'bg-zinc-900 border border-zinc-800 text-zinc-300' : 'bg-slate-100 border border-slate-200 text-slate-700'"
                  >
                    <component :is="item.icon" class="w-3.5 h-3.5 text-amber-500" />
                  </div>
                  <div>
                    <div class="font-bold text-xs flex items-center gap-2">
                      <span>{{ item.title }}</span>
                      <span v-if="item.badge" class="text-[9px] px-1.5 py-0.2 rounded border" :class="isDark ? 'border-zinc-800 text-zinc-400' : 'border-slate-200 text-slate-500'">
                        {{ item.badge }}
                      </span>
                    </div>
                    <div class="text-[10px] text-zinc-500 line-clamp-1">
                      {{ item.subtitle }}
                    </div>
                  </div>
                </div>

                <div class="text-[10px] text-zinc-500 flex items-center gap-1 font-mono">
                  <span>{{ item.actionText }}</span>
                  <ArrowRight class="w-3 h-3 text-amber-500" />
                </div>
              </div>
            </div>

            <!-- Footer Keyboard Legend -->
            <div
              class="px-4 py-2 border-t text-[10px] flex items-center justify-between"
              :class="isDark ? 'border-zinc-800/80 bg-zinc-900/40 text-zinc-500' : 'border-slate-100 bg-slate-50 text-slate-400'"
            >
              <div class="flex items-center gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>ESC Close</span>
              </div>
              <span class="text-amber-500">RAYCAST PROTOCOL · 60 FPS</span>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Toast Notification (e.g. for copied links) -->
    <Teleport to="body">
      <Transition name="toast">
        <div
          v-if="toastMessage"
          class="fixed bottom-6 right-6 z-[120] px-4 py-2.5 rounded-xl border text-xs font-mono shadow-2xl flex items-center gap-2"
          :class="isDark ? 'bg-zinc-900 border-amber-500 text-zinc-100' : 'bg-white border-amber-500 text-slate-900'"
        >
          <CheckCircle2 class="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>{{ toastMessage }}</span>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useTheme } from '@/composables/useTheme'
import {
  Search,
  ArrowRight,
  FolderOpen,
  FileText,
  User,
  Sun,
  Moon,
  MessageCircle,
  Copy,
  CheckCircle2,
  PackageCheck,
  Activity,
  Layers,
  ShieldCheck,
  Cpu,
  Globe,
} from 'lucide-vue-next'

const router = useRouter()
const { isDark, toggleTheme } = useTheme()

const isOpen = ref(false)
const query = ref('')
const selectedIndex = ref(0)
const inputRef = ref(null)
const toastMessage = ref('')

const isMac = ref(false)

const showToast = (msg) => {
  toastMessage.value = msg
  setTimeout(() => {
    toastMessage.value = ''
  }, 2400)
}

// Command Items Catalog
const items = [
  // 1. Enterprise Case Studies
  {
    id: 'cs-snappack',
    category: 'Case Studies',
    title: 'SnapPack — Shipping Document Verification',
    subtitle: 'Furniture packaging audit system reducing search time by 95%',
    badge: 'MANUFACTURING',
    actionText: 'View Case Study',
    icon: PackageCheck,
    action: () => router.push('/portfolio/snappack'),
  },
  {
    id: 'cs-protrack',
    category: 'Case Studies',
    title: 'Protrack — Real-Time WIP Tracking',
    subtitle: '100% floor visibility across physical assembly lines',
    badge: 'MES AUTOMATION',
    actionText: 'View Case Study',
    icon: Activity,
    action: () => router.push('/portfolio/protrack'),
  },
  {
    id: 'cs-proscan',
    category: 'Case Studies',
    title: 'ProScan — Barcode Stock Opname',
    subtitle: 'Warehouse inventory audit eliminating recording discrepancies',
    badge: 'LOGISTICS',
    actionText: 'View Case Study',
    icon: Layers,
    action: () => router.push('/portfolio/proscan'),
  },
  {
    id: 'cs-qcchecklist',
    category: 'Case Studies',
    title: 'QC Checklist — Zero-Defect Inspection',
    subtitle: 'Digital tolerance gates and inspector verification sign-off',
    badge: 'QUALITY CONTROL',
    actionText: 'View Case Study',
    icon: ShieldCheck,
    action: () => router.push('/portfolio/qcchecklist'),
  },
  {
    id: 'cs-stokku',
    category: 'Case Studies',
    title: 'Stokku — Material Shelf-Life Control',
    subtitle: 'Expiration alerts, warehouse zoning, and FIFO/FEFO rules',
    badge: 'INVENTORY',
    actionText: 'View Case Study',
    icon: Cpu,
    action: () => router.push('/portfolio/stokku'),
  },
  {
    id: 'cs-isp',
    category: 'Case Studies',
    title: 'ISP Semarang — Portal & Operations',
    subtitle: 'High-volume internet service provider operational portal',
    badge: 'LIVE SYSTEM',
    actionText: 'Open Live Demo',
    icon: Globe,
    action: () => window.open('https://www.ispsemarang.my.id', '_blank'),
  },

  // 2. Navigation
  {
    id: 'nav-home',
    category: 'Navigation',
    title: 'Home Page',
    subtitle: 'Hero, 3D WebGL core, real-time telemetry, and global reach',
    badge: 'MAIN',
    actionText: 'Navigate',
    icon: ArrowRight,
    action: () => router.push('/'),
  },
  {
    id: 'nav-about',
    category: 'Navigation',
    title: 'About & Technical Competencies',
    subtitle: 'Senior Technical BA & Bridge SE architecture profile',
    badge: 'BIO',
    actionText: 'Navigate',
    icon: User,
    action: () => router.push('/about'),
  },
  {
    id: 'nav-portfolio',
    category: 'Navigation',
    title: 'All Projects (15+ Catalog)',
    subtitle: 'Explore full engineering project index and architecture dashboard',
    badge: 'CATALOG',
    actionText: 'Navigate',
    icon: FolderOpen,
    action: () => router.push('/portfolio'),
  },

  // 3. Quick Actions
  {
    id: 'act-resume',
    category: 'Actions',
    title: 'Download Resume / CV',
    subtitle: 'Open official PDF resume (Riki Andi Alfiyanto)',
    badge: 'PDF',
    actionText: 'Download',
    icon: FileText,
    action: () => window.open('/cv_rikiandi.pdf', '_blank'),
  },
  {
    id: 'act-theme',
    category: 'Actions',
    title: 'Toggle Color Theme',
    subtitle: 'Switch between Obsidian Cyber Dark and Clean Architecture Light',
    badge: 'THEME',
    actionText: 'Toggle',
    icon: isDark.value ? Sun : Moon,
    action: () => toggleTheme(),
  },
  {
    id: 'act-wa',
    category: 'Actions',
    title: 'Copy WhatsApp Number',
    subtitle: '+62 851-7518-0821 (Direct Recruiter Hotline)',
    badge: 'CONTACT',
    actionText: 'Copy',
    icon: Copy,
    action: () => {
      navigator.clipboard.writeText('+6285175180821')
      showToast('Copied WhatsApp: +62 851-7518-0821')
    },
  },
  {
    id: 'act-email',
    category: 'Actions',
    title: 'Copy Email Address',
    subtitle: 'rikiandialfiyanto@gmail.com',
    badge: 'CONTACT',
    actionText: 'Copy',
    icon: MessageCircle,
    action: () => {
      navigator.clipboard.writeText('rikiandialfiyanto@gmail.com')
      showToast('Copied Email: rikiandialfiyanto@gmail.com')
    },
  },
]

const filteredItems = computed(() => {
  if (!query.value.trim()) return items
  const q = query.value.toLowerCase()
  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.badge.toLowerCase().includes(q)
  )
})

const navigateResults = (dir) => {
  const len = filteredItems.value.length
  if (len === 0) return
  selectedIndex.value = (selectedIndex.value + dir + len) % len
}

const selectActive = () => {
  if (filteredItems.value.length > 0) {
    executeItem(filteredItems.value[selectedIndex.value])
  }
}

const executeItem = (item) => {
  closePalette()
  item.action()
}

const closePalette = () => {
  isOpen.value = false
  query.value = ''
  selectedIndex.value = 0
}

const handleGlobalKeydown = (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    isOpen.value = !isOpen.value
    if (isOpen.value) {
      nextTick(() => {
        if (inputRef.value) inputRef.value.focus()
      })
    }
  } else if (e.key === 'Escape' && isOpen.value) {
    closePalette()
  }
}

onMounted(() => {
  isMac.value = typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform)
  window.addEventListener('keydown', handleGlobalKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeydown)
})
</script>

<style scoped>
.palette-fade-enter-active,
.palette-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.palette-fade-enter-from,
.palette-fade-leave-to {
  opacity: 0;
  transform: scale(0.97);
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(15px);
}
</style>
