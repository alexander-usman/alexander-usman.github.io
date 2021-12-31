"use strict";
// Random NPC Tables
const randomNPCRace = new Map([
  [1, [`Dragonborn`]],
  [2, [`Dwarf`]],
  [3, [`Elf`]],
  [4, [`Gnome`]],
  [5, [`Half-Elf`]],
  [6, [`Halfling`]],
  [7, [`Half-Orc`]],
  [8, [`Human`]],
  [9, [`Tiefling`]],
]);

const namesDragonbornFemale = [
  `Akra`,
  `Asathra`,
  `Antara`,
  `Arava`,
  `Biri`,
  `Blendaeth`,
  `Burana`,
  `Chassath`,
  `Daar`,
  `Dentratha`,
  `Doudra`,
  `Driindar`,
  `Eggren`,
  `Farideh`,
  `Findex`,
  `Furrele`,
  `Gesrethe`,
  `Gilkass`,
  `Harann`,
  `Havilar`,
  `Hethress`,
  `Hillanot`,
  `Jaxi`,
  `Jezean`,
  `Jheri`,
  `Kadana`,
  `Kava`,
  `Korinn`,
  `Megren`,
  `Mijira`,
  `Mishann`,
  `Nala`,
  `Nuthra`,
  `Perra`,
  `Pogranix`,
  `Pyxrin`,
  `Quespa`,
  `Raiann`,
  `Rezena`,
  `Ruloth`,
  `Saphara`,
  `Savaran`,
  `Sora`,
  `Surina`,
  `Synthrin`,
  `Tatyan`,
  `Thava`,
  `Uadjit`,
  `Vezera`,
  `Zykroff`,
];

const namesDragonbornMale = [
  `Adrex`,
  `Arjhan`,
  `Azzakh`,
  `Balasar`,
  `Baradad`,
  `Bharash`,
  `Bidreked`,
  `Dadalan`,
  `Dazzazan`,
  `Direcris`,
  `Donaar`,
  `Fax`,
  `Gargax`,
  `Ghesh`,
  `Gorbundus`,
  `Greethen`,
  `Heskan`,
  `Hirrathak`,
  `Ildrex`,
  `Kaladan`,
  `Kerkad`,
  `Kiirith`,
  `Kriv`,
  `Maagog`,
  `Medrash`,
  `Mehen`,
  `Mozkith`,
  `Mreksh`,
  `Mugrunden`,
  `Nadarr`,
  `Nithther`,
  `Norkruuth`,
  `Nykkan`,
  `Pandjed`,
  `Paatrin`,
  `Pijjirik`,
  `Quarethon`,
  `Rathkran`,
  `Rhogar`,
  `Rivaan`,
  `Sethrekar`,
  `Shamash`,
  `Shedinn`,
  `Srorthen`,
  `Tarhun`,
  `Torinn`,
  `Trynnicus`,
  `Valorean`,
  `Vrondiss`,
  `Zedaar`,
];

const namesDragonbornClan = [
  `Akhamberylliax`,
  `Argenthrixus`,
  `baharoosh`,
  `Beryntolthropal`,
  `Benkhumbyrznaax`,
  `Caavylteradyn`,
  `Chumbyxirinnish`,
  `Clenthinthiallor`,
  `Daardendrian`,
  `Delmirev`,
  `Dhyrktelonis`,
  `Ebynichtomonis`,
  `Esstyrlynn`,
  `Fharngnarthnost`,
  `Ghaallixirn`,
  `Grrrmmballhyst`,
  `Gygazzylyshrift`,
  `Hashphronyxadyn`,
  `Hshhsstoroth`,
  `Imbixtellrhyst`,
  `jerynomonis`,
  `Jharthraxyn`,
  `Kerrhylon`,
  `Kimbatuul`,
  `Lhamboldennish`,
  `Lixakasendalor`,
  `Mohradyllion`,
  `Mystan`,
  `Nemmonis`,
  `Norixius`,
  `Ophinshtalajiir`,
  `Orexijandilin`,
  `Pfaphnyrennish`,
  `Phradrandon`,
  `Pyraxtallinost`,
  `Qyxpahrgh`,
  `Ragthroknaar`,
  `Shestendeliath`,
  `Skaarzborroosh`,
  `Sumnarghthrysh`,
  `Tiammmanthyllish`,
  `Turnuroth`,
  `Umbyrphrael`,
  `Vangdondalor`,
  `Verthisathurgiesh`,
  `Wivvyrholdalphiax`,
  `Wystongjiir`,
  `Xephyrbahnor`,
  `Yarjerit`,
  `Zzzxaaxthroth`,
];

