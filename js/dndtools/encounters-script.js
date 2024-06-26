"use strict";
// DOM Elements
const divResultsPartyThreshold = document.querySelector(
  `.resultsPartyThreshold`
);
const divResultsMonsterEXP = document.querySelector(`.resultsMonsterEXP`);
const divResultsEncounter = document.querySelector(`.resultsEncounter`);
const divResultsDifficulty = document.querySelector(`.resultsDifficulty`);
const btnCalculate = document.querySelector(`.btnCalculate`);
const btnAddMonster = document.querySelector(`.btnAddMonster`);
const btnRemoveMonster = document.querySelector(`.btnRemoveMonster`);
// Global
const thresholdsByLevel = [
  [25, 50, 75, 100],
  [50, 100, 150, 200],
  [75, 150, 225, 400],
  [125, 250, 375, 500],
  [250, 500, 750, 1100],
  [300, 600, 900, 1400],
  [350, 750, 1100, 1700],
  [450, 900, 1400, 2100],
  [550, 1100, 1600, 2400],
  [600, 1200, 1900, 2800],
  [800, 1600, 2400, 3600],
  [1000, 2000, 3000, 4500],
  [1100, 2200, 3400, 5100],
  [1250, 2500, 3800, 5700],
  [1400, 2800, 4300, 6400],
  [1600, 3200, 4800, 7200],
  [2000, 3900, 5900, 8800],
  [2100, 4200, 6300, 9500],
  [2400, 4900, 7300, 10900],
  [2800, 5700, 8500, 12700],
];
const thresholdNames = [
  `Trivial`,
  `Easy`,
  `Medium`,
  `Hard`,
  `Deadly`,
  `Per Day`,
];
const expPerDay = [
  300, 600, 1200, 1700, 3500, 4000, 5000, 6000, 7500, 9000, 10500, 11500, 13500,
  15000, 18000, 20000, 25000, 27000, 30000, 40000,
];
const expByCR = new Map([
  [0, 10],
  [0.125, 25],
  [0.25, 50],
  [0.5, 100],
  [1, 200],
  [2, 450],
  [3, 700],
  [4, 1100],
  [5, 1800],
  [6, 2300],
  [7, 2900],
  [8, 3900],
  [9, 5000],
  [10, 5900],
  [11, 7200],
  [12, 8400],
  [13, 10000],
  [14, 11500],
  [15, 13000],
  [16, 15000],
  [17, 18000],
  [18, 20000],
  [19, 22000],
  [20, 25000],
  [21, 33000],
  [22, 41000],
  [23, 50000],
  [24, 62000],
  [25, 75000],
  [26, 90000],
  [27, 105000],
  [28, 120000],
  [29, 135000],
  [30, 155000],
]);
const optionTextCR = `
        <option value="0">0</option>
        <option value="0.125">0.125</option>
        <option value="0.25">0.25</option>
        <option value="0.5">0.5</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
      `;
const optionTextType = `
        <option value="any">any</option>
        <option value="abberation">abberation</option>
        <option value="beast">beast</option>
        <option value="celestial">celestial</option>
        <option value="construct">connstruct</option>
        <option value="dragon">dragon</option>
        <option value="elemental">elemental</option>
        <option value="fey">fey</option>
        <option value="fiend">fiend</option>
        <option value="giant">giant</option>
        <option value="humanoid">humanoid</option>
        <option value="monstrosity">monstrosity</option>
        <option value="ooze">ooze</option>
        <option value="plant">plant</option>
        <option value="undead">undead</option>
      `;
let rowCountMonster = 1;
let rowCountPlayer = 1;

