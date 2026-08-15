// DRY ==> Don't Repeaty Yourself
// function sayHi(firstName, lastName) {
//   console.log(`Hi ${firstName} ${lastName}`);
// }

// sayHi("Amr", "Hendawy");
// sayHi("Ayman", "Mohamed");
// sayHi("Ibrahem", "Sayed");

// function sayHi(userName, age) {
//   if (age < 20) {
//     console.log(`App is not for this age`);
//   } else {
//     console.log(`Hello ${userName} your age is ${age}`);
//   }
// }

// sayHi("Ayman", 38);
// sayHi("Amr", 14);
// sayHi("Ali", 55);

// function getYears(start = "00", end = "00") {
//   //   for (let i = start; i <= end; i++) {
//   //     // if (i === exclude) continue;
//   //     if (i === 15) {
//   //       return console.log(`Stopping`);
//   //     }
//   //     console.log(i);
//   //   }
//   if (start === undefined) {
//     start = "00";
//   }
//   start = start || "00";

//   return ` {Start} is the start and ${end} is the end`;
// }

// console.log(getYears() === 5);

// let startVal = id,
//   endVal = 2026,
//   excludeVal = 2025,
//   endYearVal = 2020;
getYears(10, 20);
