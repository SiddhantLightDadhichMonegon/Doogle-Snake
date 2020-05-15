var snake;
var foodX,foodY;

function setup(){
    createCanvas(400,400);

    snake = new Snake();

    foodLocation();

    frameRate(5);
}

function draw(){
    background("black");

    snake.display();
    
    fill("red");
    rect(foodX,foodY,20,20);

    snake.update();
    snake.gameOver();

    noStroke();
    //stroke("cyan");

    text("Score: " + snake.tailCount,20,350);


    if(snake.eat(foodX,foodY)){
        foodLocation();
    }

    // console.log(snake.x);

    
    
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        snake.xDir = 0;
        snake.yDir = -20;
    }

    if(keyCode === DOWN_ARROW){
        snake.xDir = 0;
        snake.yDir = 20;
    }

    if(keyCode === LEFT_ARROW){
        snake.xDir = -20;
        snake.yDir = 0;
    }

    if(keyCode === RIGHT_ARROW){
        snake.xDir = 20;
        snake.yDir = 0;
    }
}

function foodLocation(){
    foodX = floor(random(0,20))*20;
    foodY = floor(random(0,20))*20;
}
