import { beforeEach, describe, expect, test } from 'vitest';
import { SingleLinkedList } from '../../src/data-structures/single-linked-list.js';

describe('Single Linked List Data Structure', () => {
  let singleLinkedList: SingleLinkedList<string | number>;

  beforeEach(() => {
    singleLinkedList = new SingleLinkedList();
  });

  test('should append a new data at the first position', () => {
    singleLinkedList.appendStart('Foo');
    singleLinkedList.appendStart('Bar');
    singleLinkedList.appendStart('Zip');
    singleLinkedList.appendStart('Vin');

    expect(singleLinkedList.toArray()).toEqual(['Vin', 'Zip', 'Bar', 'Foo']);
  });

  test('should append a new data at the last position', () => {
    singleLinkedList.appendStart('Foo');
    singleLinkedList.appendStart('Bar');

    singleLinkedList.appendEnd('Zip');
    singleLinkedList.appendEnd('Vin');

    singleLinkedList.appendStart('Han');
    singleLinkedList.appendStart('Gin');

    expect(singleLinkedList.toArray()).toEqual([
      'Gin',
      'Han',
      'Bar',
      'Foo',
      'Zip',
      'Vin',
    ]);
  });

  test('should append a new data after the first specified value', () => {
    singleLinkedList.appendAfterValue('Yun', 'Raz');
    singleLinkedList.appendStart('Foo');
    singleLinkedList.appendStart('Bar');

    singleLinkedList.appendEnd('Zip');
    singleLinkedList.appendEnd('Vin');

    singleLinkedList.appendAfterValue('Tom', 'Foo');
    singleLinkedList.appendAfterValue('Bun', 'Zip');
    singleLinkedList.appendAfterValue('Nom', 'Vin');
    singleLinkedList.appendAfterValue('Dim', 'Taz');
    singleLinkedList.appendAfterValue('Gin', 'Bar');

    expect(singleLinkedList.toArray()).toEqual([
      'Bar',
      'Gin',
      'Foo',
      'Tom',
      'Yun',
      'Zip',
      'Bun',
      'Vin',
      'Nom',
      'Dim',
    ]);
  });

  describe('Delete The First Node', () => {
    test.each([
      {
        data: [],
        iteration: 1,
        expected: {
          returnValue: null,
          toArray: [],
        },
      },
      {
        data: ['Foo'],
        iteration: 1,
        expected: {
          returnValue: 'Foo',
          toArray: [],
        },
      },
      {
        data: ['Foo'],
        iteration: 2,
        expected: {
          returnValue: null,
          toArray: [],
        },
      },
      {
        data: ['Foo', 'Bar'],
        iteration: 1,
        expected: {
          returnValue: 'Foo',
          toArray: ['Bar'],
        },
      },
      {
        data: ['Foo', 'Bar'],
        iteration: 2,
        expected: {
          returnValue: 'Bar',
          toArray: [],
        },
      },
      {
        data: ['Foo', 'Bar'],
        iteration: 3,
        expected: {
          returnValue: null,
          toArray: [],
        },
      },
    ])(
      '$data should be $expected.toArray when deleteHead is $iteration times and return $expected.returnValue',
      ({ data, iteration, expected }) => {
        data.forEach((value) => {
          singleLinkedList.appendEnd(value);
        });

        for (let i = 0; i < iteration; ++i) {
          if (i + 1 === iteration && expected.returnValue) {
            expect(singleLinkedList.deleteHead()).toBe(expected.returnValue);
            expect(singleLinkedList.toArray()).toEqual(expected.toArray);
            break;
          }

          if (i + 1 === iteration && expected.returnValue === null) {
            expect(singleLinkedList.deleteHead()).toBeNull();
            expect(singleLinkedList.toArray()).toEqual(expected.toArray);
            break;
          }

          singleLinkedList.deleteHead();
        }
      },
    );
  });

  describe('Delete The Last Node', () => {
    test.each([
      {
        data: [],
        iteration: 1,
        expected: {
          returnValue: null,
          toArray: [],
        },
      },
      {
        data: ['Foo'],
        iteration: 1,
        expected: {
          returnValue: 'Foo',
          toArray: [],
        },
      },
      {
        data: ['Foo'],
        iteration: 2,
        expected: {
          returnValue: null,
          toArray: [],
        },
      },
      {
        data: ['Foo', 'Bar'],
        iteration: 1,
        expected: {
          returnValue: 'Bar',
          toArray: ['Foo'],
        },
      },
      {
        data: ['Foo', 'Bar'],
        iteration: 2,
        expected: {
          returnValue: 'Foo',
          toArray: [],
        },
      },
      {
        data: ['Foo', 'Bar'],
        iteration: 3,
        expected: {
          returnValue: null,
          toArray: [],
        },
      },
    ])(
      '$data should be $expected.toArray when deleteTail is $iteration times and return $expected.returnValue',
      ({ data, iteration, expected }) => {
        data.forEach((value) => {
          singleLinkedList.appendEnd(value);
        });

        for (let i = 0; i < iteration; ++i) {
          if (i + 1 === iteration && expected.returnValue) {
            expect(singleLinkedList.deleteTail()).toBe(expected.returnValue);
            expect(singleLinkedList.toArray()).toEqual(expected.toArray);
            break;
          }

          if (i + 1 === iteration && expected.returnValue === null) {
            expect(singleLinkedList.deleteTail()).toBeNull();
            expect(singleLinkedList.toArray()).toEqual(expected.toArray);
            break;
          }

          singleLinkedList.deleteTail();
        }
      },
    );
  });

  describe('Delete The Specific Node', () => {
    const testData = [
      {
        data: [],
        value: 'Foo',
        expected: {
          returnValue: null,
          toArray: [],
        },
      },
      {
        data: ['Foo'],
        value: 'Bar',
        expected: {
          returnValue: null,
          toArray: ['Foo'],
        },
      },
      {
        data: ['Foo'],
        value: 'Foo',
        expected: {
          returnValue: 'Foo',
          toArray: [],
        },
      },
      {
        data: ['Foo', 'Bar'],
        value: 'Ray',
        expected: {
          returnValue: null,
          toArray: ['Foo', 'Bar'],
        },
      },
      {
        data: ['Foo', 'Bar'],
        value: 'Foo',
        expected: {
          returnValue: 'Foo',
          toArray: ['Bar'],
        },
      },
      {
        data: ['Foo', 'Bar'],
        value: 'Bar',
        expected: {
          returnValue: 'Bar',
          toArray: ['Foo'],
        },
      },
      {
        data: ['Foo', 'Bar', 'Ray'],
        value: 'Zip',
        expected: {
          returnValue: null,
          toArray: ['Foo', 'Bar', 'Ray'],
        },
      },
      {
        data: ['Foo', 'Bar', 'Ray'],
        value: 'Foo',
        expected: {
          returnValue: 'Foo',
          toArray: ['Bar', 'Ray'],
        },
      },
      {
        data: ['Foo', 'Bar', 'Ray'],
        value: 'Bar',
        expected: {
          returnValue: 'Bar',
          toArray: ['Foo', 'Ray'],
        },
      },
      {
        data: ['Foo', 'Bar', 'Ray'],
        value: 'Ray',
        expected: {
          returnValue: 'Ray',
          toArray: ['Foo', 'Bar'],
        },
      },
    ];

    test.each(testData)(
      '$data should be $expected.toArray when deleting the node with value $value',
      ({ data, value, expected }) => {
        data.forEach((value) => {
          singleLinkedList.appendEnd(value);
        });

        singleLinkedList.deleteValue(value);

        expect(singleLinkedList.toArray()).toEqual(expected.toArray);

        singleLinkedList = new SingleLinkedList();
      },
    );

    test.each(testData)(
      '$data should return $expected.returnValue when deleting the node with value $value',
      ({ data, value, expected }) => {
        data.forEach((value) => {
          singleLinkedList.appendEnd(value);
        });

        if (expected.returnValue) {
          expect(singleLinkedList.deleteValue(value)).toBe(
            expected.returnValue,
          );
        } else {
          expect(singleLinkedList.deleteValue(value)).toBeNull();
        }

        singleLinkedList = new SingleLinkedList();
      },
    );
  });

  test('should ignore deleting the node on empty linked list', () => {
    expect(singleLinkedList.deleteHead()).toBeNull();
    expect(singleLinkedList.deleteHead()).toBeNull();

    expect(singleLinkedList.deleteValue('Foo')).toBeNull();
    expect(singleLinkedList.deleteValue('Bar')).toBeNull();

    expect(singleLinkedList.deleteTail()).toBeNull();
    expect(singleLinkedList.deleteTail()).toBeNull();

    expect(singleLinkedList.toArray().length).toBe(0);
  });

  test('should return true when the data is exist', () => {
    const data = ['Foo', 'Bar', 'Ray'];

    data.forEach((value) => {
      singleLinkedList.appendEnd(value);
    });

    data.forEach((value) => {
      expect(singleLinkedList.contain(value)).toBeTruthy();
    });
  });

  test('should return false when the data is not exist', () => {
    const data = ['Foo', 'Bar', 'Ray'];

    data.forEach((value) => {
      singleLinkedList.appendEnd(value);
    });

    expect(singleLinkedList.contain('Zip')).toBeFalsy();
  });

  test('should clear all data', () => {
    const data = ['Foo', 'Bar', 'Ray'];

    data.forEach((value) => {
      singleLinkedList.appendEnd(value);
    });

    singleLinkedList.clear();

    expect(singleLinkedList.toArray().length).toBe(0);
  });
});
