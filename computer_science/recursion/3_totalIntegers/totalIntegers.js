const totalIntegers = function(arr) {
 //Conversion
 if (typeof arr !== 'object') {return undefined}
 if (Object.prototype.toString.call(arr) === '[object Object]') {arr = Object.entries(arr)}
 arr = arr.map((element) => {
  if (Object.prototype.toString.call(element) === '[object Object]') {
    return Object.entries(element)
  }
  else {return element}
})
 //Checking
 if (arr.some((element) => {return Array.isArray(element)})) {
  return totalIntegers(arr.flat(1))
 }
 else {
  return arr.filter((element) => {return Number.isInteger(element)}).length
 }
};
 //if not obj
  //return undefined 
 //if obj?
  //convert obj to array
 //turn objects in arr into an array
 //if array contains an arr
  //return total of flatted out array totalIntegers(flat out array)
 //else 
  //return number of integers in array

// Do not edit below this line
module.exports = totalIntegers;