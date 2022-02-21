"use strict";
// DOM Elements
const resultsDiv = document.querySelector(`.results`);
const btnGenerateSimpleNPC = document.querySelector(`.btnGenerateSimpleNPC`);
const btnGenerateComplexNPC = document.querySelector(`.btnGenerateComplexNPC`);
const btnRemoveSimpleNPC = document.querySelector(`.btnRemoveSimpleNPC`);
const btnRemoveComplexNPC = document.querySelector(`.btnRemoveComplexNPC`);
const selectSimpleNPC = document.querySelector(
  `.simpleNPCGenerator .selectSimpleNPC`
);
const selectComplexNPC = document.querySelector(
  `.complexNPCGenerator .selectComplexNPC`
);
const selectSpecificSimpleNPCRace = document.querySelector(
  `.selectSpecificSimpleNPCRace`
);
const selectSpecificSimpleNPCSubrace = document.querySelector(
  `.selectSpecificSimpleNPCSubrace`
);
const selectSpecificSimpleNPCGender = document.querySelector(
  `.selectSpecificSimpleNPCGender`
);
const btnGenerateSpecificSimpleNPC = document.querySelector(
  `.btnGenerateSpecificSimpleNPC`
);
const selectSpecificSimpleNPC = document.querySelector(
  `.selectSpecificSimpleNPC`
);
const btnRemoveSpecificSimpleNPC = document.querySelector(
  `.btnRemoveSpecificSimpleNPC`
);
// Global
let simpleNPCs = [];
let complexNPCs = [];
let specificSimpleNPCs = [];
let npcDepth = 0;
// On Load
window.onload = function () {
  selectSimpleNPC.onchange = function () {
    for (let i = 0; i < simpleNPCs.length; i++) {
      if (simpleNPCs[i].name === selectSimpleNPC.value) {
        resultsDiv.innerHTML = `${simpleNPCs[i].toPrettyHTML()}`;
      }
    }
  };

  selectComplexNPC.onchange = function () {
    for (let i = 0; i < complexNPCs.length; i++) {
      if (complexNPCs[i].name === selectComplexNPC.value) {
        resultsDiv.innerHTML = `${complexNPCs[i].toPrettyHTML()}`;
      }
    }
  };

  selectSpecificSimpleNPC.onchange = function () {
    for (let i = 0; i < specificSimpleNPCs.length; i++) {
      if (specificSimpleNPCs[i].name === selectSpecificSimpleNPC.value) {
        resultsDiv.innerHTML = `${specificSimpleNPCs[i].toPrettyHTML()}`;
      }
    }
  };

  for (let i = 1; i < randomNPCRace.size; i++) {
    selectSpecificSimpleNPCRace.options[
      selectSpecificSimpleNPCRace.options.length
    ] = new Option(randomNPCRace.get(i)[0], i);
  }

  selectSpecificSimpleNPCRace.onchange = function () {
    selectSpecificSimpleNPCSubrace.length = 1;
    //display correct values
    let subraceList = randomNPCRace.get(Number(this.value))[1];
    for (let i = 0; i < subraceList.length; i++) {
      selectSpecificSimpleNPCSubrace.options[
        selectSpecificSimpleNPCSubrace.options.length
      ] = new Option(subraceList[i], subraceList[i]);
    }
  };
};
// Classes
class SimpleNPC {
  #raceRoll;
  #race;
  #subrace;
  #gender;
  #name;
  #age;
  #highScore;
  #lowScore;
  #talent;
  #mannerism;
  #interactionTrait;
  #appearance;
  #ideals;
  #bond;
  #flaw;
  constructor() {
    npcDepth++;
    const wholeRace = getNPCRace();
    this.#raceRoll = wholeRace[0];
    this.#race = wholeRace[1];
    this.#subrace = getNPCSubrace(this.#raceRoll);
    this.#gender = getNPCGender();
    this.#name = getNPCName(this.race, this.gender, this.subrace);
    this.#age = getNPCAge(this.race, this.subrace);
    this.#highScore = getNPCHighAbility();
    this.#lowScore = getNPCLowAbility(this.highScore[0]);
    this.#talent = getNPCTalent();
    this.#mannerism = getNPCMannerism();
    this.#interactionTrait = getNPCInteractionTrait();
    this.#appearance = getSimpleAppearance();
    this.ideals = getNPCIdeals();
    this.#bond = getNPCBond();
    this.#flaw = getNPCFlaw();
  }
  toPrettyHTML = function () {
    return `
    <ul>
    <li>Race: ${this.#race} - ${this.#subrace}</li>
    <li>Gender: ${this.#gender}</li>
    <li>Name: ${this.#name}</li>
    <li>Age: ${this.#age}</li>
    <li>Appearance: ${this.#appearance}</li>
    <li>High Ability Trait: ${this.#highScore[1]}</li>
    <li>Low Ability Trait: ${this.#lowScore[1]}</li>
    <li>Talent: ${this.#talent}</li>
    <li>Mannerism: ${this.#mannerism}</li>
    <li>Interaction Trait: ${this.#interactionTrait}</li>
    <li>Ideals</li>
    <ul>${this.#ideals}</ul>
    <li>Bond: ${this.#bond}</li>
    <li>Flaw: ${this.#flaw}</li>
    </ul>`;
  };
  get raceRoll() {
    return this.#raceRoll;
  }
  set raceRoll(npcRaceRoll) {
    this.#raceRoll = npcRaceRoll;
  }
  get race() {
    return this.#race;
  }
  set race(npcRace) {
    this.#race = npcRace;
  }
  get subrace() {
    return this.#subrace;
  }
  set subrace(npcSubrace) {
    this.#subrace = npcSubrace;
  }
  get gender() {
    return this.#gender;
  }
  set gender(npcGender) {
    this.#gender = npcGender;
  }
  get name() {
    return this.#name;
  }
  set name(npcName) {
    this.#name = npcName;
  }
  get age() {
    return this.#age;
  }
  set age(npcAge) {
    this.#age = npcAge;
  }
  get highScore() {
    return this.#highScore;
  }
  set highScore(npcHighScore) {
    this.#highScore = npcHighScore;
  }
  get lowScore() {
    return this.#lowScore;
  }
  set lowScore(npcLowScore) {
    this.#lowScore = npcLowScore;
  }
  get talent() {
    return this.#talent;
  }
  set talent(npcTalent) {
    this.#talent = npcTalent;
  }
  get mannerism() {
    return this.#mannerism;
  }
  set mannerism(npcMannerism) {
    this.#mannerism = npcMannerism;
  }
  get interactionTrait() {
    return this.#interactionTrait;
  }
  set interactionTrait(npcInteractionTrait) {
    this.#interactionTrait = npcInteractionTrait;
  }
  get appearance() {
    return this.#appearance;
  }
  set appearance(npcAppearance) {
    this.#appearance = npcAppearance;
  }
  get ideals() {
    return this.#ideals;
  }
  set ideals(npcIdeals) {
    this.#ideals = npcIdeals;
  }
  get bond() {
    return this.#bond;
  }
  set bond(npcBond) {
    this.#bond = npcBond;
  }
  get flaw() {
    return this.#flaw;
  }
  set flaw(npcFlaw) {
    this.#flaw = npcFlaw;
  }
}

