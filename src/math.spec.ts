import { test, describe, expect } from 'vitest';
import { add, subtract, multiply, divide } from './math.js';

describe('Math module', () => {
  test('add', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtract', () => {
    expect(subtract(1, 2)).toBe(-1);
  });

  test('multiply', () => {
    expect(multiply(2, 2)).toBe(4);
  });

  test('divide', () => {
    expect(divide(4, 2)).toBe(2);
  });
});
