export const capitalize = (str) => {
  if (!str || typeof str === 'number') return '';

  return str.at(0).toUpperCase() + str.slice(1);
}