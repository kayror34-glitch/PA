
let playerScore = 0;
let computerScore = 0;

const emojis = {
    pedra: "✊",
    papel: "✋",
    tesoura: "✌️"
};

function play(playerChoice) {
    const choices = ["pedra", "papel", "tesoura"];

    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "Empate!";
    } else if (
        (playerChoice === "pedra" && computerChoice === "tesoura") ||
        (playerChoice === "papel" && computerChoice === "pedra") ||
        (playerChoice === "tesoura" && computerChoice === "papel")
    ) {
        result = "Você venceu! 🎉";
        playerScore++;
    } else {
        result = "O computador venceu! 🤖";
        computerScore++;
    }

    document.getElementById("player-choice").textContent =
        emojis[playerChoice];

    document.getElementById("computer-choice").textContent =
        emojis[computerChoice];

    document.getElementById("result").textContent = result;

    document.getElementById("message").textContent =
        `Você escolheu ${playerChoice} e o computador escolheu ${computerChoice}.`;

    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById("player-score").textContent = 0;
    document.getElementById("computer-score").textContent = 0;

    document.getElementById("player-choice").textContent = "❔";
    document.getElementById("computer-choice").textContent = "❔";

    document.getElementById("result").textContent = "Faça sua jogada!";
    document.getElementById("message").textContent =
        "Quem será o vencedor?";
}