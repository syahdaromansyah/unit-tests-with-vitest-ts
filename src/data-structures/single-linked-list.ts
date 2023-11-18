class SingleLinkedListNode<T> {
  data: T;
  next: SingleLinkedListNode<T> | null;

  constructor(data: T, next: SingleLinkedListNode<T> | null) {
    this.data = data;
    this.next = next;
  }
}

export class SingleLinkedList<T> {
  private head: SingleLinkedListNode<T> | null;
  private tail: SingleLinkedListNode<T> | null;

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
    const newLinkedListNode = new SingleLinkedListNode(data, this.head);
    this.head = newLinkedListNode;

    if (this.tail === null) {
      this.tail = newLinkedListNode;
    }
  }

  appendEnd(data: T) {
    if (this.tail === null) {
      this.appendStart(data);
    } else {
      const newLinkedListNode = new SingleLinkedListNode(data, null);
      this.tail.next = newLinkedListNode;
      this.tail = newLinkedListNode;
    }
  }

  appendAfterValue(data: T, value: T) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === value) {
        currentNode.next = new SingleLinkedListNode(data, currentNode.next);
        break;
      }

      if (currentNode.next) {
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
      } else {
        this.appendEnd(data);
        break;
      }

      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      this.appendStart(data);
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
      if (currentNode.next) {
        if (currentNode.next.next === null) {
          deletedTailData = currentNode.next.data;
          currentNode.next = null;
          this.tail = currentNode;
          return deletedTailData;
        }
      } else {
        deletedTailData = currentNode.data;
        this.head = null;
        this.tail = null;
      }

      currentNode = currentNode.next;
    }

    return deletedTailData;
  }

  deleteValue(value: T) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === value) {
        this.head = currentNode.next;
        this.tail = currentNode.next ? this.tail : null;
        return value;
      }

      if (currentNode.next) {
        if (currentNode.next.data === value) {
          this.tail = currentNode.next.next ? this.tail : currentNode;
          currentNode.next = currentNode.next.next;
          return value;
        }
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
