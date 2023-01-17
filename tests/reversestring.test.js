import { reverseString } from '../scripts/reversestring';


test('Reverses a 1 word string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('Reverses a 1 word string with capital letter', () => {
    expect(reverseString('Hello')).toBe('olleH');
});

test('Reverses a 2 word string', () => {
    expect(reverseString('Hello world')).toBe('dlrow olleH');
});