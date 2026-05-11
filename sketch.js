function setup() {
  createCanvas(windowWidth, 2000);
}

function draw() {
  let color1 = color(255, 0, 0); // Red
  let color2 = color(0, 0, 255); // Blue
  
  // Loop through the height of the canvas
  for (let y = 0; y < height; y++) {
    // Map the loop variable y to a 0-1 range for lerpColor
    let n = map(y, 0, height, 0, 1);
    let newColor = lerpColor(color1, color2, n);
    stroke(newColor);
    line(0, y, width, y); // Draw a 1-pixel line
  }
}
