class LinkedNode {
  value: string;
  nextNode: LinkedNode | null;

  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

}

class LinkedList {
  head: null | LinkedNode;

  constructor() {
    this.head = null
  }

  append(value) {
    const node = new LinkedNode(value);

    if (this.head === null) {
      this.head = node;
      return this.head;
    }

    let tail = this.head;

    while (tail.nextNode !== null) {
      tail = tail.nextNode
    }

    tail.nextNode = node;
  }

  prepend(value) {
    const node = new LinkedNode(value);

    if (this.head === null) {
      this.head = node;
      return this.head;
    }

    node.nextNode = this.head;
    this.head = node
  }

  size() {
    let size = 1;
    if (this.head === null) {
      return 0
    }
    let tail = this.head;
    while (tail.nextNode !== null) {
      tail = tail.nextNode;
      size++
    }

    return size
  }

  listHead() {
    return this.head
  }

  listTail() {
    if (this.head === null) {
      return this.head
    }

    let tail = this.head;
    while (tail.nextNode !== null) {
      tail = tail.nextNode
    }

    return tail;
  }

  atIndex(index) {
    if (index === 0) {
      return this.head
    }

    let find = this.head;
    for (let i = 1; i <= index; i++) {
      find = find.nextNode
    }

    if (find === null) {
      return -1
    }

    return find
  }

  popList() {
    if (this.head.nextNode === null) {
      return
    }

    let current = this.head;
    let next = this.head.nextNode;

    while (next.nextNode !== null) {
      current = next;
      next = next.nextNode;
    }

    current.nextNode = null;
    return next;

  }

  contains(value) {

    let current = this.head;
    let next = this.head.nextNode;
    while (current.value !== value) {
      current = next;
      next = next.nextNode;
      if (!current.hasOwnProperty("value")) {
        return false
      }

    }

    return true;

  }

  find(value) {
    let index = 0;
    if (this.head.value === value) {
      return 0
    }

    let current = this.head;
    let next = this.head.nextNode;
    while (current.value !== value) {
      index++;
      current = next;
      next = next.nextNode;
      if (!current.hasOwnProperty("value")) {
        return -1;
      }

    }

    return index;
  }

  toString() {
    let tail = this.head;
    let text = `(${this.head.value}) => `;
    while (tail.nextNode !== null) {
      tail = tail.nextNode;
      text += `(${tail.value}) => `
    }

    text += "null";
    return text;
  }

}


// const list = new LinkedList();
//
//
// list.append("hello");
// list.append("goodbye");
// list.append("hello2");
// list.prepend("goodbye2");
// list.listHead();