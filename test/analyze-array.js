export const analyzeArray = (arr) => {
  if (arr.length === 0) {
    throw new Error('Array must not be empty')
  }

  const getAverage = arr.reduce((sum, value) => sum + value, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return { getAverage, min, max, length }
}