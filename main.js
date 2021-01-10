canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 100;
car1_height = 90;

car2_width = 100;
car2_height = 90;


background_image = "racing.jpg";
car1_image = "car1.png";
car2_image = "car2.png";

car1_x = 10;
car1_y = 10;


car1_x = 10;
car1_y = 10;

function start() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground();
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadrover();
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadrover();
    car2_imgTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
    }

    if (keyPressed == '40') {
        down();
    }

    if (keyPressed == '37') {
        left();
    }

    if (keyPressed == '39') {
        right();
    }
}

function up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        uploadBackground();
        uploadrover();
    }
}

function down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        uploadBackground();
        uploadrover();
    }
}

function left() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if (car2_y <= 500) {
        car2_y = car2_y + 10;
        uploadBackground();
        uploadrover();
    }
}