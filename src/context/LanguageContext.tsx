"use client";
import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { en } from "@/lib/i18n/en";
import { id } from "@/lib/i18n/id";
import { Language, Dictionary } from "@/types";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    dict: Dictionary;
}

const dictionaries: Record<Language, Dictionary> = {
    en,
    id
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * LANGUAGE PROVIDER
 * Optimized with useMemo and dynamic sync of HTML lang attribute.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang && (savedLang === "en" || savedLang === "id")) {
            setLanguageState(savedLang);
        } else {
            const browserLang = navigator.language.startsWith("id") ? "id" : "en";
            setLanguageState(browserLang);
        }
        setMounted(true);
    }, []);

    // Synchronize HTML lang attribute for SEO and Accessibility
    useEffect(() => {
        if (mounted) {
            document.documentElement.lang = language;
        }
    }, [language, mounted]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
    };

    // Memoize dictionary to avoid re-calculating on every render
    const currentDict = useMemo(() =>
        mounted ? dictionaries[language] : dictionaries.en,
        [language, mounted]);

    // Memoize context value to prevent global re-render hell
    const contextValue = useMemo(() => ({
        language: mounted ? language : "en",
        setLanguage,
        dict: currentDict
    }), [language, mounted, currentDict]);

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
