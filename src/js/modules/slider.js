function slider() {
    const swiper = new Swiper('.swiper-header', {
        speed: 600,
        spaceBetween: 0,
        navigation: {
            nextEl: '.controls-header__button_next',
            prevEl: '.controls-header__button_prev',
        },
        pagination: {
          el: '.pagination-header',
          type: 'bullets',
        },
        autoplay: {
          delay: 15000,
          disableOnInteraction: false
      },
      parallax:true,
      on: {
        init: function(swiper) {
          console.log(swiper)
            let fractionAll = document.querySelector(".fraction-header__all");
            fractionAll.textContent = `0${swiper.slides.length}`;
    
            swiper.pagination.bullets[0].classList.remove("swiper-pagination-bullet-active");
            setTimeout(function() {
              swiper.pagination.bullets[0].classList.add("swiper-pagination-bullet-active");
            },0)
        },
        slideChange: function(swiper) {
          let fractionCurrent = document.querySelector(".fraction-header__current");
          fractionCurrent.textContent = `0${swiper.activeIndex + 1}`;
    
        }
    }
    });

    const swiperRewiews = new Swiper('.rewiews-swiper', {
      speed: 600,
      spaceBetween: 20,
      navigation: {
          nextEl: '.controls-rewiews__button_next',
          prevEl: '.controls-rewiews__button_prev',
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    parallax:true,
    pagination: {
      el: '.rewiews-swiper__bullets',
      type: 'bullets',
    },
    on: {
      init: function(swiper) {
          swiper.pagination.bullets[0].classList.remove("swiper-pagination-bullet-active");
          setTimeout(function() {
            swiper.pagination.bullets[0].classList.add("swiper-pagination-bullet-active");
          },0)
      },
  }
  });
}

export default slider;