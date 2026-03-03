"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function BuktiSection() {
    const { dict } = useLanguage();

    const accentColors = ["var(--swiss-red)", "var(--pop-blue)", "var(--pop-green)", "var(--pop-pink)"];

    return (
        <section
            className="swiss-container py-32 lg:py-48 relative"
            style={{ position: 'relative' }}
        >
            <div className="grid grid-cols-12 gap-6 lg:gap-8">
                {/* Section Label — Brutalist Badge */}
                <div className="col-span-12 mb-12 lg:mb-20">
                    <span className="bukti-label inline-block font-mono text-[10px] font-black uppercase tracking-[0.5em] bg-foreground text-background px-4 py-2 border-2 border-foreground">
                        {dict.landing.bukti.label}
                    </span>
                </div>

                {/* Stats Grid — Brutalist cells with pop art hover */}
                <div className="col-span-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-[var(--border-width)] border-foreground">
                        {dict.landing.bukti.items.map((item, i) => (
                            <div
                                key={i}
                                className={`bukti-item bg-background p-5 lg:p-6 group cursor-pointer border-foreground text-center flex flex-col items-center justify-center
                                    border-r-[var(--border-width)] border-b-[var(--border-width)]
                                    ${i % 2 === 1 ? 'border-r-0' : ''} 
                                    ${i >= 2 ? 'border-b-0' : 'border-b-[var(--border-width)]'}
                                    lg:border-b-0 lg:border-r-[var(--border-width)]
                                    ${i === 3 ? 'lg:border-r-0' : ''}
                                    ${i === 1 ? 'lg:border-r-[var(--border-width)]' : ''}
                                    hover:bg-foreground hover:text-background transition-colors duration-300 relative`}
                                style={{ position: 'relative', minHeight: '160px' }}
                            >
                                {/* Top accent bar on hover */}
                                <div
                                    className="absolute top-0 left-0 w-full h-1 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                                    style={{ backgroundColor: accentColors[i % accentColors.length], position: 'absolute' }}
                                />
                                <p className="stat-value text-lg sm:text-xl lg:text-[clamp(1rem,2.2vw,2rem)] font-black tracking-[-0.08em] leading-none mb-4 font-[family-name:var(--font-unbounded)] break-all lg:break-normal w-full px-1">
                                    {item.val}
                                </p>
                                <p className="font-mono text-[7px] sm:text-[8px] uppercase tracking-[0.2em] opacity-40 group-hover:opacity-70 transition-opacity w-full">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
