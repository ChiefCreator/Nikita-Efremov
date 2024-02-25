function popUpToggle() {
    let buttonMains = document.querySelectorAll(".toggle-pop-up-main");

    let mainPopUpForm = document.querySelector(".pop-up");
    let btnCloseMainForm = mainPopUpForm.querySelector(".main-form__close");

    let burger = document.querySelector(".burger-btn");
    let mobileMenu = document.querySelector(".mobile-menu");
    let btnCloseMobileMenu = mobileMenu.querySelector(".mobile-menu__close");

    let over = document.querySelector(".over");
    let body = document.querySelector("body");
    const timeout = 500;
    let lockPadding = document.querySelectorAll(".lock-padding")

    buttonMains.forEach(buttonMain => {
        buttonMain.addEventListener("click", function() {
            mainPopUpForm.classList.add("pop-up_open");
            over.classList.add("over_open");
            bodyLock();
        })
    })
    btnCloseMainForm.addEventListener("click", function() {

        mainPopUpForm.classList.remove("pop-up_open");

        if (!mobileMenu.classList.contains("mobile-menu_open")) {
            over.classList.remove("over_open");
            bodyunLock()
        }
    })
    over.addEventListener("click", function() {
        mainPopUpForm.classList.remove("pop-up_open");
        over.classList.remove("over_open");
        bodyunLock()
    })
    burger.addEventListener("click", function() {
        mobileMenu.classList.add("mobile-menu_open");
        over.classList.add("over_open");
        bodyLock();
    })
    btnCloseMobileMenu.addEventListener("click", function() {
        mobileMenu.classList.remove("mobile-menu_open");
        over.classList.remove("over_open");
        bodyunLock()
    })

    function bodyLock() {

        const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

        if (lockPadding.length > 0) {
            lockPadding.forEach(el => {
                el.style.paddingRight = lockPaddingValue;
            })
        }

        body.classList.add("body_lock");
        body.style.paddingRight = lockPaddingValue;
    }
    function bodyunLock() {
        setTimeout(function() {

            if (lockPadding.length > 0) {
                lockPadding.forEach(el => {
                    el.style.paddingRight = 0;
                })
            }

            body.style.paddingRight = 0;
            body.classList.remove("body_lock");
        },timeout);
    }
}

export default popUpToggle;