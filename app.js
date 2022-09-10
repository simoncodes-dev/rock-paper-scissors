const rules = {
    rock: 'paper',
    paper: 'scissors',
    scissors: 'rock'
}

const choiceArray = Object.keys(rules)


let round = 0;
let playerWins = 0;
let computerWins = 0;
let gameOverFlag = false;

const rockBtn = document.getElementById('rock-btn')
const paperBtn = document.getElementById('paper-btn')
const scissorsBtn = document.getElementById('scissors-btn')
const playerScoreText = document.getElementById('player-score-text')
const computerScoreText = document.getElementById('computer-score-text')
const winnerText = document.getElementById('winner-text')

const resetBtn = document.getElementById('reset-button')

const runRound = (playerChoice) => {
    const computerChoice = choiceArray[Math.floor(Math.random() * 3)]
    if (computerChoice === playerChoice) {
        alert(`It's a tie! Computer: ${computerChoice}, Player: ${playerChoice}`)

    }
    else if (rules[computerChoice] === playerChoice) {
        alert(`Player wins! Computer: ${computerChoice}, Player: ${playerChoice}`)
        playerWins++
        playerScoreText.innerHTML = playerWins.toString()
        gameOverFlag = gameOver()
    }
    else {
        alert(`Computer wins! Computer: ${computerChoice}, Player: ${playerChoice}`)
        computerWins++
        computerScoreText.innerHTML = computerWins.toString()
        gameOverFlag = gameOver()
    }
}

const gameOver = () => {
    if (playerWins === 5 || computerWins === 5) {
        alert(`Game Over! ${playerWins === 5 ? 'Player wins!' : 'Computer wins!'}`)
        winnerText.innerHTML = `Game Over! ${playerWins === 5 ? 'Player wins!' : 'Computer wins!'}`
        winnerText.style.display = 'block'
        resetBtn.classList.remove('d-none')
        return true;
    }
    return false;
}

const resetGame = () => {
    computerScoreText.innerHTML = '0'
    playerScoreText.innerHTML = '0'
    gameOverFlag = false
    winnerText.innerHTML = ''
    winnerText.style.display = 'none'
    resetBtn.classList.add('d-none')
    playerWins = 0
    computerWins = 0
    round = 0
}

rockBtn.addEventListener('click', () => runRound('rock'))
paperBtn.addEventListener('click', () => runRound('paper'))
scissorsBtn.addEventListener('click', () => runRound('scissors'))
resetBtn.addEventListener('click', resetGame)