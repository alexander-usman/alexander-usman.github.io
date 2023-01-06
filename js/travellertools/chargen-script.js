"use strict";
// DOM Elements
const resultsDiv = document.querySelector(`.results`);
const btnGeneratePC = document.querySelector(`.btnGeneratePC`);
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
// On Load
window.onload = function () {
    // TODO Add any necessary onload functions.
};
// Classes
class PC {
    #race;
    #gender;
    #name;
    #age;
    #stats
    #skills;
    constructor() {
        this.#race = selectPCRace.value;
        this.#gender = selectPCGender.value;
        this.#name = `Jon Bovi`;
        this.#age = 18;
        this.#stats = [
            [selectPCStr.value, getStatModifier(selectPCStr.value)],
            [selectPCDex.value, getStatModifier(selectPCDex.value)],
            [selectPCEnd.value, getStatModifier(selectPCEnd.value)],
            [selectPCInt.value, getStatModifier(selectPCInt.value)],
            [selectPCEdu.value, getStatModifier(selectPCEdu.value)],
            [selectPCSoc.value, getStatModifier(selectPCSoc.value)],
        ];
        this.#skills = allSkills;
    }
    toPrettyHTML = function () {
        return `
    <ul>
    <li>Race: ${this.#race}</li>
    <li>Gender: ${this.#gender}</li>
    <li>Name: ${this.#name}</li>
    <li>Age: ${this.#age}</li>
    <li>Stats: ${this.#stats}</li>
    <li>Skills: ${this.#skills}</li>
    </ul>`;
    };
    get race() {
        return this.#race;
    }
    set race(npcRace) {
        this.#race = npcRace;
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
    get stats() {
        return this.#stats;
    }
    set stats(npcStats) {
        this.#stats = npcStats;
    }
    get skills() {
        return this.#skills;
    }
    set skills(npcSkills) {
        this.#skills = npcSkills;
    }
}
// Helper Functions
/**
 * Rolls numDice number of dWhat-sided dice, adds the provided modifier and returns the result.
 * @param [number] numDice = how many dice to roll
 * @param [number] dWhat = what number sided dice
 * @param [number] modifier
 * @returns [number] Roll result
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
 * Generates a PC, and adds the results to the HTML.
 */
const generatePC = function () {
  if (numPCs != 1) {
    numPCs = 1;
    const newPC = new PC();
    resultsDiv.innerHTML = `
    ${newPC.toPrettyHTML()}
  `;
  } else {
    resultsDiv.insertAdjacentHTML(`beforebegin`, `<p>You would lose the character below. please refresh to comfirm.</p>`);
  }
};

const getStatModifier = function (stat) {
    let modifier = 0;

    if (stat >= 15) {
        modifier = 3;
    } else if (stat >= 12) {
        modifier = 2
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



btnGeneratePC.addEventListener(`click`, generatePC);
