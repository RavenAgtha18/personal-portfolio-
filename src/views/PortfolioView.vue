<template>
  <div class="relative overflow-hidden min-h-screen">
    <!-- Header Section -->
    <section class="pt-20 pb-8 px-6">
      <div class="max-w-5xl mx-auto text-center">
        <div
          class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono mb-4 border border-zinc-800 bg-zinc-900/40 text-zinc-400"
        >
          <FolderOpen class="w-3.5 h-3.5 text-amber-500" />
          <span>Project Index &amp; Case Studies</span>
        </div>

        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-white">
          Engineering Architecture Portfolio
        </h1>

        <p class="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
          Comprehensive catalog of manufacturing MES integrations, financial applications, and specialized systems.
        </p>

        <!-- View Toggle -->
        <div class="inline-flex p-1 rounded-xl border border-zinc-800 bg-zinc-900/60 text-xs font-mono">
          <button
            @click="activeMode = 'portfolio'"
            class="px-4 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 font-medium"
            :class="activeMode === 'portfolio' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-200'"
          >
            <Grid3x3 class="w-3.5 h-3.5 text-amber-500" />
            Projects View
          </button>
          <button
            @click="activeMode = 'dashboard'"
            class="px-4 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 font-medium"
            :class="activeMode === 'dashboard' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-200'"
          >
            <BarChart3 class="w-3.5 h-3.5 text-amber-500" />
            Architecture Matrix
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
        <div class="flex flex-wrap justify-center gap-1.5 mb-10">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="activeFilter = filter"
            class="px-3 py-1 rounded-lg text-xs font-mono transition-colors border"
            :class="[
              activeFilter === filter
                ? 'bg-zinc-100 text-zinc-950 font-semibold border-zinc-100'
                : 'bg-zinc-900/40 text-zinc-400 border-zinc-800/80 hover:border-zinc-700 hover:text-zinc-200'
            ]"
          >
            {{ filter }}
          </button>
        </div>

        <!-- Projects Grid with 4-Pillar Case Study Architecture -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <CaseStudyCard
            v-for="item in filteredItems"
            :key="item.id"
            :project="item"
          />
        </div>
      </section>

      <!-- Analytics Dashboard View -->
      <section v-else key="dashboard" class="px-6 py-12 max-w-7xl mx-auto">
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
            <div
              class="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity"
            >
              <component :is="insight.icon" class="w-16 h-16 text-amber-400" />
            </div>
            <p class="text-sm text-amber-400 mb-1">{{ insight.label }}</p>
            <p class="text-4xl font-bold text-white">{{ insight.value }}</p>
          </div>
        </div>

        <!-- Charts Grid -->
        <div class="grid md:grid-cols-2 gap-8">
          <div
            class="p-6 rounded-2xl glass relative overflow-hidden"
            data-aos="fade-up"
          >
            <h3
              class="text-amber-400 mb-6 text-sm font-semibold flex items-center gap-2"
            >
              <BarChart3 class="w-4 h-4" />
              Technology Usage
            </h3>

            <div class="space-y-4">
              <div
                v-for="tech in aggregatedTech"
                :key="tech.name"
                class="relative group"
                @mouseenter="hoveredTech = tech.name"
                @mouseleave="hoveredTech = null"
              >
                <div class="flex justify-between items-center mb-1.5">
                  <div class="flex items-center gap-2">
                    <component :is="tech.icon" class="w-4 h-4 text-amber-400" />
                    <span
                      class="text-xs font-semibold text-gray-300 group-hover:text-amber-400 transition-colors"
                      >{{ tech.name }}</span
                    >
                  </div>
                  <span class="text-xs font-mono text-amber-400 font-semibold"
                    >{{ tech.percentage }}%</span
                  >
                </div>

                <!-- Progress Bar -->
                <div
                  class="w-full bg-white/5 h-2.5 rounded-full overflow-hidden border border-white/5 relative"
                >
                  <div
                    class="h-full rounded-full transition-all duration-1000 ease-out"
                    :class="tech.colorClass"
                    :style="{ width: tech.percentage + '%' }"
                  ></div>
                </div>

                <!-- Tooltip -->
                <Transition name="fade">
                  <div
                    v-if="hoveredTech === tech.name"
                    class="absolute left-1/2 -translate-x-1/2 -top-10 bg-amber-500 text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg z-10 whitespace-nowrap animate-fade-in"
                  >
                    {{ tech.name }}: Used in {{ tech.count }}
                    {{ tech.count > 1 ? "Projects" : "Project" }}
                    <div
                      class="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-amber-500"
                    ></div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>

          <div
            class="p-6 rounded-2xl glass relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3
              class="text-amber-400 mb-6 text-sm font-semibold flex items-center gap-2"
            >
              <PieChartIcon class="w-4 h-4" />
              Project Type Distribution
            </h3>

            <!-- CSS Conic-Gradient Donut Ring -->
            <div class="flex justify-center mb-6">
              <div class="relative w-40 h-40">
                <div
                  class="absolute inset-0 rounded-full border-8 border-white/5"
                  :style="{ background: donutGradientStyle }"
                ></div>
                <div
                  class="absolute inset-4 rounded-full bg-[#0a0a0a] flex flex-col items-center justify-center"
                >
                  <span class="text-2xl font-bold text-white font-mono">{{
                    items.length
                  }}</span>
                  <span
                    class="text-[10px] text-gray-400 uppercase tracking-wider"
                    >Projects</span
                  >
                </div>
              </div>
            </div>

            <!-- Sleek Segmented Progress Bar -->
            <div
              class="w-full h-3 rounded-full overflow-hidden flex mb-6 border border-white/5 bg-white/5"
            >
              <div
                v-for="cat in projectTypeDistribution"
                :key="cat.name"
                class="h-full transition-all duration-500 hover:opacity-80 cursor-pointer relative"
                :class="cat.color"
                :style="{ width: cat.percentage + '%' }"
                @mouseenter="hoveredCat = cat.name"
                @mouseleave="hoveredCat = null"
              >
                <!-- Tooltip on Segment -->
                <Transition name="fade">
                  <div
                    v-if="hoveredCat === cat.name"
                    class="absolute left-1/2 -translate-x-1/2 -top-10 bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg z-10 whitespace-nowrap"
                  >
                    {{ cat.name }}: {{ cat.percentage }}%
                  </div>
                </Transition>
              </div>
            </div>

            <!-- Category Cards Grid -->
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="cat in projectTypeDistribution"
                :key="cat.name"
                class="p-3.5 rounded-xl border transition-all duration-300 relative group overflow-hidden"
                :class="[
                  cat.bgColor,
                  hoveredCatCard === cat.name ? 'scale-[1.02] shadow-lg' : '',
                ]"
                @mouseenter="hoveredCatCard = cat.name"
                @mouseleave="hoveredCatCard = null"
              >
                <div class="flex items-center justify-between mb-2">
                  <component
                    :is="cat.icon"
                    class="w-5 h-5"
                    :class="cat.textColor"
                  />
                  <span class="text-lg font-bold text-white font-mono"
                    >{{ cat.percentage }}%</span
                  >
                </div>
                <h4
                  class="text-xs font-semibold text-gray-300 leading-tight group-hover:text-white transition-colors mb-1"
                >
                  {{ cat.name }}
                </h4>
                <p class="text-[10px] text-gray-500 font-mono">
                  {{ cat.count }} {{ cat.count > 1 ? "Projects" : "Project" }}
                </p>

                <!-- Expanded Hover Panel (Shows project names in that category) -->
                <Transition name="fade">
                  <div
                    v-if="hoveredCatCard === cat.name"
                    class="absolute inset-0 bg-black/95 p-3 flex flex-col justify-center"
                  >
                    <span
                      class="text-[9px] uppercase tracking-wider text-amber-400 font-bold mb-1"
                      >Projects:</span
                    >
                    <ul class="space-y-0.5">
                      <li
                        v-for="proj in items
                          .filter(
                            (i) =>
                              (i.category ||
                                'Full-stack Manufacturing Systems') ===
                              cat.name,
                          )
                          .slice(0, 4)"
                        :key="proj.id"
                        class="text-[10px] text-gray-300 truncate"
                      >
                        • {{ proj.name }}
                      </li>
                      <li
                        v-if="
                          items.filter(
                            (i) =>
                              (i.category ||
                                'Full-stack Manufacturing Systems') ===
                              cat.name,
                          ).length > 4
                        "
                        class="text-[9px] text-gray-500 font-mono"
                      >
                        +{{
                          items.filter(
                            (i) =>
                              (i.category ||
                                "Full-stack Manufacturing Systems") ===
                              cat.name,
                          ).length - 4
                        }}
                        more
                      </li>
                    </ul>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>

        <!-- Architecture Decision Matrix -->
        <div
          class="mt-8 p-6 rounded-2xl glass relative overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3
            class="text-amber-400 mb-6 text-sm font-semibold flex items-center gap-2"
          >
            <Grid3x3 class="w-4 h-4" />
            Architecture Decision Matrix
          </h3>
          <p class="text-[11px] text-gray-500 mb-4">
            Technology × Domain cross-reference — showing stack decisions across enterprise verticals
          </p>

          <!-- Matrix Table -->
          <div class="overflow-x-auto -mx-2 px-2">
            <table class="w-full text-xs">
              <thead>
                <tr class="border-b border-white/10">
                  <th class="text-left py-2.5 px-3 text-gray-400 font-semibold">Technology</th>
                  <th
                    v-for="domain in architectureMatrix.domains"
                    :key="domain.name"
                    class="text-center py-2.5 px-3 font-semibold"
                    :class="domain.headerClass"
                  >
                    {{ domain.name }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="row in architectureMatrix.matrix"
                  :key="row.tech"
                  class="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td class="py-2.5 px-3 text-gray-300 font-medium">{{ row.tech }}</td>
                  <td
                    v-for="cell in row.domains"
                    :key="cell.name"
                    class="text-center py-2.5 px-3 relative"
                    @mouseenter="hoveredMatrixCell = `${row.tech}-${cell.name}`"
                    @mouseleave="hoveredMatrixCell = null"
                  >
                    <span
                      v-if="cell.count > 0"
                      class="inline-flex items-center justify-center w-7 h-7 rounded-lg text-[11px] font-bold transition-all duration-300 cursor-default"
                      :class="[
                        hoveredMatrixCell === `${row.tech}-${cell.name}`
                          ? cell.hoverClass
                          : cell.baseClass,
                      ]"
                    >
                      {{ cell.count }}
                    </span>
                    <span v-else class="text-gray-700">—</span>

                    <!-- Tooltip -->
                    <Transition name="fade">
                      <div
                        v-if="hoveredMatrixCell === `${row.tech}-${cell.name}` && cell.count > 0"
                        class="absolute left-1/2 -translate-x-1/2 -top-8 bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg z-10 whitespace-nowrap"
                      >
                        {{ row.tech }} in {{ cell.name }}: {{ cell.count }} {{ cell.count > 1 ? 'projects' : 'project' }}
                        <div
                          class="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white"
                        ></div>
                      </div>
                    </Transition>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  FolderOpen,
  Grid3x3,
  BarChart3,
  PieChart as PieChartIcon,
  Layers,
  Cpu,
  BookOpen,
  Terminal,
  Braces,
  Database,
  Wind,
  Box,
  Sparkles,
  Factory,
} from "lucide-vue-next";
import { projects } from "@/data/projects.js";
import CaseStudyCard from "@/components/CaseStudyCard.vue";

