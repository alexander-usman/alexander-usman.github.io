"use strict";

const individualLootTableCR0 = new Map([
  [30, [[5, 6, 1, `cp`]]], // Roll below 30 and recieve 5D6 * 1 Copper Pieces.
  [60, [[4, 6, 1, `sp`]]],
  [70, [[3, 6, 1, `ep`]]],
  [95, [[3, 6, 1, `gp`]]],
  [100, [[1, 6, 1, `pp`]]],
]);

const individualLootTableCR5 = new Map([
  [
    30,
    [
      [4, 6, 100, `cp`],
      [1, 6, 10, `ep`],
    ],
  ], // Roll below 30 and recieve 4D6 * 10 Copper, and 1D6 * 10 Electrum Pieces.
  [
    60,
    [
      [6, 6, 10, `sp`],
      [2, 6, 10, `gp`],
    ],
  ],
  [
    70,
    [
      [3, 6, 10, `ep`],
      [2, 6, 10, `gp`],
    ],
  ],
  [95, [[4, 6, 10, `gp`]]],
  [
    100,
    [
      [2, 6, 10, `gp`],
      [3, 6, 1, `pp`],
    ],
  ],
]);

const individualLootTableCR11 = new Map([
  [
    20,
    [
      [4, 6, 100, `sp`],
      [1, 6, 100, `gp`],
    ],
  ],
  [
    35,
    [
      [1, 6, 100, `ep`],
      [1, 6, 100, `gp`],
    ],
  ],
  [
    75,
    [
      [2, 6, 100, `gp`],
      [1, 6, 10, `pp`],
    ],
  ],
  [
    100,
    [
      [2, 6, 100, `gp`],
      [2, 6, 10, `pp`],
    ],
  ],
]);

const individualLootTableCR17 = new Map([
  [
    15,
    [
      [2, 6, 1000, `ep`],
      [8, 6, 100, `gp`],
    ],
  ],
  [
    55,
    [
      [1, 6, 1000, `gp`],
      [1, 6, 100, `pp`],
    ],
  ],
  [
    100,
    [
      [1, 6, 1000, `gp`],
      [2, 6, 100, `pp`],
    ],
  ],
]);

const resultsDiv = document.querySelector(`.results`);
const btnCalculateIndividualLoot = document.querySelector(
  `.btnCalculateIndividualLoot`
);

const generateIndividualLoot = function () {
  const numMonsters = document.querySelector(
    `.individualLootGenerator .monsterCount`
  ).value;
  const monsterCR = Number(
    document.querySelector(`.individualLootGenerator .monsterCR`).value
  );

  let result = ``;
  const roll = Math.trunc(Math.random() * dWhat) + 1; // Your loot roll on a D100.

  if (monsterCR >= 0 && monsterCR <= 4) {
    for (const [k, v] of individualLootTableCR0) {
      if (roll <= k) {
        for (let j = 0; j < v.length; j++) {
          result += getCoins(...v[j]);
        }
      }
    }
  } else if (monsterCR >= 5 && monsterCR <= 10) {
  } else if (monsterCR >= 11 && monsterCR <= 16) {
  } else if (monsterCR >= 17) {
  }

  resultsDiv.innerHTML = result;
};

const getCoins = function (numRolls, dWhat, multiplier, currency) {
  let total = 0;
  let resultString = ``;
  for (let i = 0; i < numRolls; i++) {
    total += Math.trunc(Math.random() * dWhat) + 1;
  }

  total *= multiplier;

  resultString = `${total}${currency}\n`;

  return resultString;
};

btnCalculateIndividualLoot.addEventListener(`click`, generateIndividualLoot);
