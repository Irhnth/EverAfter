import { describe, it, expect } from 'vitest';
import { weddingData } from './weddingData.ts';

describe('weddingData contract integrity', () => {
  it('contains valid couple data and names', () => {
    expect(weddingData.couple.groom.fullName).toBeTruthy();
    expect(weddingData.couple.bride.fullName).toBeTruthy();
    expect(weddingData.couple.groom.photoUrl).toMatch(/^https?:\/\//);
    expect(weddingData.couple.bride.photoUrl).toMatch(/^https?:\/\//);
  });

  it('contains valid event schedules with maps URLs', () => {
    expect(weddingData.events.length).toBeGreaterThanOrEqual(2);
    weddingData.events.forEach((event) => {
      expect(event.title).toBeTruthy();
      expect(event.venueAddress).toBeTruthy();
      expect(event.googleMapsUrl).toContain('maps');
    });
  });

  it('contains love story milestones and bank accounts', () => {
    expect(weddingData.loveStory.length).toBeGreaterThanOrEqual(2);
    expect(weddingData.gifts.bankAccounts.length).toBeGreaterThanOrEqual(1);
    expect(weddingData.gifts.bankAccounts[0].accountNumber).toBeTruthy();
  });
});
