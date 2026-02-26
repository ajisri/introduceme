"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// =============================================================================
// LEGACY SECTION - "Chaos to Order" Animation
// Design: Pop Art + Postmodern irony, demonstrating control over chaos
// Color: Swiss Red theme (NOT blue) for brand consistency
// =============================================================================

const images = [
    "/story/1_awakening.png",
    "/story/2_aksa.png",
    "/story/3_time.png",
    "/story/4_stuck.png",
    "/story/7_reflection.png",
    "/story/8_journey.png"
];

export default function LegacySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const { dict } = useLanguage();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".legacy-card") as HTMLElement[];
            if (cards.length === 0) return;

            // ====================================================================
            // INITIAL STATE: Controlled Chaos
            // Random positions but within reasonable bounds for better UX
            // ====================================================================
            cards.forEach((card, i) => {
                // Create varied but balanced chaos
                const angle = (i / cards.length) * Math.PI * 2;
                const radius = 150 + Math.random() * 200;

                gsap.set(card, {
                    x: Math.cos(angle + Math.random() * 0.5) * radius,
                    y: Math.sin(angle + Math.random() * 0.5) * radius * 0.6,
                    rotate: (Math.random() - 0.5) * 35,
                    scale: 0.75 + Math.random() * 0.15,
                    opacity: 0,
                    filter: "blur(8px) grayscale(100%)"
                });
            });

            // ====================================================================
            // SCROLL ANIMATION: Chaos → Order Transition
            // Extended end point for smoother completion before section exits
            // ====================================================================
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",      // Start earlier
                    end: "center center",  // End at center for complete reveal
                    scrub: 0.6,            // Slightly faster response
                }
            });

            // Staggered reveal with smooth easing
            tl.to(cards, {
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                opacity: 1,
                filter: "blur(0px) grayscale(0%)",
                stagger: {
                    amount: 0.4,
                    from: "center" // Reveal from center outward
                },
                ease: "power2.out",
                force3D: true
            });

            // ====================================================================
            // POST-REVEAL: Subtle Floating Animation
            // Organic movement that doesn't fight with scroll position
            // ====================================================================
            cards.forEach((card, i) => {
                const floatTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "center center",
                        toggleActions: "play pause resume pause"
                    }
                });

                floatTl.to(card, {
                    y: `+=${8 + (i % 3) * 4}`,
                    duration: 2.5 + (i % 4) * 0.4,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.15
                });
            });

            // ====================================================================
            // MOUSE PARALLAX: Subtle Interactive Movement
            // ====================================================================
            const handleMouseMove = (e: MouseEvent) => {
                if (!gridRef.current) return;

                const rect = gridRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const xOffset = (e.clientX - centerX) / rect.width;
                const yOffset = (e.clientY - centerY) / rect.height;

                cards.forEach((card, i) => {
                    const factor = (i % 2 === 0 ? 1 : -1) * (0.5 + (i % 3) * 0.25);
                    gsap.to(card, {
                        x: xOffset * 25 * factor,
                        y: yOffset * 15 * factor,
                        duration: 0.8,
                        ease: "power2.out",
                        overwrite: "auto"
                    });
                });
            };

            const container = containerRef.current;
            if (container) {
                container.addEventListener("mousemove", handleMouseMove);
            }

            return () => {
                if (container) {
                    container.removeEventListener("mousemove", handleMouseMove);
                }
            };

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[150vh] bg-background text-foreground flex flex-col items-center justify-start overflow-hidden py-32 lg:py-44 border-y-[var(--border-width)] border-foreground"
        >
            {/* Background Textures */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-halftone" />
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(var(--grid-line)_1px,transparent_1px)] [background-size:40px_40px]" />

            {/* ================================================================
                SECTION HEADER - Swiss Style with Pop Art Accent
                Using Swiss Red with black border for strong contrast
            ================================================================ */}
            <div className="relative mb-24 lg:mb-32 text-center z-10 px-4">
                {/* Pop Art Label */}
                <div className="inline-block bg-[var(--swiss-red)] text-white px-5 py-2 font-mono text-[9px] uppercase font-black tracking-[0.4em] mb-8 -rotate-1 border-[3px] border-black shadow-[4px_4px_0px_black]">
                    {dict.legacy.badge}
                </div>

                {/* Main Title - Swiss Typography */}
                <h2 className="text-[14vw] lg:text-[10vw] font-black uppercase leading-[0.75] tracking-[-0.03em]">
                    {dict.legacy.title1}<br />
                    <span className="text-stroke">{dict.legacy.title2}</span><br />
                    {/* Swiss Red with black text-shadow for stronger contrast */}
                    <span
                        className="text-[var(--swiss-red)] relative"
                        style={{
                            textShadow: '4px 4px 0px black, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black',
                            WebkitTextStroke: '2px black',
                            paintOrder: 'stroke fill'
                        }}
                    >
                        {dict.legacy.title3}
                    </span>
                </h2>

                <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40 mt-10">
                    {dict.legacy.subtitle}
                </p>
            </div>

            {/* ================================================================
                IMAGE GRID - Chaos to Order Cards
            ================================================================ */}
            <div
                ref={gridRef}
                className="relative w-full max-w-7xl h-auto flex items-center justify-center py-16 lg:py-24 px-4 lg:px-6"
            >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10 w-full perspective-1000">
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className={`
                                legacy-card brutalist-card relative aspect-[3/4] w-full group cursor-pointer overflow-hidden p-0
                                ${i % 2 === 0 ? 'lg:translate-y-8' : 'lg:-translate-y-8'}
                            `}
                            style={{
                                willChange: 'transform, opacity, filter',
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            {/* Image Container */}
                            <div className="absolute inset-0 bg-background overflow-hidden">
                                <Image
                                    src={src}
                                    alt={`Legacy Archive ${i + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    className="object-cover transition-all duration-700 grayscale-0 group-hover:grayscale-0 scale-100 group-hover:scale-110"
                                    loading="lazy"
                                />

                                {/* Reference Label - Top Right */}
                                <div className="absolute top-0 right-0 bg-foreground text-background px-3 py-1.5 font-mono text-[8px] font-black uppercase tracking-wider z-20">
                                    {dict.legacy.ref}{String(i + 1).padStart(2, '0')}
                                </div>

                                {/* Hover Info Panel - Bottom */}
                                <div className="absolute bottom-0 left-0 w-full p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-foreground text-background z-30">
                                    <div className="flex justify-between items-center w-full">
                                        <span className="font-mono text-[9px] font-black uppercase tracking-wide">
                                            {dict.legacy.sequence}{String(i + 1).padStart(2, '0')}
                                        </span>
                                        <div className="w-2 h-2 bg-[var(--pop-green)] rounded-full animate-pulse" />
                                    </div>
                                </div>

                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================================================================
                SECTION FOOTER - Quote + Trust Indicators
            ================================================================ */}
            <div className="text-center mt-24 lg:mt-32 z-10 px-4 lg:px-6">
                <div className="max-w-3xl mx-auto p-10 lg:p-14 border-[var(--border-width)] border-foreground bg-background relative">
                    {/* Accent Corner */}
                    <div className="absolute top-0 left-0 w-8 h-8 bg-[var(--swiss-red)]" />

                    <p className="text-xl lg:text-3xl font-black uppercase tracking-tight italic leading-tight">
                        {dict.legacy.quote}
                    </p>

                    {/* Trust Metrics */}
                    <div className="mt-10 pt-8 border-t-2 border-foreground/10 flex flex-col sm:flex-row justify-center gap-6 lg:gap-12 font-mono text-[9px] font-black uppercase tracking-widest opacity-50">
                        <span>{dict.legacy.trustIndex}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{dict.legacy.version}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
