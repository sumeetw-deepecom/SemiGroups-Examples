const Sum = x =>
({
  x,
  concat: ({x: y}) =>
    Sum(x + y),
  inspect: () =>
    `Sum(${x})`,
  toString: () =>
    `Sum(${x})`
})

Sum.empty = () => Sum(0)
const res1 = Sum(1).concat(Sum(2)).concat(Sum.empty()).toString();

const All = x =>
({
  x,
  concat: ({x: y}) =>
    All(x && y),
  inspect: () =>
    `All(${x})`,
  toString: () =>
    `All(${x})`
})

All.empty = () => All(true)
const res2 = All(false).concat(All(true)).concat(All.empty()).toString();

const First = x =>
({
  x,
  concat: _ =>
    First(x),
  inspect: () =>
    `First(${x})`,
  toString: () =>
    `First(${x})`
})

// const res = First("blah").concat(First("ice cream")).concat(First('meta programming'))





test("Sum = 3", () => {
    expect(res1).toBe("Sum(3)");
  });
  
  test("All = false", () => {
    expect(res2).toBe("All(false)");
  });
  