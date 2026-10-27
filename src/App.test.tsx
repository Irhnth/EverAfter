import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App.tsx';

describe('App full integration', () => {
  it('sets document title on load', () => {
    render(<App />);
    expect(document.title).toContain('Romeo & Juliet');
  });

  it('renders CoverGate on load and opens invitation upon click', async () => {
    render(<App />);

    // Cover gate is initially visible
    expect(screen.getByText(/The Wedding Celebration of/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Buka Undangan/i })).toBeInTheDocument();

    // Click to open invitation
    const openButton = screen.getByRole('button', { name: /Buka Undangan/i });
    fireEvent.click(openButton);

    // After opening, audio player and HUD become active
    await waitFor(() => {
      expect(screen.getByLabelText(/Putar musik|Hentikan musik/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Navigasi Cepat/i)).toBeInTheDocument();
    });

    // Content sections are present
    expect(screen.getByText(/Kedua Mempelai/i)).toBeInTheDocument();
    expect(screen.getByText(/Waktu & Tempat Acara/i)).toBeInTheDocument();
    expect(screen.getByText(/Kisah Cinta Kami/i)).toBeInTheDocument();
    expect(screen.getByText(/Galeri Prewedding/i)).toBeInTheDocument();
    expect(screen.getByText(/Konfirmasi Kehadiran & Doa Restu/i)).toBeInTheDocument();
    expect(screen.getByText(/Tanda Kasih & Hadiah Digital/i)).toBeInTheDocument();
  });
});
