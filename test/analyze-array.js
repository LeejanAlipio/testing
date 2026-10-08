export const analyzeArray = (arr) => {
  const getAverage = arr.reduce((sum, value) => sum + value, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return { getAverage, min, max }
}