class Rubber {
    constructor(x, y, r) {
      var options = {
          'restitution':0.3,
          'friction':5.0,
          'density':1.0,
          
      }
      this.body = Bodies.circle(x, y, r, options);
      
      this.radius = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("white");
      fill("white");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };