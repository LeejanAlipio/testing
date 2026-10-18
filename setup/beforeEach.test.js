let arr = [];

beforeEach(() => {
  arr = [];
});

test("checks whether an item has been added", () => {
  arr.push({ fruit: "apple" });

  expect(arr.length).toBe(1);
});