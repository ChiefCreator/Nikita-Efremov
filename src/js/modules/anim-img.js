function animImg() {

    let imgs = document.querySelectorAll(".anim-img");
    if (imgs.length > 0) {
        animOnScroll();
        window.addEventListener("scroll", animOnScroll);
        function animOnScroll() {
            for (let i = 0;i < imgs.length; i++) {
                const animItem = imgs[i];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offsetTop(animItem);
                const animStart = 4;

                let animItenPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItenPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((window.scrollY > animItemOffset - animItenPoint) && (window.scrollY < (animItemOffset + animItemHeight))) {
                    if (animItem.classList.contains("anim-img-left")) {
                        if (animItem.dataset.delay) {
                            addDelay(animItem)
                        } else {
                            animItem.classList.add("anim-img-left_act");
                        }
                    }
                    if (animItem.classList.contains("anim-img-right")){
                        if (animItem.dataset.delay) {
                            addDelay(animItem)
                        } else {
                            animItem.classList.add("anim-img-right_act");
                        }
                    }
                } else {
                    animItem.classList.remove("anim-img-left_act");
                    animItem.classList.remove("anim-img-right_act");
                } 
            }
        }
    }

    function offsetTop(el) {
        const rect = el.getBoundingClientRect()
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        return rect.top + scrollTop;
    }

    function addDelay(el) {
            setTimeout(function() {
                if (el.classList.contains("anim-img-left")) {
                    el.classList.add("anim-img-left_act");
                }else if (el.classList.contains("anim-img-right")){
                    el.classList.add("anim-img-right_act");
                }
            },el.dataset.delay)
    }
}

export default animImg;