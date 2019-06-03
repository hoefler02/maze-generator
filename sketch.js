// Maze Generator V_2.0 Coded by Michael Hoefler
// Recursive Backtracking Algorithm

var cols, rows;
var w = 25;
var grid = [];
var stack = [];
var current;
var start;
var finish;

function setup() {
	createCanvas(document.body.clientWidth,document.body.clientHeight);
	frameRate(300);
	cols = floor(width/w);
	rows = floor(height/w);

	for (var y = 0; y < rows; y++) {
		for (var x = 0; x < cols; x++) {
			var cell = new Cell(x,y);
			grid.push(cell);
		}
	}

	current = grid[index(1,1)];
	start = grid[index(1,1)];
	finish = grid[index(cols-2,rows-2)];
}

function draw() {
	background(51);
	for (var i = 0; i < grid.length; i++) {
		grid[i].show();
	}
	current.visited = true;
	var check = current.checkNeighbors();
	if (check) {
		var next = check[0];
		current.bridge(check);
		current = next;
		stack.push(current);
	} else if (stack.length > 0) {
		current = stack.pop();
	}
}