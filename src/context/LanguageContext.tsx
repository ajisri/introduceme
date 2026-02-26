"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "@/lib/i18n/en";
import { id } from "@/lib/i18n/id";

export type Language = "en" | "id";
type Dictionary = typeof en;

// Deep partial allows nested keys to be optional if missing
type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    dict: Dictionary;
}

const dictionaries: Record<Language, Dictionary> = {
    en,
    id: id as unknown as Dictionary // Ensure id satisfies the type structure of en
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
    };

    // Prevent hydration mismatch by returning English server-side, 
    // overriding client-side after mount if necessary.
    const currentDict = mounted ? dictionaries[language] : dictionaries.en;

    return (
        <LanguageContext.Provider value={{ language: mounted ? language : "en", setLanguage, dict: currentDict }}>
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
