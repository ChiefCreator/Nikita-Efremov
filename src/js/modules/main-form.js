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

                        form.querySelectorAll(".main-form__body").forEach(body => {
                            body.classList.remove("main-form__body_act")
                        })

                        addFormBody()
                    }
                }
                if (circleArr[i + 1]) {
                    if (circleArr[i + 1].classList.contains("footer-main-form__circle_act") && circleArr[i - 1]) {
                        circleArr[i + 1].classList.remove("footer-main-form__circle_act");
                        lineArr[i].classList.remove("footer-main-form__line-bg_act");

                        form.querySelectorAll(".main-form__body").forEach(bodyForm => {
                            bodyForm.classList.remove("main-form__body_act")
                        })

                        addFormBody()
                    } 
                    else if (circleArr[i + 1].classList.contains("footer-main-form__circle_act") && !circleArr[i - 1] && !circleArr[i + 2].classList.contains("footer-main-form__circle_act")) {
                        circleArr[i + 1].classList.remove("footer-main-form__circle_act");
                        lineArr[i].classList.remove("footer-main-form__line-bg_act");

                        form.querySelectorAll(".main-form__body").forEach(bodyForm => {
                            bodyForm.classList.remove("main-form__body_act")
                        })

                        addFormBody()
                    }
                }

                function addFormBody() {
                    let data = circleArr[i].dataset.formId;
                    let formBody = form.querySelector(data)
                    formBody.classList.add("main-form__body_act")
                }
            })
        }
    })
}

export default changeForm;