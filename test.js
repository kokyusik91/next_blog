function validAnagram(a, b) {
  // add whatever parameters you deem necessary - good luck!
  // 두 문자열을 객체 형태로 빈도수 체크해서 만든다
  const obj1 = {};
  const obj2 = {};

  for (let k of a) {
    k in obj1 ? (obj1[k] += 1) : (obj1[k] = 1);
  }

  for (let k of b) {
    k in obj2 ? (obj2[k] += 1) : (obj2[k] = 1);
  }

  console.log('obj1', obj1);
  console.log('obj2', obj2);

  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'));
