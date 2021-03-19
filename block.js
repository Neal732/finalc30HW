class block {
    constructor(x,y,width,height) {
      var options = {
          'restitution': 0.5,
          'friction': 1
      }
      this.Visibility=255
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<2.2){
        var pos = this.body.position;
        var angle = this.body.angle
        push();
      translate(pos.x, pos.y)
      rotate(angle)
      rectMode(CENTER);
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
      World.remove(world,this.body)
      var pos = this.body.position;
      var angle = this.body.angle
      push();
      translate(pos.x, pos.y)
      rotate(angle)
      this.Visibility-=5
      tint(255,this.Visibility)
      pop();
      }
      }
      };