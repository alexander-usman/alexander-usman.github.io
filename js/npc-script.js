"use strict";
// DOM Elements
const resultsDiv = document.querySelector(`.results`);
const btnGenerateSimpleNPC = document.querySelector(`.btnGenerateSimpleNPC`);
const btnGenerateComplexNPC = document.querySelector(`.btnGenerateComplexNPC`);
// Global
const simpleNPCs = [];
const complexNPCs = [];

// Helper Functions
const removeFirst = function (arr, element) {
  const index = arr.indexOf(element);
  if (index === -1) return arr;
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const rollXDX = function (numDice = 1, dWhat = 6, modifier = 0) {
  let roll = 0;

  for (let i = 0; i < numDice; i++) {
    roll += Math.trunc(Math.random() * dWhat) + 1;
  }

  roll += modifier;

  return roll;
};

const generateSimpleNPC = function () {
  const newNPC = new SimpleNPC();
  simpleNPCs.push(newNPC);
  resultsDiv.innerHTML = `
    ${newNPC.toPrettyHTML()}
  `;
};

const generateComplexNPC = function () {
  const newNPC = new ComplexNPC();

  complexNPCs.push(newNPC);

  resultsDiv.innerHTML = `
    ${newNPC.toPrettyHTML()}
  `;
};

const SimpleNPC = function () {
  const wholeRace = getNPCRace();
  this.raceRoll = wholeRace[0];
  this.race = wholeRace[1];
  this.subrace = getNPCSubrace(this.raceRoll);
  this.gender = getNPCGender();
  this.name = getNPCName(this.race, this.gender, this.subrace);
  this.highScore = getNPCHighAbility();
  this.lowScore = getNPCLowAbility(this.highScore[0]);
  this.talent = getNPCTalent();
  this.mannerism = getNPCMannerism();
  this.interactionTrait = getNPCInteractionTrait();
  this.appearance = getSimpleAppearance();
  this.ideal = getNPCIdeal();
  this.bond = getNPCBond();
  this.flaw = getNPCFlaw();
  this.toPrettyHTML = function () {
    return `
    <ul>
    <li>${this.race}</li>
    <ul><li>${this.subrace}</li></ul>
    <li>${this.gender}</li>
    <li>${this.name}</li>
    <li>${this.appearance}</li>
    ${this.highScore[1]}
    ${this.lowScore[1]}
    <li>${this.talent}</li>
    <li>${this.mannerism}</li>
    <li>${this.interactionTrait}</li>
    ${this.ideal}
    <li>${this.bond}</li>
    <li>${this.flaw}</li>
    </ul>`;
  };
};

const ComplexNPC = function () {
  const wholeRace = getNPCRace();
  this.raceRoll = wholeRace[0];
  this.race = wholeRace[1];
  this.subrace = getNPCSubrace(this.raceRoll);
  this.gender = getNPCGender();
  this.name = getNPCName(this.race, this.gender, this.subrace);
  this.highScore = getNPCHighAbility();
  this.lowScore = getNPCLowAbility(this.highScore[0]);
  const allStats = getNPCStats(
    this.race,
    this.subrace,
    this.highScore[0],
    this.lowScore[0]
  );
  this.stats = allStats[0];
  this.talent = getNPCTalent();
  this.mannerism = getNPCMannerism();
  this.interactionTrait = getNPCInteractionTrait();
  this.wholeBackground = getNPCBackground();
  this.background = this.wholeBackground[0];
  this.specialty = this.wholeBackground[1];

  const rollFirstTrait = Math.trunc(
    Math.random() * backgrounds.get(this.background).personality.length
  );
  const rollSecondTrait = Math.trunc(
    Math.random() * backgrounds.get(this.background).personality.length
  );
  const rollIdeal = Math.trunc(
    Math.random() * backgrounds.get(this.background).ideal.length
  );
  const rollBond = Math.trunc(
    Math.random() * backgrounds.get(this.background).bond.length
  );
  const rollFlaw = Math.trunc(
    Math.random() * backgrounds.get(this.background).flaw.length
  );

  this.firstTrait = backgrounds.get(this.background).personality[
    rollFirstTrait
  ];
  this.secondTrait = backgrounds.get(this.background).personality[
    rollSecondTrait
  ];
  this.ideal = backgrounds.get(this.background).ideal[rollIdeal];
  this.bond = backgrounds.get(this.background).bond[rollBond];
  this.flaw = backgrounds.get(this.background).flaw[rollFlaw];
  this.equipment = backgrounds.get(this.background).equipment;
  this.npcClass = getNPCClass(
    this.highScore[0],
    this.lowScore[0],
    this.stats[0]
  );
  this.languages = getNPCLanguages(
    this.race,
    this.npcClass[0],
    backgrounds.get(this.background).languages
  );
  this.tools = getNPCTools(backgrounds.get(this.background).tools);
  this.appearance = getSimpleAppearance();
  this.origin = getNPCOrigin(
    this.race,
    this.background[0],
    this.npcClass[0],
    this.subrace
  );
  this.toPrettyHTML = function () {
    return `
    <ul>
    <li>${this.race}</li>
    <ul><li>${this.subrace}</li></ul>
    <li>${this.gender}</li>
    <li>${this.name}</li>
    ${this.displayStats()}
    <li>You speak: </li><ul>${this.languages}</ul>
    <li>You can use: </li><ul>${this.tools}</ul>
    <li>${this.appearance}</li>
    ${this.highScore[1]}
    ${this.lowScore[1]}
    <li>${this.talent}</li>
    <li>${this.mannerism}</li>
    <li>${this.interactionTrait}</li>
    <li>${this.background} - ${this.specialty}</li>
      <ul>
        <li>Trait One: ${this.firstTrait}</li>
        <li>Trait Two: ${this.secondTrait}</li>
        <li>Ideal: ${this.ideal}</li>
        <li>Bond: ${this.bond}</li>
        <li>Flaw: ${this.flaw}</li>
        <li>Equipment: ${this.equipment}</li>
      </ul>
    ${this.origin}
    ${this.npcClass[2]}
    </ul>`;
  };
  this.displayStats = function () {
    const result = ``;
    for (const [k, v] of this.stats) {
      result += `<li>${k}: ${v}</li>`;
    }
    return `
      <li>Stats: </li>
      <ul>
        ${result}
      </ul>
    `;
  };
};

const getNPCRace = function () {
  const roll = Math.trunc(Math.random() * randomNPCRace.size) + 1;
  return [roll, `${randomNPCRace.get(roll)[0]}`];
};

const getNPCSubrace = function (npcRace) {
  let subrace = ``;
  if (randomNPCRace.get(npcRace)[1].length > 0) {
    const roll = Math.trunc(
      Math.random() * randomNPCRace.get(npcRace)[1].length
    );
    subrace += randomNPCRace.get(npcRace)[1][roll];
  } else {
    subrace += `No subrace`;
  }
  return subrace;
};

const getNPCGender = function () {
  const roll = rollXDX(1, 2);

  if (roll === 1) {
    return `Male`;
  } else if (roll === 2) {
    return `Female`;
  }
};

const getNPCName = function (
  race = `Human`,
  gender = `Male`,
  subrace = `No subrace`
) {
  let result = ``;
  let firstNameRoll = 0;
  let lastNameRoll = 0;
  let childNameRoll = 0;
  let namedBy = 0;

  if (subrace != `No subrace`) {
    race += ` - ${subrace}`;
  }

  switch (race) {
    case `Dragonborn - Black`:
    case `Dragonborn - Blue`:
    case `Dragonborn - Brass`:
    case `Dragonborn - Bronze`:
    case `Dragonborn - Copper`:
    case `Dragonborn - Gold`:
    case `Dragonborn - Green`:
    case `Dragonborn - Red`:
    case `Dragonborn - Silver`:
    case `Dragonborn - White`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesDragonbornMale.length);
        result += `${namesDragonbornMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesDragonbornFemale.length
        );
        result += `${namesDragonbornFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesDragonbornClan.length);
      result += `${namesDragonbornClan[lastNameRoll]}`;
      break;

    case `Dwarf - Hill`:
    case `Dwarf - Mountain`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesDwarfMale.length);
        result += `${namesDwarfMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(Math.random() * namesDwarfFemale.length);
        result += `${namesDwarfFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesDwarfClan.length);
      result += `${namesDwarfClan[lastNameRoll]}`;
      break;

    case `Elf - Drow`:
    case `Elf - High`:
    case `Elf - Wood`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesElfAdultMale.length);
        result += `${namesElfAdultMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(Math.random() * namesElfAdultFemale.length);
        result += `${namesElfAdultFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesElfFamily.length);
      result += `${namesElfFamily[lastNameRoll]}`;
      childNameRoll = Math.trunc(Math.random() * namesElfChild.length);
      result += ` (Child name: ${namesElfChild[childNameRoll]})`;
      break;

    case `Gnome - Forest`:
    case `Gnome - Rock`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesGnomeMale.length);
        result += `${namesGnomeMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(Math.random() * namesGnomeFemale.length);
        result += `${namesGnomeFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesGnomeClan.length);
      result += `${namesGnomeClan[lastNameRoll]}`;
      break;

    case `Half-Elf`:
      namedBy = Math.trunc(Math.random() * 18) + 1;
      if (namedBy <= 9) {
        result += getNPCName(`Human - ${randomHumanType.get(namedBy)}`, gender);
        return result;
      } else {
        const elfType = rollXDX(1, 2);
        if (elfType === 1) {
          result += getNPCName(`Elf`, gender, `High`);
        } else {
          result += getNPCName(`Elf`, gender, `Wood`);
        }
        return result;
      }

      break;

    case `Halfling - Lightfoot`:
    case `Halfling - Stout`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesHalflingMale.length);
        result += `${namesHalflingMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(Math.random() * namesHalflingFemale.length);
        result += `${namesHalflingFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesHalflingFamily.length);
      result += `${namesHalflingFamily[lastNameRoll]}`;
      break;

    case `Half-Orc`:
      namedBy = Math.trunc(Math.random() * 18) + 1;
      if (namedBy <= 9) {
        result += `${getNPCName(
          `Human - ${randomHumanType.get(namedBy)}`,
          gender
        )}`;
        result += ` (${getNPCName(`Orc`, gender)})`;
        return `${result}`;
      } else {
        result += getNPCName(`Orc`, gender);
        return result;
      }
      break;

    case `Human - Calishite`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanCalishiteMale.length
        );
        result += `${namesHumanCalishiteMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanCalishiteFemale.length
        );
        result += `${namesHumanCalishiteFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(
        Math.random() * namesHumanCalishiteSurname.length
      );
      result += `${namesHumanCalishiteSurname[lastNameRoll]}`;
      break;

    case `Human - Chondathan`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanChondathanMale.length
        );
        result += `${namesHumanChondathanMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanChondathanFemale.length
        );
        result += `${namesHumanChondathanFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(
        Math.random() * namesHumanChondathanSurname.length
      );
      result += `${namesHumanChondathanSurname[lastNameRoll]}`;
      break;

    case `Human - Damaran`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanDamaranMale.length
        );
        result += `${namesHumanDamaranMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanDamaranFemale.length
        );
        result += `${namesHumanDamaranFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(
        Math.random() * namesHumanDamaranSurname.length
      );
      result += `${namesHumanDamaranSurname[lastNameRoll]}`;
      break;

    case `Human - Illuskan`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanIlluskanMale.length
        );
        result += `${namesHumanIlluskanMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanIlluskanFemale.length
        );
        result += `${namesHumanIlluskanFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(
        Math.random() * namesHumanIlluskanSurname.length
      );
      result += `${namesHumanIlluskanSurname[lastNameRoll]}`;
      break;

    case `Human - Mulan`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesHumanMulanMale.length);
        result += `${namesHumanMulanMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanMulanFemale.length
        );
        result += `${namesHumanMulanFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesHumanMulanSurname.length);
      result += `${namesHumanMulanSurname[lastNameRoll]}`;
      break;

    case `Human - Rashemi`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanRashemiMale.length
        );
        result += `${namesHumanRashemiMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanRashemiFemale.length
        );
        result += `${namesHumanRashemiFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(
        Math.random() * namesHumanRashemiSurname.length
      );
      result += `${namesHumanRashemiSurname[lastNameRoll]}`;
      break;

    case `Human - Shou`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesHumanShouMale.length);
        result += `${namesHumanShouMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(Math.random() * namesHumanShouFemale.length);
        result += `${namesHumanShouFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesHumanShouSurname.length);
      result += `${namesHumanShouSurname[lastNameRoll]}`;
      break;

    case `Human - Tethyrian`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanTethyrianMale.length
        );
        result += `${namesHumanTethyrianMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanTethyrianFemale.length
        );
        result += `${namesHumanTethyrianFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(
        Math.random() * namesHumanTethyrianSurname.length
      );
      result += `${namesHumanTethyrianSurname[lastNameRoll]}`;
      break;

    case `Human - Turami`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesHumanTuramiMale.length);
        result += `${namesHumanTuramiMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(
          Math.random() * namesHumanTuramiFemale.length
        );
        result += `${namesHumanTuramiFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesHumanTuramiSurname.length);
      result += `${namesHumanTuramiSurname[lastNameRoll]}`;
      break;

    case `Orc`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesOrcMale.length);
        result += `${namesOrcMale[firstNameRoll]}`;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(Math.random() * namesOrcFemale.length);
        result += `${namesOrcFemale[firstNameRoll]}`;
      }
      break;

    case `Tiefling`:
      namedBy = Math.trunc(Math.random() * 18) + 1;

      if (namedBy <= 6) {
        firstNameRoll = Math.trunc(Math.random() * namesTieflingVirtue.length);
        result += `${namesTieflingVirtue[firstNameRoll]} `;
      } else {
        if (gender === `Male`) {
          firstNameRoll = Math.trunc(Math.random() * namesTieflingMale.length);
          result += `${namesTieflingMale[firstNameRoll]} `;
        } else if (gender === `Female`) {
          firstNameRoll = Math.trunc(
            Math.random() * namesTieflingFemale.length
          );
          result += `${namesTieflingFemale[firstNameRoll]} `;
        }
      }
      break;
    default:
      break;
  }

  return `${result}`;
};

