let called = 0;

const hash = string => {
  called++;
  let hashed = 0;
  for (let i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

class HashTable {
  constructor() {
    this.collection = {};
  }
  
  add(key, value) {
    const hashedKey = hash(key);

    if(this.collection[hashedKey]) {
      this.collection[hashedKey].push({[key]: value})
    } else {
      this.collection[hashedKey] = [{[key]: value}];
    }
  }

  remove(key) {
    let hashedKey = hash(key).toString();
    if(Object.keys(this.collection).includes(hashedKey)) {
      delete this.collection[hashedKey]
    }
  }

  lookup(key) {
    let hashedKey = hash(key).toString();
    let value = null;
    if(this.collection[hashedKey]) {
      this.collection[hashedKey].forEach(elem => {
        if(elem[key]) {
          value = elem[key];
        }
      });
    } 

    return value;
  }
};
