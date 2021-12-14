window.onload = function () {
  const btnRoll = document.querySelector(`.btnRoll`);
  const divShowResult = document.querySelector(`.divShowResult`);

  const rollXDX = function () {
    let result = 0;
    const numRolls = document.querySelector(`.numRolls`).value;
    const numModifier = document.querySelector(`.numModifier`).value;
    console.log(numRolls);
    const dWhat = document.querySelector(
      "input[name=diceValues]:checked"
    ).value;
    console.log(dWhat);

    for (let i = 0; i < numRolls; i++) {
      result += Math.trunc(Math.random() * dWhat) + 1;
      console.log(result);
    }
    result += numModifier;

    divShowResult.textContent = `${result}`;
  };

  btnRoll.addEventListener(`click`, rollXDX);
};
