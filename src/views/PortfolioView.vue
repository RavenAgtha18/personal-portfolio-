<template>
  <div class="relative overflow-hidden min-h-screen text-white">
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1a1a1a] animate-aurora"
    ></div>

    <section class="pt-28 pb-8 text-center">
      <h1
        class="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent animate-shimmer"
      >
        Riki’s Project Intelligence
      </h1>
      <p class="mt-4 text-gray-400">
        Bridging <span class="text-amber-300">Technology</span> and
        <span class="text-amber-300">Business Insight</span>
      </p>

      <div class="mt-6 flex justify-center gap-4">
        <button
          @click="activeMode = 'portfolio'"
          :class="buttonClass('portfolio')"
        >
          Portfolio View
        </button>
        <button
          @click="activeMode = 'dashboard'"
          :class="buttonClass('dashboard')"
        >
          Analytics Dashboard
        </button>
      </div>
    </section>
    <section
      v-if="activeMode === 'portfolio'"
      class="px-6 md:px-12 py-16 max-w-7xl mx-auto"
    >
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <div
          v-for="item in items"
          :key="item.id"
          class="group bg-[#1a1a1a]/70 border border-[#2a2a2a] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-[0_0_30px_rgba(251,191,36,0.25)] hover:-translate-y-1 reveal"
        >
          <div class="relative h-44 overflow-hidden">
            <img
              :src="'/img/portfolio-' + item.imageUrl + '.png'"
              alt="Project"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3"
            >
              <span class="text-xs text-amber-300 font-mono">{{
                item.tech
              }}</span>
            </div>
          </div>
          <div class="flex flex-col flex-1 px-4 py-4">
            <h3
              class="text-base font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors"
            >
              {{ item.name }}
            </h3>
            <p
              class="text-xs text-gray-400 leading-relaxed line-clamp-3 flex-grow"
            >
              {{ item.status }}
            </p>
            <div class="flex flex-wrap gap-2 mt-3">
              <span
                v-for="(tech, index) in item.tech.split(', ')"
                :key="index"
                class="px-2 py-1 rounded-full text-[11px] font-medium"
                :class="getTechClass(tech)"
              >
                {{ tech.trim() }}
              </span>
            </div>

            <div class="mt-4 flex justify-end gap-2">
              <a
                v-if="item.github !== 'null'"
                :href="item.github"
                target="_blank"
                class="flex items-center gap-1 px-3 py-1 bg-[#282828] hover:bg-[#383838] rounded-md text-xs"
              >
                Code
              </a>
              <a
                v-if="item.demo !== 'null'"
                :href="item.demo"
                target="_blank"
                class="flex items-center gap-1 px-3 py-1 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/30 text-amber-300 rounded-md text-xs transition-all"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      v-else
      class="px-6 md:px-16 py-20 max-w-7xl mx-auto flex flex-col gap-10"
    >
      <div class="grid md:grid-cols-3 gap-6 text-center">
        <div v-for="(card, i) in insights" :key="i" class="insight-card">
          <h3 class="text-sm text-amber-400 mb-1">{{ card.label }}</h3>
          <p class="text-3xl font-bold">{{ card.value }}</p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mt-10">
        <div class="chart-card">
          <h3 class="text-amber-400 mb-3 text-sm">Tech Usage Frequency</h3>
          <canvas ref="techChart"></canvas>
        </div>
        <div class="chart-card">
          <h3 class="text-amber-400 mb-3 text-sm">Project Type Ratio</h3>
          <canvas ref="typeChart"></canvas>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      activeMode: "portfolio",
      items: [
        {
          id: 0,
          name: "Smart Money Intelligence Dashboard",
          imageUrl: "SM",
          status:
            "AI-powered dashboard detecting foreign accumulation (Smart Money) in IDX with real-time signal recommendations.",
          tech: "Python, Streamlit, Gemini 2.5 AI, Firebase",
          github: "https://github.com/RavenAgtha18/Smart-Money-Intelligence",
          demo: "https://huggingface.co/spaces/ravenagtha18/smart-money-tracker",
        },
        {
          id: 1,
          name: "Protrack System",
          imageUrl: "protrack",
          status:
            "Production tracking system for workflow visibility and reporting.",
          tech: "JavaScript, Tailwind, Laravel, Flowbite",
          github: "null",
          demo: "null",
        },
        {
          id: 2,
          name: "Productly",
          imageUrl: "productly",
          status: "Landing page leveraging Bootstrap for responsive UI.",
          tech: "HTML, Bootstrap, JS",
          github: "https://github.com/RavenAgtha18/slicing-productly.git",
          demo: "https://polite-cat-ca7188.netlify.app/",
        },
        {
          id: 3,
          name: "Resto",
          imageUrl: "resto",
          status: "Modern restaurant showcase with clean UI.",
          tech: "HTML, Bootstrap",
          github: "https://github.com/RavenAgtha18/lading-page-resto.git",
          demo: "https://majestic-khapse-51488b.netlify.app/",
        },
        {
          id: 4,
          name: "Market Lite Management Apps",
          imageUrl: "market",
          status: "Retail management app with stock and supplier module.",
          tech: "Laravel 10, Bootstrap",
          github: "https://github.com/RavenAgtha18/store.git",
          demo: "null",
        },
        {
          id: 5,
          name: "Library Management Apps",
          imageUrl: "library",
          status: "Library system featuring catalog and loan transactions.",
          tech: "Laravel 9, Bootstrap, VueJS 3",
          github: "https://github.com/RavenAgtha18/perpustakaaan.gi",
          demo: "null",
        },
        {
          id: 6,
          name: "Webclinic",
          imageUrl: "webclinic",
          status: "Clinic management app for appointments and medication.",
          tech: "Laravel 5, Bootstrap, AngularJs",
          github: "null",
          demo: "null",
        },
        {
          id: 7,
          name: "Product Quality (QC)",
          imageUrl: "qc",
          status: "Factory QC system with automated report generation.",
          tech: "Laravel, JavaScript, Tailwind, Flowbite",
          github: "null",
          demo: "null",
        },
        {
          id: 8,
          name: "FinWise",
          imageUrl: "finwise",
          status: "Personal budgeting app with smart tracking.",
          tech: "Laravel, JavaScript, Tailwind, Flowbite",
          github: "null",
          demo: "null",
        },
        {
          id: 9,
          name: "StokKu",
          imageUrl: "stokku",
          status: "Inventory management with analytics and insights.",
          tech: "Laravel, JavaScript, Tailwind, Flowbite",
          github: "null",
          demo: "null",
        },
      ],
      techChart: null,
      typeChart: null,
    };
  },
  computed: {
    insights() {
      return [
        { label: "Total Projects", value: this.items.length },
        {
          label: "AI Involved Projects",
          value: this.items.filter((i) => i.tech.includes("AI")).length,
        },
        {
          label: "Laravel-based Apps",
          value: this.items.filter((i) => i.tech.includes("Laravel")).length,
        },
      ];
    },
  },
  methods: {
    buttonClass(mode) {
      return [
        "px-6 py-2 rounded-md border transition-all duration-300",
        this.activeMode === mode
          ? "bg-amber-400 text-black border-amber-400"
          : "border-amber-400/30 text-amber-200 hover:bg-amber-400/10",
      ];
    },
    getTechClass(tech) {
      const map = {
        Laravel: "bg-red-500/20 text-red-400",
        Tailwind: "bg-cyan-500/20 text-cyan-400",
        Bootstrap: "bg-purple-500/20 text-purple-400",
        VueJS: "bg-green-500/20 text-green-400",
        Python: "bg-yellow-500/20 text-yellow-400",
        AI: "bg-pink-500/20 text-pink-400",
      };
      for (const key in map) if (tech.includes(key)) return map[key];
      return "bg-amber-500/20 text-amber-400";
    },
    renderCharts() {
      this.$nextTick(() => {
        const techCounts = {};
        this.items.forEach((p) =>
          p.tech
            .split(", ")
            .forEach((t) => (techCounts[t] = (techCounts[t] || 0) + 1))
        );

        const ctxTech = this.$refs.techChart?.getContext("2d");
        const ctxType = this.$refs.typeChart?.getContext("2d");

        if (!ctxTech || !ctxType) return;

        if (this.techChart) this.techChart.destroy();
        if (this.typeChart) this.typeChart.destroy();

        this.techChart = new Chart(ctxTech, {
          type: "bar",
          data: {
            labels: Object.keys(techCounts),
            datasets: [
              {
                label: "Usage Count",
                data: Object.values(techCounts),
                backgroundColor: "#fbbf24",
              },
            ],
          },
          options: { responsive: true, scales: { y: { beginAtZero: true } } },
        });

        const laravelCount = this.items.filter((i) =>
          i.tech.includes("Laravel")
        ).length;
        const aiCount = this.items.filter((i) => i.tech.includes("AI")).length;
        const others = this.items.length - laravelCount - aiCount;

        this.typeChart = new Chart(ctxType, {
          type: "doughnut",
          data: {
            labels: ["Laravel", "AI", "Others"],
            datasets: [
              {
                data: [laravelCount, aiCount, others],
                backgroundColor: ["#f87171", "#fbbf24", "#4b5563"],
              },
            ],
          },
        });
      });
    },
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  },
  watch: {
    activeMode(val) {
      if (val === "dashboard") setTimeout(() => this.renderCharts(), 500);
    },
  },
};
</script>

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
  animation: aurora 14s ease infinite;
}
.animate-shimmer {
  background-size: 200% auto;
  animation: shimmer 5s linear infinite;
}
@keyframes shimmer {
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
}
.insight-card,
.chart-card {
  background: rgba(26, 26, 26, 0.7);
  border-radius: 1rem;
  border: 1px solid rgba(255, 215, 90, 0.1);
  padding: 1.5rem;
  transition: 0.4s;
}
.insight-card:hover {
  box-shadow: 0 0 25px rgba(251, 191, 36, 0.15);
  transform: translateY(-3px);
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
