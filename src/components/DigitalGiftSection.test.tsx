import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { DigitalGiftSection } from './DigitalGiftSection.tsx';
import { weddingData } from '../data/weddingData.ts';

describe('DigitalGiftSection', () => {
  it('renders bank accounts and copy button', () => {
    render(
      <DigitalGiftSection
        bankAccounts={weddingData.gifts.bankAccounts}
        shippingAddress={weddingData.gifts.shippingAddress}
      />,
    );

    expect(screen.getByText('Bank Central Asia (BCA)')).toBeInTheDocument();
    expect(screen.getByText('8830192811')).toBeInTheDocument();
    expect(screen.getByText(/Romeo Montague/i)).toBeInTheDocument();

    const copyBtns = screen.getAllByText('Salin Rekening');
    expect(copyBtns.length).toBeGreaterThanOrEqual(1);
  });

  it('triggers copy handler on button click', async () => {
    // Mock navigator.clipboard
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });

    render(
      <DigitalGiftSection
        bankAccounts={weddingData.gifts.bankAccounts}
        shippingAddress={weddingData.gifts.shippingAddress}
      />,
    );

    const firstCopyBtn = screen.getAllByText('Salin Rekening')[0];
    fireEvent.click(firstCopyBtn);

    expect(await screen.findByText('Tersalin!')).toBeInTheDocument();
  });
});
