import { render } from '@testing-library/react';
import { HeroSection } from './HeroSection';
import '@testing-library/jest-dom/extend-expect'; // Importing jest-dom matchers

describe('HeroSection', () => {
  it('renders correctly', () => {
    const { getByText } = render(<HeroSection />);
    expect(getByText(/Transform Your Photos/i)).toBeInTheDocument();
  });
});
