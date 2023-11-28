import { afterEach, describe, expect, test } from 'vitest';
import {
  SingleLinkedList,
  SingleLinkedListNode,
} from '../../src/data-structures/single-linked-list.js';

describe('A Single Linked List Data Structure', () => {
  const singleLinkedList = new SingleLinkedList();

  afterEach(() => {
    singleLinkedList['head'] = null;
    singleLinkedList['tail'] = null;
  });

  test('should append at the first position', () => {
    singleLinkedList.appendStart('Foo');
    expect(singleLinkedList['head']).toEqual(createLinkedListData('Foo'));

    let expectedTail = getTail(singleLinkedList['head']);

    expect(singleLinkedList['tail']).toBe(expectedTail);
    expect(singleLinkedList['tail']).toEqual(expectedTail);
    expect(singleLinkedList['tail']).toEqual(createLinkedListData('Foo'));

    singleLinkedList.appendStart('Bar');
    expect(singleLinkedList['head']).toEqual(
      createLinkedListData('Bar', 'Foo'),
    );

    expectedTail = getTail(singleLinkedList['head']);

    expect(singleLinkedList['tail']).toBe(expectedTail);
    expect(singleLinkedList['tail']).toEqual(expectedTail);
    expect(singleLinkedList['tail']).toEqual(createLinkedListData('Foo'));

    singleLinkedList.appendStart('Ray');
    expect(singleLinkedList['head']).toEqual(
      createLinkedListData('Ray', 'Bar', 'Foo'),
    );

    expectedTail = getTail(singleLinkedList['head']);

    expect(singleLinkedList['tail']).toBe(expectedTail);
    expect(singleLinkedList['tail']).toEqual(expectedTail);
    expect(singleLinkedList['tail']).toEqual(createLinkedListData('Foo'));
  });

  test('should append at the last position', () => {
    singleLinkedList.appendEnd('Foo');
    expect(singleLinkedList['head']).toEqual(createLinkedListData('Foo'));

    let expectedTail = getTail(singleLinkedList['head']);

    expect(singleLinkedList['tail']).toBe(expectedTail);
    expect(singleLinkedList['tail']).toEqual(expectedTail);
    expect(singleLinkedList['tail']).toEqual(createLinkedListData('Foo'));

    singleLinkedList.appendEnd('Bar');
    expect(singleLinkedList['head']).toEqual(
      createLinkedListData('Foo', 'Bar'),
    );

    expectedTail = getTail(singleLinkedList['head']);

    expect(singleLinkedList['tail']).toBe(expectedTail);
    expect(singleLinkedList['tail']).toEqual(expectedTail);
    expect(singleLinkedList['tail']).toEqual(createLinkedListData('Bar'));

    singleLinkedList.appendEnd('Ray');
    expect(singleLinkedList['head']).toEqual(
      createLinkedListData('Foo', 'Bar', 'Ray'),
    );

    expectedTail = getTail(singleLinkedList['head']);

    expect(singleLinkedList['tail']).toBe(expectedTail);
    expect(singleLinkedList['tail']).toEqual(expectedTail);
    expect(singleLinkedList['tail']).toEqual(createLinkedListData('Ray'));
  });

  test('should append at the first or last position', () => {
    singleLinkedList.appendStart('Foo');
    singleLinkedList.appendStart('Bar');

    singleLinkedList.appendEnd('Ray');
    singleLinkedList.appendEnd('Zip');

    singleLinkedList.appendStart('Vin');
    singleLinkedList.appendStart('Gin');

    expect(singleLinkedList['head']).toEqual(
      createLinkedListData('Gin', 'Vin', 'Bar', 'Foo', 'Ray', 'Zip'),
    );

    const expectedTail = getTail(singleLinkedList['head']);

    expect(singleLinkedList['tail']).toBe(expectedTail);
    expect(singleLinkedList['tail']).toEqual(expectedTail);
    expect(singleLinkedList['tail']).toEqual(createLinkedListData('Zip'));
  });

  describe('Append After The First Specified Node', () => {
    test('should append at the first position when the linked list is empty', () => {
      singleLinkedList.appendAfterValue('Foo', 'Bar');
      expect(singleLinkedList['head']).toEqual(createLinkedListData('Foo'));
      expect(singleLinkedList['tail']).toBe(singleLinkedList['head']);
      expect(singleLinkedList['tail']).toEqual(singleLinkedList['head']);
      expect(singleLinkedList['tail']).toEqual(createLinkedListData('Foo'));
    });

    test('should append after the specified node', () => {
      const { head, tail } = initData('Foo', 'Bar', 'Ray');

      singleLinkedList['head'] = head;
      singleLinkedList['tail'] = tail;

      singleLinkedList.appendAfterValue('Vin', 'Foo');
      singleLinkedList.appendAfterValue('Zip', 'Vin');
      singleLinkedList.appendAfterValue('Gin', 'Ray');

      expect(singleLinkedList['head']).toEqual(
        createLinkedListData('Foo', 'Vin', 'Zip', 'Bar', 'Ray', 'Gin'),
      );

      const expectedTail = getTail(singleLinkedList['head']);

      expect(singleLinkedList['tail']).toBe(expectedTail);
      expect(singleLinkedList['tail']).toEqual(expectedTail);
      expect(singleLinkedList['tail']).toEqual(createLinkedListData('Gin'));
    });

    test('should append at the last position when the after specified node is not exist', () => {
      const { head, tail } = initData('Foo', 'Bar', 'Ray');

      singleLinkedList['head'] = head;
      singleLinkedList['tail'] = tail;

      singleLinkedList.appendAfterValue('Vin', 'Zip');
      expect(singleLinkedList['head']).toEqual(
        createLinkedListData('Foo', 'Bar', 'Ray', 'Vin'),
      );

      const expectedTail = getTail(singleLinkedList['head']);

      expect(singleLinkedList['tail']).toBe(expectedTail);
      expect(singleLinkedList['tail']).toEqual(expectedTail);
      expect(singleLinkedList['tail']).toEqual(createLinkedListData('Vin'));
    });
  });

  describe('Delete The First Node', () => {
    test('should ignore when the data is empty and return null', () => {
      expect(singleLinkedList.deleteHead()).toBeNull();
      expect(singleLinkedList['head']).toBeNull();
      expect(singleLinkedList['tail']).toBeNull();
    });

    test('should delete the first node and return the deleted node data', () => {
      const { head, tail } = initData('Foo', 'Bar', 'Ray');

      singleLinkedList['head'] = head;
      singleLinkedList['tail'] = tail;

      expect(singleLinkedList.deleteHead()).toBe('Foo');
      expect(singleLinkedList['head']).toEqual(
        createLinkedListData('Bar', 'Ray'),
      );

      let expectedTail = getTail(singleLinkedList['head']);

      expect(singleLinkedList['tail']).toBe(expectedTail);
      expect(singleLinkedList['tail']).toEqual(expectedTail);
      expect(singleLinkedList['tail']).toEqual(createLinkedListData('Ray'));

      expect(singleLinkedList.deleteHead()).toBe('Bar');
      expect(singleLinkedList['head']).toEqual(createLinkedListData('Ray'));

      expectedTail = getTail(singleLinkedList['head']);

      expect(singleLinkedList['tail']).toBe(expectedTail);
      expect(singleLinkedList['tail']).toEqual(expectedTail);
      expect(singleLinkedList['tail']).toEqual(createLinkedListData('Ray'));

      expect(singleLinkedList.deleteHead()).toBe('Ray');
      expect(singleLinkedList['head']).toBeNull();
      expect(singleLinkedList['tail']).toBeNull();

      expect(singleLinkedList.deleteHead()).toBeNull();
      expect(singleLinkedList['head']).toBeNull();
      expect(singleLinkedList['tail']).toBeNull();
    });
  });

  describe('Delete The Last Node', () => {
    test('should ignore when the data is empty and return null', () => {
      expect(singleLinkedList.deleteTail()).toBeNull();
      expect(singleLinkedList['head']).toBeNull();
      expect(singleLinkedList['tail']).toBeNull();
    });

    test('should delete the last node and return the deleted node data', () => {
      const { head, tail } = initData('Foo', 'Bar', 'Ray');

      singleLinkedList['head'] = head;
      singleLinkedList['tail'] = tail;

      expect(singleLinkedList.deleteTail()).toBe('Ray');
      expect(singleLinkedList['head']).toEqual(
        createLinkedListData('Foo', 'Bar'),
      );

      let expectedTail = getTail(singleLinkedList['head']);

      expect(singleLinkedList['tail']).toBe(expectedTail);
      expect(singleLinkedList['tail']).toEqual(expectedTail);
      expect(singleLinkedList['tail']).toEqual(createLinkedListData('Bar'));

      expect(singleLinkedList.deleteTail()).toBe('Bar');
      expect(singleLinkedList['head']).toEqual(createLinkedListData('Foo'));

      expectedTail = getTail(singleLinkedList['head']);

      expect(singleLinkedList['tail']).toBe(expectedTail);
      expect(singleLinkedList['tail']).toEqual(expectedTail);
      expect(singleLinkedList['tail']).toEqual(createLinkedListData('Foo'));

      expect(singleLinkedList.deleteTail()).toBe('Foo');
      expect(singleLinkedList['head']).toBeNull();
      expect(singleLinkedList['tail']).toBeNull();

      expect(singleLinkedList.deleteTail()).toBeNull();
      expect(singleLinkedList['head']).toBeNull();
      expect(singleLinkedList['tail']).toBeNull();
    });
  });

  describe('Delete The Specific Node', () => {
    test('should ignore when the data is empty and return null', () => {
      expect(singleLinkedList.deleteValue('Foo')).toBeNull();
      expect(singleLinkedList['head']).toBeNull();
      expect(singleLinkedList['tail']).toBeNull();
    });

    test('should delete the specific node and return the deleted node', () => {
      const { head, tail } = initData('Foo', 'Bar', 'Ray');

      singleLinkedList['head'] = head;
      singleLinkedList['tail'] = tail;

      expect(singleLinkedList.deleteValue('Bar')).toBe('Bar');
      expect(singleLinkedList['head']).toEqual(
        createLinkedListData('Foo', 'Ray'),
      );

      let expectedTail = getTail(singleLinkedList['head']);

      expect(singleLinkedList['tail']).toBe(expectedTail);
      expect(singleLinkedList['tail']).toEqual(expectedTail);
      expect(singleLinkedList['tail']).toEqual(createLinkedListData('Ray'));

      expect(singleLinkedList.deleteValue('Foo')).toBe('Foo');
      expect(singleLinkedList['head']).toEqual(createLinkedListData('Ray'));

      expectedTail = getTail(singleLinkedList['head']);

      expect(singleLinkedList['tail']).toBe(expectedTail);
      expect(singleLinkedList['tail']).toEqual(expectedTail);
      expect(singleLinkedList['tail']).toEqual(createLinkedListData('Ray'));

      expect(singleLinkedList.deleteValue('Ray')).toBe('Ray');
      expect(singleLinkedList['head']).toBeNull();
      expect(singleLinkedList['tail']).toBeNull();

      expect(singleLinkedList.deleteValue('Vin')).toBeNull();
      expect(singleLinkedList.deleteValue('Gin')).toBeNull();

      expect(singleLinkedList['head']).toBeNull();
      expect(singleLinkedList['tail']).toBeNull();
    });
  });

  test('should ignore when deleting the node on the empty linked list', () => {
    expect(singleLinkedList.deleteHead()).toBeNull();
    expect(singleLinkedList.deleteHead()).toBeNull();

    expect(singleLinkedList.deleteValue('Foo')).toBeNull();
    expect(singleLinkedList.deleteValue('Bar')).toBeNull();

    expect(singleLinkedList.deleteTail()).toBeNull();
    expect(singleLinkedList.deleteTail()).toBeNull();

    expect(singleLinkedList['head']).toBeNull();
    expect(singleLinkedList['tail']).toBeNull();
  });

  test('should return true when the data is exist', () => {
    const data = ['Foo', 'Bar', 'Ray'];
    const { head, tail } = initData(...data);

    singleLinkedList['head'] = head;
    singleLinkedList['tail'] = tail;

    data.forEach((value) => {
      expect(singleLinkedList.contain(value)).toBeTruthy();
    });
  });

  test('should return false when the data is not exist', () => {
    const { head, tail } = initData('Foo', 'Bar', 'Ray');

    singleLinkedList['head'] = head;
    singleLinkedList['tail'] = tail;

    expect(singleLinkedList.contain('Zip')).toBeFalsy();
  });

  test('should return the length of the linked list', () => {
    expect(singleLinkedList.length).toBe(0);

    const { head, tail } = initData('Foo', 'Bar', 'Ray');

    singleLinkedList['head'] = head;
    singleLinkedList['tail'] = tail;

    expect(singleLinkedList.length).toBe(3);
  });

  test('should convert to array form', () => {
    const data = ['Foo', 'Bar', 'Ray'];
    const { head, tail } = initData(...data);

    singleLinkedList['head'] = head;
    singleLinkedList['tail'] = tail;

    expect(singleLinkedList.toArray()).toEqual(data);
  });

  test('should clear all data', () => {
    const { head, tail } = initData('Foo', 'Bar', 'Ray');

    singleLinkedList['head'] = head;
    singleLinkedList['tail'] = tail;

    singleLinkedList.clear();

    expect(singleLinkedList['head']).toBeNull();
    expect(singleLinkedList['tail']).toBeNull();
  });

  test('should do an iterable operation', () => {
    const data = ['Foo', 'Bar', 'Ray', 'Vin'];
    const { head, tail } = initData(...data);

    singleLinkedList['head'] = head;
    singleLinkedList['tail'] = tail;

    let i = 0;
    for (const value of singleLinkedList) {
      expect(value).toBe(data[i]);
      i += 1;
    }
  });
});

function createLinkedListData<T>(...value: T[]) {
  let result = null;

  for (let i = value.length - 1; i >= 0; i -= 1) {
    if (i === value.length - 1) {
      result = new SingleLinkedListNode(value[i], null);
    } else {
      result = new SingleLinkedListNode(value[i], result);
    }
  }

  return result;
}

function getTail<T>(head: SingleLinkedListNode<T> | null) {
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

function initData<T>(...value: T[]) {
  const head = createLinkedListData(...value);

  return {
    head,
    tail: getTail(head),
  };
}
