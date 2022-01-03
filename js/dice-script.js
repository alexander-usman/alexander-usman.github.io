"use strict";

const btnRoll = document.querySelector(`.btnRoll`);

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
  btnRoll.value = `Your Roll: ${result} (${rollList})`;
};

btnRoll.addEventListener(`click`, rollXDX);
