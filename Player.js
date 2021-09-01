class Player{
    constructor(x,y,width,height,angle){
        var options = {
            isStatic: true
        };
    
this.width = width;
this.height = height;
this.image = loadImage('./assests/player.png');
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