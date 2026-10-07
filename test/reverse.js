export const reverseString = (str) => {
  if (str === undefined) return '';

  if (typeof str !== 'string') {
    throw new Error("Input must be a string!");
  }
    
  return str.split("").reverse().join('');
}