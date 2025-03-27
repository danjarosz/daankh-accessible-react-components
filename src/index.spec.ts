import lib from './index.js';
import { test, describe, expect } from 'vitest';

describe('lib', () => {
  test('should return the empty object', () => {
    expect(lib).toEqual({});
  });
});
