const OP_CODES = {
  1: function(a, b, program) {
    return program[a] + program[b];
  },

  2: function(a, b, program) {
    return program[a] * program[b];
  },

  99: function() {
    return null;
  },
};

export default function runProgram(data) {
  var res = [...data];

  for (let i = 0; i < data.length; i += 4) {
    if (data[0] === 99) {
      return;
    } else {
      const op = OP_CODES[data[i]];
      const outPosition = data[i + 3];

      const result = op(i + 1, i + 2, data);
      res[outPosition] = result;
    }
  }

  return res;
}
