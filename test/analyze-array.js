export const analyzeArray = (arr) => {
  const getAverage = arr.reduce((sum, value) => sum + value, 0) / arr.length;

  return { getAverage }
}