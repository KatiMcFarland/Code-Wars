Array.prototype.sameStructureAs = function(other) {
  return this.length === other.length
    ? this.every(function(val, ind) {
        return Array.isArray(val) ? val.sameStructureAs(other[ind]) : true;
      })
    : false;
};

// Return 'true' if and only if 'other' has the same
// nesting structure as 'this'.

// Note: You are given a function isArray(o) that returns
// whether its argument is an array.
