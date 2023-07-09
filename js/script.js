function pilihanBot() {
  const options = ["✊", "✌", "✋"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function getHasil(player, botOption) {
  if (player === botOption) {
    return "SERI!";
  } else if (
    (player === "✊" && botOption === "✌") ||
    (player === "✌" && botOption === "✋") ||
    (player === "✋" && botOption === "✊")
  ) {
    return "MENANG!";
  } else {
    return "KALAH!";
  }
}

let skorPlayer = 0;
let skorBot = 0;

const pilihanElements = document.querySelectorAll(".pilihan");
pilihanElements.forEach(function (pilihanElement) {
  pilihanElement.addEventListener("click", function () {
    const computer = pilihanBot();
    const human = this.innerHTML;
    const hasil = getHasil(human, computer);

    const pilihanBotElement = document.querySelector(".pilihanBot");
    pilihanBotElement.innerHTML = computer;

    const hasilElement = document.getElementById("result");
    hasilElement.innerHTML = hasil;

    if (hasil === "MENANG!") {
      skorPlayer++;
      skorBot--;
    } else if (hasil === "KALAH!") {
      skorPlayer--;
      skorBot++;
    }

    const skorPlayerElement = document.getElementById("skorPlayer");
    skorPlayerElement.innerHTML = skorPlayer;

    const skorBotElement = document.getElementById("skorBot");
    skorBotElement.innerHTML = skorBot;
  });
});
