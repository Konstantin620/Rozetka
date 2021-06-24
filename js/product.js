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
function add_star() {
    const star = [...document.getElementsByClassName("fa-star")];
    star.forEach((item, is) => {
        item.addEventListener("click", () => {
            changeStar(is);
        })
    })

    function changeStar(item){
        for (let i = 0; i <= 4; i++){
            star[i].classList.remove("fas");
            star[i].classList.add("far");
        }
        for (let i = 0; i <= item; i++){
            star[i].classList.toggle("fas");
            star[i].classList.toggle("far");
        }
    }

}