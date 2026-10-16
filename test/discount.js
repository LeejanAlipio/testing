export const calculateDiscount = (amount, discount) => {
  return amount - amount * (discount / 100);
}