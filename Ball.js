class Ball{
    constructor(x, y, w, h){
        var options={
            "friction": 0.6,
            "restitution": 0.8,
            "density":0.5
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        this.image=loadImage("IMAGES/ball.png");
        
        World.add(world, this.body);
    
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0,0, this.width, this.height);
        pop();

    }

}