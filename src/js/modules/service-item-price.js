function serviceItemCost() {

    document.querySelectorAll(".main-form").forEach(serviceItem => {
        let total = 0;
        let cost1 = 0;
        let cost2 = 0;
        let cost3 = 0;
        let cost4 = 0;
        
        serviceItem.querySelectorAll(".dropdown-select").forEach(function(dropdownWrapper) {

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
                    e.stopPropagation();
                    dropdownButton.textContent = this.textContent;
                    dropdownButton.focus();
                    closeSelect();
                    if (item.dataset.identificator == "item1") {
                        dropdownInput.value = item.dataset.value;
                        cost1 = +dropdownInput.value;
                    }
                    else if(item.dataset.identificator == "item2") {
                        dropdownInput.value = item.dataset.value;
                        cost2 = +dropdownInput.value;
                    }
                    else if(item.dataset.identificator == "item3") {
                        dropdownInput.value = item.dataset.value;
                        cost3 = +dropdownInput.value;
                    }
                    else if(item.dataset.identificator == "item4") {
                        dropdownInput.value = item.dataset.value;
                        cost4 = +dropdownInput.value;
                    }
                    calcTotal(cost1, cost2, cost3, cost4);
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
    
            function calcTotal(cost1,cost2) {
              total = cost1 + cost2 + cost3 + cost4;
              serviceItem.querySelector(".total__cost").textContent = total
            }
        })
    })
}

export default serviceItemCost;