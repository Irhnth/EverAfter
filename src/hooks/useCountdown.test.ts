import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useCountdown } from './useCountdown.ts';

describe('useCountdown hook', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('calculates remaining days, hours, minutes, and seconds', () => {
    const now = new Date('2026-11-10T00:00:00Z').getTime();
    vi.setSystemTime(now);

    const targetDate = '2026-11-14T00:00:00Z'; // 4 days later
    const { result } = renderHook(() => useCountdown(targetDate));

    expect(result.current.days).toBe(4);
    expect(result.current.hours).toBe(0);
    expect(result.current.minutes).toBe(0);
    expect(result.current.seconds).toBe(0);
    expect(result.current.isEnded).toBe(false);

    // Advance 1 second
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current.days).toBe(3);
    expect(result.current.hours).toBe(23);
    expect(result.current.minutes).toBe(59);
    expect(result.current.seconds).toBe(59);
  });

  it('flags isEnded when date has passed', () => {
    const now = new Date('2026-11-20T00:00:00Z').getTime();
    vi.setSystemTime(now);

    const pastDate = '2026-11-14T00:00:00Z';
    const { result } = renderHook(() => useCountdown(pastDate));

    expect(result.current.isEnded).toBe(true);
    expect(result.current.days).toBe(0);
    expect(result.current.hours).toBe(0);
    expect(result.current.minutes).toBe(0);
    expect(result.current.seconds).toBe(0);
  });
});
