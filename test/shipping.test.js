import { calculateShipping } from "./shipping.js";

test('shipping cost 50 if weight is 0-5 kg', () => {
  const weight = 5;

  const result = calculateShipping(weight);

  expect(result).toBe(50);
})