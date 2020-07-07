let doorImage1 = document.getElementById('door1');
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg'
doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentlyPlaying === true) {
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
  }
}

let doorImage2 = document.getElementById('door2');
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let doorImage3 = document.getElementById('door3');
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let startButton = document.getElementById('start');
let currentlyPlaying = true;
const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}
const isClicked = (door) => {
   if (door.src === closedDoorPath) {
     return false;
   } else {
     return true;
   }
}
const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door) === true) {
    gameOver();
  }
}
doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && currentlyPlaying === true) {
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  }
}
doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && currentlyPlaying === true) {
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
  }
}
startButton.onclick = () => {
  if (currentlyPlaying === false) {
  startRound();
  }
}
const startRound = () => {
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}
const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?'
  } else {
    startButton.innerHTML = 'Game over! Play again?'
  }
  currentlyPlaying = false;
}
let randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 2) {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}
startRound();


