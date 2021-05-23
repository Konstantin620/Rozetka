const img_bd = ["BMV.jpg", "img.jpg","slide3.jfif", "slider4.jpg"];
let move = 0;
function slider(coordination) {

    const slider_block = document.querySelector(".slider");
    if(move >= img_bd.length-1 && coordination === 1){
        move=0;
    }else if(move <= 0 && coordination === 0){
        move = img_bd.length;
    }
    if(coordination === 0){
        move--;
    }else{
    move++;
    }
    slider_block.style.background = "url(./"+img_bd[move]+")";
    console.log(move);
}














