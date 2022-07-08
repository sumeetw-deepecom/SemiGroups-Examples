const Sum = (x) => ({
  x,
  concat: ({ x: y }) => Sum(x + y),
  toString: () => `Sum(${x})`,
});

const res1 = Sum(1).concat(Sum(2)).toString();

const All = (x) => ({
  x,
  concat: ({ x: y }) => All(x && y),
  toString: () => `All(${x})`,
});

const res2 = All(false).concat(All(true)).toString();

const First = (x) => ({
  x,
  concat: (_) => First(x),
  toString: () =>
  `First(${x})`
});

const res3 = First("blah")
  .concat(First("ice cream"))
  .concat(First("meta programming"))
  .toString();






  
test("Sum = 3", () => {
  expect(res1).toBe("Sum(3)");
});

test("All = false", () => {
  expect(res2).toBe("All(false)");
});

test("First = blah", () => {
  expect(res3).toBe("First(blah)");
});
