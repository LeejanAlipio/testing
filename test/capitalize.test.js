import { capitalize } from "./capitalize"

describe("Capitalize", () => {
  test("Capitalize the firs character", () => {
    expect(capitalize("hello world!")).toBe("Hello world!");
    expect(capitalize("leejan")).toBe("Leejan");
  })

  test('Return "" if inputs are falsy values', () => {
    expect(capitalize("")).toBe("");
    expect(capitalize(0)).toBe('');
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(NaN)).toBe('');
  })

  test('Return capitalized word without change', () => {
    expect(capitalize('Hello')).toBe('Hello');
  })

  test('Return "" or error if value is a number', () => {
    expect(capitalize(10)).toBe("");
    expect(capitalize(4)).toBe("");
  })

  test('Preserve capital letters', () => {
    expect(capitalize('hELLO')).toBe('HELLO');
    expect(capitalize('hElLo')).toBe('HElLo');
  })
})