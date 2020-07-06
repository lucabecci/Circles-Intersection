let bubbles = [];

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 50; i++ ){
    let x = random(width);
    let y = random(height);
    let r = random(10,20);
    bubbles[i] = new Bubble(x,y,r);
  }
}

//DRAW MAIN
function draw() {
  background(0);

  for(let b of bubbles){
    b.show();
    b.move();
    let overlapping = false;
    for(let other of bubbles){
      if(b !== other && b.intersects(other)){
        overlapping = true;
      }
      if(overlapping === true){
        b.changeColor(255);
      }else {
        b.changeColor(100)
      }
    }
  }
}
//DRAW MAIN


class Bubble{
  constructor(tempX,tempY,tempR){
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
    this.z = 100
  }

  intersects(other){
    let d = dist(this.x,this.y,other.x,other.y);
    return (d < this.r + other.r)

  }

  changeColor(c){
    this.z = c
  }

  show(){
    noFill()
    strokeWeight(4);
    stroke(this.z);
    ellipse(this.x,this.y,this.r * 2);
  }

  move(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }
}