class SpecificSimpleNPC {
  #race;
  #subrace;
  #gender;
  #name;
  #age;
  #highScore;
  #lowScore;
  #talent;
  #mannerism;
  #interactionTrait;
  #appearance;
  #ideals;
  #bond;
  #flaw;
  constructor(npcRace, npcSubrace, npcGender) {
    this.#race = npcRace;
    this.#subrace = npcSubrace;
    this.#gender = npcGender;
    this.#name = getNPCName(this.race, this.gender, this.subrace);
    this.#age = getNPCAge(this.race, this.subrace);
    this.#highScore = getNPCHighAbility();
    this.#lowScore = getNPCLowAbility(this.highScore[0]);
    this.#talent = getNPCTalent();
    this.#mannerism = getNPCMannerism();
    this.#interactionTrait = getNPCInteractionTrait();
    this.#appearance = getSimpleAppearance();
    this.#ideals = getNPCIdeals();
    this.#bond = getNPCBond();
    this.#flaw = getNPCFlaw();
  }
  toPrettyHTML = function () {
    return `
    <ul>
    <li>Race: ${this.race} - ${this.subrace}</li>
    <li>Gender: ${this.gender}</li>
    <li>Name: ${this.name}</li>
    <li>Age: ${this.age}</li>
    <li>Appearance: ${this.appearance}</li>
    <li>High Ability Trait: ${this.highScore[1]}</li>
    <li>Low Ability Trait: ${this.lowScore[1]}</li>
    <li>Talent: ${this.talent}</li>
    <li>Mannerism: ${this.mannerism}</li>
    <li>Interaction Trait: ${this.interactionTrait}</li>
    <li>Ideals</li>
    <ul>${this.ideals}</ul>
    <li>Bond: ${this.bond}</li>
    <li>Flaw: ${this.flaw}</li>
    </ul>`;
  };
  get race() {
    return this.#race;
  }
  set race(npcRace) {
    this.#race = npcRace;
  }
  get subrace() {
    return this.#subrace;
  }
  set subrace(npcSubrace) {
    this.#subrace = npcSubrace;
  }
  get gender() {
    return this.#gender;
  }
  set gender(npcGender) {
    this.#gender = npcGender;
  }
  get name() {
    return this.#name;
  }
  set name(npcName) {
    this.#name = npcName;
  }
  get age() {
    return this.#age;
  }
  set age(npcAge) {
    this.#age = npcAge;
  }
  get highScore() {
    return this.#highScore;
  }
  set highScore(npcHighScore) {
    this.#highScore = npcHighScore;
  }
  get lowScore() {
    return this.#lowScore;
  }
  set lowScore(npcLowScore) {
    this.#lowScore = npcLowScore;
  }
  get talent() {
    return this.#talent;
  }
  set talent(npcTalent) {
    this.#talent = npcTalent;
  }
  get mannerism() {
    return this.#mannerism;
  }
  set mannerism(npcMannerism) {
    this.#mannerism = npcMannerism;
  }
  get interactionTrait() {
    return this.#interactionTrait;
  }
  set interactionTrait(npcInteractionTrait) {
    this.#interactionTrait = npcInteractionTrait;
  }
  get appearance() {
    return this.#appearance;
  }
  set appearance(npcAppearance) {
    this.#appearance = npcAppearance;
  }
  get ideals() {
    return this.#ideals;
  }
  set ideals(npcIdeals) {
    this.#ideals = npcIdeals;
  }
  get bond() {
    return this.#bond;
  }
  set bond(npcBond) {
    this.#bond = npcBond;
  }
  get flaw() {
    return this.#flaw;
  }
  set flaw(npcFlaw) {
    this.#flaw = npcFlaw;
  }
}

class ComplexNPC {
  #raceRoll;
  #race;
  #subrace;
  #gender;
  #name;
  #age;
  #highScore;
  #lowScore;
  #stats;
  #talent;
  #mannerism;
  #interactionTrait;
  #background;
  #firstTrait;
  #secondTrait;
  #ideal;
  #bond;
  #flaw;
  #equipment;
  #npcClass;
  #decision;
  #skills;
  #level;
  #hitpoints;
  #languages;
  #tools;
  #appearance;
  #origin;
  #siblings;
  #family;
  constructor() {
    npcDepth++;
    const wholeRace = getNPCRace();
    this.#raceRoll = wholeRace[0];
    this.#race = wholeRace[1];
    this.#subrace = getNPCSubrace(this.#raceRoll);
    this.#gender = getNPCGender();
    this.#name = getNPCName(this.#race, this.#gender, this.#subrace);
    this.#age = getNPCAge(this.#race, this.#subrace);
    this.#highScore = getNPCHighAbility();
    this.#lowScore = getNPCLowAbility(this.#highScore[0]);
    this.#stats = getNPCStats(
      this.#race,
      this.#subrace,
      this.#highScore[0],
      this.#lowScore[0]
    );
    this.#talent = getNPCTalent();
    this.#mannerism = getNPCMannerism();
    this.#interactionTrait = getNPCInteractionTrait();
    const wholeBackground = getNPCBackground();

