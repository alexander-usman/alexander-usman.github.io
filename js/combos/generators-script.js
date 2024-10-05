"use strict";
// HTML Elements
const resultsDiv = document.querySelector(`.results`);
const btnGenerateCombination = document.querySelector(
  `.btnGenerateCombination`
);

window.onload = function () {};

// Combinations
const generateCombo = function () {
  const numMoves = Number(
    document.querySelector(`.comboGenerator .moveCount`).value
  );
  const comboLevel = document.querySelector(
    `.comboGenerator .comboLevel`
  ).value;
  let result = ``;

  result += buildCombo(comboLevel, numMoves);

  // Display the results
  resultsDiv.innerHTML = `${result}`;
};

//Create a Combination
const buildCombo = function (comboLevel, numMoves) {
  let result = ``;

  result += `From ${getStance(comboLevel)} `;

  for (let i = 0; i < numMoves; i++) {
    let thisMove = getMove(comboLevel);
    let parts = ``;

    for (const part of thisMove) {
      switch (part) {
        case `Strike`:
          parts += `${getStrike(comboLevel)} `;
          break;
        case `Block`:
          parts += `${getBlock(comboLevel)} `;
          break;
        case `Kick`:
          parts += `${getKick(comboLevel)} `;
          break;
        case `Stance`:
          parts += `${getStance(comboLevel)} `;
          break;
        case `Direction`:
          parts += `${getDirection(comboLevel)} `;
          break;
      }
    }
    result += `<li>${parts}</li>`;
  }
  return result;
};

const getMove = function (comboLevel) {
  let roll = 0;
  switch (comboLevel) {
    case `10th Kyu - 8th Kyu`:
      roll = Math.trunc(Math.random() * Moves10thKyu.length);
      return Moves10thKyu[roll];
    case `7th Kyu - 4th Kyu`:
      roll = Math.trunc(Math.random() * Moves7thKyu.length);
      return Moves7thKyu[roll];
    case `3rd Kyu - Sho-Dan-Ho`:
      roll = Math.trunc(Math.random() * Moves3rdKyu.length);
      return Moves3rdKyu[roll];
    case `Sho-Dan and Above`:
      roll = Math.trunc(Math.random() * MovesShoDan.length);
      return MovesShoDan[roll];
  }
};

const getStance = function (comboLevel) {
  let roll = 0;
  switch (comboLevel) {
    case `10th Kyu - 8th Kyu`:
      roll = Math.trunc(Math.random() * Stances10thKyu.length);
      return `${Stances10thKyu[roll]}`;
    case `7th Kyu - 4th Kyu`:
      roll = Math.trunc(Math.random() * Stances7thKyu.length);
      return `${Stances7thKyu[roll]}`;
    case `3rd Kyu - Sho-Dan-Ho`:
      roll = Math.trunc(Math.random() * Stances3rdKyu.length);
      return `${Stances3rdKyu[roll]}`;
    case `Sho-Dan and Above`:
      roll = Math.trunc(Math.random() * StancesShoDan.length);
      return `${StancesShoDan[roll]}`;
  }
};

const getBlock = function (comboLevel) {
  let roll = 0;
  switch (comboLevel) {
    case `10th Kyu - 8th Kyu`:
      roll = Math.trunc(Math.random() * Blocks10thKyu.length);
      return `${Blocks10thKyu[roll]}`;
    case `7th Kyu - 4th Kyu`:
      roll = Math.trunc(Math.random() * Blocks7thKyu.length);
      return `${Blocks7thKyu[roll]}`;
    case `3rd Kyu - Sho-Dan-Ho`:
      roll = Math.trunc(Math.random() * Blocks3rdKyu.length);
      return `${Blocks3rdKyu[roll]}`;
    case `Sho-Dan and Above`:
      roll = Math.trunc(Math.random() * BlocksShoDan.length);
      return `${BlocksShoDan[roll]}`;
  }
};

const getStrike = function (comboLevel) {
  let roll = 0;
  switch (comboLevel) {
    case `10th Kyu - 8th Kyu`:
      roll = Math.trunc(Math.random() * Strikes10thKyu.length);
      return `${Strikes10thKyu[roll]}`;
    case `7th Kyu - 4th Kyu`:
      roll = Math.trunc(Math.random() * Strikes7thKyu.length);
      return `${Strikes7thKyu[roll]}`;
    case `3rd Kyu - Sho-Dan-Ho`:
      roll = Math.trunc(Math.random() * Strikes3rdKyu.length);
      return `${Strikes3rdKyu[roll]}`;
    case `Sho-Dan and Above`:
      roll = Math.trunc(Math.random() * StrikesShoDan.length);
      return `${StrikesShoDan[roll]}`;
  }
};

const getKick = function (comboLevel) {
  let roll = 0;
  switch (comboLevel) {
    case `10th Kyu - 8th Kyu`:
      roll = Math.trunc(Math.random() * Kicks10thKyu.length);
      return `${Kicks10thKyu[roll]}`;
    case `7th Kyu - 4th Kyu`:
      roll = Math.trunc(Math.random() * Kicks7thKyu.length);
      return `${Kicks7thKyu[roll]}`;
    case `3rd Kyu - Sho-Dan-Ho`:
      roll = Math.trunc(Math.random() * Kicks3rdKyu.length);
      return `${Kicks3rdKyu[roll]}`;
    case `Sho-Dan and Above`:
      roll = Math.trunc(Math.random() * KicksShoDan.length);
      return `${KicksShoDan[roll]}`;
  }
};

const getDirection = function (comboLevel) {
  let roll = 0;
  switch (comboLevel) {
    case `10th Kyu - 8th Kyu`:
      roll = Math.trunc(Math.random() * Directions10thKyu.length);
      return `${Directions10thKyu[roll]}`;
    case `7th Kyu - 4th Kyu`:
      roll = Math.trunc(Math.random() * Directions7thKyu.length);
      return `${Directions7thKyu[roll]}`;
    case `3rd Kyu - Sho-Dan-Ho`:
      roll = Math.trunc(Math.random() * Directions3rdKyu.length);
      return `${Directions3rdKyu[roll]}`;
    case `Sho-Dan and Above`:
      roll = Math.trunc(Math.random() * DirectionsShoDan.length);
      return `${DirectionsShoDan[roll]}`;
  }
};

btnGenerateCombination.addEventListener(`click`, generateCombo);
