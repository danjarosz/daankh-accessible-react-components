import { useGlobalStatesAndProperties } from './index.js';
import { test, describe, expect } from 'vitest';
import { renderHook } from '@testing-library/react';

describe('useGlobalStatesAndProperties', () => {
  test('should be defined', () => {
    expect(useGlobalStatesAndProperties).toBeDefined();
  });

  describe('aria-atomic', () => {
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

  describe('aria-busy', () => {
    test('GIVEN THAT budy = true WHEN useGlobalStatesAndProperties returns value THEN aria-busy = true', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          busy: true,
        }),
      );
      expect(result.current['aria-busy']).toBe(true);
    });

    test('GIVEN THAT busy = false WHEN useGlobalStatesAndProperties returns value THEN aria-busy = false', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          busy: false,
        }),
      );
      expect(result.current['aria-busy']).toBe(false);
    });

    test('GIVEN THAT busy = undefined WHEN useGlobalStatesAndProperties returns value THEN aria-busy = undefined', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          busy: undefined,
        }),
      );
      expect(result.current['aria-busy']).toBe(undefined);
    });

    test('GIVEN THAT busy is not provided WHEN useGlobalStatesAndProperties returns value THEN aria-busy = undefined', () => {
      const { result } = renderHook(() => useGlobalStatesAndProperties({}));
      expect(result.current['aria-busy']).toBe(undefined);
    });
  });

  describe('aria-controls', () => {
    test('GIVEN THAT controls = "foo" WHEN useGlobalStatesAndProperties returns value THEN aria-controls="foo"', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          controls: 'foo',
        }),
      );
      expect(result.current['aria-controls']).toBe('foo');
    });

    test('GIVEN THAT controls = "foo bar" WHEN useGlobalStatesAndProperties returns value THEN aria-controls="foo bar"', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          controls: 'foo bar',
        }),
      );
      expect(result.current['aria-controls']).toBe('foo bar');
    });

    test('GIVEN THAT controls = ["foo"] WHEN useGlobalStatesAndProperties returns value THEN aria-controls="foo"', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          controls: ['foo'],
        }),
      );
      expect(result.current['aria-controls']).toBe('foo');
    });

    test('GIVEN THAT controls = "foo bar" WHEN useGlobalStatesAndProperties returns value THEN aria-controls="foo bar"', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          controls: ['foo', 'bar'],
        }),
      );
      expect(result.current['aria-controls']).toBe('foo bar');
    });

    test('GIVEN THAT controls = undefined WHEN useGlobalStatesAndProperties returns value THEN aria-controls=undefined', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          controls: undefined,
        }),
      );
      expect(result.current['aria-controls']).toBe(undefined);
    });

    test('GIVEN THAT controls is not provided WHEN useGlobalStatesAndProperties returns value THEN aria-controls=undefined', () => {
      const { result } = renderHook(() => useGlobalStatesAndProperties({}));
      expect(result.current['aria-controls']).toBe(undefined);
    });

    test('GIVEN THAT controls is an empty array WHEN useGlobalStatesAndProperties returns value THEN aria-controls=undefined', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          controls: [],
        }),
      );
      expect(result.current['aria-controls']).toBe(undefined);
    });
  });
});
