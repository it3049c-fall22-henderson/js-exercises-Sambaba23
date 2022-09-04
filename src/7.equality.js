// strictEquality: compare value & type
// Example: strictEquality(1, true) => false
// Example: strictEquality(1, 1) => true
function strictEquality(val1, val2) {
  b = val1=== val2
  return b;
}
//equality: compare value but not necessarily the type
// Example: equality(1, true) => true
// Example: equality(1, 1) => true
// Example: equality(1, false) => false
function equality(val1, val2) {
  b = val1 == val2
  return b;
}

module.exports = {
  strictEquality,
  equality
};
