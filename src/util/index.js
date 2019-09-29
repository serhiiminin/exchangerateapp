export const roundFloor = num => Math.floor(num * 10000) / 10000 || num;
export const fixNumberToPlace = (num, place) => num.toFixed(place);
export const isFloatNumber = num => parseFloat(num) === Number(num);
