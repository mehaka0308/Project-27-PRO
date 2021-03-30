class Bob {
  constructor(x,y,radius){
    var options={
      isStatic:false,
      'friction':0.1,
      'density':1.4,
      'restitution':1.0
    }

    this.x = x;
    this.y = y;
    this.radius = radius ;

    this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
    World.add(world,this.body)
    }

  display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate (this.body.angle)
    fill("pink");
    ellipseMode(CENTER);
    ellipse(0,0,this.radius,this.radius)
    pop();
  }
}   