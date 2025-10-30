function array (text) {
   return text.map(word => word.toUpperCase());
}
console.log(array(["hello word","js is cool","lorem"]));