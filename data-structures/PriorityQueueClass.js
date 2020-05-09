// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-priority-queue-class

function PriorityQueue() {
  this.collection = [];
  this.printCollection = () => console.log(this.collection);

  this.enqueue = elemArray => {
    let priorityIndex = elemArray[1];
    let elemIndex = 0;
    let continueLoop = true;

    while (continueLoop) {
      if (
        elemIndex === this.collection.length ||
        priorityIndex < this.collection[elemIndex][1]
      ) {
        this.collection.splice(elemIndex, 0, elemArray);
        continueLoop = false;
      }
      elemIndex++;
    }
  };

  this.dequeue = () => {
    if (this.size() === 0) {
      return;
    }

    return this.collection.shift();
  };

  this.size = () => this.collection.length;

  this.front = () => this.collection[this.collection.length - 1];

  this.isEmpty = () => Boolean(this.collection.length === 0);
}
