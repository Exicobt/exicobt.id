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

function putar() {
  const jeda = document.querySelector(".pilihanBot");
  const putarBot = ["✊", "✌", "✋"];
  const start = new Date().getTime();
  let i = 0;

  setInterval(function () {
    if (new Date().getTime() - start > 1000) {
      clearInterval;
      return;
    }
    jeda.innerHTML = putarBot[i];
    i = (i + 1) % putarBot.length;
  }, 100);
}

let skorPlayer = 0;
let skorBot = 0;

const pilihanElements = document.querySelectorAll(".pilihan");
pilihanElements.forEach(function (pilihanElement) {
  pilihanElement.addEventListener("click", function () {
    const computer = pilihanBot();
    const human = this.innerHTML;
    const hasil = getHasil(human, computer);

    putar();

    const hasilElement = document.getElementById("result");
    hasilElement.innerHTML = "";

    const notification = document.getElementById("pilPlay");
    notification.innerHTML ="";

    if (hasil === "MENANG!") {
      skorPlayer++;
    } else if (hasil === "KALAH!") {
      skorBot++;
    }

    setTimeout(function () {
      const skorPlayerElement = document.getElementById("skorPlayer");
      skorPlayerElement.innerHTML = skorPlayer;

      const pilihanBotElement = document.querySelector(".pilihanBot");
      pilihanBotElement.innerHTML = computer;

      const skorBotElement = document.getElementById("skorBot");
      skorBotElement.innerHTML = skorBot;

      const hasilElement = document.getElementById("result");
      hasilElement.innerHTML = hasil;

      const notification = document.getElementById("pilPlay");
      notification.innerHTML = `Kamu memilih ${human}, Bot memilih ${computer}, Hasil pertandingan: ${hasil}`;
    }, 1000);
  });
});
