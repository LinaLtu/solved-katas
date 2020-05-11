// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-circular-queue

class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    if (this.queue[this.write] === null) {
      this.queue.splice(this.write, 1, item);
      if (this.write + 1 > this.max) {
        this.write = 0;
      } else {
        this.write++;
      }
    } else {
      return null;
    }
  }

  dequeue() {
    if (this.queue[this.read] === null) {
      return null;
    }

    let dequeuedElements = this.queue.splice(this.read, 1, null);
    if (this.read + 1 > this.max) {
      this.read = 0;
    } else {
      this.read++;
    }

    return dequeuedElements[0];
  }
}
