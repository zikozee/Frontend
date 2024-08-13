
// GUESSING GAME
//===========================

let maximum = parseInt(prompt("Enter the maximum number"));

while(!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));
}

const target  = Math.floor(Math.random() * maximum) + 1;

console.log(target);

let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== maximum) {

    if(guess === `q`) break;

    guess = parseInt(guess);

    if(guess > target){
        guess = prompt("Too high! Enter a new guess:");
        attempts++;
    }else if(guess < target) {
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    }
    // else {
    //     guess = prompt("Invalid guess. Enter a number or `q` to quit");
    // }
}

if(guess === `q`)  console.log("OK, quitting ...");
else console.log(`YOU GOT IT! it took you ${attempts}`);