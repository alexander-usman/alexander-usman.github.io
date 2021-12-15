"use strict";
window.onload = function () {
  const divResultsPartyThreshold = document.querySelector(
    `.resultsPartyThreshold`
  );
  const divResultsMonsterEXP = document.querySelector(`.resultsMonsterEXP`);
  const divResultsDifficulty = document.querySelector(`.resultsDifficulty`);

  const btnCalculate = document.querySelector(`.btnCalculate`);
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
  const thresholdNames = [`Trivial`, `Easy`, `Medium`, `Hard`, `Deadly`];

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

  const calculateThresholds = function (numPlayers, playerLevel) {
    const thresholds = [
      thresholdsByLevel[playerLevel - 1][0] * numPlayers,
      thresholdsByLevel[playerLevel - 1][1] * numPlayers,
      thresholdsByLevel[playerLevel - 1][2] * numPlayers,
      thresholdsByLevel[playerLevel - 1][3] * numPlayers,
    ];

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
        </table>
    `;

    return thresholds;
  };

  const calculateMonsterEXP = function (numMonsters, monsterCR, numPlayers) {
    // Refactor Me
    const expUnmodified = numMonsters * expByCR.get(monsterCR);
    let expTotal = 0;

    if (numMonsters >= 15) {
      if (numPlayers >= 6) {
        expTotal = expUnmodified * 3;
      } else if (numplayers >= 3 && numplayers <= 5) {
        expTotal = expUnmodified * 4;
      } else {
        expTotal = expUnmodified * 5;
      }
    } else if (numMonsters >= 11 && numMonsters <= 14) {
      if (numPlayers >= 6) {
        expTotal = expUnmodified * 2.5;
      } else if (numplayers >= 3 && numplayers <= 5) {
        expTotal = expUnmodified * 3;
      } else {
        expTotal = expUnmodified * 4;
      }
    } else if (numMonsters >= 7 && numMonsters <= 10) {
      if (numPlayers >= 6) {
        expTotal = expUnmodified * 2;
      } else if (numplayers >= 3 && numplayers <= 5) {
        expTotal = expUnmodified * 2.5;
      } else {
        expTotal = expUnmodified * 3;
      }
    } else if (numMonsters >= 3 && numMonsters <= 6) {
      if (numPlayers >= 6) {
        expTotal = expUnmodified * 1.5;
      } else if (numplayers >= 3 && numplayers <= 5) {
        expTotal = expUnmodified * 2;
      } else {
        expTotal = expUnmodified * 2.5;
      }
    } else if ((numMonsters = 2)) {
      if (numPlayers >= 6) {
        expTotal = expUnmodified * 1;
      } else if (numplayers >= 3 && numplayers <= 5) {
        expTotal = expUnmodified * 1.5;
      } else {
        expTotal = expUnmodified * 2;
      }
    } else {
      if (numPlayers >= 6) {
        expTotal = expUnmodified * 0.5;
      } else if (numplayers >= 3 && numplayers <= 5) {
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
    const numPlayers = Number(document.querySelector(`.playerCount`).value);
    const playerLevel = Number(document.querySelector(`.playerLevel`).value);
    const thresholds = calculateThresholds(numPlayers, playerLevel);

    const numMonsters = Number(document.querySelector(`.monsterCount`).value);
    const monsterCR = Number(document.querySelector(`.monsterCR`).value);
    const arrEXP = calculateMonsterEXP(numMonsters, monsterCR, numPlayers);
    const expTotal = arrEXP[0];
    const expUnmodified = arrEXP[1];

    let difficulty = ``;

    if (totalEXP >= thresholds[3]) {
      difficulty = thresholdNames[4];
    } else if (totalEXP >= thresholds[2]) {
      difficulty = thresholdNames[3];
    } else if (totalEXP >= thresholds[1]) {
      difficulty = thresholdNames[2];
    } else if (totalEXP >= thresholds[0]) {
      difficulty = thresholdNames[1];
    } else {
      difficulty = thresholdNames[0];
    }

    const expPerPlayer = expUnmodified / numPlayers;

    divResultsDifficulty.innerHTML = `
        <p>
            This encounter is ${difficulty}. 
            Your players will earn ${expPerPlayer}.    
        </p>
    `;
  };

  btnCalculate.addEventListener(`click`, calculateResults);
};
