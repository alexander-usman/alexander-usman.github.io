"use strict";
window.onload = function () {
  const divResults = document.querySelector(`.results`);
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

  const calculateThresholds = function () {
    const numPlayers = Number(document.querySelector(`.playerCount`).value);
    const playerLevel = Number(document.querySelector(`.playerLevel`).value);
    const thresholds = [
      thresholdsByLevel[playerLevel - 1][0] * numPlayers,
      thresholdsByLevel[playerLevel - 1][1] * numPlayers,
      thresholdsByLevel[playerLevel - 1][2] * numPlayers,
      thresholdsByLevel[playerLevel - 1][3] * numPlayers,
    ];

    divResults.innerHTML = `
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
  };

  btnCalculate.addEventListener(`click`, calculateThresholds);
};
