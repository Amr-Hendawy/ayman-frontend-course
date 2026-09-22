function mergeSort(array, start, end) {
  if (end <= start) {
    return;
  }
  let mid = Math.floor((start + end) / 2);
  mergeSort(array, start, mid);
  mergeSort(array, mid + 1, end);
  merge(array, start, mid, end);
}

function merge(array, start, mid, end) {
  let leftLength = mid - start + 1;
  let rightLength = end - mid;
  let leftArray = new Array(leftLength);
  let rightArray = new Array(rightLength);

  let i = 0;
  let j = 0;
  let k = start;

  for (let i = 0; i < leftLength; i++) {
    leftArray[i] = array[start + i];
  }

  for (let j = 0; j < rightLength; j++) {
    rightArray[j] = array[mid + 1 + j];
  }
  while (i < leftLength && j < rightLength) {
    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }
  while (i < leftLength) {
    array[k] = leftArray[i];
    i++;
    k++;
  }
  while (j < rightLength) {
    array[k] = rightArray[j];
    j++;
    k++;
  }
}
let array = [5, 3, 4, 2, 10, 1, 12];
mergeSort(array, 0, array.length - 1);
console.log(array);
