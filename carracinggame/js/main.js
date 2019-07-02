let start_button = document.getElementById('start-button');
road = document.getElementById('road');
lines = document.getElementById('lines');
lines2 = document.getElementById('lines2');
lane1 = document.getElementById('lane1');
lane2 = document.getElementById('lane2');
lane3 = document.getElementById('lane3');
scoreheader = document.getElementById('score');
geardom = document.getElementById('gear');
car1 = document.getElementById('car1');
car2 = document.getElementById('car2');
car3 = document.getElementById('car3');
playerCar = document.getElementById("mycar");
gear = 1;

// Start button to start the game
start_button.addEventListener("click", function() {
    road.style.marginTop = "0px";
    road.style.transition = "1s all ease-out";
    scoreheader.innerHTML = "Score :";
    geardom.innerHTML = "GEAR : " + gear;
    setInterval(updateScore, 500);
    setInterval(car1down, 20);
    setInterval(car2down, 30);
    setInterval(car3down, 50);
});

//start button ends here
//Car Speed Variables
let car1top = Math.floor(Math.random() * (-400 - (-777) + 1)) + (-777); //-400 max //-600 min for range
let car2top = Math.floor(Math.random() * (-400 - (-888) + 1)) + (-888);
let car3top = Math.floor(Math.random() * (-277 - (-777) + 1)) + (-777);
let flag = 2;
document.onkeydown = function(event) {

    switch (event.key) {
        case 'ArrowUp':
            gear = gear + 1;
            updateGear(gear);


            break;

        case 'ArrowDown':
            gear = gear - 1;
            decreaseGear(gear);
            break;


        case 'ArrowRight':
            if (flag == 2) {
                playerCar.style.marginLeft = "160px";
                flag = 3;
            } else if (flag == 1) {
                playerCar.style.marginLeft = "-15px";
                flag = 2;

            }

            break;


        case 'ArrowLeft':
            if (flag == 3) {
                playerCar.style.marginLeft = "-15px";
                flag = 2;
            } else if (flag == 2) {
                playerCar.style.marginLeft = "-160px";
                flag = 1;
            } else if (flag == 1) {
                flag = 1;

            }

            break;
    }
};



function car1down() {
    car1top = car1top + gear * 0.3;
    car1.style.marginTop = car1top + 'px';
    let car1Position = offset(car1);
    let playerCarPOsition = offset(playerCar);
    if (car1Position.top > playerCarPOsition.top - 150 && flag == 1) {
        window.location.reload(true);



    }
    if (car1top > 500 && flag != 1) {
        car1top = Math.floor(Math.random() * (-289 - (-600) + 1)) + (-600);

    }


}

function car2down() {
    car2top = car2top + gear * 0.5;
    car2.style.marginTop = car2top + 'px';
    let car2Position = offset(car2);
    let playerCarPOsition = offset(playerCar);
    console.log(car2Position.top, car2Position.left);
    console.log(playerCarPOsition.top, playerCarPOsition.left);
    if (car2Position.top > playerCarPOsition.top - 150 && flag == 2) {
        window.location.reload(true);

    }
    if (car2top > 500 && flag != 2) {
        car2top = Math.floor(Math.random() * (-250 - (-700) + 1)) + (-700);
    }

}

function car3down() {
    car3top = car3top + gear * 1.3;
    car3.style.marginTop = car3top + 'px';
    let car3Position = offset(car3);
    let playerCarPOsition = offset(playerCar);

    if (car3Position.top > playerCarPOsition.top - 150 && flag == 3) {
        window.location.reload(true);


    }
    if (car3top > 500 && flag != 3) {
        car3top = Math.floor(Math.random() * (-400 - (-800) + 1)) + (-800);
    }

}


setInterval(moveLines, 150);
setInterval(moveLines2, 150);


let score = 0;

function updateScore() {
    scoreheader.innerHTML = "SCORE : " + score;
    score = score + 5;
}

let toproad = -400;

function moveLines() {

    lines.style.marginTop = toproad + "px";
    toproad = toproad + 10;
    if (toproad == 0) {
        toproad = -300;
    }

}
let toproad2 = -400;

function moveLines2() {

    lines2.style.marginTop = toproad2 + "px";
    toproad2 = toproad2 + 10;
    if (toproad2 == 0) {
        toproad2 = -300;
    }

}

function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
    }
}

function updateGear(gear) {
    switch (gear) {
        case 2:

            score = score + 5;
            car1top = car1top + 5;
            car2top = car2top + 5;
            car3top = car3top + 5;
            geardom.innerHTML = "GEAR :" + gear;

            break;
        case 3:

            score = score + 10;
            car1top = car1top + 10;
            car2top = car2top + 10;
            car3top = car3top + 10;
            geardom.innerHTML = "GEAR :" + gear;
            break;

        case 4:

            score = score + 15;
            car1top = car1top + 15;
            car2top = car2top + 15;
            car3top = car3top + 15;
            geardom.innerHTML = "GEAR :" + gear;
            break;


        case 5:

            score = score + 20;
            car1top = car1top + 20;
            car2top = car2top + 20;
            car3top = car3top + 20;
            geardom.innerHTML = "GEAR :" + gear;
            break;
    }
}


function decreaseGear(gear) {
    switch (gear) {
        case 1:

            score = score;
            car1top = car1top;
            car2top = car2top;
            car3top = car3top;
            geardom.innerHTML = "GEAR :" + 1;
            break;
        case 2:

            score = score - 1;
            car1top = car1top - 1;
            car2top = car2top - 1;
            car3top = car3top - 1;
            geardom.innerHTML = "GEAR :" + 2;
            break;
        case 3:

            score = score - 2;
            car1top = car1top - 2;
            car2top = car2top - 2;
            car3top = car3top - 2;
            geardom.innerHTML = "GEAR :" + 3;
            break;

        case 4:

            score = score - 3;
            car1top = car1top - 3;
            car2top = car2top - 3;
            car3top = car3top - 3;
            geardom.innerHTML = "GEAR :" + 4;
            break;


        case 5:

            score = score - 5;
            car1top = car1top - 5;
            car2top = car2top - 5;
            car3top = car3top - 5;
            geardom.innerHTML = "GEAR :" + 5;
            break;

        default:
            gear = 1;
            score = score;
            car1top = car1top;
            car2top = car2top;
            car3top = car3top;
            geardom.innerHTML = "GEAR :" + gear;
            break;
    }
}