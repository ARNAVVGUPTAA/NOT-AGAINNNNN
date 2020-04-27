class a {
    constructor(x){
        var options={
            restitution:0.3,
        }
        this.body = Bodies.rectangle(x,0,5,5,options);
        this.width = 5;
        this.height = 5;
        this.image = loadImage("LETTERS/A.png")
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();        
    }
}