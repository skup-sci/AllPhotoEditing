import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroSection } from './HeroSection';
import { mockRouter } from '../../../test/__mocks__/nextRouter';

jest.mock('next/router', () => ({
  useRouter: () => mockRouter
}));

// Mock global Image constructor
const mockImage = {
  onload: jest.fn(),
  onerror: jest.fn(),
};

// @ts-ignore
global.Image = jest.fn().mockImplementation(() => mockImage);

describe('HeroSection', () => {
  it('renders correctly', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Transform Your Photos/i)).toBeInTheDocument();
  });
});
