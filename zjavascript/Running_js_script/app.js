console.log("HELLO FROM OUR FIRST JS FILE!!!")
console.log("GOOD BYE")

const age = 18
if(age >= 18) console.log("WELCOME")
else console.log("YOU ARE NOT ALLOWED")


age === 18 ? console.log("TERNARY: WELCOME") : console.log("TERNARY: YOU ARE NOT ALLOWED")

function verifyAge(age){
    switch(age){
        case 15: return "underage";
        case 18: return "right age";
        case 20: return "overage";
        default: return "i don't know";
    }
}

let switchNUmber = function getFee(age){
    if(age <5) {
        console.log("You are a Baby.");
        return "$0";
    } else if(age < 10) {
        console.log("You are a Child.");
        return "$10";
    } else if (age < 65) {
        console.log("You are an Adult");
        return "$20";
    } else{
        console.log("You are a senior. You get a discount")
        return "$10";
    }
}

console.log("SWITCH BABY", switchNUmber(3));






// Truthy and Falsy Values
// All JS values have an inherent truthyness or falsyness about them

// -  Falsy Values
// false
// 0
// "" (empty string)
// null
// undefined
// NaN

// Everything else is truthy
const userInput = 15// prompt("Please enter something");

console.log(userInput);
if (!userInput){
    console.log(typeof userInput);
    console.log("FALSY");
}else console.log("TRUTHY");



// ARRAYS
let arr1 = [2,3,4,5,6,7,8,9,10];

arr1.push(2);
console.log(arr1);

let arr2 =arr1.slice(7)
console.log(arr2);
let value = arr2[0];
arr2.pop()

console.log("arr1: ", arr1);
arr1.shift()
console.log("arr1: shift", arr1);
arr1.unshift(55);
console.log("arr1: ", arr1);


const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];

planets.shift();

planets.push('Saturn');

planets.unshift('Mercury');

let comparePlanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]

for (let i = 0; i < planets.length; i++) {
    console.log(comparePlanets[i] === planets[i]);
}

let cats = ["blue", "kitty"];
let dogs = ["whiskey", "tony"]

let combo = cats.concat(dogs);
console.log("combo_animal", combo);

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());


// Arrays + Const
// const can be used for an array
// since it references the shell and not the content
// so we can use the array functions aon it
// however, you can't reassign the variable

const nums = [1, 3, 5, 7];
nums.push(4);

// this will generate an error because you can't reassign
// nums = [3,4,5]


//Object Literals
// converts any key to a string
const pets = {
    boot: "dogs",
    mushu: "dragon",
    mulan: "girl",
    ab: 34759549,

}

const student = {
    name: "Johnson",
    age: 5,
    courses: [
        {physics: 69},
        {chemistry: 9},
        {biology: 15},
    ]
}


// // LOOP
// for (let i = 0; i < 6; i++) {
//     console.log("La di Da");
// }
//
// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }
//
// const animals2 = [ 'lions', 'tigers', 'bears']
//
// for (let i = 0; i < animals2.length; i++) {
//     console.log(i, animals2[i]);
// }
//
//
//
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!
//
// // WRITE YOUR LOOP BELOW THIS LINE:
//
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
// }
//
//
// for (let i = 0; i < 30; i++) {
//     console.log(`i is ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`j is ${j}`);
//     }
// }
//
// let num = 0;
//
// while (num  < 10) {
//     console.log(num);
//     num++;
// }
//
// const SECRET = "BabyHippo";
//
// let guess1 = 33//prompt("Please enter the secret code");
// while (guess1 !== SECRET) {
//     guess1 =33 //prompt("Please enter the secret code!!! again");
// }
//
// console.log("Hurray");
//
//
//             // BREAK
//
// for (let i = 0; i < 50; i++) {
//     if(i%2 === 0) {
//         console.log(1);
//         break;
//     }
// }


const subreddits = ["cringe", "books", "chickens", "funny", "pics", "soccer"];
for (const subreddit of subreddits) {
    console.log("subreddit", subreddit);
}

for(const char of "hello world"){
    console.log(char);
}

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91
}

for(const  person in testScores){
    console.log(`key: ${person}, value: ${testScores[person]}`);
}

for(const personScore of Object.values(testScores)){
    console.log(`personScore = ${personScore}`);
}

let sum = 0;
Object.values(testScores).forEach((value) => sum += value);
console.log(`sum ${sum}`);

// GET KEYS or VALUES
console.log(Object.keys(testScores));
console.log("===============================");
console.log(Object.values(testScores));
console.log("===============================");
console.log(Object.entries(testScores));

