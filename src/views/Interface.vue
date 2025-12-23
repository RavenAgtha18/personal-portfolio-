<template>
  <main
    class="relative overflow-hidden h-screen flex flex-col items-center justify-center text-center text-white"
  >
    <div
      class="absolute inset-0 -z-10 animate-aurora bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#111827]"
    ></div>
    <div class="absolute inset-0 -z-10 pointer-events-none">
      <div
        v-for="n in 30"
        :key="n"
        class="absolute bg-amber-400/10 rounded-full"
        :style="{
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }"
      ></div>
    </div>
    <div class="relative space-y-6 px-6">
      <p class="text-amber-300/80 text-sm tracking-widest animate-fade-in">
        HELLO WORLD, I'M
      </p>

      <h1
        class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-300 via-teal-300 to-amber-400 bg-clip-text text-transparent animate-fade-up"
      >
        Riki Andi Alfiyanto
      </h1>

      <h2 class="text-xl md:text-2xl text-gray-300 font-light animate-type">
        Bridging <span class="text-amber-400 font-medium">Technology</span> and
        <span class="text-teal-300 font-medium">Business Insight</span>
      </h2>

      <div class="flex flex-wrap justify-center gap-6 mt-10">
        <div
          v-for="metric in metrics"
          :key="metric.id"
          class="bg-[#1a1a1a]/60 backdrop-blur-md border border-amber-400/10 rounded-xl px-6 py-4 w-40 transition-transform hover:scale-105"
        >
          <h3 class="text-amber-300 text-3xl font-bold">{{ metric.value }}</h3>
          <p class="text-xs text-gray-400 mt-1 uppercase tracking-wider">
            {{ metric.label }}
          </p>
        </div>
      </div>
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-8 h-8 text-amber-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "InterfaceView",
  data() {
    return {
      metrics: [
        { id: 1, label: "Tech Impact", value: "90%" },
        { id: 2, label: "Business Insight", value: "85%" },
        { id: 3, label: "Innovation Index", value: "92%" },
      ],
    };
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
  animation: aurora 10s ease-in-out infinite;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeIn 1.5s ease-in forwards;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
.animate-type {
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.08em solid #fbbf24;
  width: 0;
  animation: typing 3s steps(40, end) forwards;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-10px);
    opacity: 1;
  }
}
.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
