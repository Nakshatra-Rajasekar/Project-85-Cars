canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
Cars_width = 120;
Cars_height = 70;
Car1_x = 10;
Car1_y = 10;
Car2_x = 10;
Car2_y = 100;
background_image = "racing.jpg";
Car1_image = "Car1.png";
Car2_image = "download.png";

function add() {
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    Car1_imgTag = new Image();
    Car1_imgTag.onload = uploadcar1;
    Car1_imgTag.src = Car1_image;

    Car2_imgTag = new Image();
    Car2_imgTag.onload = uploadcar2;
    Car2_imgTag.src = Car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(Car1_imgTag, Car1_x, Car1_y, Cars_width, Cars_height);
}

function uploadcar2() {
    ctx.drawImage(Car2_imgTag, Car2_x, Car2_y, Cars_width, Cars_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            car1_up();
            console.log("up");
         }
    if(keyPressed == '40')
    {
       car1_down();
       console.log("down");
    }
    if(keyPressed == '37')
    {
       car1_left();
       console.log("left");
    }
    if(keyPressed == '39')
    {
       car1_right();
       console.log("right");
    }

        if(keyPressed == '87')
        {
            car2_up();
            console.log("w");
         }
    if(keyPressed == '83')
    {
       car2_down();
       console.log("s");
    }
    if(keyPressed == '65')
    {
       car2_left();
       console.log("a");
    }
    if(keyPressed == '68')
    {
       car2_right();
       console.log("d");
    }
}




function car1_up(){
    if(Car1_y>=0)
    {
        Car1_y -= 10;
        console.log("When up arrow is pressed = " + Car1_x + " - " + Car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left(){
    if(Car1_x>=0)
    {
        Car1_x -= 10;
        console.log("When left arrow is pressed, x = " + Car1_x + " | y = " + Car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down(){
    if(Car1_y<=500)
    {
        Car1_y += 10;
        console.log("When down arrow is pressed, x = " + Car1_x + " | y - " + Car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right(){
    if(Car1_x<=700)
    {
        Car1_x += 10;
        console.log("When right arrow is pressed, x = " + Car1_x + " | y - " + Car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}



function car2_up(){
    if(Car2_y>=0)
    {
        Car2_y -= 10;
        console.log("When up arrow is pressed = " + Car2_x + " - " + Car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function car2_left(){
    if(Car2_x>=0)
    {
        Car2_x -= 10;
        console.log("When left arrow is pressed, x = " + Car2_x + " | y = " + Car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function car2_down(){
    if(Car2_y<=500)
    {
        Car2_y += 10;
        console.log("When down arrow is pressed, x = " + Car2_x + " | y - " + Car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}

function car2_right(){
    if(Car2_x<=700)
    {
        Car2_x += 10;
        console.log("When right arrow is pressed, x = " + Car2_x + " | y - " + Car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
        }
}