const randomNPCAppearance = new Map([
  [1, `Distinctive jewelry: earrings, necklace, circlet, bracelets`],
  [2, `Piercings`],
  [3, `Flamboyant or outlandish clothes`],
  [4, `Formal, clean clothes`],
  [5, `Ragged, dirty clothes`],
  [6, `Pronounced scar`],
  [7, `Missing teeth`],
  [8, `Missing fingers`],
  [9, `Unusual eye color (or two different colors)`],
  [10, `Tattoos`],
  [11, `Birthmark`],
  [12, `Unusual skin color`],
  [13, `Bald`],
  [14, `Braided beard or hair`],
  [15, `Unusual hair color`],
  [16, `Nervous eye twitch`],
  [17, `Distinctive nose`],
  [18, `Distinctive posture (crooked or rigid)`],
  [19, `Exceptionally beautiful`],
  [20, `Exceptionally ugly`],
]);

const randomNPCHighAbility = new Map([
  [1, [`Strength`, `powerful`, `brawny`, `as strong as an ox`]],
  [2, [`Dexterity`, `lithe`, `agile`, `graceful`]],
  [3, [`Constitution`, `hardy`, `hale`, `healthy`]],
  [4, [`Intelligence`, `studious`, `learned`, `inquisitive`]],
  [5, [`Wisdom`, `perceptive`, `spiritual`, `insightful`]],
  [6, [`Charisma`, `persuasive`, `forceful`, `a born leader`]],
]);

const randomNPCLowAbility = new Map([
  [1, [`Strength`, `feeble`, `scrawny`]],
  [2, [`Dexterity`, `clumsy`, `fumbling`]],
  [3, [`Constitution`, `sickly`, `pale`]],
  [4, [`Intelligence`, `dim-witted`, `slow`]],
  [5, [`Wisdom`, `oblivious`, `absentminded`]],
  [6, [`Charisma`, `dull`, `boring`]],
]);

const randomNPCTalents = new Map([
  [1, `Plays a musical instrument`],
  [2, `Speaks several languages fluently`],
  [3, `Unbelievably lucky`],
  [4, `Perfect memory`],
  [5, `Great with animals`],
  [6, `Great with children`],
  [7, `Great at solving puzzles`],
  [8, `Great at one game `],
  [9, `Great at impersonations`],
  [10, `Draws beautifully`],
  [11, `Paints beautifully`],
  [12, `Sings beautifully`],
  [13, `Drinks everyone under the table`],
  [14, `Expert carpenter`],
  [15, `Expert cook`],
  [16, `Expert dart thrower and rock skipper`],
  [17, `Expert juggler`],
  [18, `Skilled actor and master of disguise`],
  [19, `Skilled dancer`],
  [20, `Knows thieves' cant`],
]);

const randomNPCMannerisms = new Map([
  [1, `Prone to singing, whistling, or humming quietly `],
  [2, `Speaks in rhyme or some other peculiar way`],
  [3, `Particularly low or high voice`],
  [4, `Slurs words, lisps, or stutters`],
  [5, `Enunciates overly clearly`],
  [6, `Speaks loudly`],
  [7, `Whispers `],
  [8, `Uses flowery speech or long words`],
  [9, `Frequently uses the wrong word `],
  [10, `Uses colorful oaths and exclamations`],
  [11, `Makes constant jokes or puns`],
  [12, `Prone to predictions of doom`],
  [13, `Fidgets`],
  [14, `Squints`],
  [15, `Stares into the distance`],
  [16, `Chews something`],
  [17, `Paces`],
  [18, `Taps fingers`],
  [19, `Bites fingernails`],
  [20, `Twirls hair or tugs beard`],
]);

const randomNPCInteractionTraits = new Map([
  [1, `Argumentative`],
  [2, `Arrogant`],
  [3, `Blustering`],
  [4, `Rude`],
  [5, `Curious`],
  [6, `Friendly`],
  [7, `Honest`],
  [8, `Hot Tempered`],
  [9, `Irritable`],
  [10, `Ponderous`],
  [11, `Quiet`],
  [12, `Suspicious`],
]);

const randomNPCIdeals = new Map([
  [
    `Good`,
    [`Beauty`, `Charity`, `Greater Good`, `Life`, `Respect`, `Self Sacrifice`],
  ],
  [
    `Evil`,
    [`Domination`, `Greed`, `Might`, `Pain`, `Retribution`, `Slaughter`],
  ],
  [
    `Lawful`,
    [`Community`, `Fairness`, `Honour`, `Logic`, `Responsibility`, `Tradition`],
  ],
  [
    `Chaotic`,
    [`Change`, `Creativity`, `Freedom`, `Independence`, `No Limits`, `Whimsy`],
  ],
  [
    `Neutral`,
    [
      `Balance`,
      `Knowledge`,
      `Live and Let Live`,
      `Moderation`,
      `Neutrality`,
      `People`,
    ],
  ],
  [
    `Other`,
    [
      `Aspiration`,
      `Discovery`,
      `Glory`,
      `Nation`,
      `Redemption`,
      `Self-Knowledge`,
    ],
  ],
]);

const randomNPCBonds = new Map([
  [1, `Dedicated to fulfilling a personal life goal`],
  [2, `Protective of close family members`],
  [3, `Protective of colleagues or compatriots`],
  [4, `Loyal to a benefactor, patron, or employer`],
  [5, `Captivated by a romantic interest`],
  [6, `Drawn to a special place`],
  [7, `Protective of a sentimental keepsake`],
  [8, `Protective of a va luable possession`],
  [9, `Out for revenge`],
  [10, `Roll twice, ignoring results of 10`],
]);

