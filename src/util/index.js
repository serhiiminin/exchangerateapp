export const roundFloor = num => Math.floor(num * 10000) / 10000 || num;
export const extractFloatNumber = str => {
  const result = str.match(/[+-]?\d+(\.\d+)?/g);

  return result ? parseFloat(result[0]).toFixed(2) : Number(0).toFixed(2);
};
