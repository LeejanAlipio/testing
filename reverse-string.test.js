import { reverseString } from "./reverse-string";

test("Reverse String", () => {
  expect(reverseString("hello")).toEqual("olleh");
  expect(reverseString("Lee")).toEqual("eeL");
})