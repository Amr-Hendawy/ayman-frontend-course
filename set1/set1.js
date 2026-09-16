let alphabetArr = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i),
);

console.log(alphabetArr);

let arr = alphabetArr.filter(function (full) {
  return full !== "e";
});

console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   // 26 - 25 = 1
//   // miss = 1
//   //
//   let miss = alphabetArr.length - arr.length;
//   //
//   miss === "" ? miss[i] : false;
//   console.log(miss[i]);
// }
for (let i = 0; i < alphabetArr.length; i++) {
  // 26 - 25 = 1
  // miss = 1
  //
  if (alphabetArr[i] !== arr[i]) {
    console.log(alphabetArr[i]);
    break;
  }

  // let miss = alphabetArr.length - arr.length;
  // //
  // miss === "" ? miss[i] : false;
  // console.log(miss[i]);
}
