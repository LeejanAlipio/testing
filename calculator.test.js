import { calculator } from "./calculator";

// Sum tests
test("Equal to 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Equal to 5", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("Equal to 10", () => {
  expect(calculator.add(5, 5)).toBe(10);
});

test("Equal to 69", () => {
  expect(calculator.add(33, 36)).toBe(69);
});

// Product tests
test("Equal to 50", () => {
  expect(calculator.product(5, 10)).toBe(50);
});

test("Equal to 81", () => {
  expect(calculator.product(9, 9)).toBe(81);
});

test("Equal to 25", () => {
  expect(calculator.product(5, 5)).toBe(25);
});

// Substract
test("Equal to 50", () => {
  expect(calculator.substract(100, 50)).toBe(50);
})

// Division 
test("Equal to 2", () => {
  expect(calculator.quotient(4, 2)).toBe(2);
})