const addRow = function (btnID) {
  if (btnID === `btnAddMonster`) {
    if (rowCountMonster < 10) {
      rowCountMonster++;
      // Create a monster row.
      const container = document.createElement(`div`);
      container.className = `monsterRow`;
      container.id = `monsterRow${rowCountMonster}`;
      const countLabel = document.createElement(`label`);
      countLabel.htmlFor = `monsterCount${rowCountMonster}`;
      countLabel.innerText = `Amount `;
      const countInput = document.createElement(`input`);
      countInput.className = `monsterCount`;
      countInput.type = "number";
      countInput.id = `monsterCount${rowCountMonster}`;
      countInput.min = `1`;
      countInput.max = `10`;
      countInput.value = `1`;
      const crLabel = document.createElement(`label`);
      crLabel.htmlFor = `monsterCR${rowCountMonster}`;
      crLabel.innerText = ` CR `;
      const crSelect = document.createElement(`select`);
      crSelect.className = `monsterCR`;
      crSelect.id = `monsterCR${rowCountMonster}`;
      crSelect.innerHTML = optionTextCR;

      const typeLabel = document.createElement(`label`);
      typeLabel.htmlFor = `monsterType${rowCountMonster}`;
      typeLabel.innerText = ` Type `;
      const typeSelect = document.createElement(`select`);
      typeSelect.className = `monsterType`;
      typeSelect.id = `monsterCR${rowCountMonster}`;
      typeSelect.innerHTML = optionTextType;

      // Add the row to the DOM.
      document.querySelector(`.monsterEXP`).append(container);
      container.appendChild(countLabel);
      container.appendChild(countInput);
      container.appendChild(crLabel);
      container.appendChild(crSelect);
      container.appendChild(typeLabel);
      container.appendChild(typeSelect);
    } else {
      alert(`You can only have so many kinds of monster.`);
    }
  } else if (btnID === `btnAddPlayer`) {
    if (rowCountPlayer < 10) {
      rowCountPlayer++;
      // Create a player row.
      const container = document.createElement(`div`);
      container.className = `playerRow`;
      container.id = `playerRow${rowCountPlayer}`;
      const countLabel = document.createElement(`label`);
      countLabel.htmlFor = `playerCount${rowCountPlayer}`;
      countLabel.innerText = `Amount `;
      const countInput = document.createElement(`input`);
      countInput.className = `playerCount`;
      countInput.type = `number`;
      countInput.id = `playerCount${rowCountPlayer}`;
      countInput.min = `1`;
      countInput.max = `10`;
      countInput.value = `1`;
      const levelLabel = document.createElement(`label`);
      levelLabel.htmlFor = `playerLevel${rowCountPlayer}`;
      levelLabel.innerText = ` Level `;
      const levelInput = document.createElement(`input`);
      levelInput.className = `playerLevel`;
      levelInput.type = `number`;
      levelInput.id = `playerLevel${rowCountPlayer}`;
      levelInput.min = `1`;
      levelInput.max = `20`;
      levelInput.value = `1`;
      // Add the row to the DOM.
      document.querySelector(`.partyThreshold`).append(container);
      container.appendChild(countLabel);
      container.appendChild(countInput);
      container.appendChild(levelLabel);
      container.appendChild(levelInput);
    } else {
      alert(`More than ten different levels? That might be too many.`);
    }
  }
};

const removeRow = function (btnID) {
  if (btnID === `btnRemoveMonster`) {
    if (rowCountMonster > 1) {
      const rows = document.querySelector(`.monsterEXP`).children;
      document.querySelector(`.monsterEXP`).removeChild(rows[rows.length - 1]);
      rowCountMonster--;
    } else {
      alert(`You need at least one monster.`);
    }
  } else if (btnID === `btnRemovePlayer`) {
    if (rowCountPlayer > 1) {
      const rows = document.querySelector(`.partyThreshold`).children;
      document
        .querySelector(`.partyThreshold`)
        .removeChild(rows[rows.length - 1]);
      rowCountPlayer--;
    } else {
      alert(`You need at least one player.`);
    }
  }
};

