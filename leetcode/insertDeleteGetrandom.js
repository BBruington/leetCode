// Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). 
// Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.

var RandomizedSet = function() {
    this.map = {};
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    const i = this.map[val];
    if ( i !== undefined ) {
      return false;
    }
    this.arr.push(val);
    this.map[val] = this.arr.length - 1;
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  const i = this.map[val];
  if (i !== undefined) {
    if (i !== (this.arr.length - 1)) {
      this.map[this.arr[this.arr.length - 1]] = i;
      const temp = this.arr[i]
      this.arr[i] = this.arr[this.arr.length - 1]
      this.arr[this.arr.length -1] = temp
    }
    delete this.map[val]
    this.arr.pop()
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let num = Math.floor(Math.random() * this.arr.length)
    return this.arr[num]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */