"use strict";
// DOM Elements
const resultsDiv = document.querySelector(`.results`);
const btnGeneratePC = document.querySelector(`.btnGeneratePC`);
const btnNextTerm = document.querySelector(`.btnNextTerm`);
const selectPCRace = document.querySelector(`.selectPCRace`);
const selectPCGender = document.querySelector(`.selectPCGender`);
const selectPCStr = document.querySelector(`.selectPCStr`);
const selectPCDex = document.querySelector(`.selectPCDex`);
const selectPCEnd = document.querySelector(`.selectPCEnd`);
const selectPCInt = document.querySelector(`.selectPCInt`);
const selectPCEdu = document.querySelector(`.selectPCEdu`);
const selectPCSoc = document.querySelector(`.selectPCSoc`);

// Global

let numPCs = 0;
let newPC;
let termCount = 0;
// On Load
window.onload = function () {
  // TODO Add any necessary onload functions.
};
// Classes
class GeneratedPC {
  #race;
  #gender;
  #name;
  #age;
  #stats;
  #skills;
  #events;
  constructor() {
    this.#race = selectPCRace.value;
    this.#gender = selectPCGender.value;
    this.#name = `Jon Bovi`;
    this.#age = 18;
    this.#stats = getPCStats();
    this.#skills = new Map([
      [`Admin`, -3],
      [`Advocate`, -3],
      [`Animals - Handling`, -3],
      [`Animals - Veterinary`, -3],
      [`Animals - Training`, -3],
      [`Art - Performer`, -3],
      [`Art - Holography`, -3],
      [`Art - Instrument`, -3],
      [`Art - Visual Media`, -3],
      [`Art - Write`, -3],
      [`Astrogation`, -3],
      [`Athletics - Dexterity`, -3],
      [`Athletics - Endurance`, -3],
      [`Athletics - Strength`, -3],
      [`Broker`, -3],
      [`Carouse`, -3],
      [`Deception`, -3],
      [`Diplomat`, -3],
      [`Drive - Hovercraft`, -3],
      [`Drive - Mole`, -3],
      [`Drive - Track`, -3],
      [`Drive - Walker`, -3],
      [`Drive - Wheel`, -3],
      [`Electronics - Comms`, -3],
      [`Electronics - Computers`, -3],
      [`Electronics - Remote Ops`, -3],
      [`Electronics - Sensors`, -3],
      [`Engineer - M-Drive`, -3],
      [`Engineer - J-Drive`, -3],
      [`Engineer - Life Support`, -3],
      [`Engineer - Power`, -3],
      [`Explosives`, -3],
      [`Flyer - Airship`, -3],
      [`Flyer - Grav`, -3],
      [`Flyer - Ornithopter`, -3],
      [`Flyer - Rotor`, -3],
      [`Flyer - Wings`, -3],
      [`Gambler`, -3],
      [`Gunner - Turret`, -3],
      [`Gunner - Ortillery`, -3],
      [`Gunner - Screen`, -3],
      [`Gunner - Capital`, -3],
      [`Gun Combat - Archaic`, -3],
      [`Gun Combat - Energy`, -3],
      [`Gun Combat - Slug`, -3],
      [`Heavy Weapons - Artillery`, -3],
      [`Heavy Weapons - Portable`, -3],
      [`Heavy Weapons - Vehicle`, -3],
      [`Investigate`, -3],
      [`Jack of All Trades`, -3],
      [`Language - Galanglic`, -3],
      [`Language - Vilani`, -3],
      [`Language - Zdetl`, -3],
      [`Language - Oynprith`, -3],
      [`Language - Trokh`, -3],
      [`Language - Gvegh`, -3],
      [`Leadership`, -3],
      [`Mechanic`, -3],
      [`Medic`, -3],
      [`Melee - Unarmed`, -3],
      [`Melee - Blade`, -3],
      [`Melee - Bludgeon`, -3],
      [`Melee - Natural`, -3],
      [`Navigation`, -3],
      [`Persuade`, -3],
      [`Pilot - Small Craft`, -3],
      [`Pilot - Space Craft`, -3],
      [`Pilot - Capital Ships`, -3],
      [`Profession - Belter`, -3],
      [`Profession - Biologicals`, -3],
      [`Profession - Civil Engineering`, -3],
      [`Profession - Construction`, -3],
      [`Profession - Hydroponics`, -3],
      [`Profession - Polymers`, -3],
      [`Recon`, -3],
      [`Science - Archaeology`, -3],
      [`Science - Astronomy`, -3],
      [`Science - Biology`, -3],
      [`Science - Chemistry`, -3],
      [`Science - Cosmology`, -3],
      [`Science - Cybernetics`, -3],
      [`Science - Economics`, -3],
      [`Science - Genetics`, -3],
      [`Science - History`, -3],
      [`Science - Linguistics`, -3],
      [`Science - Philosophy`, -3],
      [`Science - Physics`, -3],
      [`Science - Planetology`, -3],
      [`Science - Psionicology`, -3],
      [`Science - Psychology`, -3],
      [`Science - Robotics`, -3],
      [`Science - Sophontology`, -3],
      [`Science - Xenology`, -3],
      [`Seafarer - Ocean Ships`, -3],
      [`Seafarer - Personal`, -3],
      [`Seafarer - Sail`, -3],
      [`Seafarer - Submarine`, -3],
      [`Stealth`, -3],
      [`Steward`, -3],
      [`Streetwise`, -3],
      [`Survival`, -3],
      [`Tactics - Military`, -3],
      [`Tactics - Naval`, -3],
      [`Vacc Suit`, -3],
    ]);
    this.events = [];
  }
  toPrettyHTML = function () {
    return `
    <ul>
    <li>Race: ${this.#race}</li>
    <li>Gender: ${this.#gender}</li>
    <li>Name: ${this.#name}</li>
    <li>Age: ${this.#age}</li>
    <li>Stats: ${this.displayStats()}</li>
    <li>Skills: ${this.displaySkills()}</li>
    </ul>`;
  };
  displayStats = function () {
    let result = ``;
    for (const [k, v] of this.#stats) {
      result += `<li>${k}: ${v[0]} (${v[1]})</li>`;
    }
    return `
      <ul>
        ${result}
      </ul>
    `;
  };
  displaySkills = function () {
    let result = ``;
    for (const [k, v] of this.#skills) {
      result += `<li>${k}: ${v}</li>`;
    }
    return `
      <ul>
        ${result}
      </ul>
    `;
  };
  get race() {
    return this.#race;
  }
  set race(pcRace) {
    this.#race = pcRace;
  }
  get gender() {
    return this.#gender;
  }
  set gender(pcGender) {
    this.#gender = pcGender;
  }
  get name() {
    return this.#name;
  }
  set name(pcName) {
    this.#name = pcName;
  }
  get age() {
    return this.#age;
  }
  set age(pcAge) {
    this.#age = pcAge;
  }
  get stats() {
    return this.#stats;
  }
  set stats(pcStats) {
    this.#stats = pcStats;
  }
  get skills() {
    return this.#skills;
  }
  set skills(pcSkills) {
    this.#skills = pcSkills;
  }
  get events() {
    return this.#events;
  }
  set events(pcEvents) {
    this.#events = pcEvents;
  }
}
// Helper Functions
/**
 * Rolls numDice number of dWhat-sided dice, adds the provided modifier and returns the result.
 * @param {number} numDice = how many dice to roll
 * @param {number} dWhat = what number sided dice
 * @param {number} modifier
 * @returns {number} Roll result
 */
