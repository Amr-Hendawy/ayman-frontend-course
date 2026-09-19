let arr = ["eloquent", "country", "person", "ab", "xyz"];

let newArr = arr.map(function (el) {
  if (el.length > 2) {
    return el.slice(1, -1);
  } else {
    return "";
  }
});
console.log(newArr);