const randomNPCFlaws = new Map([
  [1, `Forbidden love or susceptibility to romance`],
  [2, `Enjoys decadent pleasures`],
  [3, `Arrogance`],
  [4, `Envies another creature's possessions or station`],
  [5, `Overpowering greed`],
  [6, `Prone to rage`],
  [7, `Has a powerful enemy`],
  [8, `Specific phobia`],
  [9, `Shameful or scandalous history`],
  [10, `Secret crime or misdeed`],
  [11, `Possession of forbidden lore`],
  [12, `Foolhardy bravery`],
]);

const resultsDiv = document.querySelector(`.results`);
const btnGenerateRandomNPC = document.querySelector(`.btnGenerateRandomNPC`);

const generateSimpleNPC = function () {
  const race = getNPCRace();
  const trimmedRace = race.slice(4, -5);
  const gender = getNPCGender();
  const trimmedGender = gender.slice(4, -5);
  const name = getNPCName(trimmedRace, trimmedGender);
  const appearance = getSimpleAppearance();
  const highScore = getNPCHighAbility();
  const lowScore = getNPCLowAbility();
  const talent = getNPCTalent();
  const mannerism = getNPCMannerism();
  const interactionTrait = getNPCInteractionTrait();
  const ideal = getNPCIdeal();
  const bond = getNPCBond();
  const flaw = getNPCFlaw();

  resultsDiv.innerHTML = `
    <ul>
    ${race}
    ${gender}
    ${name}
    ${appearance}
    ${highScore}
    ${lowScore}
    ${talent}
    ${mannerism}
    ${interactionTrait}
    ${ideal}
    ${bond}
    ${flaw}
    </ul>
  `;
};
const getNPCRace = function () {
  const roll = Math.trunc(Math.random() * randomNPCRace.size) + 1;
  return `<li>${randomNPCRace.get(roll)}</li>`;
};

const getNPCGender = function () {
  const roll = Math.trunc(Math.random() * 2);
  if (roll === 0) {
    return `Male`;
  } else if (roll === 1) {
    return `Female`;
  }
};

const getNPCName = function (race = `Human`, gender) {
  let result = ``;
  switch (race) {
    case `Dragonborn`:
      if (gender === `Male`) {
        const firstNameRoll = Math.trunc(
          Math.random() * namesDragonbornMale.length
        );
        result += `${namesDragonbornMale[roll]} `;
      } else if (gender === `Female`) {
        const firstNameRoll = Math.trunc(
          Math.random() * namesDragonbornFemale.length
        );
        result += `${namesDragonbornFemale[firstNameRoll]} `;
      }
      const lastNameRoll = Math.trunc(
        Math.random() * namesDragonbornClan.length
      );
      result += `${namesDragonbornClan[lastNameRoll]}`;
      break;

    default:
      break;
  }

  return `<li>${result}</li>`;
};

const getSimpleAppearance = function () {
  const roll = Math.trunc(Math.random() * randomNPCAppearance.size) + 1;
  return `<li>${randomNPCAppearance.get(roll)}</li>`;
};

const getNPCHighAbility = function () {
  const roll = Math.trunc(Math.random() * randomNPCHighAbility.size) + 1;
  const getAdjective = Math.trunc(
    Math.random() * randomNPCHighAbility.get(roll).length
  );
  return `<li>${randomNPCHighAbility.get(roll)[getAdjective]}</li>`;
};

const getNPCLowAbility = function () {
  const roll = Math.trunc(Math.random() * randomNPCLowAbility.size) + 1;
  const getAdjective = Math.trunc(
    Math.random() * randomNPCLowAbility.get(roll).length
  );
  return `<li>${randomNPCLowAbility.get(roll)[getAdjective]}</li>`;
};

const getNPCTalent = function () {
  const roll = Math.trunc(Math.random() * randomNPCTalents.size) + 1;
  return `<li>${randomNPCTalents.get(roll)}</li>`;
};

const getNPCMannerism = function () {
  const roll = Math.trunc(Math.random() * randomNPCMannerisms.size) + 1;
  return `<li>${randomNPCMannerisms.get(roll)}</li>`;
};

const getNPCInteractionTrait = function () {
  const roll = Math.trunc(Math.random() * randomNPCInteractionTraits.size) + 1;
  return `<li>${randomNPCInteractionTraits.get(roll)}</li>`;
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
      result += `<li>Other: ${randomNPCIdeals.get(`Other`)[secondRoll]}</li>`;
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
  return `<li>${randomNPCBonds.get(roll)}</li>`;
};

const getNPCFlaw = function () {
  const roll = Math.trunc(Math.random() * randomNPCFlaws.size) + 1;
  return `<li>${randomNPCFlaws.get(roll)}`;
};

btnGenerateRandomNPC.addEventListener(`click`, generateSimpleNPC);