    this.#background = wholeBackground[0];
    this.#background.specialty = wholeBackground[1];
    this.#background.decision = wholeBackground[2];
    const rollFirstTrait = Math.trunc(
      Math.random() * this.#background.personality.length
    );
    const rollSecondTrait = Math.trunc(
      Math.random() * this.#background.personality.length
    );
    this.#firstTrait = this.#background.personality[rollFirstTrait];
    this.#secondTrait = this.#background.personality[rollSecondTrait];
    const rollIdeal = Math.trunc(Math.random() * this.#background.ideal.length);
    const rollBond = Math.trunc(Math.random() * this.#background.bond.length);
    const rollFlaw = Math.trunc(Math.random() * this.#background.flaw.length);
    this.#ideal = this.#background.ideal[rollIdeal];
    this.#bond = this.#background.bond[rollBond];
    this.#flaw = this.#background.flaw[rollFlaw];
    this.#equipment = this.#background.equipment;
    this.#npcClass = getNPCClass(
      this.#highScore[0],
      this.#lowScore[0],
      this.#stats[0]
    );
    const rollDecision = rollXDX(1, 6, -1);
    this.#npcClass.decision = personalDecisionsClasses.get(this.#npcClass.name)[
      rollDecision
    ];

    this.#skills = getNPCSkills(this.#background, this.#npcClass);
    this.#level = rollXDX(1, 20);
    this.getHitpoints = function (level, hitDice, modifier) {
      // Set hitpoints to max for level 1.
      let total = hitDice + modifier;
      level -= 1;

      for (let i = 0; i < level; i++) {
        total += rollXDX(1, hitDice, modifier);
      }

      return total;
    };
    this.#hitpoints = this.getHitpoints(
      this.#level,
      this.#npcClass.hitpoints,
      Number(this.#stats[2][1][1].substring(1))
    );
    this.#languages = getNPCLanguages(
      this.#race,
      this.#npcClass[0],
      this.#background.languages
    );
    this.#tools = getNPCTools(this.#background.tools);
    this.#appearance = getSimpleAppearance();
    this.#origin = getNPCOrigin(
      this.#race,
      this.#subrace,
      this.#npcClass[0],
      Number(this.#stats[5][1][1].substring(1)),
      this.#age
    );
    this.#siblings = this.#origin.siblings;
    this.#family = this.#origin.family;
  }
  toPrettyHTML = function () {
    return `
    <ul>
    <li>Race: ${this.#race} - ${this.#subrace}</li>
    <li>Gender: ${this.#gender}</li>
    <li>Name: ${this.#name}</li>
    <li>Age: ${this.#age}</li>
    ${this.displayStats()}
    <li>You speak: </li><ul>${this.#languages}</ul>
    <li>You can use: </li><ul>${this.#tools}</ul>
    <li>Appearance: ${this.#appearance}</li>
    <li>High Ability Trait: ${this.#highScore[1]}</li>
    <li>Low Ability Trait: ${this.#lowScore[1]}</li>
    <li>Talent: ${this.#talent}</li>
    <li>Mannerism: ${this.#mannerism}</li>
    <li>Interaction Trait: ${this.#interactionTrait}</li>
    <li>Background: ${this.#background.name} - ${
      this.#background.specialty
    }</li>
      <ul>
        <li>Trait One: ${this.#firstTrait}</li>
        <li>Trait Two: ${this.secondTrait}</li>
        <li>Ideal: ${this.#ideal}</li>
        <li>Bond: ${this.#bond}</li>
        <li>Flaw: ${this.#flaw}</li>
        <li>Decision: ${this.#background.decision}</li>
        <li>Equipment: ${this.#equipment}</li>
      </ul>
    ${this.displayOrigin()}
    ${this.displayClass()}
    </ul>`;
  };
  displayStats = function () {
    let result = ``;
    for (const [k, v] of this.#stats) {
      result += `<li>${k}: ${v[0]} (${v[1]})</li>`;
    }
    return `
      <li>Stats: </li>
      <ul>
        ${result}
      </ul>
    `;
  };
  displayOrigin = function () {
    return `
    <li>
      Origin:
      <ul>
        <li>Parents: ${this.#origin.parents}</li>
        <li>Birthplace: ${this.#origin.birthplace}</li>
        ${this.displaySiblings()}
        ${this.displayFamily()}
        <li>Childhood Memories: ${this.#origin.memories}</li>
        ${this.displayLifeEvents()}
      </ul>
    </li>
    `;
  };
  displaySiblings = function () {
    let result = ``;
    for (const k of this.#origin.siblings) {
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
  displayFamily = function () {
    return `
      <li>Famliy: </li>
      <ul>
        <li>Raised By: ${this.#origin.family.options}</li>
        <li>Lifestyle: ${this.#origin.family.lifestyle}</li>
        <li>Childhood Home: ${this.#origin.family.childhooHome}</li>
      </ul>
    `;
  };
  displayLifeEvents = function () {
    let result = ``;
    for (const k of this.#origin.lifeEvents) {
      result += `
      <li>${k}</li>
      `;
    }
    return `
      <li>Life Events: </li>
      <ul>
        ${result}
      </ul>
    `;
  };
  displayClass = function () {
    return `
      <li>${this.#npcClass.name} - ${this.level}</li>
    <ul>
      <li>Hitpoints: ${this.#hitpoints}</li>
      ${this.displaySkills()}
      <li>Decision: ${this.#npcClass.decision}</li>
    </ul>
    `;
  };
  displaySkills = function () {
    let result = ``;
    for (let i = 0; i < this.#skills.length; i++) {
      result += `<li>${this.#skills[i]}</li>`;
    }
    return `
      <li>Skills: </li>
      <ul>
      ${result}
      </ul>
    `;
  };
  get race() {
    return this.#race;
  }
  set race(npcRace) {
    this.#race = npcRace;
  }
  get subrace() {
    return this.#subrace;
  }
  set subrace(npcSubrace) {
    this.#subrace = npcSubrace;
  }
  get gender() {
    return this.#gender;
  }
  set gender(npcGender) {
    this.#gender = npcGender;
  }
  get name() {
    return this.#name;
  }
  set name(npcName) {
    this.#name = npcName;
  }
  get age() {
    return this.#age;
  }
  set age(npcAge) {
    this.#age = npcAge;
  }
  get highScore() {
    return this.#highScore;
  }
  set highScore(npcHighScore) {
    this.#highScore = npcHighScore;
  }
  get lowScore() {
    return this.#lowScore;
  }
  set lowScore(npcLowScore) {
    this.#lowScore = npcLowScore;
  }
  get talent() {
    return this.#talent;
  }
  set talent(npcTalent) {
    this.#talent = npcTalent;
  }
  get mannerism() {
    return this.#mannerism;
  }
  set mannerism(npcMannerism) {
    this.#mannerism = npcMannerism;
  }
  get interactionTrait() {
    return this.#interactionTrait;
  }
  set interactionTrait(npcInteractionTrait) {
    this.#interactionTrait = npcInteractionTrait;
  }
  get background() {
    return this.#background;
  }
  set background(npcBackground) {
    this.#background = npcBackground;
  }
  get firstTrait() {
    return this.#firstTrait;
  }
  set firstTrait(npcFirstTrait) {
    this.#firstTrait = npcFirstTrait;
  }
  get secondTrait() {
    return this.#secondTrait;
  }
  set secondTrait(npcSecondTrait) {
    this.#secondTrait = npcSecondTrait;
  }
  get ideal() {
    return this.#ideal;
  }
  set ideal(npcIdeal) {
    this.#ideal = npcIdeal;
  }
  get bond() {
    return this.#bond;
  }
  set bond(npcBond) {
    this.#bond = npcBond;
  }
  get flaw() {
    return this.#flaw;
  }
  set flaw(npcFlaw) {
    this.#flaw = npcFlaw;
  }
  get equipment() {
    return this.#equipment;
  }
  set equipment(npcEquipment) {
    this.#equipment = npcEquipment;
  }
  get npcClass() {
    return this.#npcClass;
  }
  set npcClass(newClass) {
    this.#npcClass = newClass;
  }
  get decision() {
    return this.#decision;
  }
  set decision(npcDecision) {
    this.#decision = npcDecision;
  }
  get skills() {
    return this.#skills;
  }
  set skills(npcSkills) {
    this.#skills = npcSkills;
  }
  get level() {
    return this.#level;
  }
  set level(npcLevel) {
    this.#level = npcLevel;
  }
  get hitpoints() {
    return this.#hitpoints;
  }
  set hitpoints(npcHitpoints) {
    this.#hitpoints = npcHitpoints;
  }
  get languages() {
    return this.#languages;
  }
  set languages(npcLanguages) {
    this.#languages = npcLanguages;
  }
  get tools() {
    return this.#tools();
  }
  set tools(npcTools) {
    this.#tools = npcTools;
  }
  get appearance() {
    return this.#appearance;
  }
  set appearance(npcAppearance) {
    this.#appearance = npcAppearance;
  }
  get origin() {
    return this.#origin;
  }
  set origin(npcOrigin) {
    this.#origin = npcOrigin;
  }
  get siblings() {
    return this.#siblings;
  }
  set siblings(npcSiblibngs) {
    this.#siblings = npcSiblibngs;
  }
  get family() {
    return this.#family;
  }
  set family(npcFamily) {
    this.#family = npcFamily;
  }
}
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
 * Generates a random simple NPC, pushes it to the simpleNPCs list, and adds the results to the HTML.
 */
const generateSimpleNPC = function () {
  npcDepth = 0;
  if (simpleNPCs.length < 10) {
    const newNPC = new SimpleNPC();
    simpleNPCs.push(newNPC);
    updateOptions(`simple`);
    resultsDiv.innerHTML = `
    ${newNPC.toPrettyHTML()}
  `;
  } else {
    resultsDiv.innerHTML = `<p>You have reached the limit for simple NPCs.</p>`;
  }
};

const removeSimpleNPC = function () {
  const nameToRemove = selectSimpleNPC.value;

  for (let i = 0; i < simpleNPCs.length; i++) {
    if (simpleNPCs[i].name === selectSimpleNPC.value) {
      simpleNPCs = removeFirst(simpleNPCs, simpleNPCs[i]);
    }
  }

  updateOptions(`simple`);

  for (let i = 0; i < simpleNPCs.length; i++) {
    if (simpleNPCs[i].name === selectSimpleNPC.value) {
      resultsDiv.innerHTML = `${simpleNPCs[i].toPrettyHTML()}`;
    }
  }
};

const generateSpecificSimpleNPC = function () {
  const npcRace = randomNPCRace.get(
    Number(selectSpecificSimpleNPCRace.value)
  )[0];
  const npcSubrace = selectSpecificSimpleNPCSubrace.value;
  let npcGender = selectSpecificSimpleNPCGender.value;
  if (npcGender === `Random`) {
    npcGender = getNPCGender();
  }

  npcDepth = 0;
  if (specificSimpleNPCs.length < 10) {
    const newNPC = new SpecificSimpleNPC(npcRace, npcSubrace, npcGender);
    specificSimpleNPCs.push(newNPC);
    updateOptions(`specificSimple`);
    resultsDiv.innerHTML = `
    ${newNPC.toPrettyHTML()}
  `;
  } else {
    resultsDiv.innerHTML = `<p>You have reached the limit for specific simple NPCs.</p>`;
  }
};

const removeSpecificSimpleNPC = function () {
  const nameToRemove = selectSpecificSimpleNPC.value;

  for (let i = 0; i < specificSimpleNPCs.length; i++) {
    if (specificSimpleNPCs[i].name === selectSpecificSimpleNPC.value) {
      specificSimpleNPCs = removeFirst(
        specificSimpleNPCs,
        specificSimpleNPCs[i]
      );
    }
  }

  updateOptions(`specificSimple`);

  for (let i = 0; i < specificSimpleNPCs.length; i++) {
    if (specificSimpleNPCs[i].name === selectSpecificSimpleNPC.value) {
      resultsDiv.innerHTML = `${specificSimpleNPCs[i].toPrettyHTML()}`;
    }
  }
};

/**
 * Generates a random complex NPC, pushes it to the complexNPCs list, and adds the results to the HTML.
 */
const generateComplexNPC = function () {
  npcDepth = 0;
  if (complexNPCs.length < 10) {
    const newNPC = new ComplexNPC();
    complexNPCs.push(newNPC);
    updateOptions(`complex`);
    resultsDiv.innerHTML = `
    ${newNPC.toPrettyHTML()}
  `;
  } else {
    resultsDiv.innerHTML = `<p>You have reached the limit for complex NPCs.</p>`;
  }
};

const removeComplexNPC = function () {
  const nameToRemove = selectComplexNPC.value;

  for (let i = 0; i < complexNPCs.length; i++) {
    if (complexNPCs[i].name === selectComplexNPC.value) {
      complexNPCs = removeFirst(complexNPCs, complexNPCs[i]);
    }
  }

  updateOptions(`complex`);

  for (let i = 0; i < complexNPCs.length; i++) {
    if (complexNPCs[i].name === selectComplexNPC.value) {
      resultsDiv.innerHTML = `${complexNPCs[i].toPrettyHTML()}`;
    }
  }
};

const updateOptions = function (type = `simple`) {
  if (type === `simple`) {
    selectSimpleNPC.innerHTML = "";
    for (let i = 0; i < simpleNPCs.length; i++) {
      let option = simpleNPCs[i].name;
      let element = document.createElement(`option`);
      element.textContent = option;
      element.value = option;
      selectSimpleNPC.appendChild(element);
      selectSimpleNPC.value = option;
    }
  } else if (type === `complex`) {
    selectComplexNPC.innerHTML = "";
    for (let i = 0; i < complexNPCs.length; i++) {
      let option = complexNPCs[i].name;
      let element = document.createElement(`option`);
      element.textContent = option;
      element.value = option;
      selectComplexNPC.appendChild(element);
      selectComplexNPC.value = option;
    }
  } else if (type === `specificSimple`) {
    selectSpecificSimpleNPC.innerHTML = "";
    for (let i = 0; i < specificSimpleNPCs.length; i++) {
      let option = specificSimpleNPCs[i].name;
      let element = document.createElement(`option`);
      element.textContent = option;
      element.value = option;
      selectSpecificSimpleNPC.appendChild(element);
      selectSpecificSimpleNPC.value = option;
    }
  }
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
      const raisedBy = rollXDX(1, 9);
      result += getNPCName(`Human - ${randomHumanType.get(raisedBy)}`, gender);
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
      firstNameRoll = Math.trunc(Math.random() * namesGoliathBirth.length);
      result += `${namesGoliathBirth[firstNameRoll]} `;

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
        result += `${namesOrcMale[firstNameRoll]} `;
      } else if (gender === `Female`) {
        firstNameRoll = Math.trunc(Math.random() * namesOrcFemale.length);
        result += `${namesOrcFemale[firstNameRoll]} `;
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
  let origin = {};

  origin.parents = getNPCParents(npcRace);
  origin.birthplace = getNPCBirthplace();
  origin.siblings = getNPCSiblings(npcRace, npcSubrace);
  origin.family = getNPCFamily();
  origin.memories = getNPCMemories(charismaMod);
  origin.lifeEvents = getNPCLifeEvents(npcAge, origin.siblings);

  return origin;
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

const getNPCLifeEvents = function (npcAge, npcSiblings) {
  const result = [];
  let maxEvents = 0;

  for (const [k, v] of lifeEventsByAge) {
    if (npcAge <= k) {
      maxEvents = v;
      break;
    }
  }

  const numEvents = rollXDX(1, maxEvents);
  for (let i = 0; i < numEvents; i++) {
    const rollEventType = rollXDX(1, 100);
    let name = ``;
    for (const [k, v] of lifeEvents) {
      if (rollEventType <= k) {
        event = v;
        break;
      }
    }
    if (event === lifeEvents.get(10)) {
      result.push(getRandomTragedy(npcSiblings));
    } else if (event === lifeEvents.get(20)) {
      result.push(getRandomBoon());
    } else if (event === lifeEvents.get(30)) {
      if (result.includes(`You got married.`)) {
        result.push(`You had a child.`);
      } else {
        result.push(`You got married.`);
      }
    } else if (event === lifeEvents.get(40)) {
      const enemy = new ComplexNPC();
      if (npcDepth <= 2) {
        complexNPCs.push(enemy);
        npcDepth--;
      }

      name = enemy.name;
      updateOptions(`complex`);
      result.push(`
        You made an enemy of an adventurer: ${name}.
      `);
    } else if (event === lifeEvents.get(50)) {
      const friend = new ComplexNPC();
      if (npcDepth <= 2) {
        complexNPCs.push(friend);
        npcDepth--;
      }
      name = friend.name;
      updateOptions(`complex`);
      result.push(`
        You made a friend of an adventurer: ${name}.
      `);
    } else if (event === lifeEvents.get(70)) {
      const jobGold = rollXDX(2, 6);
      result.push(
        `You spent time working in a job related to your background. Start the game with an extra ${jobGold} gp.`
      );
    } else if (event === lifeEvents.get(75)) {
      const accquaintence = new SimpleNPC();
      if (npcDepth <= 2) {
        simpleNPCs.push(accquaintence);
        npcDepth--;
      }
      name = accquaintence.name;
      updateOptions(`simple`);
      result.push(`
      You met someone important: ${name}
      `);
    } else if (event === lifeEvents.get(80)) {
      result.push(getRandomAdventure());
    } else if (event === lifeEvents.get(85)) {
      result.push(getRandomSupernaturalEvent());
    } else if (event === lifeEvents.get(90)) {
      result.push(`You fought in a battle. ${getRandomBattleOutcome()}`);
    } else if (event === lifeEvents.get(95)) {
      result.push(getRandomCrime() + ` ` + getRandomPunishment());
    } else if (event === lifeEvents.get(99)) {
      result.push(getRandomArcaneMatter());
    } else if (event === lifeEvents.get(100)) {
      result.push(getRandomWeirdStuff());
    }
  }
  return result;
};

const getRandomTragedy = function (npcSiblings) {
  const rollTragedyType = rollXDX(1, 12);
  // poddible variables.
  let randomSibling;
  let randomRaceRoll;
  let randomGender;
  let randomSubrace;
  let randomFriend;
  let randomCauseOfDeath;

  let firstRoll = 0;
  let secondRoll = 0;
  let thirdRoll = 0;

  switch (rollTragedyType) {
    case 1:
      if (npcSiblings.length > 0) {
        randomSibling = npcSiblings[rollXDX(1, npcSiblings.length, -1)].name;
        firstRoll = rollXDX(1, causesOfDeath.length, -1);
        randomCauseOfDeath = causesOfDeath[firstRoll];
        return `Your sibling, ${randomSibling.trim()}, died. Cause of death: ${randomCauseOfDeath}`;
      } else {
        firstRoll = rollXDX(1, causesOfDeath.length, -1);
        randomCauseOfDeath = causesOfDeath[firstRoll];
        return `Your family member died. Cause of death: ${randomCauseOfDeath}`;
      }

      break;
    case 2:
      randomRaceRoll = getNPCRace()[0];
      randomGender = getNPCGender();
      randomSubrace = getNPCSubrace(randomRaceRoll);

      randomFriend = getNPCName(randomRaceRoll, randomGender, randomSubrace);
      firstRoll = rollXDX(1, causesOfDeath.length, -1);
      randomCauseOfDeath = causesOfDeath[firstRoll];
      return `Your close friend, ${randomFriend}, died. Cause of death: ${randomCauseOfDeath}`;
      break;
    case 3:
      return `A frindship ended bitterly, and the other person is now hostile to you.`;
      break;
    case 4:
      return `You lost all your posessions in a disaster, and you had to rebuild your life.`;
      break;
    case 5:
      firstRoll = rollXDX(1, 6);
      return `You were imprisoned for a crime you didn't commit and spent ${firstRoll} years at hard labour, in jail, or shackled to an oar ina slave galley.`;
      break;
    case 6:
      firstRoll = rollXDX(1, 2);
      if (firstRoll === 1) {
        return `War ravaged your home community, reducing everything to rubble and ruin. In the aftermat, you helped your town rebuild.`;
      } else if (firstRoll === 2) {
        return `War ravaged your home community, reducing everything to rubble and ruin. In the aftermat, you moved somewhere else.`;
      }
      break;
    case 7:
      return `A lover dissapeared without a trace. You have been looking for that person ever since.`;
      break;
    case 8:
      return `A terrible blight in your home community caused crops to fail, and many starved. You lost a sibling or some other family member.`;
      break;
    case 9:
      return `You did something that brought terrible shame to you in the eyes of your family. They are indifferent to you at best.`;
      break;
    case 10:
      firstRoll = rollXDX(1, 2);
      if (firstRoll === 1) {
        return `For a reason you were never told, you were exiled from your community. You wandered in the wilderness for a time.`;
      } else if (firstRoll === 2) {
        return `For a reason you were never told, you were exiled from your community. You promptly found a new place to live.`;
      }
      break;
    case 11:
      firstRoll = rollXDX(1, 6);
      if (firstRoll % 0) {
        return `A romantic relationship ended amicably.`;
      } else {
        return `A romantic relationship ended with bad feelings.`;
      }
      break;
    case 12:
      let loverType = ``;
      firstRoll = rollXDX(1, 2);
      if (firstRoll === 1) {
        loverType += `current`;
      } else if (loverType === 2) {
        loverType += `prospective`;
      }

      secondRoll = rollXDX(1, causesOfDeath.length, -1);
      randomCauseOfDeath = randomCauseOfDeath = causesOfDeath[secondRoll];
      if (randomCauseOfDeath === `Murdered`) {
        thirdRoll = rollXDX(1, 12);
        if (thirdRoll === 1) {
          return `A ${loverType} lover died. Cause of death: ${causesOfDeath}. You were responsible.`;
        }
      }
      return `A ${loverType} lover died. Cause of death: ${causesOfDeath}.`;
      break;
    default:
      break;
  }
};

const getRandomBoon = function () {
  const rollBoon = rollXDX(1, 10);
  let firstRoll = 0;

  switch (rollBoon) {
    case 1:
      return `A friendly wizard gave you a spell scroll containing one cantrip (of the DM's choice).`;
      break;
    case 2:
      const commoner = new SimpleNPC();
      if (npcDepth <= 2) {
        simpleNPCs.push(commoner);
        npcDepth--;
      }
      updateOptions(`simple`);
      return `
      You saved the life of a commoner, ${commoner.name}, who now owes you a life debt. This individual accompanies you on your travels and performs mundane tasks for you, but will leave if neglected, abused, or imperiled.`;
      break;
    case 3:
      return `You found a riding horse.`;
      break;
    case 4:
      firstRoll = rollXDX(1, 20);
      return `You found ${firstRoll} gold pieces.`;
      break;
    case 5:
      return `A relative bequeathed you a simple weapon of your choice.`;
      break;
    case 6:
      return `You ffound something interesting. You gain one additional trinket.`;
      break;
    case 7:
      return `You once performed a service for the local temple. The next time you visit the temple, you can receive healing up to your hit point maximum.`;
      break;
    case 8:
      firstRoll = rollXDX(1, 2);
      let item = ``;
      if (firstRoll === 1) {
        item = `potion of healing`;
      } else if (firstRoll === 2) {
        item = `flask of acid`;
      }
      return `A friendly alchemist gifted you with a ${item}.`;
      break;
    case 9:
      return `You found a treasure map.`;
      break;
    case 10:
      firstRoll = rollXDX(1, 20);
      return `A distant relative left you a stipend that allows you to live at the comfortable lifestyle for ${firstRoll} years. If you choose to live at s higher lifestyle, you reduce the price of the lifestyle by 2 gp during that time period.`;
      break;
    default:
      break;
  }
};

const getRandomAdventure = function () {
  const rollAdventure = rollXDX(1, 100);

  let firstRoll = 0;
  let secondRoll = 0;

  if (rollAdventure <= 10) {
    firstRoll = rollXDX(1, 3);
    let bodypart = ``;
    if (firstRoll === 1) {
      bodypart = `an ear`;
    } else if (firstRoll === 2) {
      secondRoll = rollXDX(1, 3);
      bodypart = `${secondRoll} fingers`;
    } else if (firstRoll === 3) {
      secondRoll = rollXDX(1, 4);
      bodypart = `${secondRoll} toes`;
    }
    return `You nearly died. You have nasty scars on your body, and you are missing ${bodypart}.`;
  } else if (rollAdventure >= 11 && rollAdventure <= 20) {
    return `You suffered a grievous injury. Although the wound healed, it still pains you from time to time.`;
  } else if (rollAdventure >= 21 && rollAdventure <= 30) {
    return `You were wounded, but in time you fully recovered.`;
  } else if (rollAdventure >= 31 && rollAdventure <= 40) {
    firstRoll = rollXDX(1, 3);
    let symptom = ``;
    if (firstRoll === 1) {
      symptom = `a persistent cough`;
    } else if (firstRoll === 2) {
      symptom = `pockmarks on your skin`;
    } else if (firstRoll === 3) {
      symptom = `prematurely grey hair`;
    }
    return `You contracted a disease while exploring a filthy warren. You recovered from the disease, but you have ${symptom}.`;
  } else if (rollAdventure >= 41 && rollAdventure <= 50) {
    firstRoll = rollXDX(1, 2);
    let poisonType = ``;
    if (firstRoll === 1) {
      poisonType = `trap`;
    } else if (firstRoll == 2) {
      poisonType = `monster`;
    }
    return `You were poisoned by a ${poisonType}. You recovered, but the next time you must make a saving throw against poison, you make the saving throw with disadvantage.`;
  } else if (rollAdventure >= 51 && rollAdventure <= 60) {
    return `You lost something of value to you. Remove one trinket from your posessions.`;
  } else if (rollAdventure >= 61 && rollAdventure <= 70) {
    return `You were terribly frightened by something you encountered and ran away, abandoning your companions to their fate.`;
  } else if (rollAdventure >= 71 && rollAdventure <= 80) {
    return `You learned a great deal on your adventure. The next time you make an ability check or saving throw, you have advantage on the roll.`;
  } else if (rollAdventure >= 81 && rollAdventure <= 90) {
    firstRoll = rollXDX(2, 6);
    return `You found some treasure on your adventure. You have ${firstRoll} gp left from your share of it.`;
  } else if (rollAdventure >= 91 && rollAdventure <= 99) {
    firstRoll = rollXDX(1, 20, 50);
    return `You found a considerable amopunt of treasure on your adventure. You have ${firstRoll} gp left from your share of it.`;
  } else if (rollAdventure === 100) {
    return `You came across a common magic item (of the DM's choice).`;
  }
};

const getRandomSupernaturalEvent = function () {
  const rollSupernaturalEvent = rollXDX(1, 100);
  let firstRoll = 0;
  let secondRoll = 0;

  if (rollSupernaturalEvent <= 5) {
    firstRoll = rollXDX(1, 6);
    return `You were ensorcelled by a fey and enslaved for ${firstRoll} years before you escaped.`;
  } else if (rollSupernaturalEvent >= 6 && rollSupernaturalEvent <= 10) {
    return `You saw a demon and ran away before it could do anything to you.`;
  } else if (rollSupernaturalEvent >= 11 && rollSupernaturalEvent <= 15) {
    firstRoll = rollXDX(1, 20);
    secondRoll = rollXDX(1, 20, 50);
    return `A devil tempted you. Make a DC 10 Wisdom saving throw (${firstRoll} - no mdifier). On a failed save, your alignment shifts one step toward evil (if it's not evil already), and you start the game with an extra ${secondRoll} gp.`;
  } else if (rollSupernaturalEvent >= 16 && rollSupernaturalEvent <= 20) {
    return `You woke up one morning miles from your home, with no idea how you got there.`;
  } else if (rollSupernaturalEvent >= 21 && rollSupernaturalEvent <= 30) {
    return `You visited a holy site and felt the presence of the divine there.`;
  } else if (rollSupernaturalEvent >= 31 && rollSupernaturalEvent <= 40) {
    firstRoll = rollXDX(1, 2);
    let omenType = ``;
    if (firstRoll === 1) {
      omenType = `a red falling star`;
    } else if (firstRoll === 2) {
      omenType = `a face in the frost`;
    }
    return `You witnessed ${omenType}. You are certain that it was an omen of some sort.`;
  } else if (rollSupernaturalEvent >= 41 && rollSupernaturalEvent <= 50) {
    return `You escaped certain death and believe it was the intervention of a god that saved you.`;
  } else if (rollSupernaturalEvent >= 51 && rollSupernaturalEvent <= 60) {
    return `You witnessed a minor miracle.`;
  } else if (rollSupernaturalEvent >= 61 && rollSupernaturalEvent <= 70) {
    return `You explored an empty house and found it to be haunted.`;
  } else if (rollSupernaturalEvent >= 71 && rollSupernaturalEvent <= 75) {
    firstRoll = rollXDX(1, 6);
    let possessor = ``;
    switch (firstRoll) {
      case 1:
        possessor = `a celestial`;
        break;
      case 2:
        possessor = `a devil`;
        break;
      case 3:
        possessor = `a demon`;
        break;
      case 4:
        possessor = `a fey`;
        break;
      case 5:
        possessor = `an elemental`;
        break;
      case 6:
        possessor = `an undead`;
        break;
      default:
        break;
    }
    return `You were briefly possessed by ${possessor}.`;
  } else if (rollSupernaturalEvent >= 76 && rollSupernaturalEvent <= 80) {
    return `You saw a ghost.`;
  } else if (rollSupernaturalEvent >= 81 && rollSupernaturalEvent <= 85) {
    return `You saw a ghoul feeding on a corpse.`;
  } else if (rollSupernaturalEvent >= 86 && rollSupernaturalEvent <= 90) {
    firstRoll = rollXDX(1, 2);
    let visitor = ``;
    if (firstRoll === 1) {
      visitor = `celestial`;
    } else if (firstRoll === 2) {
      visitor = `fiend`;
    }
    return `A ${visitor} visited you in your dreams to give warning of dangers to come.`;
  } else if (rollSupernaturalEvent >= 91 && rollSupernaturalEvent <= 95) {
    firstRoll = rollXDX(1, 2);
    let place = ``;
    if (firstRoll === 1) {
      place = `the Feywild`;
    } else if (firstRoll === 2) {
      place = `the Shadowfell`;
    }
    return `You briefly visited ${place}.`;
  } else if (rollSupernaturalEvent >= 96 && rollSupernaturalEvent <= 100) {
    return `You saw a portal that you believe leads to another plane of existence.`;
  }
};

const getRandomBattleOutcome = function () {
  const rollOutcome = rollXDX(1, 12);
  if (rollOutcome === 1) {
    return `You were knocked out and left for dead. You woke up hours later with no recollection of the battle.`;
  } else if (rollOutcome >= 2 && rollOutcome <= 3) {
    return `You were badly injured in the fight, and you still bear the awful scars of those wounds.`;
  } else if (rollOutcome === 4) {
    return `You ran away from the battle to save your life, but you still feel shame for your cowardice.`;
  } else if (rollOutcome >= 5 && rollOutcome <= 7) {
    return `You suffered only minor injuries, and the wounds all healed without leaving scars.`;
  } else if (rollOutcome >= 8 && rollOutcome <= 9) {
    return `You survived the battle, but you suffer from terrible nightmares in which you relive the experience.`;
  } else if (rollOutcome >= 10 && rollOutcome <= 11) {
    return `You escaped the battle unscathed, though many of your friends were injured or lost.`;
  } else if (rollOutcome === 12) {
    return `You acquitted yourself well in battle and are remembered as a hero. You might have received a medal for your bravery.`;
  }
};

const getRandomCrime = function () {
  const rollCrime = rollXDX(1, crimes.length, -1);
  return `You were accused of ${crimes[rollCrime]}.`;
};

const getRandomPunishment = function () {
  const rollPunishment = rollXDX(1, 12);
  let firstRoll = 0;
  let secondRoll = 0;
  let thirdRoll = 0;

  if (rollPunishment <= 3) {
    return `You did not commit the crime and were exonerated after being accused.`;
  } else if (rollPunishment >= 4 && rollPunishment <= 6) {
    return `You commited the crime or helped do so, but noetheless the authorities found you not guilty.`;
  } else if (rollPunishment >= 7 && rollPunishment <= 8) {
    return `You were nearly caught in the act. You had to flee and are wanted in the community where the crime occured.`;
  } else if (rollPunishment >= 9 && rollPunishment <= 12) {
    firstRoll = rollXDX(1, 3);
    secondRoll = rollXDX(1, 4);
    thirdRoll = rollXDX(1, 100);

    let place = ``;
    let sentence = ``;

    if (firstRoll === 1) {
      place = `in jail`;
    } else if (firstRoll === 2) {
      place = `chained to an oar`;
    }
    if (firstRoll === 3) {
      place = `performing hard labour`;
    }

    if (thirdRoll >= 95) {
      return `You were caught and convicted. You spent time ${place}. You escaped after ${secondRoll} years.`;
    } else {
      return `You were caught and convicted. You spent time ${place}. You served a ${secondRoll} year sentence.`;
    }
  }
};

const getRandomArcaneMatter = function () {
  const rollEvent = rollXDX(1, 10);
  let firstRoll = 0;
  switch (rollEvent) {
    case 1:
      firstRoll = rollXDX(1, 2);
      let effect = ``;
      if (firstRoll === 1) {
        effect = `charmed`;
      } else if (firstRoll === 2) {
        effect = `frightened`;
      }
      return `You were ${effect} by a spell.`;
      break;
    case 2:
      return `You were injured by the effect of a spell.`;
      break;
    case 3:
      firstRoll = rollXDX(1, 5);
      let randomClass = ``;
      if (firstRoll === 1) {
        randomClass = `cleric`;
      } else if (firstRoll === 2) {
        randomClass = `druid`;
      } else if (firstRoll === 3) {
        randomClass = `sorcerer`;
      } else if (firstRoll === 4) {
        randomClass = `warlock`;
      } else if (firstRoll === 5) {
        randomClass = `wizard`;
      }
      return `You witnessed the effects of a powerful spell beiing cast by a ${randomClass}.`;
      break;
    case 4:
      return `You drank a potion (of the DM's choice).`;
      break;
    case 5:
      return `You found a spell scroll (of the DM's choice) and succeeded in casting the spell it contained.`;
      break;
    case 6:
      return `You were affectee by teleportation magic.`;
      break;
    case 7:
      return `You turned invisible for a time.`;
      break;
    case 8:
      return `You identified an illusion for what it was.`;
      break;
    case 9:
      return `You saw a creature being conjured by magic.`;
      break;
    case 10:
      return `Your fortune was read by a diviner.`;
      break;
    default:
      break;
  }
};

const getRandomWeirdStuff = function () {
  const rollWeirdStuff = rollXDX(1, 12);
  let firstRoll = 0;
  let secondRoll = 0;

  switch (rollWeirdStuff) {
    case 1:
      firstRoll = rollXDX(1, 4);
      return `You were turned into a toad and remained in that form for ${firstRoll} weeks.`;
      break;
    case 2:
      return `You were petrified and remained a stone statue for a time until someone freed you.`;
      break;
    case 3:
      firstRoll = rollXDX(1, 2);
      secondRoll = rollXDX(1, 6);
      let captor = ``;

      if (firstRoll === 1) {
        captor = `hag`;
      } else if (firstRoll === 2) {
        captor = `satyr`;
      }
      return `You were enslaved by a ${captor} and lived in that creature's thrall for ${secondRoll} years.`;
      break;
    case 4:
      firstRoll = rollXDX(1, 4);
      return `A dragon held you as a prisoner for ${firstRoll} months until adventurers killed it.`;
      break;
    case 5:
      firstRoll = rollXDX(1, 3);
      let race = ``;
      if (firstRoll === 1) {
        race = `Drow`;
      } else if (firstRoll === 2) {
        race = `Kuo-Toa`;
      } else if (firstRoll === 3) {
        race = `Quaggoths`;
      }
      return `You were taken captive by ${race}. You lived as a slave in the Underdark until you escaped.`;
      break;
    case 6:
      const adventurer = new ComplexNPC();
      if (npcDepth <= 2) {
        complexNPCs.push(adventurer);
        npcDepth--;
      }
      updateOptions(`complex`);
      return `
      You served a powerful adventurer as a hireling. You have only recently left that service.
      ${adventurer.name}
      `;
      break;
    case 7:
      firstRoll = rollXDX(1, 6);
      return `You went insane for ${firstRoll} years and recently regained your sanity. A tic or some other bit of odd behaviour might linger.`;
      break;
    case 8:
      return `A lover of yours was secretly a silver dragon.`;
      break;
    case 9:
      return `You were captured by a cult and nearly sacrificed on an altar to the foul being the cultists served. You escaped, but you fear they will find you.`;
      break;
    case 10:
      firstRoll = rollXDX(1, 5);
      let outsider = ``;
      if (firstRoll === 1) {
        outsider = `a demigod`;
      } else if (firstRoll === 2) {
        outsider = `an archdevil`;
      } else if (firstRoll === 3) {
        outsider = `an archfey`;
      } else if (firstRoll === 4) {
        outsider = `a demon lord`;
      } else if (firstRoll === 5) {
        outsider = `a titan`;
      }
      return `You met ${outsider}, and you lived to tell the tale.`;
      break;
    case 11:
      return `You were swallowed by a giant fish and spent a month living in its gullet before you escaped.`;
      break;
    case 12:
      return `A powerful being granted you a wish, but you squandered it on something frivolous.`;
      break;
    default:
      break;
  }
};
/**
 * Takes a race, class and langNum and returns a list of known languages.
 * @param [String] race
 * @param [String] npcClass
 * @param [Int] langNum = number of languages
 * @returns [String] LanguageList
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
btnRemoveSimpleNPC.addEventListener(`click`, removeSimpleNPC);
btnRemoveComplexNPC.addEventListener(`click`, removeComplexNPC);
btnGenerateSpecificSimpleNPC.addEventListener(
  `click`,
  generateSpecificSimpleNPC
);
btnRemoveSpecificSimpleNPC.addEventListener(`click`, removeSpecificSimpleNPC);
