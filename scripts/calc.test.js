const { test, expect } = require("@jest/globals");
import { Calculator } from "./calc.js"

test("can add 1 + 2?", () => {
    let calc = new Calculator();
    expect(calc.add(1,2)).toBe(3);
});

test("can't add nulls", () => {
    let calc = new Calculator();
    expect(calc.add(null,null)).toBe(0);
});

test("can subtract 10 from 20?", () => {
    let calc = new Calculator();
    expect(calc.subtract(20,10)).toBe(10);
});

test("can multiply 10 by 10?", () => {
    let calc = new Calculator();
    expect(calc.multiply(10, 10)).toBe(100);
});

test("can divide 10 by 2?", () => {
    let calc = new Calculator();
    expect(calc.divide(10, 2)).toBe(5);
});