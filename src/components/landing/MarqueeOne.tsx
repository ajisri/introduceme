"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function MarqueeOne() {
    const { dict } = useLanguage();

    return (
        <div className="w-full border-y-[var(--border-width)] border-foreground py-10 bg-background overflow-hidden min-h-[140px] lg:min-h-[200px]" style={{ position: 'relative' }}>
            <div className="animate-marquee flex w-max" aria-hidden="true">
                {[1, 2].map((i) => (
                    <div key={i} className="flex items-center shrink-0 gap-20 px-10">
                        <span className="text-5xl lg:text-7xl font-black uppercase text-stroke whitespace-nowrap tracking-[-0.04em] font-[family-name:var(--font-unbounded)]">{dict.landing.marquee1.part1}</span>
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[var(--pop-pink)] border-[var(--border-width)] border-foreground rotate-45 shrink-0" />
                        <span className="text-5xl lg:text-7xl font-black uppercase text-[var(--pop-blue)] whitespace-nowrap tracking-[-0.04em] font-[family-name:var(--font-unbounded)]">{dict.landing.marquee1.part2}</span>
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[var(--pop-green)] border-[var(--border-width)] border-foreground rounded-full shrink-0" />
                        <span className="text-5xl lg:text-7xl font-black uppercase text-[var(--swiss-red)] whitespace-nowrap tracking-[-0.04em] font-[family-name:var(--font-unbounded)]">{dict.landing.marquee1.part3}</span>
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[var(--pop-yellow)] border-[var(--border-width)] border-foreground rotate-12 shrink-0" />
                    </div>
                ))}
            </div>
        </div>
    );
}
