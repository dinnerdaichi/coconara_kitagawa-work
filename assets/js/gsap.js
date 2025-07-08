gsap.utils.toArray(".fade-in").forEach((el) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 50 }, // 下から
    {
      opacity: 1,
      duration: 1,
      y: 0, // 元の位置へ
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
});