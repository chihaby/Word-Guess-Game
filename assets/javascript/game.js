

var game = {
  singerA : 'queen',
  singerB : 'clapton',
  singerC : 'hendrix',
  wins : 0,
  remaining : 4,
  correctGuess: '',
  wrongGuess : '',
  goodSound: new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3"),
  badSound: new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3"),
  winSound: new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3"),
  loseSound: new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3"),
  init : main()
}

var splitA = game.singerA.split('');
var splitB = game.singerB.split('');
var splitC = game.singerC.split('');

var userInput = $(".guessLetter").value;

function main() {
    document.addEventListener('keydown', function(){
          if (splitA.includes(userInput)){
            game.wins; game.remaining; game.correctGuess += event.key; game.goodSound.play();
           console.log (`TEST PASSED ===> Wins: ${game.wins}   Remaining: ${game.remaining}   Correct Guesses: ${game.correctGuess}`);
          }  
          if (!splitA.includes(event.key.toLowerCase())){
            game.wins; game.remaining--; game.wrongGuess += event.key; game.badSound.play();
           console.log (`TEST NOT PASSED ===> Wins: ${game.wins}   Remaining: ${game.remaining}   Guessed Wrong: ${game.wrongGuess} `);
          } 
          if (game.remaining === 0){
            game.loseSound.play();
            console.log(' Game Over - reload page and try again')
          }        
    });
}














// hiddenA = game.singerA.replace(/[a-zA-Z]/g, '-');
// hiddenB = game.singerB.replace(/[a-zA-Z]/g, '-');
// hiddenC = game.singerC.replace(/[a-zA-Z]/g, '-');
