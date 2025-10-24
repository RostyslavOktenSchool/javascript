function exchange(sumUAH, currencyValues, exchangeCurrency) {
  for (let i = 0; i < currencyValues.length; i++) {
    if (currencyValues[i].currency === exchangeCurrency) {
      let rate = currencyValues[i].value;
      return sumUAH / rate;
    }
  }

  return null;
}
let result = exchange(
  30000,
  [
    { currency: "USD", value: 41 },
    { currency: "EUR", value: 49 }
  ],
//   "EUR" 
"USD"
);

console.log(result);