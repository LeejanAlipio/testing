import { calculateDiscount } from './discount.js';

test('applies a 20% on items costing $1000', () => {
  expect(calculateDiscount(1000, 20)).toBe(800);
})

test('price remain unchanged if discount === 0', () => {
  expect(calculateDiscount(1000, 0)).toBe(1000);
})

test('return 0 if the discount is 100%', () => {
  expect(calculateDiscount(1000, 100)).toBe(0);
})