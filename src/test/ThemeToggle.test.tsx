import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ThemeToggle from '@/components/ThemeToggle';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

// Mock next-themes to control theme state
vi.mock('next-themes', async () => {
    const actual = await vi.importActual('next-themes');
    return {
        ...actual as any,
        useTheme: () => ({
            theme: themeState.theme,
            setTheme: (t: string) => {
                themeState.theme = t;
                renderTheme(); // Trigger re-render mock
            }
        })
    };
});

let themeState = { theme: 'light' };
const renderTheme = () => { };

const wrapper = ({ children }: { children: ReactNode }) => (
    <ThemeProvider attribute="class" defaultTheme="light">{children}</ThemeProvider>
);

describe('ThemeToggle', () => {
    beforeEach(() => {
        themeState.theme = 'light';
    });

    it('should render the toggle button', () => {
        render(<ThemeToggle />, { wrapper });
        expect(screen.getByLabelText('Toggle Theme')).toBeDefined();
    });

    it('should switch between light and dark text labels', async () => {
        const { rerender } = render(<ThemeToggle />, { wrapper });

        // Initial state should show LGT active (opacity-100)
        const lgt = screen.getByText('LGT');
        const drk = screen.getByText('DRK');

        expect(lgt).toHaveClass('opacity-100');
        expect(drk).toHaveClass('opacity-40');

        const button = screen.getByLabelText('Toggle Theme');

        await act(async () => {
            button.click();
        });

        // After click, drk should be active
        rerender(<ThemeToggle />);
        expect(screen.getByText('DRK')).toHaveClass('opacity-100');
        expect(screen.getByText('LGT')).toHaveClass('opacity-40');
    });
});
