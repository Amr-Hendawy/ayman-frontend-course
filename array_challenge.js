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

////////////////////////////////////////////////////////////////

//التكليف 05

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
console.log(haystack.includes(needle));
console.log(haystack.indexOf(needle));
console.log(haystack.lastIndexOf(needle));

haystack.includes(needle) == true
  ? console.log("Found")
  : console.log("Not Found");

haystack.indexOf(needle) == true
  ? console.log("Found")
  : console.log("Not Found");

haystack.lastIndexOf(needle) == true
  ? console.log("Found")
  : console.log("Not Found");

///////////////////

//التكليف 06

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

index = arr2.length; //4

console.log(
  `${allArrs.concat(arr1, arr2).sort().slice(index).join("")}`.toLowerCase(),
); // fxy
