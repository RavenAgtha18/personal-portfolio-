<template>
  <section
    ref="sectionRef"
    class="relative w-full select-none"
    style="height: 480vh;"
  >
    <!-- Sticky Full-Screen Viewport -->
    <div
      class="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between transition-colors duration-500 bg-[#06080e]"
      @mousemove="handleMouseMove"
    >
      <!-- Background Living Cinematic Canvas (60fps Ken Burns & Interactive Fluid Flow) -->
      <canvas
        ref="canvasRef"
        class="absolute inset-0 w-full h-full z-0"
      ></canvas>

      <!-- Atmospheric Cinematic Vignette & Grain Overlay for Luxury Film Feel -->
      <div class="pointer-events-none absolute inset-0 z-10 bg-radial-cinematic"></div>
      <div class="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#06080e] via-transparent to-[#06080e]/60"></div>

      <!-- Top Ambient Bar (Minimalist Luxury Telemetry) -->
      <div class="relative z-20 w-full px-6 sm:px-12 pt-20 flex items-center justify-between pointer-events-none font-mono text-xs">
        <!-- Division Tag -->
        <div class="flex items-center gap-3 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 shadow-lg shadow-black/50">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span class="text-zinc-200 tracking-wider font-semibold">PT. HARRISON AND GIL-JAVA</span>
          <span class="text-zinc-600">/</span>
          <span class="hidden sm:inline text-zinc-400">SYSDEV (2-PERSON CORE)</span>
        </div>

        <!-- Center: Interactive Scene Switcher -->
        <div class="hidden md:flex items-center gap-1.5 bg-black/40 backdrop-blur-xl p-1 rounded-full border border-white/10 pointer-events-auto shadow-lg">
          <button
            v-for="(scene, idx) in scenes"
            :key="scene.id"
            @click="jumpToScene(idx)"
            class="px-3.5 py-1.5 rounded-full text-[11px] font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer"
            :class="activeSceneIndex === idx
              ? 'bg-white/15 text-white font-semibold shadow-inner border border-white/20'
              : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'"
          >
            <span class="w-1.5 h-1.5 rounded-full" :class="activeSceneIndex === idx ? 'bg-amber-400' : 'bg-zinc-600'"></span>
            <span>{{ scene.label }}</span>
          </button>
        </div>

        <!-- Scroll Progress Indicator -->
        <div class="flex items-center gap-3 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 shadow-lg">
          <span class="text-zinc-400 text-[11px] uppercase tracking-wider">{{ t('hero.journey') }}</span>
          <div class="w-20 sm:w-28 h-1 rounded-full bg-white/10 overflow-hidden relative">
            <div
              class="h-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all duration-100"
              :style="{ width: `${Math.round(scrollProgress * 100)}%` }"
            ></div>
          </div>
          <span class="text-zinc-200 font-bold text-xs w-8 text-right">{{ Math.round(scrollProgress * 100) }}%</span>
        </div>
      </div>

      <!-- Stage: Editorial Content Layer (Lower-Thirds for all phases to keep visuals unobstructed) -->
      <div
        class="relative z-20 flex-1 max-w-6xl mx-auto w-full px-6 sm:px-12 flex items-end justify-between pb-6 sm:pb-10 pointer-events-none transition-all duration-500"
      >
        <Transition name="fade-slide" mode="out-in">
          <!-- PHASE 0: Grand Editorial Hero (Cinema Scale - Lower Thirds, Zero Blockage) -->
          <div
            v-if="currentPhaseIndex === 0"
            key="hero-stage"
            class="w-full max-w-xl lg:max-w-2xl pointer-events-auto"
          >
            <!-- Status Badge -->
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-xs font-mono mb-3 bg-black/55 backdrop-blur-md text-zinc-200 shadow-lg">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              <span class="tracking-wide">{{ t('hero.statusBadge') }}</span>
            </div>

            <!-- Grand Headline with deep cinema shadow -->
            <h1 class="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              {{ t('hero.name') }}
            </h1>

            <!-- Subtitle -->
            <p class="text-base sm:text-xl font-light text-zinc-200 mb-2.5 tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              {{ t('hero.headline') }} <span class="text-amber-400 font-normal">/</span> {{ t('hero.headlineSub') }}
            </p>

            <!-- Bio Statement -->
            <p class="text-xs sm:text-sm text-zinc-300 max-w-lg mb-5 leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {{ t('hero.bio') }}
            </p>

            <!-- Action Pill Buttons -->
            <div class="flex flex-wrap items-center gap-2.5">
              <button
                @click="scrollToProjects"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-white text-zinc-950 hover:bg-zinc-100 transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-black/60 cursor-pointer"
              >
                <FolderOpen class="w-3.5 h-3.5 text-amber-600" />
                <span>{{ t('hero.exploreSystems') }}</span>
              </button>
              <a
                href="https://wa.me/6285175180821"
                target="_blank"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide border border-white/20 bg-black/50 text-zinc-200 hover:bg-black/70 hover:text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageCircle class="w-3.5 h-3.5" />
                <span>{{ t('hero.contactMe') }}</span>
              </a>
              <a
                href="/cv_rikiandi.pdf"
                target="_blank"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide border border-white/20 bg-black/50 text-zinc-200 hover:bg-black/70 hover:text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
              >
                <FileText class="w-3.5 h-3.5" />
                <span>{{ t('hero.resume') }}</span>
              </a>
            </div>
          </div>

          <!-- PHASES 1 to 4: Architecture Narrative Overlay (Cinema Lower-Third Subtitle, Zero Blockage) -->
          <div
            v-else
            key="narrative-stage"
            class="w-full flex items-end justify-between pointer-events-auto gap-6 sm:gap-10"
          >
            <!-- Cinema Editorial Story Block -->
            <div class="w-full max-w-xl lg:max-w-2xl transition-all duration-500">
              <!-- Eyebrow Pill -->
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-xs font-mono mb-3 bg-black/55 backdrop-blur-md text-zinc-200 shadow-lg">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                <span class="text-amber-400 font-semibold tracking-wider uppercase">{{ currentPhaseData.phaseNumber }}</span>
                <span class="text-zinc-500">&bull;</span>
                <span class="text-zinc-300 tracking-wide">{{ currentPhaseData.tagline }}</span>
              </div>

              <!-- Title -->
              <h2 class="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2 leading-[1.12] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                {{ currentPhaseData.title }}
              </h2>

              <!-- Description -->
              <p class="text-xs sm:text-sm text-zinc-200 leading-relaxed mb-4 max-w-xl font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                {{ currentPhaseData.description }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                <span
                  v-for="tag in currentPhaseData.tags"
                  :key="tag"
                  class="px-3 py-1 rounded-full bg-black/55 backdrop-blur-md text-zinc-300 border border-white/15 flex items-center gap-2 shadow-md"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Right Telemetry Badge (Docked neatly at bottom-right, slim & translucent) -->
            <div class="hidden xl:flex flex-col items-end font-mono text-[11px] text-zinc-400 pointer-events-none mb-1">
              <div class="p-3.5 rounded-2xl border border-white/15 bg-black/55 backdrop-blur-md w-64 space-y-2 shadow-2xl">
                <div class="flex justify-between text-zinc-400 pb-1.5 border-b border-white/10 text-[10px]">
                  <span class="tracking-widest">{{ t('hero.telemetryTitle') }}</span>
                  <span class="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {{ t('hero.telemetryOnline') }}
                  </span>
                </div>
                <div class="flex justify-between">
                  <span class="text-zinc-400">DIVISION:</span>
                  <span class="text-zinc-200 font-semibold">{{ t('hero.telemetryDivision') }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-zinc-400">PLANT:</span>
                  <span class="text-amber-400 font-semibold">{{ t('hero.telemetryPlant') }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-zinc-400">SUITE:</span>
                  <span class="text-zinc-200">{{ t('hero.telemetrySuite') }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-zinc-400">HARDWARE:</span>
                  <span class="text-zinc-200">{{ t('hero.telemetryHardware') }}</span>
                </div>
                <div class="flex justify-between pt-1.5 border-t border-white/10 text-[10px] text-zinc-400">
                  <span>STANDARD:</span>
                  <span class="text-emerald-400 font-semibold">{{ t('hero.telemetryStandard') }}</span>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Bottom HUD Scrubber & Stage Navigation -->
      <div class="relative z-20 w-full px-6 sm:px-12 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <!-- Interactive Phase Jump Pills -->
        <div class="flex items-center gap-1.5 bg-black/40 backdrop-blur-xl p-1 rounded-full border border-white/10 shadow-xl">
          <button
            v-for="(phase, index) in phases"
            :key="phase.id"
            @click="scrollToPhase(index)"
            class="px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs transition-all duration-300 flex items-center gap-2 cursor-pointer"
            :class="currentPhaseIndex === index
              ? 'bg-amber-400 text-black font-bold shadow-md shadow-amber-400/20'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'"
          >
            <span>0{{ index }}</span>
            <span class="hidden md:inline">{{ phase.tabLabel }}</span>
          </button>
        </div>

        <!-- Scroll Explore Indicator -->
        <div class="flex items-center gap-2 text-zinc-400 text-xs">
          <span class="uppercase tracking-widest text-[10px]">{{ t('hero.scrollExplore') }}</span>
          <svg class="w-4 h-4 text-amber-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import {
  FolderOpen,
  MessageCircle,
  FileText
} from "lucide-vue-next";
import { useLanguage } from "@/composables/useLanguage";

const { t, messages } = useLanguage();

const sectionRef = ref(null);
const canvasRef = ref(null);
const scrollProgress = ref(0);
let animationFrameId = null;

// The 3 Master Camera Focus Perspectives
const scenes = computed(() => [
  { id: "overview", label: messages.value.hero.sceneOverview, src: "/img/hero-cinematic-riki.png" },
  { id: "matrix", label: messages.value.hero.sceneMatrix, src: "/img/hero-cinematic-riki.png" },
  { id: "tokyo", label: messages.value.hero.sceneTokyo, src: "/img/hero-cinematic-riki.png" },
]);

const activeSceneIndex = computed(() => {
  const p = scrollProgress.value;
  if (p < 0.35) return 0; // Executive Penthouse
  if (p < 0.70) return 1; // Holographic CAD Matrix
  return 2; // Tokyo Tower & Kaizen
});

// The 5 Scrollytelling Phases (Fully Reactive to Language Switch)
const phases = computed(() => [
  {
    id: "hero",
    phaseNumber: "PHASE 00",
    tabLabel: messages.value.hero.phase00.tab,
    badge: "00. SYSTEM CORE",
    tagline: messages.value.hero.phase00.tagline,
    title: messages.value.hero.phase00.title,
    description: messages.value.hero.phase00.desc,
    tags: messages.value.hero.phase00.tags,
  },
  {
    id: "core",
    phaseNumber: "PHASE 01",
    tabLabel: messages.value.hero.phase01.tab,
    badge: messages.value.hero.phase01.badge,
    tagline: messages.value.hero.phase01.tagline,
    title: messages.value.hero.phase01.title,
    description: messages.value.hero.phase01.desc,
    tags: messages.value.hero.phase01.tags,
  },
  {
    id: "hardware",
    phaseNumber: "PHASE 02",
    tabLabel: messages.value.hero.phase02.tab,
    badge: messages.value.hero.phase02.badge,
    tagline: messages.value.hero.phase02.tagline,
    title: messages.value.hero.phase02.title,
    description: messages.value.hero.phase02.desc,
    tags: messages.value.hero.phase02.tags,
  },
  {
    id: "ecosystem",
    phaseNumber: "PHASE 03",
    tabLabel: messages.value.hero.phase03.tab,
    badge: messages.value.hero.phase03.badge,
    tagline: messages.value.hero.phase03.tagline,
    title: messages.value.hero.phase03.title,
    description: messages.value.hero.phase03.desc,
    tags: messages.value.hero.phase03.tags,
  },
  {
    id: "standard",
    phaseNumber: "PHASE 04",
    tabLabel: messages.value.hero.phase04.tab,
    badge: messages.value.hero.phase04.badge,
    tagline: messages.value.hero.phase04.tagline,
    title: messages.value.hero.phase04.title,
    description: messages.value.hero.phase04.desc,
    tags: messages.value.hero.phase04.tags,
  },
]);

const currentPhaseIndex = computed(() => {
  const p = scrollProgress.value;
  if (p < 0.20) return 0;
  if (p < 0.40) return 1;
  if (p < 0.60) return 2;
  if (p < 0.80) return 3;
  return 4;
});

const currentPhaseData = computed(() => {
  if (!phases.value || !phases.value.length) return {};
  return phases.value[currentPhaseIndex.value] || phases.value[0] || {};
});

// Mouse coordinates for interactive parallax tilt
let mouseX = 0;
let mouseY = 0;
let targetMouseX = 0;
let targetMouseY = 0;

const handleMouseMove = (e) => {
  const rect = canvasRef.value?.getBoundingClientRect();
  if (!rect) return;
  targetMouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
  targetMouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
};

// Scroll listener calculation
const updateScrollProgress = () => {
  if (!sectionRef.value) return;
  const rect = sectionRef.value.getBoundingClientRect();
  const totalHeight = rect.height - window.innerHeight;
  if (totalHeight <= 0) return;

  const currentScroll = -rect.top;
  const progress = Math.min(Math.max(currentScroll / totalHeight, 0), 1);
  scrollProgress.value = progress;
};

const scrollToPhase = (index) => {
  if (!sectionRef.value) return;
  const rect = sectionRef.value.getBoundingClientRect();
  const totalHeight = rect.height - window.innerHeight;
  const targetOffset = totalHeight * (index * 0.205);
  const absoluteY = window.pageYOffset + rect.top + targetOffset;

  window.scrollTo({
    top: absoluteY,
    behavior: "smooth",
  });
};

const jumpToScene = (sceneIndex) => {
  const phaseMap = [0, 2, 4];
  scrollToPhase(phaseMap[sceneIndex]);
};

const scrollToProjects = () => {
  const el = document.getElementById("featured-projects");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

// -------------------------------------------------------------
// Cinematic Living Canvas Engine (Preloads Images + 60fps Motion)
// -------------------------------------------------------------
const loadedImages = {};

const preloadImages = () => {
  scenes.value.forEach((scene) => {
    const img = new Image();
    img.src = scene.src;
    img.onload = () => {
      loadedImages[scene.id] = img;
    };
  });
};

// Atmospheric Dust Particles
let dustParticles = [];
const initDustParticles = (count) => {
  dustParticles = [];
  for (let i = 0; i < count; i++) {
    dustParticles.push({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 2 + 0.8,
      speedY: Math.random() * 0.0008 + 0.0003,
      speedX: (Math.random() - 0.5) * 0.0004,
      opacity: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.5 ? "rgba(251, 191, 36," : "rgba(56, 189, 248,",
    });
  }
};

let time = 0;

const renderCanvas = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const width = window.innerWidth;
  const height = window.innerHeight;
  const p = scrollProgress.value;

  time += 0.016; // approx 60fps delta

  // Smooth lerp for mouse inertia
  mouseX += (targetMouseX - mouseX) * 0.04;
  mouseY += (targetMouseY - mouseY) * 0.04;

  ctx.clearRect(0, 0, width, height);

  // Helper to draw an image cover with Ken Burns drift & parallax
  const drawCinematicScene = (img, alpha, extraScale = 0, panBiasX = 0) => {
    if (!img || alpha <= 0.001) return;

    ctx.save();
    ctx.globalAlpha = Math.min(Math.max(alpha, 0), 1);

    // Ken Burns slow breathing scale + scroll push-in
    const breathingScale = 1.03 + Math.sin(time * 0.35) * 0.02 + extraScale + p * 0.08;
    const parallaxX = mouseX * 24 + Math.cos(time * 0.2) * 12 + panBiasX;
    const parallaxY = mouseY * 16 + Math.sin(time * 0.25) * 8;

    // Calculate aspect fill ratio
    const imgAspect = img.width / img.height;
    const canvasAspect = width / height;

    let drawWidth, drawHeight;
    if (canvasAspect > imgAspect) {
      drawWidth = width * breathingScale;
      drawHeight = (width / imgAspect) * breathingScale;
    } else {
      drawHeight = height * breathingScale;
      drawWidth = (height * imgAspect) * breathingScale;
    }

    const drawX = (width - drawWidth) / 2 + parallaxX;
    const drawY = (height - drawHeight) / 2 + parallaxY;

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    ctx.restore();
  };

  // 3. Dynamic Camera Tracking across Riki's Master Artwork (Zero Fake Images)
  let panBiasX = 0;
  let extraScale = 0;

  if (p < 0.20) {
    // Phase 0: Grand panoramic overview
    panBiasX = 0;
    extraScale = 0;
  } else if (p < 0.40) {
    // Phase 1: Subtle push-in towards Riki (SysDev 2-person Core ownership)
    const t = (p - 0.20) / 0.20;
    panBiasX = 0;
    extraScale = t * 0.05;
  } else if (p < 0.60) {
    // Phase 2: Pan smoothly towards CAD blueprint holograms on the left
    const t = (p - 0.40) / 0.20;
    panBiasX = t * 85;
    extraScale = 0.05 + t * 0.02;
  } else if (p < 0.80) {
    // Phase 3: Recollimate for full 8-Engine matrix
    const t = (p - 0.60) / 0.20;
    panBiasX = 85 * (1 - t);
    extraScale = 0.07 - t * 0.03;
  } else {
    // Phase 4: Pan smoothly towards Tokyo Tower & twilight horizon on the right
    const t = (p - 0.80) / 0.20;
    panBiasX = -t * 85;
    extraScale = 0.04 + t * 0.03;
  }

  // Draw authentic master visual artwork
  const masterImg = loadedImages["overview"] || loadedImages["matrix"] || loadedImages["tokyo"] || loadedImages["penthouse"];
  if (masterImg) {
    drawCinematicScene(masterImg, 1.0, extraScale, panBiasX);
  }

  // 4. Volumetric Light Caustics / Subtle Holographic Scan
  ctx.save();
  const scanY = (Math.sin(time * 0.8) * 0.5 + 0.5) * height;
  const scanGrad = ctx.createLinearGradient(0, scanY - 60, 0, scanY + 60);
  scanGrad.addColorStop(0, "rgba(56, 189, 248, 0)");
  scanGrad.addColorStop(0.5, "rgba(56, 189, 248, 0.04)");
  scanGrad.addColorStop(1, "rgba(56, 189, 248, 0)");
  ctx.fillStyle = scanGrad;
  ctx.fillRect(0, scanY - 60, width, 120);
  ctx.restore();

  // 5. Living Ambient Photon / Dust Specks (3D Floating Atmosphere)
  ctx.save();
  for (let i = 0; i < dustParticles.length; i++) {
    const pt = dustParticles[i];
    pt.y -= pt.speedY;
    pt.x += pt.speedX;
    if (pt.y < 0) pt.y = 1;
    if (pt.x < 0) pt.x = 1;
    if (pt.x > 1) pt.x = 0;

    const px = pt.x * width + mouseX * 15;
    const py = pt.y * height + mouseY * 15;

    ctx.fillStyle = `${pt.color}${pt.opacity})`;
    ctx.beginPath();
    ctx.arc(px, py, pt.size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  // 6. Interactive Light Ripple on Mouse Cursor
  if (mouseX !== 0 || mouseY !== 0) {
    ctx.save();
    const curX = width * 0.5 + mouseX * (width * 0.5);
    const curY = height * 0.5 + mouseY * (height * 0.5);
    const rippleRad = 180 + Math.sin(time * 3) * 20;

    const radGrad = ctx.createRadialGradient(curX, curY, 0, curX, curY, rippleRad);
    radGrad.addColorStop(0, "rgba(251, 191, 36, 0.08)");
    radGrad.addColorStop(0.4, "rgba(56, 189, 248, 0.03)");
    radGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = radGrad;
    ctx.fillRect(curX - rippleRad, curY - rippleRad, rippleRad * 2, rippleRad * 2);
    ctx.restore();
  }

  animationFrameId = requestAnimationFrame(renderCanvas);
};

const handleResize = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
};

onMounted(() => {
  preloadImages();
  initDustParticles(45);
  handleResize();
  updateScrollProgress();

  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", updateScrollProgress, { passive: true });

  animationFrameId = requestAnimationFrame(renderCanvas);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("scroll", updateScrollProgress);
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

<style scoped>
/* Elegant Fade Slide Transition */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Luxurious Radial Vignette - Keeps Edges Dark & Editorial */
.bg-radial-cinematic {
  background: radial-gradient(
    circle at 50% 50%,
    rgba(6, 8, 14, 0.15) 0%,
    rgba(6, 8, 14, 0.65) 60%,
    rgba(6, 8, 14, 0.95) 100%
  );
}
</style>
