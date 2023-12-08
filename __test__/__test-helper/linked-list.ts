import { DoublyLinkedListNode } from '../../src/data-structures/doubly-linked-list.js';

import { SingleLinkedListNode } from '../../src/data-structures/single-linked-list.js';

export type LinkedListNodeTypes<T> =
  | SingleLinkedListNode<T>
  | DoublyLinkedListNode<T>;

export function getTail<T>(head: LinkedListNodeTypes<T> | null) {
  let tail = null;
  let currentNode = head;

  while (currentNode) {
    if (currentNode.next === null) {
      tail = currentNode;
    }

    currentNode = currentNode.next;
  }

  return tail;
}

export function initSingleLinkedListNodes<T>(...values: T[]) {
  let head: SingleLinkedListNode<T> | null = null;

  for (let i = values.length - 1; i >= 0; i -= 1) {
    if (head === null) {
      head = new SingleLinkedListNode(values[i], null);
    } else {
      head = new SingleLinkedListNode(values[i], head);
    }
  }

  return {
    head,
    tail: getTail(head),
  };
}

export function initDoublyLinkedListNodes<T>(...values: T[]) {
  let head: DoublyLinkedListNode<T> | null = null;

  for (let i = values.length - 1; i >= 0; i -= 1) {
    if (head === null) {
      head = new DoublyLinkedListNode(null, values[i], null);
    } else {
      const newNode = new DoublyLinkedListNode(null, values[i], head);
      head.prev = newNode;
      head = head.prev;
    }
  }

  return {
    head,
    tail: getTail(head) as typeof head,
  };
}
