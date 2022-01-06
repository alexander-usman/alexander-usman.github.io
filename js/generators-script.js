"use strict";
// HTML Elements
const resultsDiv = document.querySelector(`.results`);
const btnGenerateIndividualLoot = document.querySelector(
  `.btnGenerateIndividualLoot`
);
const btnGenerateHoardLoot = document.querySelector(
  `.btnGenerateTreasureHoardLoot`
);
const btnGenerateRandomItem = document.querySelector(`.btnGenerateRandomItem`);
const btnGenerateQuestHook = document.querySelector(`.btnGenerateQuestHook`);
const btnGenerateTavernName = document.querySelector(`.btnGenerateTavernName`);
const btnGenerateViciousMockery = document.querySelector(
  `.btnGenerateViciousMockery`
);
const btnGenerateReligiousOath = document.querySelector(
  `.btnGenerateReligiousOath`
);
// Item
const generateIndividualLoot = function () {
  const numMonsters = Number(
    document.querySelector(`.individualLootGenerator .monsterCount`).value
  );
  const monsterCR = Number(
    document.querySelector(`.individualLootGenerator .monsterCR`).value
  );

  let result = ``;
  const roll = Math.trunc(Math.random() * 100) + 1; // Your loot roll on a D100.
  // Check CR and select the right coinage
  if (monsterCR >= 0 && monsterCR <= 4) {
    for (const [k, v] of individualLootTableCR0) {
      if (roll <= k) {
        // Select the correct row of the loot table
        for (let j = 0; j < v.length; j++) {
          result += getCoins(...v[j]); // Roll an amount for each currency in that row.
          result += getTrinket(); // Add a trinket for flavour.
        }
        break; // Only use the first row which is lower than your roll.
      }
    }
  } else if (monsterCR >= 5 && monsterCR <= 10) {
    for (const [k, v] of individualLootTableCR5) {
      if (roll <= k) {
        for (let j = 0; j < v.length; j++) {
          result += getCoins(...v[j]);
          result += getTrinket();
        }
        break;
      }
    }
  } else if (monsterCR >= 11 && monsterCR <= 16) {
    for (const [k, v] of individualLootTableCR11) {
      if (roll <= k) {
        for (let j = 0; j < v.length; j++) {
          result += getCoins(...v[j]);
          result += getTrinket();
        }
        break;
      }
    }
  } else if (monsterCR >= 17) {
    for (const [k, v] of individualLootTableCR17) {
      if (roll <= k) {
        for (let j = 0; j < v.length; j++) {
          result += getCoins(...v[j]);
          result += getTrinket();
        }
        break;
      }
    }
  }
  // Display the results
  resultsDiv.innerHTML = `
  <h3>Coins</h3>
  <ul>
  ${result}
  </ul>`;
};

