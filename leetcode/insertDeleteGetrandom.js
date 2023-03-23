// Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). 
// Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.

//map {value: index in array}
//array [ value, value, value]

var RandomizedSet = function() {
  //use both a map and an array to maximize insert / randomize / deletion function's efficiency
    this.map = {};
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    const i = this.map[val];

    //if value has an index in map -not undefined- 
    //aka if it already exists
    if ( i !== undefined ) {
      return false;
    }

    //add value to array 
    this.arr.push(val);

    //add value to map that points to its index in the array
    this.map[val] = this.arr.length - 1;
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  //i points to the index where val is in array
  const i = this.map[val];
  // does value exist?
  if (i !== undefined) {
    //is the value not the last index in the array?
    if (i !== (this.arr.length - 1)) {

      //point current last val in array to the index where i is in map
      this.map[this.arr[this.arr.length - 1]] = i;

      //temp == val we are trying to remove
      const temp = this.arr[i]

      //put value at end of arr to where val we're trying to move is
      this.arr[i] = this.arr[this.arr.length - 1]

      //put value we are trying to move to the end of arr
      this.arr[this.arr.length -1] = temp
    }
    //remove val from both map and array
    delete this.map[val]
    this.arr.pop()
    return true;
  }
  //if val doesn't exist on the map, return false
  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  //pick a random index from array
    let num = Math.floor(Math.random() * this.arr.length)

    //show the value of the randomly chosen index
    return this.arr[num]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */