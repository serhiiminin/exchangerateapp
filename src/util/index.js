const fixNumberToPlace = (num, place) => num.toFixed(place);
const isFloatNumber = num => parseFloat(num) === Number(num);
const calculateAmount = handler => (amount, rate) => String(fixNumberToPlace(handler(Number(amount), Number(rate)), 2));
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

export { fixNumberToPlace, isFloatNumber, calculateAmount, divide, multiply };
