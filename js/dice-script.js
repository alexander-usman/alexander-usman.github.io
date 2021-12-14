window.onload = function () {
  const btnRoll = document.querySelector(`.btnRoll`);

  const rollXDX = function () {
    let result = 0;
    const numRolls = Number(document.querySelector(`.numRolls`).value);
    const numModifier = Number(document.querySelector(`.numModifier`).value);
    const dWhat = document.querySelector(
      "input[name=diceValues]:checked"
    ).value;

    for (let i = 0; i < numRolls; i++) {
      result += Math.trunc(Math.random() * dWhat) + 1;
    }
    result += numModifier;
    btnRoll.value = `Your Roll: ${result}`;
  };

  btnRoll.addEventListener(`click`, rollXDX);
};
