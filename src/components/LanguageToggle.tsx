"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            onClick={() => setLanguage(language === "en" ? "id" : "en")}
            className="relative h-10 px-4 flex items-center gap-2 border-2 border-foreground bg-background transition-all group overflow-hidden"
            aria-label="Toggle Language"
        >
            <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

            <div className="relative z-10 flex items-center gap-2 font-mono text-[10px] font-black uppercase text-foreground group-hover:text-background transition-colors">
                <span className={language === "en" ? "opacity-100" : "opacity-40"}>EN</span>
                <span className="opacity-20">/</span>
                <span className={language === "id" ? "opacity-100" : "opacity-40"}>ID</span>
            </div>

            {/* Minimalist Switcher Icon */}
            <div className="relative z-10 w-3 h-3 flex items-center justify-center">
                <div className={`w-2 h-2 ${language === "id" ? "bg-[var(--swiss-red)]" : "bg-[var(--pop-blue)]"} transition-colors duration-500`}></div>
            </div>
        </button>
    );
}
