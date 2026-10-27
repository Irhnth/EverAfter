import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { FloatingAudioPlayer } from './FloatingAudioPlayer.tsx';
import { QuickAccessHUD } from './QuickAccessHUD.tsx';

describe('FloatingAudioPlayer', () => {
  it('toggles audio on click', () => {
    const handleToggle = vi.fn();
    render(<FloatingAudioPlayer isPlaying={false} onToggle={handleToggle} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleToggle).toHaveBeenCalledTimes(1);
  });
});

describe('QuickAccessHUD', () => {
  it('renders all quick action buttons and handles click', () => {
    const handleScroll = vi.fn();
    render(<QuickAccessHUD onScrollTo={handleScroll} />);

    expect(screen.getByText('Mempelai')).toBeInTheDocument();
    expect(screen.getByText('Acara')).toBeInTheDocument();
    expect(screen.getByText('Lokasi')).toBeInTheDocument();
    expect(screen.getByText('RSVP')).toBeInTheDocument();

    fireEvent.click(screen.getByText('RSVP'));
    expect(handleScroll).toHaveBeenCalledWith('rsvp');
  });
});
