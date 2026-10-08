import { analyzeArray } from './analyze-array.js';

describe("Analyze given array to average, min, max, and length", () => {
  const arr = [10, 40, 12, 5, 6];
  
  test("average is equal to 14.6", () => {
    expect(analyzeArray(arr).getAverage).toEqual(14.6);
  })
})