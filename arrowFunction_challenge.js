/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...name) {
//   // Parameter ?
//   names = name;
//   return name;
// };

// console.log(names("String [Osama], [Mohamed], [Ali], [Ibrahim] => Done!"));

let names = (...name) => {
  // Parameter ?
  names = name;
  return name;
};

console.log(names("String [Osama], [Mohamed], [Ali], [Ibrahim] => Done!"));

// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => {
//   myNumbers = 20;
//   return one + two + myNumbers;
// };

function calc(one, two, ...nums) {
  myNumbers = 20;
  return one + two + myNumbers;
}

console.log(calc(10, 50, 20)); // 80

// Assignment no. 4 :

function specialMix(...data) {
  // Your Code Here
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      return data[0] + data[1] + data[2];
    } else if (typeof data[i] === "string") {
      let num = data.slice(0);
      let result = num.split(data <= [0 - 20]);
      console.log(result);
    }
    return specialMix();
  }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
