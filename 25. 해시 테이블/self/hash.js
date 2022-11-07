class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size).fill([]);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let check = this.get(key);
    if (check) {
      check[1] = value;
    } else {
      let hash = this._hash(key);
      this.keyMap[hash] = [...this.keyMap[hash], [key, value]];
    }
    return this.keyMap;
  }
  get(key) {
    let hash = this._hash(key);
    return this.keyMap[hash].filter((data) => data[0] === key)[0];
  }
  keys() {
    let result = [];
    this.keyMap.forEach((arr) => {
      arr.forEach(([key]) => {
        if (!result.includes(key)) {
          result.push(key);
        }
      });
    });
  }

  values() {
    let result = [];
    this.keyMap.forEach((arr) => {
      arr.forEach(([_, value]) => {
        if (!result.includes(value)) {
          result.push(value);
        }
      });
    });
  }
}

let hash = new HashTable();
