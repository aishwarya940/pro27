class Bob {

    constructor(x, y) {

      var options = {
          isStatic:false,
          restituition:0.4,
          friction:0.4,
          density:1.2
      }
      
      this.body = Bodies.circle(x, y, 50, options);
      this.radius = 50;
      
      World.add(world, this.body);

    }

    display(){
      push();
      translate(this.body.position.x,this.body.position.y)
      ellipseMode(CENTER);
      fill("pink");
      ellipse(0,0, this.radius);
      pop();
    }
    
  };
  