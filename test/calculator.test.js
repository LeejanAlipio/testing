describe("Calculate two numbers", () => {
  test("Sum of two numbers", () => {
    expect(calculator.add(1, 3)).toEqual(4);
  })

  test('Difference of two numbers', () => {
    expect(calculator.substract(-5, -5)).toEqual(0);
  })

  test('Product of two numbers', () => {
    expect(calculator.multiply(5, 10)).toEqual(50);
  })

  test('Quotient of two numbers', () => {
    expect(calculator.divide(10, 5)).toEqual(2);
  })
})