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

  if (result - numModifier == 20 && dWhat == 20) {
    resultsDiv.innerHTML = `Your Roll: ${result}. Natural 20. (List of rolls: ${rollList})`;
  } else if (result - numModifier == 1 && dWhat == 20) {
    resultsDiv.innerHTML = `Your Roll: ${result}. Natural 1. (List of rolls: ${rollList})`;
  } else {
    resultsDiv.innerHTML = `Your Roll: ${result}. (List of rolls: ${rollList})`;
  }

  // // TTS
  // // Test
  // if ('speechSynthesis' in window) {
  //  // Speech Synthesis supported
  //  // alert("TTS should work.");
  // }else{
  //   // Speech Synthesis Not Supported
  //   alert("Sorry, your browser doesn't support text to speech!");
  // }

  // // Setup
  // let voices = speechSynthesis.getVoices();
  // if(!voices.length){
  //   let utterance = new SpeechSynthesisUtterance("");
  //   speechSynthesis.speak(utterance);
  //   voices = speechSynthesis.getVoices();
  // }

  // // Speak
  // let speakData = new SpeechSynthesisUtterance();
  // speakData.volume = 1; // From 0 to 1
  // speakData.rate = 1; // From 0.1 to 10
  // speakData.pitch = 1; // From 0 to 2
  // speakData.text = result;
  // speakData.lang = 'en-AU';
  // //speakData.voice = voices[0];

  // // Check Roll

  // if (dWhat == 20 && (result - numModifier) == 20) {
  //   speakData.text = speakData.text + ". Natural 20.";
  // } else if (dWhat == 20 && (result - numModifier) == 1) {
  //   speakData.text = speakData.text + ". Natural 1.";
  // }

  // speechSynthesis.speak(speakData);
};

btnRoll.addEventListener(`click`, rollXDX);
