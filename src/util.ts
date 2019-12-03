const fs = require('fs');

const readFileLines = (filename: string) =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

export { readFileLines };
