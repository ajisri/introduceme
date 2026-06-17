"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";

export default function MarqueeOne() {
    const { dict } = useLanguage();
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        const tween = gsap.to(marquee, {
            x: "-50%",
            ease: "none",
            duration: 150, // Ultra slow, smooth linear scroll
            repeat: -1
        });

        return () => {
            tween.kill();
        };
    }, []);

    return (
        <div className="w-full border-y border-foreground/10 py-3 bg-transparent overflow-hidden relative">
            <div ref={marqueeRef} className="flex w-max will-change-transform" aria-hidden="true">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center shrink-0 gap-10 px-6">
                        <span className="font-bold uppercase text-foreground/20 whitespace-nowrap tracking-[-0.04em] font-unbounded"
                            style={{ fontSize: "clamp(0.9rem, 1.2vw + 0.1rem, 1.2rem)" }}>
                            {dict.landing.marquee1.part1}
                        </span>

                        <div className="border border-foreground/10 rotate-45 shrink-0 bg-foreground/[0.03]"
                            style={{ width: "clamp(0.6rem, 1vw, 0.8rem)", height: "clamp(0.6rem, 1vw, 0.8rem)" }} />

                        <span className="font-bold uppercase text-foreground/20 whitespace-nowrap tracking-[-0.04em] font-unbounded"
                            style={{ fontSize: "clamp(0.9rem, 1.2vw + 0.1rem, 1.2rem)" }}>
                            {dict.landing.marquee1.part2}
                        </span>

                        <div className="border border-foreground/10 rounded-full shrink-0 bg-foreground/[0.03]"
                            style={{ width: "clamp(0.6rem, 1vw, 0.8rem)", height: "clamp(0.6rem, 1vw, 0.8rem)" }} />

                        <span className="font-bold uppercase text-foreground/20 whitespace-nowrap tracking-[-0.04em] font-unbounded"
                            style={{ fontSize: "clamp(0.9rem, 1.2vw + 0.1rem, 1.2rem)" }}>
                            {dict.landing.marquee1.part3}
                        </span>

                        <div className="border border-foreground/10 rotate-12 shrink-0 bg-foreground/[0.03]"
                            style={{ width: "clamp(0.6rem, 1vw, 0.8rem)", height: "clamp(0.6rem, 1vw, 0.8rem)" }} />
                    </div>
                ))}
            </div>
        </div>
    );
}
