var yesorno;
function setup() {
  yesorno = Math.round(random(1,2));
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);  
  if (yesorno == 1){
  text("yes",400,200);
  }
  if (yesorno == 2){
    text("no",400,200);
    }
}