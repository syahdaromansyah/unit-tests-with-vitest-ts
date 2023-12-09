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
