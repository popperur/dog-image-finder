import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import useAnimationTimer from "hooks/useAnimationTimer";
import { renderHook, act } from "@testing-library/react";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.clearAllTimers();
});

describe("timers", () => {
  it("sets the initial keyIndex and duration", () => {
    const initial = { duration: 2, delay: 3 };
    const durationFn = vi.fn((): number => 0);
    const delayFn = vi.fn(() => 3);
    const { result } = renderHook(() =>
      useAnimationTimer({ initial, durationFn, delayFn }),
    );

    expect(result.current[0]).toBe(0);
    expect(result.current[1]).toBe(2);
  });

  it("increments keyIndex after the time set in delayFn", () => {
    const initial = { duration: 0, delay: 3 };
    const durationFn = vi.fn((): number => 0);
    const delayFn = vi.fn(() => 3);
    const { result } = renderHook(() =>
      useAnimationTimer({ initial, durationFn, delayFn }),
    );

    // keyIndex should be 0 at start
    expect(result.current[0]).toBe(0);

    // After 2 seconds, keyIndex should still be 0
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(result.current[0]).toBe(0);

    // After 3 seconds, keyIndex should be 1
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current[0]).toBe(1);

    // After 3 more seconds, keyIndex should be 2
    act(() => {
      vi.advanceTimersByTime(6000);
    });
    expect(result.current[0]).toBe(2);
  });

  it("changes the duration after the time set in delayFn", () => {
    const initial = { duration: 0, delay: 3 };
    const durationFn = vi.fn((): number => 1 + Math.random() * 4);
    const delayFn = vi.fn(() => 3);
    const { result } = renderHook(() =>
      useAnimationTimer({ initial, durationFn, delayFn }),
    );

    const duration = result.current[1];

    // After 2 seconds, duration should still be the same
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(result.current[1]).toBe(duration);

    // After 3 seconds, duration should be different
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current[1]).not.toBe(duration);
  });
});
