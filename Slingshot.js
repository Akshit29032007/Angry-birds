class Slingshot {
    constructor(body1,point2){
        Option={
            bodyA :body1,
            pointB :point2,
            stiffness:0.5   
         }
         this.point2=point2;


         this.Sling=Constraint.create(Option)
        World.add(world,this.Sling)
    }
            
        

        fly(){
            this.Sling.bodyA=null;
        }

        display(){
            if(this.Sling.bodyA){
 var point1 = this.Sling.bodyA.position;
            var point =this.point2;
            
            strokeWeight(4);
            line(point1.x,point1.y,point.x,point.y)

                  
            }
                }   
        
    }