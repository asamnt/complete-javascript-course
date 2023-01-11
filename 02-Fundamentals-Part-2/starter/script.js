//Functions

//this is function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age = calcAge1(1991);
console.log(age);

//the below is an expression way of  declaring function
//and expressions produce values
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);

//we can call function declaration before defining them
//but we cannot call function expression before initialization
//because of process called hoisting

//Arrow Functions

//simplest form
const calcAge3 = (birthYear) => 2037 - birthYear;
//return happens implicitly

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  return `${firstName} retires in ${65 - age} years`;
};

const years = yearsUntilRetirement(1991, "Jonas");
console.log(years);

//arrow functions do not get a this keyword

//calling functions from other functions

const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = (apples, oranges) => {
  const cutApples = cutPieces(apples);
  const cutOranges = cutPieces(oranges);

  const juice = `Juice with ${cutApples} pieces of Apple and ${cutOranges} pieces of orange`;
  return juice;
};

console.log(fruitProcessor(6, 8));
