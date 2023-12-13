export class DoublyLinkedListNode<T> {
  prev: DoublyLinkedListNode<T> | null;
  data: T;
  next: DoublyLinkedListNode<T> | null;

  constructor(
    prev: DoublyLinkedListNode<T> | null,
    data: T,
    next: DoublyLinkedListNode<T> | null,
  ) {
    this.prev = prev;
    this.data = data;
    this.next = next;
  }
}

export class DoublyLinkedList<T> {
  protected head: DoublyLinkedListNode<T> | null = null;
  protected tail: DoublyLinkedListNode<T> | null = null;

  get length() {
    let length = 0;
    let currentNode = this.head;

    while (currentNode) {
      length += 1;
      currentNode = currentNode.next;
    }

    return length;
  }

  appendStart(data: T) {
    const newNode = new DoublyLinkedListNode(null, data, this.head);

    if (this.head !== null) this.head.prev = newNode;

    this.head = newNode;

    if (this.tail === null) this.tail = this.head;
  }

  appendEnd(data: T) {
    if (this.head === null) return this.appendStart(data);

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.next === null) {
        const newNode = new DoublyLinkedListNode(currentNode, data, null);

        currentNode.next = newNode;
        this.tail = currentNode.next;

        break;
      }

      currentNode = currentNode.next;
    }
  }

  appendAfterHead(data: T) {
    if (this.head === null) return this.appendStart(data);

    const newNode = new DoublyLinkedListNode(this.head, data, this.head.next);

    if (this.head.next) this.head.next.prev = newNode;
    else this.tail = newNode;

    this.head.next = newNode;
  }

  appendBeforeTail(data: T) {
    if (this.head === null || this.tail === null) return this.appendStart(data);

    let currentNode: DoublyLinkedListNode<T> | null = this.head;

    while (currentNode) {
      if (currentNode.next === null) {
        if (currentNode.prev === null) return this.appendStart(data);

        const newNode = new DoublyLinkedListNode(
          currentNode.prev,
          data,
          currentNode,
        );

        currentNode.prev.next = newNode;
        currentNode.prev = newNode;
      }

      currentNode = currentNode.next;
    }
  }

  appendAfterValue(data: T, value: T) {
    if (this.head === null || this.tail === null) return this.appendStart(data);

    let currentNode: DoublyLinkedListNode<T> | null = this.head;

    while (currentNode) {
      if (currentNode.next === null) return this.appendEnd(data);

      if (currentNode.data === value) {
        const newNode = new DoublyLinkedListNode(
          currentNode,
          data,
          currentNode.next,
        );

        currentNode.next.prev = newNode;
        currentNode.next = newNode;

        break;
      }

      currentNode = currentNode.next;
    }
  }

  deleteHead() {
    let deletedHeadData = null;

    if (this.head === null) return deletedHeadData;

    if (this.head.next) this.head.next.prev = null;
    else this.tail = null;

    deletedHeadData = this.head.data;
    this.head = this.head.next;

    return deletedHeadData;
  }

  deleteTail() {
    if (this.tail === null) return null;

    const deletedTailData = this.tail.data;

    if (this.tail.prev === null) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }

    return deletedTailData;
  }

  deleteValue(value: T) {
    if (this.head === null || this.tail === null) return null;

    let currentNode: DoublyLinkedListNode<T> | null = this.head;

    while (currentNode) {
      if (currentNode.data === value) {
        if (currentNode.prev) currentNode.prev.next = currentNode.next;
        else this.head = currentNode.next;

        if (currentNode.next) currentNode.next.prev = currentNode.prev;
        else this.tail = currentNode.prev;

        return value;
      }

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
    const result = [];
    let currentNode = this.head;

    while (currentNode) {
      result.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return result;
  }

  reverse() {
    let updatedTempNodes: DoublyLinkedListNode<T> | null = null;
    let currentNode: DoublyLinkedListNode<T> | null = this.head;

    while (currentNode) {
      if (currentNode.prev === null) {
        updatedTempNodes = currentNode;
        currentNode = currentNode.next;

        updatedTempNodes.prev = updatedTempNodes.next;
        updatedTempNodes.next = null;

        this.tail = updatedTempNodes;

        continue;
      }

      const updatedNodes = currentNode;

      currentNode = currentNode.next;

      updatedNodes.prev = updatedNodes.next;
      updatedNodes.next = updatedTempNodes;

      updatedTempNodes = updatedNodes;

      if (currentNode === null) this.head = updatedTempNodes;
    }
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
