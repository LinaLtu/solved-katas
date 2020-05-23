//https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/perform-a-union-on-two-sets

class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // this method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // this method will return the size of the set
  size() {
    return this.length;
  }

  // this method will return the union of two sets, without duplicate values
  union(setB) {
    let dictionaryValue = this.values();
    let setBValues = Object.keys(setB.dictionary);

    setBValues.forEach(value => {
      if (!dictionaryValue.includes(value)) {
        this.dictionary[value] = true;
      }
    });

    return this;
  }
}
