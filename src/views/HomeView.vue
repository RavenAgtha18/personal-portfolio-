<template>
  <main
    class="relative min-h-screen overflow-hidden flex flex-col justify-center items-center text-center bg-[#0a0a0a] text-white"
  >
    <canvas ref="bgCanvas" class="absolute inset-0 -z-10"></canvas>

    <div
      class="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-amber-400/10 to-transparent blur-3xl rounded-full animate-rotate-slow"
    ></div>

    <div class="relative z-10 flex flex-col items-center gap-6 animate-fade-in">
      <h1
        class="text-5xl md:text-7xl font-extrabold tracking-tight animate-title"
      >
        <span class="gradient-text">Riki Andi Alfiyanto</span>
      </h1>
      <p
        class="text-amber-300 font-mono text-sm md:text-base uppercase tracking-[0.3em] animate-slide-up"
      >
        Technical Business Analyst & Developer
      </p>

      <div
        class="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-[#1f1f1f]/60 to-[#262626]/60 border border-amber-300/20 backdrop-blur-md shadow-lg animate-float"
      >
        <span class="text-amber-200 font-mono"
          >{{ displayedText }}<span class="blinker">|</span></span
        >
      </div>

      <div class="relative mt-10 animate-scale-in">
        <div class="relative w-60 h-60 md:w-72 md:h-72">
          <img
            src="/img/profile.jpg"
            alt="Riki"
            class="w-full h-full rounded-full object-cover border-4 border-amber-300/70 shadow-[0_0_30px_rgba(251,191,36,0.2)]"
          />
          <div
            class="absolute inset-0 rounded-full border border-transparent animate-spin-gradient [border-image:conic-gradient(#f59e0b_0deg,transparent_180deg,#f59e0b_360deg)_1]"
          ></div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center gap-4 mt-10 animate-slide-up">
        <a
          href="https://wa.me/6285175180821"
          target="_blank"
          class="px-6 py-3 rounded-full border-2 border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]"
        >
          Contact Me
        </a>
        <a
          href="/cv_rikiandi.pdf"
          target="_blank"
          class="px-6 py-3 rounded-full border-2 border-white/20 text-white hover:border-amber-300 hover:text-amber-300 transition-all duration-300"
        >
          View CV
        </a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      texts: [
        "Transforming ideas into scalable products...",
        "Connecting code and business logic...",
        "Designing data-driven user experiences...",
      ],
      displayedText: "",
      textIndex: 0,
      charIndex: 0,
      isDeleting: false,
    };
  },
  mounted() {
    this.startTypewriter();
    this.animateGrid();
  },
  methods: {
    startTypewriter() {
      const current = this.texts[this.textIndex];
      if (this.isDeleting) {
        this.displayedText = current.substring(0, this.charIndex--);
      } else {
        this.displayedText = current.substring(0, this.charIndex++);
      }

      let speed = this.isDeleting ? 40 : 90;
      if (!this.isDeleting && this.displayedText === current) {
        speed = 1500;
        this.isDeleting = true;
      } else if (this.isDeleting && this.displayedText === "") {
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.texts.length;
      }
      setTimeout(this.startTypewriter, speed);
    },

    animateGrid() {
      const canvas = this.$refs.bgCanvas;
      const ctx = canvas.getContext("2d");
      let w, h;
      const dots = [];

      const resize = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        dots.length = 0;
        for (let i = 0; i < 100; i++) {
          dots.push({
            x: Math.random() * w,
            y: Math.random() * h,
            dx: (Math.random() - 0.5) * 0.3,
            dy: (Math.random() - 0.5) * 0.3,
          });
        }
      };
      resize();
      window.addEventListener("resize", resize);

      function draw() {
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "rgba(255, 193, 37, 0.2)";
        dots.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
          p.x += p.dx;
          p.y += p.dy;
          if (p.x < 0 || p.x > w) p.dx *= -1;
          if (p.y < 0 || p.y > h) p.dy *= -1;
        });
        requestAnimationFrame(draw);
      }
      draw();
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
body {
  font-family: "Inter", sans-serif;
  overflow-x: hidden;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fade-in {
  animation: fade-in 1s ease forwards;
}
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slide-up {
  animation: slide-up 1s ease forwards;
}
@keyframes rotate-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.animate-rotate-slow {
  animation: rotate-slow 40s linear infinite;
}
@keyframes spin-gradient {
  to {
    transform: rotate(360deg);
  }
}
.animate-spin-gradient {
  animation: spin-gradient 8s linear infinite;
}
@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-scale-in {
  animation: scale-in 1.2s ease forwards;
}

.gradient-text {
  background: linear-gradient(90deg, #fbbf24, #f59e0b, #fde68a);
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-move 4s linear infinite;
}
@keyframes gradient-move {
  to {
    background-position: 200% center;
  }
}

.blinker {
  animation: blink 1s step-start infinite;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}

.animate-title {
  animation: fade-in 1.3s ease forwards;
}
</style>
