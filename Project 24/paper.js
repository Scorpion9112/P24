class Paper{
    constructor(x, y,r) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':.5,
            'density':1.2
        }
        this.radius = r
        this.body = Bodies.circle(x, y,this.radius, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        fill("pink")
        ellipse(0,0,this.radius,this.radius);
        pop();
      }
}