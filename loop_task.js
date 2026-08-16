// let nums = [1, 5, 7, 2, 3, 8, 9, 4, 12, 18, 17, 13, 14, 22, 28, 27];

// Make 2 arrys each for even numbers and another for odd.
// let arr1 = [];
// let arr2 = [];
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 2) {
//     arr1.push(nums[i]);
//   } else {
//     arr2.push(nums[i]);
//   }
// }
// console.log(arr1);
// console.log(arr2);

//////////////////////////////////////

nums = [-1, 5, -7, 2, 3, -8, 9, 4, -12, 18, -17, 13, -14, -22, -28, 27];
// نفس المصفوفه
// عايزك تطلع منها مصفوفتين واحده للارقام السالبه وواحده للموجبه
let arr1 = [];
let arr2 = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] < 0) {
    arr1.push(nums[i]);
  } else {
    arr2.push(nums[i]);
  }
}
console.log(arr1);
console.log(arr2);
