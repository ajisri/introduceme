"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "next-themes";
import Header from "./Header";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import LegacySection from "./LegacySection";
import {
    HeroSection,
    MarqueeOne,
    RefleksiSection,
    PeranSection,
    BuktiSection,
    PenutupSection,
    NotesSection
} from "./landing";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    // BEST PRACTICE: Suppress null target warnings for React where elements conditionally unmount
    gsap.config({ nullTargetWarn: false });
}

// STUDIO MONKS COLOR PALETTE (Themed)
const THEME_PALETTE: Record<string, { light: { bg: string, fg: string }, dark: { bg: string, fg: string } }> = {
    hero: {
        light: { bg: "#F5F5F0", fg: "#0E0E0E" },
        dark: { bg: "#0a0a0a", fg: "#F5F5F0" }
    },
    refleksi: {
        light: { bg: "#E8E9E4", fg: "#0E0E0E" },
        dark: { bg: "#121212", fg: "#F5F5F0" }
    },
    bukti: {
        light: { bg: "#E6E5E0", fg: "#0E0E0E" },
        dark: { bg: "#141416", fg: "#F5F5F0" }
    },
    legacy: {
        light: { bg: "#F5F5F0", fg: "#0E0E0E" },
        dark: { bg: "#0a0a0a", fg: "#F5F5F0" }
    },
    penutup: {
        light: { bg: "#050505", fg: "#F5F5F0" },
        dark: { bg: "#000000", fg: "#F5F5F0" }
    },
    notes: {
        light: { bg: "#EAE9E5", fg: "#0E0E0E" },
        dark: { bg: "#111113", fg: "#F5F5F0" }
    },
    peran: {
        light: { bg: "#F5F2EB", fg: "#0E0E0E" },
        dark: { bg: "#151513", fg: "#F5F5F0" }
    }
};

/**
 * LANDING PAGE - Insinyur Kepercayaan
 * Psychological architecture: Refleksi → Diagnosis → Definisi → Bukti → Penutup
 * Visual philosophy: Precision = minimal. White space = confidence.
 */
