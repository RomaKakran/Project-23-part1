class ComputerBase{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        };
    
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
this.image = loadImage('./assests/base2.png');

    }

display(){
    var pos = this.body.postition;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    this.image(this.image,0,0,this.width,this.height);

    pop();
}
}