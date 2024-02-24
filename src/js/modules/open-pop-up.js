function popUpToggle() {
    let buttonMains = document.querySelectorAll(".toggle-pop-up-main");

    let mainPopUpForm = document.querySelector(".pop-up");
    let btnCloseMainForm = mainPopUpForm.querySelector(".main-form__close");

    let over = document.querySelector(".over");

    buttonMains.forEach(buttonMain => {
        buttonMain.addEventListener("click", function() {
            mainPopUpForm.classList.add("pop-up_open");
            over.classList.add("over_open");
        })
    })
    btnCloseMainForm.addEventListener("click", function() {
        mainPopUpForm.classList.remove("pop-up_open");
        over.classList.remove("over_open");
    })
    over.addEventListener("click", function() {
        mainPopUpForm.classList.remove("pop-up_open");
        over.classList.remove("over_open");
    })
}

export default popUpToggle;