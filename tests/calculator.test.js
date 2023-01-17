import { calculator } from '../scripts/calculator';

test('Returns sums of two numbers', () => {
    expect(calculator.add(1,1)).toBe(2);
});

test('Returns sums of two numbers with one number being a zero', () => {
    expect(calculator.add(100,0)).toBe(100);
});

test('Returns difference of two numbers', () => {
    expect(calculator.subtract(2,1)).toBe(1);
});

test('Returns difference of two numbers with one number being negative', () => {
    expect(calculator.subtract(-1,3)).toBe(-4);
});

test('Multiplies two numbers', () => {
    expect(calculator.multiply(2,2)).toBe(4);
});

test('Multiplies two numbers with one number being negative', () => {
    expect(calculator.multiply(-1,2)).toBe(-2);
});

test('Divides two numbers', () => {
    expect(calculator.divide(4,2)).toBe(2);
});

test('Divides two numbers with one number being negative', () => {
    expect(calculator.divide(4,-1)).toBe(-4);
});


