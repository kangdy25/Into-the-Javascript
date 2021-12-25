const img = [
    "christmas1.jpg", 
    "christmas2.webp",
    "christmas3.webp",
    "christmas4.webp"
    
]

const chooseImg = img[Math.floor(Math.random() * img.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chooseImg}`;

document.body.appendChild(bgImg);