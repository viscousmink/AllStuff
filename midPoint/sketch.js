// absolute value is abs()
// I can't really figure this out
// Not even a little
// alright this is messed up a bit

//pixels[4 * (x + (y * 500))] = 255;

function swap(i, j) {
	var tmp = i;
	i = j;
	j = tmp;
}

function midpoint(x1, y1, x2, y2) {
	loadPixels();
	
	var dx,dy,d,incry,incre,incrne,slopegt1 = 0;
	dx = abs(x1-x2);
	dy=abs(y1-y2);
	
	if(dy>dx) {
		swap(x1, y1);
		swap(x2, y2);
		swap(dx,dy);
		slopegt1=1;
	}
	if(x1>x2) {
		swap(x1, x2);
		swap(y1, y2);
	}
	if(y1>y2) {
		incry=-1;
	} else {
		incry=1;
	}
	d = 2*dy-dx;
	incre=2*dy;
	incrne=2*(dy-dx);
	while(x1<x2){
		if(d<=0) {
			d+=incre;
		} else {
			d+=incrne;
			y1+=incry;
		}
		x1++;
		if(slopegt1) {
			pixels[4 * (y1 + (x1 * 500))] = 255;
		} else {
			pixels[4 * (x1 + (y1 * 500))] = 255;
		}
	
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
	
	midpoint(x0, y0, x1, y1);
}