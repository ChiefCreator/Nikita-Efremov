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

let serviceBodies = document.querySelectorAll(".service-block__body");
serviceBodies.forEach(serviceBody => {
  let btnPrice = serviceBody.querySelector(".service-block__button");
  let closeBtn = serviceBody.querySelector(".service-block__icon");

  btnPrice.addEventListener("click", function() {
    serviceBody.classList.add("service-block__body_act");
  })
  closeBtn.addEventListener("click", function() {
    console.log(closeBtn)
    serviceBody.classList.remove("service-block__body_act");
  })
})

document.querySelectorAll(".dropdown-select").forEach(function(dropdownWrapper) {

  const dropdownButton = dropdownWrapper.querySelector(".dropdown-select__button")
  const dropdownGrid = dropdownWrapper.querySelector(".dropdown-select__grid")
  const dropdownList = dropdownWrapper.querySelector(".dropdown-select__list")
  const dropdownListItems =  dropdownWrapper.querySelectorAll(".dropdown-select__item")
  const dropdownInput = dropdownWrapper.querySelector(".dropdown-select__input")
  
  dropdownButton.addEventListener("click", function() {
     
      dropdownGrid.classList.toggle("dropdown-select__grid_visible")
      dropdownList.classList.toggle("dropdown-select__list_visible")
      this.classList.add("dropdown-select__button_active");
  })
  
  dropdownListItems.forEach(item => {
      item.addEventListener("click", function (e) {
          e.stopPropagation()

          dropdownButton.textContent = this.textContent;
          dropdownInput.value = this.dataset.value
          dropdownButton.focus();
          closeSelect()
      })
  })
  
  document.addEventListener("click", function(e) {
      if (e.target != dropdownButton) {
          dropdownButton.classList.remove("dropdown-select__button_active")
          closeSelect()
      }
  })

  function closeSelect() {
    dropdownGrid.classList.remove("dropdown-select__grid_visible")
    dropdownList.classList.remove("dropdown-select__list_visible")
  }
})