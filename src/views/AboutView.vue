<script>
export default {
  data() {
    return {
      activeTab: 1,
      tech: [
        {
          id: 1,
          name: "HTML",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
          status: "Advanced",
        },
        {
          id: 2,
          name: "CSS",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
          status: "Advanced",
        },
        {
          id: 3,
          name: "PHP",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png",
          status: "Advanced",
        },
        {
          id: 4,
          name: "Javascript",
          imageUrl:
            "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
          status: "Advance",
        },
        {
          id: 5,
          name: "Laravel",
          imageUrl: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
          status: "Advance",
        },
        {
          id: 6,
          name: "Codeigniter",
          imageUrl: "https://static.cdnlogo.com/logos/c/31/codeigniter.svg",
          status: "Intermediate",
        },
        {
          id: 7,
          name: "VueJS",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp",
          status: "Intermediate",
        },
        {
          id: 8,
          name: "NodeJS",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png",
          status: "Beginner",
        },
        {
          id: 9,
          name: "Tailwind",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
          status: "Advance",
        },
        {
          id: 10,
          name: "Bootstrap",
          imageUrl:
            "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
          status: "Intermediate",
        },
        {
          id: 11,
          name: "AngularJS",
          imageUrl:
            "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png",
          status: "Intermediate",
        },
      ],
      tools: [
        {
          id: 1,
          name: "Git",
          imageUrl:
            "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
          status: "Version Control",
        },
        {
          id: 2,
          name: "GitHub",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          status: "Git Hosting",
        },
        {
          id: 3,
          name: "NPM",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png",
          status: "Package Manager",
        },
        {
          id: 4,
          name: "MySQL",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
          status: "Database",
        },
        {
          id: 5,
          name: "PostgreSQL",
          imageUrl:
            "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/postgresql-512.png",
          status: "Database",
        },
      ],
      hoveredSkill: null,
    };
  },
  methods: {
    getProficiencyColor(status) {
      const map = {
        Advanced: "from-emerald-400 to-emerald-600",
        Intermediate: "from-amber-400 to-amber-600",
        Beginner: "from-rose-400 to-rose-600",
        "Version Control": "from-blue-400 to-blue-600",
        "Git Hosting": "from-purple-400 to-purple-600",
        "Package Manager": "from-red-400 to-red-600",
        Database: "from-cyan-400 to-cyan-600",
      };
      return map[status] || "from-gray-400 to-gray-600";
    },
    setHoveredSkill(id) {
      this.hoveredSkill = id;
    },
    clearHoveredSkill() {
      this.hoveredSkill = null;
    },
  },
};
</script>
<template>
  <!-- About Me Section -->
  <div
    class="relative overflow-hidden bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-[#383838] rounded-3xl mx-3 mb-8 p-8 md:p-12"
  >
    <!-- Decorative Elements -->
    <div
      class="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl"
    ></div>

    <article data-page="about">
      <header>
        <div class="flex items-center mb-8 group">
          <h2
            class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent"
          >
            About Me
          </h2>
          <div
            class="ml-4 h-px flex-1 bg-gradient-to-r from-amber-400/30 to-transparent transition-all duration-500 group-hover:from-amber-400/80"
          ></div>
        </div>
      </header>

      <section class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <!-- Profile Image with Floating Effect -->
        <div class="relative flex justify-center lg:justify-start">
          <div class="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 group">
            <div
              class="absolute inset-0 rounded-full border-2 border-amber-400/30 transform rotate-0 group-hover:rotate-6 transition-transform duration-700"
            ></div>
            <div
              class="absolute inset-0 rounded-full border-2 border-emerald-400/30 transform -rotate-3 group-hover:-rotate-9 transition-transform duration-500"
            ></div>
            <img
              class="w-full h-full rounded-full object-cover z-10 relative border-2 border-amber-200/20"
              src="/img/profile.jpg"
              alt="Profile Photo"
            />
            <div
              class="absolute -inset-2 rounded-full bg-amber-400/10 blur-md group-hover:blur-lg transition-all duration-300"
            ></div>
          </div>
        </div>

        <!-- Bio Text -->
        <div class="lg:col-span-2 space-y-6">
          <p class="text-gray-300 leading-relaxed text-lg md:text-xl">
            <span class="text-amber-300 font-medium"
              >I'm a full-stack developer</span
            >
            who builds stuff that actually works - whether it's sleek UIs with
            Angular/Vue or robust APIs with Laravel. In the startup world where
            I cut my teeth, I've learned that good code isn't just about fancy
            syntax; it's about solving real problems.
          </p>

          <div class="relative pl-6 border-l-2 border-amber-400/30">
            <div
              class="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 animate-pulse"
            ></div>
            <p class="text-gray-400 italic">
              "Like that time I slashed deployment errors by 90% with smarter
              caching, or when I built a real-time notification system that
              boosted user engagement by 20%."
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <span
              class="px-3 py-1 rounded-full text-xs bg-amber-400/10 text-amber-300 border border-amber-400/20"
              >Laravel Expert</span
            >
            <span
              class="px-3 py-1 rounded-full text-xs bg-emerald-400/10 text-emerald-300 border border-emerald-400/20"
              >Vue Specialist</span
            >
            <span
              class="px-3 py-1 rounded-full text-xs bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
              >Tailwind CSS</span
            >
          </div>
        </div>
      </section>
    </article>
  </div>

  <!-- Skills Section -->
  <div
    class="relative bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-[#383838] rounded-3xl mx-3 p-8 md:p-12"
  >
    <!-- Decorative Elements -->
    <div
      class="absolute top-0 left-0 w-32 h-32 bg-purple-400/5 rounded-full blur-3xl"
    ></div>

    <article>
      <header>
        <div class="flex items-center mb-8 group">
          <h2
            class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent"
          >
            Skills & Tools
          </h2>
          <div
            class="ml-4 h-px flex-1 bg-gradient-to-r from-amber-400/30 to-transparent transition-all duration-500 group-hover:from-amber-400/80"
          ></div>
        </div>
      </header>

      <!-- Tab Navigation -->
      <div class="mb-8 border-b border-gray-800">
        <ul class="flex flex-wrap -mb-px">
          <li class="mr-2">
            <button
              @click="activeTab = 1"
              class="inline-block p-4 border-b-2 rounded-t-lg transition-all duration-300"
              :class="
                activeTab === 1
                  ? 'text-amber-400 border-amber-400'
                  : 'border-transparent hover:text-gray-300 hover:border-gray-300'
              "
            >
              <span class="flex items-center gap-2">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
                Tech Stack
              </span>
            </button>
          </li>
          <li class="mr-2">
            <button
              @click="activeTab = 2"
              class="inline-block p-4 border-b-2 rounded-t-lg transition-all duration-300"
              :class="
                activeTab === 2
                  ? 'text-amber-400 border-amber-400'
                  : 'border-transparent hover:text-gray-300 hover:border-gray-300'
              "
            >
              <span class="flex items-center gap-2">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
                Development Tools
              </span>
            </button>
          </li>
        </ul>
      </div>

      <!-- Tech Stack Grid -->
      <div
        v-show="activeTab === 1"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        <div
          v-for="item in tech"
          :key="item.id"
          class="relative"
          @mouseenter="setHoveredSkill(item.id)"
          @mouseleave="clearHoveredSkill()"
        >
          <div
            class="h-full flex flex-col items-center p-6 rounded-xl transition-all duration-300"
            :class="
              hoveredSkill === item.id
                ? 'bg-gray-800/50 shadow-lg'
                : 'bg-gray-900/50 hover:bg-gray-800/30'
            "
          >
            <div
              class="relative w-16 h-16 mb-4 flex items-center justify-center"
            >
              <div
                class="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400/10 to-transparent blur-md opacity-0 transition-opacity duration-300"
                :class="{ 'opacity-100': hoveredSkill === item.id }"
              ></div>
              <img
                :src="item.imageUrl"
                :alt="item.name"
                class="w-full h-full object-contain transition-transform duration-300"
                :class="{ 'scale-110': hoveredSkill === item.id }"
              />
            </div>
            <h3 class="text-center font-medium text-gray-200 mb-1">
              {{ item.name }}
            </h3>
            <div
              class="text-xs font-mono px-2 py-1 rounded-full"
              :class="`bg-gradient-to-r ${getProficiencyColor(
                item.status
              )} text-white`"
            >
              {{ item.status }}
            </div>
          </div>
        </div>
      </div>

      <!-- Tools Grid -->
      <div
        v-show="activeTab === 2"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        <div
          v-for="item in tools"
          :key="item.id"
          class="relative"
          @mouseenter="setHoveredSkill(item.id)"
          @mouseleave="clearHoveredSkill()"
        >
          <div
            class="h-full flex flex-col items-center p-6 rounded-xl transition-all duration-300"
            :class="
              hoveredSkill === item.id
                ? 'bg-gray-800/50 shadow-lg'
                : 'bg-gray-900/50 hover:bg-gray-800/30'
            "
          >
            <div
              class="relative w-16 h-16 mb-4 flex items-center justify-center"
            >
              <div
                class="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400/10 to-transparent blur-md opacity-0 transition-opacity duration-300"
                :class="{ 'opacity-100': hoveredSkill === item.id }"
              ></div>
              <img
                :src="item.imageUrl"
                :alt="item.name"
                class="w-full h-full object-contain transition-transform duration-300"
                :class="{ 'scale-110': hoveredSkill === item.id }"
              />
            </div>
            <h3 class="text-center font-medium text-gray-200 mb-1">
              {{ item.name }}
            </h3>
            <div
              class="text-xs font-mono px-2 py-1 rounded-full"
              :class="`bg-gradient-to-r ${getProficiencyColor(
                item.status
              )} text-white`"
            >
              {{ item.status }}
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<style>
/* Animation for section entrance */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation for cards */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* Apply animations */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Smooth transitions */
.transition-slow {
  transition: all 0.7s ease;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #1a1a1a;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(#f59e0b, #fbbf24);
  border-radius: 3px;
}
</style>
