let mySound;
let started = false; // Audio Loop

function preload() {
  mySound = loadSound("amoreterno.mp3");
}

function setup() {
  let canvas= createCanvas(windowWidth, 4000);
  canvas.parent('container1');
  canvas.style('position', 'absolute');
  canvas.style('z-index', '-1');
}

//Function to loop and play Music, SHOUT ELLIE
function mousePressed() {
  // unlock audio context on user gesture
  userStartAudio();
  if (!started) {
    mySound.loop();
    started = true;
  } else {
    // optional toggle
    if (mySound.isPlaying()) mySound.pause();
    else mySound.loop();
  }
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
