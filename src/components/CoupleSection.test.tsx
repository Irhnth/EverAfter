import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CoupleSection } from './CoupleSection.tsx';
import { weddingData } from '../data/weddingData.ts';

describe('CoupleSection', () => {
  it('renders groom and bride full names and parents', () => {
    render(
      <CoupleSection
        groom={weddingData.couple.groom}
        bride={weddingData.couple.bride}
      />,
    );

    expect(screen.getByText(weddingData.couple.groom.fullName)).toBeInTheDocument();
    expect(screen.getByText(weddingData.couple.bride.fullName)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(weddingData.couple.groom.fatherName))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(weddingData.couple.bride.motherName))).toBeInTheDocument();
  });
});
