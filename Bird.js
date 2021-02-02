class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");

    this.image1=loadImage("smoke.png");
    this.path=[];
  }

  display() {
  
    super.display();
    if(this.body.position.x>220 && this.body.velocity.x > 10){
      var position=[this.body.position.x,this.body.position.y]
      this.path.push(position);
    }

    for(var i=0 ; i<this.path.length;i=i+1){
      image(this.image1,this.path[i][0],this.path[i][1])
    }
  }
}


/*
path = [[x1,y1],[x2,y2],[x3,y3]]
x1 = path[0][0]
x2 = path [1][0]
x3 = path[2][0]

y1 = path[0][1]
y2 = path[1][1]
y3 = path[2][1]
*/