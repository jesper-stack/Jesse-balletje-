class ball {
  constructor(x, y, w, h, vx, vy)
  this.x
  this.y
  this.w
  this.h
  this.vx
  this.vy
}

function setup() {
  createCanvas(400,300);

  ball 1= new Ball(30, 200, 50, 50, 5, 5)

  ball2= new Ball(120, 210, 50, 50, 3, 3)

  ball3= new Ball(200, 150, 50, 50, 1, 1)
}

function draw() {
  background(225); 

  ball1.draw();
  ball2.draw();
  ball3.draw();
}

	 