function feedback() {
    let btns = document.querySelectorAll(".change-form__title");
    let blocks = document.querySelectorAll(".tab-feedback");
    let secondForm = document.querySelector(".form-feedback_second");
    let line = document.querySelector(".change-form__line");
    let gap = 20;

    line.style.width = window.getComputedStyle(btns[0]).width;

    btns[1].addEventListener("click", function() {
        secondForm.classList.add("form-feedback_second_act");
        line.style.width = window.getComputedStyle(btns[1]).width;
        line.style.left = parseInt(window.getComputedStyle(btns[0]).width) + gap + "px";

        blocks[0].classList.remove("tab-feedback_act");
        blocks[1].classList.add("tab-feedback_act");
    })

    btns[0].addEventListener("click", function() {
        secondForm.classList.remove("form-feedback_second_act");
        line.style.width = window.getComputedStyle(btns[0]).width;
        line.style.left = 0;

        blocks[0].classList.add("tab-feedback_act");
        blocks[1].classList.remove("tab-feedback_act");
    })
}

export default feedback;