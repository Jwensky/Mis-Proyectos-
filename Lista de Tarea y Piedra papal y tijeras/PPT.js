function playGame(playerChoice) {
    const choices = ['Piedra', 'Papel', 'Tijeras'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('result').innerHTML = `
    Jugador eligió: <b>${playerChoice}</b><br>
    Computadora eligió: <b>${computerChoice}</b>
    `;

    let winner = '';
    if (playerChoice === computerChoice) {
    winner = '¡Es un empate!';
    } else if (
    (playerChoice === 'Piedra' && computerChoice === 'Tijeras') ||
    (playerChoice === 'Papel' && computerChoice === 'Piedra') ||
    (playerChoice === 'Tijeras' && computerChoice === 'Papel')
    ) {
    winner = '¡Ganaste!';
    } else {
    winner = 'La computadora gana.';
    }

    document.getElementById('winner').textContent = winner;
    document.getElementById('resetButton').style.display = 'inline-block';
}

function resetGame() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('winner').textContent = '';
    document.getElementById('resetButton').style.display = 'none';
}