import { caesarCipher } from '../scripts/caesarCipher';

test('Returns cipher for key of 1 and testing punctuation', () => {
    expect(caesarCipher('AaBb !!?? YyZz', 1)).toBe('BbCc !!?? ZzAa');
});

test('Testing every letter and letter wrapping', () => {
    expect(caesarCipher('The quick brown fox jumped over the lazy dog!', 26)).toBe('The quick brown fox jumped over the lazy dog!');
});

test('Test numbers in a string', () => {
    expect(caesarCipher('12345', 5)).toBe('12345');
});