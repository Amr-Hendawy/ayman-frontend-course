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
// getYears(10, 20);
// let person1 = "Ahmed";
// let person2 = "Mohamed";
// let person3 = "Ali";
// let person4 = "Samy";
// let person5 = "Sameh";

// let age1 = 20;
// let age2 = 30;
// let age3 = 40;
// let age4 = 22;
// let age5 = 34;

// function teacherData(name, age) {
//   return `His name is ${name} and age is ${age}`;
// }

// let person1 = teacherData("Ahmed", 15);
// let person2 = teacherData("Mohamed", 15);
// let person3 = teacherData("Ali", 15);
// let person4 = teacherData("Ali", 15);
// let person5 = teacherData("Sameh", 15);
