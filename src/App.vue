<template>
  <div
    id="app"
    class="relative bg-[#0a0a0a] text-white overflow-x-hidden font-inter"
  >
    <canvas ref="bgCanvas" class="fixed inset-0 -z-10 opacity-30"></canvas>

    <transition name="fade-page" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    const canvas = this.$refs.bgCanvas;
    const ctx = canvas.getContext("2d");
    let w,
      h,
      dots = [];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      dots = Array.from({ length: 80 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(251,191,36,0.25)";
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
    };
    draw();
  },
};
</script>

<style>
.fade-page-enter-active,
.fade-page-leave-active {
  transition: opacity 0.8s ease;
}
.fade-page-enter-from,
.fade-page-leave-to {
  opacity: 0;
}
</style>
