// swapping two numbers using temp variable
// let a = prompt("enter new number");
// let b = prompt("Enter new number agin");
// temp = a;
// a = b;
// b = temp;

// console.log(`number exchanged ${a}`);
// console.log(`number exchanged ${b}`);

//JavaScript program to swap two variables without Temp

// let a = prompt("Enter the first variable: ");
// let b = prompt("Enter the second variable: ");
// [a, b] = [b, a];

// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);

// Finding Max from an Array
// const array = [10,20,30,40];
// const filter = Math.max(...array);
// console.log(filter);

// Finding Minimum and Maximum from an array
const array = [10, 100, 5, 6, 1, 200, 1000];
const max = Math.max(...array);
const min = Math.min(...array);
console.log(`Maximum: ${max}`, `Minimum: ${min}`);
// Tabele Printing
let num = parseInt(prompt("Enter Number For Table"));

for (let i = 1; i <= 10; i++) {
  let result = i * num;
  console.log(`${result} = ${i} * ${num}`);
}
// even odd number
const number = [2, 4, 6, 7, 9, 11];
const even = number.filter((arr) => arr % 2 === 0);
console.log(even);
const odd = number.filter((arr) => arr % 2 !== 0);
console.log(odd);

// Star Printing
let n = 5; // row or column count
// defining an empty string
let string = "";

for (let i = 0; i < n; i++) {
  // external loop
  for (let j = 0; j < n; j++) {
    // internal loop
    string += "*";
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);
// Start Printing Pattern * ** *** **** ******
let l = 10; // row or column count
// defining an empty string
let strings = "";

for (let i = 0; i < l; i++) {
  // external loop
  for (let j = 0; j < i; j++) {
    // internal loop
    strings += "*";
  }
  // newline after each row
  strings += "\n";
}
// printing the string
console.log(strings);

// program to check if a number is prime or not
const primeNumber = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

if (primeNumber === 1) {
  console.log("1 is neither prime nor composite number.");
} else if (primeNumber > 1) {
  for (let i = 2; i < primeNumber; i++) {
    if (primeNumber % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${primeNumber} is a prime number ${isPrime}`);
  } else {
    console.log(`${primeNumber} is a not prime number ${isPrime}`);
  }
} else {
  console.log("The number is not a prime number.");
}
const strArray = "I am not going to help you";
const arr = strArray.split(" ");
const arrs = arr.join(" ");
console.log("array:", arr);
console.log("array:", arrs);

const sum = (a, b) => a + b;
console.log(sum(2, 3));
