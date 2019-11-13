//variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const startUp = document.getElementById('overlay');
let ul = document.querySelector('#phrase ul');
const keyboard = document.querySelector('#qwerty');

let missed = 0;

//listen for the start game button to be pressed
startButton.addEventListener('click', () => {
        startUp.style.display = 'none';

});

//creating an array with 5 phrases for the game
let phrases = ['Stitch in time saves nine',
              'Neck and neck',
              'Early bird gets the worm',
              'Kill two birds with the one stone',
              'Thats the pot calling the kettle black'];

//create a randomArray function to pick one phrase for the game
function getRandomPhraseAsArray () {
    const oddPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        return oddPhrase.split('');
    
    }
//call the function    
const phraseArray = getRandomPhraseAsArray(phrases);

//add the letters of a string to the display
function addPhraseToDisplay(oddPhrase) {
    for(let i =0; i <oddPhrase.length; i++){
        let li = document.createElement('li');
        li.textContent = oddPhrase[i];
        ul.appendChild(li);

        if(li.textContent !== " "){
            li.className = 'letter';
          

        }else {
          li.className = 'space';  
        }
       
    }
}
//call the function
addPhraseToDisplay(phraseArray); 

//check if a letter is in the phrase
function checkLetter (button) {

    let letter = document.querySelectorAll('.letter');

    //create a variable to hold a letter if it matches
    let correct = null;

    letter.forEach(letter => {
        if(button === letter.textContent.toLowerCase()){
            letter.classList.add('show');
            correct = true;
        }
    });
    return correct;
};
//listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {
    if(event.target.tagName === 'BUTTON'){
        e.target.disabled = true;
        e.target.classList.add('chosen');
        
    
        let guess = checkLetter(e.target.textContent.toLowerCase());
       
        //use an if statement to decrease the guesses
        if(!guess){
            missed ++;
            let img = document.querySelectorAll("img");
            img[missed - 1].src="images/lostHeart.png";
            
        }
    }   
    //call the function
    checkWin();
});
//create a reset function that can be called in the checkWin() function
function reset(){
    let resetBtn = document.createElement('a');
    resetBtn.className ='btn__reset';
    startUp.appendChild(resetBtn);
    resetBtn.textContent = "Play again";

    resetBtn.addEventListener('click', () => {
    window.location.reload(true);
    });
}

//check to see if the user has won or lost
function checkWin () {
    let correctLetter = document.querySelectorAll('.show');
    let reveal = document.querySelectorAll('.letter');

    if(correctLetter.length === reveal.length){
        startUp.className = 'win';
        startUp.style.display = 'flex';
        startUp.innerHTML ='<h1>You have Won!!!</h1>';
        //call the reset button
        reset();
    
    }
    else if(missed >=5){
       startUp.className ='lose';
       startUp.style.display ="flex";
       startUp.innerHTML ='<h1>You have lost...</h1>';
       //call the reset button 
       reset();
    

    }
  }  
  const gameReset =() =>{
        
    }
