import React from 'react';
import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/ui/button';

export const mockDropdownMenu = {
  Root: ({ children }: { children: React.ReactNode }) => <div data-testid="dropdown-root">{children}</div>,
  Trigger: ({ children }: { children: React.ReactNode }) => <div data-testid="dropdown-trigger">{children}</div>,
  Content: ({ children }: { children: React.ReactNode }) => <div data-testid="dropdown-content">{children}</div>,
  Item: ({ children }: { children: React.ReactNode }) => <div data-testid="dropdown-item">{children}</div>,
};

export const mockSheet = {
  Root: ({ children }: { children: React.ReactNode }) => <div data-testid="sheet-root">{children}</div>,
  Trigger: ({ children }: { children: React.ReactNode }) => <div data-testid="sheet-trigger">{children}</div>,
  Content: ({ children }: { children: React.ReactNode }) => <div data-testid="sheet-content">{children}</div>,
  Portal: ({ children }: { children: React.ReactNode }) => <div data-testid="sheet-portal">{children}</div>,
};

type ElementType = 'button' | 'div';

export const mockButton = React.forwardRef<HTMLButtonElement | HTMLDivElement, React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { asChild?: boolean }>(
  ({ children, className, asChild, ...props }, ref) => {
    const Comp = asChild ? 'div' : 'button';
    return React.createElement(Comp, {
      ...props,
      className,
      ref: ref as React.Ref<HTMLElement>,
      children
    });
  }
);