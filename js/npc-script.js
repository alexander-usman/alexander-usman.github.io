"use strict";
// DOM Elements
const resultsDiv = document.querySelector(`.results`);
const btnGenerateSimpleNPC = document.querySelector(`.btnGenerateSimpleNPC`);
const btnGenerateComplexNPC = document.querySelector(`.btnGenerateComplexNPC`);
// Global
const simpleNPCs = [];
const complexNPCs = [];

// Helper Functions
/**
 * Removes the first occurence of element in a provided array and returns the result.
 * @param [Array] arr
 * @param [Any] element
 * @returns Array
 */
const removeFirst = function (arr, element) {
  const index = arr.indexOf(element);
  if (index === -1) return arr;
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

/**
 * Rolls numDice number of dWhat-sided dice, adds the provided modifier and returns the result.
 * @param [number] numDice = how many dice to roll
 * @param [number] dWhat = what number sided dice
 * @param [number] modifier
 * @returns [number] Roll result
 */
const rollXDX = function (numDice = 1, dWhat = 6, modifier = 0) {
  let roll = 0;

  for (let i = 0; i < numDice; i++) {
    roll += Math.trunc(Math.random() * dWhat) + 1;
  }

  roll += modifier;

  return roll;
};

/**
 * Generates a simple NPC, pushes it to the simpleNPCs list, and adds the results to the HTML.
 */
const generateSimpleNPC = function () {
  const newNPC = new SimpleNPC();
  // simpleNPCs.push(newNPC);
  resultsDiv.innerHTML = `
    ${newNPC.toPrettyHTML()}
  `;
};

/**
 * Generates a complex NPC, pushes it to the complexNPCs list, and adds the results to the HTML.
 */
const generateComplexNPC = function () {
  const newNPC = new ComplexNPC();
  // complexNPCs.push(newNPC);
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
  this.age = getNPCAge(this.race, this.subrace);
  this.highScore = getNPCHighAbility();
  this.lowScore = getNPCLowAbility(this.highScore[0]);
  this.talent = getNPCTalent();
  this.mannerism = getNPCMannerism();
  this.interactionTrait = getNPCInteractionTrait();
  this.appearance = getSimpleAppearance();
  this.ideals = getNPCIdeals();
  this.bond = getNPCBond();
  this.flaw = getNPCFlaw();
  this.toPrettyHTML = function () {
    return `
    <ul>
    <li>Race: ${this.race} - ${this.subrace}</li>
    <li>Gender: ${this.gender}</li>
    <li>Name: ${this.name}</li>
    <li>Age: ${this.age}</li>
    <li>Appearance: ${this.appearance}</li>
    <li>High Ability: ${this.highScore[1]}</li>
    <li>Low Ability: ${this.lowScore[1]}</li>
    <li>Talent: ${this.talent}</li>
    <li>Mannerism: ${this.mannerism}</li>
    <li>Interaction Trait: ${this.interactionTrait}</li>
    <li>Ideals</li>
    <ul>${this.ideals}</ul>
    <li>Bond: ${this.bond}</li>
    <li>Flaw: ${this.flaw}</li>
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
  this.age = getNPCAge(this.race, this.subrace);
  this.highScore = getNPCHighAbility();
  this.lowScore = getNPCLowAbility(this.highScore[0]);
  this.stats = getNPCStats(
    this.race,
    this.subrace,
    this.highScore[0],
    this.lowScore[0]
  );
  this.talent = getNPCTalent();
  this.mannerism = getNPCMannerism();
  this.interactionTrait = getNPCInteractionTrait();
  const wholeBackground = getNPCBackground();

  this.background = wholeBackground[0];
  this.background.specialty = wholeBackground[1];
  this.background.decision = wholeBackground[2];
  const rollFirstTrait = Math.trunc(
    Math.random() * this.background.personality.length
  );
  const rollSecondTrait = Math.trunc(
    Math.random() * this.background.personality.length
  );
  const rollIdeal = Math.trunc(Math.random() * this.background.ideal.length);
  const rollBond = Math.trunc(Math.random() * this.background.bond.length);
  const rollFlaw = Math.trunc(Math.random() * this.background.flaw.length);
  this.firstTrait = this.background.personality[rollFirstTrait];
  this.secondTrait = this.background.personality[rollSecondTrait];
  this.ideal = this.background.ideal[rollIdeal];
  this.bond = this.background.bond[rollBond];
  this.flaw = this.background.flaw[rollFlaw];
  this.equipment = this.background.equipment;
  this.npcClass = getNPCClass(
    this.highScore[0],
    this.lowScore[0],
    this.stats[0]
  );
  const rollDecision = rollXDX(1, 6, -1);
  this.npcClass.decision = personalDecisionsClasses.get(this.npcClass.name)[
    rollDecision
  ];

  this.skills = getNPCSkills(this.background, this.npcClass);
  this.level = rollXDX(1, 20);
  this.getHitpoints = function (level, hitDice, modifier) {
    // Set hitpoints to max for level 1.
    let total = hitDice + modifier;
    level -= 1;

    for (let i = 0; i < level; i++) {
      total += rollXDX(1, hitDice, modifier);
    }

    return total;
  };
  this.hitpoints = this.getHitpoints(
    this.level,
    this.npcClass.hitpoints,
    Number(this.stats[2][1][1].substring(1))
  );
  this.languages = getNPCLanguages(
    this.race,
    this.npcClass[0],
    this.background.languages
  );
  this.tools = getNPCTools(this.background.tools);
  this.appearance = getSimpleAppearance();
  const origin = getNPCOrigin(
    this.race,
    this.subrace,
    this.npcClass[0],
    Number(this.stats[5][1][1].substring(1)), // Charisma modifier
    this.age
  );
  // TODO: Make this an object.
  this.parents = origin[0];
  this.birthplace = origin[1];
  this.siblings = origin[2];
  this.family = origin[3];
  this.memories = origin[4];
  this.toPrettyHTML = function () {
    return `
    <ul>
    <li>Race: ${this.race} - ${this.subrace}</li>
    <li>Gender: ${this.gender}</li>
    <li>Name: ${this.name}</li>
    <li>Age: ${this.age}</li>
    ${this.displayStats()}
    <li>You speak: </li><ul>${this.languages}</ul>
    <li>You can use: </li><ul>${this.tools}</ul>
    <li>Appearance: ${this.appearance}</li>
    <li>High Ability: ${this.highScore[1]}</li>
    <li>Low Ability: ${this.lowScore[1]}</li>
    <li>Talent: ${this.talent}</li>
    <li>Mannerism: ${this.mannerism}</li>
    <li>Interaction Trait: ${this.interactionTrait}</li>
    <li>Background: ${this.background.name} - ${this.background.specialty}</li>
      <ul>
        <li>Trait One: ${this.firstTrait}</li>
        <li>Trait Two: ${this.secondTrait}</li>
        <li>Ideal: ${this.ideal}</li>
        <li>Bond: ${this.bond}</li>
        <li>Flaw: ${this.flaw}</li>
        <li>Decision: ${this.background.decision}</li>
        <li>Equipment: ${this.equipment}</li>
      </ul>
    ${this.displayOrigin()}
    ${this.displayClass()}
    </ul>`;
  };
  this.displayStats = function () {
    let result = ``;
    for (const [k, v] of this.stats) {
      result += `<li>${k}: ${v[0]} (${v[1]})</li>`;
    }
    return `
      <li>Stats: </li>
      <ul>
        ${result}
      </ul>
    `;
  };
  this.displayOrigin = function () {
    return `
    <li>
      Origin:
      <ul>
        <li>Parents: ${this.parents}</li>
        <li>Birthplace: ${this.birthplace}</li>
        ${this.displaySiblings()}
        ${this.displayFamily()}
        <li>Childhood Memories: ${this.memories}</li>
      </ul>
    </li>
    `;
  };
  this.displaySiblings = function () {
    let result = ``;
    for (const k of this.siblings) {
      result += `
      <li>Sibling ${k.number}:</li>
      <ul>
      <li>${k.name}</li>
      <li>${k.gender}</li>
      <li>${k.order}</li>
      </ul>
      `;
    }
    return `
      <li>Siblings: </li>
      <ul>
        ${result}
      </ul>
    `;
  };
  this.displayFamily = function () {
    return `
      <li>Famliy: </li>
      <ul>
        <li>Raised By: ${this.family.options}</li>
        <li>Lifestyle: ${this.family.lifestyle}</li>
        <li>Childhood Home: ${this.family.childhooHome}</li>
      </ul>
    `;
  };
  this.displayClass = function () {
    return `
      <li>${this.npcClass.name} - ${this.level}</li>
    <ul>
      <li>Hitpoints: ${this.hitpoints}</li>
      ${this.displaySkills()}
      <li>Decision: ${this.npcClass.decision}</li>
      <li></li>
    </ul>
    `;
  };
  this.displaySkills = function () {
    let result = ``;
    for (let i = 0; i < this.skills.length; i++) {
      result += `<li>${this.skills[i]}</li>`;
    }
    return `
      <li>Skills: </li>
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
  let otherNameRoll = 0;
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
      otherNameRoll = Math.trunc(Math.random() * namesElfChild.length);
      result += ` (Child name: ${namesElfChild[otherNameRoll]})`;
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
    case `Aasimar - Protector`:
    case `Aasimar - Scourge`:
    case `Aasimar - Fallen`:
      result += getNPCName(`Human - ${randomHumanType.get(namedBy)}`, gender);
      return result;
      break;
    case `Firbolg`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesFirbolgMale.length);
        result += `${namesFirbolgMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(Math.random() * namesFirbolgFemale.length);
        result += `${namesFirbolgFemale[firstNameRoll]} `;
      }
      break;
    case `Goliath`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesGoliathMale.length);
        result += `${namesGoliathMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(Math.random() * namesGoliathFemale.length);
        result += `${namesGoliathFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesGoliathClan.length);
      result += `${namesGoliathClan[lastNameRoll]}`;
      otherNameRoll = Math.trunc(Math.random() * namesGoliathNickname.length);
      result += ` (Nickname: ${namesGoliathNickname[otherNameRoll]})`;
      break;
    case `Kenku`:
      firstNameRoll = Math.trunc(Math.random() * namesKenku.length);
      result += `${namesKenku[firstNameRoll]} `;
      break;
    case `Lizardfolk`:
      firstNameRoll = Math.trunc(Math.random() * namesLizardfolk.length);
      result += `${namesLizardfolk[firstNameRoll]} `;
      break;
    case `Tabaxi`:
      firstNameRoll = Math.trunc(Math.random() * namesTabaxiFirst.length);
      result += `${namesTabaxiFirst[firstNameRoll]} `;
      lastNameRoll = Math.trunc(Math.random() * namesTabaxiClan.length);
      result += `${namesTabaxiClan[lastNameRoll]}`;
      break;
    case `Triton`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesTritonMale.length);
        result += `${namesTritonMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(Math.random() * namesTritonFemale.length);
        result += `${namesTritonFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesTritonSurname.length);
      result += `${namesTritonSurname[lastNameRoll]}`;
      break;
    case `Bugbear`:
      firstNameRoll = Math.trunc(Math.random() * namesBugbearFirst.length);
      result += `${namesBugbearFirst[firstNameRoll]} `;
      lastNameRoll = Math.trunc(Math.random() * namesBugbearLast.length);
      result += `${namesBugbearLast[lastNameRoll]}`;
      break;
    case `Goblin`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesGoblinMale.length);
        result += `${namesGoblinMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(Math.random() * namesGoblinFemale.length);
        result += `${namesGoblinFemale[firstNameRoll]} `;
      }
      lastNameRoll = Math.trunc(Math.random() * namesGoblinClan.length);
      result += `${namesGoblinClan[lastNameRoll]}`;
      break;
    case `Hobgoblin`:
      firstNameRoll = Math.trunc(Math.random() * namesHobgoblinFirst.length);
      result += `${namesHobgoblinFirst[firstNameRoll]} `;
      lastNameRoll = Math.trunc(Math.random() * namesHobgoblinClan.length);
      result += `${namesHobgoblinClan[lastNameRoll]}`;
      break;
    case `Kobold`:
      firstNameRoll = Math.trunc(Math.random() * namesKobold.length);
      result += `${namesKobold[firstNameRoll]} `;
      break;
    case `Orc`:
      if (gender === `Male`) {
        firstNameRoll = Math.trunc(Math.random() * namesOrcMale.length);
        result += `${namesOrcMale[firstNameRoll]}`;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(Math.random() * namesOrcFemale.length);
        result += `${namesOrcFemale[firstNameRoll]}`;
      }
      lastNameRoll = Math.trunc(Math.random() * namesOrcEpithet.length);
      result += `${namesOrcEpithet[lastNameRoll]}`;
      break;
    case `Yuan-Ti`:
      firstNameRoll = Math.trunc(Math.random() * namesYuanTi.length);
      result += `${namesYuanTi[firstNameRoll]} `;
      break;
    default:
      break;
  }
  return `${result}`;
};

const getNPCAge = function (race = `Human`, subrace = `No subrace`) {
  let result = 0;

  if (subrace != `No subrace`) {
    race += ` - ${subrace}`;
  }

  result = rollXDX(
    1,
    agesByRace.get(race)[1] - agesByRace.get(race)[0] - 1,
    agesByRace.get(race)[0]
  );

  return result;
};

const getNPCStats = function (npcRace, npcSubrace, highScore, lowScore) {
  let stats = [];
  let roll = [];
  let result = ``;
  let statsMap = new Map([
    [`Strength`, [0, ``]],
    [`Dexterity`, [0, ``]],
    [`Constitution`, [0, ``]],
    [`Intelligence`, [0, ``]],
    [`Wisdom`, [0, ``]],
    [`Charisma`, [0, ``]],
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
  const racialBonus = getNPCRacialStats(npcRace, npcSubrace);
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
    statsMap.set(k, [v, getStatModifier(v)]);
  }

  return Array.from(statsMap);
};

const getNPCRacialStats = function (
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

const getStatModifier = function (stat) {
  const modifier = Math.floor((stat - 10) / 2);

  if (modifier >= 0) {
    return `+${modifier}`;
  } else {
    return `${modifier}`;
  }
};

const getNPCOrigin = function (
  npcRace,
  npcSubrace,
  npcClass,
  charismaMod,
  npcAge
) {
  const parents = getNPCParents(npcRace);
  const birthplace = getNPCBirthplace();
  const siblings = getNPCSiblings(npcRace, npcSubrace);
  const family = getNPCFamily();
  const memories = getNPCMemories(charismaMod);
  const lifeEvents = getNPCLifeEvents(npcAge);

  return [parents, birthplace, siblings, family, memories, lifeEvents];
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
  return parents;
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
  return birthplace;
};

const getNPCSiblings = function (npcRace, npcSubrace) {
  let siblingList = [];
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
      let siblingInfo = {};
      const siblingGender = getNPCGender();
      const siblingFullName = getNPCName(npcRace, siblingGender, npcSubrace);
      const siblingName = getSiblingFirstName(siblingFullName);
      const birthOrderRoll = rollXDX(1, 12);
      let siblingOrder = ``;
      if (birthOrderRoll <= 2) {
        siblingOrder += `Twin, triplet, or quadruplet`;
      } else if (birthOrderRoll >= 3 && birthOrderRoll <= 7) {
        siblingOrder += `Older`;
      } else if (birthOrderRoll >= 8 && birthOrderRoll <= 12) {
        siblingOrder += `Younger`;
      }
      siblingInfo = {
        number: i + 1,
        name: siblingName,
        gender: siblingGender,
        order: siblingOrder,
      };
      siblingList.push(siblingInfo);
    }
  }
  return siblingList;
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
  let family = {};
  let lifestyleMod = 0;
  const rollFamilyOptions = rollXDX(1, 100);
  const rollLifestyle = rollXDX(1, 16);
  const rollHome = rollXDX(1, 100);

  for (const [k, v] of familyOptions) {
    if (rollFamilyOptions <= k) {
      if (rollFamilyOptions <= 75) {
        const rollAbsentParents = rollXDX(1, 4, -1);
        family.options = `${familyOptions.get(k)} - ${
          absentParent[rollAbsentParents]
        }`;
      } else {
        family.options = `${familyOptions.get(k)}`;
      }
      break;
    }
  }

  for (const [k, v] of familyLifestyle) {
    if (rollLifestyle <= k) {
      family.lifestyle = `${familyLifestyle.get(k)[0]}`;
      family.lifestyleMod = familyLifestyle.get(k)[1];
      break;
    }
  }

  for (const [k, v] of childhoodHome) {
    if (rollHome + family.lifestyleMod <= k) {
      family.childhooHome = `${childhoodHome.get(k)}`;
      break;
    }
  }

  return family;
};

const getNPCMemories = function (chaMod) {
  const rollMemory = rollXDX(3, 6, chaMod);
  let result = ``;
  for (const [k, v] of childhoodMemories) {
    if (rollMemory <= k) {
      result += childhoodMemories.get(k);
      break;
    }
  }

  return result;
};

const getNPCLifeEvents = function (npcAge) {
  const result = [];
  let maxEvents = 0;

  for (const [k, v] of lifeEventsByAge) {
    if (npcAge <= k) {
      maxEvents = v;
      break;
    }
  }

  const numEvents = rollXDX(1, maxEvents);
  for (let i = 0; i < numEvents; i++) {}
};

/**
 * Takes a race, class and langNum and returns a list of known languages.
 * @param [String] race
 * @param [String] npcClass
 * @param [Int] langNum =number of languages
 * @returns [String] Language list
 */
const getNPCLanguages = function (race, npcClass, langNum) {
  if (race.includes(`Human`)) {
    race = `Human`;
  }
  let languageList = ``;
  for (let i = 0; i < languageByRace.get(race).length; i++) {
    languageList += `<li>${languageByRace.get(race)[i]}</li>`;
  }

  if (race === `Human` || race === `Half-Elf` || race === `Tabaxi`) {
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

  if (langNum > 0) {
    let i = 0;
    while (i < langNum) {
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
    randomNPCHighAbility.get(roll)[getAdjective],
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
    randomNPCLowAbility.get(roll)[getAdjective],
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

const getNPCIdeals = function () {
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
  const background = {
    ...backgrounds.get(Array.from(backgrounds.keys())[rollBackground]),
  };

  let rollSpecialty = -1;
  let specialty = ``;
  if (background.hasOwnProperty(`scheme`)) {
    rollSpecialty = Math.trunc(Math.random() * background.scheme.length);
    specialty += background.scheme[rollSpecialty];
  } else if (background.hasOwnProperty(`specialty`)) {
    rollSpecialty = Math.trunc(Math.random() * background.specialty.length);
    specialty += background.specialty[rollSpecialty];
  } else if (background.hasOwnProperty(`routine`)) {
    rollSpecialty = Math.trunc(Math.random() * background.routine.length);
    specialty += background.routine[rollSpecialty];
  } else if (background.hasOwnProperty(`defininigEvent`)) {
    rollSpecialty = Math.trunc(Math.random() * background.definingEvent.length);
  } else if (background.hasOwnProperty(`guildBusiness`)) {
    rollSpecialty = Math.trunc(Math.random() * background.guildBusiness.length);
    specialty += background.guildBusiness[rollSpecialty];
  } else if (background.hasOwnProperty(`lifeOfSeclusion`)) {
    rollSpecialty = Math.trunc(
      Math.random() * background.lifeOfSeclusion.length
    );
    specialty += background.lifeOfSeclusion[rollSpecialty];
  } else if (background.hasOwnProperty(`origin`)) {
    rollSpecialty = Math.trunc(Math.random() * background.origin.length);
    specialty += background.origin[rollSpecialty];
  } else {
    specialty = `No specialty`;
  }

  const rollDecision = rollXDX(1, 6, -1);
  const decision = personalDecisionsBackgrounds.get(background.name)[
    rollDecision
  ];

  return [background, specialty, decision];
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

  return { ...classes.get(npcClass) };
};
const getNPCSkills = function (background, npcClass) {
  const skillArray = [];
  // Copy the array across to avoid modifying the original elsewhere.
  for (let i = 0; i < background.skills.length; i++) {
    skillArray.push(background.skills[i]);
  }

  let j = 0;
  while (j < npcClass.numSkills) {
    const roll = rollXDX(1, npcClass.skills.length, -1);
    if (skillArray.includes(npcClass.skills[roll])) {
    } else {
      skillArray.push(npcClass.skills[roll]);
      j++;
    }
  }

  return skillArray;
};

btnGenerateSimpleNPC.addEventListener(`click`, generateSimpleNPC);
btnGenerateComplexNPC.addEventListener(`click`, generateComplexNPC);
