<template>
  <div class="relative font-inter text-white bg-[#0a0a0a] overflow-x-hidden">
    <nav
      :class="[
        'fixed top-0 w-full z-50 transition-all duration-700 backdrop-blur-lg border-b border-[#2a2a2a]',
        isScrolled ? 'bg-[#121212]/80' : 'bg-transparent',
      ]"
    >
      <div
        class="max-w-7xl mx-auto flex justify-between items-center px-6 py-4"
      >
        <router-link
          to="/"
          class="text-amber-400 font-semibold text-lg hover:text-amber-200 transition"
        >
          Riki Andi Alfiyanto
        </router-link>

        <div class="flex gap-6 text-sm">
          <router-link
            to="/"
            class="hover:text-amber-300"
            active-class="text-amber-400 border-b border-amber-400"
            >Home</router-link
          >
          <router-link
            to="/about"
            class="hover:text-amber-300"
            active-class="text-amber-400 border-b border-amber-400"
            >About</router-link
          >
          <router-link
            to="/portfolio"
            class="hover:text-amber-300"
            active-class="text-amber-400 border-b border-amber-400"
            >Projects</router-link
          >
        </div>
      </div>
    </nav>
    <div class="pt-24">
      <transition name="page" mode="out-in">
        <router-view />
      </transition>
    </div>

    <footer
      class="py-10 border-t border-[#2a2a2a] text-center bg-[#0a0a0a] text-gray-400"
    >
      <h3 class="text-amber-300 mb-3 text-sm uppercase tracking-widest">
        Let's Connect
      </h3>

      <div class="flex justify-center gap-6 mb-4">
        <a
          href="https://www.linkedin.com/in/riki-andi-alfiyanto/"
          target="_blank"
          class="hover:text-amber-300 transition"
        >
          <i class="fab fa-linkedin text-2xl"></i>
        </a>
        <a
          href="https://github.com/RavenAgtha18"
          target="_blank"
          class="hover:text-amber-300 transition"
        >
          <i class="fab fa-github text-2xl"></i>
        </a>
        <a
          href="https://wa.me/6285175180821"
          target="_blank"
          class="hover:text-amber-300 transition"
        >
          <i class="fab fa-whatsapp text-2xl"></i>
        </a>
      </div>

      <p class="text-xs text-gray-500">
        © 2025 Riki Andi Alfiyanto — Built with Vue & TailwindCSS
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return { isScrolled: false };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
  },
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.page-enter-from {
  opacity: 0;
  transform: translateY(50px) scale(0.98);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-40px) scale(0.98);
}
</style>
