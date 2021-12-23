"use strict";
// Individual Loot Tables
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
//Gemstones
const gemstones = new Map([
  [
    10,
    [
      `Azurite`,
      `Banded Agate`,
      `Blue Quartz`,
      `Eye Agate`,
      `Hematite`,
      `Lapis Lazuli`,
      `Malachite`,
      `Moss Agate`,
      `Obsidian`,
      `Rhondochrosite`,
      `Tiger Eye`,
      `Turquoise`,
    ],
  ],
  [
    50,
    [
      `Bloodstone`,
      `Carnelian`,
      `Chalcedony`,
      `Chrysoprase`,
      `Citrine`,
      `Jasper`,
      `Moonstone`,
      `Onyx`,
      `Quartz`,
      `Sardonyx`,
      `Star Rose Quartz`,
      `Zircon`,
    ],
  ],
]);
// Art Objects
const artworks = new Map([
  [
    25,
    [
      `Silver Ewer`,
      `Carved Bone Statuette`,
      `Small Gold Bracelet`,
      `Cloth-of-Gold Vestments`,
      `Black Velvet Mask Stitched with Silver Thread`,
      `Copper Chalice with Silver Filigree`,
      `Pair of Engraved Bone Dice`,
      `Small Mirror Set in a Painted Wooden Frame`,
      `Embroidered Silk Handkerchief`,
      `Gold Locket with a Painted Portrait Inside`,
    ],
  ],
]);
// Magic Item Tables
const magicItemTableA = new Map([
  [50, `Potion of Healing`],
  [60, `Spell Scroll (Cantrip)`],
  [70, `Potion of Climbing`],
  [90, `Spell Scroll (First Level)`],
  [94, `Spell Scroll (Second Level)`],
  [98, `Potion of Greater Healing`],
  [99, `Bag of Holding`],
  [100, `Driftglobe`],
]);
const magicItemTableB = new Map([
  [15, `Potion of Greater Healing`],
  [22, `Potion of Fire Breath`],
  [29, `Potion of Resistance`],
  [34, `Ammunition (Plus One)`],
  [39, `Potion of Animal Friendship`],
  [44, `Potion of Hill Giant Strength`],
  [49, `Potion of Growth`],
  [54, `Potion of Water Breathing`],
  [59, `Spell Scroll (Second Level)`],
  [64, `Spell Scroll (Third Level)`],
  [67, `Bag of Holding`],
  [70, `Keoghtom's Ointment`],
  [73, `Oil of Slipperiness`],
  [75, `Dust of Disappearance`],
  [77, `Dust of Dryness`],
  [79, `Dust of Sneezing and Choking`],
  [81, `Elemental Gem`],
  [83, `Philter of Love`],
  [84, `Alchemy Jug`],
  [85, `Cap of Water-Breathing`],
  [86, `Cloak of the Manta Ray`],
  [87, `Driftglobe`],
  [88, `Goggles of Night`],
  [89, `Helm of Comprehending Languages`],
  [90, `Immovable Rod`],
  [91, `Lantern of Revealing`],
  [92, `Mariner's Armour`],
  [93, `Mithril Armour`],
  [94, `Potion of Poison`],
  [95, `Ring of Swimming`],
  [96, `Robe of Useful Items`],
  [97, `Rope of Climbing`],
  [98, `Saddle of the Cavalier`],
  [99, `Wand of Magic Detection`],
  [100, `Wand of Secrets`],
]);
// Treasure Hoard Coins
const treasureHoardCoins = new Map([
  [
    0,
    [
      [6, 6, 100, `cp`],
      [3, 6, 100, `sp`],
      [2, 6, 10, `gp`],
    ],
  ],
  [
    5,
    [
      [2, 6, 100, `cp`],
      [2, 6, 1000, `sp`],
      [6, 6, 100, `gp`],
      [3, 6, 100, `pp`],
    ],
  ],
  [
    11,
    [
      [4, 6, 1000, `gp`],
      [5, 6, 100, `pp`],
    ],
  ],
  [
    17,
    [
      [12, 6, 1000, `gp`],
      [8, 6, 1000, `pp`],
    ],
  ],
]);
// Treasure Hoard Tables
const treasureHoardTable0 = new Map([
  [6, [[], []]],
  [16, [[2, 6, 10, `gems`], []]],
  [26, [[2, 4, 25, `art`], []]],
  [36, [[1, 6, 50, `gems`], []]],
  [
    44,
    [
      [2, 6, 10, `gems`],
      [6, `A`],
    ],
  ],
  [
    52,
    [
      [2, 4, 25, `art`],
      [6, `A`],
    ],
  ],
  [
    60,
    [
      [2, 6, 50, `gems`],
      [6, `A`],
    ],
  ],
  [
    65,
    [
      [2, 6, 10, `gems`],
      [4, `B`],
    ],
  ],
  [
    70,
    [
      [2, 4, 25, `art`],
      [4, `B`],
    ],
  ],
  [
    75,
    [
      [2, 6, 50, `gems`],
      [4, `B`],
    ],
  ],
  [
    78,
    [
      [2, 6, 10, `gems`],
      [4, `C`],
    ],
  ],
  [
    80,
    [
      [2, 4, 25, `art`],
      [4, `C`],
    ],
  ],
  [
    85,
    [
      [2, 6, 50, `gems`],
      [4, `C`],
    ],
  ],
  [
    92,
    [
      [2, 4, 255, `art`],
      [4, `F`],
    ],
  ],
  [
    97,
    [
      [2, 6, 50, `gems`],
      [4, `F`],
    ],
  ],
  [
    99,
    [
      [2, 4, 25, `art`],
      [0, `G`],
    ],
  ],
  [
    100,
    [
      [2, 6, 50, `gems`],
      [0, `G`],
    ],
  ],
]);
// HTML Elements
const resultsDiv = document.querySelector(`.results`);
const btnGenerateIndividualLoot = document.querySelector(
  `.btnGenerateIndividualLoot`
);
const btnGenerateHoardLoot = document.querySelector(
  `.btnGenerateTreasureHoardLoot`
);

