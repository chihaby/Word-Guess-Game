// declaring counters
var wins = '0';
var remaining = 0;
var guessed = 0;
var singersArr = ['madonna', 'prince', 'michael'];

function singers(){
    singersArr.forEach(function(singer){
        console.log(singer.split(''));
    })
}

singers(1);
// var hidden0 = singers.replace(/^[a-zA-Z]+$/g , '-');

// alert('press any OK to start');

// declaring object literal titled "game" that will hold all propreties, values and methods. 
var game = {
    key : userInput()
}

// function userInput checks user input for corresponding letters
function userInput() {
    document.addEventListener('keydown', function(){
        if (event.key.toLowerCase() === 'q'){
            wins++; remaining++; guessed++;
            console.log('test passed');
            console.log(`Wins: ${wins} Remaining: ${remaining} Guessed: ${guessed}`);
        }
    });
}



