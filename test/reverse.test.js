import { reverseString } from "./reverse";

describe("Reverse a string", () => {
  test("Hello to olleH", () => {
    expect(reverseString('Hello')).toBe('olleH');
  })

  test("Preserve white space", () => {
    expect(reverseString('   Hello')).toBe('olleH   ');
  })

  test("Empty arguments return empty string", () => {
    expect(reverseString()).toBe('');
  })

  test('Non-string arguments throw an error', () => {
    const invalidArguments = [
      123,
      true,
      { name: 'lee'},
      ['apple', 'banana', 'orange'],
      null,
      undefined,
    ]

    invalidArguments.forEach((invalidInput) => {
      expect(() => reverseString(invalidInput)).toThrow("Input must be a string!");
    })
  })
})