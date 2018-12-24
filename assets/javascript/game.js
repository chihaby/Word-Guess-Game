// alert('press any OK to start');
// declaring counters and variables
var wins = '0';
var remaining = 0;
var guessed = 0;

var game = {
  singerA : 'queen',
  singerB : 'clapton',
  singerC : 'hendrix',
  key : userInput()
}

spltA = game.singerA.split('');
spltB = game.singerB.split('');
spltC = game.singerC.split('');

hiddenA = game.singerA.replace(/[a-zA-Z]/g, '-');
hiddenB = game.singerB.replace(/[a-zA-Z]/g, '-');
hiddenC = game.singerC.replace(/[a-zA-Z]/g, '-');

function userInput() {
    document.addEventListener('keydown', function(){
        spltA.forEach(letter => {
           if (event.key.toLowerCase() === letter){
            wins++; remaining++; guessed++;
            console.log(`TEST PASSED ===> Wins: ${wins} Remaining: ${remaining} Guessed: ${guessed}`);
          }  
        })
    });
}








