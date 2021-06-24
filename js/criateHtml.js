const header = document.querySelector(".header");
console.log(header);
const h1 = document.createElement("h2");
const content = document.querySelector(".content")
h1.innerHTML = "fffffffuuuuu";
const h2 = h1.cloneNode(true);
header.append(h1);
content.append(h2);
console.log(h1);




const imgList = document.querySelector(".imgList");
const img = document.createElement("img");
img.src = "img.jpg"
imgList.append(img);











