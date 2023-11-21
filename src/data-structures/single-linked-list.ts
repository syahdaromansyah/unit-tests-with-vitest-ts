export class SingleLinkedListNode<T> {
  data: T;
  next: SingleLinkedListNode<T> | null;

  constructor(data: T, next: SingleLinkedListNode<T> | null) {
    this.data = data;
    this.next = next;
  }
}

export class SingleLinkedList<T> {
  protected head: SingleLinkedListNode<T> | null;
  protected tail: SingleLinkedListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

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
    const newNode = new SingleLinkedListNode(data, this.head);
    this.head = newNode;

    if (this.tail === null) {
      this.tail = newNode;
    }
  }

  appendEnd(data: T) {
    if (this.tail === null) {
      this.appendStart(data);
    } else {
      const newNode = new SingleLinkedListNode(data, null);
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  appendAfterValue(data: T, value: T) {
    let currentNode = this.head;

    if (currentNode === null) {
      this.appendStart(data);
      return;
    }

    while (currentNode) {
      if (currentNode === this.head && currentNode.data === value) {
        currentNode.next = new SingleLinkedListNode(data, currentNode.next);
        break;
      }

      if (currentNode.next === null) {
        this.appendEnd(data);
        break;
      }

      if (currentNode.next.data === value) {
        currentNode.next.next = new SingleLinkedListNode(
          data,
          currentNode.next.next,
        );

        this.tail = currentNode.next.next.next
          ? this.tail
          : currentNode.next.next;
        break;
      }

      currentNode = currentNode.next;
    }
  }

  deleteHead() {
    if (this.head === null) return null;

    const deletedHeadData = this.head.data;
    this.head = this.head.next;

    return deletedHeadData;
  }

  deleteTail() {
    let currentNode = this.head;
    let deletedTailData: T | null = null;
    while (currentNode) {
      if (currentNode.next === null) {
        deletedTailData = currentNode.data;
        this.head = null;
        this.tail = null;
        break;
      }

      if (currentNode.next.next === null) {
        deletedTailData = currentNode.next.data;
        currentNode.next = null;
        this.tail = currentNode;
        break;
      }

      currentNode = currentNode.next;
    }

    return deletedTailData;
  }

  deleteValue(value: T) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode === this.head && currentNode.data === value) {
        this.head = currentNode.next;
        this.tail = currentNode.next ? this.tail : null;
        return value;
      }

      if (currentNode.next?.data === value) {
        this.tail = currentNode.next.next ? this.tail : currentNode;
        currentNode.next = currentNode.next.next;
        return value;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  contain(value: T) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === value) {
        return true;
      }

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
}
