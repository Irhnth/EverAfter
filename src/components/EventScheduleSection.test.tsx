import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EventScheduleSection } from './EventScheduleSection.tsx';
import { weddingData } from '../data/weddingData.ts';

describe('EventScheduleSection', () => {
  it('renders event titles, venues, and buttons', () => {
    render(
      <EventScheduleSection
        events={weddingData.events}
        targetDate={weddingData.couple.weddingDate}
      />,
    );

    expect(screen.getByText('Akad Nikah')).toBeInTheDocument();
    expect(screen.getByText('Resepsi Pernikahan')).toBeInTheDocument();
    expect(screen.getByText('Masjid Raya Al-Ikhlas')).toBeInTheDocument();
    expect(screen.getByText('Grand Ballroom Hotel Mulia')).toBeInTheDocument();
    expect(screen.getAllByText('Petunjuk Maps').length).toBe(2);
  });
});
