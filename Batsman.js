class Batsman{
    constructor(x, y, w, h){
        var options={
            "isStatic": true,
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w*2;
        this.height = h*2;
        this.image=loadImage("IMAGES/batsman.png");

        World.add(world, this.body);
    
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x - 40, this.body.position.y - 50, this.width, this.height);
        pop();

    }
}