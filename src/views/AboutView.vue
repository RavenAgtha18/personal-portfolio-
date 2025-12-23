<script>
export default {
  data() {
    return {
      activeTab: 1,
      hoveredSkill: null,
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
          status: "Advanced",
        },
        {
          id: 5,
          name: "Laravel",
          imageUrl: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
          status: "Advanced",
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
          status: "Advanced",
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
    };
  },
  methods: {
    getColor(status) {
      const map = {
        Advanced: "from-amber-400 to-amber-600",
        Intermediate: "from-teal-400 to-teal-600",
        Beginner: "from-rose-400 to-rose-600",
        "Version Control": "from-blue-400 to-blue-600",
        "Git Hosting": "from-purple-400 to-purple-600",
        "Package Manager": "from-red-400 to-red-600",
        Database: "from-cyan-400 to-cyan-600",
      };
      return map[status] || "from-gray-400 to-gray-600";
    },
  },
};
</script>

<template>
  <div class="relative overflow-hidden text-white">
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1e1e1e] animate-aurora"
    ></div>

    <section class="container mx-auto px-6 py-16 md:py-24 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-10">
        <div class="relative animate-fade-in-left">
          <div class="relative w-64 h-64 md:w-80 md:h-80 group">
            <img
              src="/img/profile.jpg"
              alt="Profile"
              class="w-full h-full rounded-full object-cover border-4 border-amber-300/70 shadow-[0_0_40px_rgba(251,191,36,0.2)]"
            />
            <div
              class="absolute inset-0 rounded-full border border-transparent animate-spin-gradient [border-image:conic-gradient(#fbbf24_0deg,transparent_180deg,#fbbf24_360deg)_1]"
            ></div>
          </div>
        </div>

        <div class="flex-1 animate-fade-in-right max-w-2xl">
          <h2
            class="text-4xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent mb-6"
          >
            About Me
          </h2>
          <p class="text-gray-300 text-lg leading-relaxed mb-4">
            I’m a
            <span class="text-amber-300 font-medium">Full-stack Developer</span>
            passionate about connecting technology and business. I create
            systems that not only look good but solve real operational problems
            — blending technical efficiency with business logic.
          </p>
          <p class="text-gray-400 italic border-l-2 border-amber-400/40 pl-4">
            "Great software isn't about writing perfect code — it's about
            delivering measurable impact that drives business value."
          </p>

          <div class="flex flex-wrap gap-3 mt-5">
            <span
              class="px-3 py-1 text-xs rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20"
              >Laravel</span
            >
            <span
              class="px-3 py-1 text-xs rounded-full bg-teal-400/10 text-teal-300 border border-teal-400/20"
              >VueJS</span
            >
            <span
              class="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
              >Tailwind CSS</span
            >
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-6 pb-20">
      <div class="text-center mb-12">
        <h2
          class="text-4xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent mb-3"
        >
          Skills & Tools
        </h2>
        <div
          class="w-24 h-1 mx-auto bg-gradient-to-r from-amber-400 to-transparent rounded-full"
        ></div>
      </div>

      <div class="flex justify-center mb-10">
        <button
          @click="activeTab = 1"
          :class="[
            'px-6 py-2 font-semibold rounded-l-lg transition-all duration-300',
            activeTab === 1
              ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-black shadow-lg'
              : 'bg-[#1a1a1a] text-gray-400 hover:text-white',
          ]"
        >
          Tech Stack
        </button>
        <button
          @click="activeTab = 2"
          :class="[
            'px-6 py-2 font-semibold rounded-r-lg transition-all duration-300',
            activeTab === 2
              ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-black shadow-lg'
              : 'bg-[#1a1a1a] text-gray-400 hover:text-white',
          ]"
        >
          Tools
        </button>
      </div>

      <transition name="fade" mode="out-in">
        <div
          :key="activeTab"
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          <div
            v-for="item in activeTab === 1 ? tech : tools"
            :key="item.id"
            class="group relative bg-[#1a1a1a]/70 border border-[#2a2a2a] hover:border-amber-400/40 rounded-xl p-6 text-center hover:scale-[1.05] transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(251,191,36,0.2)]"
          >
            <div class="relative w-16 h-16 mx-auto mb-4">
              <img
                :src="item.imageUrl"
                :alt="item.name"
                class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 class="text-sm font-medium mb-1">{{ item.name }}</h3>
            <div
              class="text-xs px-2 py-1 rounded-full text-white font-mono bg-gradient-to-r"
              :class="getColor(item.status)"
            >
              {{ item.status }}
            </div>
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>

<style scoped>
@keyframes aurora {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.animate-aurora {
  background-size: 200% 200%;
  animation: aurora 10s ease infinite;
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-fade-in-left {
  animation: fadeInLeft 1s ease-out forwards;
}
.animate-fade-in-right {
  animation: fadeInRight 1s ease-out forwards;
}
@keyframes spin-gradient {
  to {
    transform: rotate(360deg);
  }
}
.animate-spin-gradient {
  animation: spin-gradient 12s linear infinite;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
