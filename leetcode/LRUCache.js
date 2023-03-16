// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.


var LRUCache = function(capacity) {
    this.map = new Map()
    this.capacity = capacity
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
    if(this.map.size === this.capacity) {
      for ( let [key] of this.map) {
        this.map.delete(key)
        break;
      }
    }
    this.map.set(key, value)
};