function hoverImg() {
    const portfolioCards = document.querySelectorAll(".card-portfolio");
    const galleryLinks = document.querySelectorAll(".gallery-link");

    portfolioCards.forEach(portfolioCard => {
        portfolioCard.addEventListener("mouseenter", function() {
            let allBg = document.querySelectorAll(".portfolio__bg")
            allBg.forEach(bg => {
                bg.classList.remove("portfolio__bg_act")
            })

            let dataBg = portfolioCard.dataset.img;

            let bg = document.querySelector(dataBg);
            if (bg) bg.classList.add("portfolio__bg_act")
        })
    })
    galleryLinks.forEach(link => {
        link.addEventListener("click", function() {
        
            localStorage.setItem("portfolio", link.dataset.category)
        })
    })
}

export default hoverImg;