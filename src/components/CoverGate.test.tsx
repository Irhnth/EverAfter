import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CoverGate } from './CoverGate.tsx';

describe('CoverGate Component', () => {
  it('renders guest name, couple names, and open button', () => {
    const handleOpen = vi.fn();
    render(
      <CoverGate
        isOpen={false}
        onOpen={handleOpen}
        guestName="Bpk. Budi Santoso"
        groomName="Romeo"
        brideName="Juliet"
        dateFormatted="Sabtu, 14 November 2026"
      />,
    );

    expect(screen.getByText('Bpk. Budi Santoso')).toBeInTheDocument();
    expect(screen.getAllByText(/Romeo/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Juliet/i).length).toBeGreaterThan(0);
    expect(screen.getByRole('button', { name: /buka undangan/i })).toBeInTheDocument();
  });

  it('calls onOpen callback when Buka Undangan is clicked', async () => {
    const handleOpen = vi.fn();
    render(
      <CoverGate
        isOpen={false}
        onOpen={handleOpen}
        guestName="Sahabat Tercinta"
        groomName="Romeo"
        brideName="Juliet"
        dateFormatted="Sabtu, 14 November 2026"
      />,
    );

    const button = screen.getByRole('button', { name: /buka undangan/i });
    fireEvent.click(button);

    await waitFor(
      () => {
        expect(handleOpen).toHaveBeenCalledTimes(1);
      },
      { timeout: 1500 },
    );
  });
});
