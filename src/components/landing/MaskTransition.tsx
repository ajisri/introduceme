"use client";
import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface MaskTransitionProps {
    children: ReactNode;
    bgColor?: string;
}

/**
 * MaskTransition — Olivier Larose inspired "SVG Mask Section Transition"
 * 
 * Creates a "portal" effect between sections. A circular clip-path starts 
 * as a tiny point at the center of the viewport, then scales up to reveal
 * the section underneath as the user scrolls. This transforms a hard
 * section border into a cinematic opening — the user feels like they're
 * entering a new "room" (Decision Room philosophy).
 * 
 * Uses CSS `clip-path: circle()` animated via GSAP ScrollTrigger scrub 
 * for maximum performance (composited on GPU, no DOM reflow).
 */
export default function MaskTransition({ children, bgColor = "var(--background)" }: MaskTransitionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const maskRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !maskRef.current) return;

        const ctx = gsap.context(() => {
            // Start with a tiny circle, expand to cover full viewport
            gsap.set(maskRef.current, {
                clipPath: "circle(0% at 50% 50%)",
            });

            gsap.to(maskRef.current, {
                clipPath: "circle(100% at 50% 50%)",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    end: "top 10%",
                    scrub: 1,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="relative">
            <div
                ref={maskRef}
                className="relative z-10"
                style={{ backgroundColor: bgColor }}
            >
                {children}
            </div>
        </div>
    );
}
