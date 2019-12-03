import { runProgram } from '../src';

var data = [
  1,
  0,
  0,
  3,
  1,
  1,
  2,
  3,
  1,
  3,
  4,
  3,
  1,
  5,
  0,
  3,
  2,
  1,
  9,
  19,
  1,
  19,
  5,
  23,
  2,
  6,
  23,
  27,
  1,
  6,
  27,
  31,
  2,
  31,
  9,
  35,
  1,
  35,
  6,
  39,
  1,
  10,
  39,
  43,
  2,
  9,
  43,
  47,
  1,
  5,
  47,
  51,
  2,
  51,
  6,
  55,
  1,
  5,
  55,
  59,
  2,
  13,
  59,
  63,
  1,
  63,
  5,
  67,
  2,
  67,
  13,
  71,
  1,
  71,
  9,
  75,
  1,
  75,
  6,
  79,
  2,
  79,
  6,
  83,
  1,
  83,
  5,
  87,
  2,
  87,
  9,
  91,
  2,
  9,
  91,
  95,
  1,
  5,
  95,
  99,
  2,
  99,
  13,
  103,
  1,
  103,
  5,
  107,
  1,
  2,
  107,
  111,
  1,
  111,
  5,
  0,
  99,
  2,
  14,
  0,
  0,
];
var test1 = [1, 0, 0, 0, 99];
var test2 = [2, 3, 0, 3, 99];
var test3 = [2, 4, 4, 5, 99, 0];
var test4 = [1, 1, 1, 4, 99, 5, 6, 0, 99];

describe('Day 2: Program Alarm', () => {
  it('Small test 1', () => {
    expect(runProgram(test1)).toEqual([2, 0, 0, 0, 99]);
  });

  it('Small test 2', () => {
    expect(runProgram(test2)).toEqual([2, 3, 0, 6, 99]);
  });

  it('Small test 3', () => {
    expect(runProgram(test3)).toEqual([2, 4, 4, 5, 99, 9801]);
  });

  it('Small test 4', () => {
    expect(runProgram(test4)).toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
  });

  xit('Real test', () => {
    expect(runProgram(data)).toEqual([]);
  });
});