const calculateThresholds = function (numPlayers, playerLevel) {
  let easy = 0;
  let medium = 0;
  let hard = 0;
  let deadly = 0;
  let perDay = 0;

  for (let i = 0; i < numPlayers.length; i++) {
    easy += thresholdsByLevel[playerLevel[i] - 1][0] * numPlayers[i];
    medium += thresholdsByLevel[playerLevel[i] - 1][1] * numPlayers[i];
    hard += thresholdsByLevel[playerLevel[i] - 1][2] * numPlayers[i];
    deadly += thresholdsByLevel[playerLevel[i] - 1][3] * numPlayers[i];
    perDay += expPerDay[playerLevel[i] - 1] * numPlayers[i];
  }

  const thresholds = [easy, medium, hard, deadly, perDay];

  divResultsPartyThreshold.innerHTML = `
        <table>
            <tr>
                <th>Difficulty</th>
                <th>Party Threshold</th>
            </tr>
            <tr>
                <td>${thresholdNames[0]}</td>
                <td>Less than ${thresholds[0]}</td>
            </tr>
            <tr>
                <td>${thresholdNames[1]}</td>
                <td>${thresholds[0]}</td>
            </tr>
            <tr>
                <td>${thresholdNames[2]}</td>
                <td>${thresholds[1]}</td>
            </tr>
            <tr>
                <td>${thresholdNames[3]}</td>
                <td>${thresholds[2]}</td>
            </tr>
            <tr>
                <td>${thresholdNames[4]}</td>
                <td>${thresholds[3]}</td>
            </tr>
            <tr>
                <td>${thresholdNames[5]}</td>
                <td>${thresholds[4]}</td>
            </tr>
        </table>
    `;

  return thresholds;
};

const calculateMonsterEXP = function (
  numMonsters,
  monsterCR,
  sumPlayers,
  sumMonsters
) {
  let expUnmodified = 0;
  let expTotal = 0;

  for (let i = 0; i < numMonsters.length; i++) {
    expUnmodified += numMonsters[i] * expByCR.get(Number(monsterCR[i]));
  }

  if (sumMonsters >= 15) {
    if (sumPlayers >= 6) {
      expTotal = expUnmodified * 3;
    } else if (sumplayers >= 3 && sumPlayers <= 5) {
      expTotal = expUnmodified * 4;
    } else {
      expTotal = expUnmodified * 5;
    }
  } else if (sumMonsters >= 11 && sumMonsters <= 14) {
    if (sumPlayers >= 6) {
      expTotal = expUnmodified * 2.5;
    } else if (sumPlayers >= 3 && sumPlayers <= 5) {
      expTotal = expUnmodified * 3;
    } else {
      expTotal = expUnmodified * 4;
    }
  } else if (sumMonsters >= 7 && sumMonsters <= 10) {
    if (sumPlayers >= 6) {
      expTotal = expUnmodified * 2;
    } else if (sumPlayers >= 3 && sumPlayers <= 5) {
      expTotal = expUnmodified * 2.5;
    } else {
      expTotal = expUnmodified * 3;
    }
  } else if (sumMonsters >= 3 && sumMonsters <= 6) {
    if (sumPlayers >= 6) {
      expTotal = expUnmodified * 1.5;
    } else if (sumPlayers >= 3 && sumPlayers <= 5) {
      expTotal = expUnmodified * 2;
    } else {
      expTotal = expUnmodified * 2.5;
    }
  } else if ((sumMonsters = 2)) {
    if (sumPlayers >= 6) {
      expTotal = expUnmodified * 1;
    } else if (sumPlayers >= 3 && sumPlayers <= 5) {
      expTotal = expUnmodified * 1.5;
    } else {
      expTotal = expUnmodified * 2;
    }
  } else {
    if (sumPlayers >= 6) {
      expTotal = expUnmodified * 0.5;
    } else if (sumPlayers >= 3 && sumPlayers <= 5) {
      expTotal = expUnmodified * 1;
    } else {
      expTotal = expUnmodified * 1.5;
    }
  }

  divResultsMonsterEXP.innerHTML = `
        <p>
            Unmodified Experience: ${expUnmodified}
            Total Experience: ${expTotal}
        </p>
    `;

  return [expUnmodified, expTotal];
};

