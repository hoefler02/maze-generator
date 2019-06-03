function index(x,y) {
	if (x<0 || y<0 || x>cols-1 || y>rows-1) {
		return -1;
	}
	return x + y * cols;
}

function AroundClear(x,y) { // Shorten this function
	if(grid[index(x,y-1)] && 
	   grid[index(x+1,y-1)] && 
	   grid[index(x+1,y)] && 
	   grid[index(x+1,y+1)] && 
	   grid[index(x,y+1)] && 
	   grid[index(x-1,y+1)] && 
	   grid[index(x-1,y)] && 
	   grid[index(x-1,y-1)] && 
	   !grid[index(x,y-1)].visited && 
	   !grid[index(x+1,y-1)].visited && 
	   !grid[index(x+1,y)].visited && 
	   !grid[index(x+1,y+1)].visited && 
	   !grid[index(x,y+1)].visited && 
	   !grid[index(x-1,y+1)].visited && 
	   !grid[index(x-1,y)].visited && 
	   !grid[index(x-1,y-1)].visited) {
			return true;
	}
}

function Cell(x,y) {
	this.x = x;
	this.y = y;
	this.visited = false;
	
	this.checkNeighbors = function() {
		var neighbors = [];
		if (AroundClear(x,y-2) == true) {
			neighbors.push([grid[index(x,y-2)],"UP"]);
		}
		if (AroundClear(x+2,y) == true) {
			neighbors.push([grid[index(x+2,y)],"RIGHT"]);
		}
		if (AroundClear(x,y+2) == true) {
			neighbors.push([grid[index(x,y+2)],"DOWN"]);
		}
		if (AroundClear(x-2,y) == true) {
			neighbors.push([grid[index(x-2,y)],"LEFT"]);
		}
		if (neighbors.length > 0) {
			var r = floor(random(0, neighbors.length));
			return neighbors[r];
		} else {
			return undefined;
		}
	}

	this.show = function() {
		noStroke();
    	if (this == current) {
      		fill('#ffccdd');
    	} else if (!this.visited) {
      		fill(51);
    	} else {
      		fill('#aec6cf');
      	}
    	if (stack.length == 0) {
    		if (this.visited) {
				fill(255);
			}
    		if (this == start) {
				fill('#77dd77');
			}
			if (this == finish) {
				fill('#ff6961');
			}
    	}
    	rect(this.x * w, this.y * w, w, w);
	}
	this.bridge = function(a) {
		if(a[1] == "UP") {
			grid[index(x,y-1)].visited = true;
		}
		if(a[1] == "RIGHT") {
			grid[index(x+1,y)].visited = true;
		}
		if(a[1] == "DOWN") {
			grid[index(x,y+1)].visited = true;
		}
		if(a[1] == "LEFT") {
			grid[index(x-1,y)].visited = true;
		}
	}
}






