class Ground{
    constructor(x, y, w, h){
        var options={
            "isStatic": true,
        }
        this.ground = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h
        World.add(world, this.ground);
    
    }
    display(){
        push();
        // USED FILL CODE FROM COLOR PICKER
        fill("#A76040");
        rectMode(CENTER);
        rect(this.ground.position.x, this.ground.position.y, this.width, this.height);
        pop();

    }

}