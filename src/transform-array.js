const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr) === false) throw error = new NotImplementedError("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) return arr;
  let array = arr.concat();
  console.log(array)
  array.forEach((item, index) => {
    if (item === "--discard-prev" && index != 0) {
      array.splice(index - 1, 2)
    } else if (item === "--discard-prev" && index == 0) {
      array.splice(index, 1)
    }

    if (item === "--discard-next" && index != array.length - 1) {
      array.splice(index, 2)
    } else if (item === "--discard-next" && index === array.length - 1) {
      array.splice(index, 1)
    }

    if (item === "--double-next" && index != array.length - 1) {
      array.splice(index, 1, array[index + 1])
    } else if (item === "--double-next" && index === array.length - 1) {
      array.splice(index, 1)
    }

    if (item === "--double-prev" && index != 0) {
      array.splice(index, 1, array[index - 1])

    } else if (item === "--double-prev" && index === 0) {
      array.splice(index, 1)
    }
  })
  array = array.filter((item, index) => {
    return item !== "--discard-next" && item !== "--discard-prev" && item !== "--double-next" && item !== "--double-prev"
  })
  console.log(array)
  return array

}

module.exports = {
  transform
};
