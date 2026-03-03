"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function RefleksiSection() {
    const { dict } = useLanguage();

    return (
        <section
            id="about"
            className="swiss-container py-32 lg:py-48 relative"
            style={{ position: 'relative' }}
        >
            {/* Pop Art Accent — Postmodern broken grid */}
            <div className="absolute top-16 right-[6%] w-[14vw] h-[14vw] max-w-[200px] max-h-[200px] bg-[var(--pop-yellow)] opacity-[0.08] rotate-6 -z-10 border-[var(--border-width)] border-foreground" style={{ position: 'absolute' }} />

            <div className="grid grid-cols-12 gap-6 lg:gap-8">
                {/* Section Label — Brutalist Badge */}
                <div className="col-span-12 mb-10 lg:mb-14">
                    <span className="refleksi-label inline-block font-mono text-[10px] font-black uppercase tracking-[0.5em] bg-[var(--pop-pink)] text-white px-4 py-2 border-2 border-foreground shadow-[3px_3px_0px_var(--foreground)]">
                        {dict.landing.refleksi.label}
                    </span>
                </div>

                {/* Leading Statement */}
                <div className="col-span-12 lg:col-span-7 mb-12 lg:mb-20">
                    <p className="refleksi-line text-2xl lg:text-3xl font-bold leading-relaxed opacity-70">
                        {dict.landing.refleksi.line1}
                    </p>
                    <p className="refleksi-line text-2xl lg:text-3xl font-bold leading-relaxed opacity-70 mt-4">
                        {dict.landing.refleksi.line2}
                    </p>
                </div>

                {/* The Question — Unbounded Display, Isolated */}
                <div className="col-span-12 lg:col-span-10 mb-16 lg:mb-24">
                    <h2 className="refleksi-question text-[8vw] lg:text-[5vw] font-black uppercase leading-[0.85] tracking-[-0.04em] font-[family-name:var(--font-unbounded)]">
                        {dict.landing.refleksi.question}
                    </h2>
                </div>

                {/* Closing Observation — Brutalist border-left */}
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                    <div className="refleksi-desc border-l-[var(--border-width)] border-foreground pl-8 lg:pl-12">
                        <p className="text-lg lg:text-xl font-medium leading-relaxed opacity-50">
                            {dict.landing.refleksi.desc1}
                        </p>
                        <p className="text-lg lg:text-xl font-black uppercase tracking-tight leading-tight mt-4">
                            {dict.landing.refleksi.desc2}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
