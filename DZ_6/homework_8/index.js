function sortNumbers(arr, direction = "asc") {
  return arr.sort((a, b) => direction === "asc" ? a - b : b - a);
}

console.log(sortNumbers([11,21,3], "asc"));  
console.log(sortNumbers([11,21,3], "desc"));