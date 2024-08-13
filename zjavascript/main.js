let year = 1985;
let numHens = 5;
let numRoosters = 1;

let totalChickens = numHens + numRoosters;

console.log(year)
console.log(year, totalChickens)

// const vs var
// const used for variables that does not change :: like final in java
// if you need a variable that changes use 'let'
console.log(typeof true)

// > greater than
console.log("greater than: ", 1 >3)
console.log("greater than: ", '@' > 'A')
// < lesser than
console.log("lesser than: ", 1 >3)
// >= greater than or equal to
console.log("greater than or equal to: ", 14 >= 14)

// <= lesser than or equal to

// == equality   :::does not care about data type
console.log(" EQUALITY ")
console.log(5 == 5, 'b' == 'c', 7 == '7')
console.log(0 == '', true == 'b', null == undefined)
// != not equal

// === strictly equality ::: considers type
console.log(" STRICT-EQUALITY ")
console.log(1 === '1', 1 ===1 )

// !== strictly non-equality



                    //  CONSOLE, ALERT, PROMPT
console.warn(" Strict Warning!!")
console.error("server error")

// alert('Hi there');

let userInput = prompt("Enter a number:")
parseInt(userInput) + 15;