const activeMode = ref("portfolio");
const activeFilter = ref("All");

const filters = ["All", "Laravel", "Vue.js", "Python", "Tailwind"];

const items = projects;

const filteredItems = computed(() => {
  if (activeFilter.value === "All") return items;
  return items.filter((item) =>
    item.tech.toLowerCase().includes(activeFilter.value.toLowerCase()),
  );
});

const insights = computed(() => [
  { label: "Total Projects", value: items.length, icon: Layers },
  {
    label: "Case Studies",
    value: items.filter((i) => i.isCaseStudy).length,
    icon: BookOpen,
  },
  {
    label: "Manufacturing Domain",
    value: items.filter((i) => i.category === "Full-stack Manufacturing Systems").length,
    icon: Factory,
  },
]);


const hoveredTech = ref(null);
const hoveredCat = ref(null);
const hoveredCatCard = ref(null);
const hoveredMatrixCell = ref(null);

const aggregatedTech = computed(() => {
  const techMap = {
    Laravel: {
      count: 0,
      icon: Layers,
      colorClass: "bg-gradient-to-r from-red-500 to-orange-500",
    },
    "Vue.js": {
      count: 0,
      icon: Layers,
      colorClass: "bg-gradient-to-r from-green-400 to-emerald-500",
    },
    Tailwind: {
      count: 0,
      icon: Wind,
      colorClass: "bg-gradient-to-r from-cyan-400 to-blue-500",
    },
    JavaScript: {
      count: 0,
      icon: Braces,
      colorClass: "bg-gradient-to-r from-amber-400 to-yellow-500",
    },
    Bootstrap: {
      count: 0,
      icon: Grid3x3,
      colorClass: "bg-gradient-to-r from-purple-500 to-indigo-500",
    },
    Python: {
      count: 0,
      icon: Terminal,
      colorClass: "bg-gradient-to-r from-blue-500 to-indigo-500",
    },
    MySQL: {
      count: 0,
      icon: Database,
      colorClass: "bg-gradient-to-r from-sky-400 to-blue-600",
    },
    Firebase: {
      count: 0,
      icon: Database,
      colorClass: "bg-gradient-to-r from-orange-400 to-red-500",
    },
    "Gemini AI": {
      count: 0,
      icon: Sparkles,
      colorClass: "bg-gradient-to-r from-pink-400 to-rose-500",
    },
    Flowbite: {
      count: 0,
      icon: Box,
      colorClass: "bg-gradient-to-r from-cyan-500 to-indigo-500",
    },
  };

  items.forEach((item) => {
    const techString = item.tech.toLowerCase();
    if (techString.includes("laravel")) techMap["Laravel"].count++;
    if (techString.includes("vue")) techMap["Vue.js"].count++;
    if (techString.includes("tailwind")) techMap["Tailwind"].count++;
    if (
      techString.includes("javascript") ||
      techString.includes("js") ||
      techString.includes("angularjs")
    ) {
      techMap["JavaScript"].count++;
    }
    if (techString.includes("mysql")) techMap["MySQL"].count++;
    if (techString.includes("bootstrap")) techMap["Bootstrap"].count++;
    if (techString.includes("python")) techMap["Python"].count++;
    if (techString.includes("firebase")) techMap["Firebase"].count++;
    if (techString.includes("gemini")) techMap["Gemini AI"].count++;
    if (techString.includes("flowbite")) techMap["Flowbite"].count++;
  });

  const total = items.length;

  return Object.entries(techMap)
    .map(([name, data]) => ({
      name,
      count: data.count,
      percentage: total > 0 ? Math.round((data.count / total) * 100) : 0,
      icon: data.icon,
      colorClass: data.colorClass,
    }))
    .sort((a, b) => b.count - a.count);
});

