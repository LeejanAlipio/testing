export const calculateShipping = (weight) => {
  if (weight < 0) {
    throw new Error("Weight must not be negative");
  } else if (weight > 10) {
    throw new Error("Weight must not exceed 10kg");
  } else if (weight <= 5) {
    return 50;
  }
  
  return 100;
}