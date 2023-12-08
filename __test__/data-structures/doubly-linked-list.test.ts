import { afterEach, describe, expect, test } from 'vitest';

import {
  DoublyLinkedList,
  DoublyLinkedListNode,
} from '../../src/data-structures/doubly-linked-list.js';

import {
  getTail,
  initDoublyLinkedListNodes as initNodes,
  type LinkedListNodeTypes,
} from '../__test-helper/linked-list.js';

describe('A Doubly Linked List Data Structure', () => {
  const doublyLinkedList = new DoublyLinkedList<string>();

  let mockedNodes: DoublyLinkedListNode<string> | null = null;
  let expectedTail: LinkedListNodeTypes<string> | null = null;

  afterEach(() => {
    doublyLinkedList['head'] = null;
    doublyLinkedList['tail'] = null;
  });

  test('should append at the first position', () => {
    mockedNodes = initNodes('Foo').head;

    doublyLinkedList.appendStart('Foo');

    expect(doublyLinkedList['head']).toEqual(mockedNodes);

    expect(doublyLinkedList.length).toBe(1);

    expectedTail = getTail(doublyLinkedList['head']);

    expect(doublyLinkedList['tail']).toBe(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));

    mockedNodes = initNodes('Bar', 'Foo').head;

    doublyLinkedList.appendStart('Bar');

    expect(doublyLinkedList.length).toBe(2);

    expect(doublyLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(doublyLinkedList['head']);

    expect(doublyLinkedList['tail']).toBe(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));

    mockedNodes = initNodes('Ray', 'Bar', 'Foo').head;

    doublyLinkedList.appendStart('Ray');

    expect(doublyLinkedList['head']).toEqual(mockedNodes);

    expect(doublyLinkedList.length).toBe(3);

    expectedTail = getTail(doublyLinkedList['head']);

    expect(doublyLinkedList['tail']).toBe(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));
  });

  test('should append at the last position', () => {
    mockedNodes = initNodes('Foo').head;

    doublyLinkedList.appendEnd('Foo');

    expect(doublyLinkedList.length).toBe(1);

    expect(doublyLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(doublyLinkedList['head']);

    expect(doublyLinkedList['tail']).toBe(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));

    mockedNodes = initNodes('Foo', 'Bar').head;

    doublyLinkedList.appendEnd('Bar');

    expect(doublyLinkedList.length).toBe(2);

    expect(doublyLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(doublyLinkedList['head']);

    expect(doublyLinkedList['tail']).toBe(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));

    mockedNodes = initNodes('Foo', 'Bar', 'Ray').head;

    doublyLinkedList.appendEnd('Ray');

    expect(doublyLinkedList.length).toBe(3);

    expect(doublyLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(doublyLinkedList['head']);

    expect(doublyLinkedList['tail']).toBe(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));
  });

  test('should append at the first or the last position', () => {
    doublyLinkedList.appendStart('Foo');
    doublyLinkedList.appendStart('Bar');

    doublyLinkedList.appendEnd('Ray');
    doublyLinkedList.appendEnd('Zip');

    doublyLinkedList.appendStart('Vin');
    doublyLinkedList.appendStart('Gin');

    mockedNodes = initNodes('Gin', 'Vin', 'Bar', 'Foo', 'Ray', 'Zip').head;

    expect(doublyLinkedList.length).toBe(6);

    expect(doublyLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(doublyLinkedList['head']);

    expect(doublyLinkedList['tail']).toBe(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));
  });

  test('should append after the head node', () => {
    doublyLinkedList.appendAfterHead('Foo');

    mockedNodes = initNodes('Foo').head;

    expect(doublyLinkedList.length).toBe(1);

    expect(doublyLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(doublyLinkedList['head']);

    expect(doublyLinkedList['tail']).toBe(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));

    doublyLinkedList.appendAfterHead('Bar');

    mockedNodes = initNodes('Foo', 'Bar').head;

    expect(doublyLinkedList.length).toBe(2);

    expect(doublyLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(doublyLinkedList['head']);

    expect(doublyLinkedList['tail']).toBe(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));

    doublyLinkedList.appendAfterHead('Ray');

    mockedNodes = initNodes('Foo', 'Ray', 'Bar').head;

    expect(doublyLinkedList.length).toBe(3);

    expect(doublyLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(doublyLinkedList['head']);

    expect(doublyLinkedList['tail']).toBe(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));

    doublyLinkedList.appendAfterHead('Vin');

    mockedNodes = initNodes('Foo', 'Vin', 'Ray', 'Bar').head;

    expect(doublyLinkedList.length).toBe(4);

    expect(doublyLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(doublyLinkedList['head']);

    expect(doublyLinkedList['tail']).toBe(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));
  });

  test('should append before the tail node', () => {
    doublyLinkedList.appendBeforeTail('Foo');

    mockedNodes = initNodes('Foo').head;

    expect(doublyLinkedList.length).toBe(1);

    expect(doublyLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(doublyLinkedList['head']);

    expect(doublyLinkedList['tail']).toBe(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));

    doublyLinkedList.appendBeforeTail('Bar');

    mockedNodes = initNodes('Bar', 'Foo').head;

    expect(doublyLinkedList.length).toBe(2);

    expect(doublyLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(doublyLinkedList['head']);

    expect(doublyLinkedList['tail']).toBe(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));

    doublyLinkedList.appendBeforeTail('Ray');

    mockedNodes = initNodes('Bar', 'Ray', 'Foo').head;

    expect(doublyLinkedList.length).toBe(3);

    expect(doublyLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(doublyLinkedList['head']);

    expect(doublyLinkedList['tail']).toBe(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));

    doublyLinkedList.appendBeforeTail('Vin');

    mockedNodes = initNodes('Bar', 'Ray', 'Vin', 'Foo').head;

    expect(doublyLinkedList.length).toBe(4);

    expect(doublyLinkedList['head']).toEqual(mockedNodes);

    expectedTail = getTail(doublyLinkedList['head']);

    expect(doublyLinkedList['tail']).toBe(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(expectedTail);
    expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));
  });

  describe('Append After The First Specified Node', () => {
    test('should append at the first position when the linked list is empty', () => {
      doublyLinkedList.appendAfterValue('Foo', 'Bar');

      mockedNodes = initNodes('Foo').head;

      expect(doublyLinkedList.length).toBe(1);

      expect(doublyLinkedList['head']).toEqual(mockedNodes);

      expect(doublyLinkedList['tail']).toBe(doublyLinkedList['head']);
      expect(doublyLinkedList['tail']).toEqual(doublyLinkedList['head']);
      expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));
    });

    test('should append after the specified node', () => {
      const { head, tail } = initNodes('Foo', 'Bar', 'Ray');

      doublyLinkedList['head'] = head;
      doublyLinkedList['tail'] = tail;

      doublyLinkedList.appendAfterValue('Vin', 'Foo');
      doublyLinkedList.appendAfterValue('Zip', 'Vin');
      doublyLinkedList.appendAfterValue('Gin', 'Ray');

      mockedNodes = initNodes('Foo', 'Vin', 'Zip', 'Bar', 'Ray', 'Gin').head;

      expect(doublyLinkedList.length).toBe(6);

      expect(doublyLinkedList['head']).toEqual(mockedNodes);

      expectedTail = getTail(doublyLinkedList['head']);

      expect(doublyLinkedList['tail']).toBe(expectedTail);
      expect(doublyLinkedList['tail']).toEqual(expectedTail);
      expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));
    });

    test('should append at the last position when the after specified node is not exist', () => {
      const { head, tail } = initNodes('Foo', 'Bar', 'Ray');

      doublyLinkedList['head'] = head;
      doublyLinkedList['tail'] = tail;

      doublyLinkedList.appendAfterValue('Vin', 'Zip');

      mockedNodes = initNodes('Foo', 'Bar', 'Ray', 'Vin').head;

      expect(doublyLinkedList.length).toBe(4);

      expect(doublyLinkedList['head']).toEqual(mockedNodes);

      expectedTail = getTail(doublyLinkedList['head']);

      expect(doublyLinkedList['tail']).toBe(expectedTail);
      expect(doublyLinkedList['tail']).toEqual(expectedTail);
      expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));
    });
  });

  describe('Delete The First Node', () => {
    test('should ignore when the data is empty and return null', () => {
      expect(doublyLinkedList.deleteHead()).toBeNull();
      expect(doublyLinkedList.length).toBe(0);

      expect(doublyLinkedList['head']).toBeNull();
      expect(doublyLinkedList['tail']).toBeNull();
    });

    test('should delete the first node and return the deleted node data', () => {
      const { head, tail } = initNodes('Foo', 'Bar', 'Ray');

      doublyLinkedList['head'] = head;
      doublyLinkedList['tail'] = tail;

      expect(doublyLinkedList.deleteHead()).toBe('Foo');

      mockedNodes = initNodes('Bar', 'Ray').head;

      expect(doublyLinkedList.length).toBe(2);

      expect(doublyLinkedList['head']).toEqual(mockedNodes);

      expectedTail = getTail(doublyLinkedList['head']);

      expect(doublyLinkedList['tail']).toBe(expectedTail);
      expect(doublyLinkedList['tail']).toEqual(expectedTail);
      expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));

      expect(doublyLinkedList.deleteHead()).toBe('Bar');

      mockedNodes = initNodes('Ray').head;

      expect(doublyLinkedList.length).toBe(1);

      expect(doublyLinkedList['head']).toEqual(mockedNodes);

      expectedTail = getTail(doublyLinkedList['head']);

      expect(doublyLinkedList['tail']).toBe(expectedTail);
      expect(doublyLinkedList['tail']).toEqual(expectedTail);
      expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));

      expect(doublyLinkedList.deleteHead()).toBe('Ray');

      expect(doublyLinkedList.length).toBe(0);

      expect(doublyLinkedList['head']).toBeNull();
      expect(doublyLinkedList['tail']).toBeNull();

      expect(doublyLinkedList.deleteHead()).toBeNull();

      expect(doublyLinkedList.length).toBe(0);

      expect(doublyLinkedList['head']).toBeNull();
      expect(doublyLinkedList['tail']).toBeNull();
    });
  });

  describe('Delete The Last Node', () => {
    test('should ignore when the data is empty and return null', () => {
      expect(doublyLinkedList.deleteTail()).toBeNull();
      expect(doublyLinkedList.length).toBe(0);

      expect(doublyLinkedList['head']).toBeNull();
      expect(doublyLinkedList['tail']).toBeNull();
    });

    test('should delete the last node and return the deleted node data', () => {
      const { head, tail } = initNodes('Foo', 'Bar', 'Ray');

      doublyLinkedList['head'] = head;
      doublyLinkedList['tail'] = tail;

      expect(doublyLinkedList.deleteTail()).toBe('Ray');

      mockedNodes = initNodes('Foo', 'Bar').head;

      expect(doublyLinkedList.length).toBe(2);

      expect(doublyLinkedList['head']).toEqual(mockedNodes);

      expectedTail = getTail(doublyLinkedList['head']);

      expect(doublyLinkedList['tail']).toBe(expectedTail);
      expect(doublyLinkedList['tail']).toEqual(expectedTail);
      expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));

      expect(doublyLinkedList.deleteTail()).toBe('Bar');

      mockedNodes = initNodes('Foo').head;

      expect(doublyLinkedList.length).toBe(1);

      expect(doublyLinkedList['head']).toEqual(mockedNodes);

      expectedTail = getTail(doublyLinkedList['head']);

      expect(doublyLinkedList['tail']).toBe(expectedTail);
      expect(doublyLinkedList['tail']).toEqual(expectedTail);
      expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));

      expect(doublyLinkedList.deleteTail()).toBe('Foo');

      expect(doublyLinkedList.length).toBe(0);

      expect(doublyLinkedList['head']).toBeNull();
      expect(doublyLinkedList['tail']).toBeNull();

      expect(doublyLinkedList.deleteTail()).toBeNull();

      expect(doublyLinkedList.length).toBe(0);

      expect(doublyLinkedList['head']).toBeNull();
      expect(doublyLinkedList['tail']).toBeNull();
    });
  });

  describe('Delete The Specific Node', () => {
    test('should ignore when the data is empty and return null', () => {
      expect(doublyLinkedList.deleteValue('Foo')).toBeNull();
      expect(doublyLinkedList.length).toBe(0);

      expect(doublyLinkedList['head']).toBeNull();
      expect(doublyLinkedList['tail']).toBeNull();
    });

    test('should delete the specific node and return the deleted node', () => {
      const { head, tail } = initNodes('Foo', 'Bar', 'Ray');

      doublyLinkedList['head'] = head;
      doublyLinkedList['tail'] = tail;

      expect(doublyLinkedList.deleteValue('Bar')).toBe('Bar');

      mockedNodes = initNodes('Foo', 'Ray').head;

      expect(doublyLinkedList.length).toBe(2);

      expect(doublyLinkedList['head']).toEqual(mockedNodes);

      expectedTail = getTail(doublyLinkedList['head']);

      expect(doublyLinkedList['tail']).toBe(expectedTail);
      expect(doublyLinkedList['tail']).toEqual(expectedTail);
      expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));

      expect(doublyLinkedList.deleteValue('Foo')).toBe('Foo');

      mockedNodes = initNodes('Ray').head;

      expect(doublyLinkedList.length).toBe(1);

      expect(doublyLinkedList['head']).toEqual(mockedNodes);

      expectedTail = getTail(doublyLinkedList['head']);

      expect(doublyLinkedList['tail']).toBe(expectedTail);
      expect(doublyLinkedList['tail']).toEqual(expectedTail);
      expect(doublyLinkedList['tail']).toEqual(getTail(mockedNodes));

      expect(doublyLinkedList.deleteValue('Ray')).toBe('Ray');

      expect(doublyLinkedList.length).toBe(0);

      expect(doublyLinkedList['head']).toBeNull();
      expect(doublyLinkedList['tail']).toBeNull();

      expect(doublyLinkedList.deleteValue('Vin')).toBeNull();
      expect(doublyLinkedList.deleteValue('Gin')).toBeNull();

      expect(doublyLinkedList.length).toBe(0);

      expect(doublyLinkedList['head']).toBeNull();
      expect(doublyLinkedList['tail']).toBeNull();
    });

    test('should ignore when deleting the node on the empty linked list', () => {
      expect(doublyLinkedList.deleteHead()).toBeNull();
      expect(doublyLinkedList.deleteHead()).toBeNull();

      expect(doublyLinkedList.length).toBe(0);

      expect(doublyLinkedList.deleteValue('Foo')).toBeNull();
      expect(doublyLinkedList.deleteValue('Bar')).toBeNull();

      expect(doublyLinkedList.length).toBe(0);

      expect(doublyLinkedList.deleteTail()).toBeNull();
      expect(doublyLinkedList.deleteTail()).toBeNull();

      expect(doublyLinkedList.length).toBe(0);

      expect(doublyLinkedList['head']).toBeNull();
      expect(doublyLinkedList['tail']).toBeNull();
    });

    test('should return true when the data is exist', () => {
      const data = ['Foo', 'Bar', 'Ray'];
      const { head, tail } = initNodes(...data);

      doublyLinkedList['head'] = head;
      doublyLinkedList['tail'] = tail;

      data.forEach((value) => {
        expect(doublyLinkedList.contain(value)).toBeTruthy();
      });
    });

    test('should return false when the data is not exist', () => {
      const { head, tail } = initNodes('Foo', 'Bar', 'Ray');

      doublyLinkedList['head'] = head;
      doublyLinkedList['tail'] = tail;

      expect(doublyLinkedList.contain('Zip')).toBeFalsy();
    });

    test('should convert to array form', () => {
      const data = ['Foo', 'Bar', 'Ray'];
      const { head, tail } = initNodes(...data);

      doublyLinkedList['head'] = head;
      doublyLinkedList['tail'] = tail;

      expect(doublyLinkedList.toArray()).toEqual(data);
    });

    test('should clear all data', () => {
      const { head, tail } = initNodes('Foo', 'Bar', 'Ray');

      doublyLinkedList['head'] = head;
      doublyLinkedList['tail'] = tail;

      doublyLinkedList.clear();

      expect(doublyLinkedList.length).toBe(0);

      expect(doublyLinkedList['head']).toBeNull();
      expect(doublyLinkedList['tail']).toBeNull();
    });

    test('should do an iterable operation', () => {
      const data = ['Foo', 'Bar', 'Ray', 'Vin'];
      const { head, tail } = initNodes(...data);

      doublyLinkedList['head'] = head;
      doublyLinkedList['tail'] = tail;

      let i = 0;
      for (const value of doublyLinkedList) {
        expect(value).toBe(data[i]);
        i += 1;
      }
    });
  });
});
