/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

(my.pop() + my.pop(), my.reverse());

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(length - counter, counter)); // ["Elham", "Mazero"]

my.shift() + my.pop();

let index = counter % my.length; // 3 % 2 = 1
result = counter + my.length; //5
result1 = result - index; //4
result2 = counter; //3
result3 = my.length; //2

console.log(
  `${my[zero][zero]}${my[zero][index]}${my[index][result3]}${my[index][result2]}${my[index][result1]}${my[index][result]}`,
); // "Elzero"

console.log(`${my[index][result1]}${my[index][result].toUpperCase()}`); // "rO"
