export const analyzeArray = (arr) => {
  const getAverage = arr.reduce((sum, value) => sum + value, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return { getAverage, min, max, length }
}