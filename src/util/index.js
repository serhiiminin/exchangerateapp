const roundFloor = num => Math.floor(num * 10000) / 10000 || num;
const fixNumberToPlace = (num, place) => num.toFixed(place);
const isFloatNumber = num => parseFloat(num) === Number(num);
const calculateAmount = operation => (amount, rate) =>
  String(fixNumberToPlace(operation(Number(amount || 0), Number(rate)), 2));
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

export { roundFloor, fixNumberToPlace, isFloatNumber, calculateAmount, divide, multiply };
