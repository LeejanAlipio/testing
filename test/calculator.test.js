describe("Calculate two numbers", () => {
  test("Sum of two numbers", () => {
    expect(calculator.add(1, 3)).toEqual(4);
  })

  test('Difference of two numbers', () => {
    expect(calculator.substract(-5, -5)).toEqual(0);
  })
})