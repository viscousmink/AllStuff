// absolute value is abs()
// I can't really figure this out
// Not even a little

function bres(x1, y1, x2, y2) {
	loadPixels();
	
	var m_new = 2 * (y2 - y1);
	var slope_error_new = m_new - (x2 - x1);
	
	var y = y1
	for(var x = x1; x <= x2; x++) {
		pixel[4 * (x  + (y * 500))] = 255;
		
		slope_error_new += m_new;
		
		if(slope_error_new >= 0) {
			y++;
			slope_error_new -= 2 * (x2 - x1);
		}
	}
	
	updatePixels();
}

function setup() {
	createCanvas(500, 500);
	frameRate(1);
}

function draw() {
	background(0);
	
	var x0 = 0;
	var y0 = 0;
	var x1 = 100;
	var y1 = 100;
	
	bres(x0, y0, x1, y1);
}