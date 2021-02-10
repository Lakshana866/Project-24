class Hammer {
  constructor(x, y) {
    var options = {
        'restitution':0.5,
        'friction':1.0,
        'density':2.0
    }
    this.body = Bodies.rectangle(x, y, 40, 100, options);
    this.width = 40;
    this.height = 100;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    pos.x = mouseX
    pos.y = mouseY
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(3);
    stroke("brown");
    fill("orange");
    rect(0, 0, this.width, this.height);
    pop();
  }
};