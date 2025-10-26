const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
  const rate = currencyValues.find(item => item.currency === exchangeCurrency);
  if (!rate) {
    return 'Валюта не знайдена';
  }
  const result = sumUAH / rate.value;
  return result;
};

console.log(exchange(10000, [
  { currency: 'USD', value: 46 },
  { currency: 'EUR', value: 49 }
], 'USD'));
