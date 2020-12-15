class Ball{
    constructor(x,y,radius){
        var options = {
            restitution : 0.1,
            friction : 0.5,
            density : 2.0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        
    
        World.add(world,this.body)
    }
        display(){
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            fill("blue");
            ellipse(0,0,this.width,this.height)
            pop();
        }
    }