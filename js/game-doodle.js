document.getElementById("gamebutton").onclick = function () {
  document.getElementById("game").style.display = "block";
  start();
};

let canvas = document.getElementById("canv");
let c = canvas.getContext("2d");

let mouseX;
let mouseY;

window.addEventListener("mousemove", function (e) {
  mouseX = e.x;
  mouseY = e.y;
});

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 30;
    this.h = 60;
    this.ySpeed = 3;
  }
  show() {
    c.fillStyle = "red";
    c.fillRect(this.x, this.y, this.w, this.h);
  }
  update() {
    this.x = mouseX - withwindow / 4;
  }
}

class Platform {
  constructor(x, y) {
    this.x = x;
    this.y = y + 1000;
    this.w = 80;
    this.h = 10;
    this.ySpeed = 3;
    this.wasAbove = false;
    this.visible = true;
  }
  show() {
    if (this.visible) {
      c.fillStyle = "green";
      c.fillRect(this.x, this.y, this.w, this.h);
    }
  }
  update() {
    if (this.y > 1000) {
      this.visible = false;
    }

    if (p.y < this.y - 61) {
      this.wasAbove = true;
    }
    this.y -= p.ySpeed * 0.01;
    p.ySpeed += gravity;
    if (
      p.x < this.x + this.w &&
      p.x + p.w > this.x &&
      p.y < this.y + this.h &&
      p.y + p.h > this.y &&
      this.wasAbove &&
      this.visible
    ) {
      p.ySpeed = -800;
    }
    if (this.y < 200 && this.visible === false) {
      console.log("game over");
      gameover = true;
    }
  }
}

let withwindow = document.documentElement.clientWidth;
console.log(withwindow);
let gameover = false;
let p;
let gravity = 0.1;
let platforms = [];
let platformY = 600;
let intervald;

function start() {
  p = new Player(300, 400);

  for (let i = 0; i < 100; i++) {
    let pf = new Platform(Math.floor(Math.random() * 600), platformY);
    platforms.push(pf);
    platformY -= 100;
  }
  if (!intervald) {
    intervald = setInterval(update, 10);
  }
}

function update() {
  // background
  c.fillStyle = "lightblue";
  c.fillRect(0, 0, 600, 800);
  //player
  p.show();
  p.update();
  // platforms
  for (let i = 0; i < platforms.length; i++) {
    platforms[i].show();
    platforms[i].update();
  }
  if (platforms[98].y > 400) {
    clearInterval(intervald);
    intervald = null;
    alert("Good Game");
    return (
      (document.getElementById("game").style.display = "none"),
      (document.getElementById("gamebutton").style.display = "none")
    );
  }

  if (gameover === true) {
    clearInterval(intervald);
    intervald = null;
    alert("Game Over");
    return (
      (document.getElementById("game").style.display = "none"),
      (document.getElementById("gamebutton").style.display = "none")
    );
  }
}
