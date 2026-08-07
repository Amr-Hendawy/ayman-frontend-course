// for (start condition steps) {
// chunck of code
// you stuff
// piece of code
// }

// for (let i = 0; i > -10; i--) {
//   console.log(i);
// }

// let myPals = ["Ahmed", 2, "Ali", 1, "Osama", 5, 6, 11, "Marzok"];

// let onlyNames = [];
// let onlyNumbers = [];

// for (let i = 0; i < myPals.length; i++) {
//   if (typeof myPals[i] === "string") {
//     onlyNames.push(myPals[i]);
//   }
// }
// console.log(onlyNames);

// for (let i = 0; i < myPals.length; i++) {
//   if (typeof myPals[i] === "number") {
//     onlyNumbers.push(myPals[i]);
//   }
// }
// console.log(onlyNumbers);

// let colors = ["red", "green", "blue"];
// let models = [2021, 2026];

// for (let i = 0; i < items.length; i++) {
//   console.log("*".repeat(25));
//   console.log(`==> ${items[i]}`);
//   console.log("*".repeat(25));
//   for (let j = 0; j < colors.length; j++) {
//     console.log(`=> ${colors[j]}`);
//   }
//   for (let k = 0; k < models.length; k++) {
//     console.log(`> ${models[k]}`);
//   }
// }

// mainLoop: for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     break; // Skips the rest of the loop for i = 3
//   }
//   console.log(i);
// }

// for (let i = 0; i > items.length; i++) {
//   //   console.log(`==> ${items[i]}`);
//   console.log(`Hello`);
// }
let items = ["Socks", "Shoes", "Slippers", "Trousers"];

let i = 0;

// while (i < items.length) {
//   console.log(items[i]);
//   i++;
// }

do {
  console.log(i);
  i++;
} while (false);

console.log(i);
