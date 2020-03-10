const howManyHundreds = function(number) {
  let result = '';
  number % 100 === 0 ? result = number / 100 : 
  result = Math.floor((number / 100) * 100) / 100;
  return Math.trunc(result);
};

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);