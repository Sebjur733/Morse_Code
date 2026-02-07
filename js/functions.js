import { dictionary } from './morseList.js';
import { reverseDictionary } from './morseList.js';



let decodeMorse = function (morseCode) {
   
  console.log(dictionary);
  //let arrayMorseWord = morseCode.split('   ');
  let trimmedMorse = morseCode.trim();
let wordArray = [];
  
  wordArray = trimmedMorse.split(/\s{3,}/);
  let decodeMessage = wordArray.map(word => {
    let characters = word.split(' ');

    let decodeWord = characters.map(code => {
      return dictionary[code] || '';
    }).join('');
    return decodeWord;
  }).join(' ');
  
 return decodeMessage;
}



//function for translating text to morse
let encodeText = function(text) {
  let wordArray = text;
  let letters = "";
  let morse = "";
  for (let letter = 0; letter < wordArray.length; letter ++) {
   console.log(wordArray[letter]);
      if (wordArray[letter] !== ' ' && wordArray[letter].length == 1) {
        morse += reverseDictionary[wordArray[letter]];
        morse += " ";
        console.log("word extends: " + morse);
      } if (wordArray[letter] == " ") {
        console.log("founs space");
        morse += "   ";
      }
    }
return morse;
};




export {decodeMorse}