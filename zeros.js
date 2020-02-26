const moveZeros = function(arr) {
  return arr
    .filter(function(arrayItem) {
      return arrayItem !== 0;
    })
    .concat(
      arr.filter(function(arrayItem) {
        return arrayItem === 0;
      })
    );
};
