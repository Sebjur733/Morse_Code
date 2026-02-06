import {decodeMorse} from './functions.js';

//variables for mousehold event
let MorsePrint = document.getElementById('input_morse_text');
let morsePosition = MorsePrint.getBoundingClientRect();

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

//idle moving
let morsePositionMove = 0;
let idleInterval;
function idleCounter () {
  
idleInterval = setInterval(() => {
  morsePositionMove -= 5;
  console.log('morse position moving: ' + morsePositionMove);
  MorsePrint.style.left = morsePositionMove + "px";
}, 500);
}

//mousedown
writeMorse.addEventListener('mousedown', function () {
  clearInterval(idleInterval);
  const idleDuration = Date.now() - mouseUpTime;
  console.log(idleDuration);
  if (idleDuration >= 1000) {
    MorsePrint.textContent += ' ';
  }
  if (idleDuration >= 3000) {
    MorsePrint.textContent += '  ';
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

//mouseup
writeMorse.addEventListener('mouseup', function () {
  const duration = Date.now() - mosueDownTime;
  if (newProgressPosition.right <= borderPostion.right) {
    MorsePrint.textContent += '.';
  }
  else {
    MorsePrint.textContent += '-';
  }
  TextOutput.innerHTML = decodeMorse(MorsePrint.textContent);
  
mouseUpTime = Date.now();

clearInterval(progressInterval);
progressBox.style.width = '0px';
MorsePrint.scrollLeft = MorsePrint.scrollWidth;
idleCounter();
});




  
