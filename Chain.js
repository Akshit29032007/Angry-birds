class Chain {
    constructor(body1,body2){
        Option={
            bodyA :body1,
            bodyB :body2,
            stiffness:0.5   
         }
         this.chain=Constraint.create(Option)
        World.add(world,this.chain)
            
        
        }

        display(){
            var point1 = this.chain.bodyA.position;
            var point =this.chain.bodyB.position;
            strokeWeight(4);
            line(point1.x,point1.y,point.x,point.y)

                  }
        
    }