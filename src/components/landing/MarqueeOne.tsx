"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function MarqueeOne() {
    const { dict } = useLanguage();

    return (
        <div className="w-full border-y border-foreground/10 py-8 bg-transparent overflow-hidden relative" style={{ minHeight: "clamp(100px, 10vh + 30px, 150px)" }}>
            <div className="animate-marquee flex w-max will-change-transform" aria-hidden="true" style={{ animationDuration: "180s" }}>
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center shrink-0 gap-20 px-10">
                        <span className="font-bold uppercase text-foreground/20 whitespace-nowrap tracking-[-0.04em] font-unbounded"
                            style={{ fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3rem)" }}>
                            {dict.landing.marquee1.part1}
                        </span>

                        <div className="border border-foreground/10 rotate-45 shrink-0 bg-foreground/[0.03]"
                            style={{ width: "clamp(1.5rem, 2vw + 0.5rem, 2.2rem)", height: "clamp(1.5rem, 2vw + 0.5rem, 2.2rem)" }} />

                        <span className="font-bold uppercase text-foreground/20 whitespace-nowrap tracking-[-0.04em] font-unbounded"
                            style={{ fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3rem)" }}>
                            {dict.landing.marquee1.part2}
                        </span>

                        <div className="border border-foreground/10 rounded-full shrink-0 bg-foreground/[0.03]"
                            style={{ width: "clamp(1.5rem, 2vw + 0.5rem, 2.2rem)", height: "clamp(1.5rem, 2vw + 0.5rem, 2.2rem)" }} />

                        <span className="font-bold uppercase text-foreground/20 whitespace-nowrap tracking-[-0.04em] font-unbounded"
                            style={{ fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3rem)" }}>
                            {dict.landing.marquee1.part3}
                        </span>

                        <div className="border border-foreground/10 rotate-12 shrink-0 bg-foreground/[0.03]"
                            style={{ width: "clamp(1.5rem, 2vw + 0.5rem, 2.2rem)", height: "clamp(1.5rem, 2vw + 0.5rem, 2.2rem)" }} />
                    </div>
                ))}
            </div>
        </div>
    );
}
