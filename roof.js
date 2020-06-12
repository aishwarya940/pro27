class Roof {

    constructor() {

      var options = {
          isStatic: true
      }

      this.body = Bodies.rectangle(400, 100, 500, 100, options);
      this.body.position.x = 400;
      this.body.position.y = 100;
      this.width = 500;
      this.height = 100;

      World.add(world, this.body);

    }

    display(){
      rectMode(CENTER);
      fill("grey");
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
  };
 