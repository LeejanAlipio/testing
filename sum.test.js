import { sum } from "./sum";

test("Adds two numbers", () => {
  expect(sum(1, 3)).toBe(4);
  expect(sum(-3, 1)).toBe(-2);
  expect(sum(3)).toBe(3);
  expect(sum(0)).toBe(0);
});
