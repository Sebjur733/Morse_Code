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

writeMorse.addEventListener('mousedown', function () {
  const idleDuration = Date.now() - mouseUpTime;
  console.log(idleDuration);
  if (idleDuration >= 1000) {
    MorsePrint.innerHTML += ' ';
  }
  if (idleDuration >= 3000) {
    MorsePrint.innerHTML += '  ';
  }
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
    MorsePrint.innerHTML += '.';
  }
  else {
    MorsePrint.innerHTML += '-';
  }
  TextOutput.innerHTML = decodeMorse(MorsePrint.value);
  
mouseUpTime = Date.now();

clearInterval(progressInterval);
progressBox.style.width = '0px';
MorsePrint.scrollLeft = MorsePrint.scrollWidth;
});


function idleCounter () {
let idleInterval = setInterval(() => {
  
}, 400);
}

  
