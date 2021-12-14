window.onload = function () {
  const btnRoll = document.querySelector(`.btnRoll`);

  const rollXDX = function () {
    let result = 0;
    const numRolls = document.querySelector(`.numRolls`).value;
    const numModifier = document.querySelector(`.numModifier`).value;
    const dWhat = document.querySelector(
      "input[name=diceValues]:checked"
    ).value;

    for (let i = 0; i < numRolls; i++) {
      result += Math.trunc(Math.random() * dWhat) + 1;
    }
    result += numModifier;

    btnRoll.textContent = `Your Roll: ${result}`;
  };

  btnRoll.addEventListener(`click`, rollXDX);
};
