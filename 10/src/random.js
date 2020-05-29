function random(max, min = 0) {
  if (typeof max !== 'number' || typeof min !== 'number') {
    return -1;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = random;
