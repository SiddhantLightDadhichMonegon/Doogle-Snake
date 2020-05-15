class Snake{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.xDir = 20;
        this.yDir = 0;
        this.snakeXPosition = [];
        this.snakeYPosition = [];
        this.tailCount = 1;
    }

    display(){

        fill("white");
        for(var i=0;i<this.tailCount;i = i+1){
            rect(this.snakeXPosition[i],this.snakeYPosition[i],20,20);
        }
    }

    update(){
        this.x = this.x+this.xDir;
        this.y = this.y+this.yDir;
        
        if(this.snakeXPosition.length>=this.tailCount){
            this.snakeXPosition.shift();
            this.snakeYPosition.shift();
        }
        this.snakeXPosition.push(this.x);
        this.snakeYPosition.push(this.y);
    }

    eat(x,y){
        if(x === this.x&& y === this.y){
            this.tailCount ++;
            return true;

        }
        else{
            return false;
        }
    }

    gameOver(){

        for(var j = 0;j<this.tailCount-1;j++){
            if(this.x === this.snakeXPosition[j]&&this.y === this.snakeYPosition[j]){
                background("red");
                this.xDir = 0;
                this.yDir = 0;
            }
        }

        if(this.x>400||this.x<0||this.y>400||this.y<0){
            background("red");
            this.xDir = 0;
            this.yDir = 0;
        }
        
    }
    
}