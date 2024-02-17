function hoverImg() {
    const bg = document.querySelector(".portfolio__bg");
    const portfolioCards = document.querySelectorAll(".card-portfolio");

    portfolioCards.forEach(portfolioCard => {
        portfolioCard.addEventListener("mouseenter", function() {
            let dataBg = portfolioCard.dataset.img;
            bg.style.backgroundImage = `url("./../../img/${dataBg}.jpg")`;
        })
    })
}

export default hoverImg;