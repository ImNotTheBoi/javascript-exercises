// The extra null check is required since typeof null === "object" evaluates to true
const isObject = (value) => typeof value === 'object' && value !== null;

const totalIntegers = function (obj) {
  let count = 0;

  if (!isObject(obj)) {
    return;
  }

  const elements = Object.values(obj);
  console.log(elements)
  for (const el of elements) {
    if (Number.isInteger(el)) {
      count++;
    } else if (isObject(el)) {
      count += totalIntegers(el);
    }
  }
  return count;
};

totalIntegers([1, 2, 3])
// Do not edit below this line
module.exports = totalIntegers;
