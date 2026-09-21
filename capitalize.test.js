import { capitalize } from "./capitalize";

test("Capitalize", () => {
  expect(capitalize("lee")).toEqual("Lee");
  expect(capitalize("heavenly")).toEqual("Heavenly");
})