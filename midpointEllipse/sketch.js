// absolute value is abs()
// I can't really figure this out
// Not even a little

//pixels[4 * (x + (y * 500))] = 255;

function swap(i, j) {
	var tmp = i;
	i = j;
	j = tmp;
}

function midpointEllipse(x1, y1, x2, y2) {
	loadPixels();
	
	
	
	updatePixels();
}

function setup() {
	createCanvas(500, 500);
	frameRate(1);
}

function draw() {
	background(0);
	// floor(random(500));
	var x0 = floor(random(500));
	var y0 = floor(random(500));
	var x1 = floor(random(500));
	var y1 = floor(random(500));
	if(x0 > x1) {
		var tmp = x0;
		x0 = x1;
		x1 = tmp;
	}
	if(y0 > y1) {
		var tmp = y0;
		y0 = y1;
		y1 = tmp;
	}
	
	midpointEllipse(x0, y0, x1, y1);
}