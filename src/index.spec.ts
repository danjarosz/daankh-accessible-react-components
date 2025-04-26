import * as lib from './index.js';
import { test, describe, expect } from 'vitest';

describe('lib', () => {
  describe('Hooks', () => {
    test('should export useGlobalStatesAndProperties', () => {
      expect(lib['useGlobalStatesAndProperties']).toBeDefined();
    });

    test('should export useAccessibleButton', () => {
      expect(lib['useAccessibleButton']).toBeDefined();
    });
  });

  describe('Components', () => {
    test('should export Button', () => {
      expect(lib['Button']).toBeDefined();
    });
  });
});
