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


 document.body.style.display = 'none';
  window.onload = function () {
    var UserInput = null;

    var cookies = document.cookie;
    var cookiesArray = cookies.split(';');
    var pass = 'cGFzcw==';

    for (var c of cookiesArray) {
      var cArray = c.split('=');
      if (cArray[0].indexOf('cruw-basic') > -1) {
        UserInput = decodeURIComponent(cArray[1]);
      }
    }
    if (!(UserInput && UserInput == window.atob(pass))) {
      UserInput = prompt("パスワードを入力して下さい:", "");
    }

    if (UserInput != window.atob(pass)) {
      document.body.innerHTML = "403 Forbidden";
    } else {
      var now = new Date();
      now.setMinutes(now.getMinutes() + 60 * 24 * 3);
      document.cookie = "cruw-basic=" + encodeURIComponent(UserInput) + ";expires=" + now.toUTCString() + "; path=/;";
    }
    document.body.style.display = null;
  }