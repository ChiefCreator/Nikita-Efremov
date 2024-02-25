function spollers() {
    let spollers = document.querySelectorAll(".spoller");
    spollers.forEach(spoller => {
        spoller.addEventListener("click", function() {
            
            spoller.classList.toggle("spoller_open");
            spoller.querySelector(".spoller__arrow").classList.toggle("spoller__arrow_act");
        })
    })
}

export default spollers();