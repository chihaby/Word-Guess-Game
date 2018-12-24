// alert('press any OK to start');
// declaring counters and variables
var wins = '0';
var remaining = 0;
var guessed = 0;


var singerA = 'queen';
var singerB = 'clapton';
var singerC = 'hendrix';

var splA = singerA.split('');
var splB = singerB.split('');
var splC = singerC.split('');

var hiddenA = singerA.replace(/[a-zA-Z]/g, '-');
var hiddenB = singerB.replace(/[a-zA-Z]/g, '-');
var hiddenC = singerC.replace(/[a-zA-Z]/g, '-');

// declaring object literal titled "game" that will hold all propreties, values and methods. 
var game = {
    key : userInput()
}

// function userInput checks user input for corresponding letters
function userInput() {
    document.addEventListener('keydown', function(){
        // for (var i=0; splA.length; i++){
          if (event.key.toLowerCase() === 'q'){
            wins++; remaining++; guessed++;
            console.log('test passed');
            console.log(`Wins: ${wins} Remaining: ${remaining} Guessed: ${guessed}`);
          }  
        // }
    });
}
userInput();



















// console.log(splA[0]);
// console.log(splB);
// console.log(splC);
// console.log(hiddenA);
// console.log(hiddenB);
// console.log(hiddenC);


