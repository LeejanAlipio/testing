import { isAdult } from "./isAdult.js";

test('returns true if age is 18', () => {
  expect(isAdult(18)).toBe(true);
})

test ('returns false if age is 17', () => {
  expect(isAdult(17)).toBe(false);
})