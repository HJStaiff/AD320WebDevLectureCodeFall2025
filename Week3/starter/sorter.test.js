const { sorter, isSorted } = require("./script.js");
//File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
// Stmts % of statments that were executed
// Branch % of if/else, ternaries and switch cases taht were executed
// Funns % of functions that were called
// Lines % of lines that run at lest once

//Your turn: Write a test that checks to see if the
//function will enter a negative values in the right place
describe("Sorter test", () => {
  test("Test insert negative value", () => {
    let arr = [1, 2, 3, 4, 5];
    let val = -2;
    let expectedArr = [-2, 1, 2, 3, 4, 5];
    const result = sorter(arr, val);
    console.log(result);
    expect(result).toEqual(expectedArr);
  });
});

//Your turn: Create a new file with a test suit that tests the is sorted funciton
//Try to get 100% coverage and edge cases
describe("Sorted test", () => {
  test("Test", () => {
    const result = isSorted(arr, val);
    expect(result).toEqual(expectedArr);
  });
});