const generateTreasureHoard = function () {
  const hoardCR = Number(
    document.querySelector(`.treasureHoardGenerator .treasureHoardCR`).value
  );
  let treasureHoardRow;
  let coinResult = ``;
  let gemResult = ``;
  let artResult = ``;
  let magicItemResult = ``;

  const roll = Math.trunc(Math.random() * 100) + 1; // Your loot roll on a D100.

  if (hoardCR >= 0 && hoardCR <= 4) {
    for (const row of treasureHoardCoins.get(0)) {
      coinResult += getCoins(...row);
    }

    for (const [k, v] of treasureHoardTable0) {
      if (roll <= k) {
        treasureHoardRow = treasureHoardTable0.get(k);
        break;
      }
    }

    if (treasureHoardRow[0][3] === `gems`) {
      gemResult += getGems(
        treasureHoardRow[0][0],
        treasureHoardRow[0][1],
        treasureHoardRow[0][2]
      );
    } else if (treasureHoardRow[0][3] === `art`) {
      artResult += getArt(
        treasureHoardRow[0][0],
        treasureHoardRow[0][1],
        treasureHoardRow[0][2]
      );
    } else {
      gemResult += `No Gems.`;
      artResult += `No art.`;
    }

    if (
      typeof treasureHoardRow[1][0] === `number` &&
      typeof treasureHoardRow[1][1] === `string`
    ) {
      magicItemResult += getMagicItems(
        treasureHoardRow[1][0],
        treasureHoardRow[1][1]
      );
    }
  } else if (hoardCR >= 5 && hoardCR <= 10) {
    for (const row of treasureHoardCoins.get(5)) {
      coinResult += getCoins(...row);
    }

    for (const [k, v] of treasureHoardTable5) {
      if (roll <= k) {
        treasureHoardRow = treasureHoardTable5.get(k);
        break;
      }
    }

    if (treasureHoardRow[0][3] === `gems`) {
      gemResult += getGems(
        treasureHoardRow[0][0],
        treasureHoardRow[0][1],
        treasureHoardRow[0][2]
      );
    } else if (treasureHoardRow[0][3] === `art`) {
      artResult += getArt(
        treasureHoardRow[0][0],
        treasureHoardRow[0][1],
        treasureHoardRow[0][2]
      );
    } else {
      gemResult += `No Gems.`;
      artResult += `No art.`;
    }

    if (
      typeof treasureHoardRow[1][0] === `number` &&
      typeof treasureHoardRow[1][1] === `string`
    ) {
      magicItemResult += getMagicItems(
        treasureHoardRow[1][0],
        treasureHoardRow[1][1]
      );
    }
  } else if (hoardCR >= 11 && hoardCR <= 16) {
    for (const row of treasureHoardCoins.get(11)) {
      coinResult += getCoins(...row);
    }

    for (const [k, v] of treasureHoardTable11) {
      if (roll <= k) {
        treasureHoardRow = treasureHoardTable11.get(k);
        break;
      }
    }

    if (treasureHoardRow[0][3] === `gems`) {
      gemResult += getGems(
        treasureHoardRow[0][0],
        treasureHoardRow[0][1],
        treasureHoardRow[0][2]
      );
    } else if (treasureHoardRow[0][3] === `art`) {
      artResult += getArt(
        treasureHoardRow[0][0],
        treasureHoardRow[0][1],
        treasureHoardRow[0][2]
      );
    } else {
      gemResult += `No Gems.`;
      artResult += `No art.`;
    }

    if (
      typeof treasureHoardRow[1][0] === `number` &&
      typeof treasureHoardRow[1][1] === `string`
    ) {
      magicItemResult += getMagicItems(
        treasureHoardRow[1][0],
        treasureHoardRow[1][1]
      );
    }

    if (treasureHoardRow.length === 3) {
      if (
        typeof treasureHoardRow[2][0] === `number` &&
        typeof treasureHoardRow[2][1] === `string`
      ) {
        magicItemResult += getMagicItems(
          treasureHoardRow[2][0],
          treasureHoardRow[2][1]
        );
      }
    }
  } else if (hoardCR >= 17) {
    for (const row of treasureHoardCoins.get(17)) {
      coinResult += getCoins(...row);
    }

    for (const [k, v] of treasureHoardTable17) {
      if (roll <= k) {
        treasureHoardRow = treasureHoardTable17.get(k);
        break;
      }
    }

    if (treasureHoardRow[0][3] === `gems`) {
      gemResult += getGems(
        treasureHoardRow[0][0],
        treasureHoardRow[0][1],
        treasureHoardRow[0][2]
      );
    } else if (treasureHoardRow[0][3] === `art`) {
      artResult += getArt(
        treasureHoardRow[0][0],
        treasureHoardRow[0][1],
        treasureHoardRow[0][2]
      );
    } else {
      gemResult += `No gems.`;
      artResult += `No art.`;
    }

    if (
      typeof treasureHoardRow[1][0] === `number` &&
      typeof treasureHoardRow[1][1] === `string`
    ) {
      magicItemResult += getMagicItems(
        treasureHoardRow[1][0],
        treasureHoardRow[1][1]
      );
    }
  }

  resultsDiv.innerHTML = `
  <h3>Coins</h3>
  <ul>
  ${coinResult}
  </ul>
  <h3>Art and Gemstones</h3>
  <ul>
  ${artResult} ${gemResult}
  </ul>
  <h3>Magic Items</h3>
  <ul>
  ${magicItemResult || `<li>No Magic Items</li>`}
  </ul>
  `;
};

