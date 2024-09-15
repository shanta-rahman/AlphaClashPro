function hideElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element= document.getElementById(elementId);
    element.classList.remove('hidden');
}


function setBackgroundColorById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}

function removeBackgroundColorById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}


function getTextElementValueById(elementId)
{
    const element = document.getElementById(elementId);
    const elemenyValueText = element.innerText;
    const value = parseInt(elemenyValueText);
    return value;
}

function setTextElementValueById(elementId , value)
{
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getARandomAlphabate()
{//get or create an alphabet array
    const alphabatesString = 'abhdeuudkoenfuyeqwjvugerjcbyrvf' ;
    const alphabates = alphabatesString.split('');
    // console.log(alphabates);

    // get a random index between 0-25
const randomNumber = Math.random()*25;
const index = Math.round(randomNumber);
// console.log(index);
const alphabate = alphabates[index];
console.log(index , alphabate);
return alphabate;
}