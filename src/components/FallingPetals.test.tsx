import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FallingPetals } from './FallingPetals.tsx';

describe('FallingPetals Component', () => {
  it('renders canvas element with pointer-events-none class', () => {
    render(<FallingPetals density={5} />);
    const canvas = screen.getByTestId('falling-petals-canvas');
    expect(canvas).toBeInTheDocument();
    expect(canvas).toHaveClass('pointer-events-none');
    expect(canvas).toHaveClass('fixed');
  });
});

