let alphabetArr = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i),
);

console.log(alphabetArr);

let arr = alphabetArr.filter(function (full) {
  return full !== "e";
});

console.log(arr);

let miss = null;
for (let i = 0; i < alphabetArr.length; i++) {
  if (alphabetArr[i] !== arr[i]) {
    miss = alphabetArr[i];
    break;
  }
}
console.log(miss);
