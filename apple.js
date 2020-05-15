class Apple{
    constructor(){
        this.x = Math.round(random(20,380));
        this.y = Math.round(random(20,380));
    }

    display(){
        fill("red");
        rect(this.x,this.y,20,20);
    }

    destroy(){
        this.x = Math.round(random(20,380));
        this.y = Math.round(random(20,380));
    }
}

