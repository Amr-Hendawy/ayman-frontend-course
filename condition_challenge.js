let num1 = 9;
let str = "9";
let str2 = "20";
// Output
(" [num1) Is The Same Value As (str)");
(" [num1) Is The Same Value As (str) But Not. The Same Type");
("(num1) Is Not The Same Value Or The Sane Type As (str2)");
("[str) Is The Same Type As (str2) But Not The Same Value");
let result =
  num1 == str
    ? "(num1) Is The Same Value As (str)"
    : "(num1) Is Not The Same Value As (str)";
console.log(result);
let result1 =
  num1 !== str
    ? "(num1) Is The Same Value As (str) But Not The Same Type"
    : "(num1) Is Not The Same Value As (str) But Not The Sane Type";
console.log(result1);
let result2 =
  num1 != str2
    ? "(num1) Is Not The Same Value Or The Sone Type As (str2)"
    : "(num1) Is The Same Value and The Same Type As (str2)";
console.log(result2);
let result3 =
  str !== str2
    ? "(str) Is The Same Type As (str2) But Not The Same Value"
    : "(str} Is Not The Same Type As (str2) But The Same Value";
console.log(result3);

console.log(num1 == str);
console.log(num1 !== str);
console.log(num1 != str2);
console.log(str !== str2);
