import { calculator } from "./calculator";

describe("Calculate two numbers", () => {
  test("1 + 3 equals 4", () => {
    expect(calculator.add(1, 3)).toEqual(4);
  })

  test('-5 - -5 equals 0', () => {
    expect(calculator.substract(-5, -5)).toEqual(0);
  })

  test('5 * 10 equals 50', () => {
    expect(calculator.multiply(5, 10)).toEqual(50);
  })

  test('10 / 5 equals 2', () => {
    expect(calculator.divide(10, 5)).toEqual(2);
  })

  test('10 / 0 equals to undefined or NaN', () => {
    expect(() => calculator.divide(10, 0)).toThrow("Cannot divide with 0");
  })
})