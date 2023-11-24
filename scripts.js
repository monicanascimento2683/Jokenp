const result = document.querySelector(".result");

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = [`rock`, `paper`, `scissors`];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log(`Humano:` + human + "Maquina:" + machine);

  if (human === machine) {
    result.innerHTML = "Deu Empate!";
  } else if (
    (human === `paper` && machine === "rock") ||
    (human === `rock` && machine === `scissors`) ||
    (human === `scissors` && machine === `paper`)
  ) {
    result.innerHTML = "Você Ganhou!";
  } else {
    result.innerHTML = "A Maquina ganhou!";
  }
};
