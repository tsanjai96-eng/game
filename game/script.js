let playerScore = 0;
let computerScore = 0;

const choices = ["Rock", "Paper", "Scissors"];

function playGame(playerChoice) {

    // Computer chooses randomly
    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    let result;

    // Check the result
    if (playerChoice === computerChoice) {

        result = "🤝 It's a Draw!";

    } else if (

        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")

    ) {

        result = "🎉 You Win!";
        playerScore++;

    } else {

        result = "🤖 Computer Wins!";
        computerScore++;
    }

    // Display result
    document.getElementById("result").innerHTML = `
        <p>You chose: ${playerChoice}</p>
        <p>Computer chose: ${computerChoice}</p>
        <h2>${result}</h2>
    `;

    // Update score
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}