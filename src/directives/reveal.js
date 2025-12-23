export default {
  mounted(el, binding) {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
            if (binding.modifiers.once) observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
  },
};
