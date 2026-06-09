<script setup>
import { ref } from 'vue'
import { 
  User, 
  Briefcase, 
  Code2, 
  Wrench,
  Zap,
  Target,
  Heart
} from 'lucide-vue-next'

const activeTab = ref('tech')

const tech = [
  { id: 1, name: "HTML", imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png", status: "Advanced", level: 95 },
  { id: 2, name: "CSS", imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png", status: "Advanced", level: 90 },
  { id: 3, name: "PHP", imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png", status: "Advanced", level: 90 },
  { id: 4, name: "JavaScript", imageUrl: "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png", status: "Advanced", level: 88 },
  { id: 5, name: "Laravel", imageUrl: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg", status: "Advanced", level: 92 },
  { id: 6, name: "Vue.js", imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp", status: "Intermediate", level: 80 },
  { id: 7, name: "Tailwind", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", status: "Advanced", level: 92 },
  { id: 8, name: "Python", imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", status: "Intermediate", level: 70 },
  { id: 9, name: "Node.js", imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png", status: "Beginner", level: 50 },
  { id: 10, name: "Bootstrap", imageUrl: "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png", status: "Intermediate", level: 75 },
]

const tools = [
  { id: 1, name: "Git", imageUrl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png", status: "Version Control", level: 90 },
  { id: 2, name: "GitHub", imageUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png", status: "Git Hosting", level: 88 },
  { id: 3, name: "VS Code", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png", status: "IDE", level: 95 },
  { id: 4, name: "MySQL", imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png", status: "Database", level: 85 },
  { id: 5, name: "PostgreSQL", imageUrl: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/postgresql-512.png", status: "Database", level: 75 },
  { id: 6, name: "Figma", imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-figma-3521426-2944870.png", status: "Design", level: 70 },
]

const highlights = [
  { icon: Zap, title: "2+ Years Experience", desc: "Building production-ready applications" },
  { icon: Target, title: "Business Focused", desc: "Bridging tech and business needs" },
  { icon: Heart, title: "Passionate Learner", desc: "Always exploring new technologies" },
]

const getStatusColor = (status) => {
  const map = {
    'Advanced': 'from-amber-400 to-amber-600',
    'Intermediate': 'from-teal-400 to-teal-600',
    'Beginner': 'from-rose-400 to-rose-600',
    'Version Control': 'from-orange-400 to-orange-600',
    'Git Hosting': 'from-purple-400 to-purple-600',
    'IDE': 'from-blue-400 to-blue-600',
    'Database': 'from-cyan-400 to-cyan-600',
    'Design': 'from-pink-400 to-pink-600',
  }
  return map[status] || 'from-gray-400 to-gray-600'
}

const getProgressColor = (status) => {
  const map = {
    'Advanced': 'bg-gradient-to-r from-amber-400 to-amber-600',
    'Intermediate': 'bg-gradient-to-r from-teal-400 to-teal-600',
    'Beginner': 'bg-gradient-to-r from-rose-400 to-rose-600',
  }
  return map[status] || 'bg-gradient-to-r from-amber-400 to-amber-600'
}
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- About Hero Section -->
    <section class="relative py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <!-- Profile Image -->
          <div class="relative" data-aos="fade-right">
            <div class="relative w-64 h-64 md:w-80 md:h-80 group">
              <!-- Animated Border -->
              <div class="absolute -inset-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 animate-gradient-shift opacity-50 blur-lg"></div>
              <div class="absolute -inset-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 animate-spin-slow"></div>
              
              <!-- Image -->
              <div class="relative w-full h-full rounded-full overflow-hidden border-4 border-[#0a0a0a]">
                <img
                  src="/img/profile.jpg"
                  alt="Riki Andi Alfiyanto"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <!-- Status Badge -->
              <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full glass-amber flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span class="text-sm text-amber-300 font-medium">Available for hire</span>
              </div>
            </div>
          </div>

          <!-- About Content -->
          <div class="flex-1 text-center lg:text-left" data-aos="fade-left">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-amber mb-4">
              <User class="w-4 h-4 text-amber-400" />
              <span class="text-sm text-amber-300">About Me</span>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
              <span class="text-white">Hi, I'm </span>
              <span class="gradient-text">Riki Andi Alfiyanto</span>
            </h1>
            
            <p class="text-lg text-gray-300 leading-relaxed mb-6">
              A passionate <span class="text-amber-400 font-medium">Full-stack Developer</span> and 
              <span class="text-amber-400 font-medium">Technical Business Analyst</span> with a unique blend of 
              technical expertise and business acumen. I specialize in creating systems that not only 
              look great but solve real operational problems.
            </p>
            
            <blockquote class="border-l-4 border-amber-500 pl-4 py-2 italic text-gray-400 mb-8">
              "Great software isn't about writing perfect code — it's about delivering measurable 
              impact that drives business value."
            </blockquote>

            <!-- Highlight Cards -->
            <div class="grid sm:grid-cols-3 gap-4">
              <div 
                v-for="(item, index) in highlights" 
                :key="item.title"
                class="p-4 rounded-xl glass hover:glass-amber transition-all duration-300 hover:-translate-y-1"
                :data-aos="'fade-up'"
                :data-aos-delay="index * 100"
              >
                <component :is="item.icon" class="w-8 h-8 text-amber-400 mb-2" />
                <h3 class="font-semibold text-white text-sm">{{ item.title }}</h3>
                <p class="text-xs text-gray-400">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-12" data-aos="fade-up">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-amber mb-4">
            <Code2 class="w-4 h-4 text-amber-400" />
            <span class="text-sm text-amber-300">Skills & Tools</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold">
            <span class="gradient-text">My Technical Arsenal</span>
          </h2>
          <p class="text-gray-400 mt-3 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <!-- Tab Buttons -->
        <div class="flex justify-center mb-10" data-aos="fade-up">
          <div class="inline-flex rounded-xl glass p-1">
            <button
              @click="activeTab = 'tech'"
              :class="[
                'px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300',
                activeTab === 'tech' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              ]"
            >
              <Code2 class="w-4 h-4 inline mr-2" />
              Tech Stack
            </button>
            <button
              @click="activeTab = 'tools'"
              :class="[
                'px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300',
                activeTab === 'tools' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              ]"
            >
              <Wrench class="w-4 h-4 inline mr-2" />
              Tools
            </button>
          </div>
        </div>

        <!-- Skills Grid -->
        <Transition name="fade" mode="out-in">
          <div :key="activeTab" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div
              v-for="(item, index) in activeTab === 'tech' ? tech : tools"
              :key="item.id"
              class="group relative p-6 rounded-2xl glass hover:glass-amber text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10"
              :data-aos="'fade-up'"
              :data-aos-delay="index * 50"
            >
              <!-- Glow Effect -->
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/0 to-amber-600/0 group-hover:from-amber-500/10 group-hover:to-amber-600/10 transition-all duration-300"></div>
              
              <!-- Icon -->
              <div class="relative w-14 h-14 mx-auto mb-4">
                <img
                  :src="item.imageUrl"
                  :alt="item.name"
                  class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <!-- Name -->
              <h3 class="text-sm font-semibold text-white mb-2">{{ item.name }}</h3>
              
              <!-- Status Badge -->
              <div 
                class="inline-block px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r"
                :class="getStatusColor(item.status)"
              >
                {{ item.status }}
              </div>

              <!-- Progress Bar (Tech Stack Only) -->
              <div v-if="activeTab === 'tech'" class="mt-3">
                <div class="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div 
                    class="h-full rounded-full transition-all duration-1000 ease-out"
                    :class="getProgressColor(item.status)"
                    :style="{ width: `${item.level}%` }"
                  ></div>
                </div>
                <div class="text-xs text-gray-500 mt-1">{{ item.level }}%</div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </section>

    <!-- Experience Timeline (Optional) -->
    <section class="py-20 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-amber mb-4">
            <Briefcase class="w-4 h-4 text-amber-400" />
            <span class="text-sm text-amber-300">Experience</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold">
            <span class="gradient-text">My Journey</span>
          </h2>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-400 to-transparent"></div>

          <!-- Timeline Items -->
          <div class="space-y-12">
            <div 
              class="relative flex flex-col md:flex-row gap-4 md:gap-8"
              data-aos="fade-up"
            >
              <div class="flex-1 md:text-right order-2 md:order-1">
                <div class="glass p-6 rounded-2xl hover:glass-amber transition-all duration-300">
                  <span class="text-amber-400 text-sm font-medium">2025 - Present</span>
                  <h3 class="text-lg font-bold text-white mt-1">Technical Business Analyst</h3>
                  <p class="text-sm text-gray-400 mt-2">
                    Leading system analysis and development for production tracking systems, 
                    bridging gap between business requirements and technical solutions.
                  </p>
                </div>
              </div>
              <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-[#0a0a0a] order-1 md:order-2"></div>
              <div class="flex-1 order-3 hidden md:block"></div>
            </div>

            <div 
              class="relative flex flex-col md:flex-row gap-4 md:gap-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="flex-1 hidden md:block order-1"></div>
              <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-400 border-4 border-[#0a0a0a] order-2"></div>
              <div class="flex-1 order-3">
                <div class="glass p-6 rounded-2xl hover:glass-amber transition-all duration-300 ml-8 md:ml-0">
                  <span class="text-amber-400 text-sm font-medium">2023 - 2024</span>
                  <h3 class="text-lg font-bold text-white mt-1">Full-stack Developer</h3>
                  <p class="text-sm text-gray-400 mt-2">
                    Developed web applications using Laravel, Vue.js, and various 
                    frontend technologies for multiple client projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
