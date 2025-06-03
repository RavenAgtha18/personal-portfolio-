<template>
  <main class="relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-amber-400/10 blur-3xl animate-float"
      ></div>
      <div
        class="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-amber-200/5 blur-3xl animate-float-delay"
      ></div>
    </div>

    <div
      class="container mx-auto px-6 py-12 md:py-24 flex flex-col-reverse gap-12 items-center md:flex-row md:gap-16 min-h-[calc(100vh-80px)]"
    >
      <!-- Content Section -->
      <div class="space-y-6 text-center md:text-left max-w-2xl">
        <div class="space-y-4 overflow-hidden">
          <p
            class="text-amber-300/80 text-sm md:text-base tracking-widest animate-slide-up delay-100"
          >
            HELLO WORLD, I'M
          </p>
          <h1
            class="text-4xl md:text-6xl font-bold text-white animate-slide-up delay-200 leading-tight"
          >
            Riki Andi Alfiyanto
            <span class="wave inline-block ml-2 animate-wave">👋</span>
          </h1>

          <div class="py-2 h-10 md:h-12 overflow-hidden">
            <h1
              class="typewrite text-xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 animate-slide-up delay-300"
              ref="typewriter"
            >
              <span class="wrap">{{ txt }}</span>
            </h1>
          </div>

          <p
            class="text-white/80 text-lg md:text-xl animate-slide-up delay-400 max-w-lg"
          >
            Passionate developer creating digital experiences that matter.
            <span class="inline-block animate-bounce">✨</span>
          </p>
        </div>

        <div
          class="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up delay-500"
        >
          <a
            href="https://wa.me/6285175180821"
            target="_blank"
            class="flex items-center justify-center py-3 px-6 text-sm font-medium rounded-full border-2 border-amber-300 text-amber-300 bg-transparent hover:bg-amber-300 hover:text-gray-900 transition-all duration-300 group animate-pulse-once"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="mr-2 w-5 h-5 group-hover:text-gray-900 animate-wiggle"
              viewBox="0 0 24 24"
            >
              <path
                d="M12.07,2A10,10,0,0,0,2.1,17.67L2,22l4.34-.76A10,10,0,1,0,12.07,2Zm5.39,13.62c-.22.62-1.28,1.19-1.77,1.26-.5.08-.87.12-2.92-.61a10.47,10.47,0,0,1-6-5.37c-.5-.86-.55-1.16-.55-1.56a3.14,3.14,0,0,1,1-2.16,1,1,0,0,1,.72-.31c.18,0,.36.06.52.43s.65,1.6.7,1.72a.43.43,0,0,1,0,.4,2.11,2.11,0,0,1-.31.52c-.16.19-.33.42-.47.56-.16.15-.33.31-.15.61a8.58,8.58,0,0,0,3.73,3.23c.27.12.42.1.57-.06a13.4,13.4,0,0,0,.91-1.15.52.52,0,0,1,.62-.2c.25.09,1.58.75,1.85.88s.44.2.51.31A2.84,2.84,0,0,1,17.46,15.61Z"
              />
            </svg>
            Contact Me
          </a>
          <!-- <button
            class="flex items-center justify-center py-3 px-6 text-sm font-medium rounded-full border-2 border-white/30 text-white hover:border-white/60 transition-all duration-300 group animate-pulse-once-delay"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="mr-2 w-4 h-4 group-hover:text-amber-300 animate-bounce-slow"
            >
              <path
                fill-rule="evenodd"
                d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
                clip-rule="evenodd"
              ></path>
              <path
                d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z"
              ></path>
            </svg>
            Download CV
          </button> -->
        </div>
      </div>

      <!-- Image Section -->
      <div class="relative animate-float">
        <div class="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <img
            alt="avatar"
            width="400"
            height="400"
            decoding="async"
            class="w-full h-full rounded-full object-cover border-4 border-amber-300/80 shadow-lg animate-scale-in"
            src="/img/profile.jpg"
          />
          <div
            class="absolute inset-0 rounded-full border-4 border-transparent animate-spin-slow [border-image:linear-gradient(to_bottom_right,#f59e0b,transparent)_1] -z-10"
          ></div>
          <div
            class="absolute -inset-4 rounded-full bg-amber-300/10 blur-xl -z-20 animate-pulse-slow"
          ></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      toRotate: [
        "Web Developer",
        "Full-stack Engineer",
        "Informatics Student",
        "Tech Enthusiast",
      ],
      period: 2000,
      txt: "",
      loopNum: 0,
      isDeleting: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.tick();
    });
  },
  methods: {
    tick() {
      let typewriter = this.$refs.typewriter;

      if (!typewriter) {
        return;
      }

      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      this.txt = this.isDeleting
        ? fullTxt.substring(0, this.txt.length - 1)
        : fullTxt.substring(0, this.txt.length + 1);
      typewriter.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    },
  },
};
</script>

<style>
/* Base Animations */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes float-delay {
  0%,
  100% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(5px);
  }
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

@keyframes wiggle {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.2;
  }
}

@keyframes scale-in {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation Classes */
.animate-spin-slow {
  animation: spin-slow 12s linear infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delay {
  animation: float-delay 8s ease-in-out infinite;
}

.animate-wave {
  animation: wave 2.5s infinite;
}

.animate-bounce {
  animation: bounce 2s infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 3s infinite;
}

.animate-wiggle {
  animation: wiggle 1.5s infinite;
}

.animate-pulse-once {
  animation: pulse 1s ease-in-out 1;
}

.animate-pulse-once-delay {
  animation: pulse 1s ease-in-out 0.5s 1;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-scale-in {
  animation: scale-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-slide-up {
  animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.delay-100 {
  animation-delay: 100ms;
}
.delay-200 {
  animation-delay: 200ms;
}
.delay-300 {
  animation-delay: 300ms;
}
.delay-400 {
  animation-delay: 400ms;
}
.delay-500 {
  animation-delay: 500ms;
}

/* Typewriter Effect */
.typewrite > .wrap {
  border-right: 0.08em solid rgba(251, 191, 36, 0.7);
  padding-right: 2px;
}

/* Layout Adjustments */
.overflow-hidden {
  overflow: hidden;
}
</style>
