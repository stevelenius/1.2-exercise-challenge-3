const color = prompt('Please enter a fill color. When you click and move the mouse, the circles you paint will be that color. (If you get tired of that color, just refresh your browser window to choose another color.)')

function setup() {
  createCanvas(800, 600);
}

function draw() {
  if (mouseIsPressed) {
  	fill(color);
  	ellipse(mouseX,mouseY, 80, 80);
  } else {
  	fill(0);
  }
}
