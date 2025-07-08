const initSlider = () => {
  // 🎞 上段（表示専用）スライダー：slider-main
  const mainSlider = new Swiper(".slider-main", {
    loop: true,
    allowTouchMove: false // ← 上は操作させないよ
  });

  // 📱 下段（操作用）スライダー：slider-nav
  const navSlider = new Swiper(".slider-nav", {
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 6,
    loop: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    thumbs: {
      swiper: mainSlider // 🪄 上段スライダーをサムネイル的に連携
    },
    breakpoints: {
      768: {
        spaceBetween: 10
      }
    }
  });
};

initSlider();


window.addEventListener('scroll', () => {
  const headerInner = document.querySelector('.header__inner');
  if (!headerInner) return;
  if (window.scrollY > headerInner.offsetHeight) {
    headerInner.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
  } else {
    headerInner.style.boxShadow = 'none';
  }
});
