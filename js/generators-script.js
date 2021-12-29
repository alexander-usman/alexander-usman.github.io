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
  [
    500,
    [
      `Alexandrite`,
      `Aquamarine`,
      `Black Pearl`,
      `Blue Spinel`,
      `Peridot`,
      `Topaz`,
    ],
  ],
  [
    1000,
    [
      `Black Opal`,
      `Blue Sapphire`,
      `Emerald`,
      `Fire Opal`,
      `Opal`,
      `Star Ruby`,
      `Star Sapphire`,
      `Yellow Sapphire`,
    ],
  ],
  [5000, [`Black Sapphire`, `Diamond`, `Jacinth`, `Ruby`]],
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
  [
    250,
    [
      `Gold Ring Set with Bloodstones`,
      `Carved Ivory Statuette`,
      `Large Gold Bracelet`,
      `Silver Necklace with a Gemstone Pendant`,
      `Bronze Crown`,
      `Silk Robe with Gold Embroidery`,
      `Large Well-Made Tapestry`,
      `Brass Mug with Jade Inlay`,
      `Box of Turquoise Animal Figurines`,
      `Gold Bird Cage with Electrum Filigree`,
    ],
  ],
  [
    750,
    [
      `Silver Chalice Set with Moonstones`,
      `Silver-Plated Steel Longsword with  Jet Set in Hilt`,
      `Carved Harp of Exotic Wood with Ivory Inlay and Zircon Gems`,
      `Small Gold Idol`,
      `Gold Dragon Comb Set with Red Garnets as Eyes`,
      `Bottle Stopper Cork Embossed with Gold Leaf and Set with Amethysts`,
      `Ceremonial Electrum Dagger with a Black Pearl in the Pommel`,
      `Silver and Gold Broach`,
      `Obsidian Statuette with Gold Fittings and Inlay`,
      `Painted Gold War Mask`,
    ],
  ],
  [
    2500,
    [
      `Fine Gold Chain Set with a Fire Opal`,
      `Old Masterpiece Painting`,
      `Embroidered Silk and Velvet Mantle Set with Numerous Moonstones`,
      `Platinum Bracelet Set with a Sapphire`,
      `Embroidered Glove Set with Jewel Chips`,
      `Jeweled Anklet`,
      `Gold Music Box`,
      `Gold Circlet Set with Four Aquamarines`,
      `Eye Patch with a Mock Eye Set in Blue Sapphire and Moonstone`,
      `A Necklace with a String of Small Pink Pearls`,
    ],
  ],
  [
    7500,
    [
      `Jeweled Gold Crown`,
      `Jewled Platinum Ring`,
      `Small Gold Statuette Set with Rubies`,
      `Gold Cup Set with Emeralds`,
      `Gold Jewelery Box with Platinum Filigree`,
      `Painted Gold Child's Sarcophagus`,
      `Jade Game Board with Solid Gold Playing Pieces`,
      `Bejeweled Ivory Drinking Horn with Gold Filigree`,
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
const magicItemTableC = new Map([]);
const magicItemTableD = new Map([]);
const magicItemTableE = new Map([]);
const magicItemTableF = new Map([]);
const magicItemTableG = new Map([]);
const magicItemTableH = new Map([]);
const magicItemTableI = new Map([]);
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
      [2, 4, 25, `art`],
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
const treasureHoardTable5 = new Map([
  [4, [[], []]],
  [10, [[2, 4, 25, `art`], []]],
  [16, [[3, 6, 50, `gems`], []]],
  [22, [[3, 6, 100, `gems`], []]],
  [28, [[2, 4, 250, `art`], []]],
  [
    32,
    [
      [2, 4, 25, `art`],
      [6, `A`],
    ],
  ],
  [
    36,
    [
      [3, 6, 50, `gems`],
      [6, `A`],
    ],
  ],
  [
    40,
    [
      [3, 6, 100, `gems`],
      [6, `A`],
    ],
  ],
  [
    44,
    [
      [2, 4, 350, `art`],
      [6, `A`],
    ],
  ],
  [
    49,
    [
      [2, 4, 25, `art`],
      [4, `B`],
    ],
  ],
  [
    54,
    [
      [3, 6, 50, `gems`],
      [4, `B`],
    ],
  ],
  [
    59,
    [
      [3, 6, 100, `gems`],
      [4, `B`],
    ],
  ],
  [
    63,
    [
      [2, 4, 250, `art`],
      [4, `B`],
    ],
  ],
  [
    66,
    [
      [2, 4, 25, `art`],
      [4, `C`],
    ],
  ],
  [
    69,
    [
      [3, 6, 25, `art`],
      [4, `C`],
    ],
  ],
  [
    72,
    [
      [3, 6, 100, `gems`],
      [4, `C`],
    ],
  ],
  [
    74,
    [
      [2, 4, 250, `art`],
      [4, `C`],
    ],
  ],
  [
    76,
    [
      [2, 4, 25, `art`],
      [0, `D`],
    ],
  ],
  [
    78,
    [
      [3, 6, 50, `gems`],
      [0, `D`],
    ],
  ],
  [
    79,
    [
      [3, 6, 100, `gems`],
      [0, `D`],
    ],
  ],
  [
    80,
    [
      [2, 4, 250, `art`],
      [0, `D`],
    ],
  ],
  [
    84,
    [
      [2, 4, 25, `art`],
      [4, `F`],
    ],
  ],
  [
    88,
    [
      [3, 6, 50, `gems`],
      [4, `F`],
    ],
  ],
  [
    91,
    [
      [3, 6, 100, `gems`],
      [4, `F`],
    ],
  ],
  [
    94,
    [
      [2, 4, 250, `art`],
      [4, `F`],
    ],
  ],
  [
    96,
    [
      [3, 6, 100, `gems`],
      [4, `G`],
    ],
  ],
  [
    98,
    [
      [2, 4, 250, `art`],
      [4, `G`],
    ],
  ],
  [
    99,
    [
      [3, 6, 100, `gems`],
      [0, `H`],
    ],
  ],
  [
    100,
    [
      [2, 4, 250, `art`],
      [0, `H`],
    ],
  ],
]);
const treasureHoardTable11 = new Map([
  [3, [[], []]],
  [6, [[2, 4, 250, `art`], []]],
  [9, [[2, 4, 750, `art`], []]],
  [12, [[3, 6, 500, `gems`], []]],
  [15, [[3, 6, 1000, `gems`], []]],
  [
    19,
    [
      [2, 4, 250, `art`],
      [4, `A`],
      [6, `B`],
    ],
  ],
  [
    23,
    [
      [2, 4, 750, `art`],
      [4, `A`],
      [6, `B`],
    ],
  ],
  [
    26,
    [
      [3, 6, 500, `gems`],
      [4, `A`],
      [6, `B`],
    ],
  ],
  [
    29,
    [
      [3, 6, 1000, `gems`],
      [4, `A`],
      [6, `B`],
    ],
  ],
  [
    35,
    [
      [2, 4, 250, `art`],
      [6, `C`],
    ],
  ],
  [
    40,
    [
      [2, 4, 750, `art`],
      [6, `C`],
    ],
  ],
  [
    45,
    [
      [3, 6, 500, `gems`],
      [6, `C`],
    ],
  ],
  [
    50,
    [
      [3, 6, 1000, `gems`],
      [6, `C`],
    ],
  ],
  [
    54,
    [
      [2, 4, 250, `art`],
      [4, `D`],
    ],
  ],
  [
    58,
    [
      [2, 4, 750, `art`],
      [4, `D`],
    ],
  ],
  [
    62,
    [
      [3, 6, 500, `gems`],
      [4, `D`],
    ],
  ],
  [
    66,
    [
      [3, 6, 1000, `gems`],
      [4, `D`],
    ],
  ],
  [
    68,
    [
      [2, 4, 250, `art`],
      [0, `E`],
    ],
  ],
  [
    70,
    [
      [2, 4, 750, `art`],
      [0, `E`],
    ],
  ],
  [
    72,
    [
      [3, 6, 500, `gems`],
      [0, `E`],
    ],
  ],
  [
    74,
    [
      [3, 6, 1000, `gems`],
      [0, `E`],
    ],
  ],
  [
    76,
    [
      [2, 4, 250, `art`],
      [0, `F`],
      [4, `G`],
    ],
  ],
  [
    78,
    [
      [2, 4, 750, `art`],
      [0, `F`],
      [4, `G`],
    ],
  ],
  [
    80,
    [
      [3, 6, 500, `gems`],
      [0, `F`],
      [4, `G`],
    ],
  ],
  [
    82,
    [
      [3, 6, 1000, `gems`],
      [0, `F`],
      [4, `G`],
    ],
  ],
  [
    85,
    [
      [2, 4, 250, `art`],
      [4, `H`],
    ],
  ],
  [
    88,
    [
      [2, 4, 750, `art`],
      [4, `H`],
    ],
  ],
  [
    90,
    [
      [3, 6, 500, `gems`],
      [4, `H`],
    ],
  ],
  [
    92,
    [
      [3, 6, 1000, `gems`],
      [4, `H`],
    ],
  ],

  [
    94,
    [
      [2, 4, 250, `art`],
      [0, `I`],
    ],
  ],
  [
    96,
    [
      [2, 4, 750, `art`],
      [0, `I`],
    ],
  ],
  [
    98,
    [
      [3, 6, 500, `gems`],
      [0, `I`],
    ],
  ],
  [
    100,
    [
      [3, 6, 1000, `gems`],
      [0, `I`],
    ],
  ],
]);
const treasureHoardTable17 = new Map([
  [2, [[], []]],
  [
    5,
    [
      [3, 6, 1000, `gems`],
      [8, `C`],
    ],
  ],
  [
    8,
    [
      [1, 10, 2500, `art`],
      [8, `C`],
    ],
  ],
  [
    11,
    [
      [4, 2, 7500, `art`],
      [8, `C`],
    ],
  ],
  [
    14,
    [
      [1, 8, 5000, `gems`],
      [8, `C`],
    ],
  ],
  [
    22,
    [
      [3, 6, 1000, `gems`],
      [6, `D`],
    ],
  ],
  [
    30,
    [
      [1, 10, 2500, `art`],
      [6, `D`],
    ],
  ],
  [
    38,
    [
      [4, 2, 7500, `art`],
      [6, `D`],
    ],
  ],
  [
    46,
    [
      [1, 8, 5000, `gems`],
      [6, `D`],
    ],
  ],
  [
    52,
    [
      [3, 6, 1000, `gems`],
      [86, `E`],
    ],
  ],
  [
    58,
    [
      [1, 10, 2500, `art`],
      [6, `E`],
    ],
  ],
  [
    63,
    [
      [4, 2, 7500, `art`],
      [6, `E`],
    ],
  ],
  [
    68,
    [
      [1, 8, 5000, `gems`],
      [6, `E`],
    ],
  ],
  [
    69,
    [
      [3, 6, 1000, `gems`],
      [4, `G`],
    ],
  ],
  [
    70,
    [
      [1, 10, 2500, `art`],
      [4, `G`],
    ],
  ],
  [
    71,
    [
      [4, 2, 7500, `art`],
      [4, `G`],
    ],
  ],
  [
    72,
    [
      [1, 8, 5000, `gems`],
      [4, `G`],
    ],
  ],
  [
    74,
    [
      [3, 6, 1000, `gems`],
      [4, `H`],
    ],
  ],
  [
    76,
    [
      [1, 10, 2500, `art`],
      [4, `H`],
    ],
  ],
  [
    78,
    [
      [4, 2, 7500, `art`],
      [4, `H`],
    ],
  ],
  [
    80,
    [
      [1, 8, 5000, `gems`],
      [4, `H`],
    ],
  ],

  [
    85,
    [
      [3, 6, 1000, `gems`],
      [4, `I`],
    ],
  ],
  [
    90,
    [
      [1, 10, 2500, `art`],
      [4, `I`],
    ],
  ],
  [
    95,
    [
      [4, 2, 7500, `art`],
      [4, `I`],
    ],
  ],
  [
    100,
    [
      [1, 8, 5000, `gems`],
      [4, `I`],
    ],
  ],
]);
// HTML Elements[],[]
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

    if (
      typeof treasureHoardRow[1][0] === `number` &&
      typeof treasureHoardRow[1][1] === `string`
    ) {
      result +=
        `\n` + getMagicItems(treasureHoardRow[1][0], treasureHoardRow[1][1]);
    }
  } else if (hoardCR >= 5 && hoardCR <= 10) {
    for (const row of treasureHoardCoins.get(5)) {
      result += getCoins(...row);
    }

    let treasureHoardRow;

    for (const [k, v] of treasureHoardTable5) {
      if (roll <= k) {
        treasureHoardRow = treasureHoardTable5.get(k);
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

    if (
      typeof treasureHoardRow[1][0] === `number` &&
      typeof treasureHoardRow[1][1] === `string`
    ) {
      result +=
        `\n` + getMagicItems(treasureHoardRow[1][0], treasureHoardRow[1][1]);
    }
  } else if (hoardCR >= 11 && hoardCR <= 16) {
    for (const row of treasureHoardCoins.get(11)) {
      result += getCoins(...row);
    }

    let treasureHoardRow;

    for (const [k, v] of treasureHoardTable11) {
      if (roll <= k) {
        treasureHoardRow = treasureHoardTable11.get(k);
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

    if (
      typeof treasureHoardRow[1][0] === `number` &&
      typeof treasureHoardRow[1][1] === `string`
    ) {
      result +=
        `\n` + getMagicItems(treasureHoardRow[1][0], treasureHoardRow[1][1]);
    }
    if (
      typeof treasureHoardRow[2][0] === `number` &&
      typeof treasureHoardRow[2][1] === `string`
    ) {
      result +=
        `\n` + getMagicItems(treasureHoardRow[2][0], treasureHoardRow[2][1]);
    }
  } else if (hoardCR >= 17) {
    for (const row of treasureHoardCoins.get(17)) {
      result += getCoins(...row);
    }

    let treasureHoardRow;

    for (const [k, v] of treasureHoardTable17) {
      if (roll <= k) {
        treasureHoardRow = treasureHoardTable17.get(k);
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

    if (
      typeof treasureHoardRow[1][0] === `number` &&
      typeof treasureHoardRow[1][1] === `string`
    ) {
      result +=
        `\n` + getMagicItems(treasureHoardRow[1][0], treasureHoardRow[1][1]);
    }
  }

  resultsDiv.innerHTML = result;
};

const getCoins = function (numRolls, dWhat, multiplier, currency) {
  let total = 0;
  let resultString = ``;
  for (let i = 0; i < numRolls; i++) {
    const roll = Math.trunc(Math.random() * dWhat) + 1;
    total += roll;
  }
  total *= multiplier;
  resultString = `${total} ${currency}\n`;
  return resultString;
};

const getGems = function (numRolls, dWhat, value) {
  let result = ``;
  let totalRolls = 0;
  for (let i = 0; i < numRolls; i++) {
    totalRolls += Math.trunc(Math.random() * dWhat) + 1;
  }

  for (let j = 0; j < totalRolls; j++) {
    const roll = Math.trunc(Math.random() * gemstones.get(value).length);
    result += gemstones.get(value)[roll] + ` `;
  }

  return result;
};

const getArt = function (numRolls, dWhat, value) {
  let result = ``;
  let totalRolls = 0;
  for (let i = 0; i < numRolls; i++) {
    totalRolls += Math.trunc(Math.random() * dWhat) + 1;
  }

  for (let j = 0; j < totalRolls; j++) {
    const roll = Math.trunc(Math.random() * artworks.get(value).length);
    result += artworks.get(value)[roll] + ` `;
  }

  return result;
};

const getMagicItems = function (dWhat, table) {
  let result = ``;
  const totalRolls = Math.trunc(Math.random() * dWhat) + 1;

  for (let i = 0; i < totalRolls; i++) {
    const roll = Math.trunc(Math.random() * 100) + 1;
    if (table === `A`) {
      for (const [k, v] of magicItemTableA) {
        if (roll <= k) {
          result += v + ` `;
          break;
        }
      }
    } else if (result === `B`) {
      for (const [k, v] of magicItemTableB) {
        if (roll <= k) {
          result += v + ` `;
          break;
        }
      }
    } else if (result === `C`) {
      for (const [k, v] of magicItemTableC) {
        if (roll <= k) {
          result += v + ` `;
          break;
        }
      }
    } else if (result === `D`) {
      for (const [k, v] of magicItemTableD) {
        if (roll <= k) {
          result += v + ` `;
          break;
        }
      }
    } else if (result === `E`) {
      for (const [k, v] of magicItemTableE) {
        if (roll <= k) {
          result += v + ` `;
          break;
        }
      }
    } else if (result === `F`) {
      for (const [k, v] of magicItemTableF) {
        if (roll <= k) {
          result += v + ` `;
          break;
        }
      }
    } else if (result === `G`) {
      for (const [k, v] of magicItemTableG) {
        if (roll <= k) {
          result += v + ` `;
          break;
        }
      }
    } else if (result === `H`) {
      for (const [k, v] of magicItemTableH) {
        if (roll <= k) {
          result += v + ` `;
          break;
        }
      }
    } else if (result === `I`) {
      for (const [k, v] of magicItemTableI) {
        if (roll <= k) {
          result += v + ` `;
          break;
        }
      }
    }
  }
  return result;
};

btnGenerateIndividualLoot.addEventListener(`click`, generateIndividualLoot);
btnGenerateHoardLoot.addEventListener(`click`, generateTreasureHoard);
