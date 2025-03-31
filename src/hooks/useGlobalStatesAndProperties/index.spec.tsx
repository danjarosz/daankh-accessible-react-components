import { useGlobalStatesAndProperties } from './index.js';
import { test, describe, expect } from 'vitest';
import { renderHook } from '@testing-library/react';

describe('useGlobalStatesAndProperties', () => {
  test('should be defined', () => {
    expect(useGlobalStatesAndProperties).toBeDefined();
  });

  describe('atomic', () => {
    test('GIVEN THAT atomic = true WHEN useGlobalStatesAndProperties returns value THEN aria-atomic = true', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          atomic: true,
        }),
      );
      expect(result.current['aria-atomic']).toBe(true);
    });

    test('GIVEN THAT atomic = false WHEN useGlobalStatesAndProperties returns value THEN aria-atomic = false', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          atomic: false,
        }),
      );
      expect(result.current['aria-atomic']).toBe(false);
    });

    test('GIVEN THAT atomic = undefined WHEN useGlobalStatesAndProperties returns value THEN aria-atomic = undefined', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          atomic: undefined,
        }),
      );
      expect(result.current['aria-atomic']).toBe(undefined);
    });

    test('GIVEN THAT atomic is not provided WHEN useGlobalStatesAndProperties returns value THEN aria-atomic = undefined', () => {
      const { result } = renderHook(() => useGlobalStatesAndProperties({}));
      expect(result.current['aria-atomic']).toBe(undefined);
    });
  });
});
