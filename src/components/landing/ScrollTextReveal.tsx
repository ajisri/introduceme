"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface ScrollTextRevealProps {
    text: string;
    className?: string;
    tag?: "p" | "h2" | "h3" | "span";
    triggerStart?: string;
    triggerEnd?: string;
}

/**
 * ScrollTextReveal — Olivier Larose inspired "Text Gradient Scroll Opacity"
 * 
 * Each word starts at low opacity (0.12) and illuminates to full opacity
 * as the user scrolls through the section. This makes dense text feel
 * weightless — the reader doesn't face a wall of text, they discover
 * each word progressively, as if the page is reading their mind.
 * 
 * Philosophy: "Cermin" — the text reveals itself in the pace of thought.
 */
export default function ScrollTextReveal({
    text,
    className = "",
    tag: Tag = "p",
    triggerStart = "top 80%",
    triggerEnd = "top 20%",
}: ScrollTextRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const words = containerRef.current.querySelectorAll(".scroll-word");
        if (words.length === 0) return;

        const ctx = gsap.context(() => {
            gsap.set(words, { opacity: 0.12 });

            gsap.to(words, {
                opacity: 1,
                stagger: 0.05,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: triggerStart,
                    end: triggerEnd,
                    scrub: 1,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, [text, triggerStart, triggerEnd]);

    const words = text.split(" ");

    return (
        <div ref={containerRef}>
            <Tag className={className}>
                {words.map((word, i) => (
                    <span
                        key={i}
                        className="scroll-word inline-block mr-[0.2em] will-change-[opacity]"
                    >
                        {word}{" "}
                    </span>
                ))}
            </Tag>
        </div>
    );
}
