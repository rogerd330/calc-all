const { test, expect } = require("@jest/globals");
import { Calculator } from "./calc.js"

// Declare the 'calc' variable in the global scope.
let calc;

// Before any test runs, initialize our 'calc' object 
// so it can be referenced in all the tests.
beforeAll(() => {
    calc = new Calculator();
});

// Clean up after all of our tests have run.
afterAll(() => {
    calc = null;
});

test("can add 1 + 2?", () => {
    expect(calc.add(1,2)).toBe(3);
});

test("can't add nulls", () => {
    expect(calc.add(null,null)).toBe(0);
});

test("can subtract 10 from 20?", () => {
    expect(calc.subtract(20,10)).toBe(10);
});

test("can multiply 10 by 10?", () => {
    expect(calc.multiply(10, 10)).toBe(100);
});

test("can divide 10 by 2?", () => {
    expect(calc.divide(10, 2)).toBe(5);
});