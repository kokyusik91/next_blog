// sameFrequency(182, 281); // true

// function sameFrequency(num1, num2) {
//   const obj1 = {};

//   for (let s of String(num1)) {
//     s in obj1 ? obj1[s]++ : (obj1[s] = 1);
//   }

//   console.log(obj1);
//   for (let s of String(num2)) {
//     if (!(s in obj1)) return false;
//     else {
//       obj1[s]--;
//       if (obj1[s] < 0) return false;
//     }
//   }
//   return true;
// }

// console.log(sameFrequency(22, 222));

// function areThereDuplicates(a, b, c, ...d) {
//   // good luck. (supply any arguments you deem necessary.)
//   const arr = [];
//   for (let key in arguments) {
//     arr.push(arguments[key]);
//   }

//   console.log(arr);

//   let i = 0;
//   let j = i + 1;

//   while (j < arr.length) {
//     if (arr[i] !== arr[j]) {
//       j++;
//     } else {
//       return true;
//     }
//   }
//   return false;
// }
//                                 i
// console.log(areThereDuplicates('a', 'b', 'c', 'd', 'c', 'd', 'e'));
a, b, c, c, d, d, e;
//                                      j

function areThereDuplicates(a, b, ...args) {
  // good luck. (supply any arguments you deem necessary.)
  // const arr = [];
  // const obj = {};
  // for (let key in arguments) {
  //   arr.push(arguments[key]);
  // }

  // for (let s of arr) {
  //   s in obj ? obj[s]++ : (obj[s] = 1);
  // }
  // console.log(obj);
  // for (let key in obj) {
  //   // 값중에 1보다 큰 애들이 있으면 true
  //   if (obj[key] > 1) return true;
  // }

  // return false;
  console.log(args);
  console.log(arguments);
}

console.log(areThereDuplicates(1, 2, 4, 5));
