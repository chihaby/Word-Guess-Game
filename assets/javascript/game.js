

var game = {
  singerA : 'queen',
  singerB : 'clapton',
  singerC : 'hendrix',
  wins : 0,
  remaining : 5,
  correctGuess: '',
  wrongGuess : '',
  goodSound: new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3"),
  badSound: new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3"),
  winSound: new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3"),
  loseSound: new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3"),
  // init : main()
}

var splitA = game.singerA.split('');
var splitB = game.singerB.split('');
var splitC = game.singerC.split('');

var x = document.getElementById("userInput");

  x.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
     document.getElementById("userButton").click();
      x.value = "";
    }
  });
  
  $( "#userButton" ).click(function() {
    x.value = "";
  });

function main() {
          if (splitA.includes(x.value)){
            game.wins; game.remaining; game.correctGuess += x.value; game.goodSound.play();
            document.getElementById("correctBox").innerHTML = game.correctGuess;
           console.log (`PASSED ===> Wins: ${game.wins}   Remaining: ${game.remaining}   Correct Guesses: ${game.correctGuess}`);
          }  
          if (!splitA.includes(x.value)){
            game.wins; game.remaining--; game.wrongGuess += x.value; game.badSound.play();
            document.getElementById("wrongBox").innerHTML = game.wrongGuess;
           console.log (`- NOT - PASSED ===> Wins: ${game.wins}   Remaining: ${game.remaining}   Guessed Wrong: ${game.wrongGuess} `);
          } 
          if (game.remaining === 0){
            game.loseSound.play();
            document.getElementById("revel").innerHTML = "Game Over <br> The correct word is: " + "Queen";
          }  
}














// hiddenA = game.singerA.replace(/[a-zA-Z]/g, '-');
// hiddenB = game.singerB.replace(/[a-zA-Z]/g, '-');
// hiddenC = game.singerC.replace(/[a-zA-Z]/g, '-');
