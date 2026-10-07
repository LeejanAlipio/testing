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
})