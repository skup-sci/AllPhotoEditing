import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';
import { ReactNode } from 'react';

type MockComponentProps = {
  children: ReactNode;
  className?: string;
};

type ButtonProps = MockComponentProps & {
  asChild?: boolean;
  variant?: string;
  size?: string;
};

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/portfolio'
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    header: ({ children, ...props }: MockComponentProps) => (
      <header {...props}>{children}</header>
    ),
  },
}));

// Mock UI components
jest.mock('@/components/ui/dropdown-menu', () => ({
  DropdownMenu: ({ children }: MockComponentProps) => <div data-testid="dropdown-root">{children}</div>,
  DropdownMenuTrigger: ({ children }: MockComponentProps) => <div data-testid="dropdown-trigger">{children}</div>,
  DropdownMenuContent: ({ children }: MockComponentProps) => <div data-testid="dropdown-content">{children}</div>,
  DropdownMenuItem: ({ children }: MockComponentProps) => <div data-testid="dropdown-item">{children}</div>,
}));

jest.mock('@/components/ui/sheet', () => ({
  Sheet: ({ children }: MockComponentProps) => <div data-testid="sheet-root">{children}</div>,
  SheetTrigger: ({ children }: MockComponentProps) => <div data-testid="sheet-trigger">{children}</div>,
  SheetContent: ({ children }: MockComponentProps) => <div data-testid="sheet-content">{children}</div>,
}));

jest.mock('@/components/ui/button', () => ({
  Button: ({ children, className, asChild, ...props }: ButtonProps) => {
    const Comp = asChild ? 'div' : 'button';
    return <Comp className={className} {...props}>{children}</Comp>;
  }
}));

describe('Header', () => {
  beforeEach(() => {
    // Reset window.innerWidth
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));
  });

  it('renders logo and navigation links', () => {
    render(<Header />);
    expect(screen.getByText('AllPhotoEditing')).toBeInTheDocument();
    
    const desktopNav = screen.getByRole('navigation', { name: /desktop navigation/i });
    expect(desktopNav).toBeInTheDocument();
    expect(within(desktopNav).getByText('Home')).toBeInTheDocument();
    expect(within(desktopNav).getByText('Services')).toBeInTheDocument();
    expect(within(desktopNav).getByText('Portfolio')).toBeInTheDocument();
  });

  it('shows correct active link based on current path', () => {
    render(<Header />);
    const desktopNav = screen.getByRole('navigation', { name: /desktop navigation/i });
    const links = within(desktopNav).getAllByRole('link');
    const portfolioLink = links.find(link => link.textContent === 'Portfolio');
    expect(portfolioLink).toHaveClass('text-violet-600');
  });

  it('shows mobile menu button on small screens', () => {
    global.innerWidth = 768;
    global.dispatchEvent(new Event('resize'));

    render(<Header />);
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    expect(menuButton).toBeInTheDocument();
  });

  it('opens services dropdown when clicked', () => {
    render(<Header />);
    
    const desktopNav = screen.getByRole('navigation', { name: /desktop navigation/i });
    const servicesButton = within(desktopNav).getByRole('button', { name: /services/i });
    fireEvent.click(servicesButton);

    const dropdownContent = screen.getByTestId('dropdown-content');
    expect(dropdownContent).toBeInTheDocument();
    expect(within(dropdownContent).getByText('Photo Editing')).toBeInTheDocument();
    expect(within(dropdownContent).getByText('Virtual Staging')).toBeInTheDocument();
  });

  it('changes header style on scroll', () => {
    render(<Header />);
    const header = document.querySelector('header');
    
    expect(header).toHaveClass('bg-transparent');
    
    global.scrollY = 20;
    fireEvent.scroll(window);
    
    expect(header).toHaveClass('bg-white/95');
  });

  it('renders action buttons', () => {
    render(<Header />);
    const authNav = screen.getByRole('navigation', { name: /authentication/i });
    expect(within(authNav).getByRole('link', { name: /login/i })).toBeInTheDocument();
    expect(within(authNav).getByRole('link', { name: /sign up free/i })).toBeInTheDocument();
  });

  it('shows mobile menu content when menu button is clicked', () => {
    global.innerWidth = 768;
    global.dispatchEvent(new Event('resize'));

    render(<Header />);
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(menuButton);

    const sheetContent = screen.getByTestId('sheet-content');
    expect(sheetContent).toBeInTheDocument();
    
    const mobileNav = within(sheetContent).getByRole('navigation', { name: /mobile navigation/i });
    expect(within(mobileNav).getByText(/login/i)).toBeInTheDocument();
  });
});