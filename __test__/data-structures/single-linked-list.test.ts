import { afterEach, describe, expect, test } from 'vitest';

import {
  SingleLinkedList,
  SingleLinkedListNode,
} from '../../src/data-structures/single-linked-list.js';

import {
  getTail,
  type LinkedListNodeTypes,
} from '../__test-helper/linked-list.js';

describe('A Single Linked List Data Structure', () => {
  const singleLinkedList = new SingleLinkedList<string>();

  let mockedNodes: SingleLinkedListNode<string> | null = null;
  let expectedTail: LinkedListNodeTypes<string> | null = null;

  afterEach(() => {
    singleLinkedList['head'] = null;
    singleLinkedList['tail'] = null;
  });

  test('should append at the first position', () => {
    singleLinkedList.appendStart('Foo');

    mockedNodes = initNodes('Foo').head;

    expect(singleLinkedList.length).toBe(1);

    expect(singleLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(singleLinkedList['head']);

    expect(singleLinkedList['tail']).toBe(expectedTail);
    expect(singleLinkedList['tail']).toEqual(expectedTail);
    expect(singleLinkedList['tail']).toEqual(getTail(mockedNodes));

    singleLinkedList.appendStart('Bar');

    mockedNodes = initNodes('Bar', 'Foo').head;

    expect(singleLinkedList.length).toBe(2);

    expect(singleLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(singleLinkedList['head']);

    expect(singleLinkedList['tail']).toBe(expectedTail);
    expect(singleLinkedList['tail']).toEqual(expectedTail);
    expect(singleLinkedList['tail']).toEqual(getTail(mockedNodes));

    singleLinkedList.appendStart('Ray');

    mockedNodes = initNodes('Ray', 'Bar', 'Foo').head;

    expect(singleLinkedList.length).toBe(3);

    expect(singleLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(singleLinkedList['head']);

    expect(singleLinkedList['tail']).toBe(expectedTail);
    expect(singleLinkedList['tail']).toEqual(expectedTail);
    expect(singleLinkedList['tail']).toEqual(getTail(mockedNodes));
  });

  test('should append at the last position', () => {
    singleLinkedList.appendEnd('Foo');

    mockedNodes = initNodes('Foo').head;

    expect(singleLinkedList.length).toBe(1);

    expect(singleLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(singleLinkedList['head']);

    expect(singleLinkedList['tail']).toBe(expectedTail);
    expect(singleLinkedList['tail']).toEqual(expectedTail);
    expect(singleLinkedList['tail']).toEqual(getTail(mockedNodes));

    singleLinkedList.appendEnd('Bar');

    mockedNodes = initNodes('Foo', 'Bar').head;

    expect(singleLinkedList.length).toBe(2);

    expect(singleLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(singleLinkedList['head']);

    expect(singleLinkedList['tail']).toBe(expectedTail);
    expect(singleLinkedList['tail']).toEqual(expectedTail);
    expect(singleLinkedList['tail']).toEqual(getTail(mockedNodes));

    singleLinkedList.appendEnd('Ray');

    mockedNodes = initNodes('Foo', 'Bar', 'Ray').head;

    expect(singleLinkedList.length).toBe(3);

    expect(singleLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(singleLinkedList['head']);

    expect(singleLinkedList['tail']).toBe(expectedTail);
    expect(singleLinkedList['tail']).toEqual(expectedTail);
    expect(singleLinkedList['tail']).toEqual(getTail(mockedNodes));
  });

  test('should append at the first or last position', () => {
    singleLinkedList.appendStart('Foo');
    singleLinkedList.appendStart('Bar');

    singleLinkedList.appendEnd('Ray');
    singleLinkedList.appendEnd('Zip');

    singleLinkedList.appendStart('Vin');
    singleLinkedList.appendStart('Gin');

    mockedNodes = initNodes('Gin', 'Vin', 'Bar', 'Foo', 'Ray', 'Zip').head;

    expect(singleLinkedList.length).toBe(6);

    expect(singleLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(singleLinkedList['head']);

    expect(singleLinkedList['tail']).toBe(expectedTail);
    expect(singleLinkedList['tail']).toEqual(expectedTail);
    expect(singleLinkedList['tail']).toEqual(getTail(mockedNodes));
  });

  describe('Append After The First Specified Node', () => {
    test('should append at the first position when the linked list is empty', () => {
      singleLinkedList.appendAfterValue('Foo', 'Bar');

      mockedNodes = initNodes('Foo').head;

      expect(singleLinkedList.length).toBe(1);

      expect(singleLinkedList['head']).toEqual(mockedNodes);

      expect(singleLinkedList['tail']).toBe(singleLinkedList['head']);
      expect(singleLinkedList['tail']).toEqual(singleLinkedList['head']);
      expect(singleLinkedList['tail']).toEqual(getTail(mockedNodes));
    });

    test('should append after the specified node', () => {
      const { head, tail } = initNodes('Foo', 'Bar', 'Ray');

      singleLinkedList['head'] = head;
      singleLinkedList['tail'] = tail;

      singleLinkedList.appendAfterValue('Vin', 'Foo');
      singleLinkedList.appendAfterValue('Zip', 'Vin');
      singleLinkedList.appendAfterValue('Gin', 'Ray');

      mockedNodes = initNodes('Foo', 'Vin', 'Zip', 'Bar', 'Ray', 'Gin').head;

      expect(singleLinkedList.length).toBe(6);

      expect(singleLinkedList['head']).toEqual(mockedNodes);

      expectedTail = getTail(singleLinkedList['head']);

      expect(singleLinkedList['tail']).toBe(expectedTail);
      expect(singleLinkedList['tail']).toEqual(expectedTail);
      expect(singleLinkedList['tail']).toEqual(getTail(mockedNodes));
    });

    test('should append at the last position when the after specified node is not exist', () => {
      const { head, tail } = initNodes('Foo', 'Bar', 'Ray');

      singleLinkedList['head'] = head;
      singleLinkedList['tail'] = tail;

      singleLinkedList.appendAfterValue('Vin', 'Zip');

      mockedNodes = initNodes('Foo', 'Bar', 'Ray', 'Vin').head;

      expect(singleLinkedList.length).toBe(4);

      expect(singleLinkedList['head']).toEqual(mockedNodes);

      expectedTail = getTail(singleLinkedList['head']);

      expect(singleLinkedList['tail']).toBe(expectedTail);
      expect(singleLinkedList['tail']).toEqual(expectedTail);
      expect(singleLinkedList['tail']).toEqual(getTail(mockedNodes));
    });
  });

  describe('Delete The First Node', () => {
    test('should ignore when the data is empty and return null', () => {
      expect(singleLinkedList.deleteHead()).toBeNull();
      expect(singleLinkedList.length).toBe(0);

      expect(singleLinkedList['head']).toBeNull();
      expect(singleLinkedList['tail']).toBeNull();
    });

    test('should delete the first node and return the deleted node data', () => {
      const { head, tail } = initNodes('Foo', 'Bar', 'Ray');

      singleLinkedList['head'] = head;
      singleLinkedList['tail'] = tail;

      expect(singleLinkedList.deleteHead()).toBe('Foo');

      mockedNodes = initNodes('Bar', 'Ray').head;

      expect(singleLinkedList.length).toBe(2);

      expect(singleLinkedList['head']).toEqual(mockedNodes);

      expectedTail = getTail(singleLinkedList['head']);

      expect(singleLinkedList['tail']).toBe(expectedTail);
      expect(singleLinkedList['tail']).toEqual(expectedTail);
      expect(singleLinkedList['tail']).toEqual(getTail(mockedNodes));

      expect(singleLinkedList.deleteHead()).toBe('Bar');

      mockedNodes = initNodes('Ray').head;

      expect(singleLinkedList.length).toBe(1);

      expect(singleLinkedList['head']).toEqual(mockedNodes);

      expectedTail = getTail(singleLinkedList['head']);

      expect(singleLinkedList['tail']).toBe(expectedTail);
      expect(singleLinkedList['tail']).toEqual(expectedTail);
      expect(singleLinkedList['tail']).toEqual(getTail(mockedNodes));

      expect(singleLinkedList.deleteHead()).toBe('Ray');

      expect(singleLinkedList.length).toBe(0);

      expect(singleLinkedList['head']).toBeNull();
      expect(singleLinkedList['tail']).toBeNull();

      expect(singleLinkedList.deleteHead()).toBeNull();

      expect(singleLinkedList.length).toBe(0);

      expect(singleLinkedList['head']).toBeNull();
      expect(singleLinkedList['tail']).toBeNull();
    });
  });

  describe('Delete The Last Node', () => {
    test('should ignore when the data is empty and return null', () => {
      expect(singleLinkedList.deleteTail()).toBeNull();
      expect(singleLinkedList.length).toBe(0);

      expect(singleLinkedList['head']).toBeNull();
      expect(singleLinkedList['tail']).toBeNull();
    });

    test('should delete the last node and return the deleted node data', () => {
      const { head, tail } = initNodes('Foo', 'Bar', 'Ray');

      singleLinkedList['head'] = head;
      singleLinkedList['tail'] = tail;

      expect(singleLinkedList.deleteTail()).toBe('Ray');

      mockedNodes = initNodes('Foo', 'Bar').head;

      expect(singleLinkedList.length).toBe(2);

      expect(singleLinkedList['head']).toEqual(mockedNodes);

      expectedTail = getTail(singleLinkedList['head']);

      expect(singleLinkedList['tail']).toBe(expectedTail);
      expect(singleLinkedList['tail']).toEqual(expectedTail);
      expect(singleLinkedList['tail']).toEqual(getTail(mockedNodes));

      expect(singleLinkedList.deleteTail()).toBe('Bar');

      mockedNodes = initNodes('Foo').head;

      expect(singleLinkedList.length).toBe(1);

      expect(singleLinkedList['head']).toEqual(mockedNodes);

      expectedTail = getTail(singleLinkedList['head']);

      expect(singleLinkedList['tail']).toBe(expectedTail);
      expect(singleLinkedList['tail']).toEqual(expectedTail);
      expect(singleLinkedList['tail']).toEqual(getTail(mockedNodes));

      expect(singleLinkedList.deleteTail()).toBe('Foo');

      expect(singleLinkedList.length).toBe(0);

      expect(singleLinkedList['head']).toBeNull();
      expect(singleLinkedList['tail']).toBeNull();

      expect(singleLinkedList.deleteTail()).toBeNull();

      expect(singleLinkedList.length).toBe(0);

      expect(singleLinkedList['head']).toBeNull();
      expect(singleLinkedList['tail']).toBeNull();
    });
  });

  describe('Delete The Specific Node', () => {
    test('should ignore when the data is empty and return null', () => {
      expect(singleLinkedList.deleteValue('Foo')).toBeNull();
      expect(singleLinkedList.length).toBe(0);

      expect(singleLinkedList['head']).toBeNull();
      expect(singleLinkedList['tail']).toBeNull();
    });

    test('should delete the specific node and return the deleted node', () => {
      const { head, tail } = initNodes('Foo', 'Bar', 'Ray');

      singleLinkedList['head'] = head;
      singleLinkedList['tail'] = tail;

      expect(singleLinkedList.deleteValue('Bar')).toBe('Bar');

      mockedNodes = initNodes('Foo', 'Ray').head;

      expect(singleLinkedList.length).toBe(2);

      expect(singleLinkedList['head']).toEqual(mockedNodes);

      expectedTail = getTail(singleLinkedList['head']);

      expect(singleLinkedList['tail']).toBe(expectedTail);
      expect(singleLinkedList['tail']).toEqual(expectedTail);
      expect(singleLinkedList['tail']).toEqual(getTail(mockedNodes));

      expect(singleLinkedList.deleteValue('Foo')).toBe('Foo');

      mockedNodes = initNodes('Ray').head;

      expect(singleLinkedList.length).toBe(1);

      expect(singleLinkedList['head']).toEqual(mockedNodes);

      expectedTail = getTail(singleLinkedList['head']);

      expect(singleLinkedList['tail']).toBe(expectedTail);
      expect(singleLinkedList['tail']).toEqual(expectedTail);
      expect(singleLinkedList['tail']).toEqual(getTail(mockedNodes));

      expect(singleLinkedList.deleteValue('Ray')).toBe('Ray');

      expect(singleLinkedList.length).toBe(0);

      expect(singleLinkedList['head']).toBeNull();
      expect(singleLinkedList['tail']).toBeNull();

      expect(singleLinkedList.deleteValue('Vin')).toBeNull();
      expect(singleLinkedList.deleteValue('Gin')).toBeNull();

      expect(singleLinkedList.length).toBe(0);

      expect(singleLinkedList['head']).toBeNull();
      expect(singleLinkedList['tail']).toBeNull();
    });
  });

  test('should ignore when deleting the node on the empty linked list', () => {
    expect(singleLinkedList.deleteHead()).toBeNull();
    expect(singleLinkedList.deleteHead()).toBeNull();

    expect(singleLinkedList.length).toBe(0);

    expect(singleLinkedList.deleteValue('Foo')).toBeNull();
    expect(singleLinkedList.deleteValue('Bar')).toBeNull();

    expect(singleLinkedList.length).toBe(0);

    expect(singleLinkedList.deleteTail()).toBeNull();
    expect(singleLinkedList.deleteTail()).toBeNull();

    expect(singleLinkedList.length).toBe(0);

    expect(singleLinkedList['head']).toBeNull();
    expect(singleLinkedList['tail']).toBeNull();
  });

  test('should return true when the data is exist', () => {
    const data = ['Foo', 'Bar', 'Ray'];
    const { head, tail } = initNodes(...data);

    singleLinkedList['head'] = head;
    singleLinkedList['tail'] = tail;

    data.forEach((value) => {
      expect(singleLinkedList.contain(value)).toBeTruthy();
    });
  });

  test('should return false when the data is not exist', () => {
    const { head, tail } = initNodes('Foo', 'Bar', 'Ray');

    singleLinkedList['head'] = head;
    singleLinkedList['tail'] = tail;

    expect(singleLinkedList.contain('Zip')).toBeFalsy();
  });

  test('should convert to array form', () => {
    const data = ['Foo', 'Bar', 'Ray'];
    const { head, tail } = initNodes(...data);

    singleLinkedList['head'] = head;
    singleLinkedList['tail'] = tail;

    expect(singleLinkedList.toArray()).toEqual(data);
  });

  test('should clear all data', () => {
    const { head, tail } = initNodes('Foo', 'Bar', 'Ray');

    singleLinkedList['head'] = head;
    singleLinkedList['tail'] = tail;

    singleLinkedList.clear();

    expect(singleLinkedList.length).toBe(0);

    expect(singleLinkedList['head']).toBeNull();
    expect(singleLinkedList['tail']).toBeNull();
  });

  test('should do reverse all nodes', () => {
    const { head, tail } = initNodes('Foo', 'Bar', 'Ray', 'Vin');

    singleLinkedList['head'] = head;
    singleLinkedList['tail'] = tail;

    singleLinkedList.reverse();

    mockedNodes = initNodes('Vin', 'Ray', 'Bar', 'Foo').head;

    expect(singleLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(singleLinkedList['head']);

    expect(singleLinkedList['tail']).toBe(expectedTail);
    expect(singleLinkedList['tail']).toEqual(expectedTail);
    expect(singleLinkedList['tail']).toEqual(getTail(mockedNodes));
  });

  test('should do an iterable operation', () => {
    const data = ['Foo', 'Bar', 'Ray', 'Vin'];
    const { head, tail } = initNodes(...data);

    singleLinkedList['head'] = head;
    singleLinkedList['tail'] = tail;

    let i = 0;
    for (const value of singleLinkedList) {
      expect(value).toBe(data[i]);
      i += 1;
    }
  });
});

function initNodes<T>(...values: T[]) {
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
    tail: getTail(head) as typeof head,
  };
}