const getNPCStats = function (npcRace, npcSubrace, highScore, lowScore) {
  let stats = [];
  let roll = [];
  let result = ``;
  let statsMap = new Map([
    [`Strength`, 0],
    [`Dexterity`, 0],
    [`Constitution`, 0],
    [`Intelligence`, 0],
    [`Wisdom`, 0],
    [`Charisma`, 0],
  ]);

  let statsList = [
    `Strength`,
    `Dexterity`,
    `Constitution`,
    `Intelligence`,
    `Wisdom`,
    `Charisma`,
  ];

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      roll.push(rollXDX(1, 6));
    }
    roll.sort(function (a, b) {
      return b - a;
    });
    roll.pop();
    let total = 0;
    for (let k = 0; k < roll.length; k++) {
      total += roll[k];
    }
    stats.push(total);
    total = 0;
    roll = [];
  }

  // Make sure the high and low scores match the ones that were already chosen.
  stats.sort(function (a, b) {
    return b - a;
  });
  statsMap.set(highScore, stats[0]);
  stats.shift();
  statsList = removeFirst(statsList, highScore);
  stats.sort(function (a, b) {
    return b - a;
  });
  statsMap.set(lowScore, stats[stats.length - 1]);
  stats.pop;
  statsList = removeFirst(statsList, lowScore);
  // Randomise the rest.
  while (statsList.length >= 1) {
    const keyRoll = rollXDX(1, statsList.length, -1);
    const valueRoll = rollXDX(1, stats.length, -1);
    statsMap.set(statsList[keyRoll], stats[valueRoll]);
    statsList = removeFirst(statsList, statsList[keyRoll]);
    stats = removeFirst(stats, stats[valueRoll]);
  }
  // Get racial bonuses.
  const racialBonus = getNPCStatBonuses(npcRace, npcSubrace);
  statsList = [
    `Strength`,
    `Dexterity`,
    `Constitution`,
    `Intelligence`,
    `Wisdom`,
  ];
  for (let l = 0; l < racialBonus.length; l++) {
    if (racialBonus[l][0] === `Random`) {
      // Account for Half-Elf bonus to any stat but Charisma.
      roll = rollXDX(1, statsList.length, -1);
      statsMap.set(
        statsList[roll],
        statsMap.get(statsList[roll]) + Number(racialBonus[l][1])
      );
      statsList = removeFirst(statsList, statsList[roll]);
    } else {
      statsMap.set(
        racialBonus[l][0],
        statsMap.get(racialBonus[l][0]) + Number(racialBonus[l][1])
      );
    }
  }

  for (const [k, v] of statsMap) {
    result += `<li>${k}: ${v}</li>`;
  }

  return [Array.from(statsMap), `<li>Stats: </li><ul>${result}</ul>`];
};

