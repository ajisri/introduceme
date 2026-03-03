"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function ContrastSection() {
    const { dict } = useLanguage();

    return (
        <section
            className="swiss-container py-28 lg:py-40 border-t-[var(--border-width)] border-foreground relative"
            style={{ position: 'relative' }}
        >
            <div className="grid grid-cols-12 gap-6 lg:gap-8">
                {/* Section Label — Brutalist Badge */}
                <div className="col-span-12 mb-12 lg:mb-16">
                    <span className="contrast-label inline-block font-mono text-[10px] font-black uppercase tracking-[0.5em] bg-[var(--pop-blue)] text-white px-4 py-2 border-2 border-foreground shadow-[3px_3px_0px_var(--foreground)]">
                        {dict.landing.contrast.label}
                    </span>
                </div>

                {/* Agency Side — Faded, weak */}
                <div className="col-span-12 lg:col-span-5">
                    <div className="contrast-agency p-8 lg:p-10 border-[var(--border-width)] border-foreground/20 bg-[var(--swiss-gray)] relative" style={{ position: 'relative' }}>
                        <p className="font-mono text-[9px] uppercase tracking-[0.4em] opacity-40 mb-6">
                            {dict.landing.contrast.agencyLabel}
                        </p>
                        <p className="text-2xl lg:text-3xl font-bold leading-tight opacity-40 italic">
                            {dict.landing.contrast.agencyLine}
                        </p>
                    </div>
                </div>

                {/* Divider — Postmodern break */}
                <div className="hidden lg:flex col-span-2 items-center justify-center">
                    <div className="w-px h-full bg-foreground/15 relative" style={{ position: 'relative' }}>
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[10px] font-black bg-[var(--pop-yellow)] text-foreground px-3 py-1 border-2 border-foreground rotate-3" style={{ position: 'absolute' }}>VS</span>
                    </div>
                </div>

                {/* Engineer Side — Strong, brutalist */}
                <div className="col-span-12 lg:col-span-5">
                    <div className="contrast-engineer p-8 lg:p-10 border-[var(--border-width)] border-foreground bg-background relative shadow-[6px_6px_0px_var(--foreground)] hover:shadow-[8px_8px_0px_var(--swiss-red)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300" style={{ position: 'relative' }}>
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-[var(--swiss-red)]" style={{ position: 'absolute' }} />
                        <p className="font-mono text-[9px] uppercase tracking-[0.4em] opacity-60 mb-6 text-[var(--swiss-red)]">
                            {dict.landing.contrast.engineerLabel}
                        </p>
                        <p className="text-2xl lg:text-3xl font-black uppercase tracking-tight leading-tight font-[family-name:var(--font-unbounded)]">
                            {dict.landing.contrast.engineerLine}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
