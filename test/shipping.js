export const calculateShipping = (weight) => {
  if (weight > 10) throw new Error("Weight must not exceed 10kg");

  if (weight <= 5) return 50;

  return 100;
}