const projectTypeDistribution = computed(() => {
  const categories = {
    "Full-stack Manufacturing Systems": {
      count: 0,
      color: "bg-gradient-to-r from-amber-400 to-amber-600",
      textColor: "text-amber-400",
      bgColor: "bg-amber-500/10 border-amber-500/20 hover:border-amber-500/40",
      icon: Layers,
      hexColor: "#f59e0b",
    },
    "FinTech Intelligence": {
      count: 0,
      color: "bg-gradient-to-r from-emerald-400 to-emerald-600",
      textColor: "text-emerald-400",
      bgColor:
        "bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/40",
      icon: Cpu,
      hexColor: "#34d399",
    },
    "Localization Engineering": {
      count: 0,
      color: "bg-gradient-to-r from-indigo-400 to-indigo-600",
      textColor: "text-indigo-400",
      bgColor:
        "bg-indigo-500/10 border-indigo-500/20 hover:border-indigo-500/40",
      icon: Sparkles,
      hexColor: "#818cf8",
    },
    "Scripting/Automation": {
      count: 0,
      color: "bg-gradient-to-r from-purple-400 to-purple-600",
      textColor: "text-purple-400",
      bgColor:
        "bg-purple-500/10 border-purple-500/20 hover:border-purple-500/40",
      icon: Terminal,
      hexColor: "#a78bfa",
    },
  };

  items.forEach((item) => {
    const cat = item.category || "Full-stack Manufacturing Systems";
    if (categories[cat]) {
      categories[cat].count++;
    }
  });

  const total = items.length;
  return Object.entries(categories).map(([name, data]) => ({
    name,
    count: data.count,
    percentage: total > 0 ? Math.round((data.count / total) * 100) : 0,
    color: data.color,
    textColor: data.textColor,
    bgColor: data.bgColor,
    icon: data.icon,
    hexColor: data.hexColor,
  }));
});

