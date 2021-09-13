var x = 0;
var y = 200;
var speed = 3;
var speedY = 4;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);
	ellipse(x, y, 40, 40);
	x += speed;
	y += speedY;

	if (x > width || x < 0) {
		speed *= -1;
	}
		
	if (y > height || y < 0) {
		speedY *= -1;
	}



}

	