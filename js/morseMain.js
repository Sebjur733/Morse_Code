import {decodeMorse} from './functions.js';

//variables for mousehold event
let MorsePrint = document.getElementById('input_morse');
let TextOutput = document.getElementById('textArea');

const writeMorse = document.getElementById('writeMorseButton');
const progressBox = document.getElementById('progress');
let progressPosition = progressBox.getBoundingClientRect();
console.log('position progressrect: ' + progressPosition.right);

const borderLine = document.getElementById('border');
let borderPostion = borderLine.getBoundingClientRect();
console.log('position border: ' + borderPostion.right);

let mosueDownTime = 0;
let mouseUpTime = Date.now();
const dotTime = 200;
let progressInterval;


let newProgressPosition = progressBox.getBoundingClientRect();

let idleInterval = null;
function startIdleTracking() {
  stopIdleTracking();
  idleInterval = setInterval(() => {
    MorsePrint.value += ' ';
    MorsePrint.scrollLeft = MorsePrint.scrollWidth;
  }, 1000);
}

function stopIdleTracking() {
  if (idleInterval) {
    clearInterval(idleInterval);
    idleInterval = null;
  }
}

writeMorse.addEventListener('mousedown', function () {
 stopIdleTracking();
  mosueDownTime = Date.now();

  
  let progressPositionMove = 0;
progressInterval = setInterval(() => {
  console.log('position border: ' + borderPostion.right);
  
  progressPositionMove ++;
  progressBox.style.width = `${progressPositionMove}px`;
  newProgressPosition = progressBox.getBoundingClientRect();
  console.log('position progressrect: ' + newProgressPosition.right);
}, 10);
})

writeMorse.addEventListener('mouseup', function () {
  const duration = Date.now() - mosueDownTime;
  if (newProgressPosition.right <= borderPostion.right) {
    MorsePrint.value += '.';
  }
  else {
    MorsePrint.value += '-';
  }
  TextOutput.innerHTML = decodeMorse(MorsePrint.value);
  
mouseUpTime = Date.now();

clearInterval(progressInterval);
progressBox.style.width = '0px';
MorsePrint.scrollLeft = MorsePrint.scrollWidth;

startIdleTracking();
});


