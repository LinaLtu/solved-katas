// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-stack-class

function Stack() {
  let collection = [];
  this.print = () => console.log(collection);

  this.push = elem => collection.push(elem);

  this.pop = () => collection.pop();

  this.peek = () => collection[0];

  this.isEmpty = () => Boolean(collection.length === 0);

  this.clear = () => (collection = []);

  this.print = () => console.log(collection);
}
