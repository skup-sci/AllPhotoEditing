import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainLayout } from './MainLayout';

describe('MainLayout', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <MainLayout>
        <div>Test Child</div>
      </MainLayout>
    );
    expect(getByText('Test Child')).toBeInTheDocument();
  });
});
