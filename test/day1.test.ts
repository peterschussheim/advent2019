import { sumFuelRequirements } from '../src';
const { readFileLines } = require('../src/util');

const path = `${__dirname}/day1.txt`;
const input = readFileLines(path);
const smallTest = [1969, 100756];

describe('Day 1', () => {
  it('Small test 1', () => {
    expect(sumFuelRequirements(smallTest)).toEqual(51312);
  });

  it('Real data', () => {
    expect(sumFuelRequirements(input)).toEqual(4998565);
  });
});
