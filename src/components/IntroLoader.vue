<template>
  <transition name="fade">
    <div
      v-if="show"
      class="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#101010] text-white z-[9999]"
    >
      <div
        class="relative w-28 h-28 md:w-40 md:h-40 flex items-center justify-center mb-6"
      >
        <div
          class="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400 via-teal-300 to-amber-200 blur-2xl opacity-40 animate-pulse-slow"
        ></div>
        <div
          class="absolute inset-1 rounded-full border-2 border-amber-400/40 animate-spin-slow"
          style="border-top-color: transparent; border-left-color: transparent"
        ></div>
        <div
          class="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-amber-400 to-teal-400 shadow-[0_0_25px_rgba(251,191,36,0.4)] animate-pulse-soft"
        ></div>
      </div>

      <h1
        class="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-amber-300 via-teal-300 to-amber-400 bg-clip-text text-transparent animate-fade-up"
      >
        Riki Andi Alfiyanto
      </h1>

      <h2 class="text-sm md:text-lg text-gray-400 mt-3 typewriter">
        Bridging Technology & Business Insight
      </h2>

      <div class="flex space-x-1 mt-6">
        <span
          v-for="n in 3"
          :key="n"
          class="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
          :style="{ animationDelay: `${n * 0.2}s` }"
        ></span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "IntroLoader",
  data() {
    return { show: true };
  },
  mounted() {
    setTimeout(() => {
      this.show = false;
    }, 3200);
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes pulse-soft {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.15;
  }
  50% {
    opacity: 0.4;
  }
}
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-pulse-soft {
  animation: pulse-soft 2s ease-in-out infinite;
}
.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}
.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}
.animate-fade-up {
  animation: fadeUp 1s ease forwards;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.08em solid #fbbf24;
  width: 0;
  animation: typing 2s steps(40, end) forwards;
}
</style>
