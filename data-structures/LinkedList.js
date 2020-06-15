//https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/search-within-a-linked-list

//Create a node
class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  };
  
  class LinkedList {
    constructor() {
      this.length = 0;
      this.head = null;
    }
  
    size() {
      return this.length;
    };
  
    head() {
      return this.head;
    };
  
    add(element) {
      const node = new Node(element);
  
      if (this.head === null) {
        this.head = node;
      } else {
        let currentNode = this.head;
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        currentNode.next = node;
      }
      this.length++;
    };
  
    remove(element) {
      let currentNode = this.head;
      let previousNode;
      let numberOfLoops = 0;
      if (currentNode.element === element) {
        this.head = currentNode.next;
      } else {
        while (currentNode.element !== element) {
          previousNode = currentNode;
          currentNode = currentNode.next;
          numberOfLoops++;
        }
        if (numberOfLoops < length) {
          previousNode.next = currentNode.next;
          length--;
        } else {
          return;
        }
  
      }
  
    };
  
    isEmpty() {
      return Boolean(!this.head);
    }
  
    indexOf(element) {
      let index = 0;
      let currentElement = this.head;
      if (currentElement.element === element) {
        return index;
      } else {
        while (currentElement && currentElement.element != element) {
          currentElement = currentElement.next;
          index++;
          // When element is not found in the linked list
          if (currentElement.element != element && currentElement.next === null) {
            return -1
          }
        }
      }
      return index
    }
  
    elementAt(index) {
      let currentElement = this.head;
      let counter = 0;
      while (currentElement) {
        if (counter === index) {
          return currentElement.element;
        }
        counter++;
        currentElement = currentElement.next;
      }
      return undefined;
    }
  }