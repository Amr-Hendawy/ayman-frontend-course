function insertionSort(x) {
  for (var i = 1; i < x.length; i++) {
    var key = x[i];
    for (var j = i - 1; j >= 0; j--) {
      if (x[j] > key) {
        x[j + 1] = x[j];
      } else {
        break;
      }
    }
    x[j + 1] = key;
    // console.log(x);
  }
  return x;
}

console.log(insertionSort([9, 5, 4, 1]));
console.log(insertionSort([10, 9, 8, 1]));
