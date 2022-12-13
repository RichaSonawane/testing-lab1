let myFunctions = require("./functions");

test("Return 2 test", () => {
  expect(myFunctions.returnTwo()).toBe(2);
});

test("Greeting Test", () => {
  expect(myFunctions.greeting("James")).toBe("Hello James.");
});
test("greeting test Jill", () => {
  expect(myFunctions.greeting("Jill")).toBe("Hello Jill.");
});

// test("Addition Test", () => {
//   expect(myFunctions.add(13, 2)).toBe(15);
// });

describe("Math functions", () => {
  test("Addition Test", () => {
    expect(myFunctions.add(13, 2)).toBe(15);
  });
  test("Substraction test", () => {
    expect(myFunctions.subtract(7, 3)).toBe(4);
  });
  test("multiply test", () => {
    expect(myFunctions.multiply(2, 3)).toBe(6);
  });
  test("Division test", () => {
    expect(myFunctions.divide(12, 6)).toBe(2);
  });
});