const getNPCStatBonuses = function (
  npcRace = `Human`,
  npcSubrace = `No subrace`
) {
  if (npcSubrace != `No subrace`) {
    npcRace += ` - ${npcSubrace}`;
  }

  let bonusList = [];
  for (let i = 0; i < statsByRace.get(npcRace).length; i++) {
    bonusList.push([
      statsByRace.get(npcRace)[i][0],
      statsByRace.get(npcRace)[i][1],
    ]);
  }

  return bonusList;
};

const getNPCOrigin = function (npcRace, npcBackground, npcClass, npcSubrace) {
  const parents = getNPCParents(npcRace);
  const birthplace = getNPCBirthplace();
  const siblings = getNPCSiblings(npcRace, npcSubrace);
  const family = getNPCFamily();

  return `
  <li> Origin: 
    <ul>
      ${parents}
      ${birthplace}
      ${siblings}
      ${family}
    </ul>
  </li>
  `;
};

const getNPCParents = function (race) {
  let parents = ``;
  let roll = 0;
  switch (race) {
    case `Half-Elf`:
      roll = Math.trunc(Math.random() * parentsHalfElf.size) + 1;
      for (const [k, v] of parentsHalfElf) {
        if (roll <= k) {
          parents += parentsHalfElf.get(k);
          break;
        }
      }
      break;
    case `Half-Orc`:
      roll = Math.trunc(Math.random() * parentsHalfElf.size) + 1;
      for (const [k, v] of parentsHalfOrc) {
        if (roll <= k) {
          parents += parentsHalfOrc.get(k);
          break;
        }
      }
      break;
    case `Tiefling`:
      roll = Math.trunc(Math.random() * parentsHalfElf.size) + 1;
      for (const [k, v] of parentsTiefling) {
        if (roll <= k) {
          parents += parentsTiefling.get(k);
          break;
        }
      }
      break;

    default:
      roll = Math.trunc(Math.random() * parentsOther.size) + 1;
      for (const [k, v] of parentsOther) {
        if (roll <= k) {
          parents += parentsOther.get(k);
          break;
        }
      }
      break;
  }
  return `<li>${parents}</li>`;
};

