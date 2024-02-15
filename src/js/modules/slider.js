function slider() {
    const swiper = new Swiper('.swiper', {
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
          delay: 10000,
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
}

export default slider;