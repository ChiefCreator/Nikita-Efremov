function changeForm() {
    let forms = document.querySelectorAll(".main-form");
    forms.forEach(form => {

        let circleArr = Array.from(form.querySelectorAll(".footer-main-form__circle"));
        let lineArr = Array.from(form.querySelectorAll(".footer-main-form__line-bg"));

       
        for (let i = 0;i < circleArr.length; i++) {
            circleArr[i].addEventListener("click", function() {

                if (circleArr[i - 1]) {
                    if (circleArr[i - 1].classList.contains("footer-main-form__circle_act")) {
                        circleArr[i].classList.add("footer-main-form__circle_act");
                        lineArr[i - 1].classList.add("footer-main-form__line-bg_act");

                        addFormBody()
                    }
                }
                if (circleArr[i + 1]) {
                    if (circleArr[i + 1].classList.contains("footer-main-form__circle_act") && circleArr[i - 1]) {
                        circleArr[i + 1].classList.remove("footer-main-form__circle_act");
                        lineArr[i].classList.remove("footer-main-form__line-bg_act");

                        removeFormBody()
                    } 
                    else if (circleArr[i + 1].classList.contains("footer-main-form__circle_act") && !circleArr[i - 1] && !circleArr[i + 2].classList.contains("footer-main-form__circle_act")) {
                        circleArr[i + 1].classList.remove("footer-main-form__circle_act");
                        lineArr[i].classList.remove("footer-main-form__line-bg_act");

                        removeFormBody()
                    }
                }

                function addFormBody() {
                    let data = circleArr[i].dataset.formId;
                    let formBody = form.querySelector(data)
                    formBody.classList.add("main-form__body_act")
                }
                function removeFormBody() {
                    let data = circleArr[i + 1].dataset.formId;
                    let formBody = form.querySelector(data)
                    formBody.classList.remove("main-form__body_act")
                }
            })
        }
    })
}

export default changeForm;