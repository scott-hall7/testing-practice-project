import { analyzeArray } from '../scripts/analyzeArray';

test('Returns object with analyzed array', () => {
    expect(analyzeArray([0,0,1])).toStrictEqual({average: 0.3333333333333333, min: 0, max: 1, length: 3});
});

test('Returns object with analyzed array of 1 array element', () => {
    expect(analyzeArray([0])).toStrictEqual({average: 0, min: 0, max: 0, length: 1});
});

test('Returns object with analyzed array of random numbers', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({average: 4, min: 1, max: 8, length: 6});
});

test('Returns object with analyzed array of 0 array elements ', () => {
    expect(analyzeArray([])).toStrictEqual({average: NaN, min: undefined, max: undefined, length: 0});
});