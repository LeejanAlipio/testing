// Matchers

// Not equal (.not)
test("Not equal", () => {
  expect(3 * 33).not.toBe(69);
});

// To equal the same value (.toEqual)
test("ToEqual", () => {
  const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  expect(oneToTen).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

// Truthiness
test("toBeDefined", () => {
  const a = "";

  expect(a).toBeDefined(); // Means something is defined or initialize
});

test("toBeUndefined", () => {
  const person = { name: "Lee" };

  expect(person.age).toBeUndefined();
});

test("toBeTruthy", () => {
  const isHandsome = true;

  expect(isHandsome).toBeTruthy();
});

test("toBeFalsy", () => {
  const isNotHandsome = "";

  expect(isNotHandsome).toBeFalsy();
});

test("toBeNull", () => {
  const game = null;

  expect(game).toBeNull();
});

// Numbers
test("toBeGreateThan", () => {
  const ten = 5 + 5;

  expect(ten).toBeGreaterThan(9);
});

test("toBeGreateThanOrEqual", () => {
  const ten = 5 + 5;

  expect(ten).toBeGreaterThanOrEqual(10);
});

test("toBeLessThan", () => {
  const ten = 5 + 5;

  expect(ten).toBeLessThan(20);
});

test("toBeLessThanOrEqual", () => {
  const ten = 5 + 5;

  expect(ten).toBeLessThanOrEqual(10);
});

// String
test("toMatch", () => {
  const person = { name: "Lee" };

  expect(person.name).toMatch("Lee");
});

// Array and Iterables

test("toContain", () => {
  const names = ["Lee", "Mark"];

  expect(names).toContain("Lee");
})