const generateRandomItem = function () {
  const itemType = document.querySelector(
    `.randomItemGenerator .randomItemType`
  ).value;

  let itemChoice = ``;

  switch (itemType) {
    case `Trinket`:
      itemChoice += getTrinket();
      break;
    case `Common Magical Item`:
      itemChoice += getCommonMagicalItem();
      break;
    default:
      break;
  }

  resultsDiv.innerHTML = `
    <h3>${itemType}</h3> 
    <ul>
    ${itemChoice}
    </ul>
  `;
};
// Quests
const generateQuestHook = function () {
  const hookType = document.querySelector(
    `.questHookGenerator .questHookType`
  ).value;

  let questTable = [];
  let dWhat = 0;

  if (hookType === `Wilderness`) {
    questTable = wildernessGoals;
  } else if (hookType === `Dungeon`) {
    questTable = dungeonGoals;
  } else if (hookType === `Other`) {
    questTable = otherGoals;
  }

  dWhat = questTable.length;
  const roll = Math.trunc(Math.random() * dWhat);

  if (hookType != `Other` && roll === 10) {
    const firstRoll = Math.trunc(Math.random() * dWhat);
    const secondRoll = Math.trunc(Math.random() * dWhat);
    return `<li>${questTable[firstRoll]}, ${questTable[secondRoll]}</li>`;
  }

  resultsDiv.innerHTML = `
    <h3>Quest Hook</h3> <ul><li>${questTable[roll]}</li></ul>
  `;
};
// Places
const generateTavernName = function () {
  const firstRoll = Math.trunc(Math.random() * tavernFirst.length);
  const secondRoll = Math.trunc(Math.random() * tavernSecond.length);

  resultsDiv.innerHTML = `
    <h3>Tavern Name</h3> <ul><li>${
      tavernFirst[firstRoll] + ` ` + tavernSecond[secondRoll]
    }</li></ul>
  `;
};
// Phrases
const generateViciousMockery = function () {
  let insult = ``;
  const typeRoll = Math.trunc(Math.random() * 3) + 1;
  let firstRoll = 0;
  let secondRoll = 0;
  let thirdRoll = 0;

  switch (typeRoll) {
    case 1:
      firstRoll = Math.trunc(Math.random() * negativeAdjectives.length);
      secondRoll = Math.trunc(Math.random() * negativeNouns.length);
      insult += `You ${negativeAdjectives[
        firstRoll
      ].toLowerCase()} ${negativeNouns[secondRoll].toLowerCase()}!`;
      break;
    case 2:
      firstRoll = Math.trunc(Math.random() * negativeNouns.length);
      if (
        negativeNouns[firstRoll] === `A` ||
        negativeNouns[firstRoll] === `E` ||
        negativeNouns[firstRoll] === `I` ||
        negativeNouns[firstRoll] === `O` ||
        negativeNouns[firstRoll] === `U`
      ) {
        insult += `You fight like an ${negativeNouns[
          firstRoll
        ].toLowerCase()}!`;
      } else {
        insult += `You fight like a ${negativeNouns[firstRoll].toLowerCase()}!`;
      }
      break;
    case 3:
      firstRoll = Math.trunc(
        Math.random() * shakespeareanInsultsPartOne.length
      );
      secondRoll = Math.trunc(
        Math.random() * shakespeareanInsultsPartTwo.length
      );
      thirdRoll = Math.trunc(
        Math.random() * shakespeareanInsultsPartThree.length
      );
      insult += `Thou ${shakespeareanInsultsPartOne[firstRoll]} ${shakespeareanInsultsPartTwo[secondRoll]} ${shakespeareanInsultsPartThree[thirdRoll]}!`;
      break;
    default:
      break;
  }

  resultsDiv.innerHTML = `
    <h3>Vicious Mockery</h3> ${insult}
  `;
};

