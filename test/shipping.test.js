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

test('package weighing more than 5kg to 10kg costs 100', () => {
  const sixKg = 6;
  const tenKg = 10;

  const sixKgResult = calculateShipping(sixKg);
  const tenKgResult = calculateShipping(tenKg);

  expect(sixKgResult).toBe(100);
  expect(tenKgResult).toBe(100);
})

test('package weighing more than 10kg throws an error', () => {
  const elevenKg = 11;

  const elevenKgResult = () => calculateShipping(elevenKg);

  expect(elevenKgResult).toThrow("Weight must not exceed 10kg");
})