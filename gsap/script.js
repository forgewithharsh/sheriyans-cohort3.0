gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (!reduceMotion) {
  gsap
    .timeline()
    .from(".kicker", { opacity: 0, y: 20, duration: 0.6 })
    .from(".hero h1", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
    .from(".hero-sub", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
    .from(".hero-cta", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
    .from(".hero-photo", { opacity: 0, scale: 0.95, duration: 0.7 }, "-=0.6");

  const revealTargets = document.querySelectorAll(
    '.section [data-anim="fade"]',
  );

  revealTargets.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    });
  });
}
