function validation() {
    let inputs = document.querySelectorAll(".input-container__input");
    let btnSubmit = document.querySelector(".form-feedback__button");
    let form1 = document.querySelector(".form-feedback_first");
    let form2 = document.querySelector(".form-feedback_second");
    let mainForm = document.querySelector(".main-form");

    let errorCount = 0;

    form1.addEventListener("submit", function(e) {
        let inputCalendar = form1.querySelector(".date");
        e.preventDefault();
        inputs.forEach(input => {
            let inputContainer = input.parentElement;
            let icon = inputContainer.querySelector(".input-container__icon");

            if (input.name == "form-1-name") {
                if (input.value == "") {
                    inputContainer.classList.add("container-error");
                    icon.classList.add("icon-error");

                    let textError = "Неправильное имя"
                    iconHoverError(icon, inputContainer, textError);

                    errorCount++;
                } else {
                    inputContainer.classList.remove("container-error");
                    icon.classList.remove("icon-error");

                    removeIconHoverError(icon, inputContainer)
                }

                input.addEventListener("input", function() {
                    if (input.value != "") {
                        inputContainer.classList.remove("container-error");
                        icon.classList.remove("icon-error");
    
                        removeIconHoverError(icon, inputContainer)
                    }
                })
            }
            if (input.name == "form-1-number") {
                if (input.value == "") {
                    inputContainer.classList.add("container-error");
                    icon.classList.add("icon-error");

                    let textError = "Телефон не введен";
                    iconHoverError(icon, inputContainer, textError);

                    errorCount++;
                } else if (!validPhone(input.value)) {
                    inputContainer.classList.add("container-error");
                    icon.classList.add("icon-error");

                    let textError = "Неправильный формат";
                    iconHoverError(icon, inputContainer, textError);

                    errorCount++;
                } else {
                    inputContainer.classList.remove("container-error");
                    icon.classList.remove("icon-error");

                    removeIconHoverError(icon, inputContainer)
                }

                input.addEventListener("input", function() {
                    if (validPhone(input.value)) {
                        inputContainer.classList.remove("container-error");
                        icon.classList.remove("icon-error");
    
                        removeIconHoverError(icon, inputContainer)
                    }
                })
            }
        })
        if (inputCalendar) {
            let icon = inputCalendar.parentElement.querySelector(".form-feedback__calendar-icon");
            let clue = inputCalendar.parentElement.querySelector(".form-feedback__error-clue");
            if (inputCalendar.value == "") {
                icon.classList.add("icon-error");

                let textError = "Дата не введена"
       
                icon.addEventListener("mouseenter", function() {
                    clue.classList.add("clue-error");
                    clue.querySelector(".form-feedback__error-clue-text").textContent = textError;
                })
                icon.addEventListener("mouseleave", function() {
                    clue.classList.remove("clue-error");
                })
            } else {
                icon.classList.remove("icon-error");
                icon.addEventListener("mouseenter", function() {
                    clue.classList.remove("clue-error");
                })
            }
        }
    })

    form2.addEventListener("submit", function(e) {
        e.preventDefault();
        inputs.forEach(input => {
            let inputContainer = input.parentElement;
            let icon = inputContainer.querySelector(".input-container__icon");

            if (input.name == "form-2-name") {
                if (input.value == "") {
                    inputContainer.classList.add("container-error");
                    icon.classList.add("icon-error");

                    let textError = "Неправильное имя"
                    iconHoverError(icon, inputContainer, textError);

                    errorCount++;
                } else {
                    inputContainer.classList.remove("container-error");
                    icon.classList.remove("icon-error");

                    removeIconHoverError(icon, inputContainer)
                }

                input.addEventListener("input", function() {
                    if (input.value != "") {
                        inputContainer.classList.remove("container-error");
                        icon.classList.remove("icon-error");
    
                        removeIconHoverError(icon, inputContainer)
                    }
                })
            }
            if (input.name == "form-2-number") {
                if (input.value == "") {
                    inputContainer.classList.add("container-error");
                    icon.classList.add("icon-error");

                    let textError = "Телефон не введен";
                    iconHoverError(icon, inputContainer, textError);

                    errorCount++;
                } else if (!validPhone(input.value)) {
                    inputContainer.classList.add("container-error");
                    icon.classList.add("icon-error");

                    let textError = "Неправильный формат";
                    iconHoverError(icon, inputContainer, textError);

                    errorCount++;
                } else {
                    inputContainer.classList.remove("container-error");
                    icon.classList.remove("icon-error");

                    removeIconHoverError(icon, inputContainer)
                }

                input.addEventListener("input", function() {
                    if (validPhone(input.value)) {
                        inputContainer.classList.remove("container-error");
                        icon.classList.remove("icon-error");
    
                        removeIconHoverError(icon, inputContainer)
                    }
                })
            }
        })
    })

    mainForm.addEventListener("submit", function(e) {
        let inputCalendar = mainForm.querySelector(".date");
        e.preventDefault();
        inputs.forEach(input => {
            let inputContainer = input.parentElement;
            let icon = inputContainer.querySelector(".input-container__icon");

            if (input.name == "form-3-name") {
                if (input.value == "") {
                    inputContainer.classList.add("container-error");
                    icon.classList.add("icon-error");

                    let textError = "Неправильное имя"
                    iconHoverError(icon, inputContainer, textError);

                    errorCount++;
                } else {
                    inputContainer.classList.remove("container-error");
                    icon.classList.remove("icon-error");

                    removeIconHoverError(icon, inputContainer)
                }

                input.addEventListener("input", function() {
                    if (input.value != "") {
                        inputContainer.classList.remove("container-error");
                        icon.classList.remove("icon-error");
    
                        removeIconHoverError(icon, inputContainer)
                    }
                })
            }
            if (input.name == "form-3-number") {
                if (input.value == "") {
                    inputContainer.classList.add("container-error");
                    icon.classList.add("icon-error");

                    let textError = "Телефон не введен";
                    iconHoverError(icon, inputContainer, textError);

                    errorCount++;
                } else if (!validPhone(input.value)) {
                    inputContainer.classList.add("container-error");
                    icon.classList.add("icon-error");

                    let textError = "Неправильный формат";
                    iconHoverError(icon, inputContainer, textError);

                    errorCount++;
                } else {
                    inputContainer.classList.remove("container-error");
                    icon.classList.remove("icon-error");

                    removeIconHoverError(icon, inputContainer)
                }

                input.addEventListener("input", function() {
                    if (validPhone(input.value)) {
                        inputContainer.classList.remove("container-error");
                        icon.classList.remove("icon-error");
    
                        removeIconHoverError(icon, inputContainer)
                    }
                })
            }
        })
        if (inputCalendar) {
            let icon = inputCalendar.parentElement.querySelector(".form-feedback__calendar-icon");
            let clue = inputCalendar.parentElement.querySelector(".form-feedback__error-clue");
            if (inputCalendar.value == "") {
                icon.classList.add("icon-error");

                let textError = "Дата не введена"
       
                icon.addEventListener("mouseenter", function() {
                    clue.classList.add("clue-error");
                    clue.querySelector(".form-feedback__error-clue-text").textContent = textError;
                })
                icon.addEventListener("mouseleave", function() {
                    clue.classList.remove("clue-error");
                })
            } else {
                icon.classList.remove("icon-error");
                icon.addEventListener("mouseenter", function() {
                    clue.classList.remove("clue-error");
                })
            }
        }
    })

    function iconHoverError(icon, inputContainer, textError) {
        let clue = inputContainer.querySelector(".input-container__error-clue");
       
        icon.addEventListener("mouseenter", function() {
            clue.classList.add("clue-error");
            clue.querySelector(".input-container__error-clue-text").textContent = textError;
        })
        icon.addEventListener("mouseleave", function() {
            clue.classList.remove("clue-error");
        })
    }

    function removeIconHoverError(icon, inputContainer) {
        let clue = inputContainer.querySelector(".input-container__error-clue");
        icon.addEventListener("mouseenter", function() {
            clue.classList.remove("clue-error");
        })
        icon.addEventListener("mouseleave", function() {
            clue.classList.remove("clue-error");
        })
    }

    function validPhone(inputValue) {
        let regNumber = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
        let valid = regNumber.test(inputValue);

        if (valid) return true;
        return false;
    }
}

export default validation;