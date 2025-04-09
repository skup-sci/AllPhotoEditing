import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainLayout } from './MainLayout';
import { mockRouter } from '../../../test/__mocks__/nextRouter';
import { useRouter } from 'next/router';

// Mock the useRouter hook
jest.mock('next/router', () => ({
  useRouter: () => mockRouter
}));

describe('MainLayout', () => {
  it('renders children correctly', () => {
    render(
      <MainLayout>
        <div>Test Content</div>
      </MainLayout>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
