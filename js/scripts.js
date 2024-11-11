const rootStyles = document.documentElement.style;
const ownScoreElement = document.getElementById('own-score');
const houseScoreElement = document.getElementById('house-score');
const allButtonsElement = document.getElementById('buttons');
const buttonPaperElement = document.getElementById('button-paper');
const buttonScissorsElement = document.getElementById('button-scissors');
const buttonRockElement = document.getElementById('button-rock');
const resultDivElement = document.getElementById('resultdiv')
const ownSelectionElement = document.getElementById('own-selection');
const houseSelectionElement = document.getElementById('house-selection');
const winOrLooseTextElement = document.getElementById('win-or-loose');
const playAgainElement = document.getElementById('play-again');
const showRulesElement = document.getElementById('show-rules');
const hideRulesElement = document.getElementById('hide-rules');
const rulesElement = document.getElementById('modal-simple');
const houseChoiceSimpleElement = ['paper', 'rock', 'scissors'];
const houseChoiceAdvancedElement = ['paper', 'rock', 'scissors', 'lizard', 'spock'];
const rules = {
    scissors: {
        paper: true,
        lizard: true,
        rock: false,
        spock: false,
        },
    rock: {
        scissors: true,
        lizard: true,
        paper: false,
        spock: false,
        },
    paper: {
        rock: true,
        spock: true,
        scissors: false,
        lizard: false,
        },
    lizard: {
        spock: true,
        papel: true,
        rock: false,
        scissors: false,
        },
    spock: {
        scissors: true,
        rock: true,
        lizard: false,
        paper: false,
        }
}

/*simple*/

let ownScore = 0;
let houseScore = 0;
const addChoiceClasses = event => {
    const classButton = event.target.classList[0];
    const classButtonChoice = event.target.classList[1];
    const randomChoiceSimple = Math.floor(Math.random() * houseChoiceSimpleElement.length);
    const houseChoice = houseChoiceSimpleElement[randomChoiceSimple];
    allButtonsElement.classList.add('hidediv');
    ownSelectionElement.classList.remove('empty-result');
    ownSelectionElement.classList.add(classButtonChoice, classButton);
    houseSelectionElement.classList.remove('empty-result');
    houseSelectionElement.classList.add('button', houseChoice)
    resultDivElement.classList.remove('hidediv');
    if (rules[event.target.classList[1]][houseChoice] === true) {
        winOrLooseTextElement.textContent = 'YOU WIN'
        ownScore += 1;
    } else if (rules[event.target.classList[1]][houseChoice] === false) {
        winOrLooseTextElement.textContent = 'YOU LOSE'
        houseScore += 1;
    } else {
        winOrLooseTextElement.textContent = 'TIE'
    }
    ownScoreElement.textContent = ownScore;
    houseScoreElement.textContent = houseScore;
}
allButtonsElement.addEventListener('click', addChoiceClasses)

/*avanzado*/

let ownScoreAdvanced = 0;
let houseScoreAdvanced = 0;
const addChoiceClassesAdvanced = event => {
    const classButton = event.target.classList[0];
    const classButtonChoice = event.target.classList[1];
    const randomChoiceAdvanced = Math.floor(Math.random() * houseChoiceAdvancedElement.length);
    const houseChoiceAdvanced = houseChoiceAdvancedElement[randomChoiceAdvanced];
    allButtonsElement.classList.add('hidediv');
    ownSelectionElement.classList.remove('empty-result');
    ownSelectionElement.classList.add(classButtonChoice, classButton);
    houseSelectionElement.classList.remove('empty-result');
    houseSelectionElement.classList.add('button', houseChoiceAdvanced)
    resultDivElement.classList.remove('hidediv');
    if (rules[event.target.classList[1]][houseChoiceAdvanced] === true) {
        winOrLooseTextElement.textContent = 'YOU WIN'
        ownScoreAdvanced += 1;
    } else if (rules[event.target.classList[1]][houseChoiceAdvanced] === false) {
        winOrLooseTextElement.textContent = 'YOU LOSE'
        houseScoreAdvanced += 1;
    } else {
        winOrLooseTextElement.textContent = 'TIE'
    }
    ownScoreElement.textContent = ownScoreAdvanced;
    houseScoreElement.textContent = houseScoreAdvanced;
}
allButtonsElement.addEventListener('click', addChoiceClassesAdvanced)

const restart = event => {
    ownSelectionElement.classList.remove(ownSelectionElement.classList[0], ownSelectionElement.classList[1]);
    ownSelectionElement.classList.add('empty-result')
    houseSelectionElement.classList.remove(houseSelectionElement.classList[0], houseSelectionElement.classList[1]);
    houseSelectionElement.classList.add('empty-result')
    allButtonsElement.classList.remove('hidediv')
    resultDivElement.classList.add('hidediv')
}
playAgainElement.addEventListener('click', restart)

const openRules = () => {
    rulesElement.classList.replace('hide', 'show');
}
showRulesElement.addEventListener('click', openRules);

const closeRules = () => {
    rulesElement.classList.replace('show', 'hide');
}
hideRulesElement.addEventListener('click', closeRules);