export default function LandingPage() {
    const { resolvedTheme } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const animationStartedRef = useRef(false);

    // PERFORMANCE OPTIMIZATION: GSAP quickTo refs for buttery 60fps mousemove without garbage collection lag
    const xTo = useRef<gsap.QuickToFunc | null>(null);
    const yTo = useRef<gsap.QuickToFunc | null>(null);
    const xRevTo = useRef<gsap.QuickToFunc | null>(null);
    const yRevTo = useRef<gsap.QuickToFunc | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible || animationStartedRef.current) return;

        const ctx = gsap.context(() => {
            animationStartedRef.current = true;

            {/* 1. HERO ANIMATIONS — Olivier Larose Style 'Line-by-Line' Reveal */}
            const heroLines = gsap.utils.toArray(".reveal-mask h1, .reveal-mask h2") as HTMLElement[];
            gsap.set(heroLines, { y: "110%", opacity: 0 });
            gsap.to(heroLines, { 
                y: "0%", 
                opacity: 1, 
                duration: 1.8, 
                stagger: 0.15, 
                ease: "power4.out", 
                delay: 0.5 
            });

            const heroSubtext = gsap.utils.toArray(".hero-subtext") as HTMLElement[];
            gsap.set(heroSubtext, { y: 20, opacity: 0 });
            gsap.to(heroSubtext, { 
                y: 0, 
                opacity: 1, 
                duration: 1.2, 
                delay: 1.4, 
                ease: "expo.out" 
            });

            gsap.from(".hero-cta-wrapper", { scale: 0.9, opacity: 0, duration: 1.4, delay: 1.8, ease: "expo.out" });

            // 2. ACCENT FLOATING ANIMATIONS — Subdued & Ghostly
            gsap.to(".pop-accent-1", { rotation: 12, scale: 1.05, x: 20, duration: 6, yoyo: true, repeat: -1, ease: "sine.inOut" });
            gsap.to(".pop-accent-2", { rotation: -8, scale: 0.95, y: -20, duration: 8, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1 });

            // Scroll indicator bar pulse
            const scrollBars = gsap.utils.toArray(".scroll-indicator-bar");
            if (scrollBars.length) {
                gsap.to(scrollBars, { 
                    scaleY: 1, 
                    duration: 2, 
                    ease: "power2.inOut", 
                    repeat: -1, 
                    yoyo: true,
                    transformOrigin: "top left"
                });
            }

            // OPTIMIZATION: Initialize quickTo instances once, rather than creating new tweens 60 times a second
            const parallaxEls = gsap.utils.toArray(".hero-parallax");
            const parallaxRevEls = gsap.utils.toArray(".hero-parallax-reverse");

            if (parallaxEls.length) {
                xTo.current = gsap.quickTo(parallaxEls, "x", { duration: 0.8, ease: "power2.out" });
                yTo.current = gsap.quickTo(parallaxEls, "y", { duration: 0.8, ease: "power2.out" });
            }
            if (parallaxRevEls.length) {
                xRevTo.current = gsap.quickTo(parallaxRevEls, "x", { duration: 1, ease: "power2.out" });
                yRevTo.current = gsap.quickTo(parallaxRevEls, "y", { duration: 1, ease: "power2.out" });
            }

            // 3. REFLEKSI — Reveal with precision
            gsap.from(".refleksi-label", {
                scrollTrigger: { trigger: ".refleksi-label", start: "top 90%", toggleActions: "play none none reverse" },
                x: -30, opacity: 0, duration: 1, ease: "power4.out"
            });
            const refleksiLines = gsap.utils.toArray(".refleksi-line") as HTMLElement[];
            gsap.set(refleksiLines, { y: 40, opacity: 0 });
            gsap.to(refleksiLines, {
                scrollTrigger: { trigger: ".refleksi-line", start: "top 85%" },
                y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out"
            });
            gsap.from(".refleksi-question", {
                scrollTrigger: { trigger: ".refleksi-question", start: "top 80%" },
                y: 60, opacity: 0, duration: 1.5, ease: "power4.out"
            });
            gsap.from(".refleksi-desc", {
                scrollTrigger: { trigger: ".refleksi-desc", start: "top 85%" },
                scale: 0.98, opacity: 0, duration: 1.2, ease: "power2.out"
            });

            // 4. BUKTI — Stats scale reveal (subtle)
            gsap.from(".bukti-label", {
                scrollTrigger: { trigger: ".bukti-label", start: "top 90%" },
                x: -30, opacity: 0, duration: 1, ease: "power4.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, [isVisible]);

    const bgInitializedRef = useRef(false);

    // B. STUDIO MONKS BACKGROUND TRANSITIONS (Themed Priority Effect)
    useEffect(() => {
        // Only re-initialize if theme actually resolved and we haven't already set up for this specific theme
        if (!resolvedTheme) return;

        const ctx = gsap.context(() => {
            const colorTriggers = gsap.utils.toArray(".color-trigger") as HTMLElement[];
            
            // Reduced logging noise
            if (!bgInitializedRef.current) {
                console.log(`[LEVEL_UP] Protocol: ${resolvedTheme}. Monitoring ${colorTriggers.length} zones.`);
            }

            if (colorTriggers.length > 0) {
                // Determine Mode
                const mode = (resolvedTheme === "dark") ? "dark" : "light";

                // Initialize Root Colors
                const firstKey = colorTriggers[0].dataset.themeKey || "hero";
                const firstPalette = THEME_PALETTE[firstKey][mode];
                
                gsap.set(document.documentElement, { 
                    "--background": firstPalette.bg,
                    "--foreground": firstPalette.fg 
                });

                colorTriggers.forEach((trigger, i) => {
                    // Check height: only trigger for "Meaningful" sections (> 30% of screen height)
                    const sectionHeight = trigger.offsetHeight;
                    const threshold = window.innerHeight * 0.3;
                    
                    if (sectionHeight < threshold) {
                        return;
                    }

                    if (i === 0) return;

                    const key = trigger.dataset.themeKey || "hero";
                    const palette = THEME_PALETTE[key][mode];

                    // Smooth Variable Interpolation
                    gsap.to(document.documentElement, {
                        "--background": palette.bg,
                        "--foreground": palette.fg,
                        ease: "power2.inOut",
                        immediateRender: false,
                        overwrite: "auto",
                        scrollTrigger: {
                            trigger: trigger,
                            start: "top 95%", // Start very early for seamless blend
                            end: "top 25%",   // End late for luxurious feel
                            scrub: 0.8,       // Liquid smooth interpolation
                        }
                    });
                });
            }
            bgInitializedRef.current = true;
        });
        return () => {
            ctx.revert();
            bgInitializedRef.current = false;
        };
    }, [resolvedTheme]); 

    const handleMouseMove = (e: React.MouseEvent) => {
        // PERF: Only calculate and apply values if the quickTo instances were successfully created
        if (!xTo.current || !yTo.current) return;
        
        const moveX = (e.clientX - window.innerWidth / 2) * 0.015;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.015;
        
        xTo.current(moveX);
        yTo.current(moveY);
        
        if (xRevTo.current && yRevTo.current) {
            xRevTo.current(-moveX * 1.5);
            yRevTo.current(-moveY * 1.5);
        }
    };

    return (
        <main
            ref={containerRef}
            className="w-full bg-background text-foreground"
            style={{ position: 'relative', width: '100%' }}
        >
            <CustomCursor />
            <Header />

            <div className="color-trigger" data-theme-key="hero">
                <HeroSection handleMouseMove={handleMouseMove} />
                <MarqueeOne />
            </div>
            <div className="color-trigger" data-theme-key="refleksi">
                <RefleksiSection />
            </div>
            
            <div className="color-trigger" data-theme-key="bukti">
                <BuktiSection />
            </div>

            <div className="color-trigger" data-theme-key="peran">
                <PeranSection />
            </div>

            <div className="color-trigger" data-theme-key="notes">
                <NotesSection />
            </div>
            
            <div className="color-trigger" data-theme-key="legacy">
                <LegacySection />
            </div>
            
            <div className="color-trigger" data-theme-key="penutup">
                <PenutupSection />
            </div>

            <Footer />
        </main>
    );
}
