import {decodeMorse} from './functions.js';

//variables for mousehold event
let MorsePrint = document.getElementById('input_morse');
let TextOutput = document.getElementById('textArea');

const writeMorse = document.getElementById('writeMorseButton');
const progressBox = document.getElementById('progress');
let progressPosition = progressBox.getBoundingClientRect();
console.log('position progressrect: ' + progressPosition.right);

const borderLine = document.getElementById('border');



let mosueDownTime = 0;
let mouseUpTime = Date.now();
const dotTime = 200;
let progressInterval;


let newProgressPosition = progressBox.getBoundingClientRect();

let idleSpeed = 1000;
let idleInterval = null;
function startIdleTracking() {
  stopIdleTracking();
  idleInterval = setInterval(() => {
    MorsePrint.value += ' ';
    MorsePrint.scrollLeft = MorsePrint.scrollWidth;
  }, idleSpeed);
}

function stopIdleTracking() {
  if (idleInterval) {
    clearInterval(idleInterval);
    idleInterval = null;
  }
}




let ctx, osc, gain;

let mouseBool = false;
//mouse down
writeMorse.addEventListener('mousedown', function () {
  mouseBool = true;
   // Opprett AudioContext og oscillator første gang brukeren klikker
    if (!ctx) {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
        osc = ctx.createOscillator();
        gain = ctx.createGain();

        osc.frequency.value = 600;
        osc.type = "sine";

        gain.gain.value = 0;

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
    }

    // Resume AudioContext for å overstyre autoplay-policy
    ctx.resume().then(() => {
        gain.gain.setValueAtTime(1, ctx.currentTime);
    });


 stopIdleTracking();
  mosueDownTime = Date.now();

  
  let progressPositionMove = 0;
progressInterval = setInterval(() => {
  
  
  progressPositionMove ++;
  progressBox.style.width = `${progressPositionMove}px`;
  newProgressPosition = progressBox.getBoundingClientRect();
  console.log('position progressrect: ' + newProgressPosition.right);
}, 10);
})

function checkPosition() {
  let borderPostion = borderLine.getBoundingClientRect();
  if (newProgressPosition.right <= borderPostion.right) {
    MorsePrint.value += '.';
  }
  else {
    MorsePrint.value += '-';
  }
}

// mouse up
addEventListener('mouseup', function () {
  if (mouseBool === true) {
    mouseBool = false;
  if (gain) gain.gain.setValueAtTime(0, ctx.currentTime);

  const duration = Date.now() - mosueDownTime;

  checkPosition();
  
  TextOutput.innerHTML = decodeMorse(MorsePrint.value);
  
mouseUpTime = Date.now();

clearInterval(progressInterval);
progressBox.style.width = '0px';
MorsePrint.scrollLeft = MorsePrint.scrollWidth;

startIdleTracking();
  }
});


