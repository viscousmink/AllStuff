// absolute value is abs()
// I can't really figure this out

function DDA(x0, y0, x1, y1) {
	var dx = x1 - x0;
	var dy = y1 - y0;
	
	loadPixels();
	
	var steps;
	
	if(abs(dx) > abs(dy)) {
		steps = abs(dx);
	} else {
		steps = abs(dy);
	}
	
	var Xinc = dx / steps;
	var Yinc = dy / steps;
	var x = x0;
	var y = y0;
	
	for(var i = 0; i<=steps; i++) {
		pixels[4 * (x +  ((y) * 500))] = 255;
		x += Xinc;
		y += Yinc;
	}
	updatePixels();
}

function setup() {
	createCanvas(500, 500);
	frameRate(1);
}

function draw() {
	background(0);
	
	var x0 = 100;
	var y0 = 50;
	var x1 = 200;
	var y1 = 200;
	
	DDA(x0, y0, x1, y1);
}