import { fib, fibRec } from './index';

test("Fib sequence: non recursive input: 1", () => {
    expect(fib(1)).toStrictEqual([0]);
});

test("Fib sequence: non recursive input: 0", () => {
    expect(fib(0)).toStrictEqual([]);
});

test("Fib sequence: non recursive input: 8", () => {
    expect(fib(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test("Fib sequence: recursive input: 8", () => {
    expect(fibRec(8)).toStrictEqual(21);
});

test("Fib sequence: recursive input: 0", () => {
    expect(fibRec(0)).toStrictEqual(0);
});

test("Fib sequence: recursive input: 5", () => {
    expect(fibRec(5)).toStrictEqual(5);
});