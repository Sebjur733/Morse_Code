import {decodeMorse} from './functions.js';

//variables for mousehold event
let MorsePrint = document.getElementById('input_morse');
let TextOutput = document.getElementById('textArea');
const slider = document.getElementById("slider");
const valueDisplay = document.getElementById("value");
const writeMorse = document.getElementById('writeMorseButton');
const progressBox = document.getElementById('progress');
const borderLine = document.getElementById('border');

let newProgressPosition = progressBox.getBoundingClientRect();
let mouseDownTime = 0;
let progressInterval;
let idleInterval = null;
let speed = 1000;
let ctx, osc, gain;


function startIdleTracking(idleSpeed) {
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

slider.addEventListener("input", () => {
  valueDisplay.textContent = slider.value;
  speed = 1000 / slider.value;
  startIdleTracking(speed);
});




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
  mouseDownTime = Date.now();

  
  let progressPositionMove = 0;
progressInterval = setInterval(() => {
  
  
  progressPositionMove ++;
  progressBox.style.width = `${progressPositionMove}px`;
  newProgressPosition = progressBox.getBoundingClientRect();
}, 1);
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

  checkPosition();
  
  TextOutput.innerHTML = decodeMorse(MorsePrint.value);
  
clearInterval(progressInterval);
progressBox.style.width = '0px';
MorsePrint.scrollLeft = MorsePrint.scrollWidth;

startIdleTracking(speed);
  }
});
