function findMin(array) {
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  return min;
}
let numbers = [42, 7, 19, -3, 88];
let result = findMin(numbers);
console.log("Найменше число:", result);
