"use strict";
// Random NPC Tables
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

const randomNPCTalent = new Map([
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

const randomNPCMannerism = new Map([
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

const generateRandomNPC = function () {
  const appearance = getSimpleAppearance();
  const highScore = getNPCHighAbility();

  resultsDiv.innerHTML = `
    ${appearance}
    ${highScore}
  `;
};

const getSimpleAppearance = function () {
  const roll = Math.trunc(Math.random() * randomNPCAppearance.size);
  return `${randomNPCAppearance.get(roll)}`;
};

const getNPCHighAbility = function () {
  const roll = Math.trunc(Math.random() * randomNPCHighAbility.size);
  const getAdjective = Math.trunc(
    Math.random() * randomNPCHighAbility.get(roll).length
  );
  return `${randomNPCHighAbility.get(roll)[getAdjective]}`;
};

btnGenerateRandomNPC.addEventListener(`click`, generateRandomNPC);
