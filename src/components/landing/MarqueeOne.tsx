"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function MarqueeOne() {
    const { dict } = useLanguage();

    return (
        <div className="w-full border-y-swiss border-foreground py-10 bg-background overflow-hidden relative" style={{ minHeight: "clamp(140px, 15vh + 50px, 200px)" }}>
            <div className="animate-marquee flex w-max will-change-transform" aria-hidden="true">
                {[1, 2].map((i) => (
                    <div key={i} className="flex items-center shrink-0 gap-20 px-10">
                        <span className="font-black uppercase text-stroke whitespace-nowrap tracking-[-0.04em] font-unbounded"
                            style={{ fontSize: "clamp(3rem, 5vw + 1rem, 4.5rem)" }}>
                            {dict.landing.marquee1.part1}
                        </span>

                        <div className="bg-pop-pink border-swiss border-foreground rotate-45 shrink-0"
                            style={{ width: "clamp(3rem, 4vw + 1rem, 4rem)", height: "clamp(3rem, 4vw + 1rem, 4rem)" }} />

                        <span className="font-black uppercase text-pop-blue whitespace-nowrap tracking-[-0.04em] font-unbounded"
                            style={{ fontSize: "clamp(3rem, 5vw + 1rem, 4.5rem)" }}>
                            {dict.landing.marquee1.part2}
                        </span>

                        <div className="bg-pop-green border-swiss border-foreground rounded-full shrink-0"
                            style={{ width: "clamp(3rem, 4vw + 1rem, 4rem)", height: "clamp(3rem, 4vw + 1rem, 4rem)" }} />

                        <span className="font-black uppercase text-swiss-red whitespace-nowrap tracking-[-0.04em] font-unbounded"
                            style={{ fontSize: "clamp(3rem, 5vw + 1rem, 4.5rem)" }}>
                            {dict.landing.marquee1.part3}
                        </span>

                        <div className="bg-pop-yellow border-swiss border-foreground rotate-12 shrink-0"
                            style={{ width: "clamp(3rem, 4vw + 1rem, 4rem)", height: "clamp(3rem, 4vw + 1rem, 4rem)" }} />
                    </div>
                ))}
            </div>
        </div>
    );
}
