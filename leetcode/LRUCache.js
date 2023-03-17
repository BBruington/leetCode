// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.


const LRUCache = function(capacity) {
    this.capacity = capacity
    this.map = new Map()
};


LRUCache.prototype.get = function(key) {
    if(this.map.has(key)) {
      const val = this.map.get(key);
      this.map.delete(key)
      this.map.set(key, val)
      return val
    } else return -1;
};

LRUCache.prototype.put = function(key, value) {
  const prevVal = this.get(key);
  if(prevVal === -1) {
    if(this.map.size === this.capacity) {
      for ( let [firstKey] of this.map) {
        this.map.delete(firstKey)
        break;
      }
    }
  }
  this.map.set(key, value)
};