const getNPCBirthplace = function () {
  let birthplace = ``;
  const roll = rollXDX(1, 100);
  for (const [k, v] of birthplaces) {
    if (roll <= k) {
      birthplace += `${v}`;
      break;
    }
  }
  return `<li>${birthplace}</li>`;
};

const getNPCSiblings = function (npcRace, npcSubrace) {
  let siblingList = ``;
  let roll = rollXDX(1, 10);
  let numSiblings = 0;

  if (npcRace === `Elf` || npcRace === `Dwarf`) {
    roll -= 2;
  }

  if (roll <= 2) {
    numSiblings = 0;
  } else if (roll >= 3 && roll <= 4) {
    numSiblings = rollXDX(1, 3);
  } else if (roll >= 5 && roll <= 6) {
    numSiblings = rollXDX(1, 4, 1);
  } else if (roll >= 7 && roll <= 8) {
    numSiblings = rollXDX(1, 6, 2);
  } else if (roll >= 9 && roll <= 10) {
    numSiblings = rollXDX(1, 8, 3);
  }

  if (numSiblings > 0) {
    for (let i = 0; i < numSiblings; i++) {
      let siblingInfo = ``;
      const siblingGender = getNPCGender();
      const siblingFullName = getNPCName(npcRace, siblingGender, npcSubrace);
      const siblingName = getSiblingFirstName(siblingFullName);
      const birthOrderRoll = rollXDX(1, 12);
      let siblingOrder = ``;
      if (birthOrderRoll <= 2) {
        siblingOrder += `<li>Twin, triplet, or quadruplet</li>`;
      } else if (birthOrderRoll >= 3 && birthOrderRoll <= 7) {
        siblingOrder += `<li>Older</li>`;
      } else if (birthOrderRoll >= 8 && birthOrderRoll <= 12) {
        siblingOrder += `<li>Younger</li>`;
      }
      siblingInfo += `
      <li>Sibling ${i + 1}</li>
      <ul>
        ${siblingName}
        ${siblingGender}
        ${siblingOrder}
      </ul>
    `;
      siblingList += siblingInfo;
    }
  } else {
    siblingList += `<li>You have no siblings</li>`;
  }

  return `<li>Siblings: <ul>${siblingList}</ul></li>`;
};

const getSiblingFirstName = function (npcName) {
  let firstPart = ``;
  let secondPart = ``;
  firstPart += npcName.slice(0, npcName.indexOf(` `));

  if (npcName.includes(`(`)) {
    secondPart += npcName.slice(npcName.indexOf(`(`), npcName.indexOf(`)`) + 1);
  }
  return `${firstPart + ` ` + secondPart}`;
};

const getNPCFamily = function () {
  let family = ``;
  let lifestyleMod = 0;
  const rollFamilyOptions = rollXDX(1, 100);
  const rollLifestyle = rollXDX(1, 16);
  const rollHome = rollXDX(1, 100);

  for (const [k, v] of familyOptions) {
    if (rollFamilyOptions <= k) {
      if (rollFamilyOptions <= 75) {
        const rollAbsentParents = rollXDX(1, 4, -1);
        family += `<li>${familyOptions.get(k)} - ${
          absentParent[rollAbsentParents]
        }</li>`;
      } else {
        family += `<li>${familyOptions.get(k)}</li>`;
      }
      break;
    }
  }

  for (const [k, v] of familyLifestyle) {
    if (rollLifestyle <= k) {
      family += `<li>${familyLifestyle.get(k)[0]}</li>`;
      lifestyleMod = familyLifestyle.get(k)[1];
      break;
    }
  }

  for (const [k, v] of childhoodHome) {
    if (rollHome + lifestyleMod <= k) {
      family += `<li>${childhoodHome.get(k)}</li>`;
      break;
    }
  }

  return `<ul>${family}</ul>`;
};

const getNPCLanguages = function (race, npcClass, background) {
  if (race.includes(`Human`)) {
    race = `Human`;
  }
  let languageList = ``;
  for (let i = 0; i < languageByRace.get(race).length; i++) {
    languageList += `<li>${languageByRace.get(race)[i]}</li>`;
  }

  if (race === `Human` || race === `Half-Elf`) {
    let i = 0;
    while (i < 1) {
      const roll = Math.trunc(Math.random() * languages.length);
      if (languageList.includes(`<li>${languages[roll]}</li>`)) {
        // Don't add a language, so don't increment the counter.
      } else {
        languageList += `<li>${languages[roll]}</li>`;
        i++;
      }
    }
  }

  if (background > 0) {
    let i = 0;
    while (i < background) {
      const roll = Math.trunc(Math.random() * languages.length);
      if (languageList.includes(`<li>${languages[roll]}</li>`)) {
        // Don't add a language, so don't increment the counter.
      } else {
        languageList += `<li>${languages[roll]}</li>`;
        i++;
      }
    }
  }

  if (npcClass === `Druid`) {
    languageList += `<li>Druidic</li>`;
  } else if (npcClass === `Rogue`) {
    languageList += `<li>Thieves' Cant</li>`;
  }

  return languageList;
};

const getNPCTools = function (backgroundTools) {
  let toolList = ``;
  if (backgroundTools != []) {
    for (let i = 0; i < backgroundTools.length; i++) {
      if (backgroundTools[i] === `Artisan's Tools`) {
        const roll = Math.trunc(Math.random() * artisansTools.length);
        toolList += `<li>${artisansTools[roll]}</li>`;
      } else if (backgroundTools[i] === `Musical Instrument`) {
        const roll = Math.trunc(Math.random() * musicalInstruments.length);
        toolList += `<li>${musicalInstruments[roll]}</li>`;
      } else if (backgroundTools[i] === `Gaming Set`) {
        const roll = Math.trunc(Math.random() * gamingSets.length);
        toolList += `<li>${gamingSets[roll]}</li>`;
      } else {
        toolList += `<li>${backgroundTools[i]}</li>`;
      }
    }
  } else {
    return null;
  }

  return toolList;
};

