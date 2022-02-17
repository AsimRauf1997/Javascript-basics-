let swap1 = prompt("enter new number");
let swap2 = prompt("Enter new number agin");
let temp;
temp = swap1;
swap1 = swap2;
swap2 = temp;

console.log(`number exchanged ${swap1}`);
console.log(`number exchanged ${swap2}`);

let a = prompt("Enter the first variable: ");
let b = prompt("Enter the second variable: ");
[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

const genArray = [10, 100, 5, 6, 1, 200, 1000];
const max = Math.max(...genArray);
const min = Math.min(...genArray);
console.log(`Maximum: ${max}`, `Minimum: ${min}`);
let num = parseInt(prompt("Enter Number For Table"));

for (let i = 1; i <= 10; i++) {
  let result = i * num;
  console.log(`${result} = ${i} * ${num}`);
}
const number = [2, 4, 6, 7, 9, 11];
const even = number.filter((arr) => arr % 2 === 0);
console.log(even);
const odd = number.filter((arr) => arr % 2 !== 0);
console.log(odd);

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
