<script>
export default {
  data() {
    return {
      activeTab: 1,
      items: [
        {
          id: 1,
          name: "Protrack System",
          imageUrl: "protrack",
          status: "Product tracking system.",
          tech: "JavaScript, Tailwind, Laravel, flowbite",
          github: "https://github.com/RavenAgtha18/personal-portfolio-.git",
          demo: "",
        },
        {
          id: 2,
          name: "productly",
          imageUrl: "productly",
          status:
            " landing page leverages the power of Bootstrap JS as its front-end framework, ensuring a responsive and visually appealing design.",
          tech: "Html, Bootstrap, js",
          github: "https://github.com/RavenAgtha18/slicing-productly.git",
          demo: "https://polite-cat-ca7188.netlify.app/",
        },
        {
          id: 3,
          name: "Resto",
          imageUrl: "resto",
          status:
            "A Showcase of Culinary Excellence with Bootstrap-Powered Landing Page. Immerse yourself in the world of cutting-edge web technology as we present our culinary haven.",
          tech: "HTML, Bootstrap",
          github: "https://github.com/RavenAgtha18/lading-page-resto.git",
          demo: "https://majestic-khapse-51488b.netlify.app/",
        },
        {
          id: 4,
          name: "Market Lite Management Apss",
          imageUrl: "market",
          status:
            "A web-based retail management application with seamless integration of product, stock, category, member, employee, supplier, and purchase/sales transactions",
          tech: "Laravel 10, Bootstrap",
          github: "https://github.com/RavenAgtha18/store.git",
          demo: "null",
        },
        {
          id: 5,
          name: "Library Management Apps",
          imageUrl: "library",
          status:
            "A web-based application with an integrated library management system that includes books, stock, catalog, members, publishers, authors, and loan transactions.",
          tech: "Laravel 9, Bootstrap, VueJS 3",
          github: "https://github.com/RavenAgtha18/perpustakaaan.gi",
          demo: "null",
        },
        {
          id: 6,
          name: "Webclinic",
          imageUrl: "webclinic",
          status:
            "A web-based application specifically designed to cater to the needs of clinics. This application is primarily used for managing patient data, scheduling, medication inventory, and various other business processes.",
          tech: "Laravel 5, Bootstrap, AngularJs",
          github: "null",
          demo: "null",
        },
        {
          id: 7,
          name: "Product Quality (QC)",
          imageUrl: "qc",
          status:
            "Application that can be used for inspecting all  production in the factory.",
          tech: "Laravel, javascript, Tailwind, flowbite",
          github: "null",
          demo: "null",
        },
        {
          id: 8,
          name: "FinWise",
          imageUrl: "finwise",
          status:
            "FinWise is a name I created for a budgeting app. It combines the words Finance and Wise, conveying the idea of managing finances smartly and strategically. The name reflects an app designed to help users handle their finances intelligently.",
          tech: "Laravel, javascript, Tailwind, flowbite",
          github: "null",
          demo: "null",
        },
        {
          id: 9,
          name: "StokKu",
          imageUrl: "stokku",
          status:
            "Stokku is an innovative inventory management solution designed to simplify the tracking, managing, and optimization of stock items with enhanced efficiency. By streamlining the inventory process, Stokku empowers businesses to maintain a seamless flow of goods, minimizing waste and maximizing productivity.",
          tech: "Laravel, javascript, Tailwind, flowbite",
          github: "null",
          demo: "null",
        },
      ],
    };
  },
  methods: {
    getTechClass(tech) {
      if (tech.includes("Laravel")) return "bg-red-500/20 text-red-400";
      if (tech.includes("Tailwind")) return "bg-cyan-500/20 text-cyan-400";
      if (tech.includes("Bootstrap")) return "bg-purple-500/20 text-purple-400";
      if (tech.includes("VueJS")) return "bg-green-500/20 text-green-400";
      return "bg-amber-500/20 text-amber-400";
    },
  },
};
</script>
<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col"
        >
          <h4
            class="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent"
          >
            Past Project Experience
          </h4>
          <h4
            class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300"
          >
            Explore the projects I've worked on so far
          </h4>
        </div>
      </header>

      <section>
        <div
          class="grid grid-cols-1 gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3 xl:gap-6"
        >
          <div v-for="item in items" :key="item.id" class="group relative">
            <div
              class="item-card flex flex-col h-full gap-3 bg-[#1e1e1f] hover:bg-[#252526] border border-[#383838] rounded-xl text-amber-50 p-5 transition-all duration-300"
            >
              <!-- Project Image with Hover Effect -->
              <div class="relative overflow-hidden rounded-lg mb-3 h-40">
                <img
                  alt="Project Image"
                  loading="lazy"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  :src="'/img/portfolio-' + item.imageUrl + '.png'"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                >
                  <span class="text-xs font-mono text-amber-200">{{
                    item.tech
                  }}</span>
                </div>
              </div>

              <!-- Project Content -->
              <div class="flex flex-col flex-grow gap-3">
                <h3
                  class="text-xl font-semibold text-white group-hover:text-amber-300 transition-colors"
                >
                  {{ item.name }}
                </h3>

                <div
                  class="text-xs text-[#c1c1c1] line-clamp-3 leading-relaxed"
                >
                  {{ item.status }}
                </div>

                <!-- Tech Tags -->
                <div class="mt-2 flex flex-wrap gap-2">
                  <span
                    v-for="(tech, index) in item.tech.split(', ')"
                    :key="index"
                    class="px-2 py-1 rounded-full text-xs"
                    :class="getTechClass(tech)"
                  >
                    {{ tech.trim() }}
                  </span>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="mt-4 flex justify-end space-x-3">
                <a
                  v-if="item.github !== 'null'"
                  :href="item.github"
                  target="_blank"
                  class="flex items-center gap-1 px-3 py-1 rounded-md bg-[#383838] hover:bg-[#484848] text-xs transition-all"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    ></path>
                  </svg>
                  Code
                </a>
                <a
                  v-if="item.demo !== 'null'"
                  :href="item.demo"
                  target="_blank"
                  class="flex items-center gap-1 px-3 py-1 rounded-md bg-amber-600/20 hover:bg-amber-600/30 text-amber-400 text-xs transition-all border border-amber-600/30"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                  Live Demo
                </a>
                <div
                  v-if="item.demo === 'null' && item.github === 'null'"
                  class="text-xs text-gray-500 italic"
                >
                  Private project
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style>
.item-card {
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  border-color: #4b4b4b;
}

.text-status::-webkit-scrollbar {
  width: 4px;
}
.text-status::-webkit-scrollbar-thumb {
  background: #ffdb70;
  border-radius: 10px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadein-bot {
  animation: fadeIn 0.6s ease-out forwards;
}

.grid > div {
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: calc(var(--order) * 0.1s);
}

.group:hover .title-text {
  color: #fbbf24;
}

@media (max-width: 640px) {
  .px-5 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
