var cols = 10;
var rows = 10;
var grid = new Array(cols);
var openSet = [];
var closedSet = [];
var start;
var end;
var w, h;
function Spot(i, j) {
  this.x = i;
  this.y = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.show = function() {
    fill(255);
    stroke(0);
    react(this.x * w, this.y *h, w -1, h -1);
  }
}
function setup() {
  createCanvas(400, 400);
console.log("A*");
w = width / cols;
h = height /rows;
for (var i = 0; i < cols ; i++) {
  grid[i] = newArray(rows);
}
 for (var i = 0; i < cols; i++) {
   for (var j = 0; j < rows; j++) {
     grid[i][j] = new Spot(i, j);
   }
 }
start = grid[0][0];
end = grid[cols - 1] [rows - 1];
start.wall = false;
end.wall = false;

opetSet.push(start);
}

function draw() {
  if (openSet.length > 0) {
var winner = 0;
for (var i = 0; i < openSet.length; i++)
if (opetSet[i].f < openSet[winner].f)
winner = 1;
  }
  }
  var current = openSet[winner];
  if (current === end) {
    noLoop();
    console.log("DONE!")
  }
  removeFromArray(openSet, current);
  closedSet.push(current);
  var neighbors = current.neighbors;
  for (var i = 0; i < neighbors.length; i ++) {
  var neighbors = neighbors[i];
  if (!closedSet.includes(neighbors) && !neighbors.wall) {
    var tempG = current.g + heuristic(neighbors, current);
    var newPath = false;
    if (openSet.includes(neighbor)) {
      if (tempG< neighbor.g) {
        neighbor.g = tempG;
        newPath = true;
      }
    } else {
      neighbor.g = tempG;
      newPath = true;
      opetSet.push(neighbor);
    }
    if (newPath) {
      neighbor.h = heuristic(neighbor, end);
      neighbor.f = neighbor.g + neighbor.h;
      neighbor.previous = current;
        }
      } else {
    console.log("No solution") ;
    noLoop();
  }
  background(255);
  for (var i = o; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
  for (var i = 0; i < closedSet.length; i++) {
    closedSet[i].show(color(255, 0, 0, 50));
  }
  for (var i = 0; i < openSet.length; i++) {
    openSet[i].show(color(0, 255, 0, 50));
  }
  path = [];
  var temp = current;
  path.push(temp);
  while (temp.previous) {
    path.push(temp.previous);
    temp = temp.previous;
  }
  noFill();
  stroke(255, 0, 200);
  strokeWeight (w / 2);
  beginShape();
  for (var i = 0; i < path.length; i++) {
    vertex(path[i].i * w + w / 2, path[i].j * h + h / 2);
  }
  endShape();
}
