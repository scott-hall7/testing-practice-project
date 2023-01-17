import { capitalize } from '../scripts/capitalize';


test('Returns 1 word string with first char capitalized', () => {
    expect(capitalize('hello')).toBe('Hello');
});


test('Returns 2 word string with first char capitalized', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});