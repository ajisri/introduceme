"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative h-10 px-4 flex items-center gap-2 border-2 border-foreground bg-background transition-all group overflow-hidden"
            aria-label="Toggle Theme"
        >
            <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

            <div className="relative z-10 flex items-center gap-2 font-mono text-[10px] font-black uppercase text-foreground group-hover:text-background transition-colors">
                <span className={theme === "light" ? "opacity-100" : "opacity-40"}>LGT</span>
                <span className="opacity-20">/</span>
                <span className={theme === "dark" ? "opacity-100" : "opacity-40"}>DRK</span>
            </div>

            {/* Minimalist Switcher Icon */}
            <div className="relative z-10 w-3 h-3 border-2 border-current rounded-full flex items-center justify-center">
                <div className={`w-1 h-1 bg-current transition-transform duration-500 ${theme === "dark" ? "scale-100" : "scale-0"}`}></div>
            </div>
        </button>
    );
}
