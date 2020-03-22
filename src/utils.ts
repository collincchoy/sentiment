export const roundTo = (n: number, numberOfPlaces: number = 2) => {
  const scalar = 10 ** numberOfPlaces;
  return Math.round(n * scalar) / scalar;
};
