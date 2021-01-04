class SlingShot {
    constructor(bodyA,pointB){

        //the options for the chain
        var Options = {
            bodyA  : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }

        this.pointB= pointB;
        //created chain from the Constraint class of Matter
        this.sling = Constraint.create(Options);
        //Added the chain to the main world
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;  
    }

    display() {
        if (this.sling.bodyA){
            //namespacing
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //to draw a link between the two constrained bodies
            strokeWeight(4)
            line (pointA.x,pointA.y,pointB.x,pointB.y);

        }
    }
}