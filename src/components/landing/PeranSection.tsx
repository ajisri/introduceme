"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function PeranSection() {
    const { dict } = useLanguage();

    return (
        <section
            id="authority"
            className="w-full bg-foreground text-background py-32 lg:py-48 overflow-hidden relative"
            style={{ position: 'relative' }}
        >
            {/* Halftone Pop Art texture */}
            <div className="absolute top-0 left-0 w-full h-full bg-halftone opacity-5" style={{ position: 'absolute' }} />

            {/* Postmodern accent — broken grid element */}
            <div className="absolute bottom-[10%] right-[4%] w-[18vw] h-[18vw] max-w-[248px] max-h-[248px] border-[var(--border-width)] border-background/15 rotate-12 -z-0 opacity-20" style={{ position: 'absolute' }} />

            <div className="swiss-container relative z-10" style={{ position: 'relative' }}>
                <div className="grid grid-cols-12 gap-6 lg:gap-8">
                    {/* Section Label — Inverted Badge */}
                    <div className="col-span-12 mb-10 lg:mb-14">
                        <span className="peran-label inline-block font-mono text-[10px] font-black uppercase tracking-[0.5em] bg-[var(--swiss-red)] text-white px-4 py-2 border-2 border-[var(--swiss-red)] shadow-[3px_3px_0px_rgba(255,255,255,0.2)]">
                            {dict.landing.peran.label}
                        </span>
                    </div>

                    {/* Title — Unbounded Display */}
                    <div className="col-span-12 lg:col-span-8 mb-16 lg:mb-24">
                        <h2 className="peran-title text-[10vw] lg:text-[clamp(3.5rem,6vw,6rem)] font-black uppercase leading-[0.85] tracking-[-0.04em] font-[family-name:var(--font-unbounded)]">
                            {dict.landing.peran.title}
                        </h2>
                    </div>

                    {/* What We're NOT — Negation with strikethrough */}
                    <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
                        <div className="peran-negation space-y-4">
                            <p className="text-xl lg:text-2xl font-bold leading-tight opacity-35 line-through decoration-2 decoration-[var(--swiss-red)]">
                                {dict.landing.peran.notLine1}
                            </p>
                            <p className="text-xl lg:text-2xl font-bold leading-tight opacity-35 line-through decoration-2 decoration-[var(--swiss-red)]">
                                {dict.landing.peran.notLine2}
                            </p>
                        </div>
                    </div>

                    {/* Core Definition — Brutalist left border */}
                    <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                        <div className="peran-main border-l-[var(--border-width)] border-background/30 pl-8 lg:pl-12">
                            <p className="text-xl lg:text-2xl font-black uppercase tracking-tight leading-snug">
                                {dict.landing.peran.mainDesc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
