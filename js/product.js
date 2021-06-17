function add_like() {
    const heart = [...document.getElementsByClassName("fa-heart")];

    heart.forEach((item) => {
        item.addEventListener("click", () => {
            changeHeart(item);
        })
    })

    function changeHeart(e) {
        e.classList.toggle("fas");
        e.classList.toggle("far");
    }
}