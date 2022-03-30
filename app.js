// Container for ball movement
var Xmin = 0;
var Xmax = 250; 


// Green ball movement
var ball = document.getElementById('ballGreen');
var velocityGreen = 40; 
var positionGreenX = 0; 

var reverseGreen = false; 

function moveGreenBall() {
  if (reverseGreen) {
    positionGreenX = positionGreenX - velocityGreen; 
    ballGreen.style.left = positionGreenX + 'px';
    } else {
    positionGreenX = positionGreenX + velocityGreen; 
    ballGreen.style.left = positionGreenX + 'px'; 
    }
  if (
    positionGreenX > Xmax || 
    positionGreenX === Xmin

  ) {
    reverseGreen = !reverseGreen; 
  }
}

setInterval(moveGreenBall, 200);


// Red ball movement
var ball = document.getElementById('ballRed');
var velocityRed = 100; 
var positionRedX = 0; 

var reverseRed = false; 

function moveRedBall() {
  if (reverseRed) {
    positionRedX = positionRedX - velocityRed; 
    ballRed.style.left = positionRedX + 'px';
    } else {
    positionRedX = positionRedX + velocityRed; 
    ballRed.style.left = positionRedX + 'px'; 
    }
  if (
    positionRedX > Xmax || 
    positionRedX === Xmin

  ) {
    reverseRed = !reverseRed; 
  }
}

setInterval(moveRedBall, 300);


// Yellow ball movement
var ball = document.getElementById('ballYellow');
var velocityYellow = 10; 
var positionYellowX = 0; 

var reverseYellow = false; 

function moveYellowBall() {
  if (reverseYellow) {
    positionYellowX = positionYellowX - velocityYellow; 
    ballYellow.style.left = positionYellowX + 'px';
    } else {
    positionYellowX = positionYellowX + velocityYellow; 
    ballYellow.style.left = positionYellowX + 'px'; 
    }
  if (
    positionYellowX > Xmax || 
    positionYellowX === Xmin

  ) {
    reverseYellow = !reverseYellow; 
  }
}

setInterval(moveYellowBall, 100);


// Purple ball movement
var ball = document.getElementById('ballPurple');
var velocityPurple = 30; 
var positionPurpleX = 0; 

var reversePurple = false; 

function movePurpleBall() {
  if (reversePurple) {
    positionPurpleX = positionPurpleX - velocityPurple; 
    ballPurple.style.left = positionPurpleX + 'px';
    } else {
    positionPurpleX = positionPurpleX + velocityPurple; 
    ballPurple.style.left = positionPurpleX + 'px'; 
    }
  if (
    positionPurpleX > Xmax || 
    positionPurpleX === Xmin

  ) {
    reversePurple = !reversePurple; 
  }
}

setInterval(movePurpleBall, 200);


// Orange ball movement
var ball = document.getElementById('ballOrange');
var velocityOrange = 50; 
var positionOrangeX = 0; 

var reverseOrange = false; 

function moveOrangeBall() {
  if (reverseOrange) {
    positionOrangeX = positionOrangeX - velocityOrange; 
    ballOrange.style.left = positionOrangeX + 'px';
    } else {
    positionOrangeX = positionOrangeX + velocityOrange; 
    ballOrange.style.left = positionOrangeX + 'px'; 
    }
  if (
    positionOrangeX > Xmax || 
    positionOrangeX === Xmin

  ) {
    reverseOrange = !reverseOrange; 
  }
}

setInterval(moveOrangeBall, 200);


// Blue ball movement
var ball = document.getElementById('ballBlue');
var velocityBlue = 20; 
var positionBlueX = 0; 

var reverseBlue = false; 

function moveBlueBall() {
  if (reverseBlue) {
    positionBlueX = positionBlueX - velocityBlue; 
    ballBlue.style.left = positionBlueX + 'px';
    } else {
    positionBlueX = positionBlueX + velocityBlue; 
    ballBlue.style.left = positionBlueX + 'px'; 
    }
  if (
    positionBlueX > Xmax || 
    positionBlueX === Xmin

  ) {
    reverseBlue = !reverseBlue; 
  }
}

setInterval(moveBlueBall, 100);