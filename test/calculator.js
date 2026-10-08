export const calculator = {
  add(a, b) {
    return a + b;
  },

  substract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide with 0");
    }

    return a / b;
  }
}