function averagePair(arr, average) {
  if (arr.length < 1) return false;
  const sum = average * 2;

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] + arr[end] > sum) {
      end--;
    } else if (arr[start] + arr[end] < sum) {
      start++;
    } else return true;
  }

  return false;
}
console.log(averagePair([], 4));
