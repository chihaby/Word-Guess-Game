

var game = {
  singers : ['bali', 'hawaii', 'santorini', 'malta', 'cyprus', 'capri', 'tahiti', ],
  wins : 0,
  losses: 0,
  remaining : 10,
  correctGuess: '',
  wrongGuess : '',
  goodSound: new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3"),
  badSound: new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3"),
  winSound: new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3"),
  loseSound: new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3"),
}

var rand = game.singers[Math.floor(Math.random() * game.singers.length)];
var randSpl = rand.split('');
var hide = rand.replace(/[a-zA-Z]/g, '_');
var hideSpl = hide.split('');
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
  if (randSpl.includes(x.value)){
    for(var i=0; i<rand.length; i++){  
      if (randSpl[i] === x.value){
        hideSpl[i] = hideSpl[i].replace('_', x.value);  
      }
    }
      game.correctGuess += x.value; game.goodSound.play();
      document.getElementById("correctBox").innerHTML = hideSpl.join("  ") ;
    }

  if(hideSpl.join('') === rand){
    game.wins++;  game.remaining; game.correctGuess += x.value; game.winSound.play();
    document.getElementById("won").innerHTML = "CONGRATUALTIONS YOU WON!!!  <br> Play Again? " ;
  }

  if (!rand.includes(x.value)){
    game.wins; game.remaining--; game.wrongGuess += x.value; game.badSound.play();
    document.getElementById("wrongBox").innerHTML = game.wrongGuess + '<br>' + game.remaining + ' ' + 'chances remaining ';
    console.log (`- NOT - PASSED ===> Wins: ${game.wins}   Remaining: ${game.remaining}   Guessed Wrong: ${game.wrongGuess} `);
  } 

  if (game.remaining === 0){
    game.losses++; game.loseSound.play();
    document.getElementById("revel").innerHTML = "Island name is: " + rand  + "<br> Play Again?";
  } 
} 