const getSimpleAppearance = function () {
  const roll = Math.trunc(Math.random() * randomNPCAppearance.size) + 1;
  return randomNPCAppearance.get(roll);
};

const getNPCHighAbility = function () {
  const roll = Math.trunc(Math.random() * randomNPCHighAbility.size) + 1;
  const getAdjective =
    Math.trunc(Math.random() * randomNPCHighAbility.get(roll).length - 1) + 1; // Get an index from 1 to 3, skipping the unwanted 0th item.
  return [
    randomNPCHighAbility.get(roll)[0],
    `<li>${randomNPCHighAbility.get(roll)[getAdjective]}</li>`,
  ];
};

const getNPCLowAbility = function (highAbility) {
  const roll = Math.trunc(Math.random() * randomNPCLowAbility.size) + 1;
  const getAdjective =
    Math.trunc(Math.random() * randomNPCLowAbility.get(roll).length - 1) + 1;

  if (randomNPCLowAbility.get(roll)[0] === highAbility) {
    return getNPCLowAbility(highAbility);
  }
  return [
    randomNPCLowAbility.get(roll)[0],
    `<li>${randomNPCLowAbility.get(roll)[getAdjective]}</li>`,
  ];
};

const getNPCTalent = function () {
  const roll = Math.trunc(Math.random() * randomNPCTalents.size) + 1;
  return randomNPCTalents.get(roll);
};

const getNPCMannerism = function () {
  const roll = Math.trunc(Math.random() * randomNPCMannerisms.size) + 1;
  return randomNPCMannerisms.get(roll);
};

const getNPCInteractionTrait = function () {
  const roll = Math.trunc(Math.random() * randomNPCInteractionTraits.size) + 1;
  return randomNPCInteractionTraits.get(roll);
};

const getNPCIdeal = function () {
  let result = ``;

  const rollGNE = Math.trunc(Math.random() * 3);
  const rollLNC = Math.trunc(Math.random() * 3);
  const firstRoll = Math.trunc(Math.random() * 6);
  const secondRoll = Math.trunc(Math.random() * 6);

  switch (rollLNC) {
    case 0:
      result += `<li>Lawful: ${randomNPCIdeals.get(`Lawful`)[secondRoll]}</li>`;
      break;
    case 1:
      result += `<li>Neutral: ${randomNPCIdeals.get(`Other`)[secondRoll]}</li>`;
      break;
    case 2:
      result += `<li>Chaotic: ${
        randomNPCIdeals.get(`Chaotic`)[secondRoll]
      }</li>`;
      break;
    default:
      break;
  }

  switch (rollGNE) {
    case 0:
      result += `<li>Good: ${randomNPCIdeals.get(`Good`)[firstRoll]}</li>`;
      break;
    case 1:
      result += `<li>Neutral: ${
        randomNPCIdeals.get(`Neutral`)[firstRoll]
      }</li>`;
      break;
    case 2:
      result += `<li>Evil:  ${randomNPCIdeals.get(`Evil`)[firstRoll]}</li>`;
      break;
    default:
      break;
  }

  return `${result}`;
};

