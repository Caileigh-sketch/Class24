class Bird{
    constructor(x,y){
        var options = {restitution:1}
        this.body = Bodies.rectangle(x,y,50,50,options)
        this.width = 50
        this.height = 50
        World.add(world,this.body)

    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("red")
        strokeWeight(3)
        stroke("yellow")
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop()
    }
}
