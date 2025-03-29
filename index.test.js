const { add, subtract, multiply, divide } = require('./index');

describe('Math operations', () => {
    test('adds two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, -1)).toBe(-2);
        expect(add(0, 5)).toBe(5);
    });

    test('subtracts two numbers', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(0, 5)).toBe(-5);
        expect(subtract(-3, -1)).toBe(-2);
    });

    test('multiplies two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-2, 3)).toBe(-6);
        expect(multiply(0, 5)).toBe(0);
    });

    test('divides two numbers', () => {
        expect(divide(6, 3)).toBe(2);
        expect(divide(-6, 3)).toBe(-2);
        expect(divide(5, 2)).toBeCloseTo(2.5);
    });

    test('handles division by zero', () => {
        expect(() => divide(5, 0)).toThrow();
    });
});