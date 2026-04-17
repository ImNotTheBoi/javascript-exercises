function valueIsNaN(v) {
  return v !== v;
}

const contains = function(obj, value) {
  let validity = false
  const checkObj = (o) => {
    Object.keys(o).forEach(element => {
        console.log(o[element])
        if (o[element] === value || valueIsNaN(value) ) {
            validity = true
        }
        else if (o[element] instanceof Object) {
            checkObj(o[element], value)
        }
    });
  }
  checkObj(obj)
  return validity
};

// const contains = function(obj, value, validity = undefined) {
//   Object.keys(obj).forEach(element => {
//     if (obj[element] == value) {
//         console.log("yes")
//         validity = true
//     }
//     else if (obj[element] instanceof Object) {
//         console.log(obj[element])
//         contains(obj[element], value, validity)
//     }
//   });
//   return validity
// };

// Do not edit below this line
module.exports = contains;
