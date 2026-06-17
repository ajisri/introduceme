"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "./Magnetic";
import { useTheme } from "next-themes";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function PenutupSection() {
    const { dict, language } = useLanguage();
    const { resolvedTheme } = useTheme();
    const containerRef = useRef<HTMLElement>(null);
    const noButtonRef = useRef<HTMLButtonElement>(null);
    const hasInitializedRef = useRef(false);

    const handleEvade = (e?: React.MouseEvent | React.TouchEvent) => {
        if (!noButtonRef.current) return;
        
        let moveX = (Math.random() - 0.5) * 200; 
        let moveY = (Math.random() - 0.5) * 100;

        if (e && 'clientX' in e) {
            const rect = noButtonRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Hitung arah dorongan kursor (mouse -> center of button)
            const dirX = centerX - e.clientX;
            const dirY = centerY - e.clientY;
            const length = Math.sqrt(dirX * dirX + dirY * dirY) || 1;
            
            // Dorong berlawanan dengan arah datangnya mouse secara agresif
            const pushX = (dirX / length) * 180 + (Math.random() * 60 - 30);
            const pushY = (dirY / length) * 100 + (Math.random() * 40 - 20);
            
            // Ambil posisi transform saat ini
            const currentX = (gsap.getProperty(noButtonRef.current, "x") as number) || 0;
            const currentY = (gsap.getProperty(noButtonRef.current, "y") as number) || 0;

            moveX = currentX + pushX;
            moveY = currentY + pushY;

            // Batasi ruang gerak agar tidak hilang dari layar ("cage limit")
            const limitX = 220;
            const limitY = 120;
            
            // Jika terpojok, teleportasi silang secara acak
            if (moveX > limitX) moveX = -limitX + Math.random() * 50;
            if (moveX < -limitX) moveX = limitX - Math.random() * 50;
            if (moveY > limitY) moveY = -limitY + Math.random() * 30;
            if (moveY < -limitY) moveY = limitY - Math.random() * 30;
        }

        gsap.to(noButtonRef.current, {
            x: moveX,
            y: moveY,
            duration: 0.1, // Jauh lebih cepat (instant reflex)
            ease: "expo.out", // Sangat tajam dan agresif 
            overwrite: "auto"
        });
    };

    useEffect(() => {
        if (!containerRef.current || hasInitializedRef.current) return;

        const ctx = gsap.context(() => {
            const penutupLines = gsap.utils.toArray(".penutup-line") as HTMLElement[];

            if (penutupLines.length === 0) return;

            // SET INITIAL STATE: Hardware acceleration enabled
            gsap.set(penutupLines, {
                opacity: 0,
                y: 50,
                force3D: true
            });
            gsap.set(".penutup-cta-container", {
                opacity: 0,
                y: 30,
                force3D: true
            });

            // CHOREOGRAPHY — Simple reveal, NO pinning
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    toggleActions: "play none none none",
                }
            });

            tl.to(penutupLines, {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.12,
                ease: "power3.out"
            })
            .to(".penutup-cta-container", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.6");

            hasInitializedRef.current = true;
        }, containerRef);

        return () => {
            ctx.revert();
            hasInitializedRef.current = false;
        };
    }, []);

    // Dilemma background: Neutral transition tone matching the previous section (Legacy)
    const dilemmaBg = resolvedTheme === "dark" ? "#151513" : "#F5F5F0";
    const dilemmaFg = resolvedTheme === "dark" ? "#F5F5F0" : "#0E0E0E";

    return (
        <div className="w-full flex flex-col">
            
            {/* =========================================
                PART 1: THE DILEMMA (PEAK REFLECTION ZONE)
                With massive vertical whitespace and full-width top border
                ========================================= */}
            <section 
                style={{ backgroundColor: dilemmaBg, color: dilemmaFg }}
                className="w-full relative border-t border-foreground/10 py-48 lg:py-64 flex flex-col justify-center items-center transition-colors duration-500 overflow-hidden"
            >
                {/* Visual grid texture guide */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-halftone" />
                
                <div className="swiss-container flex flex-col items-start gap-10 relative z-10 w-full">
                    <span className="inline-block font-mono font-black uppercase tracking-[0.4em] text-swiss-red opacity-70" style={{ fontSize: "0.65rem" }}>
                        {"// 05_THE_DILEMMA"}
                    </span>
                    
                    <div className="max-w-[1200px] space-y-8 mt-4">
                        <p className="font-medium leading-relaxed opacity-60 italic text-lg sm:text-xl lg:text-2xl max-w-4xl">
                            {dict.landing.penutup.line1} <br/> {dict.landing.penutup.line2}
                        </p>
                        <h2 className="font-unbounded font-black text-swiss-red leading-[1.0] tracking-[-0.04em]" 
                           style={{ fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)" }}>
                            {dict.landing.penutup.line3}
                        </h2>
                    </div>

                    {/* Subtle Downwards Guidance */}
                    <div className="mt-20 flex items-center gap-3 opacity-40 animate-pulse">
                        <span className="font-mono text-[9px] uppercase tracking-widest">[ SCROLL_TO_FINAL_ACTION ]</span>
                        <span className="text-xs">↓</span>
                    </div>
                </div>
            </section>

            {/* =========================================
                PART 2: THE FINAL CALL TO ACTION
                The dark, high-contrast decision block
                ========================================= */}
            <section
                ref={containerRef}
                className="w-full relative penutup-section overflow-hidden min-h-[90vh] bg-background border-t border-foreground/10 pt-24 lg:pt-32 pb-10 lg:pb-20 flex flex-col justify-between"
            >
                <div className="swiss-container flex-grow flex flex-col justify-between relative z-10 h-full">
                    
                    {/* Closing Headline */}
                    <div className="flex flex-col gap-10 py-12 lg:py-20">
                        <div className="overflow-hidden">
                            <h1 className="font-unbounded font-black text-foreground leading-[0.8] tracking-tighter w-full text-left" 
                                style={{ fontSize: "clamp(2.5rem, 7.5vw, 8.5rem)" }}>
                                {dict.landing.penutup.closing}
                            </h1>
                        </div>

                        {/* CTA Buttons */}
                        <div className="penutup-cta-container flex flex-col-reverse sm:flex-row items-start sm:items-center gap-8 relative z-50 mt-4">
                            <button 
                                ref={noButtonRef}
                                onMouseEnter={handleEvade}
                                onClick={handleEvade}
                                className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-foreground/50 border border-foreground/10 px-8 py-5 bg-transparent whitespace-nowrap hover:border-swiss-red hover:text-swiss-red transition-colors duration-300"
                                style={{ position: "relative" }}
                            >
                                {language === "id" ? "cari alternatif lain" : "find alternatives"}
                            </button>

                            <Magnetic strength={0.25}>
                                <Link href="/story" aria-label={dict.landing.penutup.cta} className="group relative flex items-center justify-between gap-10 border border-foreground/10 bg-transparent hover:bg-foreground hover:border-foreground transition-all duration-700 px-8 py-6 w-full sm:w-auto">
                                    <span className="font-unbounded font-semibold tracking-widest text-foreground group-hover:text-background transition-colors duration-500" style={{ fontSize: "0.75rem" }}>
                                        {dict.landing.penutup.cta}
                                    </span>
                                    <span className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-swiss-red group-hover:border-transparent transition-colors duration-500">
                                        <svg className="w-4 h-4 text-foreground group-hover:text-white rotate-[-45deg] group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                </Link>
                            </Magnetic>
                        </div>
                    </div>

                    {/* Bottom Access Link */}
                    <div className="pt-8 border-t border-foreground/10 mt-auto flex justify-start z-30">
                        <Magnetic strength={0.15}>
                            <Link 
                                href="/story" 
                                className="group inline-flex items-center gap-4 border-b border-foreground hover:border-swiss-red pb-2 transition-colors duration-300"
                            >
                                <span className="font-mono text-[10px] md:text-xs font-black tracking-[0.25em] text-foreground group-hover:text-swiss-red transition-colors duration-300">
                                    {dict.landing.penutup.inquire}
                                </span>
                            </Link>
                        </Magnetic>
                    </div>

                </div>
                
                {/* Environmental lines */}
                <div className="absolute top-0 left-[5%] lg:left-[8%] w-[1px] h-full bg-foreground/5 pointer-events-none" />
                <div className="absolute top-0 right-[5%] lg:right-[8%] w-[1px] h-full bg-foreground/5 pointer-events-none" />
                
            </section>
        </div>
    );
}
