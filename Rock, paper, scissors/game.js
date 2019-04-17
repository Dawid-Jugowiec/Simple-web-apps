// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
    number: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: "",
    aiHand: "",
}


const hands = document.querySelectorAll('.select img'); //node array

// const hands = [...document.querySelectorAll('.select img')]; //table

function handSelection() {

    game.playerHand = this.dataset.option;
    console.log(game.playerHand);
    hands.forEach(hand => { hand.style.boxShadow = '0 0 0 0' })
    this.style.boxShadow = '0 0 0 4px red';
}

// handSelection = (e) => {
//     console.log(e.target);
//     console.log(e.currentTarget);
// }

publishResult = function (player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('p.numbers span').textContent = ++gameSummary.number;

    if (result === 'win') {

        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = 'Ty wygrałeś!';
        document.querySelector('[data-summary="who-win"]').style.color = 'green';
    }

    else if (result === 'loss') {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = 'Wygrał przeciwnik :(';
        document.querySelector('[data-summary="who-win"]').style.color = 'red';


    }

    else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = 'Remis :\\';
        document.querySelector('[data-summary="who-win"]').style.color = 'orange';


    }

}


aiChoice = function () {
    const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
    return aiHand;
}



checkResult = function (player, ai) {
    if (player === ai) {
        return 'remis';
    }
    else if ((player === 'papier' && ai === 'kamień') || (player === 'kamień' && ai === 'nożyczki') || (player === 'nożyczki' && ai === 'papier')) {
        return 'win';
    }
    else {
        return 'loss';

    }
    // return result;
}

EndGame = function () {

    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';
    game.playerHand = '';
    // hands.forEach(hand => { hand.style.boxShadow = '0 0 0 0' })
}


startGame = function () {
    if (game.playerHand === "") {
        return alert('Wybierz dłoń');
    }
    game.aiHand = aiChoice();

    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(gameResult);
    publishResult(game.playerHand, game.aiHand, gameResult);
    EndGame();

}

hands.forEach(hand => { hand.addEventListener('click', handSelection) })
document.querySelector('.start').addEventListener('click', startGame);