const generateIndividualLoot = function () {
  const numMonsters = Number(
    document.querySelector(`.individualLootGenerator .monsterCount`).value
  );
  const monsterCR = Number(
    document.querySelector(`.individualLootGenerator .monsterCR`).value
  );

  let result = ``;
  const roll = Math.trunc(Math.random() * 100) + 1; // Your loot roll on a D100.
  // Check CR and select the rioght coinage
  if (monsterCR >= 0 && monsterCR <= 4) {
    for (const [k, v] of individualLootTableCR0) {
      if (roll <= k) {
        // Select the correct row of the loot table
        for (let j = 0; j < v.length; j++) {
          result += getCoins(...v[j]); // Roll an amount for each currency in that row.
        }
        break; // Only use the first row which is lower than your roll.
      }
    }
  } else if (monsterCR >= 5 && monsterCR <= 10) {
    for (const [k, v] of individualLootTableCR5) {
      if (roll <= k) {
        for (let j = 0; j < v.length; j++) {
          result += getCoins(...v[j]);
        }
        break;
      }
    }
  } else if (monsterCR >= 11 && monsterCR <= 16) {
    for (const [k, v] of individualLootTableCR11) {
      if (roll <= k) {
        for (let j = 0; j < v.length; j++) {
          result += getCoins(...v[j]);
        }
        break;
      }
    }
  } else if (monsterCR >= 17) {
    for (const [k, v] of individualLootTableCR17) {
      if (roll <= k) {
        for (let j = 0; j < v.length; j++) {
          result += getCoins(...v[j]);
        }
        break;
      }
    }
  }
  // Display the results
  resultsDiv.innerHTML = result;
};

const generateTreasureHoard = function () {
  const hoardCR = Number(
    document.querySelector(`.treasureHoardGenerator .treasureHoardCR`).value
  );
  let result = ``;
  const roll = Math.trunc(Math.random() * 100) + 1; // Your loot roll on a D100.

  if (hoardCR >= 0 && hoardCR <= 4) {
    for (const row of treasureHoardCoins.get(0)) {
      result += getCoins(...row);
    }

    let treasureHoardRow;

    for (const [k, v] of treasureHoardTable0) {
      if (roll <= k) {
        treasureHoardRow = treasureHoardTable0.get(k);
        break;
      }
    }

    if (treasureHoardRow[0][3] === `gems`) {
      result +=
        `\ngems: ` +
        getGems(
          treasureHoardRow[0][0],
          treasureHoardRow[0][1],
          treasureHoardRow[0][2]
        );
    } else if (treasureHoardRow[0][3] === `art`) {
      result +=
        `\nart: ` +
        getArt(
          treasureHoardRow[0][0],
          treasureHoardRow[0][1],
          treasureHoardRow[0][2]
        );
    } else {
      result += `\nNo Gems or Art.`;
    }

    if (treasureHoardRow[1]) {
      getMagicItems(treasureHoardRow[1][0], treasureHoardRow[1][1]);
    }
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
  resultString = `${total} ${currency}\n`;
  return resultString;
};

const getGems = function (numRolls, dWhat, value) {
  let result = ``;
  for (let i = 0; i < numRolls; i++) {
    result += gemstones.get(value)[Math.trunc(Math.random() * dWhat) + 1] + ` `;
  }
  return result;
};

const getArt = function (numRolls, dWhat, value) {
  let result = ``;
  for (let i = 0; i < numRolls; i++) {
    result += artworks.get(value)[Math.trunc(Math.random() * dWhat) + 1] + ` `;
  }
  return result;
};

const getMagicItems = function (dWhat, table) {
  let result = ``;
  const totalRolls = Math.trunc(Math.random() * dWhat) + 1;

  for (let i = 0; i < totalRolls; i++) {
    let roll = Math.trunc(Math.random() * 100) + 1;
    switch (table) {
      case `A`:
        result += `${magicItemTableA.get(roll)}`;
        break;
      case `B`:
        result += `${magicItemTableB.get(roll)}`;
        break;
      default:
        result += `\nNo Magic Items.`;
        break;
    }
  }
  return result;
};

btnGenerateIndividualLoot.addEventListener(`click`, generateIndividualLoot);
btnGenerateHoardLoot.addEventListener(`click`, generateTreasureHoard);
