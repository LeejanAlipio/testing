import { calculateShipping } from "./shipping.js";

test('shipping cost 50 if weight is 0-5 kg', () => {
  const fiveKg = 5;
  const threeKg = 3;
  const zeroKg = 0;

  const fiveKgResult = calculateShipping(fiveKg);
  const threeKgResult = calculateShipping(threeKg);
  const zeroKgResult = calculateShipping(zeroKg);

  expect(fiveKgResult).toBe(50);
  expect(threeKgResult).toBe(50);
  expect(zeroKgResult).toBe(50);
})