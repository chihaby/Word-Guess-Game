

var game = {
  singers : ['queen', 'clapton', 'hendrix', 'santana'],
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

var rand = game.singers[Math.floor(Math.random() * game.singers.length)];
var hide = rand.replace(/[a-zA-Z]/g, '-');
var displayHide = document.getElementById("correctBox").innerHTML = hide;
var x = document.getElementById("userInput");
var enter = x.addEventListener("keyup", function(event) {
              event.preventDefault();
              if (event.keyCode === 13) {
                document.getElementById("userButton").click();
                x.value = "";
               }
            });
var click = $( "#userButton" ).click(function() {
            x.value = "";
            });

displayHide;
enter;
click;

function main() {
  if (rand.includes(x.value)){
    game.wins; game.remaining; game.correctGuess += x.value; game.goodSound.play();
    document.getElementById("correctBox").innerHTML = hide + game.correctGuess;
    console.log (`PASSED ===> Wins: ${game.wins}   Remaining: ${game.remaining}   Correct Guesses: ${game.correctGuess}`);
  }  
  if(rand === game.correctGuess){
    game.wins++;  game.remaining; game.correctGuess += x.value; game.winSound.play();
    document.getElementById("won").innerHTML = "CONGRATUALTIONS YOU WON!!! ";
    console.log (`YOU WON!! ===> Wins: ${game.wins} `);
  }
  if (!rand.includes(x.value)){
    game.wins; game.remaining--; game.wrongGuess += x.value; game.badSound.play();
    document.getElementById("wrongBox").innerHTML = game.wrongGuess + ' ' + game.remaining + ' ' + 'chances remaining ';
    console.log (`- NOT - PASSED ===> Wins: ${game.wins}   Remaining: ${game.remaining}   Guessed Wrong: ${game.wrongGuess} `);
  } 
  if (game.remaining === 0){
    game.loseSound.play();
    document.getElementById("revel").innerHTML = "Game Over <br> The correct word is: " + rand + "<br> click below to play again";
  } 
  return;
} 














// hiddenA = game.singerA.replace(/[a-zA-Z]/g, '-');
// hiddenB = game.singerB.replace(/[a-zA-Z]/g, '-');
// hiddenC = game.singerC.replace(/[a-zA-Z]/g, '-');