const rollXDX = function (numDice = 2, dWhat = 6, modifier = 0) {
  let roll = 0;

  for (let i = 0; i < numDice; i++) {
    roll += Math.trunc(Math.random() * dWhat) + 1;
  }

  roll += modifier;

  return roll;
};
/**
 * Creates a div for each new term and adds it to the DOM.
 */
const addTerm = function () {
  const prevTerm = document.querySelector(`#term${termCount}`);
  if (termCount <= 4 && prevTerm) {
    termCount++;
    // Create a new term div.
    const container = document.createElement(`div`);
    container.className = `PCGenerator generator term`;
    container.id = `term${termCount}`;
    const countLabel = document.createElement(`label`);
    countLabel.htmlFor = `term${termCount}`;
    countLabel.innerText = `Career `;
    const selectCareer = document.createElement(`select`);
    selectCareer.className = `selectCareer${termCount}`;
    selectCareer.id = `selectCareer${termCount}`;
    for (const career of careerAssignments.keys()) {
      const option = document.createElement("option");
      option.value = career;
      option.text = career;
      selectCareer.add(option);
    }
    selectCareer.addEventListener(`change`, updateAssignmentOptions);

    const selectAssignment = document.createElement(`select`);
    selectAssignment.className = `selectAssignment${termCount}`;
    selectAssignment.id = `selectAssignment${termCount}`;
    for (const assignment of careerAssignments.get(`Agent`).values()) {
      const option = document.createElement("option");
      option.value = assignment;
      option.text = assignment;
      selectAssignment.add(option);
    }

    // Use a DocumentFragment to group the elements.
    const fragment = document.createDocumentFragment();
    fragment.appendChild(container);
    container.appendChild(countLabel);
    container.appendChild(selectCareer);
    container.appendChild(selectAssignment);

    // Add the fragment to the DOM.
    prevTerm.append(fragment);
  } else {
    alert(`You can only have so many terms.`);
  }
};
/**
 *
 * @param [event] event allows reference to the select element that called the function
 */
const updateAssignmentOptions = function (event) {
  const toCheck = event.target;
  const selectedCareer = toCheck.value;
  const toChange = document.querySelector(`#selectAssignment${termCount}`);
  const assignments = careerAssignments.get(selectedCareer).values();
  // Clear existing options
  toChange.innerHTML = ``;
  // Populate options based on the selected career
  for (const assignment of assignments) {
    const option = document.createElement("option");
    option.value = assignment;
    option.text = assignment;
    toChange.add(option);
  }
};
/**
 * Generates a PC, and adds the results to the HTML.
 */
