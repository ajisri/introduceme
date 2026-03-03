import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock matchMedia if it doesn't exist in JSDOM
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});

// Mock localStorage
const localStorageMock = (function () {
    let store: Record<string, string> = {};
    return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => { store[key] = value.toString(); },
        clear: () => { store = {}; },
        removeItem: (key: string) => { delete store[key]; }
    };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Global GSAP mock to avoid animation issues in tests
vi.mock('gsap', () => ({
    default: {
        to: vi.fn(),
        from: vi.fn(),
        set: vi.fn(),
        timeline: vi.fn(() => ({
            to: vi.fn().mockReturnThis(),
            from: vi.fn().mockReturnThis(),
            set: vi.fn().mockReturnThis(),
            kill: vi.fn().mockReturnThis(),
        })),
        registerPlugin: vi.fn(),
        context: vi.fn((fn) => {
            fn();
            return { revert: vi.fn() };
        }),
        utils: {
            toArray: vi.fn((selector) => {
                if (typeof selector === 'string') return Array.from(document.querySelectorAll(selector));
                return selector;
            }),
        },
        ticker: {
            add: vi.fn(),
            remove: vi.fn(),
            lagSmoothing: vi.fn(),
        }
    },
    ScrollTrigger: {
        registerPlugin: vi.fn(),
        update: vi.fn(),
        refresh: vi.fn(),
    }
}));
