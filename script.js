//Guess a number game

window.addEventListener('load', () => {
    //Alert to tell user rules of the game
    alert(`After clicking "OK", You will get an input box to put in your maximum guess number. Fill it with a valid number and hit "Okay"`)
    //Prompt Users to select guess range
    let userGuess = prompt('What range of number do you want to guess from 1 - ??')
    userGuessRange = Number(userGuess)
    console.log(userGuessRange)
    console.log(typeof userGuessRange)
    //Prompt Users to input total number of trials
    let totalNumberOfTrials = prompt('How many trials do you want?')
    totalNumberOfTrials = Number(totalNumberOfTrials)
    console.log(totalNumberOfTrials)
})

const guessNumber = document.querySelector('#guess')
const hint = document.querySelector('#hint')
const button = document.querySelector('#guessButton')
const numberOfHint = document.querySelector('#noOfHint')
const trialsLeft = document.querySelector('#noOfTrialsUsed')


let randomNumber = Math.round((Math.random() * 9) + 1)
let trials = 0
let totalTrials = 10
trialsLeft.innerHTML = `Trials Left ${totalTrials}`
numberOfHint.innerHTML = `Trials: ${trials}`
console.log(randomNumber)

function GuessGame () {
    if (guessNumber.value > 10){
        hint.innerHTML = `Hint: Your Guess is less than 10`
    }
    if (guessNumber.value.length >= 1 && guessNumber.value <= 10) {
        trials++
        numberOfHint.innerHTML = `Trials: ${trials}`
        totalTrials--
        trialsLeft.innerHTML = `Trials Left ${totalTrials}`
        if(guessNumber.value > randomNumber) {
            hint.innerHTML = `Hint: Guess Lower`
        }
        if(guessNumber.value < randomNumber) {
            hint.innerHTML = `Hint: Guess Higher`
        }
        if(guessNumber.value == randomNumber){
            alert(`Correct! You got this in ${trials} tries`)
        }
        if(trials == 10){
            alert(`You have used up all trials. My Guess was ${randomNumber}`)
        }
    }
}

button.addEventListener('click', GuessGame);

