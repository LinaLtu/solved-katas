// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-set-class
class Set {
  constructor() {
    this.dictionary = {};
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.keys(this.dictionary);
  }

  add(element) {
    if (!this.values().includes(element)) {
      this.dictionary[element] = true;
      return true;
    } else {
      return false;
    }
  }

  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      console.log(this.dictionary);
      return true;
    } else {
      return false;
    }
  }

  size() {
    return this.values().length;
  }
}

let mySet = new Set();
