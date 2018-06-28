/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.

  // loop through given array
  for (let i = 0; i < elements.length; i++) {
    // pass each element item to the cb function
    cb(elements[i]);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.

  // initialize new array for mapped values
  const mappedArr = [];
  // loop through given array
  for (let i = 0; i < elements.length; i++) {
    // push each element item into new array
    // pass to the cb
    mappedArr.push(cb(elements[i]));
  }
  // return new array of mapped values
  return mappedArr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.

  // initialize a counter variable
  let counter = 0;

  const callCB = () => {
    // once counter reaches n, do not invoke cb
    if (counter < n) {
      cb();
      counter++;
    }
  };
  return callCB;
};

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.

  // create cache object to store 'arg:result' pairs
  const cache = {};

  // create function to return cb() or cached result
  const cbCaller = (arg) => {
    // if cache doesn't contains arg, add 'arg:result' pair to cache
    if (!(arg in cache)) {
      cache[arg] = cb(arg);
    }
    // return cached result
    return cache[arg];
  };
  return cbCaller;
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = (str) => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!

  // 'ello' + 'h'
  // 'llo' + 'e'
  // 'lo' + 'l'
  // 'o' + 'l'
  // '' + 'o'

  // terminal case to end recursion calls
  if (str === '') {
    return '';
  }
  return reverseStr(str.substr(1)) + str.charAt(0);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false

  // variable to check each leaf's value against
  let leaf;
  let flag = true;
  const leaves = Object.keys(obj);

  // this function sets leaf variable if not set, recurses through nested keys,
  // and returns false if any leaves do not match leaf variable
  const checkLeaves = (leavesObj) => {
    for (let i = 0; i < leaves.length; i++) {
      const currLeaf = leaves[i];
      // if leaf is not set and is a valid type (!object)
      if (leaf === undefined && typeof currLeaf !== 'object') {
        // set leaf to first valid key value
        leaf = leavesObj[currLeaf];
      }

      // if current leaf l is an object, call checkLeaves with l
      // if any nested leaf objects within l do not match leaf, flag is set to false
      if (typeof leavesObj[currLeaf] === 'object')
        return checkLeaves(leavesObj[currLeaf]);
      if (leavesObj[currLeaf] !== leaf) {
        flag = false;
      }
    }
  };

  checkLeaves(obj);
  // if flag is still true, then all leaves must have the same property
  return flag;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

  const flatArr = [];

  const makeFlat = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      // if current is not nested, push to flatArr
      if (current.length === undefined) {
        flatArr.push(current);
      }
      // if current is nested, call flatten
      else {
        makeFlat(current);
      }
    }
  };

  makeFlat(elements);
  return flatArr;
};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
