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
            // TEXT REVEAL: Masterpiece Quote (Studio Monks Level)
            // ====================================================================
            const trustWords = gsap.utils.toArray(".trust-quote-word") as HTMLElement[];
            if (trustWords.length > 0) {
                gsap.fromTo(trustWords, 
                    { 
                        y: "150%", 
                        rotateZ: 8,
                        opacity: 0
                    },
                    {
                        y: "0%",
                        rotateZ: 0,
                        opacity: 1,
                        stagger: 0.04,
                        duration: 1.4,
                        ease: "expo.out",
                        scrollTrigger: {
                            trigger: ".trust-quote-wrapper",
                            start: "top 80%",
                        }
                    }
                );
            }

            // ====================================================================
            // PINNING: "Mulailah bersaing di kepercayaan" stays fixed
            // ====================================================================
            ScrollTrigger.create({
                trigger: ".trust-quote-part-2",
                start: "center center",
                end: "+=150%", // Jaga kalimat setengah scroll lagi setelah berhenti (reveal selesai)
                pin: true,
                pinSpacing: false, 
                anticipatePin: 1,
            });

            // ====================================================================
            // PSYCHOLOGICAL BACKGROUND ANIMATION
            // ====================================================================
            gsap.to(".moire-layer", {
                rotate: 2,
                scale: 2.2,
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
            
            gsap.to(".red-glow-accent", {
                scale: 1.15,
                opacity: 0.20, // Melemahkan puncaknya sedikit
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            gsap.to(".quote-container-border", {
                borderTopColor: "rgba(var(--foreground-rgb), 0.8)",
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // FADE OUT ALL VISUALS AT END OF SECTION
            gsap.to([".moire-layer", ".red-glow-accent", ".trust-quote-part-2", ".quote-container-border"], {
                opacity: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "bottom 20%", 
                    end: "bottom 0%",
                    scrub: true,
                    invalidateOnRefresh: true
                }
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
            className="relative w-full min-h-[150vh] bg-transparent text-foreground flex flex-col items-center justify-start overflow-hidden py-32 lg:py-44 border-y-[var(--border-width)] border-foreground"
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
                            <div className="absolute inset-0 bg-transparent overflow-hidden">
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
                SECTION FOOTER - MASTERPIECE TYPOGRAPHY
            ================================================================ */}
            <div className="w-full mt-32 lg:mt-48 z-10 px-4 lg:px-10 pb-20 overflow-hidden">
                <div className="quote-container-border w-full max-w-[1600px] mx-auto border-t-[1px] border-foreground/10 relative pt-12 lg:pt-24">
                    
                    {/* Meta Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 lg:mb-32">
                        {/* Trust Metrics Badge */}
                        <div className="flex items-center gap-4 bg-foreground text-background px-6 py-3 font-mono text-[10px] md:text-xs font-black uppercase tracking-widest">
                            <span className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[var(--swiss-red)] animate-pulse" />
                                {dict.legacy.trustIndex}
                            </span>
                            <span className="opacity-50">/</span>
                            <span>{dict.legacy.version}</span>
                        </div>

                        {/* Historic Data Quote as smaller, refined meta text */}
                        <p className="max-w-md text-left md:text-right text-sm md:text-base font-semibold uppercase tracking-widest leading-relaxed text-foreground/80 border-l-[3px] md:border-l-0 md:border-r-[3px] border-[var(--swiss-red)] pl-4 md:pl-0 md:pr-4">
                            "{dict.legacy.quote}"
                        </p>
                    </div>

                    {/* MASSIVE TRUST QUOTE */}
                    <div className="trust-quote-wrapper relative w-full flex flex-col gap-8 lg:gap-12">
                        
                        {/* PSYCHOLOGICAL BACKGROUND ACCENTS - Softened Red */}
                        <div className="red-glow-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[1200px] bg-[var(--swiss-red)] opacity-15 pointer-events-none z-0" 
                             style={{ borderRadius: '50%', filter: 'blur(160px)', transformStyle: 'preserve-3d' }} 
                        />
                        
                        {/* MOIRÉ ILLUSION LAYER - Ultra Thin Concentric Circles */}
                        <div className="moire-layer absolute inset-x-[-20%] inset-y-[-50%] opacity-[0.02] pointer-events-none z-0" 
                             style={{ 
                                 backgroundImage: `repeating-radial-gradient(circle at center, var(--foreground) 0px, var(--foreground) 0.5px, transparent 0.5px, transparent 24px)`,
                                 backgroundSize: '100% 100%',
                                 transform: 'rotate(0deg) scale(2)',
                                 filter: 'blur(0.5px)'
                             }} 
                        />

                        {/* First Part */}
                        <h3 className="flex flex-wrap content-start items-start justify-start gap-x-[0.3em] gap-y-[0.1em] text-[11vw] sm:text-[9vw] lg:text-[7vw] font-black uppercase leading-[0.9] tracking-[-0.03em] w-full pb-4 perspective-1000 z-10 relative">
                            {(dict.legacy.trustQuote || "").split(',')[0].trim().split(' ').map((word: string, i: number, arr: string[]) => (
                                <span key={i} className="inline-block overflow-hidden pb-[0.2em] whitespace-nowrap">
                                    <span className="trust-quote-word inline-block origin-bottom text-foreground">
                                        {word}{i === arr.length - 1 ? ',' : ''}
                                    </span>
                                </span>
                            ))}
                        </h3>

                        {/* Second Part - Raised further and enhanced background interaction */}
                        <h3 className="trust-quote-part-2 flex flex-wrap content-start items-start justify-end gap-x-[0.25em] gap-y-[0.1em] text-[8.5vw] sm:text-[7vw] lg:text-[5.5vw] font-black uppercase leading-[0.9] tracking-[-0.04em] w-full mt-[30vh] lg:mt-[60vh] pb-4 perspective-1000 z-50 relative text-right">
                            {(dict.legacy.trustQuote || "").split(',').slice(1).join(',').trim().split(' ').map((word: string, i: number) => (
                                <span key={i} className="inline-block overflow-hidden pb-[0.2em] pt-[0.1em] px-[0.05em] align-top whitespace-nowrap">
                                    <span className="trust-quote-word inline-block origin-bottom text-[var(--pop-blue)]"
                                        style={{
                                            textShadow: '2.5px 2.5px 0px var(--foreground), 5px 5px 0px rgba(0,0,0,0.1)',
                                            WebkitTextStroke: '1.2px var(--foreground)',
                                            paintOrder: 'stroke fill'
                                        }}>
                                        {word}
                                    </span>
                                </span>
                            ))}
                        </h3>
                    </div>

                </div>
            </div>
        </section>
    );
}
