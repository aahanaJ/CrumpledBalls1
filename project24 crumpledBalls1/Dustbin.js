class dustbin{
    constructor(x,y){
    var options = {
        isStatic : true
    }

    this.body = Bodies.rectangle(x,y,200,213,options);
    this.width = 200;
    this.height = 213;
    this.image = loadImage("sprites/dustbin.png");
    World.add(world,this.body);
}

display(){
    var pos = this.body.position;

    imageMode(CENTER);
    fill("white");
    image(this.image,pos.x,pos.y,this.width,this.height);
}
}