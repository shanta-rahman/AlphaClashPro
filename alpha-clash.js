// function play()
// {
//     //hide the home scren
// //Sep 1: hide the home screen. to hide the screen add the class hiden to the home screen

// const homeSection = document.getElementById('home-screen');
// // console.log(homeSection.classList);
// homeSection.classList.add('hidden');
//     //show the playground
//     const playgroundSection = document.getElementById('play-ground')
//   playgroundSection.classList.remove('hidden');
// }


function handleKeyboardButtonPress(event){
    const playerPressed = event.key;

 console.log('player pressed' , playerPressed);

//  get the expected to press

 const currentAlphabateElement = document.getElementById('current-alphabate');

const currentAlphabate = currentAlphabateElement.innerText;
const expectedAlphabate = currentAlphabate.toLowerCase();
console.log(playerPressed,expectedAlphabate);


//Check matched or not 

if(playerPressed==expectedAlphabate)
{
    console.log('You got a point');
    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score',updatedScore);
//----------------------------------------------------------------------------    
// Update score
   // 1. get the current score

//    const currentScoreElement= document.getElementById('current-score');
//    const currentScoreText = currentScoreElement.innerText;
//    const currentScore = parseInt(currentScoreText);
//    console.log(currentScore);
// const currentScore = getTextElementValueById('current-score');

   // 2. increase the score by 1
// const newScore = currentScore + 1;

//    // 3. show the updated score
// currentScoreElement.innerText = newScore;

//     // start a new round
    removeBackgroundColorById(expectedAlphabate);
    continueGame();
}
else
{
    console.log ('you missed ,you lost a lifes');

    const currentLife=getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life' , updatedLife);

    //-----------------------------------------------------

// //step 1 : get the current Life number
// const currentLifeElement = document.getElementById('current-life')
// const currentLifeText = currentLifeElement.innerText;
// const currentLife = parseInt(currentLifeText);

// //atep 2: reduce the life count
// const newLife = currentLife - 1 ;


// //step 3 : display the updated life count
// currentLifeElement.innerText=newLife;

}
}

// Capyured keyboard key press

document.addEventListener('keyup' , handleKeyboardButtonPress )


function continueGame()
{
//Step 1: generate a random Alphabate
const alphabate = getARandomAlphabate();
console.log('Your random Alphabate',alphabate);

//set randomly generated alphabate to the screen

const currentAlphabateElement = document.getElementById('current-alphabate');
currentAlphabateElement.innerText = alphabate;

//Set BackgroundColor

setBackgroundColorById(alphabate); 

}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}

