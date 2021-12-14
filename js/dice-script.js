window.onload = function () {
  const btnRoll = document.querySelector(`.btnRoll`);

  const rollXDX = function () {
    let result = 0;
    const numRolls = document.querySelector(".numRolls").value;
    console.log(numRolls);
    const dWhat = document.querySelector(
      "input[name=diceValues]:checked"
    ).value;
    console.log(dWhat);

    for (let i = 0; i < numRolls; i++) {
      result += Math.trunc(Math.random() * dWhat) + 1;
      console.log(result);
    }
    btnRoll.value = `Your Roll: ${result}`;
  };

  btnRoll.addEventListener(`click`, rollXDX);
};
