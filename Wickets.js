class Wickets{
    constructor(x, y, w, h){
        var options={
            "isStatic": true,
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w*2;
        this.height = h
        this.image=loadImage("IMAGES/wickets.png");

        World.add(world, this.body);
    
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();

    }
}