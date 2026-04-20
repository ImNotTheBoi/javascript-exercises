const permutations = function(arr, permutationArr = []) {
  arr = arr.flat(1)
  if (arr.length === 0 || arr.length === 1) {
    permutationArr.push(arr)
  }
  else { arr.forEach((num, index) => {
    const remainingNumbers = arr.slice(0, index).concat(arr.slice(index + 1))
    permutations(remainingNumbers).forEach(permutation => {
          permutationArr.push([num].concat(permutation))
    });
  })};
  return permutationArr
};

  //if no value or one length array
    //permutation = arr
  //for each number in array
    //permutations += an array with the first number + to each 
      //permutations(the rest of the numbers in array) given in this function
  //return permutations

// Do not edit below this line
module.exports = permutations;
