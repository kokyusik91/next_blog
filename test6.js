function factorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number);
}

console.log(factorial(3));

// factorial(6);
// return 6 * 5 * 4 * 3 * 2 * 1;