const calculateResults = function () {
  const numPlayersEls = document.querySelectorAll(`.playerCount`);
  const numPlayers = [].map.call(numPlayersEls, function (e) {
    return e.value;
  });
  const playerLevelEls = document.querySelectorAll(`.playerLevel`);
  const playerLevel = [].map.call(playerLevelEls, function (e) {
    return e.value;
  });

  const thresholds = calculateThresholds(numPlayers, playerLevel);

  const numMonstersEls = document.querySelectorAll(`.monsterCount`);
  const numMonsters = [].map.call(numMonstersEls, function (e) {
    return e.value;
  });
  const monsterCREls = document.querySelectorAll(`.monsterCR`);
  const monsterCRs = [].map.call(monsterCREls, function (e) {
    return e.value;
  });

  const monsterTypeEls = document.querySelectorAll(`.monsterType`);
  const monsterTypes = [].map.call(monsterTypeEls, function (e) {
    return e.value;
  });

  let sumPlayers = 0;
  let sumMonsters = 0;

  for (const num of numPlayers) {
    sumPlayers += Number(num);
  }

  for (const num of numMonsters) {
    sumMonsters += Number(num);
  }

  const arrEXP = calculateMonsterEXP(
    numMonsters,
    monsterCRs,
    sumPlayers,
    sumMonsters
  );

  const expUnmodified = arrEXP[0];
  const expTotal = arrEXP[1];

  let difficulty = ``;

  if (expTotal >= thresholds[3]) {
    difficulty = thresholdNames[4];
  } else if (expTotal >= thresholds[2]) {
    difficulty = thresholdNames[3];
  } else if (expTotal >= thresholds[1]) {
    difficulty = thresholdNames[2];
  } else if (expTotal >= thresholds[0]) {
    difficulty = thresholdNames[1];
  } else {
    difficulty = thresholdNames[0];
  }

  const expPerPlayer = expUnmodified / sumPlayers;

  const encounter = generateEncounter(numMonsters, monsterCRs, monsterTypes);
  divResultsEncounter.innerHTML = encounter;

  divResultsDifficulty.innerHTML = `
        <p>
            This encounter is ${difficulty}. 
            Your players will earn ${expPerPlayer} experience each.    
        </p>
    `;
};

const generateEncounter = function (numMonsters, monsterCRs, monsterTypes) {
  let encounterRows = [];
  for (let i = 0; i < numMonsters.length; i++) {
    let monsterList = [];
    for (let j = 0; j < monsterData.length; j++) {
      if (monsterData[j][`CR`] === monsterCRs[i]) {
        if (
          monsterTypes[i] === `any` ||
          monsterData[j][`Type`].includes(monsterTypes[i])
        ) {
          monsterList.push(monsterData[j]);
        }
      }
    }
    const rollMonster = Math.trunc(Math.random() * monsterList.length);

    if (monsterList[rollMonster]) {
      encounterRows.push(`
    <tr>
      <td>${monsterList[rollMonster][`Creature`]}</td>
      <td>${monsterList[rollMonster][`CR`]}</td>
      <td>${monsterList[rollMonster][`Type`]}</td>
      <td>${monsterList[rollMonster][`Size`]}</td>
      <td>${monsterList[rollMonster][`AC`]}</td>
      <td>${monsterList[rollMonster][`HP`]}</td>
      <td>${monsterList[rollMonster][`Speed`] || `walk`}</td>
      <td>${monsterList[rollMonster][`Alignment`]}</td>
      <td>${monsterList[rollMonster][`Legendary`] || `no`}</td>
      <td>${monsterList[rollMonster][`Source`]}</td>
    </tr>`);
    } else {
      encounterRows.push(`
        <tr><td>No monster meets these requirements.</td></tr>
      `);
    }
  }

  const encounter = `
  <table>
    <tr>
      <th>Creature</th>
      <th>CR</th>
      <th>Type</th>
      <th>Size</th>
      <th>AC</th>  
      <th>HP</th>
      <th>Speed</th>
      <th>Alignment</th>
      <th>Legendary</th>
      <th>Source</th>
    </tr>
    ${encounterRows.toString().replace(/,/g, "")} 
  </table>          
  `;
  return encounter;
};

btnCalculate.addEventListener(`click`, calculateResults);
