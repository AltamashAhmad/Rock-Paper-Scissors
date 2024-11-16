const options = ["rock", "paper", "scissors"];
const score = JSON.parse(localStorage.getItem('score')) || { Wins: 0, losses: 0, ties: 0 };
document.querySelector('.finalResult').innerText = `Wins: ${score.Wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

function finalAns(personalChoice) {
    const ComputersChoice = options[Math.floor(Math.random() * options.length)];

    // Show the result with images
    if (ComputersChoice === personalChoice) {
        score.ties += 1;
        document.querySelector('.resultWithChoice').innerHTML = `
            You picked: <img class="move-button" src="/images/${personalChoice}-emoji.png" alt="${personalChoice}"> 
            Computer picked: <img src="/images/${ComputersChoice}-emoji.png" class="move-button" alt="${ComputersChoice}"> 
            <strong>It's a Tie.</strong>`;
    } else if (
        (ComputersChoice === 'rock' && personalChoice === 'scissors') || 
        (ComputersChoice === 'scissors' && personalChoice === 'paper') || 
        (ComputersChoice === 'paper' && personalChoice === 'rock')
    ) {
        score.losses += 1;
        document.querySelector('.resultWithChoice').innerHTML = `
            You picked: <img class="move-button" src="/images/${personalChoice}-emoji.png" alt="${personalChoice}"> 
            Computer picked: <img src="/images/${ComputersChoice}-emoji.png" class="move-button" alt="${ComputersChoice}"> 
            <strong>You lose.</strong>`;
    } else {
        score.Wins += 1;
        document.querySelector('.resultWithChoice').innerHTML = `
            You picked: <img class="move-button" src="/images/${personalChoice}-emoji.png" alt="${personalChoice}"> 
            Computer picked: <img src="/images/${ComputersChoice}-emoji.png" class="move-button" alt="${ComputersChoice}"> 
            <strong>You win!</strong>`;
    }

    // Update and save score
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.finalResult').innerText = `Wins: ${score.Wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

let autoPlayInterval = null;

function autoplay() {
    const button = document.querySelector(".js-auto-play");
    if (autoPlayInterval) {
        // Stop Auto Play
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
        button.innerText = "AUTO PLAY"; // Update button text
    } else {
        // Start Auto Play
        autoPlayInterval = setInterval(() => {
            const personalChoice = options[Math.floor(Math.random() * options.length)];
            finalAns(personalChoice);
        }, 1000);
        button.innerText = "STOP PLAY"; // Update button text
    }
}
