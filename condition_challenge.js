// //Assignment no. 2 from lessons from 33 to 37
// let num1 = 9;
// let str = "9";
// let str2 = "20";
// // Output
// (" [num1) Is The Same Value As (str)");
// (" [num1) Is The Same Value As (str) But Not. The Same Type");
// ("(num1) Is Not The Same Value Or The Sane Type As (str2)");
// ("[str) Is The Same Type As (str2) But Not The Same Value");
// let result =
//   num1 == str
//     ? "(num1) Is The Same Value As (str)"
//     : "(num1) Is Not The Same Value As (str)";
// console.log(result);
// let result1 =
//   num1 !== str
//     ? "(num1) Is The Same Value As (str) But Not The Same Type"
//     : "(num1) Is Not The Same Value As (str) But Not The Sane Type";
// console.log(result1);
// let result2 =
//   num1 != str2
//     ? "(num1) Is Not The Same Value Or The Sone Type As (str2)"
//     : "(num1) Is The Same Value and The Same Type As (str2)";
// console.log(result2);
// let result3 =
//   str !== str2
//     ? "(str) Is The Same Type As (str2) But Not The Same Value"
//     : "(str} Is Not The Same Type As (str2) But The Same Value";
// console.log(result3);

// console.log(num1 == str);
// console.log(num1 !== str);
// console.log(num1 != str2);
// console.log(str !== str2);

////////////////////////////////////////////////////////////////

// Assignment no. 3 from lessons from 33 to 37

// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// // Needed Output
// ("30 Is Larger Than 10 And Type string Not The Same Type As number");
// ("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
// ("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

// if (num3 > num1 && typeof num3 !== typeof num2) {
//   console.log(
//     `${num3} Is Larger Than ${num1} And Type ${typeof num3} Not The Same Type As ${typeof num2}`,
//   );
// } else if (num3 > num1 && num3 == num2 && typeof num3 !== typeof num2) {
//   console.log(
//     `${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type ${typeof num3} Not The Same Type ${typeof num2}`,
//   );
// } else if (num3 !== num1 && typeof num3 !== typeof num2) {
//   console.log(
//     `${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`,
//   );
// }

// console.log(num3 > num1 && typeof num3 !== typeof num2);
// console.log(num3 > num1 && num3 == num2 && num3 !== num2);
// console.log(num3 !== num1 && typeof num3 !== typeof num2);

/////////////////////////////////////////////////////////////

// Assignment no. 1 from lessons from 38 to 39 (I can not solve it, he gave so many variables)

let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
let result = day.trim();
result = result.charAt(0).toUpperCase() + day.trim().substring(1);
console.log(result);

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"

switch (result) {
  case 1:
    day = result || "Saturday" || "Sunday";
    console.log("No Appointments Available");
    break;
  case 2:
    day = "Monday" || "Thursday";
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case 3:
    day = "Tuesday";
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case 4:
    day = "Wednesday";
    console.log("From 10:00 AM To 7:00 PM");
  default:
    console.log("Its Not A Valid Day");
}
