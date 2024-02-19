let select = document.querySelector(".dropdown-select_portfolio");

const dropdownButton = document.querySelector(".dropdown-select__button")
const dropdownGrid = document.querySelector(".dropdown-select__grid")
const dropdownList = document.querySelector(".dropdown-select__list")
const dropdownListItems =  document.querySelectorAll(".dropdown-select__item")
const dropdownInput = document.querySelector(".dropdown-select__input")

if (localStorage.getItem("portfolio")) {
    dropdownButton.textContent = document.querySelector(`[data-value='${localStorage.getItem("portfolio")}']`).textContent
    dropdownInput.value = localStorage.getItem("portfolio")

    let imgs = document.querySelectorAll(".gallery__item");
        imgs.forEach(img => {
            img.classList.add("gallery__item_hidden");
            if (img.dataset.category && img.dataset.category.includes(localStorage.getItem("portfolio"))) {
                img.classList.remove("gallery__item_hidden");
            }
            if (localStorage.getItem("portfolio") && localStorage.getItem("portfolio") == "all") img.classList.remove("gallery__item_hidden");
        })
}

dropdownButton.addEventListener("click", function() {
    dropdownGrid.classList.toggle("dropdown-select__grid_visible")
    dropdownList.classList.toggle("dropdown-select__list_visible")
    console.log(dropdownGrid)
    this.classList.add("dropdown-select__button_active");
})

dropdownListItems.forEach(item => {
    item.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdownButton.textContent = this.textContent;
        dropdownButton.focus();
        closeSelect();
        dropdownInput.value = item.dataset.value;

        let imgs = document.querySelectorAll(".gallery__item");
        imgs.forEach(img => {
            img.classList.add("gallery__item_hidden");
            if (img.dataset.category && img.dataset.category.includes(dropdownInput.value)) {
                img.classList.remove("gallery__item_hidden");
            }
            if (dropdownInput.value && dropdownInput.value == "all") img.classList.remove("gallery__item_hidden");
        })
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