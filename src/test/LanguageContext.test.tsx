import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';
import { ReactNode } from 'react';

// Help component to test the context
const TestComponent = () => {
    const { language, setLanguage, dict } = useLanguage();
    return (
        <div>
            <span data-testid="lang">{language}</span>
            <span data-testid="title">{dict.landing.hero.title1}</span>
            <button onClick={() => setLanguage('id')}>Switch to ID</button>
        </div>
    );
};

const wrapper = ({ children }: { children: ReactNode }) => (
    <LanguageProvider>{children}</LanguageProvider>
);

describe('LanguageContext', () => {
    beforeEach(() => {
        window.localStorage.clear();
    });

    it('should provide default language as en', () => {
        render(<TestComponent />, { wrapper });
        expect(screen.getByTestId('lang')).toHaveTextContent('en');
    });

    it('should switch language to id when setLanguage is called', async () => {
        render(<TestComponent />, { wrapper });

        const button = screen.getByText('Switch to ID');
        await act(async () => {
            button.click();
        });

        expect(screen.getByTestId('lang')).toHaveTextContent('id');
        expect(window.localStorage.getItem('language')).toBe('id');
        // Check if HTML lang attribute is updated
        expect(document.documentElement.lang).toBe('id');
    });

    it('should load language from localStorage on mount', () => {
        window.localStorage.setItem('language', 'id');
        render(<TestComponent />, { wrapper });

        // Note: The second render in useEffect will update it
        // We might need to wait for mount
        expect(screen.getByTestId('lang')).toHaveTextContent('id');
    });
});
