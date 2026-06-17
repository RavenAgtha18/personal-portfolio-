<template>
  <main class="relative min-h-screen overflow-hidden">
    <!-- Animated Background Canvas -->
    <canvas
      ref="particleCanvas"
      class="fixed inset-0 -z-10 opacity-40"
    ></canvas>

    <!-- Gradient Orbs -->
    <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-500/20 to-transparent blur-3xl animate-blob"
      ></div>
      <div
        class="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-600/10 to-transparent blur-3xl animate-blob animation-delay-1000"
      ></div>
      <div
        class="absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-amber-400/10 to-transparent blur-3xl animate-blob animation-delay-500"
      ></div>
    </div>

    <!-- Hero Content -->
    <section
      class="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 py-20"
    >
      <div class="max-w-4xl mx-auto text-center">
        <!-- Greeting Badge -->
        <div
          ref="greetingRef"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8 opacity-0"
        >
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span class="text-sm text-amber-300 font-medium"
            >Bridge SE &amp; Technical Business Analyst</span
          >
        </div>

        <!-- Main Heading -->
        <h1 ref="headingRef" class="overflow-hidden">
          <span
            class="block text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
          >
            <span ref="line1" class="block opacity-0 translate-y-10"
              >Hi, I'm</span
            >
            <span
              ref="line2"
              class="block gradient-text opacity-0 translate-y-10"
            >
              Riki Andi Alfiyanto
            </span>
          </span>
        </h1>

        <!-- Subtitle with Typewriter -->
        <div ref="subtitleRef" class="mt-6 opacity-0">
          <p class="text-lg sm:text-xl text-gray-400 mb-4">
            High-Caliber Bridge SE &amp; Technical Business Analyst —
            <br class="hidden sm:inline" />
            Architecting End-to-End Industrial Automation Across
            <br class="hidden sm:inline" />
            Japanese Manufacturing Standards &amp; Cross-Cultural Delivery
          </p>
          <div
            class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl glass-amber"
          >
            <Code2 class="w-5 h-5 text-amber-400" />
            <span class="text-amber-200 font-mono text-sm sm:text-base">
              {{ displayedText }}<span class="animate-pulse">|</span>
            </span>
          </div>
        </div>

        <!-- Profile Image -->
        <div
          ref="imageRef"
          class="relative mt-12 mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 opacity-0"
        >
          <!-- Rotating Ring -->
          <div
            class="absolute -inset-4 rounded-full border border-amber-500/20 animate-spin-slow"
          ></div>
          <div
            class="absolute -inset-8 rounded-full border border-amber-500/10 animate-spin-slow"
            style="animation-direction: reverse"
          ></div>

          <!-- Glow Effect -->
          <div
            class="absolute inset-0 rounded-full bg-amber-500/20 blur-2xl animate-pulse-glow"
          ></div>

          <!-- Image -->
          <div
            ref="tiltRef"
            class="relative w-full h-full rounded-full overflow-hidden border-4 border-amber-400/50 shadow-2xl"
            @mousemove="handleTilt"
            @mouseleave="resetTilt"
          >
            <img
              src="/img/profile.jpg"
              alt="Riki Andi Alfiyanto"
              class="w-full h-full object-cover transition-transform duration-300"
              :style="tiltStyle"
            />
          </div>

          <!-- Floating Badges -->
          <div
            class="absolute -right-4 top-4 px-3 py-1.5 rounded-lg glass text-xs font-medium text-amber-300 animate-float"
          >
            <Sparkles class="w-3 h-3 inline mr-1" />
            Vue.js
          </div>
          <div
            class="absolute -left-4 bottom-8 px-3 py-1.5 rounded-lg glass text-xs font-medium text-amber-300 animate-float animation-delay-300"
          >
            <Sparkles class="w-3 h-3 inline mr-1" />
            Laravel
          </div>
        </div>

        <!-- CTA Buttons -->
        <div
          ref="ctaRef"
          class="flex flex-wrap justify-center gap-4 mt-12 opacity-0"
        >
          <a
            href="https://wa.me/6285175180821"
            target="_blank"
            class="group btn-primary flex items-center gap-2"
          >
            <MessageCircle class="w-5 h-5 group-hover:animate-wiggle" />
            <span>Contact Me</span>
          </a>
          <a
            href="/cv_rikiandi.pdf"
            target="_blank"
            class="btn-secondary flex items-center gap-2"
          >
            <FileText class="w-5 h-5" />
            <span>View Resume</span>
          </a>
          <router-link
            to="/portfolio"
            class="btn-secondary flex items-center gap-2"
          >
            <FolderOpen class="w-5 h-5" />
            <span>See Projects</span>
          </router-link>
        </div>

        <!-- Stats -->
        <div
          ref="statsRef"
          class="grid grid-cols-3 gap-4 sm:gap-8 mt-16 max-w-lg mx-auto opacity-0"
        >
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="text-center p-4 rounded-2xl glass hover:glass-amber transition-all duration-300 hover:-translate-y-1"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <div class="text-2xl sm:text-3xl font-bold gradient-text">
              {{ stat.value }}
            </div>
            <div class="text-xs sm:text-sm text-gray-400 mt-1">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        ref="scrollIndicatorRef"
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
      >
        <span class="text-xs text-gray-500 uppercase tracking-widest"
          >Scroll to explore</span
        >
        <ChevronDown class="w-5 h-5 text-amber-400 animate-bounce-soft" />
      </div>
    </section>

    <!-- Featured Projects Preview -->
    <section class="relative z-10 py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">
            <span class="gradient-text">Enterprise Case Studies</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            End-to-end manufacturing &amp; fintech systems delivered as Bridge
            SE — from business requirements to production deployment
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(project, index) in featuredProjects"
            :key="project.id"
            class="group relative rounded-2xl overflow-hidden glass card-hover cursor-pointer"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
          >
            <div class="aspect-video overflow-hidden">
              <img
                :src="`/img/portfolio-${project.imageUrl}.png`"
                :alt="project.name"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
            >
              <h3 class="text-lg font-semibold text-white mb-2">
                {{ project.name }}
              </h3>
              <p class="text-sm text-gray-300 line-clamp-2">
                {{ project.status }}
              </p>
              <!-- Tags -->
              <div v-if="project.tags" class="flex flex-wrap gap-1 mt-2">
                <span
                  v-for="tag in project.tags.slice(0, 4)"
                  :key="tag"
                  class="px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="flex gap-2 mt-3">
                <router-link
                  v-if="project.isCaseStudy"
                  :to="project.demo"
                  class="px-3 py-1.5 rounded-lg bg-amber-500 text-black text-xs font-semibold hover:bg-amber-400 transition-colors"
                >
                  Read Full Case Study
                </router-link>
                <a
                  v-else-if="project.demo !== 'null'"
                  :href="project.demo"
                  target="_blank"
                  class="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-medium hover:bg-amber-500/30 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  v-if="project.github !== 'null'"
                  :href="project.github"
                  target="_blank"
                  class="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-colors"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-10" data-aos="fade-up">
          <router-link
            to="/portfolio"
            class="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import {
  Code2,
  MessageCircle,
  FileText,
  FolderOpen,
  Sparkles,
  ChevronDown,
  ArrowRight,
} from "lucide-vue-next";

