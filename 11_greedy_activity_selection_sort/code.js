function activitySelectionSortAlgorithm(start, end) {
  results = [0];
  j = 0;
  for (let i = 1; i < start.length; i++) {
    if (start[i] >= end[j]) {
      results.push(i);
      j = i;
    }
  }
  console.log(results);
}

let s = [9, 10, 11, 12, 13, 15];
let e = [11, 11, 12, 14, 15, 16];
activitySelectionSortAlgorithm(s, e);
nlong + n