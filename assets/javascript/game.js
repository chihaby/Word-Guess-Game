// declaring counters
var wins = 0;
var remaining = 0;
var gussed = 0;

// declaring object literal titled "game" that will hold all propreties, values and methods. 
var game = {
    key : userInput()
}

// function userInput checks user input for corresponding letters
function userInput() {
    document.addEventListener('keydown', function(){
        if (event.key === 'q'){
            console.log('test passed')
        }
    });
}

game.key;