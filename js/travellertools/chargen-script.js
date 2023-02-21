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
<<<<<<< HEAD
class GeneratedPC {
=======
class PC {
>>>>>>> 9b91c78e664d146d90f5d21b578516652813c988
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
            [`Seafarer`, [`Ocean Ships`, `Personal`, `Sail`, `Submarine`]],
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
    set race(pcRace) {
        this.#race = npcRace;
    }
    get gender() {
        return this.#gender;
    }
    set gender(pcGender) {
        this.#gender = npcGender;
    }
    get name() {
        return this.#name;
    }
    set name(pcName) {
        this.#name = npcName;
    }
    get age() {
        return this.#age;
    }
    set age(pcAge) {
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
