export default function sumFuelRequirements(data: number[]): number {
  let result = 0;

  for (let i = 0; i <= data.length - 1; i++) {
    let f = fuelCalc(data[i]);
    while (f > 0) {
      result += f;
      f = fuelCalc(f);
    }
  }

  return result;
}

const fuelCalc = (mass: number): number => {
  let f = Math.floor(mass / 3) - 2;
  if (f < 0) {
    f = 0;
  }

  return f;
};
