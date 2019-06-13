
var w = 800;
var h = 800;
var height = 0;
var width = 0;

function setup() {
	createCanvas(w, h, WEBGL);
	frameRate(60);
}

function draw() {
	if(keyIsPressed == true) {
		if(key == 32) {
			height++;
		} else if(key == 16) {
			height--;
		}
	}
	background(120);
	fill(255);
	
	push();
	rotateX(frameCount*0.01);
	rotateY(frameCount*0.01);
	box(200);
	pop();
	
	push();
	//translate(width, height*10);
	rotateX((frameCount+12/50)*0.05);
	rotateY((frameCount/2)*0.05);
	torus(220, 40);
	pop();
	
	beginShape();
	vertex(1, 1, 1);
	vertex(0, 0, 0);
	endShape();
}