// Architecture Decision Matrix — shows tech × domain cross-reference
const architectureMatrix = computed(() => {
  const techs = ["Laravel", "Vue.js", "MySQL", "Tailwind", "JavaScript", "Python"];
  const domainConfigs = [
    {
      name: "Manufacturing",
      key: "Full-stack Manufacturing Systems",
      headerClass: "text-amber-400",
      baseClass: "bg-amber-500/15 text-amber-400",
      hoverClass: "bg-amber-500/30 text-amber-300 scale-110 shadow-lg",
    },
    {
      name: "FinTech",
      key: "FinTech Intelligence",
      headerClass: "text-emerald-400",
      baseClass: "bg-emerald-500/15 text-emerald-400",
      hoverClass: "bg-emerald-500/30 text-emerald-300 scale-110 shadow-lg",
    },
    {
      name: "Localization",
      key: "Localization Engineering",
      headerClass: "text-indigo-400",
      baseClass: "bg-indigo-500/15 text-indigo-400",
      hoverClass: "bg-indigo-500/30 text-indigo-300 scale-110 shadow-lg",
    },
    {
      name: "Scripting",
      key: "Scripting/Automation",
      headerClass: "text-purple-400",
      baseClass: "bg-purple-500/15 text-purple-400",
      hoverClass: "bg-purple-500/30 text-purple-300 scale-110 shadow-lg",
    },
  ];

  const matrix = techs.map((tech) => {
    const row = { tech, domains: [] };
    domainConfigs.forEach((domain) => {
      const count = items.filter((item) => {
        const cat = item.category || "Full-stack Manufacturing Systems";
        const techLower = item.tech.toLowerCase();
        const hasTech = techLower.includes(tech.toLowerCase())
          || (tech === "Vue.js" && techLower.includes("vue"))
          || (tech === "JavaScript" && (techLower.includes("js") || techLower.includes("javascript")));
        return cat === domain.key && hasTech;
      }).length;
      row.domains.push({
        name: domain.name,
        count,
        baseClass: domain.baseClass,
        hoverClass: domain.hoverClass,
      });
    });
    return row;
  });

  return { techs, domains: domainConfigs, matrix };
});

const donutGradientStyle = computed(() => {
  const dist = projectTypeDistribution.value;
  let accumulated = 0;
  const stops = [];

  dist.forEach((cat) => {
    const start = accumulated;
    const end = accumulated + cat.percentage;
    stops.push(`${cat.hexColor} ${start}% ${end}%`);
    accumulated = end;
  });

  // Fill remaining if rounding causes < 100%
  if (accumulated < 100) {
    stops.push(`rgba(255,255,255,0.05) ${accumulated}% 100%`);
  }

  return `conic-gradient(${stops.join(", ")})`;
});
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
