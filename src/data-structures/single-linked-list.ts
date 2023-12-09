export class SingleLinkedListNode<T> {
  data: T;
  next: SingleLinkedListNode<T> | null;

  constructor(data: T, next: SingleLinkedListNode<T> | null) {
    this.data = data;
    this.next = next;
  }
}

export class SingleLinkedList<T> {
  protected head: SingleLinkedListNode<T> | null = null;
  protected tail: SingleLinkedListNode<T> | null = null;

  get length() {
    let currentNode = this.head;
    let length = 0;

    while (currentNode) {
      length += 1;
      currentNode = currentNode.next;
    }

    return length;
  }

  appendStart(data: T) {
    const newNode = new SingleLinkedListNode(data, this.head);

    this.head = newNode;

    if (this.tail === null) this.tail = newNode;
  }

  appendEnd(data: T) {
    if (this.tail === null) return this.appendStart(data);

    const newNode = new SingleLinkedListNode(data, null);

    this.tail.next = newNode;
    this.tail = newNode;
  }

  appendAfterValue(data: T, value: T) {
    if (this.head === null || this.tail === null) return this.appendStart(data);

    let currentNode: SingleLinkedListNode<T> | null = this.head;

    while (currentNode) {
      if (currentNode.next === null) return this.appendEnd(data);

      if (currentNode.data === value) {
        currentNode.next = new SingleLinkedListNode(data, currentNode.next);
        break;
      }

      currentNode = currentNode.next;
    }
  }

  deleteHead() {
    if (this.head === null) return null;

    const deletedHeadData = this.head.data;

    if (this.head.next === null) this.tail = null;

    this.head = this.head.next;

    return deletedHeadData;
  }

  deleteTail() {
    let deletedTailData: T | null = null;

    if (this.head === null || this.tail === null) return deletedTailData;

    let prevNode: SingleLinkedListNode<T> | null = null;
    let currentNode: SingleLinkedListNode<T> | null = this.head;

    while (currentNode) {
      if (currentNode.next === null) {
        deletedTailData = currentNode.data;

        if (prevNode === null) {
          this.clear();
          return deletedTailData;
        }

        prevNode.next = null;
        this.tail = prevNode;

        return deletedTailData;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }

  deleteValue(value: T) {
    if (this.head === null || this.tail === null) return null;

    let prevNode: SingleLinkedListNode<T> | null = null;
    let currentNode: SingleLinkedListNode<T> | null = this.head;

    while (currentNode) {
      if (currentNode.data === value) {
        if (prevNode === null) return this.deleteHead();

        if (currentNode.next === null) this.tail = prevNode;

        prevNode.next = currentNode.next;
        return value;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }

  contain(value: T) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  }

  toArray() {
    const result: T[] = [];
    let currentNode = this.head;

    while (currentNode) {
      result.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return result;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  *[Symbol.iterator]() {
    let currentNode = this.head;

    while (currentNode) {
      yield currentNode.data;
      currentNode = currentNode.next;
    }
  }
}