const generatePC = function () {
  if (numPCs != 1) {
    numPCs = 1;
    let newPC = new GeneratedPC();
    resultsDiv.innerHTML = `
    ${newPC.toPrettyHTML()}
  `;

    termCount++;
    // Create a new term div.
    const container = document.createElement(`div`);
    container.className = `PCGenerator generator term`;
    container.id = `term${termCount}`;

    const skillsLabel = document.createElement(`label`);
    skillsLabel.htmlFor = `selectInitialSkills0`;
    skillsLabel.innerText = `Initial Skills`;

    const skillsFragment = document.createDocumentFragment();
    skillsFragment.append(skillsLabel);
    for (let i = 0; i < 3 + newPC.stats.get(`Education`)[1]; i++) {
      let selectSkills = document.createElement(`select`);
      selectSkills.className = `selectInitialSkills${i}`;
      selectSkills.id = `selectInitialSkills${i}`;
      for (const skill of backgroundSkills) {
        const option = document.createElement("option");
        option.value = skill;
        option.text = skill;
        selectSkills.add(option);
      }
      skillsFragment.appendChild(selectSkills);
    }

    const careerLabel = document.createElement(`label`);
    careerLabel.htmlFor = `term${termCount}`;
    careerLabel.innerText = `Term ${termCount}: Career `;
    const selectCareer = document.createElement(`select`);
    selectCareer.className = `selectCareer${termCount}`;
    selectCareer.id = `selectCareer${termCount}`;
    for (const career of careerAssignments.keys()) {
      const option = document.createElement("option");
      option.value = career;
      option.text = career;
      selectCareer.add(option);
    }
    selectCareer.addEventListener(`change`, updateAssignmentOptions);

    const selectAssignment = document.createElement(`select`);
    selectAssignment.className = `selectAssignment${termCount}`;
    selectAssignment.id = `selectAssignment${termCount}`;
    for (const assignment of careerAssignments.get(`Agent`).values()) {
      const option = document.createElement("option");
      option.value = assignment;
      option.text = assignment;
      selectAssignment.add(option);
    }

    // Use a DocumentFragment to group the elements.
    const fragment = document.createDocumentFragment();
    fragment.appendChild(container);
    container.appendChild(skillsFragment);
    container.appendChild(careerLabel);
    container.appendChild(selectCareer);
    container.appendChild(selectAssignment);

    // Add the fragment to the DOM.
    document.querySelector(`#generator`).append(fragment);
    // Create a button to make the next term.
    const btnNextTerm = document.createElement(`input`);
    btnNextTerm.type = `button`;
    btnNextTerm.className = `btnNextTerm`;
    btnNextTerm.value = `Next Term`;
    btnNextTerm.addEventListener(`click`, addTerm);
    // Add it to the DOM.
    document.querySelector(`#generator`).append(btnNextTerm);
  } else {
    resultsDiv.insertAdjacentHTML(
      `beforebegin`,
      `<p>You would lose the character below. please refresh to comfirm.</p>`
    );
  }
};

const getPCStats = function () {
  let pcStr = selectPCStr.value;
  let pcDex = selectPCDex.value;
  let pcEnd = selectPCEnd.value;
  let pcInt = selectPCInt.value;
  let pcEdu = selectPCEdu.value;
  let pcSoc = selectPCSoc.value;

  if (pcStr === "Random") {
    pcStr = rollXDX(2, 6, 0);
  }
  if (pcDex === "Random") {
    pcDex = rollXDX(2, 6, 0);
  }
  if (pcEnd === "Random") {
    pcEnd = rollXDX(2, 6, 0);
  }
  if (pcInt === "Random") {
    pcInt = rollXDX(2, 6, 0);
  }
  if (pcEdu === "Random") {
    pcEdu = rollXDX(2, 6, 0);
  }
  if (pcSoc === "Random") {
    pcSoc = rollXDX(2, 6, 0);
  }

  return new Map([
    [`Strength`, [pcStr, getStatModifier(pcStr)]],
    [`Dexterity`, [pcDex, getStatModifier(pcDex)]],
    [`Endurance`, [pcEnd, getStatModifier(pcEnd)]],
    [`Intelligence`, [pcInt, getStatModifier(pcInt)]],
    [`Education`, [pcEdu, getStatModifier(pcEdu)]],
    [`Social`, [pcSoc, getStatModifier(pcSoc)]],
  ]);
};
/**
 * Calculates the modifier value for a given statistic
 * @param {number} stat - The value of the statistic to calculate the modifier for
 * @returns {number} The modifier value for the given statistic.
 */
const getStatModifier = function (stat) {
  let modifier = 0;

  if (stat >= 15) {
    modifier = 3;
  } else if (stat >= 12) {
    modifier = 2;
  } else if (stat >= 9) {
    modifier = 1;
  } else if (stat >= 6) {
    modifier = 0;
  } else if (stat >= 3) {
    modifier = -1;
  } else if (stat >= 1) {
    modifier = -2;
  } else {
    modifier = -3;
  }

  return modifier;
};

const handleEvent = function (eventCode) {
  console.log(eventCode);
};

btnGeneratePC.addEventListener(`click`, generatePC);
