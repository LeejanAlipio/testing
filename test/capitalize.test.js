import { capitalize } from "./capitalize"

describe("String argument should return as capitalize", () => {
  test("Return Hello world!", () => {
    expect(capitalize("hello world!")).toBe("Hello world!")
  })

  test("Return Leejan", () => {
    expect(capitalize("leejan")).toBe("Leejan");
  })

  test('Return "" if inputs are false values', () => {
    expect(capitalize("")).toBe("");
    expect(capitalize(0)).toBe('');
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(NaN)).toBe('');
  })
})