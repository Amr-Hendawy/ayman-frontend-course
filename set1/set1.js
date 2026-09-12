let alphabetArr = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i),
);

console.log(alphabetArr);

let arr = alphabetArr.filter(function (full) {
  return full !== "e";
});

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  let miss = alphabetArr.length - arr.length;
  miss === "" ? miss[i] : false;
  console.log(miss[i]);
}