const getNPCBond = function () {
  const roll = Math.trunc(Math.random() * randomNPCBonds.size) + 1;

  if (roll === 10) {
    const firstRoll = Math.trunc(Math.random() * randomNPCBonds.size - 1) + 1;
    const secondRoll = Math.trunc(Math.random() * randomNPCBonds.size - 1) + 1;
    return `${randomNPCBonds.get(firstRoll)}, ${randomNPCBonds.get(
      secondRoll
    )}`;
  }

  return `${randomNPCBonds.get(roll)}`;
};

const getNPCFlaw = function () {
  const roll = Math.trunc(Math.random() * randomNPCFlaws.size) + 1;
  return `${randomNPCFlaws.get(roll)}`;
};

const getNPCBackground = function () {
  const rollBackground = Math.trunc(Math.random() * backgrounds.size);
  const background = Array.from(backgrounds.keys())[rollBackground];

  const rollFirstTrait = Math.trunc(
    Math.random() * backgrounds.get(background).personality.length
  );
  const rollSecondTrait = Math.trunc(
    Math.random() * backgrounds.get(background).personality.length
  );
  const rollIdeal = Math.trunc(
    Math.random() * backgrounds.get(background).ideal.length
  );
  const rollBond = Math.trunc(
    Math.random() * backgrounds.get(background).bond.length
  );
  const rollFlaw = Math.trunc(
    Math.random() * backgrounds.get(background).flaw.length
  );

  let rollSpecialty = -1;
  let specialty = ``;
  if (backgrounds.get(background).hasOwnProperty(`scheme`)) {
    rollSpecialty = Math.trunc(
      Math.random() * backgrounds.get(background).scheme.length
    );
    specialty += backgrounds.get(background).scheme[rollSpecialty];
  } else if (backgrounds.get(background).hasOwnProperty(`specialty`)) {
    rollSpecialty = Math.trunc(
      Math.random() * backgrounds.get(background).specialty.length
    );
    specialty += backgrounds.get(background).specialty[rollSpecialty];
  } else if (backgrounds.get(background).hasOwnProperty(`routine`)) {
    rollSpecialty = Math.trunc(
      Math.random() * backgrounds.get(background).routine.length
    );
    specialty += backgrounds.get(background).routine[rollSpecialty];
  } else if (backgrounds.get(background).hasOwnProperty(`defininigEvent`)) {
    rollSpecialty = Math.trunc(
      Math.random() * backgrounds.get(background).definingEvent.length
    );
  } else if (backgrounds.get(background).hasOwnProperty(`guildBusiness`)) {
    rollSpecialty = Math.trunc(
      Math.random() * backgrounds.get(background).guildBusiness.length
    );
    specialty += backgrounds.get(background).guildBusiness[rollSpecialty];
  } else if (backgrounds.get(background).hasOwnProperty(`lifeOfSeclusion`)) {
    rollSpecialty = Math.trunc(
      Math.random() * backgrounds.get(background).lifeOfSeclusion.length
    );
    specialty += backgrounds.get(background).lifeOfSeclusion[rollSpecialty];
  } else if (backgrounds.get(background).hasOwnProperty(`origin`)) {
    rollSpecialty = Math.trunc(
      Math.random() * backgrounds.get(background).origin.length
    );
    specialty += backgrounds.get(background).origin[rollSpecialty];
  } else {
    specialty = `No specialty`;
  }

  return [background, specialty];
};

const getNPCClass = function (highAbility, lowAbility, npcStatArray) {
  const statList = [
    `Strength`,
    `Dexterity`,
    `Constitution`,
    `Intelligence`,
    `Wisdom`,
    `Charisma`,
  ];

  const highIndex = statList.indexOf(highAbility);
  const lowIndex = statList.indexOf(lowAbility);
  const npcClass = classGrid[highIndex][lowIndex];

  const level = rollXDX(1, 20);

  return [
    npcClass,
    classes.get(npcClass),
    `
  <li>${npcClass}</li>
  <ul>
    <li>Hitpoints: ${classes.get(npcClass).hitpoints[1]}</li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  `,
  ];
};

btnGenerateSimpleNPC.addEventListener(`click`, generateSimpleNPC);
btnGenerateComplexNPC.addEventListener(`click`, generateComplexNPC);
