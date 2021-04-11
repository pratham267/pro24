class paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Matter.Bodies.circle(x,y,[options],[3])
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos,y);
        rectMode(CENTER);
        fill(255,0,0)
        Pop();
        }
}