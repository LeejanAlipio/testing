import calculateDiscount from './discount.js';

test('applies a 20% on items costing $1000', () => {
  expect(calculateDiscount(1000, 20)).toBe(800);
})