// Primitive Data Types
//Numbers
// Numbers can be whole inegers or decimals
1;
3.14;

// Numbers have operators for arithmetic
// console.log(1 + 1);
// console.log(10 - 1);
// console.log(10 * 10);
// console.log(2 ** 4);
// console.log(10 / 2);
// console.log(11 % 2); //Modulus or Remainder operator

// let i = 1;
// console.log(i++); // Increment +1
// console.log(i);
// console.log(i--); // Decrement -1
// console.log(i);
// console.log((i += 10));
// console.log((i -= 5));

//Strings
//Strings can use '', "", or `` (template literals)
// let name = "Rose";
// let greeting = `Hello ${name}, it's nice to meet you!`;
// console.log(greeting);

// let math = `One and One is ${1 + 1}`;
// console.log(math);

// //Escape characters
// console.log("'Hello'");
// console.log('"World"');
// // \" \'
// console.log('""');

// Your turn: Write a template literal mad lib!
// Create variables: name, noun, adjective, and object
// Then create a template literal and print the sentence
// Example: `[Name] accidentally turned the [noun] into a [adjective] [object]!`
let Name =`Someone`;
let noun = `thing`;
let adjective = `different`;
let object = `thing`;
let madLib = `${Name} accidentally turned the ${noun} into a ${adjective} ${object}!`;
console.log(madLib);

// Your turn: Write a function that converts human years to dog years
// dog years are 7 for every 1 human year

let convertYears = (num) => num * 7;
let years = Math.floor(Math.random() * 10) + 1
console.log(`${years} years in dog years is ${convertYears(years)}`)

// Your Turn: Write a function that determines if a number is odd or even
// It should take a number as a parameter and return "ODD" or "EVEN"
let oddOrEven = (num) => (num % 2 == 0) ? "EVEN" : "ODD";
for (let i = 0; i < 5; i++) {
    console.log(`${i} is ${oddOrEven(i)}`)
}

//Your Turn:
// Write a function that simulates rolling a dice.
// The function should take the number of sides as a parameter and return a random number between 1 and that number.
let roll = (sides) => Math.floor(Math.random() * sides) + 1;
console.log("Random numbers:")
for (let i = 0; i < 5; i++) {
    console.log(roll(6));
}