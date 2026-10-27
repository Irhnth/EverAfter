import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LoveStoryTimeline } from './LoveStoryTimeline.tsx';
import { GallerySection } from './GallerySection.tsx';
import { weddingData } from '../data/weddingData.ts';

describe('LoveStoryTimeline', () => {
  it('renders story milestones', () => {
    render(<LoveStoryTimeline stories={weddingData.loveStory} />);
    expect(screen.getByText('Pertemuan Pertama')).toBeInTheDocument();
    expect(screen.getByText('Komitmen & Restu')).toBeInTheDocument();
  });
});

describe('GallerySection', () => {
  it('opens and closes lightbox on photo click', async () => {
    render(<GallerySection photos={weddingData.gallery} />);
    const firstPhoto = screen.getByAltText(weddingData.gallery[0].alt);
    fireEvent.click(firstPhoto);

    // Lightbox should be open with close button
    const closeBtn = screen.getByRole('button', { name: /tutup foto/i });
    expect(closeBtn).toBeInTheDocument();

    // Close on click
    fireEvent.click(closeBtn);
    await waitFor(() => {
      expect(screen.queryByRole('button', { name: /tutup foto/i })).not.toBeInTheDocument();
    });
  });
});
