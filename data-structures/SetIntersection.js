// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/perform-an-intersection-on-two-sets-of-data

class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.keys(this.dictionary);
  }

  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }

  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }

  size() {
    return this.length;
  }
  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    });
    set.values().forEach(value => {
      newSet.add(value);
    });

    return newSet;
  }

  intersection(setB) {
    let newSet = new Set();
    const setBValues = Object.keys(setB.dictionary);

    setBValues.forEach(value => {
      if (this.has(value)) {
        newSet.add(value);
      }
    });
    return newSet;
  }
}
