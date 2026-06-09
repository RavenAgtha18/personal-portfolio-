<template>
  <div class="relative overflow-hidden min-h-screen">
    <!-- Header Section -->
    <section class="pt-20 pb-10 px-6">
      <div class="max-w-7xl mx-auto text-center">
        <div 
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-amber mb-6"
          data-aos="fade-down"
        >
          <FolderOpen class="w-4 h-4 text-amber-400" />
          <span class="text-sm text-amber-300">Portfolio</span>
        </div>
        
        <h1 
          class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
          data-aos="fade-up"
        >
          <span class="gradient-text">Project Intelligence</span>
        </h1>
        
        <p 
          class="text-gray-400 max-w-2xl mx-auto mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Bridging <span class="text-amber-300">Technology</span> and 
          <span class="text-amber-300">Business Insight</span> through innovative solutions
        </p>

        <!-- View Toggle -->
        <div 
          class="flex justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button
            @click="activeMode = 'portfolio'"
            :class="[
              'px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2',
              activeMode === 'portfolio'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/25'
                : 'glass text-gray-300 hover:text-white hover:bg-white/10'
            ]"
          >
            <Grid3x3 class="w-4 h-4" />
            Portfolio View
          </button>
          <button
            @click="activeMode = 'dashboard'"
            :class="[
              'px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2',
              activeMode === 'dashboard'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/25'
                : 'glass text-gray-300 hover:text-white hover:bg-white/10'
            ]"
          >
            <BarChart3 class="w-4 h-4" />
            Analytics
          </button>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid View -->
    <Transition name="fade" mode="out-in">
      <section
        v-if="activeMode === 'portfolio'"
        key="portfolio"
        class="px-6 py-12 max-w-7xl mx-auto"
      >
        <!-- Filter Tags -->
        <div class="flex flex-wrap justify-center gap-2 mb-10" data-aos="fade-up">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="activeFilter = filter"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
              activeFilter === filter
                ? 'bg-amber-500 text-black'
                : 'glass text-gray-400 hover:text-white hover:bg-white/10'
            ]"
          >
            {{ filter }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <TransitionGroup name="list">
            <div
              v-for="(item, index) in filteredItems"
              :key="item.id"
              class="group relative rounded-2xl overflow-hidden glass transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10"
              :data-aos="'fade-up'"
              :data-aos-delay="index * 50"
            >
              <!-- Image Container -->
              <div class="relative h-48 overflow-hidden">
                <img
                  :src="'/img/portfolio-' + item.imageUrl + '.png'"
                  :alt="item.name"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
                
                <!-- Tech Badge on Image -->
                <div class="absolute top-3 right-3 flex flex-wrap justify-end gap-1">
                  <span 
                    v-for="tech in item.tech.split(', ').slice(0, 2)"
                    :key="tech"
                    class="px-2 py-1 rounded-md text-[10px] font-medium glass backdrop-blur-lg"
                    :class="getTechClass(tech)"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- Hover Actions -->
                <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                  <router-link
                    v-if="item.isCaseStudy"
                    :to="item.demo"
                    class="px-4 py-2 rounded-xl bg-amber-500 text-black font-semibold text-sm hover:scale-105 transition-transform flex items-center gap-1.5"
                  >
                    <BookOpen class="w-4 h-4" />
                    Read Case Study
                  </router-link>
                  <template v-else>
                    <a
                      v-if="item.demo !== 'null'"
                      :href="item.demo"
                      target="_blank"
                      class="p-3 rounded-full bg-amber-500 text-black hover:scale-110 transition-transform"
                    >
                      <ExternalLink class="w-5 h-5" />
                    </a>
                    <a
                      v-if="item.github !== 'null'"
                      :href="item.github"
                      target="_blank"
                      class="p-3 rounded-full bg-white/10 text-white hover:scale-110 transition-transform"
                    >
                      <Github class="w-5 h-5" />
                    </a>
                  </template>
                </div>
              </div>

              <!-- Content -->
              <div class="p-5">
                <h3 class="font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-1">
                  {{ item.name }}
                </h3>
                <p class="text-sm text-gray-400 line-clamp-2 mb-4">
                  {{ item.status }}
                </p>

                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="tech in item.tech.split(', ').slice(0, 3)"
                    :key="tech"
                    class="px-2 py-1 rounded-md text-[10px] font-medium"
                    :class="getTechClass(tech)"
                  >
                    {{ tech }}
                  </span>
                  <span
                    v-if="item.tech.split(', ').length > 3"
                    class="px-2 py-1 rounded-md text-[10px] font-medium bg-white/5 text-gray-400"
                  >
                    +{{ item.tech.split(', ').length - 3 }}
                  </span>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </section>

      <!-- Analytics Dashboard View -->
      <section
        v-else
        key="dashboard"
        class="px-6 py-12 max-w-7xl mx-auto"
      >
        <!-- Stats Cards -->
        <div 
          class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          data-aos="fade-up"
        >
          <div
            v-for="(insight, index) in insights"
            :key="insight.label"
            class="relative p-6 rounded-2xl glass hover:glass-amber transition-all duration-300 hover:-translate-y-1 group"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
          >
            <div class="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <component :is="insight.icon" class="w-16 h-16 text-amber-400" />
            </div>
            <p class="text-sm text-amber-400 mb-1">{{ insight.label }}</p>
            <p class="text-4xl font-bold text-white">{{ insight.value }}</p>
          </div>
        </div>

        <!-- Charts Grid -->
        <div class="grid md:grid-cols-2 gap-8">
          <div 
            class="p-6 rounded-2xl glass"
            data-aos="fade-up"
          >
            <h3 class="text-amber-400 mb-4 text-sm font-medium flex items-center gap-2">
              <BarChart3 class="w-4 h-4" />
              Technology Usage
            </h3>
            <canvas ref="techChart" class="w-full"></canvas>
          </div>
          <div 
            class="p-6 rounded-2xl glass"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 class="text-amber-400 mb-4 text-sm font-medium flex items-center gap-2">
              <PieChartIcon class="w-4 h-4" />
              Project Type Distribution
            </h3>
            <canvas ref="typeChart" class="w-full"></canvas>
          </div>
        </div>
      </section>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { 
  FolderOpen, 
  Grid3x3, 
  BarChart3, 
  ExternalLink, 
  Github,
  PieChart as PieChartIcon,
  Layers,
  Cpu,
  Code2,
  BookOpen
} from 'lucide-vue-next'
import Chart from 'chart.js/auto'

const activeMode = ref('portfolio')
const activeFilter = ref('All')
const techChart = ref(null)
const typeChart = ref(null)
let techChartInstance = null
let typeChartInstance = null

const filters = ['All', 'Laravel', 'Vue.js', 'Python', 'Tailwind']

const items = [
  {
    id: 10,
    name: "SnapPack",
    imageUrl: "snappack",
    status: "Mendigitalisasi sistem manajemen dokumentasi pengiriman furnitur premium Christopher Guy. Memangkas birokrasi transfer media, mengintegrasikan tanda tangan digital, dan memotong waktu audit pencarian berkas hingga 95%.",
    tech: "Laravel, Vue.js, MySQL, Tailwind CSS",
    github: "null",
    demo: "/portfolio/snappack",
    isCaseStudy: true
  },
  {
    id: 0,
    name: "Smart Money Intelligence Dashboard",
    imageUrl: "SM",
    status: "AI-powered dashboard detecting foreign accumulation (Smart Money) in IDX with real-time signal recommendations.",
    tech: "Python, Streamlit, Gemini 2.5 AI, Firebase",
    github: "https://github.com/RavenAgtha18/Smart-Money-Intelligence",
    demo: "https://huggingface.co/spaces/ravenagtha18/smart-money-tracker"
  },
  {
    id: 1,
    name: "Protrack System",
    imageUrl: "protrack",
    status: "Production tracking system for workflow visibility and reporting.",
    tech: "JavaScript, Tailwind, Laravel, Flowbite",
    github: "null",
    demo: "null"
  },
  {
    id: 2,
    name: "Productly",
    imageUrl: "productly",
    status: "Landing page leveraging Bootstrap for responsive UI.",
    tech: "HTML, Bootstrap, JS",
    github: "https://github.com/RavenAgtha18/slicing-productly.git",
    demo: "https://polite-cat-ca7188.netlify.app/"
  },
  {
    id: 3,
    name: "Resto",
    imageUrl: "resto",
    status: "Modern restaurant showcase with clean UI.",
    tech: "HTML, Bootstrap",
    github: "https://github.com/RavenAgtha18/lading-page-resto.git",
    demo: "https://majestic-khapse-51488b.netlify.app/"
  },
  {
    id: 4,
    name: "Market Lite Management",
    imageUrl: "market",
    status: "Retail management app with stock and supplier module.",
    tech: "Laravel 10, Bootstrap",
    github: "https://github.com/RavenAgtha18/store.git",
    demo: "null"
  },
  {
    id: 5,
    name: "Library Management Apps",
    imageUrl: "library",
    status: "Library system featuring catalog and loan transactions.",
    tech: "Laravel 9, Bootstrap, VueJS 3",
    github: "https://github.com/RavenAgtha18/perpustakaaan.gi",
    demo: "null"
  },
  {
    id: 6,
    name: "Webclinic",
    imageUrl: "webclinic",
    status: "Clinic management app for appointments and medication.",
    tech: "Laravel 5, Bootstrap, AngularJs",
    github: "null",
    demo: "null"
  },
  {
    id: 7,
    name: "Product Quality (QC)",
    imageUrl: "qc",
    status: "Factory QC system with automated report generation.",
    tech: "Laravel, JavaScript, Tailwind, Flowbite",
    github: "null",
    demo: "null"
  },
  {
    id: 8,
    name: "FinWise",
    imageUrl: "finwise",
    status: "Personal budgeting app with smart tracking.",
    tech: "Laravel, JavaScript, Tailwind, Flowbite",
    github: "null",
    demo: "null"
  },
  {
    id: 9,
    name: "StokKu",
    imageUrl: "stokku",
    status: "Inventory management with analytics and insights.",
    tech: "Laravel, JavaScript, Tailwind, Flowbite",
    github: "null",
    demo: "null"
  }
]

const filteredItems = computed(() => {
  if (activeFilter.value === 'All') return items
  return items.filter(item => 
    item.tech.toLowerCase().includes(activeFilter.value.toLowerCase())
  )
})

const insights = computed(() => [
  { label: "Total Projects", value: items.length, icon: Layers },
  { label: "AI Projects", value: items.filter(i => i.tech.includes("AI")).length, icon: Cpu },
  { label: "Laravel Apps", value: items.filter(i => i.tech.includes("Laravel")).length, icon: Code2 }
])

const getTechClass = (tech) => {
  const map = {
    Laravel: "bg-red-500/20 text-red-400 border border-red-500/30",
    Tailwind: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
    Bootstrap: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
    VueJS: "bg-green-500/20 text-green-400 border border-green-500/30",
    Vue: "bg-green-500/20 text-green-400 border border-green-500/30",
    Python: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    AI: "bg-pink-500/20 text-pink-400 border border-pink-500/30",
    JavaScript: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    JS: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    Streamlit: "bg-rose-500/20 text-rose-400 border border-rose-500/30",
    Firebase: "bg-orange-500/20 text-orange-400 border border-orange-500/30",
    Flowbite: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  }
  for (const key in map) if (tech.includes(key)) return map[key]
  return "bg-amber-500/20 text-amber-400 border border-amber-500/30"
}

const renderCharts = () => {
  nextTick(() => {
    const ctxTech = techChart.value?.getContext('2d')
    const ctxType = typeChart.value?.getContext('2d')

    if (!ctxTech || !ctxType) return

    // Destroy existing charts
    if (techChartInstance) techChartInstance.destroy()
    if (typeChartInstance) typeChartInstance.destroy()

    // Tech usage chart
    const techCounts = {}
    items.forEach(p =>
      p.tech.split(', ').forEach(t => (techCounts[t] = (techCounts[t] || 0) + 1))
    )

    techChartInstance = new Chart(ctxTech, {
      type: 'bar',
      data: {
        labels: Object.keys(techCounts),
        datasets: [{
          label: 'Usage',
          data: Object.values(techCounts),
          backgroundColor: 'rgba(251, 191, 36, 0.6)',
          borderColor: 'rgba(251, 191, 36, 1)',
          borderWidth: 1,
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#9ca3af', font: { size: 10 } }
          },
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#9ca3af' }
          }
        }
      }
    })

    // Type distribution chart
    const laravelCount = items.filter(i => i.tech.includes('Laravel')).length
    const aiCount = items.filter(i => i.tech.includes('AI')).length
    const others = items.length - laravelCount - aiCount

    typeChartInstance = new Chart(ctxType, {
      type: 'doughnut',
      data: {
        labels: ['Laravel', 'AI', 'Others'],
        datasets: [{
          data: [laravelCount, aiCount, others],
          backgroundColor: [
            'rgba(239, 68, 68, 0.7)',
            'rgba(251, 191, 36, 0.7)',
            'rgba(75, 85, 99, 0.7)'
          ],
          borderColor: [
            'rgba(239, 68, 68, 1)',
            'rgba(251, 191, 36, 1)',
            'rgba(75, 85, 99, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: '#9ca3af', padding: 20 }
          }
        }
      }
    })
  })
}

watch(activeMode, (val) => {
  if (val === 'dashboard') {
    setTimeout(renderCharts, 300)
  }
})

onMounted(() => {
  // Initialize if dashboard is active
  if (activeMode.value === 'dashboard') {
    renderCharts()
  }
})
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

.list-move {
  transition: transform 0.4s ease;
}
</style>
