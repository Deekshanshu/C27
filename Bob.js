class Bob {
    constructor(x, y, r) {
      var options = {
          'frictionAir':0.005,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,r, options);
      this.r = r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill(255);
      ellipse(0, 0, this.r,this.r);
      pop();
    }
  };