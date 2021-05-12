class Sling{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            "stiffness": 0.02,
            "length": 10
        }
        this.pointB = pointB;
        this.body = Matter.Constraint.create(options);
        World.add(world, this.body);

    }
    fly(){
        this.body.bodyA = null;
    }

    
        attach(bodyA){
            this.body.bodyA = bodyA;
        }

    display(){
        if(this.body.bodyA){
            push();
            line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.pointB.x, this.pointB.y);
            pop();
    
        }
       
    }

}