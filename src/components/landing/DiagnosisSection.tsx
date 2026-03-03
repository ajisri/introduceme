"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function DiagnosisSection() {
    const { dict } = useLanguage();

    const accentColors = ["var(--swiss-red)", "var(--pop-pink)", "var(--pop-blue)", "var(--pop-green)"];

    return (
        <section
            className="swiss-container py-32 lg:py-48 border-t-[var(--border-width)] border-foreground relative"
            style={{ position: 'relative' }}
        >
            {/* Halftone background texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-halftone-dense" style={{ position: 'absolute' }} />

            <div className="grid grid-cols-12 gap-6 lg:gap-8">
                {/* Section Label — Brutalist Badge */}
                <div className="col-span-12 mb-10 lg:mb-14">
                    <span className="diagnosis-label inline-block font-mono text-[10px] font-black uppercase tracking-[0.5em] bg-foreground text-background px-4 py-2 border-2 border-foreground">
                        {dict.landing.diagnosis.label}
                    </span>
                </div>

                {/* Title — Unbounded Display */}
                <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
                    <h2 className="diagnosis-title text-4xl lg:text-5xl font-black uppercase leading-[0.85] tracking-[-0.04em] font-[family-name:var(--font-unbounded)]">
                        {dict.landing.diagnosis.title}
                    </h2>
                </div>

                {/* Bullet Points — Numbered with Pop Art color accents */}
                <div className="col-span-12 lg:col-span-5 lg:col-start-7">
                    <div className="space-y-6 lg:space-y-8">
                        {dict.landing.diagnosis.items.map((item, i) => (
                            <div
                                key={i}
                                className="diagnosis-item flex items-start gap-5 group cursor-pointer"
                            >
                                <span
                                    className="inline-flex items-center justify-center w-8 h-8 shrink-0 text-[10px] font-mono font-black text-white border-2 border-foreground transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                                    style={{ backgroundColor: accentColors[i % accentColors.length] }}
                                >
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <p className="text-lg lg:text-xl font-bold leading-tight opacity-70 group-hover:opacity-100 transition-opacity pt-1">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Conclusion — Heavy, separated */}
                <div className="col-span-12 mt-20 lg:mt-32">
                    <div className="diagnosis-conclusion max-w-[700px] border-b-[6px] border-foreground pb-8">
                        <p className="text-2xl lg:text-3xl font-bold leading-relaxed opacity-60">
                            {dict.landing.diagnosis.conclusion1}
                        </p>
                        <p className="text-2xl lg:text-3xl font-black uppercase tracking-tight leading-tight mt-2 font-[family-name:var(--font-unbounded)]">
                            {dict.landing.diagnosis.conclusion2}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
