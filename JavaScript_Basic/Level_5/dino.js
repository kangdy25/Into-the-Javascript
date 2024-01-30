let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 100;


let img1 = new Image();
img1.src = 'cactus.png';

let img2 = new Image();
img2.src = 'dinosaur.png';

let ground = {
    x : 0,
    y : 200,
    width : 1080,
    height : 3,
    draw() {
        ctx.fill('grey');
    }
}

let dino = {
    x : 70,
    y : 200,
    width : 40,
    height : 50,
    draw() {
        ctx.fillStyle = 'cyan';
        // ctx.fillRect(this.x+5, this.y, this.width, this.height);
        ctx.drawImage(img2, this.x, this.y, 60, 60)
    }
}

class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 30;
        this.height = 60;
    }
    draw() {
        ctx.fillStyle = 'green';
        // ctx.fillRect(this.x+10, this.y, this.width,  this.height);
        ctx.drawImage(img1, this.x, this.y, 50, 60)
    }
}

let timer = 0;
let cactuses = [];
let jumpSwitch = false;
let jumpTimer = 0;
let animation;


// 충돌
function collision(dino, cactus) {
    let xCollision = cactus.x+10 - (dino.x - 5 + dino.width);
    let yCollision = cactus.y + 10 - (dino.y - 20 + dino.height);
    if (xCollision < 0 && yCollision < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animation)
    }
}

function Frame() {
    animation = requestAnimationFrame(Frame);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // dino.x++;
    if (timer % 140 === 0) {
        let cactus = new Cactus();
        cactuses.push(cactus);
        cactus.draw();
    }
    cactuses.forEach((a, i, o)=>{
        if (a.x < 0) {
            o.splice(i, 1)
        }
        collision(dino, a);
        a.x  -= 3;
        a.draw();
    })
    if (jumpSwitch == true) {    
        dino.y -= 8;
        jumpTimer++;
    }
    if (jumpSwitch == false) {
        if (dino.y < 200) {
            dino.y += 4;
        }
    }
    if (jumpTimer > 20) {
        jumpSwitch = false;
        jumpTimer = 0;
    }
    dino.draw(); 
}

Frame();


document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        jumpSwitch = true;
    }
})