// Refs
const particleCanvas = ref(null);
const greetingRef = ref(null);
const line1 = ref(null);
const line2 = ref(null);
const subtitleRef = ref(null);
const imageRef = ref(null);
const tiltRef = ref(null);
const ctaRef = ref(null);
const statsRef = ref(null);
const scrollIndicatorRef = ref(null);

// Typewriter
const texts = [
  "Architecting enterprise MES & ERP systems...",
  "Bridging Japanese IT standards with execution...",
  "Designing cross-cultural data pipelines...",
  "Delivering zero-defect industrial automation...",
  "Translating business specs into SQL schemas...",
];
const displayedText = ref("");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterTimeout = null;

// 3D Tilt
const tiltX = ref(0);
const tiltY = ref(0);
const tiltStyle = computed(() => ({
  transform: `rotateX(${tiltX.value}deg) rotateY(${tiltY.value}deg) scale(1.05)`,
}));

// Stats
const stats = [
  { value: "10+", label: "Enterprise Systems" },
  { value: "2+", label: "Years Bridge SE" },
  { value: "5+", label: "Manufacturing Clients" },
];

// Featured Projects — imported from SSOT data module
import { projects } from "@/data/projects.js";
const featuredProjects = projects.filter((p) => p.isCaseStudy);

// Particle Animation
let animationId = null;
const initParticles = () => {
  const canvas = particleCanvas.value;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = 80;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
    });
  }

  const draw = () => {
    ctx.clearRect(0, 0, w, h);

    // Draw connections
    ctx.strokeStyle = "rgba(251, 191, 36, 0.05)";
    ctx.lineWidth = 1;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    particles.forEach((p) => {
      ctx.fillStyle = "rgba(251, 191, 36, 0.4)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > w) p.dx *= -1;
      if (p.y < 0 || p.y > h) p.dy *= -1;
    });

    animationId = requestAnimationFrame(draw);
  };

  draw();

  const handleResize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };

  window.addEventListener("resize", handleResize);
};

// Typewriter
const typewriter = () => {
  const current = texts[textIndex];

  if (isDeleting) {
    displayedText.value = current.substring(0, charIndex--);
  } else {
    displayedText.value = current.substring(0, charIndex++);
  }

  let speed = isDeleting ? 30 : 70;

  if (!isDeleting && displayedText.value === current) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && displayedText.value === "") {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    speed = 500;
  }

  typewriterTimeout = setTimeout(typewriter, speed);
};

// 3D Tilt Effect
const handleTilt = (e) => {
  const el = tiltRef.value;
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  tiltX.value = (y - centerY) / 10;
  tiltY.value = (centerX - x) / 10;
};

const resetTilt = () => {
  tiltX.value = 0;
  tiltY.value = 0;
};

// GSAP Animations
const initGSAPAnimations = () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.to(greetingRef.value, { opacity: 1, y: 0, duration: 0.6 })
    .to(line1.value, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
    .to(line2.value, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
    .to(subtitleRef.value, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
    .to(imageRef.value, { opacity: 1, scale: 1, duration: 0.8 }, "-=0.3")
    .to(ctaRef.value, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
    .to(statsRef.value, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
    .to(scrollIndicatorRef.value, { opacity: 1, duration: 0.6 }, "-=0.2");
};

onMounted(() => {
  initParticles();
  typewriter();

  // Delay GSAP animations slightly
  setTimeout(() => {
    initGSAPAnimations();
  }, 100);
});

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId);
  if (typewriterTimeout) clearTimeout(typewriterTimeout);
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
