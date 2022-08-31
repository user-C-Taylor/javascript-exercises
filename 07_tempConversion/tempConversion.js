// Take in fahrenheit temperature.
// Convert to celsius temperature.
// Round to one decimal place.

// Take in celsius temperature.
// Convert to fahrenheit temperature.
// Round to one decimal place.

const ftoc = function(fahr) {
  const celsius = (fahr - 32) * (5 / 9);
  const roundCel = +celsius.toFixed(1);
  return roundCel;
};

const ctof = function(cel) {
  const fahrenheit = (cel * (9 / 5)) + 32;
  const roundFahr = +fahrenheit.toFixed(1);
  return roundFahr;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
