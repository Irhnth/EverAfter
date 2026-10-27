import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { RsvpSection } from './RsvpSection.tsx';

// Mock canvas-confetti
vi.mock('canvas-confetti', () => ({
  default: vi.fn(),
}));

describe('RsvpSection', () => {
  it('renders form inputs and wishes wall', () => {
    render(<RsvpSection defaultGuestName="Bpk. Hendra" />);

    expect(screen.getByDisplayValue('Bpk. Hendra')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /pasti hadir/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /berhalangan/i })).toBeInTheDocument();
    expect(screen.getByText(/Untaian Doa & Harapan/i)).toBeInTheDocument();
  });

  it('submits form and shows thank you message', async () => {
    render(<RsvpSection defaultGuestName="Keluarga Pratama" />);

    const submitBtn = screen.getByRole('button', { name: /kirim doa restu/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Terima Kasih!/i)).toBeInTheDocument();
    });
  });
});
