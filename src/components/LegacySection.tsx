"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// =============================================================================
// LEGACY SECTION - "Chaos to Order" / Curated Case Studies
// Design: Swiss Pop Brutalism with structured, alternating case study grids
// Color: Swiss Red theme for brand consistency
// =============================================================================

const images = [
    "/story/1_awakening.png",
    "/story/2_aksa.png",
    "/story/7_reflection.png"
];

export default function LegacySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const { dict } = useLanguage();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".legacy-card") as HTMLElement[];
            const textBlocks = gsap.utils.toArray(".case-study-narrative") as HTMLElement[];
            if (cards.length === 0) return;

            // ====================================================================
            // INITIAL STATE: Subtle entry offsets
            // ====================================================================
            cards.forEach((card) => {
                gsap.set(card, {
                    y: 60,
                    opacity: 0,
                    filter: "blur(4px)"
                });
            });
            textBlocks.forEach((block) => {
                gsap.set(block, {
                    y: 40,
                    opacity: 0
                });
            });

            // ====================================================================
            // SCROLL ANIMATION: Staggered Fade-in/Up Reveal
            // ====================================================================
            const rows = gsap.utils.toArray(".case-study-row") as HTMLElement[];
            rows.forEach((row) => {
                const img = row.querySelector(".legacy-card");
                const narrative = row.querySelector(".case-study-narrative");

                const rowTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: row,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                });

                rowTl.to(img, {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1,
                    ease: "power2.out"
                })
                .to(narrative, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.6");
            });

            // ====================================================================
            // POST-REVEAL: Subtle Floating Animation for Images
            // ====================================================================
            cards.forEach((card, i) => {
                const floatTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 40%",
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
                start: "center 35%",
                end: "+=250%", 
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
                opacity: 0.20,
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

    // Safety fallback for cards translation structure
    const cardsList = dict.legacy.cards || [];

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
                <h2 className="text-[10vw] lg:text-[7vw] font-black leading-[0.8] tracking-[-0.03em]">
                    {dict.legacy.title1}<br />
                    <span className="text-stroke">{dict.legacy.title2}</span><br />
                    <span
                        className="text-[var(--swiss-red)] relative"
                        style={{
                            textShadow: '3px 3px 0px black, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black',
                            WebkitTextStroke: '1.5px black',
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
                IMAGE GRID - Curated Alternating Case Study Layout
            ================================================================ */}
            <div
                ref={gridRef}
                className="relative w-full max-w-[1600px] h-auto py-16 lg:py-24 px-4 lg:px-10 z-10"
            >
                <div className="flex flex-col gap-24 lg:gap-40 w-full perspective-1000">
                    {cardsList.slice(0, 3).map((card, i) => {
                        return (
                            <div 
                                key={i} 
                                className="case-study-row grid grid-cols-12 gap-8 lg:gap-16 items-center w-full"
                            >
                                {/* Poster Image Column - Consistent Left Grid Layout */}
                                <div className="col-span-12 lg:col-span-8 lg:order-1">
                                    <div
                                        className="legacy-card brutalist-card relative aspect-[3/4] w-full group cursor-pointer overflow-hidden p-0"
                                        style={{
                                            willChange: 'transform, opacity, filter',
                                            transformStyle: 'preserve-3d'
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-transparent overflow-hidden">
                                            <Image
                                                src={images[i]}
                                                alt={card.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 40vw"
                                                className="object-cover transition-all duration-700 grayscale-0 group-hover:grayscale-0 scale-100 group-hover:scale-110"
                                                loading="lazy"
                                            />

                                            {/* Coordinate indicator badge for Swiss aesthetic */}
                                            <div className="absolute top-0 left-0 bg-background/80 backdrop-blur-[2px] text-foreground px-2 py-1 font-mono text-[7px] font-bold uppercase tracking-wider z-20 border-r border-b border-foreground/15">
                                                COORD_[X_{i * 4 + 3}_Y_{20 - i * 6}]
                                            </div>

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

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                {/* Narrative Detail Column - Consistent Right Grid Layout */}
                                <div className="case-study-narrative col-span-12 lg:col-span-4 flex flex-col justify-center gap-6 p-6 lg:p-10 border border-foreground/10 bg-foreground/[0.01] backdrop-blur-[1px] relative lg:order-2 lg:col-start-9">
                                    <div className="absolute -top-3 left-6 bg-foreground text-background px-3 py-0.5 text-[8px] font-mono tracking-widest uppercase font-black">
                                        [ EXPERIMENT_0{i + 1} {"//"} {card.title} ]
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <div className="border-l-2 border-swiss-red pl-4">
                                            <span className="font-mono text-[8px] uppercase tracking-widest text-swiss-red block font-black mb-1">PERTANYAAN / QUESTION</span>
                                            <p className="text-xs sm:text-sm font-sans font-medium text-foreground/80 leading-relaxed">{card.question}</p>
                                        </div>

                                        <div className="border-l-2 border-[var(--pop-blue)] pl-4">
                                            <span className="font-mono text-[8px] uppercase tracking-widest text-[var(--pop-blue)] block font-black mb-1">HIPOTESIS / HYPOTHESIS</span>
                                            <p className="text-xs sm:text-sm font-sans font-medium text-foreground/80 leading-relaxed">{card.hypothesis}</p>
                                        </div>

                                        <div className="border-l-2 border-[var(--pop-pink)] pl-4">
                                            <span className="font-mono text-[8px] uppercase tracking-widest text-[var(--pop-pink)] block font-black mb-1">EKSPLORASI / EXPLORATION</span>
                                            <p className="text-xs sm:text-sm font-sans font-medium text-foreground/80 leading-relaxed">{card.exploration}</p>
                                        </div>

                                        <div className="border-l-2 border-[var(--pop-green)] pl-4">
                                            <span className="font-mono text-[8px] uppercase tracking-widest text-[var(--pop-green)] block font-black mb-1">PELAJARAN / INSIGHT</span>
                                            <p className="text-xs sm:text-sm font-sans font-bold text-foreground leading-relaxed">{card.insight}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
