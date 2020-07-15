class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position
        push();
        ellipseMode(RADIUS);
        strokeWeight(5);
        stroke("White");
        fill(104,255,0);
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
    }
}