const img = [
    "christmas.webp", "forest.webp", "moon.webp", 
    "rose.webp", "nature.webp", "quiet.webp"
]

const chooseImg = img[Math.floor(Math.random() * img.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chooseImg}`;

document.body.appendChild(bgImg);