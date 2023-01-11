// let js = "amazing";
// if (js === "amazing") alert("javascript is fun");
// console.log(40 + 8);
// console.log("Jonas");
// console.log(23);

// let firstName = "Matila";
// console.log(firstName);

// let 3 years = 3
//we cannot write variable names starting with number
//do not start with upper case letter - just convention - used for class names
//all caps letters reserved for constants
// let name = "Jonas"

// let PI = 3.14;

// let myFirstJob = "Programmerr";
// console.log(myFirstJob);

//javascript - every value is object or primitive
//Number - floating point numbers always 23 is 23.0
//String - sequence of chars -
//Boolean - true or false
//Undefined - value taken by variable that is not yet deinfed let variableName;
//Null
//Symbol
//BigInt - larger integers that Number cannot hold

//Javascript is dynamically types
//Value has a type not the variable

//Data Types
// console.log(true);

// let javascriptIsFun = true;
// console.log(typeof javascriptIsFun);

// let x = 10 + 5;
// x += 10;
// console.log(x);

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;

// console.log(BMIMark);
// console.log(BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

//Template Literals

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job;
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
// console.log(jonasNew);

// //we can use back ticks for regular strings as well like below
// console.log(`Just like a regular string`);

// //multiline string

// console.log(`String
// can be
// multine using
// template literals`);

// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense || hasGoodVision);

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// //we should always use strict operator

// if (age == 18) console.log("You just became an adult :D (loose)");
// //type coercion happens here

//Switch statements
const day = "tuesday";

switch (day) {
  case "monday":
    console.log("plan course structure");
    console.log("go to coding meet up");
    break;
  case "tuesday":
    console.log("prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code example");
    break;
  default:
    console.log("not a valid day");
}

//Ternary operator
//this is an expression, so can be used in template literal

const age = 15;
const drink = age >= 18 ? "wine" : "water";
console.log(drink);

//without ternary operator, we would need to declare the variable outside the if statement scope

let drink2;
if (age >= 18) {
  console.log(wine);
} else {
  console.log("water");
}

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
