import { sum, product } from "./calculate";

// Sum tests
test("Equals to 3", () => {
  expect(sum(1, 2)).toBe(3);
})

test("Equals to 5", () => {
  expect(sum(2, 3)).toBe(5);
})

test("Equals to 10", () => {
  expect(sum(5, 5)).toBe(10);
})

test("Equals to 69", () => {
  expect(sum(33, 36)).toBe(69);
})

test(("Equals to 10"), ()=> {
  expect(sum(4, 3, 3)).toBe(10);
})

// Product tests
test("Equal to 50", () => {
  expect(product(5, 10)).toBe(50);
})

test("Equal to 891", () => {
  expect(product(9, 9, 11)).toBe(891);
})

test('Equal to 25', () => {
 expect(product(5, 5)).toBe(25);
})