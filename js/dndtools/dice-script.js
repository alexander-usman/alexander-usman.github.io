"use strict";

const btnRoll = document.querySelector(`.btnRoll`);
const resultsDiv = document.querySelector(`.results`);

const rollXDX = function () {
  let result = 0;
  let rollList = [];
  const numRolls = Number(document.querySelector(`.numRolls`).value);
  const numModifier = Number(document.querySelector(`.numModifier`).value);
  const dWhat = document.querySelector("input[name=diceValues]:checked").value;

  for (let i = 0; i < numRolls; i++) {
    const roll = Math.trunc(Math.random() * dWhat) + 1;
    result += roll;
    rollList.push(roll);
  }
  result += numModifier;
  resultsDiv.innerHTML = `Your Roll: ${result} (${rollList})`;
  
  // TTS
  // Setup
  let voices = speechSynthesis.getVoices();
  if(!voices.length){
    let utterance = new SpeechSynthesisUtterance("");
    speechSynthesis.speak(utterance);
    voices = speechSynthesis.getVoices();
  }
  
  // Speak
  let speakData = new SpeechSynthesisUtterance();
  speakData.volume = 1; // From 0 to 1
  speakData.rate = 1; // From 0.1 to 10
  speakData.pitch = 2; // From 0 to 2
  speakData.text = result;
  speakData.lang = 'en';
  speakData.voice = voices[0];

  speechSynthesis.speak(speakData);
  
};

btnRoll.addEventListener(`click`, rollXDX);
