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

  describe('aria-current', () => {
    test('GIVEN THAT current="page" WHEN useGlobalStatesAndProperties returns value THEN aria-current="page"', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          current: 'page',
        }),
      );
      expect(result.current['aria-current']).toBe('page');
    });

    test('GIVEN THAT current="step" WHEN useGlobalStatesAndProperties returns value THEN aria-current="step"', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          current: 'step',
        }),
      );
      expect(result.current['aria-current']).toBe('step');
    });

    test('GIVEN THAT current="location" WHEN useGlobalStatesAndProperties returns value THEN aria-current="location"', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          current: 'location',
        }),
      );
      expect(result.current['aria-current']).toBe('location');
    });

    test('GIVEN THAT current="date" WHEN useGlobalStatesAndProperties returns value THEN aria-current="date"', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          current: 'date',
        }),
      );
      expect(result.current['aria-current']).toBe('date');
    });

    test('GIVEN THAT current="time" WHEN useGlobalStatesAndProperties returns value THEN aria-current="time"', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          current: 'time',
        }),
      );
      expect(result.current['aria-current']).toBe('time');
    });

    test('GIVEN THAT current is different than acceptable token WHEN useGlobalStatesAndProperties returns value THEN aria-current="true"', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          current: 'something',
        }),
      );
      expect(result.current['aria-current']).toBe(true);
    });

    test('GIVEN THAT current=true" WHEN useGlobalStatesAndProperties returns value THEN aria-current="true"', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          current: true,
        }),
      );
      expect(result.current['aria-current']).toBe(true);
    });

    test('GIVEN THAT current=false WHEN useGlobalStatesAndProperties returns value THEN aria-current=undefined', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          current: false,
        }),
      );
      expect(result.current['aria-current']).toBe(undefined);
    });

    test('GIVEN THAT current="" WHEN useGlobalStatesAndProperties returns value THEN aria-current=undefined', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          current: '',
        }),
      );
      expect(result.current['aria-current']).toBe(undefined);
    });

    test('GIVEN THAT current=undefined WHEN useGlobalStatesAndProperties returns value THEN aria-current=undefined"', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          current: undefined,
        }),
      );
      expect(result.current['aria-current']).toBe(undefined);
    });

    test('GIVEN THAT current is not provided WHEN useGlobalStatesAndProperties returns value THEN aria-current=undefined"', () => {
      const { result } = renderHook(() => useGlobalStatesAndProperties({}));
      expect(result.current['aria-current']).toBe(undefined);
    });
  });

  describe('aria-describedby', () => {
    test('GIVEN THAT described = "foo" WHEN useGlobalStatesAndProperties returns value THEN aria-describedby="foo"', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          describedby: 'foo',
        }),
      );
      expect(result.current['aria-describedby']).toBe('foo');
    });

    test('GIVEN THAT describedby = "foo bar" WHEN useGlobalStatesAndProperties returns value THEN aria-describedby="foo bar"', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          describedby: 'foo bar',
        }),
      );
      expect(result.current['aria-describedby']).toBe('foo bar');
    });

    test('GIVEN THAT describedby = ["foo"] WHEN useGlobalStatesAndProperties returns value THEN aria-describedby="foo"', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          describedby: ['foo'],
        }),
      );
      expect(result.current['aria-describedby']).toBe('foo');
    });

    test('GIVEN THAT describedby = "foo bar" WHEN useGlobalStatesAndProperties returns value THEN aria-describedby="foo bar"', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          describedby: ['foo', 'bar'],
        }),
      );
      expect(result.current['aria-describedby']).toBe('foo bar');
    });

    test('GIVEN THAT describedby = undefined WHEN useGlobalStatesAndProperties returns value THEN aria-describedby=undefined', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          describedby: undefined,
        }),
      );
      expect(result.current['aria-describedby']).toBe(undefined);
    });

    test('GIVEN THAT describedby is not provided WHEN useGlobalStatesAndProperties returns value THEN aria-describedby=undefined', () => {
      const { result } = renderHook(() => useGlobalStatesAndProperties({}));
      expect(result.current['aria-describedby']).toBe(undefined);
    });

    test('GIVEN THAT describedby is an empty array WHEN useGlobalStatesAndProperties returns value THEN aria-describedby=undefined', () => {
      const { result } = renderHook(() =>
        useGlobalStatesAndProperties({
          describedby: [],
        }),
      );
      expect(result.current['aria-describedby']).toBe(undefined);
    });
  });
});
