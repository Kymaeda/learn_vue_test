import { test, expect } from "vitest";

test('2+2=4', () => {
  expect(2+2).toBe(4)
})

const iAmDefined = null;

test('test api', () => {
  // NOTE: in case of decimal calc, use `toBeCloseTo`
  expect(0.2 + 0.1).toBeCloseTo(0.3);
  // NOTE: `toBeDefined` returns false if variable is undefined
  expect(iAmDefined).toBeDefined();
  // NOTE: in js, false, null, undefined, '' and 0 is falsy value
  expect("Hello").toBeTruthy()
  expect(0).toBeFalsy()
})

class Example { }
const example = new Example;
test('object class is proper', () => {
  expect(example).toBeDefined();
  expect(example).toBeInstanceOf(Example);
})

test('objects', () => {
  const object1 = {
    name: 'Kyohei',
    type: 'instructor',
    grade: 3,
  }
  const object2 = {
    name: 'Kyohei',
    type: 'instructor',
    grade: 3,
  };

  const subset = {
    type: 'instructor',
  };

  expect(object1).toEqual(object2)
  expect(object1).toMatchObject(subset)
})

test('array', () => {
  expect([1, 2]).toEqual([1, 2])
  expect([1, 2, 3]).toContain(1)
})
