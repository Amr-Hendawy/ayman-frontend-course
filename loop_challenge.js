/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
  "Sameer",
];
let counter = 0;
for (i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  counter++;
}
document.write(`<div>We Have ${counter} Admins</div>`);

document.write(`<hr>`);

for (let i = 0; i < myAdmins.length; i++) {
  let admin = myAdmins[i];
  let adminLetter = admin[0].toUpperCase();
  let teamNumber = i + 1;
  if (myAdmins[i] === "Stop") {
    break;
  }
  3;
  document.write(`<div>The Admin For Team ${teamNumber} Is ${admin}</div>`);
  document.write(`<div><b>Team Members:</b></div>`);

  let count = 0;

  for (let j = 0; j < myEmployees.length; j++) {
    let employee = myEmployees[j];
    let empLetter = employee[0].toUpperCase();
    if (empLetter === adminLetter) {
      count++;
      document.write(`<div>-${count} ${employee}</div>`);
    }
  }
  document.write(`<hr>`);
}
