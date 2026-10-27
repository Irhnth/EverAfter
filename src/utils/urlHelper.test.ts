import { describe, it, expect } from 'vitest';
import { getGuestNameFromUrl } from './urlHelper.ts';

describe('getGuestNameFromUrl helper', () => {
  it('returns default fallback when no query param exists', () => {
    expect(getGuestNameFromUrl('')).toBe('Tamu Undangan');
    expect(getGuestNameFromUrl('?other=123')).toBe('Tamu Undangan');
  });

  it('parses ?to= parameter and replaces pluses with spaces', () => {
    expect(getGuestNameFromUrl('?to=Bpk.+Budi')).toBe('Bpk. Budi');
    expect(getGuestNameFromUrl('?to=Hendra+Pratama+%26+Partner')).toBe('Hendra Pratama & Partner');
  });

  it('sanitizes potential HTML injection tags', () => {
    expect(getGuestNameFromUrl('?to=<script>alert("xss")</script>Dimas')).toBe('alert("xss")Dimas');
  });

  it('trims excess whitespace and respects empty values', () => {
    expect(getGuestNameFromUrl('?to=+')).toBe('Tamu Undangan');
  });
});
