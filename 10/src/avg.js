function avg() {
  let result = 0;
  let num = 0;
  for (let i = 0; i < arguments.length; i += 1) {
    if (typeof arguments[i] === 'object') {
      for (const argument of arguments[i]) {
        if (typeof argument == 'number' && !Number.isNaN(argument)) {
          result += argument;
          num += 1;
        }
      }
    } else if (
      typeof arguments[i] === 'number' &&
      !Number.isNaN(arguments[i])
    ) {
      result += arguments[i];
      num += 1;
    }
  }

  return result / num;
}

module.exports = avg;
