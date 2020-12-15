class Ball{
    constructor(x,y,radius){
        var options = {
            'restitution':0.3,
            'friction':0,
            'density':1.2,
            'isStatic': false
        }

        this.image = loadImage("sprites/paper.jpg");
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,radius,options);

       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);

        stroke("purple");
        fill("purple");
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}