// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    header: jest.fn().mockImplementation(({ children, ...props }) => {
      const propsString = Object.entries(props)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ');
      return `<header ${propsString}>${children}</header>`;
    }),
  },
}));

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/portfolio'
}));

// Mock UI components
jest.mock('@/components/ui/dropdown-menu', () => ({
  DropdownMenu: jest.fn(({ children }) => children),
  DropdownMenuTrigger: jest.fn(({ children }) => children),
  DropdownMenuContent: jest.fn(({ children }) => `<div data-testid="dropdown-content">${children}</div>`),
  DropdownMenuItem: jest.fn(({ children }) => children),
}));

jest.mock('@/components/ui/sheet', () => ({
  Sheet: jest.fn(({ children }) => children),
  SheetTrigger: jest.fn(({ children }) => children),
  SheetContent: jest.fn(({ children }) => `<div data-testid="sheet-content">${children}</div>`),
}));

jest.mock('@/components/ui/button', () => ({
  Button: jest.fn(({ children, className, asChild, ...props }) => {
    const Comp = asChild ? 'div' : 'button';
    const propsString = Object.entries(props)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    return `<${Comp} class="${className}" ${propsString}>${children}</${Comp}>`;
  }),
}));