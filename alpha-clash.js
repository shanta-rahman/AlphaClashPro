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


function handleKeyboardButtonPress(){
    console.log('button pressed');
}

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