const generateReligiousOath = function () {
  let oath = ``;
  const rollDeity = Math.trunc(Math.random() * godsOfTheForgottenRealms.size);
  const deity = Array.from(godsOfTheForgottenRealms.keys())[rollDeity];
  const typeRoll = Math.trunc(Math.random * 1) + 1;
  let firstRoll = 0;

  switch (rollType) {
    case 1:
      firstRoll =
        Math.trunc(
          Math.random * godsOfTheForgottenRealms.get(deity).shortSymbol.size
        ) + 1;
      oath += `By the ${
        godsOfTheForgottenRealms.get(deity).shortSymbol[firstRoll]
      } of ${deity}!`;
      break;
    case 2:
      firstRoll =
        Math.trunc(
          Math.random * godsOfTheForgottenRealms.get(deity).shortSymbol.size
        ) + 1;
      oath += `By the ${
        godsOfTheForgottenRealms.get(deity).shortSymbol[firstRoll]
      }!`;
      break;
    case 3:
      firstRoll =
        Math.trunc(
          Math.random * godsOfTheForgottenRealms.get(deity).shortSymbol.size
        ) + 1;
      oath += `By ${deity}'s ${
        godsOfTheForgottenRealms.get(deity).shortSymbol[firstRoll]
      }!`;
      break;
    default:
      break;
  }

  resultsDiv.innerHTML = `
    <h3>Religious Oath</h3> ${oath}
  `;
};

const getCoins = function (numRolls, dWhat, multiplier, currency) {
  let total = 0;
  let resultString = ``;
  for (let i = 0; i < numRolls; i++) {
    const roll = Math.trunc(Math.random() * dWhat) + 1;
    total += roll;
  }
  total *= multiplier;
  resultString = `<li>${total} ${currency}</li>`;
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
    result += `<li>${gemstones.get(value)[roll]} - ${value} gp</li>`;
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
    result += `<li>${artworks.get(value)[roll]} - ${value} gp</li>`;
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
          result += `<li>${v} (Table ${table} - ${roll})</li>`;
          break;
        }
      }
    } else if (table === `B`) {
      for (const [k, v] of magicItemTableB) {
        if (roll <= k) {
          result += `<li>${v} (Table ${table} - ${roll})</li>`;
          break;
        }
      }
    } else if (table === `C`) {
      for (const [k, v] of magicItemTableC) {
        if (roll <= k) {
          result += `<li>${v} (Table ${table} - ${roll})</li>`;
          break;
        }
      }
    } else if (table === `D`) {
      for (const [k, v] of magicItemTableD) {
        if (roll <= k) {
          result += `<li>${v} (Table ${table} - ${roll})</li>`;
          break;
        }
      }
    } else if (table === `E`) {
      for (const [k, v] of magicItemTableE) {
        if (roll <= k) {
          result += `<li>${v} (Table ${table} - ${roll})</li>`;
          break;
        }
      }
    } else if (table === `F`) {
      for (const [k, v] of magicItemTableF) {
        if (roll <= k) {
          result += `<li>${v} (Table ${table} - ${roll})</li>`;
          break;
        }
      }
    } else if (table === `G`) {
      for (const [k, v] of magicItemTableG) {
        if (roll <= k) {
          result += `<li>${v} (Table ${table} - ${roll})</li>`;
          break;
        }
      }
    } else if (table === `H`) {
      for (const [k, v] of magicItemTableH) {
        if (roll <= k) {
          result += `<li>${v} (Table ${table} - ${roll})</li>`;
          break;
        }
      }
    } else if (table === `I`) {
      for (const [k, v] of magicItemTableI) {
        if (roll <= k) {
          result += `<li>${v} (Table ${table} - ${roll})</li>`;
          break;
        }
      }
    }
  }
  return result;
};

const getTrinket = function () {
  let result = ``;
  const roll = Math.trunc(Math.random() * trinkets.length);
  result = `<li>${trinkets[roll]}</li>`;
  return result;
};

const getCommonMagicalItem = function () {
  let result = ``;
  const roll = Math.trunc(Math.random() * commonMagicalItems.length);
  result = `<li>${commonMagicalItems[roll]}</li>`;
  return result;
};

btnGenerateIndividualLoot.addEventListener(`click`, generateIndividualLoot);
btnGenerateHoardLoot.addEventListener(`click`, generateTreasureHoard);
btnGenerateRandomItem.addEventListener(`click`, generateRandomItem);
btnGenerateQuestHook.addEventListener(`click`, generateQuestHook);
btnGenerateTavernName.addEventListener(`click`, generateTavernName);
btnGenerateViciousMockery.addEventListener(`click`, generateViciousMockery);
btnGenerateReligiousOath.addEventListener(`click`, generateReligiousOath);
