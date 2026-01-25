let calculator = {
 add: function (a, b) {
  return a + b;
 },
 subtract: function (a, b) {
  return a - b;
 },
 multiply: function (a, b,c) {
  return a * b*c;
 },
 division: function (a, b) {
  return a / b;
 },
 mod: function (a, b) {
  return a % b;
 },
};


console.log(calculator.add(5,3))
console.log(calculator.subtract(10,7))
console.log(calculator.multiply(10,7,2))
console.log(Math.floor(calculator.division(10,7)))
console.log(calculator.mod(10,7))