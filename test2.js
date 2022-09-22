function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  let j = i + 1;
  // arr.length = 12
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  return i + 1;
}

console.log(countUniqueValues([]));
