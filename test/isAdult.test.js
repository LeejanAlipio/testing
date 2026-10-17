import { isAdult } from "./isAdult.js";

test('returns true if age is 18', () => {
  expect(isAdult(18)).toBe(true);
})